import time
import requests
import re

'''
0 名称
3 现价
4 最高
5 最低
'''

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'}

stock_list = ['sh600519', 'sz300750']
cost_price = [1840, 639]

while True:
    for i in range(len(stock_list)):
        url = 'http://hq.sinajs.cn/list=' + str(stock_list[i])
        res = requests.get(url, headers=headers).text
        res = res.split(',')

        name_rule = '="(.*)'
        name = re.findall(name_rule, res[0])
        print('{}：现价{}，成本价{}，最高价{}，最低价{}'.format(name[0], res[3], cost_price[i], res[4], res[5]))
        a = int(float(res[3]))  # 现价
        b = cost_price[i] + (int(float(res[4]))-cost_price[i])*0.7  # 高点回撤价
        if a <= b and int(float(res[3])) > cost_price[i]:   # 现价大于成本价，从最高价回撤30%
            print('该跑路咯！')
        elif int(float(res[3])) <= cost_price[i]*0.96:    # 现价低于成本价回撤的4%
            print('该止损了！')
        elif cost_price[i]*0.96 < int(float(res[3])) < cost_price[i]:    # 最高价低于成本价回撤的4%
            print('还没到止损，再拿拿')
        elif int(float(res[3])) >= cost_price[i] and a >= b:    # 最高价低于成本价回撤的4%
            print('慌什么慌，给我拿着！')
    print('================')
    time.sleep(3)