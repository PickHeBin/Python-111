#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : js代码混淆.py


import hashlib
import time
import base64
from typing import List, Any
import requests

# 忽略requests证书警告
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)



INDEX_URL = 'http://dynamic6.scrape.cuiqingcai.com/api/movie?limit={limit}&offset={offset}&token={token}'
LIMIT = 10
OFFSET = 0


def get_token(args):
    timestamp = str(int(time.time()))
    args.append(timestamp)
    sign = hashlib.sha1(','.join(args).encode('utf-8')).hexdigest()
    return base64.b64encode(','.join([sign, timestamp]).encode('utf-8')).decode('utf-8')


args = ['/api/movie']
token = get_token(args)
index_url = INDEX_URL.format(limit=LIMIT, offset=OFFSET, token=token)
response = requests.get(index_url, verify=False)
print(response.json())




'''

爬虫加密层出不穷，还在被js的混淆代码搞的头昏眼花？
    来课堂让你也能轻轻松松掌握js混淆的解决办法

课题：
    【博斌教育】Python爬虫进阶 — 票房js代码混淆

主讲老师: 柏汌老师
直播时间：20:00


'''



