# -*- coding: utf-8 -*-
import random

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver import ChromeOptions
import time


def init(id, pwd):
    option = ChromeOptions()
    # 此步骤很重要，设置为开发者模式，防止被各大网站识别出来使用了Selenium
    option.add_experimental_option('excludeSwitches', ['enable-automation'])
    option.add_argument("--disable-blink-features")
    option.add_argument("--disable-blink-features=AutomationControlled")
    web = Chrome(options=option)
    wait = WebDriverWait(web, 30)  # 指定最长的等待时间
    web.get('https://www.taobao.com/')
    web.find_element(By.XPATH, '/html/body/div[4]/div[2]/div[1]/div/div[2]/div[1]/a[1]').click()
    headles = web.window_handles
    web.switch_to.window(headles[1])
    # 账号登录操作
    web.find_element(By.XPATH, '//*[@id="fm-login-id"]').send_keys(id)
    web.find_element(By.XPATH, '//*[@id="fm-login-password"]').send_keys(pwd)
    web.find_element(By.XPATH, '//*[@id="login-form"]/div[4]/button').click()

    web.switch_to.window(headles[0])
    web.close()
    web.switch_to.window(headles[1])
    # 淘宝主页面检测
    wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="J_SiteNavService"]/div[1]/a/span')))
    return web, wait


def parse_page(web, wait):
    wait.until(EC.presence_of_element_located((By.XPATH, '//*[@id="mainsrp-itemlist"]/div/div/div[1]/div')))
    items = web.find_elements(By.XPATH, '//*[@id="mainsrp-itemlist"]/div/div/div[1]/div')
    for i in items:
        price = i.find_element(By.XPATH, './div[2]/div[1]/div[1]/strong').text
        title = i.find_element(By.XPATH, './div[2]/div[2]/a').text
        shop = i.find_element(By.XPATH, './div[2]/div[3]/div[1]/a/span[2]').text
        sales = i.find_element(By.XPATH, './div[2]/div[1]/div[2]').text
        print(title, price, shop, sales)


def run(web, wait):
    # key = input('请输入您需搜索的关键字，然后回车')
    key = '背包'
    web.find_element(By.XPATH, '//*[@id="q"]').send_keys(key.encode().decode('utf8'))  # 输入关键字
    web.find_element(By.XPATH, '//*[@id="J_TSearchForm"]/div[1]/button').click()  # 点击搜索

    while 1:
        try:  # 解析页面
            parse_page(web, wait)
        except:
            print('解析异常')

        # 翻页操作
        next_button = web.find_element(By.CSS_SELECTOR, 'li.item.next')  # 翻页按钮
        if 'next-disabled' not in next_button.get_attribute('class'):
            next_button.click()
        else:
            print('到最后一页了')
            break

        # 随机睡眠降低被反爬的概率
        time.sleep(random.randint(5, 10))
    web.close()


if __name__ == '__main__':
    id = ''  # 账号
    pwd = ''  # 密码

    # 这是多账号
    # for i in range(2):
    #     web,wait = init(id,pwd)
    #     run(web,wait)

    # 这是单账号
    web, wait = init(id, pwd)
    run(web, wait)
