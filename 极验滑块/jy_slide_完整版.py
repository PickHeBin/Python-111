""" 通过破解js来过滑块验证码 """

import json
import re
import time

import requests
import ddddocr

from a_code.A013_极验_过滑块.handle import restore_img, slide_track
from utils.ut import compile_js

# import subprocess
# from functools import partial
# # 修改编码方式，windows 默认编码是gbk，Mac 和 Linux 默认是utf-8
# subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
# TODO: 备注问题：这里需要修改 c:\python38\lib\subprocess.py 文件 __init__方法参数： encoding='utf-8'


# ======================== 1. 初次进入极验滑动网址， 有以下请求 ================================================
class Gee:
    def __init__(self):
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
        }
        self.gt = None
        self.challenge = None
        self.session = requests.session()

    def req1(self):
        """
        register-slide
        :return:
            - challenge
            - gt
        """
        url = 'https://www.geetest.com/demo/gt/register-slide'
        params = {'t': str(int(time.time() * 1000))}
        resp = self.session.get(url, params=params, headers=self.headers)
        # print('req1: ', resp.json())
        self.gt = resp.json()['gt']
        self.challenge = resp.json()['challenge']
        return resp.json()


    def req2(self):
        """gettype.php
        返回一堆 js 文件
        """
        url = 'https://apiv6.geetest.com/gettype.php'
        params = {
            "gt": self.gt,
            'callback': f"geetest_{int(time.time() * 1000)}"
        }
        resp = self.session.get(url=url, params=params)
        print('req2: ', resp.text)


    def req3(self):
        """get.php"""
        url = 'https://apiv6.geetest.com/get.php'
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": "",
            "callback": f"geetest_{int(time.time() * 1000)}"
        }
        resp = self.session.get(url=url, params=params)
        print('req3: ', resp.text)


    # =========================== 2. 点击验证，有以下请求 =======================================================
    def req4(self):
        """ajax.php"""
        url = 'https://api.geetest.com/ajax.php'
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": "",
            "callback": f"geetest_{int(time.time() * 1000)}"
        }
        resp = self.session.get(url=url, params=params)
        # print('req4: ', resp.text)


    def req5(self):
        """get.php
        获取验证码相关的图片：滑块图，缺口图，背景原图
        """
        url = 'https://api.geetest.com/get.php'
        params = {
            "is_next": "true",
            "type": "slide3",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "embed",
            "api_server": "api.geetest.com",
            "isPC": "true",
            "autoReset": "true",
            "width": "100%",
            "callback": f"geetest_{int(time.time() * 1000)}"
        }
        resp = self.session.get(url=url, params=params)
        res = json.loads(re.findall('geetest_\d+\((.*?)\)', resp.text)[0])
        # print('req5: ', res)
        return res


    # =========================== 3. 手动还原验证码图片 =======================================================
    def parse_bg_captcha(self, res5):
        """还原后台返回的乱序验证码图
        - 可通过监听canvas 绘图事件，找到对应还原图片的js代码
        """
        base_url =  'https://'+ res5['static_servers'][0]
        full_bg_url = base_url + res5['fullbg']
        bg_url = base_url + res5['bg']
        # 获取乱序图
        resp1 = requests.get(full_bg_url)
        resp2 = requests.get(bg_url)
        # 复原乱序图
        full_bg = restore_img.parse_bg_captcha(resp1.content)
        bg = restore_img.parse_bg_captcha(resp2.content)
        # # 查看乱序还原后的图片
        # with open('bg.jpg', 'wb') as f:
        #     f.write(bg)
        # with open('full_bg.jpg', 'wb') as f:
        #     f.write(full_bg)
        return full_bg, bg

    # =========================== 4. 识别缺口坐标位置 =======================================================
    def read_img(self, bg, full_bg):
        """进行缺口识别"""
        slide = ddddocr.DdddOcr(det=False, ocr=False)
        res = slide.slide_comparison(bg, full_bg)
        print('缺口坐标：', res)
        # 缺口x坐标；由于滑块有初始位置， 即 滑动距离 = x - 滑块初始位置x (极验滑块初始x为7)
        return res.get('target')[0]

    # =========================== 5. 模拟生成滑动轨迹 =======================================================
    def get_slide_track(self, distance):
        """获取滑动轨迹
        - 若保存的轨迹多次使用后会失效，可试着给 x, t 加小随机值，再测试
        """
        track = slide_track.get_slide_track(distance)
        print('track:', track)
        return track


    # =========================== 6. 模拟滑动行为,请求获取 validate 响应参数 =======================================================
    def get_validate(self, guiji, res5):
        """获取滑块验证成功返回的 validate """
        url = 'https://api.geetest.com/ajax.php'
        exe = compile_js('jy_slide.js')
        # js计算 w 值，需要 req5 响应中的 challenge, c, s
        w = exe.call('get_w', guiji, res5)
        params = {
            "gt": res5['gt'],
            "challenge": res5['challenge'],
            "lang": "zh-cn",
            "$_BCw": "3",
            "client_type": "web_mobile",
            "w": w,
            "callback": "geetest_1677144493094"
        }
        resp = requests.get(url, params=params, headers=self.headers)
        print(resp.text)
        return resp.text

    def run(self):
        """运行入口"""
        self.req1()           # register-slide 注册滑动验证码
        # self.req2()         # gettype.php 该请求可以去掉
        # self.req3()         # get.php     该请求可以去掉
        self.req4()           # ajax.php    获取滑动验证码
        res5 = self.req5()    # get.php
        full_bg, bg = self.parse_bg_captcha(res5)  # 还原验证码图片
        pos_x = self.read_img(bg, full_bg)  # 计算缺口距离
        distance = pos_x - 7  # 滑动距离 = 缺口位置x - 滑块初始位置x (极验滑块初始x为7)
        print('滑动距离：', distance)
        track = self.get_slide_track(distance)  # 获取轨迹数组
        res = self.get_validate(track, res5)  # 获取 validate
        return res


if __name__ == '__main__':
    gee = Gee()
    res = gee.run()

    # # 成功概率测试
    # fail_count = 0
    # for i in range(50):
    #     res = gee.run()
    #     if 'validate' not in res:
    #         fail_count += 1
    # print('失败次数：', fail_count)

