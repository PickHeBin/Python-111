#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/12 16:53
# @File     : demo.py
# @Project  : Code1
import random
from time import sleep

import pandas as pd
from lxml import etree
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# 创建一个参数对象，用来控制chrome以无界面模式打开
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable--gpu')
# 无头浏览器，代码不出错时可以选择在后台自动运行
# bro=webdriver.Chrome(executable_path='E:\Jupyterworkspace\python爬虫\chromedriver',chrome_options=chrome_options)
# 有头浏览器，前期代码调试阶段，以有界面运行更容易发现错误的地方
bro = webdriver.Chrome()
# 规避检测
bro.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined
    })
  """
})
# 打开模拟浏览器
bro.get('https://www.xiaomi.cn/board')
sleep(random.randint(10, 11))  # 等待网页刷新
tree = etree.HTML(bro.page_source)
# 点击展开按钮，显示全部的手机
btn = bro.find_element_by_xpath('//*[@id="root"]/section/div[1]/main/div[2]/div[1]/div[3]/div[1]/div[1]/div/span')
btn.click()
sleep(random.randint(2, 3))
mobile_list = tree.xpath('//*[@id="root"]/section/div[1]/main/div[2]/div[1]/div[3]/div[1]/div[2]/div/a')
print(len(mobile_list))  # 一共67，第13个是手机配件圈，可以跳过爬取

# 存储数据
data = []

# 开始爬取所有手机的数据
ml = [i for i in range(1, 3)]  # 全部运行时间太长，只运行前两部手机
# ml.remove(13)#跳过手机配件圈
for i in ml:
    tree = etree.HTML(bro.page_source)
    # 要点击的手机名称
    mobile_name = tree.xpath(
        '//*[@id="root"]/section/div[1]/main/div[2]/div[1]/div[3]/div[1]/div[2]/div/a[{}]/div[2]/p/text()'.format(i))
    print('开始爬取第{}次，手机名称为{}'.format(i, mobile_name))
    # 点击每个手机按钮
    btn = bro.find_element_by_xpath(
        '//*[@id="root"]/section/div[1]/main/div[2]/div[1]/div[3]/div[1]/div[2]/div/a[{}]'.format(i))
    # 滑动滚动条到手机按钮元素，让其可见
    js4 = "arguments[0].scrollIntoView();"
    bro.execute_script(js4, btn)
    sleep(random.randint(1, 2))
    bro.execute_script('window.scrollBy(0,-250)')
    sleep(random.randint(1, 2))
    btn.click()
    sleep(random.randint(5, 8))  # 等待提案页面加载
    # 获取当前浏览器的所有窗口句柄
    handles = bro.window_handles
    # 切换到最新打开的窗口
    bro.switch_to.window(handles[-1])
    t = etree.HTML(bro.page_source)
    # 模拟点击提案按钮，提案按钮位置并不固定，加一层判断确定提案按钮的位置。
    ti_div = t.xpath('//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div/div[1]/div')
    divnum = 0
    for td in ti_div:
        text = td.xpath('.//text()')
        divnum += 1
        if '提案' in text:
            ti_div_length = divnum
            break
    btn = bro.find_element_by_xpath(
        '//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div/div[1]/div[{}]/span'.format(
            ti_div_length))
    btn.click()
    sleep(random.randint(5, 8))  # 等待提案页面的加载
    # 多次滚动到网页底部，将关联反馈页面滚动条拉到底部，这样才能获取完整的关联反馈数据
    # 切换到最新打开的提案页面
    handles = bro.window_handles
    bro.switch_to.window(handles[-1])
    sleep(random.randint(1, 2))
    # 开始获取反馈页面的数据
    print('开始爬取提案数据')
    tr = etree.HTML(bro.page_source)
    tnum = 0
    tian_len = 1
    stop = []
    while True:
        for t in range(tian_len, tian_len + 10):  # 边滚动滚动条边加载边爬取（每次加载10条提案）
            tnum += 1
            print('开始爬取提案第{}条'.format(tnum))
            # 点击每个提案
            try:
                btn = bro.find_element_by_xpath(
                    '//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[3]/div[{}]/div[2]/div[1]/div[1]/a[{}]/div/span/section/div[1]/span[1]'.format(
                        ti_div_length, t))
            except:
                break
            # 滑动滚动条到提案按钮元素
            js4 = "arguments[0].scrollIntoView();"
            bro.execute_script(js4, btn)
            sleep(random.randint(1, 2))
            bro.execute_script('window.scrollBy(0,-200)')
            sleep(random.randint(1, 2))
            try:
                btn.click()
            except:
                bro.execute_script('window.scrollBy(0,200)')  # 如果到底部的话，需要再回滚200px才能让底部的提案可见
                btn.click()
            sleep(random.randint(5, 8))  # 等待反馈页面的加载
            # 切换到最新打开的反馈页面
            handles = bro.window_handles
            bro.switch_to.window(handles[-1])
            # 获取反馈页面的网页
            t2 = etree.HTML(bro.page_source)
            # 第一个div是问题归纳，第二个div标签之后是关联反馈
            # div1
            title_list = t2.xpath('//*[@id="root"]//div[@class="QuestionCard_questionCard__gWO0x undefined "]/div')
            title = title_list[-2]
            ques_class = '1'  # 1表示问题归纳数据
            user_name = title.xpath('.//div[@class="QuestionCard_username__19mLS"]/text()')
            title1 = title_list[-1]
            ques_content = title1.xpath('./div//text()')
            ques_label = title1.xpath('.//div[@class="QuestionCard_boardContain__7oLCk"]//text()')
            data.append([mobile_name, ques_class, user_name, ques_content, ques_label])
            # 多次滚动到提案网页底部，直到关联反馈页面滚动条拉到底部
            handles = bro.window_handles
            bro.switch_to.window(handles[-1])
            height = bro.execute_script("return document.body.scrollHeight;")
            h = 0
            while True:
                bro.execute_script('window.scrollTo(0,document.body.scrollHeight)')
                sleep(random.randint(2, 3))
                h = bro.execute_script("return document.body.scrollHeight;")
                if h != height:
                    height = h
                else:
                    break
            sleep(random.randint(1, 3))
            tt = etree.HTML(bro.page_source)
            div_list = tt.xpath('//*[@id="root"]//div[@class="ScrollView_scrollList__SX0qZ"]/div[1]/div')
            div_list_length = len(div_list)
            # div2
            num = 0
            if div_list_length > 1:
                for div in div_list[1:]:
                    num += 1
                    ques_class = '2'  # 2表示关联反馈数据
                    user_name = div.xpath('.//div[@class="SuggestCard_username__SsBCM"]/text()')
                    ques_content = div.xpath('.//div[@class="SuggestCard_textContent__2Y7uj"]/text()')
                    ques_label = div.xpath('.//div[@class="SuggestCard_tagGroup__15G_p"]//text()')
                    data.append([mobile_name, ques_class, user_name, ques_content, ques_label])
            print('关联反馈数据*{}*条爬取完毕！！！'.format(num))
            ##爬取热议数据
            # 点击热议按钮
            try:
                btn = bro.find_element_by_xpath('//*[@id="root"]//div[@class="QuestionDetail_subTab__2xgJA"]/p[2]')
                # 滑动滚动条热议按钮元素
                js4 = "arguments[0].scrollIntoView();"
                bro.execute_script(js4, btn)
                sleep(random.randint(1, 2))
                bro.execute_script('window.scrollBy(0,-200)')
                sleep(random.randint(1, 2))
                btn.click()
            except:
                print("没有热议按钮！！！！！！！")
                # 提前关闭反馈页面
                bro.close()
                # 定位到提案页面
                handles = bro.window_handles
                bro.switch_to.window(handles[-1])
                sleep(random.randint(1, 2))
                break
            sleep(random.randint(2, 3))
            t3 = etree.HTML(bro.page_source)
            comment_div = t3.xpath('//*[@id="root"]//section[@class="content_mainComment__1De8L"]/div')
            comment_div_length = len(comment_div)
            # 开始爬取热议数据
            cnum = 0
            if comment_div_length != 0:
                for comdiv in comment_div:
                    cnum += 1
                    ques_class = '3'  # 2表示热议评论数据
                    user_name = comdiv.xpath('.//div[@class="item_headAuthor__3F0CU"]/text()')
                    ques_content = comdiv.xpath('.//div[@class="Ellipsis_content__17y1G"]//text()')
                    ques_label = []  # 热议数据没有label
                    data.append([mobile_name, ques_class, user_name, ques_content, ques_label])
            print('热议数据*{}*条爬取完毕！！！'.format(cnum))
            # 关闭反馈网页
            bro.close()
            # 定位到提案页面
            handles = bro.window_handles
            bro.switch_to.window(handles[-1])
            sleep(random.randint(1, 2))

        if tian_len < 191:
            tian_len += 10
            tr_val = etree.HTML(bro.page_source)
            tian_len = len(tr_val.xpath(
                '//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[3]/div[{}]/div[2]/div[1]/div[1]/a'.format(
                    ti_div_length)))
            tian_text = tr_val.xpath(
                '//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[3]/div[{}]/div[2]/div[1]/div[1]/a[{}]/div/span/section/div[1]/span[1]/text()'.format(
                    ti_div_length, tian_len))[0]
            if stop != tian_text:
                stop = tian_text
            else:
                break
        else:
            tr_val = etree.HTML(bro.page_source)
            tian_text = tr_val.xpath(
                '//*[@id="root"]/section/div[1]/main/div[2]/div[2]/div/div[3]/div[{}]/div[2]/div[1]/div[1]/a[200]/div/span/section/div[1]/span[1]/text()'.format(
                    ti_div_length))[0]
            if stop != tian_text:
                stop = tian_text
            else:
                break
    print('提案数据*{}*条爬取完毕！！！'.format(tnum))
    # 关闭提案页面
    bro.close()
    # 定位到初始手机页面
    handles = bro.window_handles
    bro.switch_to.window(handles[-1])
    sleep(random.randint(1, 2))
    print('爬取完毕：第{}次，手机名称为{}'.format(i, mobile_name))
# 存储数据
df = pd.DataFrame(data)
df.to_excel('./all_xiaomicommunity_data.xlsx', index=False)
