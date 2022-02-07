#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : BaiChuan
# @File    : 飞机大战.py


import requests
import time
import execjs
import re


def get_pwd(s):
    js_path = "login.js"
    with open(js_path, 'r', encoding="utf-8") as f:
        js_content = f.read()
        ctx = execjs.compile(js_content)
        new_pwd = ctx.call("login", s)
    return new_pwd


def login(account, password):
    session = requests.session()
    captcha_url = f"https://i.mgtv.com/vcode?from=pcclient&time={int(time.time() * 1000)}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36"
    }

    captcha_res = session.get(captcha_url, headers=headers)

    with open("captcha.jpg", "wb") as f:
        f.write(captcha_res.content)
    time.sleep(3)
    code = input("请输入验证码: ")
    url = "https://i.mgtv.com/account/loginVerify"

    data = {
        "sub": "1",
        "account": account,
        "pwd": get_pwd(password),
        "vcode": code,
        "remember": "1"
    }

    response = session.post(url, data=data, headers=headers)
    text = response.text
    print(text)


if __name__ == "__main__":
    count = ""
    pwd = ""
    login(count, pwd)

