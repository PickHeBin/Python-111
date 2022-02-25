# 静态数据爬取
'''
1.在寻找数据标签提取的时候 但是没有可选属性(class id) 找上级 属性是否存在 一般是带有属性的标签才是可选

'''

import os
import requests
from lxml import html  # 精确定位 节点
from pyquery import PyQuery as pq  # 简单方便快速但是定位不精准 选择器

path = "./白玉/"
count = 1


def Tools(url):
    '''
    请求工具函数
    :param url:请求地址
    :return: 响应状态
    '''
    # url='https://wx3.sinaimg.cn/large/8a1c233bgy1fw4ncmguewj20hi0oddx8.jpg'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }
    # response = requests.get(url, headers=headers).content
    print(url)
    response = requests.get(url, headers=headers)
    return response


def save_data(img_url):
    '''
    储存图片函数
    :param img_url:图片地址
    :return:
    '''
    global count
    # print('imageurl', img_url)
    # 这里直接请求的是列表了 请求列表就报错了
    response = Tools(img_url).content
    # 判断path没有
    if not os.path.exists(path):
        os.makedirs(path)  # 不存在则创建，存在则写入(递归创建)
    # with写入方式 w不存在则创建(文件)覆盖  a 追加模式
    with open(path + '{}.jpg'.format(count), 'ab') as f:
        f.write(response)
    count += 1



def Detail(detail):
    '''
    xpath学习，提取图片地址，详情页后缀
    :param detail:
    :return:NONE
    '''
    # url='http://acg17.com/41623.html'
    # 第一个问题： url拼接错误了
    # 你仔细看你这个url 两个http 协议头
    # http://acg17.com/http://tva1.sinaimg.cn/large/006yt1Omgy1gdx6o8nedpj307206waam.jpg
    # url = 'http://acg17.com/{}'.format(detail)
    # print('detail', detail)
    response = Tools(url).text
    xml1 = html.etree.HTML(response)
    img_url = xml1.xpath('//img[@title="【P站美图】《黄金拼图》爱丽丝·卡塔雷特壁纸特辑 P站美图 |ACG17"]/@src')
    print('imurl', img_url)
    # 第二个问题：这个xpath获取的是列表 你没有遍历
    for i in img_url:
        save_data(i)


if __name__ == '__main__':
    # 你这个不要注释， 不然你的函数都没有被调用了哈
    url = 'http://acg17.com/56178.html'
    response = Tools(url).text
    # print(response)
    doc = pq(response)
    detail = doc('.entry img').items()  # 返回查询对象
    # print(detail)
    for i in detail:
        # print('123')
        src = i.attr('src')  # 获取herf属性
        # print(src)
        print('src', src)
        Detail(src)
