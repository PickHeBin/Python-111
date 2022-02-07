```
 加载包
import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 
import plotly.plotly as py 
from plotly.offline import init_notebook_mode, iplot 
init_notebook_mode(connected=True) 
import plotly.graph_objs as go 
# 忽略警告
import warnings            
warnings.filterwarnings("ignore") 
plt.style.use('ggplot') 
```

## 加载数据

- 正如我在介绍中提到的，我们使用多个数据集。
  - 二战空袭数据集
    - 数据包括轰炸行动。例如，1945年美国用A36飞机轰炸德国(柏林)的奥里沃机场。
  - 二战天气状况数据集
    - 数据包括二战期间的天气状况。例如，根据乔治镇气象站，1942年7月1日的平均气温是23.88摄氏度。
    - 这个数据集中有两个子集。第一个包括国家、纬度和经度等气象站位置。
    - 第二项包括气象站测得的最低、最高和平均气温。

In [3]:

```
# 轰炸数据
aerial = pd.read_csv("./WWII1212/operations.csv")
# 第一个天气数据，包括国家、纬度和经度等位置。
weather_station_location = pd.read_csv("./weather5785/Weather Station Locations.csv")
# 第二个天气数据，包括测量到的最低、最高和平均温度
weather = pd.read_csv("./weather5785/Summary of Weather.csv")
```

## 数据描述

以下只解释项目中使用到的数据特征。

- 二战空袭数据集:
  - Mission Date: 任务日期
  - Theater of Operations: 战区
  - Country: 执行任务或行动的国家，如美国
  - Air Force: 空军单位的名称或id，如5AF
  - Aircraft Series: 飞机的型号或类型，如B24
  - Callsign: 在炸弹袭击前，通过无线电广播的信息、代码、公告或信号曲
  - Takeoff Base: 起飞机场的名字，如Ponte Olivo机场
  - Takeoff Location: 起飞地区
  - Takeoff Latitude: 起飞区纬度
  - Takeoff Longitude: 起飞区经度
  - Target Country: 目标国家，如德国
  - Target City: 目标地区，如柏林
  - Target Type: 目标类型，如city area
  - Target Industry: 目标工业，如ordnance plants（军械厂）
  - Target Priority: 目标优先级，如1(最高)
  - Target Latitude: 目标的纬度
  - Target Longitude: 目标的经度
- 二战天气状况数据集:
  - Weather station location:
    - WBAN: 气象站数量
    - NAME: 气象站名称
    - STATE/COUNTRY ID: 国家名称
    - Latitude: 气象站纬度
    - Longitude: 气象站经度
  - Weather:
    - STA: 气象站站号(WBAN)
    - Date: 测温日期
    - MeanTemp: 平均温度

## 数据清洗

- 空袭数据中包含了很多NaN值。我没有使用它们，而是删除了一些NaN值。这样即消除了不确定性，也简化了可视化过程。
  - 删除国家中的NaN
  - 删除目标经度中的NaN
  - 删除起飞经度中的NaN
  - 删除未使用的特征
- 天气状况数据不需要任何清洗，但我们只使用上面列出的几个变量。

In [4]:

```
# 删除国家中的NaN
aerial = aerial[pd.isna(aerial.Country)==False]
# 删除目标经度中的NaN
aerial = aerial[pd.isna(aerial['Target Longitude'])==False]
# 删除起飞经度中的NaN
aerial = aerial[pd.isna(aerial['Takeoff Longitude'])==False]
# 删除未使用的特征
drop_list = ['Mission ID','Unit ID','Target ID','Altitude (Hundreds of Feet)','Airborne Aircraft',
             'Attacking Aircraft', 'Bombing Aircraft', 'Aircraft Returned',
             'Aircraft Failed', 'Aircraft Damaged', 'Aircraft Lost',
             'High Explosives', 'High Explosives Type','Mission Type',
             'High Explosives Weight (Pounds)', 'High Explosives Weight (Tons)',
             'Incendiary Devices', 'Incendiary Devices Type',
             'Incendiary Devices Weight (Pounds)',
             'Incendiary Devices Weight (Tons)', 'Fragmentation Devices',
             'Fragmentation Devices Type', 'Fragmentation Devices Weight (Pounds)',
             'Fragmentation Devices Weight (Tons)', 'Total Weight (Pounds)',
             'Total Weight (Tons)', 'Time Over Target', 'Bomb Damage Assessment','Source ID']
aerial.drop(drop_list, axis=1,inplace = True)
aerial = aerial[ aerial.iloc[:,8]!="4248"] # drop this takeoff latitude 
aerial = aerial[ aerial.iloc[:,9]!=1355]   # drop this takeoff longitude
```

