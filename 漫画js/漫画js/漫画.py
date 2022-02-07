#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/1/13 16:18
# @Author  : BaiChuan
# @File    : 漫画.py


# https://www.soman.com/comic.html?comicname=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83&source=kuku%E5%8A%A8%E6%BC%AB

import requests
import os
import re

url = 'https://api.soman.com/soman.ashx?action=getsomancomicdetail&comicname=%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83&source=kuku%E5%8A%A8%E6%BC%AB'
header = {'user-agent': "Opera/9.80 (Windows NT 6.0; U; en) Presto/2.8.99 Version/11.10"}


def get_total_chapter():
    data = requests.get(url, headers=header).json()
    chapter_total = data['Comics'][3]['Chapters']
    for item in chapter_total:
        yield item['Url'], item['Name']


def save_items(url, Name, page):
    path = r"E:\python_project\vip课程\漫画js\漫画\\" + Name
    if not os.path.exists(path):
        os.makedirs(path)
    r = requests.get(url, headers=header)
    with open(path + "/" + str(page) + '.jpg', 'wb') as f:
        f.write(r.content)


def get_all_img():  # 得到每话总图片数
    src_list = ["m200911d", "m201001d", "m201304d", "k0910k"]
    for Url, Name in get_total_chapter():
        data = requests.get(Url, headers=header).content.decode('gbk')
        total_page = re.findall('共(.*?)页', data)[0]

        for page in range(1, int(total_page) + 1):
            page_url = Url.split('1.')[0] + "{}.htm".format(page)
            page_htm = requests.get(page_url, headers=header).content.decode('gbk')
            src = re.findall("<IMG SRC='(.*)'></a>", page_htm)[0]
            src = 'https://v2.kukudm.com/' + src.split('+m201304d+"')[1]
            print(src)
            save_items(src, Name, page)
            print('第{}第{}页爬取完成'.format(Name, page))


if __name__ == '__main__':
    get_all_img()


"""
在学习爬虫的道路上越走越偏？ 简单的没兴趣难得不懂？
    柏汌老师带你迈出学习js的第一步
课题：
    python爬虫进阶 -- 漫画数据入门js解析

主讲老师: 柏汌老师
直播时间：14:30

课程内容:
 1.图片数据的双重解析
 2.解析图片网址的加密
 3.保存图片数据

"""
