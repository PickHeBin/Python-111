# 前言[¶](#前言)

2020年11月中旬，曾经红极一时的P2P平台数量完全归零，P2P行业从前些年的备受追捧，到如今的从严整治，最大原因是它被一些人彻底玩坏了，导致P2P偏离了普惠金融的初衷，演变成资金池、期限错配、自融、欺诈的工具。尽管P2P已经归零，但它也完成了它在互联网金融这条路上的使命。

# 更新库[¶](#更新库)

In [20]:

```
!pip install --upgrade pip
```

In [21]:

```
!pip install --upgrade pyecharts
```

# 数据爬取[¶](#数据爬取)

从网贷之家爬取P2P行业现状数据，主要包括平台数量、平台类型、平台分布、平台问题类型等。这里将用到selenium、requests、etree等爬虫库，将使用模拟点击、cookie等方法获取数据。（selenium在这运行的配置较为麻烦，建议复制到Jupyter notebook上运行。cookie需要登录后复制）

In [ ]:

```
import requests
from selenium import webdriver
from lxml import etree
import csv
import time

class P2PSpider(object):
    def __init__(self):
        self.headers = {
            'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36'
        }
        self.num_url = 'https://shuju.wdzj.com/industry-list.html'
        self.locate_url = 'https://shuju.wdzj.com/industry-month-0-{}-{}.html'
        self.type_url = 'https://shuju.wdzj.com/industry-month-1-{}-{}.html'
        self.sales_url = 'https://shuju.wdzj.com/index-i-4-1.html'
        self.popularity_url = 'https://shuju.wdzj.com/index-i-3-1.html'
        self.problems_url = 'https://shuju.wdzj.com/problem-list-all.html?year={}'
#平台数量  https://shuju.wdzj.com/index-i-0-1.html
#区域分布  https://shuju.wdzj.com/industry-month-0-2019-11.html
#平台类型  https://shuju.wdzj.com/industry-month-1-2019-11.html
#行业成交  https://shuju.wdzj.com/index-i-4-1.html
#行业人气  https://shuju.wdzj.com/index-i-3-1.html
    def get_num(self):
        #chrome_options = webdriver.ChromeOptions()
        browser = webdriver.Chrome()
        browser.get(self.num_url)
        year = 2017
        for i in range(3,0,-1):
            button = '//*[@id="industryTmpl"]/div[2]/div[2]/div/div/ul/li[{}]'.format(i)
            browser.find_element_by_xpath(button).click()
            html = browser.page_source
            tree = etree.HTML(html)
            months = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[1]/div/text()')
            months = list(reversed(months))
            rise_nums = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[2]/div/text()')
            rise_nums = list(reversed(rise_nums))
            total_nums = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[3]/div/text()')
            total_nums = list(reversed(total_nums))
            normal_nums = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[4]/div/text()')
            normal_nums = list(reversed(normal_nums))
            change_nums = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[5]/div/text()')
            change_nums = list(reversed(change_nums))
            matter_nums = tree.xpath('//*[@id="areaSelTmpl"]/tr/td[6]/div/text()')
            matter_nums = list(reversed(matter_nums))
            for month,rise_num,total_num,normal_num,change_num,matter_num in zip(months,rise_nums,total_nums,normal_nums,change_nums,matter_nums):
                with open('平台数量.csv','a+',encoding='utf-8',newline='') as f:
                    writer = csv.writer(f)
                    writer.writerow([str(year)+'年'+str(month),rise_num,total_num,normal_num,change_num,matter_num])
            year += 1
        browser.close()
        
    def get_url(self):
        locate_urls=[]
        type_urls=[]
        for y in range(2015,2020):
            for m in range(1,13):
                locate_url = self.locate_url.format(y,m)
                locate_urls.append(locate_url)
                type_url = self.type_url.format(y,m)
                type_urls.append(type_url)
        self.get_locate(locate_urls)
        self.get_type(type_urls)
                
    
    def get_locate(self,locate_urls):
        for y in range(2015,2020):
            for m in range(1,13):
                locate_url = self.locate_url.format(y,m)
                reponse = requests.get(locate_url,headers=self.headers).json()
                for data in reponse:
                    with open('区域分布.csv','a+',encoding='utf-8',newline='') as f:
                        writer = csv.writer(f)
                        writer.writerow([str(data['years'])+'年'+str(data['month'])+'月',data['province'],data['amount'],data['amountGrowthRate'],
                                       data['operatePlatNumber'],data['operatePlatNumberGrowthRate'],data['exitPlatNumber'],data['exitPlatNumberTotal'],data['problemPlatNumber'],
                                       data['problemPlatNumberTotal'],data['balanceLoans'],data['incomeRate'],data['loanPeriod'],data['bidderNum'],data['borrowerNum']])
                time.sleep(1)
                
    def get_type(self,type_urls):
        for type_url in type_urls:
            reponse = requests.get(type_url,headers=self.headers).json()
            for data in reponse:
                with open('平台类型.csv','a+',encoding='utf-8',newline='') as f:
                    writer = csv.writer(f)
                    writer.writerow([str(data['years'])+'年'+str(data['month'])+'月',data['province'],data['amount'],data['amountGrowthRate'],
                                    data['operatePlatNumber'],data['operatePlatNumberGrowthRate'],data['exitPlatNumber'],data['exitPlatNumberTotal'],data['problemPlatNumber'],
                                    data['problemPlatNumberTotal'],data['balanceLoans'],data['incomeRate'],data['loanPeriod'],data['bidderNum'],data['borrowerNum']])
            time.sleep(1)
    def get_sales(self):
        reponse = requests.get(self.sales_url,headers=self.headers).json()
        for data in reponse['data']:
            with open('行业成交.csv','a+',encoding='utf-8',newline='') as f:
                writer = csv.writer(f)
                writer.writerow([data['month'],data['amount'],data['incomeRate'],data['loanPeriod'],data['stayStillOfTotal'],data['netInflowOfThirty']])
    
    def get_popularity(self):
        reponse = requests.get(self.popularity_url,headers=self.headers).json()
        for data in reponse['data']:
            with open('行业人气.csv','a+',encoding='utf-8',newline='') as f:
                writer = csv.writer(f)
                writer.writerow([data['month'],data['bidderNum'],data['borrowerNum'],data['avgBidMoney'],data['avgBorrowMoney']])
    
    def get_problems(self):
        headers = {
    'user-agent':'Mozilla/5.0',
    'Cookie': 'gr_user_id=a5493ddb-9f48-4ecd-bfaa-2eb4a1d0c464; __jsluid_s=d12dd31f5eee75888ac7cfbb922e9392; _ga=GA1.2.1971137595.1602317325; NTKF_T2D_CLIENTID=guest86694277-8D8B-0C16-AD2C-A633D8AE78AE; PHPSESSID=jg0u3v2t8s102iej2s2kd7cq36; WDZJptlbs=1; Hm_lvt_9e837711961994d9830dcd3f4b45f0b3=1604927113,1604927122,1605008980,1606202013; _gid=GA1.2.1365605319.1606202013; Z6wq_e6e3_saltkey=yaC43N45; Z6wq_e6e3_auth=72ca5MARLA%2BHDVIut8ESGHpKEcwc%2FGRVm0o8V%2FnffjgczUiKuZ0qMmVBj5ppUTYh7WxKoZxv6yXbZZH7RvNmOgxEKHjo; auth_token=5ee4bLpLWYqGXY1eC7ec14DyD88xlBEinBn%2Bap%2B6hAguaXyloSxqQitfO6NRofa%2FcK6MaDvZAii9Lj0LP0dm3mige%2B6F; uid=2191355; login_channel=7; pc_login=1; WDZJ_FRONT_SESSION_ID=37589318d5484b02abf5038be76bd8af2214072736854481; Z6wq_e6e3_ulastactivity=5734CaIrlLXKpNXsYJLEhcieeSlqnoKq2WLcVlb9ZA0VqxHDac4P; Hm_lpvt_9e837711961994d9830dcd3f4b45f0b3=1606203292; gr_session_id_1931ea22324b4036a653ff1d3a0b4693=1f3184dc-a17d-4d88-90d2-0a6691323781; gr_cs1_1f3184dc-a17d-4d88-90d2-0a6691323781=user_id%3A2191355; gr_session_id_1931ea22324b4036a653ff1d3a0b4693_1f3184dc-a17d-4d88-90d2-0a6691323781=true'
    }
        for year in range(2011,2021):
            problem_url = self.problems_url.format(year)
            reponse = requests.get(problem_url,headers=headers).json()
            for data in reponse['problemList']:
                with open('问题平台.csv','a+',encoding='utf-8',newline='') as f:
                    writer = csv.writer(f)
                    writer.writerow([data['platName'],data['proTime'],'-'.join(data['onlineTime'].split('-')[0:2]),data['regCapital'],data['area'],data['type']])  


    def main(self):
        self.get_num()
        self.get_url()
        self.get_sales()
        self.get_popularity()
        self.get_problems()

if __name__ == '__main__':
    spider = P2PSpider()
    spider.main()
```

