#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/28 14:12
# @File     : demo.py
# @Project  : pythonProject


import pandas as pd
import requests


list1 = []
for page in range(1, 51):
    url = f'https://search.51job.com/list/000000,000000,0000,00,9,99,python,2,{page}.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare='
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        # 'Cookie': '_uab_collina=164067192622033876462843; partner=www_google_com; privacy=1640671920; guid=d3523518dddd8bd7b7965d190ad4301c; acw_tc=2f624a3916406719228003438e3915a063d89bb6e38d817975862124347206; acw_sc__v2=61caaab452c017764723825d655ac1416798b7de; nsearch=jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D; search=jobarea%7E%60000000%7C%21ord_field%7E%600%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FApython%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21; ssxmod_itna=7q+xBDRD0APQq0dD=eYOYkGkYGCiDcApxgAPrD05xYeGzDAxn40iDtxodOAD6ef0GIWGWGSw+axTRRDAW4piCpqe/GDB3DEx06fiQDxii9DCeDIDWeDiDG4GmB4GtDpxG=Djjtz1M6xYPDEjKDaxDbDin8pxGCDeKD0xwFDQKDu69DdjK+82Y1W3vqYbDxLxG1F40HGAf4Lxgf6fGzYt8ERBG4DB4XeADxMF85ee73px0kYq0O9ryzCrgUU2y1xSwWYYxeZGi7ocqdGBW5tG2eeG0DwyxbF0=l3DDWVF29eYD===; ssxmod_itna2=7q+xBDRD0APQq0dD=eYOYkGkYGCiDcApxgAgDnKS4xDsGGeDLYOmYNQBAYcfYqApO8lPCIh+4pgEY+k2CWnivpl3bB5RjtmhDrXseiYqEbN1XnbOFcu7XICk8QAaT/kyuXKsF5qqFS4P8OQ5iG3o9EpO9OomIrQim2h7FWIsSAY5GmouF33Ndkj2e6LpKi6r1ltCWwLyKq9dwqAHEc9QhwYpW3qFc3YbT4b+/rE1udeFrDn2e+RpmA5zxr4ODxawcALEvrERGQ8HvWKmH30W=6n20b=L6IDiKsjE6ILEXXCyoXjldM182UDftgCm22pcrL0cN8YwC2YZxeoO658f1O=oZXLEi44ex4QhEeeIUiRPhZwTzt01UXWi5U53jvjERInpxPUzeUFKIB0u92uO95dxogpvnmv5=LmRKzUnT65v9Rl7YdpPWDG2KG4bDr8nDQiHSDGn3Hk2I353MGc00+/he0FgYGKA4F9nwI2kxe5IkgQDDFqD+EDxD===',
        'Cookie': '_uab_collina=164067192622033876462843; partner=www_google_com; privacy=1640671920; guid=d3523518dddd8bd7b7965d190ad4301c; acw_tc=2f624a3916406719228003438e3915a063d89bb6e38d817975862124347206; nsearch=jobarea%3D%26%7C%26ord_field%3D%26%7C%26recentSearch0%3D%26%7C%26recentSearch1%3D%26%7C%26recentSearch2%3D%26%7C%26recentSearch3%3D%26%7C%26recentSearch4%3D%26%7C%26collapse_expansion%3D; search=jobarea%7E%60000000%7C%21ord_field%7E%600%7C%21recentSearch0%7E%60000000%A1%FB%A1%FA000000%A1%FB%A1%FA0000%A1%FB%A1%FA00%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA99%A1%FB%A1%FA9%A1%FB%A1%FA99%A1%FB%A1%FA%A1%FB%A1%FA0%A1%FB%A1%FApython%A1%FB%A1%FA2%A1%FB%A1%FA1%7C%21; acw_sc__v2=61caad0d39b8445f11c56e6f1470714f76b6e4f4; acw_sc__v2=61caad0d39b8445f11c56e6f1470714f76b6e4f4; ssxmod_itna=iqGxyDRiiQ94cjDz=IdG=pkSUYAPGCmGUYxBqb4iNDnD8x7YDvmz5D0hibxghDvhTVDQqEi3bxmif5BzmSbYpr5Oi4GLDmKDyY+i4toD48KGwD0eG+DD4DWDmeHDnxAQDjxGP9R6sy=Dbxi3jxiaDGeDe2IODY5DhxDC6APDwx0Cj1h4jpAF=FHpurW+djDkD7ypDlcqLbDkrRfLejH+m8SderDDUnL5d0LEhjGGv7KDXhQDv1H1l2apl/FsBoYNqC44qY2tYYKTMDhTNe4rOi24YChThGmB15V4DDP0li+DD===; ssxmod_itna2=iqGxyDRiiQ94cjDz=IdG=pkSUYAPGCmGUD8ueD5m5D/zWDFxoCktm6POz5L1o9G7/DbYFfs2DnRtmM7zWHQwKUn40QT581vrN7cU7idh=xqeO9drMPdnOfo=SQ9PKxoiApy1XxUO=QQi3wzdLgKjLAe8t0SrXjeRf+7kIAAnv1QTYhbdA3rdEjALrGzBbz+g3HACRO4WNGKYmjFAhmlDYebxopD8cj723scS=+wTEq5bNAQ87p=/Wmpt3p7j8f=KA65Qg7tPhL8gB7SzvL4rAaOIb2ZKOPcUtaMpR2YyP+=ASuToeah2B0eM/91eT5eAFRvEKRZnmx9HqKKyK44ii4kegl0ZAWXWWZn4YuYpm54QGrD2e5b335KLIUYimURPcyF9ubWGuFDbQ42U+aSggUoWAw/m4WlwFKeilFb=8i6ER/4TM27Soib8CU8plKNHbAA8W93b4kxK38QxDKde=7xV0YN7D42xB0=6Z5IbUpTeM0DhDDLxD2YGDD==',
        'Host': 'search.51job.com',
        'Referer': 'https://search.51job.com/list/000000,000000,0000,00,9,99,python,2,15.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare=',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }
    try:
        response = requests.get(url, headers=headers).json()
        engine_jds = response['engine_jds']
        for i in engine_jds:
            items = {}
            items['创建时间'] = i['issuedate']
            items['地址'] = i['workarea_text']
            items['岗位'] = i['job_name']
            items['学历'] = i['attribute_text'][2]
            items['工作经验'] = i['attribute_text'][1]
            items['薪资水平'] = i['providesalary_text']
            list1.append(items)
            print(items)
    except Exception as e:
        print(e)


df = pd.DataFrame(list1)
df.to_csv('51_job.csv')


