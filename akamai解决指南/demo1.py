# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @Time     : 2022/9/6 14:59
# @File     : demo1.py
# @Project  : pythonProject

import json
import execjs
import requests
from fake_useragent import UserAgent

JS_FILENAME = "demo.js"


class Abck_Cookie:

    def __init__(self, headers, url, data=None):
        self.headers = headers
        self.url = url
        self.data = data
        self.proxies = None

    def __get_sensor_data(self, old_abck_cookie: str):
        """
        根据 old_abck_cookie ,获取 sensor_data
        """
        with open(JS_FILENAME, "r", encoding="utf-8") as f:
            js_content = f.read().replace("this_is_abck_cookie", old_abck_cookie).replace("this_is_url", self.url)
        jscontext = execjs.compile(js_content)
        sensor_data = jscontext.call('get_sensor_data')
        print("生成sensor_data：",sensor_data)
        return sensor_data

    def __get_old_abck(self):
        """
        获取 set_cookie 中的 _abck_cookie_value,以及所有的 cookie
        """
        headers = {
            "User-Agent": UserAgent().random,
            'content-type': 'text/plain;charset=UTF-8',
        }
        # 更新添加自己所写 headers
        headers.update(self.headers)
        try:
            old_abck_response = requests.post(url=self.url, headers=headers, proxies=self.proxies, data=self.data,
                                              timeout=5)
            print("old_abck_response:",old_abck_response.text)
        except Exception as e:
            return False
        for cookie in old_abck_response.cookies:
            if cookie.name == "_abck":
                return (cookie.value, old_abck_response.cookies)
        return False

    def __get_new_abck(self, sensor_data=None, cookies=None):
        """
        获取 set_cookie 中的 _abck_cookie
        """
        cookies_dict = {cookie.name: cookie.value for cookie in cookies}
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv',
            'Content-Type': 'text/plain;charset=UTF-8',
            'Connection': 'keep-alive',
            'Cookie': 'ak_bmsc={}; bm_sz={}; _abck={}'.format(cookies_dict.get("ak_bmsc"), cookies_dict.get("bm_sz"),
                                                              cookies_dict.get("_abck")),
            'TE': 'Trailers'
        }
        headers.update(self.headers)
        data = {
            "sensor_data": sensor_data
        }
        try:
            res = requests.post(url=self.url, headers=headers, data=json.dumps(data), proxies=self.proxies, timeout=5)
            print("get_new_abck：", res.text)
        except:
            return False

        self.cookies = res.cookies.get_dict()
        print("=======当前可用cookies====",self.cookies)

    def execute_get_abck_cookie(self):
        """
        统一规划，执行获得新的 abck_cookie
        :return:abck_cookie
        """
        # 获取 未可以使用的 abck_cookie
        old_abck_cookie, cookies = self.__get_old_abck()
        # 获取 sensor_data
        sensor_data = self.__get_sensor_data(old_abck_cookie)
        # 获取 可以使用的 abck_cookie
        self.__get_new_abck(sensor_data, cookies)


if __name__ == '__main__':
    url = "https://www.flyasiana.com/5qSZcnDz_/hGWtnW/AkEc/auTFfPPk/9rYphrpkup/dDswFj8m/FVRIJ3V/tGkQ?n$eum=157910959357612400"

    headers = {
        'authority': 'www.flyasiana.com',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'referer': 'https://www.flyasiana.com/I/CN/CH/RevenueRegistTravel.do',
    }

    abck = Abck_Cookie(url=url, headers=headers)

    abck.execute_get_abck_cookie()
