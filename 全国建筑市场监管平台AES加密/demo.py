#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/19 15:32
# @File     : demo.py
# @Project  : pythonProject

import requests
from Crypto.Cipher import AES
import json
url = 'http://jzsc.mohurd.gov.cn/api/webApi/dataservice/query/comp/list?pg=2&pgsz=15&total=0'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38'
}
response = requests.get(url, headers=headers).text
f = 'jo8j9wGw%6HbxfFn'  # 秘钥
m = '0123456789ABCDEF'  # 偏移值
# 转码  utf-8?  字节 16进制
m = bytes(m, encoding='utf-8')
f = bytes(f, encoding='utf-8')
# 创建一个AES算法 秘钥  模式 偏移值
cipher = AES.new(f, AES.MODE_CBC, m)
# 解密

decrypt_content = cipher.decrypt(bytes.fromhex(response))
result = str(decrypt_content, encoding='utf-8')

# OKCS7 填充
length = len(result)  # 字符串长度
unpadding = ord(result[length - 1])  # 得到最后一个字符串的ASCII
result = result[0:length - unpadding]
# dupms json.dumps()  dict  格式 json的
result = json.loads(result)['data']['list']
# {"键":"值"}
for i in result:
    print(i)