# 数据处理与可视化分析[¶](#数据处理与可视化分析)

In [1]:

```
import numpy as np
import pandas as pd
```

In [11]:

```
data1 = pd.read_csv('./平台数量.csv',header=None,names=["时间","新增平台数量","累计平台数量","正常运营平台数量",
"累计停业转型平台数量","累计问题平台数量"])
data1.head()
```

Out[11]:

|      | 时间      | 新增平台数量 | 累计平台数量 | 正常运营平台数量 | 累计停业转型平台数量 | 累计问题平台数量 |
| ---- | --------- | ------------ | ------------ | ---------------- | -------------------- | ---------------- |
| 0    | 2017年1月 | 19           | 6141         | 2669             | 1665                 | 1807             |
| 1    | 2017年2月 | 12           | 6153         | 2625             | 1709                 | 1819             |
| 2    | 2017年3月 | 28           | 6182         | 2588             | 1765                 | 1829             |
| 3    | 2017年4月 | 27           | 6209         | 2538             | 1821                 | 1850             |
| 4    | 2017年5月 | 46           | 6255         | 2508             | 1878                 | 1869             |

In [13]:

```
data1.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 36 entries, 0 to 35
Data columns (total 6 columns):
时间            36 non-null object
新增平台数量        36 non-null int64
累计平台数量        36 non-null int64
正常运营平台数量      36 non-null int64
累计停业转型平台数量    36 non-null int64
累计问题平台数量      36 non-null int64
dtypes: int64(5), object(1)
memory usage: 1.8+ KB
```

In [2]:

```
from pyecharts import options as opts
from pyecharts.charts import *
from pyecharts.globals import ThemeType
import warnings
warnings.filterwarnings("ignore")
```

In [15]:

```
bar = (Bar(init_opts=opts.InitOpts(
            # 设置主题
            theme='macarons'))
    .add_xaxis(data1['时间'].tolist())
    .add_yaxis("新增平台数量（家）", data1['新增平台数量'].tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title="P2P新增平台数量情况"),
        datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_="inside")]
))
bar.render_notebook()
```

Out[15]:

2016年是P2P平台的监管年，可以看出随着监管的介入，P2P平台的发展依旧充满活力。但2018年大量P2P平台陆续曝光涉嫌自融与庞氏骗局，监管愈加严厉，包括整顿期备案流程时间长，P2P平台流动性压力积聚，大量平台宣告清算或卷款跑路，这成为了压垮P2P发展的最后一根稻草，自此P2P一蹶不振。

In [16]:

