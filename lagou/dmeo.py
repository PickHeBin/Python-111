#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/28 13:46
# @File     : dmeo.py
# @Project  : pythonProject


import requests
import pandas as pd


list1 = []
for page in range(1, 51):
    url = 'https://www.lagou.com/jobs/v2/positionAjax.json'
    data = {
        'first': 'true',
        'needAddtionalResult': 'false',
        'city': '全国',
        'px': 'new',
        'pn': page,
        'cl': 'false',
        'fromSearch': 'true',
        'kd': 'python'
    }
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Cookie': '_ga=GA1.2.130989927.1639055786; user_trace_token=20211209211626-e8602162-7ac7-4d4f-a99e-7ffe96138b85; LGUID=20211209211626-2287d781-73cf-4d95-a019-72a7bb6e3d0c; RECOMMEND_TIP=true; index_location_city=%E5%85%A8%E5%9B%BD; JSESSIONID=ABAAAECAAEBABIIA379C041F36F50A499EE7512EF9A7488; WEBTJ-ID=20211228134510-17dff923094177-0241b104335f1b-4303066-2073600-17dff923095e0e; X_HTTP_TOKEN=f88b58366829dd050130760461e49303b3d13d6099; privacyPolicyPopup=false; PRE_UTM=; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2F; _gat=1; _gid=GA1.2.1114794992.1640670312; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1640152155,1640178794,1640263306,1640670312; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1640670312; sensorsdata2015session=%7B%7D; LGSID=20211228134511-60d3118b-f92a-4bd9-86fd-1d69ad14e458; PRE_HOST=www.google.com; PRE_SITE=https%3A%2F%2Fwww.google.com%2F; TG-TRACK-CODE=index_search; LGRID=20211228134526-eeca2f28-6bcd-4e25-9f9c-63256cd1e09f; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217d9f5680f212e-01f334f0d38ed2-978183a-2073600-17d9f5680f3a11%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24os%22%3A%22Windows%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%2296.0.4664.110%22%7D%2C%22%24device_id%22%3A%2217d9f5680f212e-01f334f0d38ed2-978183a-2073600-17d9f5680f3a11%22%7D',
        'Host': 'www.lagou.com',
        'Origin': 'https://www.lagou.com',
        'Referer': 'https://www.lagou.com/wn/jobs?cl=false&fromSearch=true&kd=python',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }
    response = requests.post(url, headers=headers, data=data).json()
    content = response['content']['positionResult']['result']
    for i in content:
        items = {}
        items['创建时间'] = i['createTime']
        items['地址'] = i['city']
        items['岗位'] = i['positionName']
        items['学历'] = i['education']
        items['技能要求'] = i['industryField'].split('｜')
        items['工作经验'] = i['workYear']
        items['薪资水平'] = int(i['salary'].split('-')[1].replace('k', '000'))
        list1.append(items)

df = pd.DataFrame(list1)
print(df)
df.to_excel('示例数据.xlsx')


