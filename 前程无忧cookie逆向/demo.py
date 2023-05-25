# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @File     : demo.py
# @Project  : PythonReversePath
# 头部
import requests


url = 'https://www.ontariogenomics.ca/news-events/'
# 静态cookie反爬
headers = {
    'cookie':'sucuri_cloudproxy_uuid_cb9c4f769=1b43a11d1c6449a7d6e1d8cf65776430;path=/;max-age=86400',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
}
response = requests.get(url, headers=headers).text
print(response)