```
line = (Line(init_opts=opts.InitOpts(
            # 设置主题
            theme='light'))
    .add_xaxis(data1['时间'].tolist())
    .add_yaxis("正常运营平台数量(家)", data1['正常运营平台数量'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("累计停业转型平台数量(家)", data1['累计停业转型平台数量'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("累计问题平台数量(家)", data1['累计问题平台数量'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="P2P平台运营情况"),
        datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_="inside")]
)
      )

line.render_notebook()
```

Out[16]:

在2018年4月之后，P2P平台问题平台开始超过正常运营的平台，正常运营平台逐渐面临清退，而那些存在问题的平台也渐渐浮出水面，大量平台面临转型或停业的问题。

In [17]:

```
data2 = pd.read_csv('./区域分布.csv',header=None,names=["时间","省份","成交量（亿元）","月同比增长（%）",
"运营平台数量","月环比增长（%）","当月转型及停业平台数(家)","累计转型及停业平台数（家）","当月问题平台数（家）",
"累计问题平台数(家)","待还余额（亿元）","综合参考收益率（%）","平均借款期限（月）","当月投资人数（万人）","当月借款人数（万人）"])
data2.head(10)
```

Out[17]:

|      | 时间      | 省份 | 成交量（亿元） | 月同比增长（%） | 运营平台数量 | 月环比增长（%） | 当月转型及停业平台数(家) | 累计转型及停业平台数（家） | 当月问题平台数（家） | 累计问题平台数(家) | 待还余额（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 当月投资人数（万人） | 当月借款人数（万人） |
| ---- | --------- | ---- | -------------- | --------------- | ------------ | --------------- | ------------------------ | -------------------------- | -------------------- | ------------------ | ---------------- | ------------------- | ------------------ | -------------------- | -------------------- |
| 0    | 2015年1月 | 全国 | 357.82         | -3.0            | 2474         | 8.0             | 15                       | 65                         | 76                   | 422                | 1429.99          | 15.81               | 6.87               | 88.22                | 19.10                |
| 1    | 2015年1月 | 广东 | 117.02         | -4.0            | 490          | 8.0             | 1                        | 7                          | 13                   | 81                 | 243.75           | 15.15               | 3.83               | 27.76                | 3.34                 |
| 2    | 2015年1月 | 北京 | 72.28          | 2.0             | 334          | 9.0             | 3                        | 9                          | 1                    | 19                 | 609.12           | 13.27               | 11.22              | 34.40                | 8.04                 |
| 3    | 2015年1月 | 浙江 | 44.80          | -6.0            | 218          | 3.0             | 2                        | 10                         | 6                    | 63                 | 87.53            | 16.78               | 2.00               | 5.57                 | 1.45                 |
| 4    | 2015年1月 | 上海 | 45.91          | -6.0            | 263          | 9.0             | 1                        | 6                          | 3                    | 31                 | 199.81           | 11.29               | 18.29              | 8.75                 | 5.19                 |
| 5    | 2015年1月 | 江苏 | 15.91          | 1.0             | 90           | 7.0             | 2                        | 6                          | 4                    | 33                 | 52.78            | 20.63               | 4.41               | 2.20                 | 0.21                 |
| 6    | 2015年1月 | 山东 | 11.38          | -16.0           | 256          | 11.0            | 2                        | 4                          | 29                   | 72                 | 79.34            | 22.98               | 2.97               | 1.48                 | 0.20                 |
| 7    | 2015年1月 | 湖北 | 7.06           | 3.0             | 86           | 10.0            | 0                        | 2                          | 0                    | 16                 | 11.02            | 17.56               | 3.48               | 1.83                 | 0.23                 |
| 8    | 2015年1月 | 四川 | 11.10          | -1.0            | 84           | 0.0             | 0                        | 2                          | 4                    | 16                 | 10.91            | 15.82               | 4.33               | 1.77                 | 0.24                 |
| 9    | 2015年1月 | 其他 | 32.36          | -4.0            | 653          | 9.0             | 4                        | 19                         | 16                   | 91                 | 135.73           | 23.66               | 2.88               | 4.48                 | 0.20                 |

In [18]:

```
data2 = data2.set_index(['时间','省份'])
```

In [20]:

```
data2.head(10)
```

Out[20]:

|           |        | 成交量（亿元） | 月同比增长（%） | 运营平台数量 | 月环比增长（%） | 当月转型及停业平台数(家) | 累计转型及停业平台数（家） | 当月问题平台数（家） | 累计问题平台数(家) | 待还余额（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 当月投资人数（万人） | 当月借款人数（万人） |
| --------- | ------ | -------------- | --------------- | ------------ | --------------- | ------------------------ | -------------------------- | -------------------- | ------------------ | ---------------- | ------------------- | ------------------ | -------------------- | -------------------- |
| 时间      | 省份   |                |                 |              |                 |                          |                            |                      |                    |                  |                     |                    |                      |                      |
| 2015年1月 | 全国   | 357.82         | -3.0            | 2474         | 8.0             | 15                       | 65                         | 76                   | 422                | 1429.99          | 15.81               | 6.87               | 88.22                | 19.10                |
| 广东      | 117.02 | -4.0           | 490             | 8.0          | 1               | 7                        | 13                         | 81                   | 243.75             | 15.15            | 3.83                | 27.76              | 3.34                 |                      |
| 北京      | 72.28  | 2.0            | 334             | 9.0          | 3               | 9                        | 1                          | 19                   | 609.12             | 13.27            | 11.22               | 34.40              | 8.04                 |                      |
| 浙江      | 44.80  | -6.0           | 218             | 3.0          | 2               | 10                       | 6                          | 63                   | 87.53              | 16.78            | 2.00                | 5.57               | 1.45                 |                      |
| 上海      | 45.91  | -6.0           | 263             | 9.0          | 1               | 6                        | 3                          | 31                   | 199.81             | 11.29            | 18.29               | 8.75               | 5.19                 |                      |
| 江苏      | 15.91  | 1.0            | 90              | 7.0          | 2               | 6                        | 4                          | 33                   | 52.78              | 20.63            | 4.41                | 2.20               | 0.21                 |                      |
| 山东      | 11.38  | -16.0          | 256             | 11.0         | 2               | 4                        | 29                         | 72                   | 79.34              | 22.98            | 2.97                | 1.48               | 0.20                 |                      |
| 湖北      | 7.06   | 3.0            | 86              | 10.0         | 0               | 2                        | 0                          | 16                   | 11.02              | 17.56            | 3.48                | 1.83               | 0.23                 |                      |
| 四川      | 11.10  | -1.0           | 84              | 0.0          | 0               | 2                        | 4                          | 16                   | 10.91              | 15.82            | 4.33                | 1.77               | 0.24                 |                      |
| 其他      | 32.36  | -4.0           | 653             | 9.0          | 4               | 19                       | 16                         | 91                   | 135.73             | 23.66            | 2.88                | 4.48               | 0.20                 |                      |

