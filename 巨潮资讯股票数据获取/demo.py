#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/12 20:16
# @File     : demo.py
# @Project  : Code1
'''
校验:
    抓取数据过多 -> 有效期 3分钟
    当前  修改页面后? -> 更新?

js声明 function 函数与方法
名称在前 为方法  名称在后为函数


1200 外包?
JS解析?:
    一部分

难点 代理:
    1. mcode参数 大量数据 -> 破解
    2. 代理:
        用户:
            权限  浏览器类型  fake_useragent?
        IP代理:
            高匿 -> ip 2k
            赚钱? 付出钱
            免费IP -> 封IP

    付出钱:
        技术:
            ip  验证码 ->打码

            技术 -> JS混淆方式 + JS逆向算法 + APP逆向 反编译 安卓  Java =>? 需求?
            技能  线下 Python  2W起步

        线上课程: 7K左右  爬虫课程

    花钱? 白嫖?  花费时间
    掌握还不行??
    自学 -> 认知
    不会找资源??

    ???? b (?? ( 文章(猜的 )  代码 bug ))
    ???? 找工作? 简历?项目?

    学习了1年  实习 2k?
    兼职 (押金  bug 送钱)

    1-2k押金

兼职 跟着老师 技能提升

学技术 -> 学好了技术 -> 收入顺带

'文章...(技术 技术运营 )    技术

学习了很长一段时间?   工作?
转行?

NLP  计算机视觉 风控模型

风口 发展前景
数据模型

爬虫 数据分析  web
GIS 系统

Python 就业薪资
 前期 走 爬虫 兼职 (了解 收入 经验)

 线上授课方式
    2 4 7 晚上20:00 - 22:00

课件 笔记 源码 录播..
早上 半小时  48小时  2小时

GIS OK

逆向加密算法?
对称加密  非对称加密算法  数字签名算法 信息摘要

基础

JS混淆
跟着老师学习 -> 简单兼职
进修爬虫阶段 (APP 办理预订 办理入学 -> 何老师 拉群 带你做兼职 OK?)
分期12  24 技术长期  兼职长期 学完后 找何老师


学费优惠 不值得




'''

# 数据处理  (数据分析 自动化办公)
# pyexecjs
import execjs
import js2py
# 爬虫第三方库
import pandas as pd
import requests

jscode = '''
		function mcode(input) {  
			var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv"   + "wxyz0123456789+/" + "=";  
			var output = "";  
			var chr1, chr2, chr3 = "";  
			var enc1, enc2, enc3, enc4 = "";  
			var i = 0;  
			do {  
				chr1 = input.charCodeAt(i++);  
				chr2 = input.charCodeAt(i++);  
				chr3 = input.charCodeAt(i++);  
				enc1 = chr1 >> 2;  
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
				enc4 = chr3 & 63;  
				if (isNaN(chr2)) {  
					enc3 = enc4 = 64;  
				} else if (isNaN(chr3)) {  
					enc4 = 64;  
				}  
				output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)  
						+ keyStr.charAt(enc3) + keyStr.charAt(enc4);  
				chr1 = chr2 = chr3 = "";  
				enc1 = enc2 = enc3 = enc4 = "";  
			} while (i < input.length);  
	  
			return output;  
		}  
'''
JStime = 'Math.floor(new Date().getTime()/1000);'
time1 = js2py.eval_js(JStime)  # 执行单个JS

ctx = execjs.compile(jscode).call('mcode', str(time1))

# input1 = str(time.time())  取整
# print(input1)

url = 'http://webapi.cninfo.com.cn/api/sysapi/p_sysapi1007'
headers = {
    'Referer': 'http://webapi.cninfo.com.cn/',  # 防盗链接
    # 用户信息
    'Cookie': 'Hm_lvt_489bd07e99fbfc5f12cbb4145adb0a9b=1639285353,1639285418,1639285994,1639308087; Hm_lpvt_489bd07e99fbfc5f12cbb4145adb0a9b=1639311236',
    'mcode': str(ctx),  # 特殊请求头参数
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53'
}
data = {
    'tdate': '2021-12-10',  # 时间
    'market': 'SZE'  # 交易所名称
}
response = requests.post(url, headers=headers, data=data).json()
records = response['records']  # 字典取值 -> 键获取值
df = pd.DataFrame(records)  # 表格  二维数据
df.to_csv('深圳交易所数据.csv')
