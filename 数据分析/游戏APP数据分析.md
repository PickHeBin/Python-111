In [2]:

```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt 
import cufflinks as cf
/opt/conda/lib/python3.6/site-packages/requests/__init__.py:80: RequestsDependencyWarning: urllib3 (1.25.10) or chardet (3.0.4) doesn't match a supported version!
  RequestsDependencyWarning)
/opt/conda/lib/python3.6/site-packages/plotly/graph_objs/_deprecations.py:558: DeprecationWarning:

plotly.graph_objs.YAxis is deprecated.
Please replace it with one of the following more specific types
  - plotly.graph_objs.layout.YAxis
  - plotly.graph_objs.layout.scene.YAxis


/opt/conda/lib/python3.6/site-packages/plotly/graph_objs/_deprecations.py:531: DeprecationWarning:

plotly.graph_objs.XAxis is deprecated.
Please replace it with one of the following more specific types
  - plotly.graph_objs.layout.XAxis
  - plotly.graph_objs.layout.scene.XAxis
```

In [3]:

```
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei']
```

In [4]:

```
%matplotlib inline
```

### 一、读取数据[¶](#一、读取数据)

#### install为游戏APP的安装信息表，registers为游戏APP的注册信息表[¶](#install为游戏APP的安装信息表，registers为游戏APP的注册信息表)

In [5]:

```
install = pd.read_excel(r'/home/kesci/input/game_data1910/数据源整合.xlsx',sheet_name='安装信息')
registers = pd.read_excel(r'/home/kesci/input/game_data1910/数据源整合.xlsx',sheet_name='注册信息')
```

In [6]:

```
pd.set_option('display.max_columns', 30) # 设置pandas的最大显示列数
```

In [7]:

```
install.head()
```

Out[7]:

|      | 安装时间            | 渠道  | 子渠道 | 地区  | WIFI  | 用户唯一ID                        | 系统    | 机型             | 操作系统版本 |
| ---- | ------------------- | ----- | ------ | ----- | ----- | --------------------------------- | ------- | ---------------- | ------------ |
| 0    | 2020-04-26 15:59:27 | 渠道A | site01 | 地区A | True  | 1587916759000-8355351393884172615 | android | samsung-SM-N900  | 5            |
| 1    | 2020-04-26 15:58:27 | 渠道A | site02 | 地区A | False | 1587916702141-689636393710525296  | android | samsung-SM-N960F | 10           |
| 2    | 2020-04-26 15:56:57 | 渠道A | site01 | 地区A | False | 1587916613722-2703192501000635621 | android | samsung-SM-A7050 | 9            |
| 3    | 2020-04-26 15:50:55 | 渠道A | site03 | 地区A | True  | 1587916250955-4061104808165063458 | android | OPPO-CPH1721     | 7            |
| 4    | 2020-04-26 15:49:42 | 渠道A | site04 | 地区A | True  | 1587916177009-3388800810186375808 | android | HUAWEI-LYA-L29   | 9            |

In [7]:

```
registers.head()
```

Out[7]:

|      | 用户类型 | 账号名称 | 安装时间            | 注册时间            | 注册渠道 | 子站   | 用户唯一ID                        | 注册游戏 | 系统    | 机型        | 地区  |
| ---- | -------- | -------- | ------------------- | ------------------- | -------- | ------ | --------------------------------- | -------- | ------- | ----------- | ----- |
| 0    | new      | code03   | 2020-04-19 23:58:18 | 2020-04-20 00:06:51 | 渠道A    | site12 | 1587311896496-9121742265690995358 | 游戏A    | android | SM-G887F    | 地区A |
| 1    | old      | code15   | 2020-04-20 00:04:51 | 2020-04-20 00:22:09 | 渠道A    | site39 | 1587312290514-3372644182163270448 | 游戏A    | android | SM-A730F    | 地区A |
| 2    | old      | code17   | 2020-04-20 00:18:30 | 2020-04-20 00:25:18 | 渠道A    | site32 | 1587313106069-4890529650028494525 | 游戏A    | android | ASUS_I001DE | 地区A |
| 3    | old      | code19   | 2020-04-20 00:20:36 | 2020-04-20 00:27:39 | 渠道A    | site40 | 1587313233938-6534515892410501030 | 游戏A    | android | SM-G9880    | 地区B |
| 4    | old      | code27   | 2020-04-20 00:28:29 | 2020-04-20 00:35:35 | 渠道A    | site40 | 1587313708644-1610695342336039164 | 游戏A    | android | SM-N9500    | 地区B |

