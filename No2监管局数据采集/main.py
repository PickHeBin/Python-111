import json
import random

import requests

import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen,encoding='utf-8')
import execjs

from fake_useragent import UserAgent
# 导入连接数据库的包
from pymysql import *


class Crawl():

    def __init__(self):
        pass


    def spider(self,page):
        headers = {'user-agent':UserAgent().random}
        url = f'http://jzsc.mohurd.gov.cn/api/webApi/dataservice/query/comp/list?pg={page}&pgsz=15&total=450'
        res = requests.get(url=url,headers=headers)
        index = False
        while not index:
            try:
                self.parse(res.text)
                index = True
            except:
                random.uniform(2, 3)
                index = False


    def parse(self,data):

        with open('解密.js','r',encoding='utf-8')as f:
            js_data = execjs.compile(f.read()).call('h',data)
        # print(js_data)
        js_data = json.loads(js_data)

        items = js_data.get('data').get('list')
        for item in items:
            dic = dict()
            try:
                dic['企业名称'] = item['QY_NAME']
            except:
                dic['企业名称'] = ''
            try:
                dic['法定代表'] = item['QY_FR_NAME']
            except:
                dic['法定代表'] = ''
            try:
                dic['注册地'] = item['QY_REGION_NAME']

            except:
                dic['注册地'] = ''
            print(dic)
            self.save(dic)
        return js_data

    def save(self,data):
        # 连接数据库
        con_obj = connect(host='192.168.100.109',user='root',password='Pyy2726903703',database="work",charset='utf8mb4')
        # print('连接数据库成功')

        # 创建游标对象
        mysql_ = con_obj.cursor()

        # 插入数据
        keys = ', '.join(data.keys())
        values = ', '.join(['% s'] * len(data))
        sql= 'INSERT INTO num2({keys}) VALUES ({values})'.format( keys=keys, values=values)


        # 提交事务
        try:
            if mysql_.execute(sql, tuple(data.values())):
                # print('插入数据完成')
                con_obj.commit()
        except:
                print('Failed')
                con_obj.rollback()

        # 关闭与数据库的连接
        mysql_.close()
        con_obj.close()


    def run(self):
        for i in range(0,30):
            print(f'已采集{i+1}页')
            self.spider(i)
            random.uniform(1, 2)


if __name__ == '__main__':
    Crawl().run()