In [21]:

```
tl = Timeline()
datetime = '{}年{}月'
for y in range(2015,2020):
    for m in range(1,13):
        date = datetime.format(y,m)
        data = data2.loc[date].loc[['广东','北京','浙江','上海','江苏','山东','湖北','四川','其他']]
        pie = (
            Pie(init_opts=opts.InitOpts(width='400px', height='300px'))
            .add(
                "成交量（亿元）",
                [list(z) for z in zip(data.index, data['成交量（亿元）'])],
                rosetype="radius",
                radius=["30%", "55%"],
                center=["25%", "50%"],
            )
            .add(
                "运营平台数量（家）",
                [list(z) for z in zip(data.index, data['运营平台数量'])],
                rosetype="area",
                radius=["30%", "55%"],
                center=["75%", "50%"],
            )
            .set_global_opts(title_opts=opts.TitleOpts("P2P平台{}年{}月成交量与运营平台数量区域分布".format(y,m))
                            ,legend_opts=opts.LegendOpts(is_show=False))
        )
        tl.add(pie, "{}年{}月".format(y,m))
tl.render_notebook()
```

Out[21]:

- P2P行业的成交量主要集中在北京、广东、上海、浙江，但在2018年之后，成交量开始出现明显的下降，而成交量也逐渐集中在北京。  
- P2P行业的平台主要分布在广东、北京、浙江、上海、江苏、山东、湖北、四川，平台数量也在2018年之后开始下降，特别是浙江、上海这两个地方的平台数量。  

In [37]:

```
data3 = pd.read_csv('./平台类型.csv',header=None,names=["时间","平台类型","成交量（亿元）","月同比增长（%）",
"运营平台数量","月环比增长（%）","当月转型及停业平台数(家)","累计转型及停业平台数（家）","当月问题平台数（家）",
"累计问题平台数(家)","待还余额（亿元）","综合参考收益率（%）","平均借款期限（月）","当月投资人数（万人）","当月借款人数（万人）"])
```

In [38]:

```
data3.head()
```

Out[38]:

|      | 时间      | 平台类型 | 成交量（亿元） | 月同比增长（%） | 运营平台数量 | 月环比增长（%） | 当月转型及停业平台数(家) | 累计转型及停业平台数（家） | 当月问题平台数（家） | 累计问题平台数(家) | 待还余额（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 当月投资人数（万人） | 当月借款人数（万人） |
| ---- | --------- | -------- | -------------- | --------------- | ------------ | --------------- | ------------------------ | -------------------------- | -------------------- | ------------------ | ---------------- | ------------------- | ------------------ | -------------------- | -------------------- |
| 0    | 2015年1月 | 民营系   | 256.80         | -3.0            | 2293         | 7.0             | 15                       | 64                         | 76                   | 421                | 651.09           | 16.18               | 4.31               | 57.93                | 12.73                |
| 1    | 2015年1月 | 银行系   | 13.80          | -6.0            | 4            | 0.0             | 0                        | 0                          | 0                    | 0                  | 154.37           | 7.80                | 21.59              | 3.40                 | 0.74                 |
| 2    | 2015年1月 | 上市系   | 39.36          | 0.0             | 38           | 12.0            | 0                        | 0                          | 0                    | 0                  | 69.16            | 12.89               | 9.02               | 9.70                 | 2.10                 |
| 3    | 2015年1月 | 国资系   | 9.79           | -29.0           | 72           | 14.0            | 0                        | 0                          | 0                    | 0                  | 35.40            | 10.19               | 5.02               | 2.41                 | 0.52                 |
| 4    | 2015年1月 | 风投系   | 60.32          | 0.0             | 34           | 17.0            | 0                        | 0                          | 0                    | 0                  | 210.62           | 13.04               | 10.75              | 14.77                | 3.01                 |

In [39]:

```
data3 = data3.set_index(['时间','平台类型'])
```

In [40]:

```
data3.head()
```

Out[40]:

