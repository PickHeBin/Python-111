#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/31 15:47
# @File     : dmeo.py
# @Project  : pythonProject


import requests
# from lxml import html
from pyquery import PyQuery as pq
import re
import os


def Tools(url):
    '''
    请求工具函数
    :param url: 请求地址
    :return: response(响应状态)
    '''
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    return response


def index():
    '''
    首页
    :return:
    '''
    url = 'https://www.jj20.com/bz/ysbz/'
    response1 = Tools(url).content.decode('gbk')
    doc = pq(response1)
    picbz = doc('.picbz li').items()
    picbz1 = doc('.picbz li a').items()
    for i, p in zip(picbz, picbz1):
        path = './' + i.text()
        if not os.path.exists(path):
            os.makedirs(path)
        # print(path)
        numberis = int(re.findall(r'(\d+张)', i.text())[0].replace('张', ''))
        detailsUrl = p.attr('href').split('/')[-1].split('.')[0]
        Details(numberis, detailsUrl, path)


def Details(numberis, id1, path):
    '''
    详情页
    :param numberis: 最大页数
    :param id1: 详情页id编号
    :param path: 路径
    :return:
    '''
    for i in range(2, numberis + 1):
        url = f'https://www.jj20.com/bz/ysbz/ysqt/{id1}_{i}.html'
        response = Tools(url).content.decode('gbk')
        response1 = re.sub('\s', '', response)
        kk123 = re.findall(r"varid='(.+?)';", response1)
        for ping in kk123:
            imgurlCC = 'https://plc.jj20.com' + ping
            imgtitle = ping.split('-')[-1]
            save(imgurlCC, imgtitle, path)


def save(img, omgto, path):
    '''
    文件保存
    :param img: 图片地址
    :param omgto: 图片名称
    :param path: 路径
    :return:
    '''
    imgcontent = Tools(img).content
    with open(path + './' + omgto, 'ab') as f:
        f.write(imgcontent)
    print(f'{path}  / {omgto} 下载完成....')


if __name__ == '__main__':
    index()
