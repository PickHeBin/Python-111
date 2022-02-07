#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/28 13:19
# @File     : demo.py
# @Project  : pythonProject


import requests
from lxml import html
import pandas as pd


url = 'https://www.zhipin.com/job_detail/?query=Python%E7%88%AC%E8%99%AB%E5%B7%A5%E7%A8%8B%E5%B8%88&city=100010000&industry=&position='
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    # 'Cookie': 'lastCity=101250100; acw_tc=0bdd344616406679505785770e01a51c89e1860bf137caf28e45faa9f5dad2; __zp_seo_uuid__=cdaed3cd-4b1c-430c-bcf2-24837f95fdcf; __g=-; __l=r=https%3A%2F%2Fwww.google.com%2F&l=%2Fwww.zhipin.com%2Fchangsha%2F&s=1&g=&s=3&friend_source=0; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1639491761,1639743832,1640504828,1640667952; __c=1640667952; __a=71825392.1639491761.1640504829.1640667952.16.4.8.16; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1640668036; __zp_stoken__=18aedAGI3Skh9N1ZkeE12RxplYnFmZQJSI2NRHHtCcywMR2EPYj8kTVNGWmlrF1dhPEcPE0lSNkdJawMsPFtcTm86RSkhM2d2TDUoYxlQJkEGIEtaEg5Iay89Ig9dcAMqfn49ZzhbND91eQc%3D',
    'Cookie': 'lastCity=101250100; __zp_seo_uuid__=cdaed3cd-4b1c-430c-bcf2-24837f95fdcf; __g=-; __l=r=https%3A%2F%2Fwww.google.com%2F&l=%2Fwww.zhipin.com%2Fchangsha%2F&s=1&g=&s=3&friend_source=0; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1639491761,1639743832,1640504828,1640667952; acw_tc=0bccaf1d16406700665666842ed78f593d4797807e54c99eafdc9fe02c8a78; __c=1640667952; __a=71825392.1639491761.1640504829.1640667952.18.4.10.18; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1640670067; __zp_stoken__=18aedAGI3Skh9N1JGIVdvRxplYnF%2BX1wbLF9RHHtCc2xATysHaD8kTVNGWnNMW2FhPEcPE0lSXjZJSnQsOFBUdTZCEjkuPHEvJSMuYxlQJkEGIEtsXilSay89Ig9degMqfn49ZzhbND91eQc%3D',
    'Host': 'www.zhipin.com',
    'Referer': 'https://www.zhipin.com/job_detail/?query=Python%E7%88%AC%E8%99%AB%E5%B7%A5%E7%A8%8B%E5%B8%88&city=100010000&industry=&position=',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
}
response = requests.get(url, headers=headers).content.decode()
# print(response)
html1 = html.etree.HTML(response)

title = html1.xpath('//div[@class="job-title"]/span/a/text()')
price = html1.xpath('//span[class="red"]/text()')
experience = html1.xpath('//div[@class="job-limit clearfix"]/p/text()')
city = html1.xpath('//span[@class="job-area"]/text()')
print(title)
list1 = []
for t, p, e, c in zip(title, price, experience, city):
    print(t, p, e, c)
    items = {}
    items['标题'] = t
    items['薪资'] = p
    items['经验'] = e
    items['城市'] = c
    list1.append(items)


df = pd.DataFrame(list1)
df.to_csv('./boss直聘.csv')
