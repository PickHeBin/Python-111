#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/27 20:21
# @File     : demo.py
# @Project  : pythonProject
'''
 d = window.Rohr_Opt.reload(p);

_token  值 : d
encode   decode

推荐系统 Java Python
大数据平台 数据建模   jython

美团:

3.7 - 3.10

金融的 (大数据开发  风控(预测))
岔开   麻烦 瓶颈   复杂  -> Python使用
分类 机器学习 -> Java (迁移学习  )

NLP
计算机视觉
算法 (学历)

内部学费





'''
import base64
import zlib
import time
import json

import requests

string = "eJxFjl1vqkAYhP/L3kJkd12+THrRKtWFKgWkKk0v+BKoQJFdKeTk/PezJm1O8iYz78xzMX9ATzOwQBCaEMpgyHuwAGgGZxqQAWei0QjUoK6bJiZEBun/zMAqQaoug6R/W4HFO1INVUYq/LgnvgjekYmhjKAhol9/rzERd6eogEDJeccWisLKWZNX/Ba3s/SrUYRnZaWIFUCgzV6gQi8/Gv8o//23YrZgWVW0wuX2d/2Zot24evTK4xAVRHI3vr3xB7vkQXoZKVza3WBHF5/50na0qrm3Is7S2rwVo1ubeful2HhplVN4yrzj03l6UnPiUHIeeiU/f4YTDq2B1mjyW+tAotqTysOW1S9jxcKo7fxbE5n60t64B0kzrg1V7TB4vcYnMyfJLugescYhDeq9lyTu/MjoemjwemqMwaG9Xsxfukt9fe6/dcOIX6G+3pPdkWc0aG2Yms4uQWOzvqaZ2t4kmJ220eBjjtApSUJNKWLkuN7DA/j7D2IzjVM="

token_decode = base64.b64decode(string.encode())
# 二进制解压
token_string = zlib.decompress(token_decode).decode('utf-8')
# 时间戳
cts = round(time.time() * 1000)
ts = round(time.time() * 1000)

json_data = json.loads(token_string)
print(json_data)


def decode_sign(token_string):
    # base编码
    encode1 = str(token_string).encode()
    # 参数 压缩成 特殊的编码 ->
    compress = zlib.compress(encode1)  # 二进制压缩
    b_encode = base64.b64encode(compress)
    # 转变 str
    e_sign = str(b_encode, encoding='utf-8')
    return e_sign


sign_list = []
# 请求参数
sign_dict = {
    'cityName': '上海',
    'cateId': 0,
    'areaId': 0,
    'sort': '',
    'dinnerCountAttrId': '',
    'page': 1,
    'userId': '2592477781',
    'uuid': '9a724d1ec87848a7b2fb.1642142544.1.0.0',
    'platform': 1,
    'partner': 126,
    'originUrl': 'https://sh.meituan.com/meishi/',
    'riskLevel': 1,
    'optimusCode': 10
}

for key, value in sign_dict.items():
    sign_list.append(f'{key}={value}')
sign_str = '&'.join(sign_list)
token123 = decode_sign(sign_str)
# print(token123)

token_dict = {
    "rId": 100900,
    "ver": "1.0.6",
    "ts": int(round(time.time() * 1000)),
    "cts": int(round(time.time() * 1000) + 2000),
    "brVD": [
        1585,
        150
    ],
    "brR": [
        [
            1920,
            1080
        ],
        [
            1920,
            1050
        ],
        24,
        24
    ],
    "bI": [
        "https://sh.meituan.com/meishi/",
        ""
    ],
    "mT": [],
    "kT": [],
    "aT": [],
    "tT": [],
    "aM": "",
    "sign": token123
}
token_encode = decode_sign(token_dict)
sign_dict['_token'] = token_encode

url = 'https://sh.meituan.com/meishi/api/poi/getPoiList?'
headers = {
    'Accept': 'application/json',
    'Cookie': '_lxsdk_cuid=17db27be462c8-0dffdebc509145-978153c-1fa400-17db27be462c8; ci=10; rvct=10; _ga=GA1.2.1360291387.1640078940; uuid=9a724d1ec87848a7b2fb.1642142544.1.0.0; _lx_utm=utm_source%3Dgoogle%26utm_medium%3Dorganic; __mta=245610427.1639377008883.1640667089555.1642142545784.19; client-id=ca0ffaa2-d5e4-408e-af4a-44d3229f4c25; mtcdn=K; userTicket=TjAcrXdoLnIfakuZLCVfjiUylUCDUvZSaRWtlGjQ; _yoda_verify_resp=fYoLW21EOsYKUPGy%2F4HQPUGZZS11YoZmBwijqYuzpH%2BZ8X8YpxxkvLCfY5sFAubMwS1vNjZ8AEp%2FGfsZXZZe4a3DtoY8ME9p6gqYiGyrN9%2FdhZEDMvK8SpbnLWVHJ593ERVaBwNP7Oa5Uuy4ttwGbGQHKc0BoUkAO3Px%2FdCGUicqc4JGVuseGbLGK5m7njPxUWOovNdschFt2sYmYoy4C3OlNj9BGsMsUslAaA8aBd31c%2FPbGtGiqg0mI2M7Ic%2FyDcMwn%2FXqPL%2FRFkIXoAv50VeaN3NqKCZi0UZSnGkVtouyQFqMATYdRoO%2FmR2wvg4ax0VL1KJ3TLz1jxNfGVeURYgjzYKyVsQQPj8ZqhObA9CWT8TbKgEvE7xRFiTlZa80; _yoda_verify_rid=1490ca44c8815010; u=2592477781; n=agT294579463; lt=cPhTuNce6QDQ1cyKqtC4N5Nrd_8AAAAA5Q8AAG0ZktJ9IEIltsTpZXJLKzj8eq0KKGwQR8CNl5SoGKXkt5-YY8fLTKSXNuW52dnJgg; mt_c_token=cPhTuNce6QDQ1cyKqtC4N5Nrd_8AAAAA5Q8AAG0ZktJ9IEIltsTpZXJLKzj8eq0KKGwQR8CNl5SoGKXkt5-YY8fLTKSXNuW52dnJgg; token=cPhTuNce6QDQ1cyKqtC4N5Nrd_8AAAAA5Q8AAG0ZktJ9IEIltsTpZXJLKzj8eq0KKGwQR8CNl5SoGKXkt5-YY8fLTKSXNuW52dnJgg; lsu=; token2=cPhTuNce6QDQ1cyKqtC4N5Nrd_8AAAAA5Q8AAG0ZktJ9IEIltsTpZXJLKzj8eq0KKGwQR8CNl5SoGKXkt5-YY8fLTKSXNuW52dnJgg; firstTime=1642149063336; unc=agT294579463; _lxsdk_s=17e57b589de-8fd-51c-f1f%7C%7C3; _lxsdk=17db27be462c8-0dffdebc509145-978153c-1fa400-17db27be462c8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
}
response = requests.get(url, headers=headers, params=sign_dict).text
print(response)

