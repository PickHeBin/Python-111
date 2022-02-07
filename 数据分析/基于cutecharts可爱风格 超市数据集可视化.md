In [1]:

```
import numpy as np
import pandas as pd
```

# 1.2数据的导入清洗[¶](#1.2数据的导入清洗)

In [2]:

```
# 读取文件
data = pd.read_csv('/home/kesci/input/superMarket9728/supermarket.csv')
#查看数据前10行
data.head(10)
```

Out[2]:

|      | id                   | product_name               | delivery_date | nation | area | city   | detail_sub | customer_id | customer_name | province | ...  | category.1 | sub.1  | rowid.1 | order_id.1      | order_date.1 | post.1 | profit.1 | account.1 | amount.1 | sales.1   |
| ---- | -------------------- | -------------------------- | ------------- | ------ | ---- | ------ | ---------- | ----------- | ------------- | -------- | ---- | ---------- | ------ | ------- | --------------- | ------------ | ------ | -------- | --------- | -------- | --------- |
| 0    | 办公用-用品-10002717 | Fiskars 剪刀, 蓝色         | 2018/1/1      | 中国   | 华东 | 杭州   | 用品       | 曾惠-14485  | 曾惠          | 浙江     | ...  | 办公用品   | 公司   | 1       | US-2014-1357144 | 2018/1/1     | 二级   | -60.704  | 0.4       | 2        | 129.696   |
| 1    | 办公用-信封-10004832 | GlobeWeis 搭扣信封, 红色   | 2018/1/2      | 中国   | 西南 | 内江   | 信封       | 许安-10165  | 许安          | 四川     | ...  | 办公用品   | 消费者 | 2       | CN-2014-1973789 | 2018/1/2     | 标准级 | 42.560   | 0.0       | 2        | 125.440   |
| 2    | 办公用-装订-10001505 | Cardinal 孔加固材料, 回收  | 2018/1/3      | 中国   | 西南 | 内江   | 装订机     | 许安-10165  | 许安          | 四川     | ...  | 办公用品   | 消费者 | 3       | CN-2014-1973789 | 2018/1/3     | 标准级 | 4.200    | 0.4       | 2        | 31.920    |
| 3    | 办公用-用品-10003746 | Kleencut 开信刀, 工业      | 2018/1/4      | 中国   | 华东 | 镇江   | 用品       | 宋良-17170  | 宋良          | 江苏     | ...  | 办公用品   | 公司   | 4       | US-2014-3017568 | 2018/1/4     | 标准级 | -27.104  | 0.4       | 4        | 321.216   |
| 4    | 办公用-器具-10003452 | KitchenAid 搅拌机, 黑色    | 2018/1/5      | 中国   | 中南 | 汕头   | 器具       | 万兰-15730  | 万兰          | 广东     | ...  | 办公用品   | 消费者 | 5       | CN-2013-2975416 | 2018/1/5     | 二级   | 550.200  | 0.0       | 3        | 1375.920  |
| 5    | 技术-设备-10001640   | 柯尼卡 打印机, 红色        | 2018/1/6      | 中国   | 华东 | 景德镇 | 设备       | 俞明-18325  | 俞明          | 江西     | ...  | 技术       | 消费者 | 6       | CN-2012-4497736 | 2018/1/6     | 标准级 | 3783.780 | 0.0       | 9        | 11129.580 |
| 6    | 办公用-装订-10001029 | Ibico 订书机, 实惠         | 2018/1/7      | 中国   | 华东 | 景德镇 | 装订机     | 俞明-18325  | 俞明          | 江西     | ...  | 办公用品   | 消费者 | 7       | CN-2012-4497736 | 2018/1/7     | 标准级 | 172.760  | 0.0       | 2        | 479.920   |
| 7    | 家具-椅子-10000578   | SAFCO 扶手椅, 可调         | 2018/1/8      | 中国   | 华东 | 景德镇 | 椅子       | 俞明-18325  | 俞明          | 江西     | ...  | 家具       | 消费者 | 8       | CN-2012-4497736 | 2018/1/8     | 标准级 | 2684.080 | 0.0       | 4        | 8659.840  |
| 8    | 办公用-纸张-10001629 | Green Bar 计划信息表, 多色 | 2018/1/9      | 中国   | 华东 | 景德镇 | 纸张       | 俞明-18325  | 俞明          | 江西     | ...  | 办公用品   | 消费者 | 9       | CN-2012-4497736 | 2018/1/9     | 标准级 | 46.900   | 0.0       | 5        | 588.000   |
| 9    | 办公用-系固-10004801 | Stockwell 橡皮筋, 整包     | 2018/1/10     | 中国   | 华东 | 景德镇 | 系固件     | 俞明-18325  | 俞明          | 江西     | ...  | 办公用品   | 消费者 | 10      | CN-2012-4497736 | 2018/1/10    | 标准级 | 33.880   | 0.0       | 2        | 154.280   |