In [5]:

```
aerial.info()
<class 'pandas.core.frame.DataFrame'>
Int64Index: 2555 entries, 0 to 178080
Data columns (total 17 columns):
Mission Date             2555 non-null object
Theater of Operations    2555 non-null object
Country                  2555 non-null object
Air Force                2505 non-null object
Aircraft Series          2528 non-null object
Callsign                 10 non-null object
Takeoff Base             2555 non-null object
Takeoff Location         2555 non-null object
Takeoff Latitude         2555 non-null object
Takeoff Longitude        2555 non-null float64
Target Country           2499 non-null object
Target City              2552 non-null object
Target Type              602 non-null object
Target Industry          81 non-null object
Target Priority          230 non-null object
Target Latitude          2555 non-null float64
Target Longitude         2555 non-null float64
dtypes: float64(3), object(14)
memory usage: 359.3+ KB
```

In [6]:

```
# 使用的特征
weather_station_location = weather_station_location.loc[:,["WBAN","NAME","STATE/COUNTRY ID","Latitude","Longitude"] ]
weather_station_location.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 161 entries, 0 to 160
Data columns (total 5 columns):
WBAN                161 non-null int64
NAME                161 non-null object
STATE/COUNTRY ID    161 non-null object
Latitude            161 non-null float64
Longitude           161 non-null float64
dtypes: float64(2), int64(1), object(2)
memory usage: 6.4+ KB
```

In [7]:

```
# 使用的特征
weather = weather.loc[:,["STA","Date","MeanTemp"] ]
weather.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 119040 entries, 0 to 119039
Data columns (total 3 columns):
STA         119040 non-null int64
Date        119040 non-null object
MeanTemp    119040 non-null float64
dtypes: float64(1), int64(1), object(1)
memory usage: 2.7+ MB
```

## 数据可视化

- 让我们从理解数据的可视化分析开始。
  - 多少国家发起空袭
  - 哪个国家被作为最多的攻击目标
  - 最常用的十大飞机型号
  - 起飞基地位置(发起攻击的国家)
  - 目标地点
  - 轰炸路径
  - 战区
  - 气象站的位置

In [8]:

```
# 国家
print(aerial['Country'].value_counts())
plt.figure(figsize=(22,10))
sns.countplot(aerial['Country'])
plt.show()
USA              1895
GREAT BRITAIN     544
NEW ZEALAND       102
SOUTH AFRICA       14
Name: Country, dtype: int64
```