### 二、数据概览与清洗[¶](#二、数据概览与清洗)

In [8]:

```
install.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 7438 entries, 0 to 7437
Data columns (total 9 columns):
 #   Column  Non-Null Count  Dtype         
---  ------  --------------  -----         
 0   安装时间    7438 non-null   datetime64[ns]
 1   渠道      7438 non-null   object        
 2   子渠道     7438 non-null   object        
 3   地区      7438 non-null   object        
 4   WIFI    7438 non-null   bool          
 5   用户唯一ID  7438 non-null   object        
 6   系统      7438 non-null   object        
 7   机型      7438 non-null   object        
 8   操作系统版本  7438 non-null   int64         
dtypes: bool(1), datetime64[ns](1), int64(1), object(6)
memory usage: 472.3+ KB
```

In [9]:

```
install['安装时间']=pd.to_datetime(install['安装时间']).dt.date
install
```

Out[9]:

|      | 安装时间   | 渠道  | 子渠道  | 地区  | WIFI  | 用户唯一ID                        | 系统    | 机型                | 操作系统版本 |
| ---- | ---------- | ----- | ------- | ----- | ----- | --------------------------------- | ------- | ------------------- | ------------ |
| 0    | 2020-04-26 | 渠道A | site01  | 地区A | True  | 1587916759000-8355351393884172615 | android | samsung-SM-N900     | 5            |
| 1    | 2020-04-26 | 渠道A | site02  | 地区A | False | 1587916702141-689636393710525296  | android | samsung-SM-N960F    | 10           |
| 2    | 2020-04-26 | 渠道A | site01  | 地区A | False | 1587916613722-2703192501000635621 | android | samsung-SM-A7050    | 9            |
| 3    | 2020-04-26 | 渠道A | site03  | 地区A | True  | 1587916250955-4061104808165063458 | android | OPPO-CPH1721        | 7            |
| 4    | 2020-04-26 | 渠道A | site04  | 地区A | True  | 1587916177009-3388800810186375808 | android | HUAWEI-LYA-L29      | 9            |
| ...  | ...        | ...   | ...     | ...   | ...   | ...                               | ...     | ...                 | ...          |
| 7433 | 2020-04-19 | 渠道B | site255 | 地区B | False | 1587313014578-7973769045124572018 | android | samsung-SM-C9000    | 8            |
| 7434 | 2020-04-19 | 渠道B | site253 | 地区B | True  | 1587312902546-6172877259475361085 | android | samsung-SM-A6050    | 8            |
| 7435 | 2020-04-19 | 渠道B | site249 | 地区A | True  | 1587312879321-95413188790982415   | android | samsung-SM-N900U    | 5            |
| 7436 | 2020-04-19 | 渠道B | site249 | 地区A | True  | 1587312602910-5949698816134283004 | android | xiaomi-Redmi Note 4 | 7            |
| 7437 | 2020-04-19 | 渠道B | site248 | 地区A | True  | 1587312593076-4528847716145296900 | android | OPPO-CPH1917        | 9            |

7438 rows × 9 columns

In [10]:

```
registers.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5992 entries, 0 to 5991
Data columns (total 11 columns):
 #   Column  Non-Null Count  Dtype 
---  ------  --------------  ----- 
 0   用户类型    5992 non-null   object
 1   账号名称    5992 non-null   object
 2   安装时间    5992 non-null   object
 3   注册时间    5992 non-null   object
 4   注册渠道    5992 non-null   object
 5   子站      5992 non-null   object
 6   用户唯一ID  5992 non-null   object
 7   注册游戏    5992 non-null   object
 8   系统      5992 non-null   object
 9   机型      5992 non-null   object
 10  地区      5992 non-null   object
dtypes: object(11)
memory usage: 515.1+ KB
```