10 rows × 31 columns

In [3]:

```
data.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 1547 entries, 0 to 1546
Data columns (total 31 columns):
id               1547 non-null object
product_name     1547 non-null object
delivery_date    1547 non-null object
nation           1547 non-null object
area             1547 non-null object
city             1547 non-null object
detail_sub       1547 non-null object
customer_id      1547 non-null object
customer_name    1547 non-null object
province         1547 non-null object
category         1547 non-null object
sub              1547 non-null object
rowid            1547 non-null int64
order_id         1547 non-null object
order_date       1547 non-null object
post             1547 non-null object
profit           1547 non-null float64
account          1547 non-null float64
amount           1547 non-null int64
sales            1547 non-null float64
province.1       1547 non-null object
category.1       1547 non-null object
sub.1            1547 non-null object
rowid.1          1547 non-null int64
order_id.1       1547 non-null object
order_date.1     1547 non-null object
post.1           1547 non-null object
profit.1         1547 non-null float64
account.1        1547 non-null float64
amount.1         1547 non-null int64
sales.1          1547 non-null float64
dtypes: float64(6), int64(4), object(21)
memory usage: 374.7+ KB
```

# 2 数据可视化阶段[¶](#2-数据可视化阶段)

In [4]:

```
from cutecharts.charts import *
from cutecharts.components import Page
from cutecharts.faker import Faker
```

In [5]:

```
# 统计一下sub.1	 这一列中的元素数量查看一下是公司订单多还是个人订单多量
data['sub.1'].value_counts()
```

Out[5]:

```
消费者     806
公司      503
小型企业    238
Name: sub.1, dtype: int64
```

In [6]:

```
# 从此图中查看到从销售量来看消费者>公司>小型企业
x_data = ['消费者', '公司', '小型企业']
y_data = [806, 503, 238]

chart = Pie("超市订单客户占比")
chart.set_options(
    labels=x_data,
    colors=Faker.colors
)
chart.add_series(y_data)

chart.render_notebook()
```

Out[6]:

超市订单客户占比tooltipweweyang: 12timqian: 13消费者公司小型企业

In [7]:

```
#  先将sub.1列和product_name 单独取出成立一个新的表  这里数据分组比较复杂 后续接着探索
discipline = data[['sub.1', 'product_name']]
"""按照数据框的列product_name降序(descending)的方式对数据框discipline做降序排序
并显示前100列"""
discipline.sort_values('product_name', ascending=False).head(100)
```

Out[7]:

|      | sub.1    | product_name              |
| ---- | -------- | ------------------------- |
| 1090 | 消费者   | 贝尔金 鼠标, 耐用         |
| 431  | 消费者   | 贝尔金 鼠标, 耐用         |
| 232  | 公司     | 贝尔金 鼠标, 可编程       |
| 410  | 消费者   | 贝尔金 闪存驱动器, 实惠   |
| 207  | 公司     | 贝尔金 闪存驱动器, 回收   |
| 126  | 公司     | 贝尔金 闪存驱动器, 回收   |
| 1007 | 消费者   | 贝尔金 闪存驱动器, 可编程 |
| 1493 | 消费者   | 贝尔金 键盘, 耐用         |
| 202  | 消费者   | 贝尔金 键盘, 实惠         |
| 574  | 消费者   | 贝尔金 键盘, 回收         |
| 336  | 消费者   | 贝尔金 键区, 耐用         |
| 1419 | 消费者   | 贝尔金 键区, 回收         |
| 376  | 消费者   | 贝尔金 键区, 可编程       |
| 377  | 公司     | 贝尔金 路由器, 耐用       |
| 952  | 小型企业 | 贝尔金 路由器, 耐用       |
| 1447 | 公司     | 贝尔金 路由器, 耐用       |
| 113  | 消费者   | 贝尔金 路由器, 耐用       |
| 1263 | 消费者   | 贝尔金 路由器, 可编程     |
| 405  | 公司     | 贝尔金 路由器, 可编程     |
| 512  | 消费者   | 贝尔金 记忆卡, 耐用       |
| 178  | 公司     | 贝尔金 记忆卡, 耐用       |
| 1085 | 小型企业 | 贝尔金 记忆卡, 耐用       |
| 1328 | 消费者   | 贝尔金 记忆卡, 耐用       |
| 1227 | 公司     | 贝尔金 记忆卡, 实惠       |
| 759  | 消费者   | 贝尔金 记忆卡, 可编程     |
| 189  | 消费者   | 诺基亚 音频基座, 混合尺寸 |
| 449  | 小型企业 | 诺基亚 耳机, 蓝色         |
| 1390 | 消费者   | 诺基亚 智能手机, 混合尺寸 |
| 208  | 公司     | 诺基亚 智能手机, 混合尺寸 |
| 112  | 消费者   | 诺基亚 办公室电话机, 整包 |
| ...  | ...      | ...                       |
| 1020 | 消费者   | 罗技 记忆卡, 实惠         |
| 227  | 消费者   | 罗技 记忆卡, 可编程       |
| 10   | 小型企业 | 爱普生 计算器, 耐用       |
| 1295 | 消费者   | 爱普生 计算器, 白色       |
| 1171 | 小型企业 | 爱普生 计算器, 多色       |
| 1541 | 公司     | 爱普生 电话, 耐用         |
| 263  | 公司     | 爱普生 电话, 红色         |
| 1363 | 小型企业 | 爱普生 收据打印机, 耐用   |
| 98   | 公司     | 爱普生 收据打印机, 耐用   |
| 1149 | 公司     | 爱普生 打印机, 白色       |
| 591  | 消费者   | 爱普生 打印机, 白色       |
| 622  | 公司     | 爱普生 卡片打印机, 耐用   |
| 1450 | 公司     | 爱普生 卡片打印机, 耐用   |
| 1266 | 消费者   | 爱普生 卡片打印机, 红色   |
| 1346 | 消费者   | 柯尼卡 计算器, 白色       |
| 1047 | 公司     | 柯尼卡 收据打印机, 耐用   |
| 801  | 小型企业 | 柯尼卡 收据打印机, 耐用   |
| 1285 | 消费者   | 柯尼卡 收据打印机, 白色   |
| 1197 | 公司     | 柯尼卡 收据打印机, 多色   |
| 5    | 消费者   | 柯尼卡 打印机, 红色       |
| 1150 | 小型企业 | 柯尼卡 打印机, 白色       |
| 1375 | 小型企业 | 柯尼卡 打印机, 白色       |
| 1214 | 小型企业 | 柯尼卡 喷墨打印机, 红色   |
| 1277 | 小型企业 | 柯尼卡 卡片打印机, 白色   |
| 569  | 消费者   | 松下 计算器, 红色         |
| 688  | 小型企业 | 松下 计算器, 红色         |
| 665  | 消费者   | 松下 电话, 耐用           |
| 61   | 消费者   | 松下 电话, 耐用           |
| 1538 | 消费者   | 松下 电话, 红色           |
| 1448 | 公司     | 松下 电话, 白色           |

100 rows × 2 columns

In [8]:

```
# 统计一下detail_sub这一列中的元素数量查看那都是哪些商品的订单量比较多
data['detail_sub'].value_counts().head(10)
```

Out[8]:

```
装订机    128
椅子     126
收纳具    113
电话     107
配件     100
信封     100
器具      96
书架      93
标签      93
纸张      92
Name: detail_sub, dtype: int64
```

In [9]:

```
# 绘制detail_sub 商品订单量前10条形图
x_data = ['装订机', '椅子', '收纳具', '电话', '配件', '信封', '器具','书架','标签','纸张']
y_data = [128, 126, 113, 107, 100, 100, 96,93,92,92]

chart = Bar("商品订单量前10条形图")
chart.set_options(
    labels=x_data, 
    x_label="订单量", 
    y_label="商品名字",
    colors=Faker.colors
)
chart.add_series("series-A", y_data)

chart.render_notebook()
```

Out[9]:

装订机椅子收纳具电话配件信封器具书架标签纸张050100商品订单量前10条形图订单量商品名字tooltipweweyang: 12timqian: 13

In [10]:

```
# 统计一下customer_name	订单量排名前十的销售员是哪些
data['customer_name'].value_counts().head(10)
```

Out[10]:

```
刘明     17
封乐     13
贺虹     11
顾丹     11
余嫒     11
王丹     11
白德伟    10
贺斯云    10
钱婵娟    10
吕欢悦    10
Name: customer_name, dtype: int64
```

In [11]:

```
# 绘制销售员销量排名前10的条形图
x_data = ['刘明', '封乐', '余嫒', '顾丹', '贺虹', '白德伟', '贺斯云','田谙','吕欢悦']
y_data = [17, 13, 11, 11, 11, 10, 10,10,10]

chart = Bar("销售前10龙虎榜")
chart.set_options(
    labels=x_data, 
    x_label="名字", 
    y_label="销量",
    colors=Faker.colors
)
chart.add_series("series-A", y_data)

chart.render_notebook()
```

Out[11]:

刘明封乐余嫒顾丹贺虹白德伟贺斯云田谙吕欢悦051015销售前10龙虎榜名字销量tooltipweweyang: 12timqian: 13

In [14]:

```
"""统计一下city这一列中的元素 查看一下是哪个地方的订单量比较多ps:因为数据集没有city中这一列的城市是
供应商还是采购方先暂定是购买方吧"""
data['area'].value_counts()
```

Out[14]:

```
华东    473
中南    358
东北    284
华北    196
西南    154
西北     82
Name: area, dtype: int64
```

In [15]:

```
x_data = ['华东', '中南', '东北', '华北', '西南', '西北']
y_data = [473, 358, 284, 196, 154, 82]

chart = Pie("销售订单量区域占比图")
chart.set_options(
    labels=x_data, 
    inner_radius=0,
    colors=Faker.colors
)
chart.add_series(y_data)

chart.render_notebook()
```

Out[15]:

销售订单量区域占比图tooltipweweyang: 12timqian: 13华东中南东北华北西南西北

In [16]:

```
"""统计一下city这一列中的元素 查看一下是哪个地方的订单量比较多ps:因为数据集没有city中这一列的城市是
供应商还是采购方先暂定是购买方吧"""
data['city'].value_counts().head(20)
```

Out[16]:

```
上海     59
沈阳     35
重庆     31
天津     28
北京     24
洛阳     24
青岛     22
哈尔滨    22
武汉     22
杭州     22
深圳     20
成都     20
西安     18
南昌     18
抚顺     18
济宁     16
唐山     15
包头     14
兰州     14
厦门     13
Name: city, dtype: int64
```

In [28]:

```
from pyecharts import options as opts
from pyecharts.charts import Map

province = ['上海', '沈阳', '重庆', '天津', '北京', '洛阳', '青岛', '哈尔滨', '武汉', '杭州', '深圳', '成都', '西安','南昌']
data1= [(i, random.randint(13, 59)) for i in province]
```

In [30]:

```
_map = (
        Map()
        .add("销售订单量", data1, "china")
        .set_global_opts(
            title_opts=opts.TitleOpts(title="销售订单量地区图"),
            legend_opts=opts.LegendOpts(is_show=False),
            visualmap_opts=opts.VisualMapOpts(max_=59, is_piecewise=True),
        )
    )

_map.render_notebook()
```

Out[30]:

****以上只是以订单量为切入口初步的完成了一些数据可视化的图表但是像销售额 以及客户画像和销售额或者订单量去地区和商品之间的关系后续假如要是有思路的话会接着探索。ps 欢迎大家fork 或者有关这个数据集有什么新颖的分析需求也可以留言 因为只有有了需求才能有探索下去的方向。

In [ ]:

```

```