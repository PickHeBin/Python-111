#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : client.py

import requests
import execjs
print(execjs.get().name)


def get_data(YEAR):
    # for i in range(14):
        data = {
            'year': YEAR,
            'MethodName': 'BoxOffice_GetYearInfoData'
        }
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36 Edg/88.0.705.63'}
        url = 'https://www.endata.com.cn/API/GetData.ashx'
        response = requests.post(url,headers=headers,data=data)
        result = response.text
        print(result)

        with open("a.js","r",encoding='utf-8') as f:
            js = f.read()

        # 编译js代码
        resp = execjs.compile(js)

        # 调用方法
        response = resp.call('webInstace.shell', result)
        print(response)
        # YEAR = YEAR + 1


def main():
    YEAR = 2021
    get_data(YEAR)

if __name__ == '__main__':
    main()

