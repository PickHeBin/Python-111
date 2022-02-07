In [1]:

```
# Seaborn 配置开发环境
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# seaborn 导入
import seaborn as sns

# 忽略警告信息
import warnings
warnings.filterwarnings("ignore")

print("成功建立开发环境")
成功建立开发环境
```

In [2]:

```
# Seaborn 内置数据集
tips = sns.load_dataset('tips')
tips.head()
```

Out[2]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [12]:

```
# lineplot 线形图

# 回顾： pandas 线型图
tips[ ['total_bill', 'tip']].plot.line()
```

Out[12]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f6847923198>
```

![img](https://cdn.kesci.com/rt_upload/5FF3C44650FD4434AF5576932B16E834/q0slvvkz1g.png) 

In [15]:

```
# seaborn lineplot

# 蓝色线条： 均值
# 蓝色区域： 95%置信区间
# hue ： 按色彩进行分组 
sns.lineplot(x='day', y='total_bill', hue='smoker', data=tips )
```

Out[15]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f68477dfeb8>
```

![img](https://cdn.kesci.com/rt_upload/A8C9757C6156439096B4BA951DF3047D/q0smlh3mac.png) 

In [16]:

```
# 航班乘客数据集
flights = sns.load_dataset('flights')
flights.head()
```

Out[16]:

|      | year | month    | passengers |
| ---- | ---- | -------- | ---------- |
| 0    | 1949 | January  | 112        |
| 1    | 1949 | February | 118        |
| 2    | 1949 | March    | 132        |
| 3    | 1949 | April    | 129        |
| 4    | 1949 | May      | 121        |

In [18]:

```
# pandas 绘制line 
flights[ flights.year == 1949].plot.line(x='month', y='passengers')
```

Out[18]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f68478410b8>
```

![img](https://cdn.kesci.com/rt_upload/7EE1968AD73548F6A171640CD8154BD5/q0sonw8gcu.png) 

In [20]:

```
# seaborh 绘制 lineplot
# 蓝色线条： 均值
# 蓝色区域： 95% （缺省） 置信区间
# ci ： None 不在绘制置信区间
# ci : 85 85%置信区间
sns.lineplot( x='year', y='passengers', data=flights, ci=None)
```

Out[20]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f684765c470>
```

![img](https://cdn.kesci.com/rt_upload/ED79595827D249038506360D01A85EAB/q0sorstodq.png) 

In [23]:

```
sns.set()
# hue : 按色彩（指定的数据列)进行分组
sns.lineplot(x='year', y='passengers', data=flights, hue='month', palette='tab20')
```

Out[23]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f6847479710>
```

![img](https://cdn.kesci.com/rt_upload/09D790971D984D7495CA863F1D19E778/q0sovi17f3.png) 

### lineplot 线形图总结[¶](#lineplot-线形图总结)

- 与 pandas.plot.line 类似 ，可以用于显示数据相对于时间的变化趋势  
- **特色**：可以自动计算y轴数据的置信区间（95%）与平均数  
- **特色**：可以分组 hue 绘制多个线形图  
- 常用参数  
  - x，y   
  - hue : 按色彩（指定的数据列)进行分组   
  - ci ： 绘制置信区间  
    - 95（缺省值）  
    - None 不在绘制置信区间  

In [25]:

```
tips = sns.load_dataset("tips")
tips.head()
```

Out[25]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [35]:

```
#  散点图 pandas 回顾
tips.plot.scatter(x='total_bill', y='tip', c='red')
```

Out[35]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f684391d978>
```

![img](https://cdn.kesci.com/rt_upload/9446F6BEF57441DDA349B267430BA586/q0ssnx9zp1.png) 

In [36]:

```
sns.scatterplot(x='total_bill', y='tip', data=tips )
```

Out[36]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f6843904470>
```

![img](https://cdn.kesci.com/rt_upload/35DE0F3C80A04BF28AFC2A7818006988/q0ssp8wi86.png) 

In [42]:

```
# hue : 色彩分组绘制
# style ： 散点绘制形状
# size: 散点大小 
# sizes : 散点大小取值范围
sns.scatterplot( x='total_bill', y='tip', data=tips,
 hue='sex', style='smoker', size='size', sizes=(20,200))
```

Out[42]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f68438512e8>
```

![img](https://cdn.kesci.com/rt_upload/63BE60F9B8E949E68278027D16670EDE/q0stc4at2d.png) 

In [44]:

```
# iris
iris = sns.load_dataset('iris')
iris.head()
```

Out[44]:

|      | sepal_length | sepal_width | petal_length | petal_width | species |
| ---- | ------------ | ----------- | ------------ | ----------- | ------- |
| 0    | 5.1          | 3.5         | 1.4          | 0.2         | setosa  |
| 1    | 4.9          | 3.0         | 1.4          | 0.2         | setosa  |
| 2    | 4.7          | 3.2         | 1.3          | 0.2         | setosa  |
| 3    | 4.6          | 3.1         | 1.5          | 0.2         | setosa  |
| 4    | 5.0          | 3.6         | 1.4          | 0.2         | setosa  |

In [45]:

```
# hue/style : 使用同一列数据时，绘制出的散点图更加清晰明白
sns.scatterplot( x='petal_length', y='petal_width', data=iris, hue='species', style='species')
```

Out[45]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7f68435df908>
```

![img](https://cdn.kesci.com/rt_upload/7B91EED5EE994D8C83F365F873AB403B/q0stlrhk8q.png) 

### scatterplot 散点图总结[¶](#scatterplot-散点图总结)

- 用于观察两组数据之间的关系  
- 常用参数：  
  - x, y, data  
  - hue : 色彩分组绘制  
  - style : 散点绘制形状  
  - size : 散点大小   
  - sizes : 散点大小取值范围 ( 20, 200)  
- **特色**：hue/style : 使用同一列数据时，绘制出的散点图更加清晰明白  

In [4]:

```
# 内置航空数据集
flights = sns.load_dataset('flights')
flights.head()
# year month 年、月
# passengers 乘客数量
```

Out[4]:

|      | year | month    | passengers |
| ---- | ---- | -------- | ---------- |
| 0    | 1949 | January  | 112        |
| 1    | 1949 | February | 118        |
| 2    | 1949 | March    | 132        |
| 3    | 1949 | April    | 129        |
| 4    | 1949 | May      | 121        |

In [5]:

```
flights_table = flights.pivot(index='month', columns='year', values='passengers')
flights_table.head()
```

Out[5]:

| year     | 1949 | 1950 | 1951 | 1952 | 1953 | 1954 | 1955 | 1956 | 1957 | 1958 | 1959 | 1960 |
| -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| month    |      |      |      |      |      |      |      |      |      |      |      |      |
| January  | 112  | 115  | 145  | 171  | 196  | 204  | 242  | 284  | 315  | 340  | 360  | 417  |
| February | 118  | 126  | 150  | 180  | 196  | 188  | 233  | 277  | 301  | 318  | 342  | 391  |
| March    | 132  | 141  | 178  | 193  | 236  | 235  | 267  | 317  | 356  | 362  | 406  | 419  |
| April    | 129  | 135  | 163  | 181  | 235  | 227  | 269  | 313  | 348  | 348  | 396  | 461  |
| May      | 121  | 125  | 172  | 183  | 229  | 234  | 270  | 318  | 355  | 363  | 420  | 472  |

In [6]:

```
# 绘制热力图 heatmap
sns.heatmap(flights_table)
```

Out[6]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7feab70d32e8>
```

![img](https://cdn.kesci.com/rt_upload/7A9E53BE6B5140AE849FF1D71A3A8B0E/q0supwhmqc.png) 

In [8]:

```
flights[ (flights.year== 1960)  ]
```

Out[8]:

|      | year | month     | passengers |
| ---- | ---- | --------- | ---------- |
| 132  | 1960 | January   | 417        |
| 133  | 1960 | February  | 391        |
| 134  | 1960 | March     | 419        |
| 135  | 1960 | April     | 461        |
| 136  | 1960 | May       | 472        |
| 137  | 1960 | June      | 535        |
| 138  | 1960 | July      | 622        |
| 139  | 1960 | August    | 606        |
| 140  | 1960 | September | 508        |
| 141  | 1960 | October   | 461        |
| 142  | 1960 | November  | 390        |
| 143  | 1960 | December  | 432        |

In [24]:

```
# heatmap 常用参数
# cmap 色图配置 使用连续色图 https://matplotlib.org/examples/color/colormaps_reference.html
# annot : True 标注数值
# fmt : 标注数值格式 d : 整数， 0.2f 浮点数保留小数点后面两位数字
# linewidths : 线宽 0.5 

plt.figure(figsize=(12, 5))
sns.heatmap( flights_table, cmap='Blues', annot=True, fmt='d', linewidths=0.2)
```

Out[24]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7fea7b4df080>
```

![img](https://cdn.kesci.com/rt_upload/6052A2E5059C48349C4E2AABA86F2727/q0sw4jg9ol.png) 

### heatmap 热力图 总结[¶](#heatmap-热力图-总结)

- **特色**：热图使用色彩来表示数值  
- 常用于显示两个数值特征之间的关系，并找出热点区域加以评估  
- 常用于显示相关矩阵 corr_matrix  
  - 使用 corr 方法生成 corr_matrix  
  - 制作 掩码矩阵 mask  
  - 绘制 热力图  
- 常用参数  
  - cmap 色图配置 **使用连续色图** https://matplotlib.org/examples/color/colormaps_reference.html  
  - annot : True 标注数值  
  - fmt : 标注数值格式 d : 整数， 0.2f 浮点数保留小数点后面两位数字  
  - linewidths : 线宽 0.5  
  - cbar_kws , vmax, vmin : 设置 colorbar   

In [3]:

```
# relplot 维度关系图
# 属于 FactGrid, 即基于维度分析特征之间的关系
# 可以绘制出基于不同维度的散点图 scatter 和线形图 line

tips = sns.load_dataset('tips')
tips.head()
```

Out[3]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [9]:

```
sns.set()
sns.relplot(x='total_bill', y='tip', hue='sex', style='smoker', size='size', data=tips)
```

Out[9]:

```
<seaborn.axisgrid.FacetGrid at 0x7fcd4b6ae7b8>
```

![img](https://cdn.kesci.com/rt_upload/BF936686B7E2407981816965AD3E49DD/q0u6gdzbb0.png) 

In [10]:

```
# col ： 按列进行拆分
sns.relplot(x='total_bill', y='tip', hue='sex', col='smoker', size='size', data=tips)
```

Out[10]:

```
<seaborn.axisgrid.FacetGrid at 0x7fcd29a0eb00>
```

![img](https://cdn.kesci.com/rt_upload/9E0F2D1C5D404645A4B467560A63A411/q0u7wodpun.png) 

In [11]:

```
# row 按行拆分
sns.relplot(x='total_bill', y='tip', row='sex', col='smoker', size='size', data=tips)
```

Out[11]:

```
<seaborn.axisgrid.FacetGrid at 0x7fcd29901470>
```

![img](https://cdn.kesci.com/rt_upload/25B7E22E0C294FE39D69585CD4E0766A/q0u82mai6g.png) 

In [3]:

```
tips.head()
```

Out[3]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [5]:

```
# 一行代码查看所有7列数据之间的关系
sns.set()
sns.relplot(x='total_bill', y='tip', data=tips, 
 col='day', row='time', hue='sex', style='smoker', size='size')
```

Out[5]:

```
<seaborn.axisgrid.FacetGrid at 0x7f51473d2b00>
```

![img](https://cdn.kesci.com/rt_upload/6E8F669CB7A24B32A693BD8196BC3C4C/q0udryhd3j.png) 

In [6]:

```
# kind : 图表类型 scatter(缺省), line
flights = sns.load_dataset('flights')
flights.head()
```

Out[6]:

|      | year | month    | passengers |
| ---- | ---- | -------- | ---------- |
| 0    | 1949 | January  | 112        |
| 1    | 1949 | February | 118        |
| 2    | 1949 | March    | 132        |
| 3    | 1949 | April    | 129        |
| 4    | 1949 | May      | 121        |

In [7]:

```
# col_wrap 换行
# kind 图表类型 scatter(缺省), line
sns.relplot(x='year', y='passengers', col='month', col_wrap=4, data=flights, kind='line')
```

Out[7]:

```
<seaborn.axisgrid.FacetGrid at 0x7f5125404550>
```

![img](https://cdn.kesci.com/rt_upload/9276A2CA17CC40758BAB61FB64589015/q0ue1334l0.png) 

### relplot 维度关系图 总结[¶](#relplot-维度关系图-总结)

- 基于维度分析数据之间的关系  
- 可以绘制散点图和线形图  
- 常用参数  
  - x, y, data  
  - col : 列维度  
  - row : 行维度  
  - col_wrap : 换行 3,4,5  
  - kind : scatter(缺省) , line  

In [8]:

```
tips = sns.load_dataset('tips')
tips.head()
```

Out[8]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [9]:

```
# lmplot 线性回归关系图
# 在散点图的基础上绘制一个线性回归趋势线，用于判断x轴特征列与y轴目标值的相关趋势
sns.lmplot(x='total_bill', y='tip', data=tips)
```

Out[9]:

```
<seaborn.axisgrid.FacetGrid at 0x7f5122a61c18>
```

![img](https://cdn.kesci.com/rt_upload/52799880BF1A4FF09859FEC9785F00CB/q0ugnjhbbv.png) 

In [22]:

```
# lmplot 也基于 FacetGrid
# col, row 维度参数
# hue 色彩分组
sns.lmplot(x='total_bill', y='tip', data=tips, col='day', row='time', hue='smoker')
```

Out[22]:

```
<seaborn.axisgrid.FacetGrid at 0x7f51215b6908>
```

![img](https://cdn.kesci.com/rt_upload/46B8BAC470C949A1BD21515ED26EC642/q0uh4fhbt6.png) 

In [25]:

```
tips.head()
```

Out[25]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [28]:

```
# x_jitter 将x轴数值随机摇摆 +- 0.2
sns.lmplot(x='size', y='total_bill', data=tips , x_jitter=0.2)
```

Out[28]:

```
<seaborn.axisgrid.FacetGrid at 0x7f5121206e10>
```

![img](https://cdn.kesci.com/rt_upload/84CAC625A78C4783802EBFF313772013/q0uhacciwt.png) 

### lmplot 线性回归关系图 总结[¶](#lmplot-线性回归关系图-总结)

- 在散点图的基础上绘制一个线性回归趋势线，用于判断x轴特征列与y轴目标值的相关趋势  
- 常用参数  
  - x, y, data  
  - col, row: 列、行维度分组  
  - hue : 色彩  
  - x_jitter : 将x轴数值随机晃动一个小的范围 +-0.2  

### jointplot 与 jointgrid[¶](#jointplot-与-jointgrid)

- jointplot 组合分析图 同时绘制双变量关系图与单变量分布图  
- jointgrid 组合矩阵图 比jointplot 更加灵活一些，可以绘制的图表类型更加丰富  

In [7]:

```
sns.set()
tips = sns.load_dataset('tips')
tips.head()
```

Out[7]:

|      | total_bill | tip  | sex    | smoker | day  | time   | size |
| ---- | ---------- | ---- | ------ | ------ | ---- | ------ | ---- |
| 0    | 16.99      | 1.01 | Female | No     | Sun  | Dinner | 2    |
| 1    | 10.34      | 1.66 | Male   | No     | Sun  | Dinner | 3    |
| 2    | 21.01      | 3.50 | Male   | No     | Sun  | Dinner | 3    |
| 3    | 23.68      | 3.31 | Male   | No     | Sun  | Dinner | 2    |
| 4    | 24.59      | 3.61 | Female | No     | Sun  | Dinner | 4    |

In [4]:

```
sns.jointplot(x='total_bill', y='tip', data=tips)
```

Out[4]:

```
<seaborn.axisgrid.JointGrid at 0x7ff8f7cefef0>
```

![img](https://cdn.kesci.com/rt_upload/E2354C5F4531416083292EFCDE9A6B7F/q0ujw7y2qh.png) 

In [5]:

```
# kind 图表类型 scatter , reg, resid, kde, hex
sns.jointplot(x='total_bill', y='tip', data=tips, kind='reg')
```

Out[5]:

```
<seaborn.axisgrid.JointGrid at 0x7ff8f5b3e0f0>
```

![img](https://cdn.kesci.com/rt_upload/52E82CD5F2E6496887565CB995FC9DA7/q0ujzffdsp.png) 

In [6]:

```
# 同时绘制 一维、二维密度图
sns.jointplot(x='total_bill', y='tip', data=tips, kind='kde')
```

Out[6]:

```
<seaborn.axisgrid.JointGrid at 0x7ff8f55b3a20>
```

![img](https://cdn.kesci.com/rt_upload/C903F8251BD74E188094327298667B6A/q0uk0u5w6u.png) 

In [15]:

```
# jointgird
# plot方法 ： 两个图表类型  参数： 双变量关系图，单变量分布图
p = sns.JointGrid(x='total_bill', y='tip', data=tips)
p.plot( sns.kdeplot, sns.distplot )
```

Out[15]:

```
<seaborn.axisgrid.JointGrid at 0x7ff8f4905cf8>
```

![img](https://cdn.kesci.com/rt_upload/A9500B792DE342E087C591147C32F4A6/q0ukst5eox.png) 

In [21]:

```
# plot_joint 绘制组合图
# plot_marginals 绘制边沿图
p = sns.JointGrid(x='total_bill', y='tip', data=tips)
p.plot_joint(sns.kdeplot, shade=True, shade_lowest=False )
p.plot_marginals(sns.distplot, rug=True)
```

Out[21]:

```
<seaborn.axisgrid.JointGrid at 0x7ff8f407e160>
```

![img](https://cdn.kesci.com/rt_upload/CDC7FC34B0354101939180BA6EDF46E3/q0ula4impk.png) 

### jointplot 与 JointGrid 总结[¶](#jointplot-与-JointGrid-总结)

- jointplot 组合分析图 同时绘制双变量关系图与单变量分布图  
- jointplot 同时绘制散点图与单变量分布图  
- jointplot 常用参数  
  - kind :  “scatter” | “reg” | “resid” | “kde” | “hex”  
  - scatter, reg 常用  
- JointGrid 组合矩阵图 比jointplot 更加灵活一些，可以绘制的图表类型更加丰富  
- JointGrid 常用方法  
  - plot 参数： 双变量关系图，单变量分布图  
  - plot_joint 中心图表  
  - plot_marginals 边沿图表  

In [22]:

```
iris = sns.load_dataset('iris')
iris.head()
```

Out[22]:

|      | sepal_length | sepal_width | petal_length | petal_width | species |
| ---- | ------------ | ----------- | ------------ | ----------- | ------- |
| 0    | 5.1          | 3.5         | 1.4          | 0.2         | setosa  |
| 1    | 4.9          | 3.0         | 1.4          | 0.2         | setosa  |
| 2    | 4.7          | 3.2         | 1.3          | 0.2         | setosa  |
| 3    | 4.6          | 3.1         | 1.5          | 0.2         | setosa  |
| 4    | 5.0          | 3.6         | 1.4          | 0.2         | setosa  |

In [23]:

```
# pairplot 散点矩阵图
sns.pairplot(iris)
```

Out[23]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8f3f1f6d8>
```

![img](https://cdn.kesci.com/rt_upload/F164E8587B9249A8B7BE4ED963B00E30/q0um5vg5yl.png) 

In [24]:

```
# hue 色彩分组
sns.pairplot(iris, hue='species')
```

Out[24]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8f397ae80>
```

![img](https://cdn.kesci.com/rt_upload/C965C1BB76B2498592B6177184864BC1/q0um8did6n.png) 

![img](https://matplotlib.org/3.1.1/_images/sphx_glr_marker_reference_002.png)

In [33]:

```
# markers 参数： 散点的样式
# diag_kind : hist, kde
# diag_kws : 传递参数用于绘制 diag 图表
sns.pairplot(iris, hue='species', markers=['o', 'v', 's'], diag_kind='hist', diag_kws={'alpha':0.5})
```

Out[33]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8ef7ffb38>
```

![img](https://cdn.kesci.com/rt_upload/32CE8FE8E7C24360BE23AD37A59826FC/q0ummnkzgq.png) 

In [37]:

```
# kind : scatter, reg
sns.pairplot(iris, kind='reg',hue='species')
```

Out[37]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8edd1f240>
```

![img](https://cdn.kesci.com/rt_upload/00DA2D0CF66C4A6DBE215B342CE2B5A7/q0umrv4nli.png) 

In [41]:

```
# PairGrid
# map  方法 绘制散点图 不太常用
# map_diag 绘制对角线图 
# map_offdiag 非对角线图
p = sns.PairGrid(iris)
p.map_offdiag( sns.scatterplot )
p.map_diag(sns.distplot)
```

Out[41]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8ec6bbb38>
```

![img](https://cdn.kesci.com/rt_upload/18DAB4EB546D4B9B88E5E8234CBC5831/q0uo3u5477.png) 

In [51]:

```
# map_diag 绘制对角线图
# map_upper 绘制对角线上方的图表
# map_lower 绘制对角线下方的图表
p= sns.PairGrid( iris, hue='species')
p.map_upper(sns.scatterplot)
p.map_diag( sns.distplot)
p.map_lower(sns.kdeplot)
p.add_legend() # add_legend 加上图例说明
```

Out[51]:

```
<seaborn.axisgrid.PairGrid at 0x7ff8e8c70630>
```

![img](https://cdn.kesci.com/rt_upload/3DFA38D4D98E4B0693C80BFCC98B6C08/q0uooqkemn.png) 

### pairplot 与 PairGrid 总结[¶](#pairplot-与-PairGrid-总结)

- 散点矩阵图 ： 绘制成对数据之间的关系  
- 常用绘制的图表名称：  
  - sns.scatterplot  
  - sns.kdeplot  
  - sns.distplot   
- pairplot 常用参数  
  - kind : scatter, reg  
    - markers 参数： 散点的样式  
  - diag_kind : hist, kde  
  - diag_kws : 传递参数用于绘制 diag 图表 alpha: 0.5  
- PairGrid 绘制矩阵的map方法  
  - map 不太常用   
  - map_offdiag 非对角线图表， map_diag 对角线图表  
  - map_upper 对角线上方图表, map_lower 对角线下方图表  