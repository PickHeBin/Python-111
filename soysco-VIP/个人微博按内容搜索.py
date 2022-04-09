"""

个人微博按内容搜索，需要及时更换cookie才能获取新的数据。

下期制作单个微博所有评论内容的获取

"""

# 测试的时候发现未登录也能进入个人页面  例如 https://weibo.com/u/5646192129  尝试打开,但是需要更多数据需要登录才行，否则只给少量数据（大概两页）
import os
import re

import requests
import time
import csv
from os.path import exists


class Weibo:
    def __init__(self, referer):
        self.referer = referer
        self.headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            'referer': f'https://weibo.com/u/{referer}',
            'cookie': 'SUB=_2AkMVDaaaf8NxqwJRmf8SxWnkbI1zwwrEieKjUVdBJRMxHRl-yT92qnMStRB6Po2IdU840j-t36MlXRKprvanDZTNYEai; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9W50-PC07TVkN.2rn-Sd1CPe; XSRF-TOKEN=FoHG-s8idLq8p37hAuOqaaUM; WBPSESS=xvhb-0KtQV-0lVspmRtyc8y6CJ9Zuz6J9eTH3N8VfwusUfMeyvbDU5Kd04nH29iZKHIOwVsamNy6VXNcgCDIOeI3Pp1h7-9vPb7UxlCnR3zdDGhjd70UUyK2Q1QTiVS2U6nhk1t10nHVmxEctaiLSYoTtxkQJIItqPX87KRLMIM='
            # cookie 中的 XSRF-TOKEN 必须保持会话，
        }

    def parse_com(self, com_list):
        """提取数据"""
        for com in com_list:
            # print(com)
            created_at = com['created_at']  # 创建时间
            reposts_count = com['reposts_count']  # 转发数
            comments_count = com['comments_count']  # 评论数
            attitudes_count = com['attitudes_count']  # 点赞数
            text_raw = com['text_raw']  # 文章内容
            text_raw = re.sub('\n', ',', text_raw)
            print(created_at, text_raw, {'转发数': reposts_count}, {'评论数': comments_count}, {'点赞数': attitudes_count})
            date = [created_at, text_raw, {'转发数': reposts_count}, {'评论数': comments_count}, {'点赞数': attitudes_count}]
            self.save(date, type)
            print('=============================================================')

    def save(self, date, type):
        """保存数据"""
        path = f'./{self.referer}'
        if not exists(path):
            os.mkdir(path)
        filename = path + os.sep + self.referer + type + '.csv'
        with open(filename, mode='a', encoding='utf-8', newline='') as f:
            csv_write = csv.writer(f)
            csv_write.writerow(date)

    def get_all(self):
        for page in range(1, 300):  # 先测试两页
            url = f'https://weibo.com/ajax/statuses/mymblog?uid={self.referer}&page={page}&feature=0'
            result = requests.get(url, headers=self.headers).json()
            com_list = result['data']['list']
            if com_list:
                self.parse_com(com_list)
                time.sleep(3)
            else:
                print('没有更多内容了~去其他页面看看吧')
                break

    def get_original(self):
        for page in range(1, 300):  # 先测试两页
            url = f'https://weibo.com/ajax/statuses/mymblog?uid={self.referer}&page={page}&feature=1'
            result = requests.get(url, headers=self.headers).json()
            com_list = result['data']['list']
            if com_list:
                self.parse_com(com_list)
                time.sleep(3)
            else:
                print('没有更多内容了~去其他页面看看吧')
                break

    def get_hot_comment(self):
        for page in range(1, 300):
            url = f'https://weibo.com/ajax/profile/myhot?uid={self.referer}&page={page}&feature=2'
            result = requests.get(url, headers=self.headers).json()
            com_list = result['data']['list']
            if com_list:
                self.parse_com(com_list)
                time.sleep(3)
            else:
                print('没有更多内容了~去其他页面看看吧')
                break

    def get_likelist(self):
        for page in range(1, 300):
            url = f'https://weibo.com/ajax/statuses/likelist?uid={self.referer}&page={page}&feature=3'
            result = requests.get(url, headers=self.headers).json()
            com_list = result['data']['list']
            if com_list:
                self.parse_com(com_list)
                time.sleep(3)
            else:
                print('没有更多内容了~去其他页面看看吧')
                break


if __name__ == '__main__':
    # weibo = Weibo('5646192129')  # 传入个人微博id
    weibo = Weibo('5970840199')  # 传入个人微博id
    # 需要下载说明类型微博
    type = input('请输入要下载的微博类型（所有，原创，热门，赞过）：')
    if type == '所有':
        all_comment = weibo.get_all()  # 下载全部微博
    elif type == '原创':
        original_comment = weibo.get_original()  # 下载原创微博
    elif type == '热门':
        original_comment = weibo.get_hot_comment()  # 下载热门微博
    elif type == '赞过':
        original_comment = weibo.get_likelist()  # 下载赞过微博
    else:
        print('请指定正确的范围')
