# https://www.cnpcbidding.com/html/1/index.html


import requests
from queue import Queue

class Crawl():

    def __init__(self):
        # 种子URL
        self.base_url = 'https://www.cnpcbidding.com/cms/pmsbidInfo/listPageOut'
        # 拼接
        self.base = "https://36kr.com"
        # 解析规则
        self.rule = {
            'detail_data':'',
        }
        # 定义队列
        self.list_queue = Queue()

        # xpath
        self.maps = lambda x: x[0] if x else x

    # 任务模块
    def spider(self,page):
        headers = {
            "Cookie": "JSESSIONID=7BD196331B585598779604CC324711F5",
            "Host": "www.cnpcbidding.com",
            "Origin": "https://www.cnpcbidding.com",
            "Referer": "https://www.cnpcbidding.com/html/1/index.html",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
}
        data = {
            "categoryId": "201",
            "pageNo": page,
            "pageSize": 15,
            "pid": "198",
            "projectType": "",
            "shiXinName": "",
            "title": "",
            "url": "./list.html"
        }
        res = requests.post(url=self.base_url,headers=headers,json=data)
        res.encoding = 'utf-8'
        self.list_loop(res.json())

    # 业务模块
    def list_loop(self,js_data):
        self.parse(js_data)

    # 解析模块
    def parse(self,data):
        for item in data.get('list'):
            dic = dict()
            dic['dateTime'] = item['dateTime']
            dic['projectname'] = item['projectname']
            print(dic)

    # 保存模块
    def save(self):
        pass

    # 入口模块
    def run(self):
        for i in range(1,6):
            self.spider(i)
            print(f'已采集{i}页')

if __name__ == '__main__':
    Crawl().run()




