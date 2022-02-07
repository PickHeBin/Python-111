#!/usr/bin/env python
# -*- coding: utf-8 -*-
import re
import requests
from html import unescape
from fontTools.ttLib import TTFont
from bs4 import BeautifulSoup
import lxml


# font = TTFont('汽车之家1.ttf')  # 打开本地字体文件01.ttf
# font.saveXML('汽车之家1.xml')  # 将ttf文件转化成xml格式并保存到本地，主要是方便我们查看内部数据结构

class Car_Family(object):
    def __init__(self, url):
        self.head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
        }
        self.url = url  # 目标帖子地址

        self.main()

    def Get_html(self):
        '源网页请求'

        with requests.get(self.url, headers=self.head) as res:
            # self.html=res.content.decode('utf-8')
            # self.html = re.sub('\s', '', self.html)  # 去空格
            self.content = BeautifulSoup(res.text, 'lxml')

    def TTF_parse(self):
        '字体的分析处理'
        # TTF_link=re.findall(",url\('(.*?)'\)format\('woff'\)",self.html,re.S)[0]    #提取贴子字体链接
        css = self.content.select('style')
        for i in range(len(css)):
            TTFObj = re.findall(",url\('(.*?)'\) format\('woff'\)", css[i].string, re.S)  # 提取贴子字体链接
            if len(TTFObj) > 0:
                TTF_link = TTFObj[0]
                break

        b = requests.get('http:' + TTF_link, headers=self.head).content  # 字体链接请求
        with open('汽车之家2.ttf', 'wb')as f:  # 保存到本地
            f.write(b)

        font1 = TTFont('autohomeFont.ttf')  # 本地预先下载的字体文件
        u_list = font1.getGlyphOrder()[1:]  # 获取字体的编码
        # 汽车之家1.ttf
        word_list = '的是上近小高不着八十右短三少二七九更呢得低一很大多左好长了坏五地和远下四六矮'  # 字体编码对应的汉字
        # 汽车之家1b.ttf
        # word_list = '着了远小十一好高地三更六四九坏近七上右多和矮低八大五的长呢左少二得不短得是下' #字体编码对应的汉字

        be_p1 = []  # 保存38个字符的（x,y）信息
        for uni in u_list:
            p1 = []  # 保存一个字符的(x,y)信息
            p = font1['glyf'][uni].coordinates  # 获取对象的x,y信息，返回的是一个GlyphCoordinates对象，可以当作列表操作，每个元素是（x,y）元组
            for f in p:  # 把GlyphCoordinates对象改成一个列表
                p1.append(f)
            be_p1.append(p1)

        font2 = TTFont('汽车之家2.ttf')  # 网络刚下载的字体文件，用于参考1.ttf比较后映射对应文字
        uni_list2 = font2.getGlyphOrder()[1:]
        # self.utf8List = ['&#x' + uni[3:] for uni in uni_list2]
        # 获取的字体内容中显示的都是  \uec66 \uecc8  等格式 非&#xec66 &#xecc8 eval转\u时前面要加eval("u'\uec66'")
        self.utf8List = [eval('u\'\\u' + uni[3:].lower() + '\'') for uni in uni_list2]
        on_p1 = []
        for i in uni_list2:
            pp1 = []
            p = font2['glyf'][i].coordinates
            for f in p:
                pp1.append(f)
            on_p1.append(pp1)

        n2 = 0  # uni下标计数
        self.x_list = []
        for d in on_p1:
            n2 += 1
            n1 = 0
            for a in be_p1:
                n1 += 1
                if self.comp(a, d):
                    # print(uni_list2[n2 - 1], word_list[n1 - 1])
                    self.x_list.append(word_list[n1 - 1])

    def comp(self, l1, l2):  # 定义一个比较函数，比较两个列表的坐标信息是否相同
        if len(l1) != len(l2):  # 两数据的数目不等
            return False  # 判断结束
        else:  # 数据相同
            mark = 1  # 成功标志：1代表True，0代表False
            for i in range(len(l1)):
                if abs(l1[i][0] - l2[i][0]) < 40 and abs(l1[i][1] - l2[i][1]) < 40:
                    pass
                else:
                    mark = 0
                    break
            return mark

    def Content_parse(self):
        tes = self.content.find_all('div', attrs={'class', 'tz-paragraph'})
        for k in tes:
            # te = re.findall('<divclass="post-container">(.*?)<\/div>', self.html, re.S)[0]#贴吧内容提取
            # te=re.sub('\s', '', te)
            te = k.text
            if te == "":
                pass
            # print(te)
            for i in range(len(self.utf8List)):  # 替换加密文字
                # print(self.utf8List[i].lower(), self.x_list[i])
                # # if self.utf8List[i] in te:
                te = te.replace(self.utf8List[i].lower(), self.x_list[i])
            word = re.sub('<.*?>', '', unescape(te))  # 提取文字
            word = word.replace('。', '\n')  # 换行替换

            print(word)  # 打印处理后的内容

    def main(self):
        self.Get_html()  # 网页请求
        self.TTF_parse()  # 字体动态映射构建
        self.Content_parse()  # 贴子文字替换与提取


if __name__ == '__main__':
    url = 'https://club.autohome.com.cn/bbs/thread/1f05b4da4448439b/76044817-1.html#%23%23'  # 论坛帖子地址
    # url='https://club.autohome.com.cn/bbs/thread/71540055254110ed/97751884-1.html#pvareaid=102410'
    example = Car_Family(url)



