#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2022/1/6 16:17
# @File     : demo1.py
# @Project  : pythonProject

import requests
import time

# url:小说界面的链接
url = 'https://dushu.baidu.com/pc/detail?gid=4295084047'

index = url.find('gid=')
book_id = url[index+4:]
novel_url = 'http://dushu.baidu.com/api/pc/getCatalog?data={"book_id":"%s"}'%book_id
data = requests.get(novel_url).json()
fp = open('novel.txt', 'w', encoding='utf-8')

for item in data['data']['novel']['items']:
    if item.get('price_status') == '0':
        n_title = item.get('title')
        n_cid = item.get('cid')
        last_url = 'http://dushu.baidu.com/api/pc/getChapterContent?data={%22book_id%22:%22' + book_id \
                   + '%22,%22cid%22:%224345224252|' + n_cid + '%22,%22need_bookinfo%22:0}'
        content = requests.get(last_url).json()['data']['novel']['content']
        fp.write(n_title + '\n\n')
        fp.write(content + '\n\n\n')
        print('成功爬取：', n_title)
        time.sleep(0.5)
    elif item.get('price_status') == '1':
        n_title = item['title']
        print('付费章节，无法爬取：', n_title)
fp.close()