|           |          | 成交量（亿元） | 月同比增长（%） | 运营平台数量 | 月环比增长（%） | 当月转型及停业平台数(家) | 累计转型及停业平台数（家） | 当月问题平台数（家） | 累计问题平台数(家) | 待还余额（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 当月投资人数（万人） | 当月借款人数（万人） |
| --------- | -------- | -------------- | --------------- | ------------ | --------------- | ------------------------ | -------------------------- | -------------------- | ------------------ | ---------------- | ------------------- | ------------------ | -------------------- | -------------------- |
| 时间      | 平台类型 |                |                 |              |                 |                          |                            |                      |                    |                  |                     |                    |                      |                      |
| 2015年1月 | 民营系   | 256.80         | -3.0            | 2293         | 7.0             | 15                       | 64                         | 76                   | 421                | 651.09           | 16.18               | 4.31               | 57.93                | 12.73                |
| 银行系    | 13.80    | -6.0           | 4               | 0.0          | 0               | 0                        | 0                          | 0                    | 154.37             | 7.80             | 21.59               | 3.40               | 0.74                 |                      |
| 上市系    | 39.36    | 0.0            | 38              | 12.0         | 0               | 0                        | 0                          | 0                    | 69.16              | 12.89            | 9.02                | 9.70               | 2.10                 |                      |
| 国资系    | 9.79     | -29.0          | 72              | 14.0         | 0               | 0                        | 0                          | 0                    | 35.40              | 10.19            | 5.02                | 2.41               | 0.52                 |                      |
| 风投系    | 60.32    | 0.0            | 34              | 17.0         | 0               | 0                        | 0                          | 0                    | 210.62             | 13.04            | 10.75               | 14.77              | 3.01                 |                      |

In [44]:

```
tl = Timeline()
datetime = '{}年{}月'
for y in range(2015,2020):
    for m in range(1,13):
        date = datetime.format(y,m)
        data = data3.loc[date]
        pie = (
            Pie(init_opts=opts.InitOpts(width='400px', height='300px'))
            .add(
                "成交量（亿元）",
                [list(z) for z in zip(data.index, data['成交量（亿元）'])],
                radius=["30%", "55%"],
                center=["25%", "50%"],
            )
            .add(
                "运营平台数量（家）",
                [list(z) for z in zip(data.index, data['运营平台数量'])],
                radius=["30%", "55%"],
                center=["75%", "50%"],
            )
            .set_global_opts(title_opts=opts.TitleOpts("P2P平台{}年{}月成交量平台类型分布".format(y,m))
                            ,legend_opts=opts.LegendOpts(is_show=False))
        )
        tl.add(pie, "{}年{}月".format(y,m))
tl.render_notebook()
```

Out[44]:

在2016年4月之前，民营系平台的成交量占所有平台总成交量的一半以上，但民营系平台数量在2016年见顶后持续走低，其中很多是因为运营出现问题而退出市场。而银行系平台和上市公司系平台近年来基本保持稳定，国资系和风投系则稳步增长，由此可见，随着具有雄厚资本的国资、风投等正规军的扩容，民营系面临的竞争格局也越来越严峻，民营系平台准入门槛较低，也不具备完善的风控体系，各类问题平台也逐渐浮出水面,成交量也逐渐被其他类型平台瓜分。

In [45]:

```
data3 = data3.reset_index().set_index(['平台类型','时间'])
```

In [46]:

```
data3.head()
```

Out[46]:

|          |           | 成交量（亿元） | 月同比增长（%） | 运营平台数量 | 月环比增长（%） | 当月转型及停业平台数(家) | 累计转型及停业平台数（家） | 当月问题平台数（家） | 累计问题平台数(家) | 待还余额（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 当月投资人数（万人） | 当月借款人数（万人） |
| -------- | --------- | -------------- | --------------- | ------------ | --------------- | ------------------------ | -------------------------- | -------------------- | ------------------ | ---------------- | ------------------- | ------------------ | -------------------- | -------------------- |
| 平台类型 | 时间      |                |                 |              |                 |                          |                            |                      |                    |                  |                     |                    |                      |                      |
| 民营系   | 2015年1月 | 256.80         | -3.0            | 2293         | 7.0             | 15                       | 64                         | 76                   | 421                | 651.09           | 16.18               | 4.31               | 57.93                | 12.73                |
| 银行系   | 2015年1月 | 13.80          | -6.0            | 4            | 0.0             | 0                        | 0                          | 0                    | 0                  | 154.37           | 7.80                | 21.59              | 3.40                 | 0.74                 |
| 上市系   | 2015年1月 | 39.36          | 0.0             | 38           | 12.0            | 0                        | 0                          | 0                    | 0                  | 69.16            | 12.89               | 9.02               | 9.70                 | 2.10                 |
| 国资系   | 2015年1月 | 9.79           | -29.0           | 72           | 14.0            | 0                        | 0                          | 0                    | 0                  | 35.40            | 10.19               | 5.02               | 2.41                 | 0.52                 |
| 风投系   | 2015年1月 | 60.32          | 0.0             | 34           | 17.0            | 0                        | 0                          | 0                    | 0                  | 210.62           | 13.04               | 10.75              | 14.77                | 3.01                 |

In [72]:

```
l1 = (
    Line()
    .add_xaxis(xaxis_data=data3.loc['民营系'].index)
    .add_yaxis("民营系",data3.loc['民营系']['成交量（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("银行系",data3.loc['银行系']['成交量（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("上市系",data3.loc['上市系']['成交量（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("国资系",data3.loc['国资系']['成交量（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("风投系",data3.loc['风投系']['成交量（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="成交量与平台运营关系图", pos_left="center"
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_show=True,
                is_realtime=True,
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        xaxis_opts=opts.AxisOpts(
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
        ),
        yaxis_opts=opts.AxisOpts(name="成交量（亿元）"),
        legend_opts=opts.LegendOpts(orient='vertical',pos_left='10%'),
        toolbox_opts=opts.ToolboxOpts(
            is_show=True,
            feature={
                "dataZoom": {"yAxisIndex": "none"},
                "restore": {},
                "saveAsImage": {},
            },
        ),
    )
)

l2 = (
    Line()
    .add_xaxis(xaxis_data=data3.loc['民营系'].index)
    .add_yaxis("民营系",data3.loc['民营系']['累计问题平台数(家)'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("银行系",data3.loc['银行系']['累计问题平台数(家)'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("上市系",data3.loc['上市系']['累计问题平台数(家)'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("国资系",data3.loc['国资系']['累计问题平台数(家)'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("风投系",data3.loc['风投系']['累计问题平台数(家)'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        xaxis_opts=opts.AxisOpts(
            grid_index=1,
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
            position="top",
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_realtime=True,
                type_="inside",
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        yaxis_opts=opts.AxisOpts(is_inverse=True, name="问题平台数量（家）"),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

grid1 = (
    Grid(init_opts=opts.InitOpts(width="1024px", height="768px",theme='shine'))
    .add(chart=l1, grid_opts=opts.GridOpts(pos_left=50, pos_right=50, height="35%"))
    .add(
        chart=l2,
        grid_opts=opts.GridOpts(pos_left=50, pos_right=50, pos_top="55%", height="35%"),
    ))
grid1.render_notebook()
```

