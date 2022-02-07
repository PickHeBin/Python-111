import aiohttp
import asyncio
import requests
import redisUtil
from feapder import Request
from lxml import etree


class Dangdang(object):

    def __init__(self):
        self.start_url = 'http://category.dangdang.com/?ref=www-0-C'
        self.redis = redisUtil.RedisUtil()
        self.mysql = None
        # 第一分类
        self.sort_one_list = []
        # 第二分类
        self.sort_two_list = []
        # 第三分类
        self.sort_three_list = {
            'text': [],
            'url': []
        }
        self.session = None

    def start_request(self):
        """
        初始请求
        """
        response = None
        while (True):
            self.proxies = {
                "http": self.redis.srandmember('ipList'),
                # "https": "3.10.246.23",
            }
            try:
                response = Request(url=self.start_url, proxies=self.proxies).get_response()
                break
            except Exception as e:
                response = Request(url=self.start_url, proxies=self.proxies).get_response()

        self.start_parse(response)

    def start_parse(self, response):
        """
        初始请求的解析
        """
        div_list = response.xpath('//*[@class="classify_books"]')
        for div in div_list:
            sort_one = div.xpath('./div[1]/h3/a/text()').extract_first()
            self.sort_one_list.append(sort_one)

            sort_two = div.xpath('./div[contains(@class,"classify_kind")]/div/a/text()').extract()
            self.sort_two_list.extend(sort_two)

            sort_three_text = div.xpath(
                './div[contains(@class,"classify_kind")]/ul/li[@name="cat_3"]/a/text()').extract()
            sort_thre_url = div.xpath('./div[@class="classify_kind"]/ul/li[@name="cat_3"]/a/@href').extract()
            self.sort_three_list['text'] = sort_three_text
            self.sort_three_list['url'] = sort_thre_url

        self.request_run(self.sort_three_list['url'])

        # TODO 给第一分类第二分类写入数据库

    async def request_three_url(self, url: str):
        """
        第三分类爬取书籍
        """
        proxy = self.redis.srandmember('ipList')
        # TODO aiohttp代理ip没有爬取
    # async with aiohttp.ClientSession() as session:
        async with self.session.get(url=url, proxy=proxy) as resp:
            html = await resp.text()
            tree = etree.HTML(html)
            # 书籍url
            url_list = tree.xpath('//*[@id="search_nature_rg"]/ul/li/p[1]/a/@href')
            for book in url_list:
                self.redis.saddredis('book_list', book)

    def request_run(self, url_list: list):
        print(url_list)
        self.session = aiohttp.ClientSession()
        loop = asyncio.get_event_loop()  # 获取事件循环
        tasks = [self.request_three_url(url) for url in url_list]  # 把所有任务放到一个列表中
        loop.run_until_complete(asyncio.wait(tasks))  # 激活协程
        loop.close()  # 关闭事件循环

    def run(self):
        self.start_request()


if __name__ == '__main__':
    dangdang = Dangdang()
    dangdang.run()