registers（注册表）中的‘安装时间’和‘注册时间’是str类型，我们需要将其转换为datetime类型

In [11]:

```
registers['安装时间']=pd.to_datetime(registers['安装时间']).dt.date
registers['注册时间']=pd.to_datetime(registers['注册时间']).dt.date
```

In [12]:

```
registers.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5992 entries, 0 to 5991
Data columns (total 11 columns):
 #   Column  Non-Null Count  Dtype 
---  ------  --------------  ----- 
 0   用户类型    5992 non-null   object
 1   账号名称    5992 non-null   object
 2   安装时间    5992 non-null   object
 3   注册时间    5992 non-null   object
 4   注册渠道    5992 non-null   object
 5   子站      5992 non-null   object
 6   用户唯一ID  5992 non-null   object
 7   注册游戏    5992 non-null   object
 8   系统      5992 non-null   object
 9   机型      5992 non-null   object
 10  地区      5992 non-null   object
dtypes: object(11)
memory usage: 515.1+ KB
```

In [13]:

```
registers.head()
```

Out[13]:

|      | 用户类型 | 账号名称 | 安装时间   | 注册时间   | 注册渠道 | 子站   | 用户唯一ID                        | 注册游戏 | 系统    | 机型        | 地区  |
| ---- | -------- | -------- | ---------- | ---------- | -------- | ------ | --------------------------------- | -------- | ------- | ----------- | ----- |
| 0    | new      | code03   | 2020-04-19 | 2020-04-20 | 渠道A    | site12 | 1587311896496-9121742265690995358 | 游戏A    | android | SM-G887F    | 地区A |
| 1    | old      | code15   | 2020-04-20 | 2020-04-20 | 渠道A    | site39 | 1587312290514-3372644182163270448 | 游戏A    | android | SM-A730F    | 地区A |
| 2    | old      | code17   | 2020-04-20 | 2020-04-20 | 渠道A    | site32 | 1587313106069-4890529650028494525 | 游戏A    | android | ASUS_I001DE | 地区A |
| 3    | old      | code19   | 2020-04-20 | 2020-04-20 | 渠道A    | site40 | 1587313233938-6534515892410501030 | 游戏A    | android | SM-G9880    | 地区B |
| 4    | old      | code27   | 2020-04-20 | 2020-04-20 | 渠道A    | site40 | 1587313708644-1610695342336039164 | 游戏A    | android | SM-N9500    | 地区B |

In [14]:

```
registers['激活时间']=registers['注册时间']-registers['安装时间']
registers.head(10)
```

Out[14]:

|      | 用户类型 | 账号名称 | 安装时间   | 注册时间   | 注册渠道 | 子站    | 用户唯一ID                        | 注册游戏 | 系统    | 机型             | 地区  | 激活时间 |
| ---- | -------- | -------- | ---------- | ---------- | -------- | ------- | --------------------------------- | -------- | ------- | ---------------- | ----- | -------- |
| 0    | new      | code03   | 2020-04-19 | 2020-04-20 | 渠道A    | site12  | 1587311896496-9121742265690995358 | 游戏A    | android | SM-G887F         | 地区A | 1 days   |
| 1    | old      | code15   | 2020-04-20 | 2020-04-20 | 渠道A    | site39  | 1587312290514-3372644182163270448 | 游戏A    | android | SM-A730F         | 地区A | 0 days   |
| 2    | old      | code17   | 2020-04-20 | 2020-04-20 | 渠道A    | site32  | 1587313106069-4890529650028494525 | 游戏A    | android | ASUS_I001DE      | 地区A | 0 days   |
| 3    | old      | code19   | 2020-04-20 | 2020-04-20 | 渠道A    | site40  | 1587313233938-6534515892410501030 | 游戏A    | android | SM-G9880         | 地区B | 0 days   |
| 4    | old      | code27   | 2020-04-20 | 2020-04-20 | 渠道A    | site40  | 1587313708644-1610695342336039164 | 游戏A    | android | SM-N9500         | 地区B | 0 days   |
| 5    | old      | code31   | 2020-04-20 | 2020-04-20 | 渠道A    | site12  | 1587313762303-4005387478759306141 | 游戏A    | android | SM-A515F         | 地区A | 0 days   |
| 6    | old      | code33   | 2020-04-20 | 2020-04-20 | 渠道A    | site153 | 1587314396784-8663741749304272979 | 游戏A    | android | Redmi Note 6 Pro | 地区A | 0 days   |
| 7    | new      | code39   | 2020-04-20 | 2020-04-20 | 渠道A    | site36  | 1587313937901-4512505369786606136 | 游戏A    | android | SM-A305GN        | 地区A | 0 days   |
| 8    | old      | code40   | 2020-04-20 | 2020-04-20 | 渠道A    | site11  | 1587314518641-5240029427474763011 | 游戏A    | android | CPH1837          | 地区A | 0 days   |
| 9    | new      | code43   | 2020-04-20 | 2020-04-20 | 渠道A    | site03  | 1587315506980-400475440165478375  | 游戏A    | android | SM-A515F         | 地区A | 0 days   |

### 三、游戏数据指标拆解与分析[¶](#三、游戏数据指标拆解与分析)

#### 一般情况下，移动游戏数据分析指标可以分解为3个模块：[¶](#一般情况下，移动游戏数据分析指标可以分解为3个模块：)

```
A、市场推广相关指标（包括：激活、上线、各节点转化率、成本指标、渠道质量等），它的任务是帮助我们进行“渠道优化”和“产品优化”，最小化用户获取成本，实现更多的新增导入；  

 B、用户活跃 & 留存相关指标（包括：DAU\MAU、AT（日均使用时长）、日、周、月留存、回归率等），它的任务是帮助我们在宏观数据表现层面，快速判断产品存在的问题，并对运营活动及产品改进给予“方向性”指导；  

 C、用户付费相关指标（包括：LTV、PUR（活跃用户付费比）、ARPPU（每付费用户付费强度）、充值结构、充值时段等），它的任务也是帮助我们在宏观数据表现层面明确产品盈利能力，并对运营活动及产品改进给予“方向性”指导。  
```

#### 该案例中的游戏APP数据只有用户的安装信息和注册信息，所以我们这里只对市场推广相关指标进行分析。[¶](#该案例中的游戏APP数据只有用户的安装信息和注册信息，所以我们这里只对市场推广相关指标进行分析。)

#### 1、激活[¶](#1、激活)

In [15]:

```
registers['激活时间']=registers['激活时间'].astype(str).str.split('days').str[0] # 提取激活时间列中“days”前的数值
```

In [16]:

```
registers['激活时间']=registers['激活时间'].astype(int)
```

In [17]:

```
table=registers['激活时间'].groupby(pd.cut(registers['激活时间'], bins=[-1,0, 1, 3,7,100])).count()  # (-1, 0]  实际上只有0这一个数值
table
```

Out[17]:

```
激活时间
(-1, 0]     4877
(0, 1]       307
(1, 3]       128
(3, 7]       106
(7, 100]     574
Name: 激活时间, dtype: int64
```

In [18]:

```
table.reset_index(name='count')
```

Out[18]:

|      | 激活时间 | count |
| ---- | -------- | ----- |
| 0    | (-1, 0]  | 4877  |
| 1    | (0, 1]   | 307   |
| 2    | (1, 3]   | 128   |
| 3    | (3, 7]   | 106   |
| 4    | (7, 100] | 574   |

In [19]:

```
table.plot(kind='pie',autopct='%1.1f%%',shadow=True,startangle=90,title='激活时间占比')
plt.show()
```