Out[72]:

民营系平台问题平台数量远超其他类型平台，2016年底，民营系平台的成交量与上市系、风投系平台较为接近，但问题平台的数量仍快速增加，而上市系、风投系平台问题平台数量较为稳定，说明问题平台的出现与成交量无关，而与各类型平台的运营、资本、风控等相关。并且民营系平台个人或私企自主开发的P2P网贷平台，准入门槛较低，投资门槛也较低，也更容易出现‘浑水摸鱼’的情况。

In [48]:

```
l1 = (
    Line()
    .add_xaxis(xaxis_data=data3.loc['民营系'].index)
    .add_yaxis("民营系",data3.loc['民营系']['综合参考收益率（%）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("银行系",data3.loc['银行系']['综合参考收益率（%）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("上市系",data3.loc['上市系']['综合参考收益率（%）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("国资系",data3.loc['国资系']['综合参考收益率（%）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("风投系",data3.loc['风投系']['综合参考收益率（%）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="收益率和借款期限与平台运营关系图", pos_left="center"
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_show=True,
                is_realtime=True,
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        xaxis_opts=opts.AxisOpts(
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
        ),
        yaxis_opts=opts.AxisOpts(name="综合参考收益率（%）"),
        legend_opts=opts.LegendOpts(orient='vertical',pos_left='15%'),
        toolbox_opts=opts.ToolboxOpts(
            is_show=True,
            feature={
                "dataZoom": {"yAxisIndex": "none"},
                "restore": {},
                "saveAsImage": {},
            },
        ),
    )
)

l2 = (
    Line()
    .add_xaxis(xaxis_data=data3.loc['民营系'].index)
    .add_yaxis("民营系",data3.loc['民营系']['平均借款期限（月）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("银行系",data3.loc['银行系']['平均借款期限（月）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("上市系",data3.loc['上市系']['平均借款期限（月）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("国资系",data3.loc['国资系']['平均借款期限（月）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("风投系",data3.loc['风投系']['平均借款期限（月）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        xaxis_opts=opts.AxisOpts(
            grid_index=1,
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
            position="top",
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_realtime=True,
                type_="inside",
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        yaxis_opts=opts.AxisOpts(is_inverse=True, name="平均借款期限（月）"),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

grid1 = (
    Grid(init_opts=opts.InitOpts(width="1024px", height="768px",theme='shine'))
    .add(chart=l1, grid_opts=opts.GridOpts(pos_left=50, pos_right=50, height="35%"))
    .add(
        chart=l2,
        grid_opts=opts.GridOpts(pos_left=50, pos_right=50, pos_top="55%", height="35%"),
    ))
grid1.render_notebook()
```

Out[48]:

- P2P各类型平台网贷综合收益率一直呈现下降的趋势，主要是与行业处于发展初期，公信力不强、需要以高利益高回报吸引投资者。而随着监管的日益加强、行业竞争的加剧，部分成交量较大的平台越发成熟，不需要再继续维持高利率有关。  
- P2P各类型平台网络贷款的平均借款期总体呈现增长的趋势，主要是大型平台，集中度更高，中小平台的发展规模缩小，这些大平台比较倾向制定长期目标，从而推动平均借款期限延长。  

In [49]:

```
data4 = pd.read_csv('./行业成交.csv',header=None,names=["时间","成交量（亿元）","综合参考收益率（%）",
"平均借款期限（月）","待还余额（亿元）","资金净流入（亿元）"])
```

In [50]:

```
data4.head()
```

Out[50]:

|      | 时间    | 成交量（亿元） | 综合参考收益率（%） | 平均借款期限（月） | 待还余额（亿元） | 资金净流入（亿元） |
| ---- | ------- | -------------- | ------------------- | ------------------ | ---------------- | ------------------ |
| 0    | 2019-12 | 428.89         | 9.461               | 15.714             | 4915.91          | -492.37            |
| 1    | 2019-11 | 506.23         | 9.380               | 15.380             | 5408.28          | -484.41            |
| 2    | 2019-10 | 570.27         | 9.490               | 14.500             | 5892.69          | -206.79            |
| 3    | 2019-09 | 697.42         | 9.670               | 14.920             | 6099.48          | -329.31            |
| 4    | 2019-08 | 780.46         | 9.830               | 15.280             | 6428.79          | -241.15            |

In [51]:

```
data4['时间'] = data4['时间'].str.split('-').str[0]+'年'+data4['时间'].str.split('-').str[1]+'月'
```

In [52]:

```
line = (Line(init_opts=opts.InitOpts(
            # 设置主题
            theme='light'))
    .add_xaxis(data4['时间'].tolist())
    .add_yaxis("待还余额（亿元）", data4['待还余额（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("资金净流入（亿元）", data4['资金净流入（亿元）'].tolist(),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="P2P平台运营情况"),
        datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_="inside")]
)
      )

line.render_notebook()
```

Out[52]:

2018年之后，随着P2P平台开始清退，P2P行业的待还款余额逐渐减少，资金的流入也较为稳定，但是资金的流入依旧低于待还款余额，这说明依旧会有一部分出借人面临收不回款项的情况。

In [67]:

```
data5 = pd.read_csv('./行业人气.csv',header=None,names=["时间","投资人数（万人）","借款人数（万人）",
"人均投资金额（元）","人均借款金额（元）"])
```

