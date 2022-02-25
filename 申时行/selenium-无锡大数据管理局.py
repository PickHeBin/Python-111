#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @File  : selenium-无锡大数据管理局
# @time  : 2022/2/17 11:28

import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class wxdsjglj():

    def __init__(self):
        # 配置
        option = webdriver.ChromeOptions()
        # 规避bug
        option.add_argument('--disable-gpu')
        # 不加载图片, 提升速度
        option.add_argument('blink-settings=imagesEnabled=false')
        # 禁止检测自动化控制
        option.add_argument('--disable-blink-features=AutomationControlled')
        self.browser = webdriver.Chrome(options=option)
        self.wait = WebDriverWait(self.browser, 10)
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-TW,zh-CN;q=0.9,zh;q=0.8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Cookie": "Hm_lvt_92564b92b10dc83a12fbfa6af9367cfb=1645019101",
            "Host": "bigdata.wuxi.gov.cn",
            "Pragma": "no-cache",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"
        }

    def gzdt(self, handles):
        # 切换到'工作动态'
        self.browser.switch_to.window(handles)
        gzdt_all_href = []
        while True:
            gzdt_element = self.browser.find_elements(By.XPATH, '//ul[@class="list07"]/li/div/h2/a')
            for h in gzdt_element:
                print(self.browser)
                time.sleep(5)
                href = h.get_attribute('href')
                self.browser.get(href)
                print('title')
                time.sleep(5)
                self.browser.back()
                print('回来了')
                time.sleep(5)
            # try:
            #     self.browser.find_element(By.XPATH, '//span[@class="page_next"]/a').click()
            # except Exception:
            #     break
            break
        print(gzdt_all_href)
        # time.sleep(1000)

    def sjyq(self, handles):
        # 切换到'上级要情'
        self.browser.switch_to.window(handles)

    def gggs(self, handles):
        # 切换到'公示公告'
        self.browser.switch_to.window(handles)

    def run(self):
        url = 'http://bigdata.wuxi.gov.cn'
        # url = 'http://bigdata.wuxi.gov.cn/index.shtml'
        self.browser.get(url + '/index.shtml')
        # 等待加载
        self.wait.until(EC.presence_of_all_elements_located((By.XPATH, '//div[@class="container"]')))
        # 分区
        subfield_element = self.browser.find_elements(By.XPATH, '//span[@class="tit red fl"]')
        subfield_title = []
        for t in subfield_element:
            subfield_title.append(t.text)
        # 更多href
        more_element = self.browser.find_elements(By.XPATH, '//span[@class="more fr"]/a')
        subfield_more_href = []
        for h in more_element:
            href = h.get_attribute('href')
            subfield_more_href.append(href)
            # 打开新窗口跳转到各个分栏采集数据
            self.browser.execute_script(f'window.open("{href}")')
        # 获取所有窗口句柄
        handles = self.browser.window_handles
        # 工作动态
        self.gzdt(handles[-1])
        # # 上级要情
        # self.sjyq(handles[-2])
        # # 公示公告
        # self.gggs(handles[-3])

        # print(subfield_title, subfield_more_href)


if __name__ == '__main__':
    wxdsjglj().run()




