import requests
import re
import pandas as pd

'''
f12代码-f14名称-f2最新价-f3涨跌幅-f4涨跌额-f5成交量(手)-f6成交额
-f7振幅-f15最高-f16最低-f17今开-f18昨收-f10量比-f8换手率-f115市盈率-f23市净率
'''

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'}
code = []
name = []
price = []
for i in range(0, 3):
    url = 'http://83.push2.eastmoney.com/api/qt/clist/get?cb=jQuery11240300365559618325_1637411486569&pn=' +str(i+1) + '&pz=20&po=1&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f3&fs=m:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23,m:0+t:81+s:2048&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152'
    res = requests.get(url, headers=headers).text

    # f12 代码
    code_rule = 'f12":"(.*?)"'
    code += re.findall(code_rule, res)

    # f14 名称
    name_rule = 'f14":"(.*?)"'
    name += re.findall(name_rule, res)
    # f12 最新价
    price_rule = '"f2":(.*?),'
    price += re.findall(price_rule, res)


df = pd.DataFrame({
    '代码': code,
    '名称': name,
    '最新价': price
})
print(df)

# print(len(name), len(price))