In [64]:

```
data5.head()
```

Out[64]:

|      | 时间       | 投资人数（万人） | 借款人数（万人） | 人均投资金额（元） | 人均借款金额（元） |
| ---- | ---------- | ---------------- | ---------------- | ------------------ | ------------------ |
| 0    | 2019年12月 | 110.39           | 119.06           | 38852.21           | 36022.98           |
| 1    | 2019年11月 | 129.03           | 138.46           | 39233.38           | 36561.34           |
| 2    | 2019年10月 | 142.92           | 159.25           | 39901.21           | 35809.61           |
| 3    | 2019年09月 | 170.06           | 189.04           | 41010.45           | 36892.92           |
| 4    | 2019年08月 | 185.14           | 215.44           | 42155.35           | 36226.52           |

In [68]:

```
data5['时间'] = data5['时间'].str.split('-').str[0]+'年'+data5['时间'].str.split('-').str[1]+'月'
```

In [65]:

```
data5['投资人数（万人）'].tolist().reverse()
```

In [73]:

```
l1 = (
    Line()
    .add_xaxis(list(reversed(data5['时间'])))
    .add_yaxis("投资人数（万人）",list(reversed(data5['投资人数（万人）'])),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("借款人数（万人）",list(reversed(data5['借款人数（万人）'])),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="P2P行业活跃情况", pos_left="center"
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_show=True,
                is_realtime=True,
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        xaxis_opts=opts.AxisOpts(
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
        ),
        yaxis_opts=opts.AxisOpts(name="人数（万人）"),
        legend_opts=opts.LegendOpts(orient='vertical',pos_left='7%'),
        toolbox_opts=opts.ToolboxOpts(
            is_show=True,
            feature={
                "dataZoom": {"yAxisIndex": "none"},
                "restore": {},
                "saveAsImage": {},
            },
        ),
    )
)

l2 = (
    Line()
    .add_xaxis(list(reversed(data5['时间'])))
    .add_yaxis("人均投资金额（元）",list(reversed(data5['人均投资金额（元）'])),label_opts=opts.LabelOpts(is_show=False))
    .add_yaxis("人均借款金额（元）",list(reversed(data5['人均借款金额（元）'])),label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True, link=[{"xAxisIndex": "all"}]
        ),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        xaxis_opts=opts.AxisOpts(
            grid_index=1,
            type_="category",
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=True),
            position="top",
        ),
        datazoom_opts=[
            opts.DataZoomOpts(
                is_realtime=True,
                type_="inside",
                start_value=30,
                end_value=70,
                xaxis_index=[0, 1],
            )
        ],
        yaxis_opts=opts.AxisOpts(is_inverse=True, name="金额（元）"),
        legend_opts=opts.LegendOpts(orient='vertical',pos_left='20%'),
    )
)

grid2 = (
    Grid(init_opts=opts.InitOpts(width="1024px", height="768px",theme='shine'))
    .add(chart=l1, grid_opts=opts.GridOpts(pos_left=50, pos_right=50, height="35%"))
    .add(
        chart=l2,
        grid_opts=opts.GridOpts(pos_left=50, pos_right=50, pos_top="55%", height="35%"),
    ))
grid2.render_notebook()
```

Out[73]:

P2P平台在2014年的野蛮生长时期虽然没有吸引太多的投资者，但是人均借款金额远超人均投资金额，这样很容易出现流动性风险。随着更多投资者和借款人的加入，人均借款金额和人均投资金额开始逐渐接近。2018年之后，随着P2P平台的频繁爆雷，严重打击了投资者的信心，投资者开始逐渐退出P2P平台，随着投资人的减少，借款人也逐渐减少。

In [3]:

```
data6 = pd.read_csv('./问题平台.csv',header=None,names=["平台名称","问题时间","上线时间","注册资本（万元）",
"地区","问题类型"])
```

In [4]:

```
data6['问题年份'] = data6['问题时间'].str.split('-').str[0]
data6 = data6[['平台名称','问题年份','问题时间','上线时间','注册资本（万元）','地区','问题类型']]
```

In [5]:

```
data6.head()
```

Out[5]:

|      | 平台名称 | 问题年份 | 问题时间 | 上线时间 | 注册资本（万元） | 地区 | 问题类型 |
| ---- | -------- | -------- | -------- | -------- | ---------------- | ---- | -------- |
| 0    | 蚂蚁贷   | 2011     | 2011-12  | 2011-01  | 0.0              | 重庆 | 跑路     |
| 1    | 及时贷   | 2011     | 2011-12  | 2011-01  | 1000.0           | 河南 | 跑路     |
| 2    | 给力贷   | 2011     | 2011-11  | 2011-01  | 0.0              | 广西 | 跑路     |
| 3    | 天使计划 | 2011     | 2011-10  | 2011-01  | 0.0              | 云南 | 跑路     |
| 4    | 贝尔创投 | 2011     | 2011-09  | 2011-01  | 0.0              | 江苏 | 跑路     |

In [6]:

```
data = data6.groupby('问题类型')['问题年份'].value_counts(sort=False).to_frame('数量')
```

In [7]:

```
data1 = data.loc['提现困难'].reset_index().rename(columns={'问题年份':'year','数量':'提现困难数量'}).astype('int64')
data2 = data.loc['跑路'].reset_index().rename(columns={'问题年份':'year','数量':'跑路数量'}).astype('int64')
data3 = data.loc['经侦介入'].reset_index().rename(columns={'问题年份':'year','数量':'经侦介入数量'}).astype('int64')
data4 = data.loc['网站关闭'].reset_index().rename(columns={'问题年份':'year','数量':'网站关闭数量'}).astype('int64')
data5 = data.loc['延期兑付'].reset_index().rename(columns={'问题年份':'year','数量':'延期兑付数量'}).astype('int64')
```

