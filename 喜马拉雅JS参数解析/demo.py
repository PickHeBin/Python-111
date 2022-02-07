#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/3 19:30
# @File     : demo.py
# @Project  : Code1
'''
校验:
    验证方式 某一个参数或者请求头里面的某一个字段进行了加密

    采集数据过多 ->  验证码

    xm-sign: ccf54157c46ac0eb2b4ca27dc168a890(48)1638534477535(81)1638534202651

逆向 解析他是怎么生成的?
三种方式:
    1. 接口参数

    t[s("0x27")][s("0x34")] = function() {
        var t, e, r, n = 0;
        return n = u() ? Date[s("0x31")]() : window[s("0x39")] || 0,
        t = this[s("0x5")],
        e = n,
        r = Date[s("0x31")](),
        ("{" + t + e + "}(" + l(100) + ")" + e + "(" + l(100) + ")" + r)[s("0x48")](/{([\w-]+)}/, (function(t, e) {
            return a(e)
        }
        ))
    }
 ["_gg", "XM_SERVER_CLOCK", "binary", "Illegal argument ", "asString", "encoding", "location", "readyState", "fromCharCode", "toString", "slice", "_ii", "object", "wordsToBytes", "_instance", "clockTimer", "replace", "random", "substr", "floor", "INISTAL_TIME", "https://www.ximalaya.com/revision/time", "test", "secretKey", "responseText", "start",
    ccf54157c46ac0eb2b4ca27dc168a890(48)1638534477535(81)1638534202651
    {himalaya-1638535298485} (100以内的随机数)  时间戳 + (100以内的随机数) r类似时间戳的东西 (https://www.ximalaya.com/revision/time)
    ("{" + t + e + "}(" + l(100) + ")" + e + "(" + l(100) + ")" + r)

学爬虫:
    1. 收益
    2. 发展

    爬虫核心的技术:
        入门: 协议 -> 浏览器 baidu.com ????


        高级体系:反编译

        JS逆向:

            JS加密算法 : 非对称加密 对称加密 信息摘要 数字签字
            JS混淆: ....

        字体反爬:
            大众点评-> 上海市  1600RBM起步 10+W
            1. 静态映射  2. 动态映射  3. svg文件映射
            多文件映射方式 初级水平
            中级水平 采集上百万

            反编译 高级


    自学了2年 -> 爬虫就业 15K 上海

    预订100元 课程学费减免优惠?
    2. 何老师亲自指导

    8980 -> 腾讯课堂官方 预订100元 2200 学费优惠 -> 6780
    分期12期 ( 免息 (老师承担手续费))
    名额

    6780 / 12 = 565
    线上直播 后续做兼职 1-3个月左右 学费回本了 兼职

    兼职 发展 -> 技术

    1
    2

    行业 销售
    支出
    零基础 -> 爬虫 (兼职 收入 1. ) (3K 左右) -> 数据分析 (描述性分析 预测性分析 决策性分析 判断性分析) ()(12K  15K)
    -> 机器学习 深度学习 -> 算法 大数据 AI
    5年之内

    读书

    爬虫开始 ()
    2年左右


    1. 运营 -> 数据分析

    数据分析发展 (就业岗位多)
    爬虫兼职为主 -> 稳定收入 -> 数据分析 ()
    爬虫 就业(兼职多 就业不是很理想)
    开发  稳定
    数据分析 发展空间大  工资

    零基础

    先学爬虫做副业 经验 转行 简历

'''

# a|t + enter
import requests
import time
import hashlib
import random


# # 请求头 -> 防止被反爬 模拟浏览器请求服务器
headers = {
    # 浏览器类型
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
}
# 服务器时间戳生成地址
serverTime = 'https://www.ximalaya.com/revision/time'
# 爬虫请求服务器时间戳地址 获取时间戳返回
response = requests.get(serverTime, headers=headers).text # 返回服务器时间戳
nowTime = str(round(time.time() * 1000))
# himalaya- 服务器时间戳 + 100以内随机数 +时间戳
xm_sign = str(hashlib.md5('himalaya-{}'.format(serverTime).encode()).hexdigest()) + "({})".format(str(round(random.random() * 100))) + response + "({})".format(str(round(random.random() * 100))) + nowTime
headers['xm-sign'] = xm_sign
print(xm_sign)

# 请求地址 -> url
# # https://www.ximalaya.com/revision/play/v1/audio?id=462233813&ptype=1
# # id 身份标识???
# https 协议 www.ximalaya.com 域名  /revision/play/v1/audio 参数
url = 'https://www.ximalaya.com/revision/play/v1/audio?id=462233813&ptype=1'


# 获取response(响应) 请求方式 1 2
response1 = requests.get(url, headers=headers).text
print(response1)