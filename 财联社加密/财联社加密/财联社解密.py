#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : 财联社解密.py

import requests
import time
from hashlib import sha1
from hashlib import md5


url = 'https://www.cls.cn/nodeapi/telegraphList'
def params_format(params):
    url = ''
    if params:
        if not isinstance(params, dict):
            raise Exception('params必须是字典')  # 不是字典格式抛出异常
        url += '&'.join([str(key) + '=' + str(value) for key, value in params.items()])
        strSplit = url.split('&')
        strSorted = sorted(strSplit)
        strConvert = '&'.join(strSorted)
        s1 = sha1()  # 创建sha1加密对象
        # sha_encrypt = s1.update(data.encode("utf-8"))   #转码（字节流）
        s1.update(strConvert.encode("utf-8"))
        sha_encrypt = s1.hexdigest()
        return sha_encrypt

lastTime = str(int(time.time()))
# print(lastTime)
params = {
    'app':'CailianpressWeb',
    'category':'',
    'lastTime': lastTime,
    'last_time': lastTime,
    'os':'web',
    'refresh_type':'1',
    'rn':'20',
    'sv':'7.5.5',
}

data = params_format(params)
sign = md5(data.encode('utf-8')).hexdigest()
params['sign'] = sign


headers = {
    'Host': 'www.cls.cn',
    'Referer': 'https://www.cls.cn/telegraph',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}
response = requests.get(url, headers=headers, params=params).json()
item = {}
for i in response['data']['roll_data']:
    item['content'] = i['content']
    item['title'] = i['title']

    print(item)




'''
保姆级教程，柏汌老师手把手带你撸js。
    js加密知识柏汌老师揉碎了跟你讲
课题：
        【博斌教育】python爬虫进阶 -- 财联社js逆向解析
   
主讲老师: 柏汌老师
直播时间：20:00
'''


