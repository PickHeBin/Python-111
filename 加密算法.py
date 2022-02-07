#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/8 21:00
# @File     : 加密算法.py
# @Project  : Code1
'''
对称加密算法DES AES RC4 3DES...  非对称加密算法: RSA DSA ECC (公钥与私钥)  数字签名算法  信息摘要算法

核心课程: APP逆向 脱壳 反编译 源码解刨 apk  JAVA  安卓

对称加密算法: -> APP -> 找不到加密的位置

收入 -> 经验 爬虫 基础  经验收入 ->  读书? 12K 爬虫
实习  3K  投资学习 时间 精力

自己花的时间  掌握内容 对等嘛?

技术道路 不是很明确

学到哪里了?
分类模型

基础 if形成?  列表形成 链表? 基础

学生 做兼职  2年左右
爬虫掌握 2年左右 进阶数据分析 算法 跟着老师一起兼职 老师带着做兼职
项目经验 宝贵经验?

学费分期 3 6 9 12期的 手续费 老师帮你承担

大数据算法  大数据分析  数据分析 数据挖掘 算法领域
AI

掌握不了

1. 爬虫内容  基础语法相关的内容
2. 班级  从0 开始  保障学会才毕业的

运维 -> 人机交互

爬虫体系 (工作  副业)


静态提取???

爬虫 + 数据分析描述性分析的内容
兼职 副业

7000 学习课程

数据分析  机器学习 深度学习
零基础 爬虫(代码少) (兼职)


Python

20K工作?

对称加密算法:
    密码学:
        数据发信方将明文的(原始数据) 加密秘钥 -.一起处理 密文
        逆算法

AES加密算法:
    填充 模式 偏移情况

    AES  CBC加密模式 16字节边界

亲传弟子  核心课程学费优惠 兼职特训
授课 线上直播 2 4 7 晚上 20:00 - 22:00
课件 笔记 源码 录播 辅导 补课 解答

技术体系 兼职  就业 何老师亲自带 辅导 补课 解答

'''
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import  pad

data = b"123456"
key = get_random_bytes(16)
cipher = AES.new(key, AES.MODE_CBC)
# 填充?
print(cipher.encrypt(pad(data, AES.block_size)))

