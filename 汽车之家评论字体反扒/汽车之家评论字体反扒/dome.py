#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : dome.py
import json

import requests
from fontTools.ttLib import TTFont
from lxml import etree
import pprint
import re
# import sys
# reload(sys)
# sys.setdefaultencoding( "utf-8" )

headerInfo = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
    'host': 'club.autohome.com.cn',
}

url = 'https://club.autohome.com.cn/bbs/thread/29123bb04e08aee3/97380929-1.html'
response = requests.get(url, headers=headerInfo)
# print()
html = etree.HTML(response.text)
contentLst = html.xpath("//div[@class='tz-paragraph']//text()")


s = '\\u' + 'edb2'
data1 = json.loads(f'"{s}"')
data = ''.join(contentLst).replace(data1, '大')
print(repr(data))


# # 那么便开始通过字体库进行解析
# world = TTFont('./autohomeFont.ttf')
# # 读取响应的映射关系
# uni_list = world['cmap'].tables[0].ttFont.getGlyphOrder()  # 'cmap' 表示汉字对应的映射 为unicode编码
# print(uni_list) # 按顺序拿到各个字符的unicode编码
# # 打印结果：
# # ['.notdef', 'uniEDE8', 'uniED35', 'uniED87', 'uniECD3', 'uniED25', 'uniEC72', 'uniEDB2', 'uniEE04', 'uniED51', 'uniEC9D', 'uniECEF', 'uniEC3C', 'uniEC8D', 'uniEDCE', 'uniED1B', 'uniED6C', 'uniECB9', 'uniEDFA', 'uniEC57', 'uniED98', 'uniEDEA', 'uniED36', 'uniEC83', 'uniECD5', 'uniEC21', 'uniED62', 'uniEDB4', 'uniED00', 'uniED52', 'uniEC9F', 'uniEDDF', 'uniEC3D', 'uniED7E', 'uniECCA', 'uniED1C', 'uniEC69', 'uniECBB', 'uniEDFB']
# # .notdef 并不是汉字的映射， 而是表示字体家族名称。
#
# unicode_list= [eval(r"u'\u" + uni[3:] + "'") for uni in uni_list[1:]]
# print(unicode_list)