![img](https://cdn.kesci.com/rt_upload/456128C2539C438B88DA7DE18AF33D1D/ps72kfgptd.png)

In [9]:

```
# 目标国家
print(aerial['Target Country'].value_counts()[:10])
plt.figure(figsize=(22,10))
sns.countplot(aerial['Target Country'])
plt.xticks(rotation=90)
plt.show()
ITALY      1104
BURMA       335
LIBYA       272
TUNISIA     113
GREECE       87
EGYPT        80
JAPAN        71
CHINA        52
SICILY       46
GERMANY      41
Name: Target Country, dtype: int64
```

![img](https://cdn.kesci.com/rt_upload/6BE4EF56171C45808AC787142AE823FC/ps72ki5fyb.png)

In [10]:

```
# 飞机型号
data = aerial['Aircraft Series'].value_counts()
print(data[:10])
data = [go.Bar(
            x=data[:10].index,
            y=data[:10].values,
            hoverinfo = 'text',
            marker = dict(color = 'rgba(177, 14, 22, 0.5)',
                             line=dict(color='rgb(0,0,0)',width=1.5)),
    )]

layout = dict(
    title = 'Aircraft Series',
)
fig = go.Figure(data=data, layout=layout)
iplot(fig)
A36             990
B25             416
B24             337
BLEN            180
LIB             145
WELL            129
B17             119
PV-1 VENTURA     70
WHIT             32
HALI             18
Name: Aircraft Series, dtype: int64
```

- 最常用的飞机: A36

![Image Name](https://cdn.kesci.com/upload/image/ps7arhglmv.png)

现在让我们可视化一下袭击国家的基地情况

- 在下图中，蓝色代表美国，红色代表英国

In [11]:

```
# ATTACK
aerial["color"] = ""
aerial.color[aerial.Country == "USA"] = "rgb(0,116,217)"
aerial.color[aerial.Country == "GREAT BRITAIN"] = "rgb(255,65,54)"
aerial.color[aerial.Country == "NEW ZEALAND"] = "rgb(133,20,75)"
aerial.color[aerial.Country == "SOUTH AFRICA"] = "rgb(255,133,27)"

data = [dict(
    type='scattergeo',
    lon = aerial['Takeoff Longitude'],
    lat = aerial['Takeoff Latitude'],
    hoverinfo = 'text',
    text = "Country: " + aerial.Country + " Takeoff Location: "+aerial["Takeoff Location"]+" Takeoff Base: " + aerial['Takeoff Base'],
    mode = 'markers',
    marker=dict(
        sizemode = 'area',
        sizeref = 1,
        size= 10 ,
        line = dict(width=1,color = "white"),
        color = aerial["color"],
        opacity = 0.7),
)]

layout = dict(
    title = 'Countries Take Off Bases',
    hovermode='closest',
    geo = dict(showframe=False, showland=True, showcoastlines=True, showcountries=True,
               countrywidth=1, projection=dict(type='Mercator'),
              landcolor = 'rgb(217, 217, 217)',
              subunitwidth=1,
              showlakes = True,
              lakecolor = 'rgb(255, 255, 255)',
              countrycolor="rgb(5, 5, 5)")
)

fig = go.Figure(data=data, layout=layout)
iplot(fig)
```

- 可视化分析哪个国家的炸弹从哪个国家和城市起飞。

In [12]:

```
# 轰炸路径
airports = [ dict(
        type = 'scattergeo',
        lon = aerial['Takeoff Longitude'],
        lat = aerial['Takeoff Latitude'],
        hoverinfo = 'text',
        text = "Country: " + aerial.Country + " Takeoff Location: "+aerial["Takeoff Location"]+" Takeoff Base: " + aerial['Takeoff Base'],
        mode = 'markers',
        marker = dict( 
            size=5, 
            color = aerial["color"],
            line = dict(
                width=1,
                color = "white"
            )
        ))]

targets = [ dict(
        type = 'scattergeo',
        lon = aerial['Target Longitude'],
        lat = aerial['Target Latitude'],
        hoverinfo = 'text',
        text = "Target Country: "+aerial["Target Country"]+" Target City: "+aerial["Target City"],
        mode = 'markers',
        marker = dict( 
            size=1, 
            color = "red",
            line = dict(
                width=0.5,
                color = "red"
            )
        ))]
        

flight_paths = []
for i in range( len( aerial['Target Longitude'] ) ):
    flight_paths.append(
        dict(
            type = 'scattergeo',
            lon = [ aerial.iloc[i,9], aerial.iloc[i,16] ],
            lat = [ aerial.iloc[i,8], aerial.iloc[i,15] ],
            mode = 'lines',
            line = dict(
                width = 0.7,
                color = 'black',
            ),
            opacity = 0.6,
        )
    )
    
layout = dict(
    title = 'Bombing Paths from Attacker Country to Target ',
    hovermode='closest',
    geo = dict(showframe=False, showland=True, showcoastlines=True, showcountries=True,
               countrywidth=1, projection=dict(type='Mercator'),
              landcolor = 'rgb(217, 217, 217)',
              subunitwidth=1,
              showlakes = True,
              lakecolor = 'rgb(255, 255, 255)',
              countrycolor="rgb(5, 5, 5)")
)
    
fig = dict( data=flight_paths + airports+targets, layout=layout )
iplot( fig )
```

从轰炸路径可以看出，大多数轰炸都是在地中海战区进行的。

**战区:**

- ETO: 欧洲战区
- PTO: 太平洋战区
- MTO: 地中海战区
- CBI: 中-缅-印战区
- EAST AFRICA: 东非战区

In [13]:

```
#战区
print(aerial['Theater of Operations'].value_counts())
plt.figure(figsize=(22,10))
sns.countplot(aerial['Theater of Operations'])
plt.show()
MTO            1802
CBI             425
PTO             247
ETO              44
EAST AFRICA      37
Name: Theater of Operations, dtype: int64
```

![img](https://cdn.kesci.com/rt_upload/27CF65BECE8D4A718B8DCBFF01F17E04/ps72llal2x.png)

- 气象站位置可视化如下

In [14]:

```
# 气象站位置

data = [dict(
    type='scattergeo',
    lon = weather_station_location.Longitude,
    lat = weather_station_location.Latitude,
    hoverinfo = 'text',
    text = "Name: " + weather_station_location.NAME + " Country: " + weather_station_location["STATE/COUNTRY ID"],
    mode = 'markers',
    marker=dict(
        sizemode = 'area',
        sizeref = 1,
        size= 8 ,
        line = dict(width=1,color = "white"),
        color = "blue",
        opacity = 0.7),
)]
layout = dict(
    title = 'Weather Station Locations ',
    hovermode='closest',
    geo = dict(showframe=False, showland=True, showcoastlines=True, showcountries=True,
               countrywidth=1, projection=dict(type='Mercator'),
              landcolor = 'rgb(217, 217, 217)',
              subunitwidth=1,
              showlakes = True,
              lakecolor = 'rgb(255, 255, 255)',
              countrycolor="rgb(5, 5, 5)")
)
fig = go.Figure(data=data, layout=layout)
iplot(fig)
```

- 让我们聚焦美国和缅甸的战争。
- 在这场战争中，美国从1942年到1945年轰炸了缅甸(卡塔市)。
- 距离这场战争最近的气象站是**BINDUKURI**，它有1943年到1945年的气温记录。
- 现在让我们可视化一下这种情况。但是在可视化之前，我们需要创建date特征date time对象。

In [15]:

```
weather_station_id = weather_station_location[weather_station_location.NAME == "BINDUKURI"].WBAN 
weather_bin = weather[weather.STA == 32907]
weather_bin["Date"] = pd.to_datetime(weather_bin["Date"])
plt.figure(figsize=(22,10))
plt.plot(weather_bin.Date,weather_bin.MeanTemp)
plt.title("Mean Temperature of Bindukuri Area")
plt.xlabel("Date")
plt.ylabel("Mean Temperature")
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/84F57AC43C624725BC6EBEAE06582008/ps72lxi5jj.png)

- 可以看到，我们测量了1943年到1945年的温度。
- 温度在12到32度之间浮动。
- 冬季的温度比夏季的温度低。

In [16]:

```
aerial = pd.read_csv("./WWII1212/operations.csv")
aerial["year"] = [ each.split("/")[2] for each in aerial["Mission Date"]]
aerial["month"] = [ each.split("/")[0] for each in aerial["Mission Date"]]
aerial = aerial[aerial["year"]>="1943"]
aerial = aerial[aerial["month"]>="8"]

aerial["Mission Date"] = pd.to_datetime(aerial["Mission Date"])

attack = "USA"
target = "BURMA"
city = "KATHA"

aerial_war = aerial[aerial.Country == attack]
aerial_war = aerial_war[aerial_war["Target Country"] == target]
aerial_war = aerial_war[aerial_war["Target City"] == city]
```

In [17]:

```
liste = []
aa = []
for each in aerial_war["Mission Date"]:
    dummy = weather_bin[weather_bin.Date == each]
    liste.append(dummy["MeanTemp"].values)
aerial_war["dene"] = liste
for each in aerial_war.dene.values:
    aa.append(each[0])

# 创建trace
trace = go.Scatter(
    x = weather_bin.Date,
    mode = "lines",
    y = weather_bin.MeanTemp,
    marker = dict(color = 'rgba(16, 112, 2, 0.8)'),
    name = "Mean Temperature"
)
trace1 = go.Scatter(
    x = aerial_war["Mission Date"],
    mode = "markers",
    y = aa,
    marker = dict(color = 'rgba(16, 0, 200, 1)'),
    name = "Bombing temperature"
)
layout = dict(title = 'Mean Temperature --- Bombing Dates and Mean Temperature at this Date')
data = [trace,trace1]

fig = dict(data = data, layout = layout)
iplot(fig)
```

- 绿线是在Bindukuri测量的平均温度。
- 蓝色标记是轰炸日期和轰炸日的温度。
- 从图中可以看出，美国在高温下进行了轰炸。
  - 现在的问题是，我们能预测未来的天气吗?根据这个预测，我们能知道是否会发生轰炸吗?
  - 为了回答这个问题，我们先从时间序列预测开始。

## ARIMA时间序列预测

- 我们将使用最常用的方法ARIMA
- ARIMA : 差分整合移动平均自回归模型（我将在下一部分详细解释）
- 我们按下面的顺序进行讲解:
  - 什么是时间序列？
  - 时间序列的稳定性
  - 如何令时间序列稳定？
  - 时间序列预测

### 什么是时间序列?

- 时间序列是按固定的时间间隔收集的时间点的集合。
- 时间序列是跟时间有关的。所以基于线性回归模型的假设：观察结果是独立的在这种情况下是不成立的。
- 大多数时间序列都具有某种形式的季节性趋势。
  - 例如，如果我们销售冰淇淋，很可能在夏季会出现高销量。因此这个时间序列具有季节性趋势。
  - 另一个例子，假设我们在一年内每天掷一次骰子。正如你所猜测的那样，不会有像数字6主要出现在夏季或数字5主要出现在一月份这样的情况。因此，这个时间序列没有季节性趋势。

### 时间序列的稳定性

- 判断一个时间序列是否为稳定序列有三个基本准则。

  - 时间序列的统计特征如均值、方差应随时间保持不变，称为

    时间序列是平稳的

    。

    - 恒定的平均数
    - 恒定的方差
    - 不不随时间变化的自协方差。（自协方差是时间序列与滞后时间序列之间的协方差）

- 让我们可视化并检查时间序列的季节性趋势。

In [18]:

```
# 本迪库里地区平均气温
plt.figure(figsize=(22,10))
plt.plot(weather_bin.Date,weather_bin.MeanTemp)
plt.title("Mean Temperature of Bindukuri Area")
plt.xlabel("Date")
plt.ylabel("Mean Temperature")
plt.show()

# 从天气weather中创建时间序列 
timeSeries = weather_bin.loc[:, ["Date","MeanTemp"]]
timeSeries.index = timeSeries.Date
ts = timeSeries.drop("Date",axis=1)
```

![img](https://cdn.kesci.com/rt_upload/2C33C2909A6A4626BE2AA357453703D8/ps72ml1n2w.png)

- 从上图可以看出此时间序列具有季节性变化。每年的夏季平均气温升高，冬季平均气温降低。
- 现在我们来检查时间序列的稳定性。我们可以使用以下方法来检查稳定性:
  - **绘制滚动统计**:绘制移动平均数和移动方差，观察它是否随着时间变化。
  - **Dickey-Fuller检验**:这是一种检查数据稳定性的统计测试。测试结果由测试统计量和一些置信区间的临界值组成，如果“测试统计量”少于“临界值”，我们可以认为序列是稳定的。

In [19]:

```
# 加载adfuller库
from statsmodels.tsa.stattools import adfuller
# check_adfuller
def check_adfuller(ts):
    # Dickey-Fuller检验
    result = adfuller(ts, autolag='AIC')
    print('Test statistic: ' , result[0])
    print('p-value: '  ,result[1])
    print('Critical Values:' ,result[4])
# check_mean_std
def check_mean_std(ts):
    # 滚动统计
    rolmean = ts.rolling(6).mean()
    rolstd = ts.rolling(6).std()
    plt.figure(figsize=(22,10))   
    orig = plt.plot(ts, color='red',label='Original')
    mean = plt.plot(rolmean, color='black', label='Rolling Mean')
    std = plt.plot(rolstd, color='green', label = 'Rolling Std')
    plt.xlabel("Date")
    plt.ylabel("Mean Temperature")
    plt.title('Rolling Mean & Standard Deviation')
    plt.legend()
    plt.show()
    
# 检验平稳性:均值，方差(std)和adfuller检验
check_mean_std(ts)
check_adfuller(ts.MeanTemp)
```

![img](https://cdn.kesci.com/rt_upload/CFA8B47B527E4EE7B34D1C4919FD0F8D/ps72mqu3zg.png)

```
Test statistic:  -1.4095966745887747
p-value:  0.577666802852636
Critical Values: {'1%': -3.439229783394421, '5%': -2.86545894814762, '10%': -2.5688568756191392}
```

- 稳定性第一个标准是恒定的均值。正如你从上面的图(黑线)中看到的，均值不固定。(不符合)

- 第二个是恒定的方差。它看起来是恒定的。(符合)

- 第三，如果

  检验统计量

  小于

  临界值

  ，我们可以说时间序列是稳定的。让我们看:

  - 检验统计量= -1.4，临界值={'1%':-3.439229783394421，'5%':-2.86545894814762，'10%':- 2.56888756191392}。检验统计量大于临界值。(不符合)

- 综上，我们确定时间序列不稳定。

### 如何让时间序列保持稳定?

- 如前所述，时间序列的不稳定有两个原因：

  - 趋势-随着时间产生不同的平均值。为了让时间序列稳定，我们需要恒定的均值。
  - 季节性-特定时间框架内的变化。为了让时间序列稳定，我们需要恒定的变化。

- 首先解决

  趋势(均值恒定)

  问题

  - 最常用的方法是移动平均法。
    - 移动平均法:移动平均法是用一组最近的实际数据值来预测未来一期或几期内公司产品的需求量、公司产能等的一种常用方法。我们可以采用过去半年的平均数，即过去6个月的平均数。

In [56]:

```
# 移动平均法
moving_avg = ts.rolling(6).mean()
plt.figure(figsize=(22,10))
plt.plot(ts, color = "red",label = "Original")
plt.plot(moving_avg, color='black', label = "moving_avg_mean")
plt.title("Mean Temperature of Bindukuri Area")
plt.xlabel("Date")
plt.ylabel("Mean Temperature")
plt.legend()
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/B29EC292B3D840FA8DF0010A8C09AD3A/ps7cslq0zh.png)

黑色线表示了滚动平均数。让我们从原始序列中减去这个平均数。注意，从我们采用过去6个月的值开始，滚动平均法还没有对前5个月的值定义。我们可以看到：

In [59]:

```
ts_moving_avg_diff = ts - moving_avg
ts_moving_avg_diff.head(6)
```

Out[59]:

|            | MeanTemp |
| :--------- | -------: |
| Date       |          |
| 1943-05-11 |      NaN |
| 1943-05-12 |      NaN |
| 1943-05-13 |      NaN |
| 1943-05-14 |      NaN |
| 1943-05-15 |      NaN |
| 1943-05-16 | 0.462963 |

注意前5个月是nan值，现在让我们删除这5个月的nan值，并检查稳定性。

In [21]:

```
ts_moving_avg_diff.dropna(inplace=True) 

# 检验稳定性:均值，方差(std)和adfuller检验
check_mean_std(ts_moving_avg_diff)
check_adfuller(ts_moving_avg_diff.MeanTemp)
```

![img](https://cdn.kesci.com/rt_upload/20B7E9DE08A04477B9D47BF326F2A3AC/ps72mx15kt.png)

```
Test statistic:  -11.138514335138474
p-value:  3.150868563164652e-20
Critical Values: {'1%': -3.4392539652094154, '5%': -2.86546960465041, '10%': -2.5688625527782327}
```

- 恒定平均值标准:从上图(黑线)可以看出，平均值看起来是恒定的。(符合)
- 恒定方差标准：方差它看起来是恒定的。(符合)
- 检验统计量小于1%的临界值，所以我们在99%的置信区间认为这是一个稳定序列。(符合)
- 由上，我们得到了平稳时间序列。不过，让我们再看一种消除趋势和季节性的方法。
  - **差分法**:处理趋势和季节性的最常见的方法之一就是差分法。在这种方法中,我们采用一个特定时间差的差值。

In [22]:

```
# 差分法
ts_diff = ts - ts.shift()
plt.figure(figsize=(22,10))
plt.plot(ts_diff)
plt.title("Differencing method") 
plt.xlabel("Date")
plt.ylabel("Differencing Mean Temperature")
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/4DD2804CB8574BD58CFB9B4763726F83/ps72n2rjf7.png)

In [23]:

```
ts_diff.dropna(inplace=True) # 由于移动，这里有nan值
# 检验平稳:均值，方差(std)和adfuller检验
check_mean_std(ts_diff)
check_adfuller(ts_diff.MeanTemp)
```

![img](https://cdn.kesci.com/rt_upload/01ADC1197E854FF5A8CF7C7D63D51695/ps72n48rmr.png)

```
Test statistic:  -11.678955575105364
p-value:  1.7602075693560224e-21
Critical Values: {'1%': -3.439229783394421, '5%': -2.86545894814762, '10%': -2.5688568756191392}
```

- 恒定平均值标准:从上图(黑线)可以看出，平均值看起来是恒定的。(符合)
- 恒定方差标准：方差看起来是恒定的。(符合)
- 检验统计量小于1%的临界值，所以我们有99%的信心认为这是一个平稳序列。(符合)

### 时间序列预测

- 我们学习了两种不同的方法，即移动平均法和差分法来消除趋势和季节性问题。
- 预测将使用`ts_diff`时间序列，这是上面使用差分法的结果。
- 预测方法是ARIMA，即自回归综合移动平均线。
  - 自回归函数（AR）的条件（p）：AR条件仅仅是因变量的滞后。比如p = 3，我们用x(t-1) x(t-2) x(t-3)来预测x(t)
  - I:差分（d）: 非季节性的差值。例如，在我们的例子中，我们取一阶差分。我们传递这个变量，让d=0。
  - 移动平均数(MA)的条件(q):MA项是预测方程中的滞后预测误差。
- (p,d,q)为ARIMA模型的参数。
- 为了选择p d q参数，我们将使用两个不同的图。
  - 自相关函数(ACF):延迟为 k 时，这是相距 k 个时间间隔的序列值之间的相关性。
  - 偏自相关函数(PACF):延迟为 k 时，这是相距 k 个时间间隔的序列值之间的相关性，同时考虑了间隔之间的值。
  - 自相关和偏自相关用于测量当前序列值和过去序列值之间的相关性，并指示预测将来值时最有用的过去序列值。

In [24]:

```
# ACF 和 PACF 
from statsmodels.tsa.stattools import acf, pacf
lag_acf = acf(ts_diff, nlags=20)
lag_pacf = pacf(ts_diff, nlags=20, method='ols')
# ACF
plt.figure(figsize=(22,10))

plt.subplot(121) 
plt.plot(lag_acf)
plt.axhline(y=0,linestyle='--',color='gray')
plt.axhline(y=-1.96/np.sqrt(len(ts_diff)),linestyle='--',color='gray')
plt.axhline(y=1.96/np.sqrt(len(ts_diff)),linestyle='--',color='gray')
plt.title('Autocorrelation Function')

# PACF
plt.subplot(122)
plt.plot(lag_pacf)
plt.axhline(y=0,linestyle='--',color='gray')
plt.axhline(y=-1.96/np.sqrt(len(ts_diff)),linestyle='--',color='gray')
plt.axhline(y=1.96/np.sqrt(len(ts_diff)),linestyle='--',color='gray')
plt.title('Partial Autocorrelation Function')
plt.tight_layout()
```

![img](https://cdn.kesci.com/rt_upload/E53C0A9B81634C51AFBAE10609948775/ps72na11kc.png)

- 相邻两条虚线之间是置信区间。我们使用这些行来确定' p '和' q '值
  - 选择p: PACF图第一次越过上置信区间的滞后值。p = 1。
  - 选择q: ACF图第一次越过上置信区间的滞后值。q = 1。
- 现在让我们使用(1,0,1)作为ARIMA模型的参数并进行预测
  - ARIMA: 从statsmodels库加载

In [52]:

```
# 加载ARIMA库
from statsmodels.tsa.arima_model import ARIMA
from pandas import datetime

# 训练模型
model = ARIMA(ts, order=(1,0,1)) # (ARMA) = (1,0,1)
model_fit = model.fit(disp=0)

# 预测
forecast = model_fit.predict()

# 可视化
plt.figure(figsize=(22,10))
plt.plot(weather_bin.Date,weather_bin.MeanTemp,label = "original")
plt.plot(forecast,label = "predicted")
plt.title("Time Series Forecast")
plt.xlabel("Date")
plt.ylabel("Mean Temperature")
plt.legend()
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/D65729995B2F44FA9CF45E665B85DD7B/ps798u55zr.png)

- 找出平均平方误差

In [51]:

```
# 平均平方误差
from sklearn.metrics import mean_squared_error
error = mean_squared_error(ts, forecast)
print("error: " ,error)
error:  1.862582002591879
```