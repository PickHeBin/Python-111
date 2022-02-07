#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : 安徽水利.py


import base64
def decode(data):
    # data = data.substring(3, data.length)
    data = data[3:len(data)]
    endTag = data[len(data) - 4:]
    tagsStr = data[data.index(endTag):]
    tags = list()
    tagsStr = tagsStr[4: len(tagsStr) - 4]
    # print(tagsStr)
    content = dict()
    for i in range(len(tagsStr)):
        if i * 4 >= len(tagsStr):
            break
        if i * 4 + 4 < len(tagsStr):
            tag = tagsStr[i * 4:i * 4 + 4]
        else:
            tag = tagsStr[i * 4:]
        # tags[i] = tag
        tags.append(tag)
        content[tag] = None
    positions = GetTagsPosition(data, tags)
    tags = tags
    index = 0
    for i in range(len(positions)):
        msg = data[index: positions[i]]
        tag = data[positions[i]: positions[i] + 4]
        content[tag] = msg
        index = positions[i] + 4
    result = ""
    for i in range(len(tags)):
        result += content[tags[i]]
    return result


def GetTagsPosition(data, tags):
    positions = list()
    for i in range(len(tags)):
        # positions[i] = data.index(tags[i])
        positions.append(data.index(tags[i]))
    positions.sort()
    return positions


if __name__ == "__main__":
    a = ""
    result = decode(a)
    print(result)
    kk = base64.b64decode(result.encode("utf-8")).decode("utf-8")
    print(kk)


'''

15K薪资的爬虫工程师到底是什么水平，带你手把手体验企业级数据解密的乐趣
    掌握这些技能还怕进不来阿里、百度、腾讯？
    
课题：
        【博斌教育】python爬虫进阶 -- 安徽水利局数据逆向解析

主讲老师: 柏汌老师
直播时间：20:00

课程内容:
 1.数据的加载方式
 2.js代码调试
 3.js代码重写

'''