In [8]:

```
key = pd.DataFrame(np.arange(2011,2021),columns=['year'])
```

In [9]:

```
stack = pd.merge(key,data1,on='year',how='left')
stack = pd.merge(stack,data2,on='year',how='left')
stack = pd.merge(stack,data3,on='year',how='left')
stack = pd.merge(stack,data4,on='year',how='left')
stack = pd.merge(stack,data5,on='year',how='left')
stack.fillna(0,inplace=True)
```

In [16]:

```
stack.head()
```

Out[16]:

|      | year | 提现困难数量 | 跑路数量 | 经侦介入数量 | 网站关闭数量 | 延期兑付数量 |
| ---- | ---- | ------------ | -------- | ------------ | ------------ | ------------ |
| 0    | 2011 | 0.0          | 5.0      | 0.0          | 0.0          | 0.0          |
| 1    | 2012 | 0.0          | 4.0      | 0.0          | 0.0          | 0.0          |
| 2    | 2013 | 66.0         | 6.0      | 0.0          | 0.0          | 0.0          |
| 3    | 2014 | 122.0        | 138.0    | 5.0          | 0.0          | 0.0          |
| 4    | 2015 | 284.0        | 567.0    | 15.0         | 0.0          | 0.0          |

In [15]:

```
bar = (
    Bar()
    .add_xaxis(stack['year'].tolist())
    .add_yaxis("提现困难", stack['提现困难数量'].tolist(), stack="stack1")
    .add_yaxis("跑路", stack['跑路数量'].tolist(), stack="stack1")
    .add_yaxis("经侦介入", stack['经侦介入数量'].tolist(), stack="stack1")
    .add_yaxis("网站关闭", stack['网站关闭数量'].tolist(), stack="stack1")
    .add_yaxis("延期兑付", stack['延期兑付数量'].tolist(), stack="stack1")
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title="问题平台的问题类型情况"),
                        tooltip_opts=opts.TooltipOpts(trigger="axis"))
)
bar.render_notebook()
```

Out[15]:

在P2P行业野蛮生长时期，P2P行业有大量的跑路及提现困难的情况，提现困难是由于平台投资人需要先在平台充值才能投标，而平台偷设资金池将投资人充值的金额用作它用，导致投资人提现的时候出现提现困难的情况。自2016年监管加严之后，平台跑路和提现困难的情况有所改善。2018年平台频繁爆雷，导致更多的经侦介入的问题平台，随着P2P行业不断加强监管，平台清退不断推进，更多问题平台出现网站关闭、延期兑付的情况。

# 总结[¶](#总结)

从国内第一家P2P公司拍拍贷（信也科技）2007年6月成立算起，P2P行业从无到有，进而遍地开花，再到发生多起风险市场，最终清零落幕，前后不过短短13年。

2016年，一系列行业监管政策相继落地，互联网金融迎来合规元年。2017年对P2P网贷行业来说是“冰与火”交融的一年。一边在行业合规压力之下，行业开启洗牌潮，超500家P2P平台被淘汰；另一边多家平台迎来了扭亏为盈，并掀起了互联网金融平台的海外上市潮。

2018年7月14日，深圳市公安局南山分局正式对投之家“涉嫌集资诈骗案”进行立案侦查，投之家累计投资额超265亿元。除了投之家，以唐小僧、善林金融、牛板金、草根投资为代表的一批P2P平台也在当年轰然倒塌，牵连到华闻传媒、万家乐等多家上市公司。此类消息不断传出，彻底打破了互联网金融最后的热点防线。

网贷之家数据显示，2016年底，四大网贷重镇广东、北京、上海、浙江，正常运营平台数量分别为473、461、331、280；到了2018年底，四大地区平台数量则变为236、211、114、79。2019年3月23日，上线运营10年、累计出借超4000亿元的P2P平台红岭创投宣布清盘，董事长周世平在红岭社区发帖《虽然是清盘，但不是说再见！》，还发朋友圈称将卖掉个人房产来兑付平台投资者。五天之后，头部平台团贷网曝出风险，涉及20余万出借人，关联的A股公司派生科技实控人唐军自首，并以涉嫌非吸被立案侦查。

2019年11月15日，互金行业最为出名的“83号文”下发，明确提出要引导部分符合条件的网贷机构转型为小贷公司，主动处置和化解网贷机构存量业务风险，最大限度减少出借人损失，维护社会稳定，促进普惠金融规范有序发展。随后，山东、湖南、河南、重庆、深圳等地方金融办相继宣布对P2P进行“清场”。截至2019年9月末，停业网贷机构已经超过1200家，全国已立案侦查786家。

银保监会12月4日发布《中国影子银行报告》，这是监管部门首次对影子银行的概念、影响等发布全面的分析报告。报告指出，经过三年治理，我国的影子银行规模大幅压缩，野蛮生长得到了根本遏制。

报告显示，我国从2017年初开始集中整治，影子银行规模从历史高位大幅下降。截至2019年末，广义影子规模降至84.80万亿元，较2017年初100.4万亿元的历史峰值缩减近16万亿元。影子银行占GDP的比例从2016年底的123%下降至2019年底的86%，降幅达37个百分点。加通道、加杠杆和加嵌套的高风险业务得到重点清理。一批互联网金融领域大案要案得到稳妥处置。实际运营的网络借贷P2P机构目前已经完全归零，利用影子银行跨行业跨机构腾挪资金、占用资金、窃取资金等违法违规行为减少，金融市场秩序开始好转，风险水平由发散转为收敛。

P2P平台数量的清零表示P2P网贷彻底淡出人们的视野，但金融创新不应也不会止步。因此，我们要汲取教训，睁大眼睛，警惕新的类似P2P类平台的借尸还魂。要以此为鉴往，深刻反思我们的监管，不断完善我们的监管制度。