# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @Time     : 2022/9/1 16:04
# @File     : demo1.py
# @Project  : pythonProject
import requests
import re
import base64
import execjs


cookie1 = execjs.compile(open('./123.js', 'r', encoding='utf-8').read()).call('main123')


headers = {
    'authority': 'www.ontariogenomics.ca',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    # Requests sorts cookies= alphabetically
    'cookie': cookie1,
    'pragma': 'no-cache',
    'referer': 'https://www.ontariogenomics.ca/news-events/',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
}

response = requests.get('https://www.ontariogenomics.ca/news-events/', headers=headers).text
print(response)



# response = re.sub('\s', '', response)
# basedata = re.findall("S='(.*?)'", response)[0]
# decrypt = base64.b64decode(basedata).decode()
# print(decrypt)