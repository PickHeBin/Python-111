# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @File     : demo1.py
# @Project  : PythonReversePath
import execjs
import requests

cookies = {
    '__jsluid_s': '97af509942cd93cc8f083e02d66ab7ff',
    'SUNWAY-ESCM-COOKIE': 'c6eb1668-e72c-4549-947f-ce6fcc3e2a13',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.5',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://ec.minmetals.com.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ec.minmetals.com.cn/open/home/purchase-info/?tablndex=1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-GPC': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}

# response = requests.post('https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers).text
# print(response)
response = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTAWyCYDeeLKRK/32RGmDwwX3axFUj4ByoE0+uDkc5tPVdYqSJ4kgdmcDTckyMaHjPgLIqNBZSttYUc4v8uHl2Dgn9InlBgwPx1jgDKKKjtbbfD1VsWDL9dNuFtPpz2DmK71YdKisJigBjL3vvAu9W8E2k5t7u5SS97ZrW2lenyQIDAQAB'
parmes = execjs.compile(open('./demo1.js', 'r', encoding='utf-8').read()).call('main123', response)

json_data = {
    'param': parmes,
}

response1 = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()
print(response1)
