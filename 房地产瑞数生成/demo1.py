# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @File     : demo1.py
# @Project  : PythonReversePath

import requests

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.7',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Proxy-Connection': 'keep-alive',
    'Referer': 'http://www.fangdi.com.cn/new_house/new_house_list.html',
    'Sec-GPC': '1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
}

response = requests.get('http://www.fangdi.com.cn/new_house/new_house_list.html', headers=headers, verify=False).text
with open('./123.html', 'w', encoding='utf-8') as f:
    f.write(response)

