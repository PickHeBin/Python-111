# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @Time     : 2022/8/28 22:12
# @File     : demo11.py
# @Project  : pythonProject
import requests
import execjs

cookies = {
    'JSESSIONID': '31AA0CC7F993ED1F1E20BA41E5B5CC0B',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Content-Type': 'application/octet-stream',
    # 'Cookie': 'JSESSIONID=31AA0CC7F993ED1F1E20BA41E5B5CC0B',
    'Origin': 'http://www.spolicy.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
}
ctx = execjs.compile(open('./123.js', 'r', encoding='utf-8').read()).call('main111')
print(ctx)

data = ctx

response = requests.post('http://www.spolicy.com/info_api/policyType/showPolicyType', cookies=cookies, headers=headers, data=data, verify=False)
print(response)