![img](data:image/png;base64,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 ) 

安装当天注册激活的用户数占比为81.4%，1天以内激活的用户数占比为5.1%，剩余中占比较高的是安装app超过7天没激活的。超过7天没激活的这类用户流失概率很高。

#### 2、渠道质量[¶](#2、渠道质量)

```
渠道的获客数量、获客质量以及获客成本是我们评价渠道质量好坏的主要参数。一个好的渠道应具备流量较为充足、获客稳定、获客成本较低、各个环节的转化率较好这几个条件。  
```

#### 渠道的每日获客数量趋势[¶](#渠道的每日获客数量趋势)

In [20]:

```
时间_渠道_count=pd.pivot_table(install,index=['安装时间'],values=['用户唯一ID'],columns=['渠道'],aggfunc=len)
时间_渠道_count
```

Out[20]:

|            | 用户唯一ID |       |
| ---------- | ---------- | ----- |
| 渠道       | 渠道A      | 渠道B |
| 安装时间   |            |       |
| 2020-04-19 | 41         | 115   |
| 2020-04-20 | 230        | 717   |
| 2020-04-21 | 225        | 687   |
| 2020-04-22 | 252        | 793   |
| 2020-04-23 | 236        | 786   |
| 2020-04-24 | 203        | 712   |
| 2020-04-25 | 340        | 938   |
| 2020-04-26 | 316        | 847   |

In [21]:

```
时间_渠道_count.iplot(kind='line',title='各渠道的每日获客量')
```

#### 从广告获客数量的角度来讲，渠道B的每日获客量要远高于渠道A的获客量。接下来我们看看渠道A和渠道B的获客质量是怎样的。[¶](#从广告获客数量的角度来讲，渠道B的每日获客量要远高于渠道A的获客量。接下来我们看看渠道A和渠道B的获客质量是怎样的。)

#### 安装完APP的下一步操作是注册激活，根据由安装到注册步骤的转化情况（激活率）来评价渠道的获客质量好坏。[¶](#安装完APP的下一步操作是注册激活，根据由安装到注册步骤的转化情况（激活率）来评价渠道的获客质量好坏。)

#### 假设激活时间大于7天的用户为弱意向用户。我们以激活时间7天为临界值来量化渠道的获客质量。[¶](#假设激活时间大于7天的用户为弱意向用户。我们以激活时间7天为临界值来量化渠道的获客质量。)

In [22]:

```
table_A=registers[registers.注册渠道=='渠道A']['激活时间'].groupby(pd.cut(registers[registers.注册渠道=='渠道A']['激活时间'], bins=[-1,0, 1, 3,7,100])).count()  # (-1, 0]  实际上只有0这一个数值
table_A
```

Out[22]:

```
激活时间
(-1, 0]     1356
(0, 1]        69
(1, 3]        24
(3, 7]        18
(7, 100]      28
Name: 激活时间, dtype: int64
```

In [23]:

```
table_B=registers[registers.注册渠道=='渠道B']['激活时间'].groupby(pd.cut(registers[registers.注册渠道=='渠道B']['激活时间'], bins=[-1,0, 1, 3,7,100])).count()  # (-1, 0]  实际上只有0这一个数值
table_B
```

Out[23]:

```
激活时间
(-1, 0]     3521
(0, 1]       238
(1, 3]       104
(3, 7]        88
(7, 100]     546
Name: 激活时间, dtype: int64
```

In [24]:

```
table_A.reset_index(name='count_A')
```

Out[24]:

|      | 激活时间 | count_A |
| ---- | -------- | ------- |
| 0    | (-1, 0]  | 1356    |
| 1    | (0, 1]   | 69      |
| 2    | (1, 3]   | 24      |
| 3    | (3, 7]   | 18      |
| 4    | (7, 100] | 28      |

In [25]:

```
table_B.reset_index(name='count_B')
```

Out[25]:

|      | 激活时间 | count_B |
| ---- | -------- | ------- |
| 0    | (-1, 0]  | 3521    |
| 1    | (0, 1]   | 238     |
| 2    | (1, 3]   | 104     |
| 3    | (3, 7]   | 88      |
| 4    | (7, 100] | 546     |

In [26]:

```
table_A.plot(kind='pie',autopct='%1.1f%%',shadow=True,startangle=90,title='渠道A激活时间占比')
plt.show()
```

![img](data:image/png;base64,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 ) 

In [27]:

```
table_B.plot(kind='pie',autopct='%1.1f%%',shadow=True,startangle=90,title='渠道B激活时间占比')
plt.show()
```

![img](data:image/png;base64,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 ) 

渠道A激活时间大于7天的比例为1.92%，渠道B激活时间大于7天的比例为12.1%。渠道B当天激活的用户比例也低于渠道A。可见，渠道B的获客质量要比渠道A的获客质量差一些。

#### 综上所述，渠道A的获客数量<渠道B，渠道A的获客质量>渠道B。市场推广部门可以适当加大对于渠道A的广告投入，多对渠道A做一些获客测试，提升渠道A的获客数量。[¶](#综上所述，渠道A的获客数量<渠道B，渠道A的获客质量>渠道B。市场推广部门可以适当加大对于渠道A的广告投入，多对渠道A做一些获客测试，提升渠道A的获客数量。)

#### 3、用户画像[¶](#3、用户画像)

In [52]:

```
# 提取安装信息表中“机型”列的文字
install['机型']=install['机型'].str.split('-').str[0]
install['机型'].replace(['Xiaomi','Galaxy'],['xiaomi','samsung'],inplace=True)
phone_model=pd.pivot_table(install,index='机型',values='用户唯一ID',aggfunc=len)
phone_model.sort_values(by='用户唯一ID',inplace=True,ascending=True)
phone_model
```

Out[52]:

|         | 用户唯一ID |
| ------- | ---------- |
| 机型    |            |
| 8848    | 1          |
| RYJJ    | 1          |
| RUIO    | 1          |
| Qua     | 1          |
| QMX     | 1          |
| ...     | ...        |
| asus    | 587        |
| xiaomi  | 624        |
| HUAWEI  | 726        |
| OPPO    | 1150       |
| samsung | 2703       |

139 rows × 1 columns

In [54]:

```
# 取用户数前十的机型
phone_model[-10:].iplot(kind='barh')
```

samsung、OPPO、HUAWEI、xiaomi的安装用户数位居前四。

In [64]:

```
region_table=pd.pivot_table(install,index='地区',values='用户唯一ID',aggfunc=len)
region_table
```

Out[64]:

|       | 用户唯一ID |
| ----- | ---------- |
| 地区  |            |
| 地区A | 5764       |
| 地区B | 1596       |
| 地区C | 78         |

从用户地域来看，地区A的用户数量最多，地区B的用户数量其次，地区C的用户数量很少。

#### 游戏的推广及广告投放中，对地域进行定向，避免在地区C耗费过多的广告投入。至于用户机型方面，安装用户数量排名前四的机型与目前安卓市场份额占比一致，不必对用户机型作广告定向设置。[¶](#游戏的推广及广告投放中，对地域进行定向，避免在地区C耗费过多的广告投入。至于用户机型方面，安装用户数量排名前四的机型与目前安卓市场份额占比一致，不必对用户机型作广告定向设置。)

### 四、总结[¶](#四、总结)

1. 激活时间超过7天的用户占比较高，有被刷量的风险，这类用户注册率的改善需要进一步的数据支撑以及与业务部门的沟通；  
2. 渠道A的流量质量要好于渠道B，后续的推广中资源可以适当向渠道A做一些倾斜；  
3. 游戏广告投放中对地区A和地区B进行区域定向，减少预算在地区C上的浪费；  
4. 由于缺少游戏APP的其它用户数据，这里就只做市场推广相关指标模块的简要分析，用户活跃&留存指标、用户付费相关指标这里不进行分析。  