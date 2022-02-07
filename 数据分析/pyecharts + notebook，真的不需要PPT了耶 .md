# pyecharts+notebook,真的不需要PPT了耶[¶](#pyecharts+notebook,真的不需要PPT了耶)

用过`pyecharts`之后，才发现它竟然如此强大。在 [Github pyecharts repo](https://github.com/chenjiandongx/pyecharts) 中找到这个项目，在K-Lab上实践一下。

## 目录[¶](#目录)

| 已完成实践                                                   |          正在施工          |
| :----------------------------------------------------------- | :------------------------: |
| [**Bar（柱状图/条形图)**](#Bar/柱状图/条形图)                |     Bar3D（3D 柱状图）     |
| [**Boxplot（箱形图）**](#Boxplot/箱形图)                     |     Geo（地理坐标系）      |
| [**EffectScatter（带有涟漪特效动画的散点图）**](#EffectScatter/带有涟漪特效动画的散点图) | GeoLines（地理坐标系线图） |
| [**Funnel（漏斗图）**](#Funnel/漏斗图)                       |    Line3D（3D 折线图）     |
| [**Gauge（仪表盘）**](#Gause/仪表盘)                         |      Liquid（水球图）      |
| [**Graph（关系图）**](#Graph/关系图)                         |        Map（地图）         |
| [**HeatMap（热力图）**](#Heatmap/热力图)                     |   Scatter3D（3D 散点图）   |
| [**Kline（K线图）**](#Kline/K线图)                           |   ThemeRiver/主题河流图    |
| [**Line（折线/面积图）**](#Line/折线/面积图)                 |      TreeMap（树图）       |
| [**Parallel（平行坐标系）**](#Parallel/平行坐标系)           |    WordCloud（词云图）     |
| [**Pie（饼图）**](#Pie/饼图)                                 |                            |
| [**Polar（极坐标系）**](#Polar/极坐标系)                     |                            |
| [**Radar（雷达图）**](#Radar/雷达图)                         |                            |
| [**Sankey（桑基图）**](#Sankey/桑基图)                       |                            |
| [**Scatter（散点图）**](#Scatter/散点图)                     |                            |

In [1]:

```
# 我们来看看科赛网目前内置的 pyecharts版本
import pyecharts
pyecharts.__version__
```

Out[1]:

```
'0.2.7'
```

In [2]:

```
# 导入pyecharts
from pyecharts import * 
```

## Bar/柱状图/条形图[¶](#Bar/柱状图/条形图)

> 柱状/条形图，通过柱形的高度/条形的宽度来表现数据的大小。

Bar.add() 方法签名

```
add(name, x_axis, y_axis,  
    is_stack=False,  
    bar_category_gap='20%', **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> list
    y 坐标轴数据    
- is_stack -> bool
    数据堆叠，同个类目轴上系列配置相同的 stack 值可以堆叠放置    
- bar_category_gap -> int/str
    类目轴的柱状距离，当设置为 0 时柱状是紧挨着（直方图类型），默认为 '20%'  

In [ ]:

```
# import pyecharts
# import pyecharts.constants as constants
# constants.CONFIGURATION['HOST'] = "https://cdn.kesci.com/nbextensions/echarts"
```

In [3]:

```
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("柱状图数据堆叠示例",jshost='https://cdn.kesci.com/nbextensions/echarts')


bar.add("商家A", attr, v1, is_stack=True)
bar.add("商家B", attr, v2, is_stack=True)
bar
```

Out[3]:

商家A
雪纺衫: 36

**Note：** 全局配置项要在最后一个 `add()` 上设置，否侧设置会被冲刷掉。

In [4]:

```
from pyecharts import Bar

bar = Bar("标记线和标记点示例",jshost='https://cdn.kesci.com/nbextensions/echarts')

bar.add("商家A", attr, v1, mark_point=["average"])
bar.add("商家B", attr, v2, mark_line=["min", "max"])
bar
```

Out[4]:

商家B
Maximum : 80

In [5]:

```
from pyecharts import Bar

bar = Bar("x 轴和 y 轴交换",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

bar.add("商家A", attr, v1)
bar.add("商家B", attr, v2, is_convert=True)
bar
```

Out[5]:

商家A
羊毛衫: 20

dataZoom 效果，'slider' 类型

In [ ]:

```
import random

attr = ["{}天".format(i) for i in range(30)]
v1 = [random.randint(1, 30) for _ in range(30)]
bar = Bar(jshost='https://cdn.kesci.com/nbextensions/echarts')

bar.add("", attr, v1, is_label_show=True, is_datazoom_show=True)
bar
```

dataZoom 效果，'inside' 类型

In [ ]:

```
attr = ["{}天".format(i) for i in range(30)]
v1 = [random.randint(1, 30) for _ in range(30)]
bar = Bar("Bar - datazoom - inside 示例",jshost='https://cdn.kesci.com/nbextensions/echarts')

bar.add("", attr, v1, is_datazoom_show=True, datazoom_type='inside', datazoom_range=[10, 25])
bar 
```

dataZoom 效果，'both' 类型

In [ ]:

```
attr = ["{}天".format(i) for i in range(30)]
v1 = [random.randint(1, 30) for _ in range(30)]
bar = Bar("Bar - datazoom - inside 示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

bar.add("", attr, v1, is_datazoom_show=True, datazoom_type='both', datazoom_range=[10, 25])
bar
```

**Note：** datazoom 适合所有平面直角坐标系图形，也就是(Line、Bar、Scatter、EffectScatter、Kline)

当 x 轴或者 y 轴的标签因为过于密集而导致全部显示出来会重叠的话，可采用使标签旋转的方法。

In [ ]:

```
attr = ["{}天".format(i) for i in range(20)]
v1 = [random.randint(1, 20) for _ in range(20)]
bar = Bar("坐标轴标签旋转示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

bar.add("", attr, v1, xaxis_interval=0, xaxis_rotate=30, yaxis_rotate=30)
bar
```

**Note：** 可通过设置 xaxis_min/xaxis_max/yaxis_min/yaxis_max 来调整 x 轴和 y 轴上的最大最小值。针对数值轴有效！
**Note：** 可以通过 label_color 来设置柱状的颜色，如 ['#eee', '#000']，所有的图表类型的图例颜色都可通过 label_color 来修改。

瀑布图示例

In [ ]:

```
from pyecharts import Bar

attr = ["{}月".format(i) for i in range(1, 8)]
v1 = [0, 100, 200, 300, 400, 220, 250]
v2 = [1000, 800, 600, 500, 450, 400, 300]
bar = Bar("瀑布图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# 利用第一个 add() 图例的颜色为透明，即 'rgba(0,0,0,0)'，并且设置 is_stack 标志为 True
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

bar.add("", attr, v1, label_color=['rgba(0,0,0,0)'], is_stack=True)
bar.add("月份", attr, v2, is_label_show=True, is_stack=True, label_pos='inside')
bar
```

直方图示例

In [ ]:

```
from pyecharts import Bar

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("直方图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

bar.add("", attr * 2, v1 + v2, bar_category_gap=0)
bar
```

某地的降水量和蒸发量柱状图

In [ ]:

```
from pyecharts import Bar

attr = ["{}月".format(i) for i in range(1, 13)]
v1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
v2 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
bar = Bar("柱状图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

bar.add("蒸发量", attr, v1, mark_line=["average"], mark_point=["max", "min"])
bar.add("降水量", attr, v2, mark_line=["average"], mark_point=["max", "min"])
bar
```

[返回目录](#目录)

## Bar3D/3D柱状图[¶](#Bar3D/3D柱状图)

Bar3D.add() 方法签名

```
add(name, x_axis, y_axis, data,  
    grid3d_opacity=1,  
    grid3d_shading='color', **kwargs)
```

- name -> str
    图例名称  

- x_axis -> str
    x 坐标轴数据。需为类目轴，也就是不能是数值。  

- y_axis -> str
    y 坐标轴数据。需为类目轴，也就是不能是数值。  

- data -> [list], 包含列表的列表
    数据项，数据中，每一行是一个『数据项』，每一列属于一个『维度』  

- grid3d_opacity -> int
    3D 笛卡尔坐标系组的透明度（柱状的透明度），默认为 1，完全不透明。  

- grid3d_shading -> str

    三维柱状图中三维图形的着色效果。  

  - color：只显示颜色，不受光照等其它因素的影响。  
  - lambert：通过经典的 lambert 着色表现光照带来的明暗。  
  - realistic：真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了基于物理的渲染（PBR) 来表现真实感材质。  

data 中，如 [1, 2, 3] 表示 x 轴的索引为 1，即 "1a"；y 轴的索引为 2，即 "Thursday"；z 轴的数值为 3

[返回目录](#目录)

## Boxplot/箱形图[¶](#Boxplot/箱形图)

> 箱形图是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。

Boxplot.add() 方法签名

```
add(name, x_axis, y_axis, **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> [list], 包含列表的列表
    y 坐标轴数据，二维数组的每一数组项（上例中的每行）是渲染一个 box，它含有五个量值，依次是：
    [min,  Q1,  median (or Q2),  Q3,  max]  

可自行计算出所需五个数值，也可通过内置 `prepare_data()` 转换，`prepare_data()` 会将传入的嵌套列表中的数据转换为嵌套的 [min,  Q1,  median (or Q2),  Q3,  max]，如下所示：

In [ ]:

```
from pyecharts import Boxplot

boxplot = Boxplot("箱形图",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

x_axis = ['expr1', 'expr2', 'expr3', 'expr4', 'expr5']
y_axis = [
    [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880,
    1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
    [960, 940, 960, 940, 880, 800, 850, 880, 900, 840,
    830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
    [880, 880, 880, 860, 720, 720, 620, 860, 970, 950,
    880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
    [890, 810, 810, 820, 800, 770, 760, 740, 750, 760,
    910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
    [890, 840, 780, 810, 760, 810, 790, 810, 820, 850,
    870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
]
_yaxis = boxplot.prepare_data(y_axis)       # 转换数据
boxplot.add("boxplot", x_axis, _yaxis)
boxplot.render()
boxplot
```

或者直接在 add() 中转换

In [ ]:

```
from pyecharts import Boxplot

boxplot = Boxplot("箱形图",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

x_axis = ['expr1', 'expr2']
y_axis1 = [
    [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880,
    1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
    [960, 940, 960, 940, 880, 800, 850, 880, 900, 840,
    830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
]
y_axis2 = [
    [890, 810, 810, 820, 800, 770, 760, 740, 750, 760,
    910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
    [890, 840, 780, 810, 760, 810, 790, 810, 820, 850,
    870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
]
boxplot.add("category1", x_axis, boxplot.prepare_data(y_axis1))
boxplot.add("category2", x_axis, boxplot.prepare_data(y_axis2))
boxplot
```

[返回目录](#目录)

## EffectScatter/带有涟漪特效动画的散点图[¶](#EffectScatter/带有涟漪特效动画的散点图)

> 利用动画特效可以将某些想要突出的数据进行视觉突出。

EffectScatter.add() 方法签名

```
add(name, x_axis, y_axis,  
    symbol_size=10, **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> list
    y 坐标轴数据  
- symbol_size -> int
    标记图形大小，默认为 10  

In [ ]:

```
from pyecharts import EffectScatter

v1 = [10, 20, 30, 40, 50, 60]
v2 = [25, 20, 15, 10, 60, 33]
es = EffectScatter("动态散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

es.add("effectScatter", v1, v2)
es
```

In [ ]:

```
es = EffectScatter("动态散点图各种图形示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

es.add("", [10], [10], symbol_size=20, effect_scale=3.5, effect_period=3, symbol="pin")
es.add("", [20], [20], symbol_size=12, effect_scale=4.5, effect_period=4,symbol="rect")
es.add("", [30], [30], symbol_size=30, effect_scale=5.5, effect_period=5,symbol="roundRect")
es.add("", [40], [40], symbol_size=10, effect_scale=6.5, effect_brushtype='fill',symbol="diamond")
es.add("", [50], [50], symbol_size=16, effect_scale=5.5, effect_period=3,symbol="arrow")
es.add("", [60], [60], symbol_size=6, effect_scale=2.5, effect_period=3,symbol="triangle")
es
```

- symbol -> str
    标记图形，有'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'可选  
- effect_brushtype -> str
    波纹绘制方式，有'stroke', 'fill'可选。默认为'stroke'  
- effect_scale -> float
    动画中波纹的最大缩放比例。默认为 2.5  
- effect_period -> float
    动画持续的时间。默认为 4（s）  

[返回目录](#目录)

## Funnel/漏斗图[¶](#Funnel/漏斗图)

Funnel.add() 方法签名

```
add(name, attr, value, **kwargs)
```

- name -> str
    图例名称  
- attr -> list
    属性名称  
- value -> list
    属性所对应的值  

In [ ]:

```
from pyecharts import Funnel

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
value = [20, 40, 60, 80, 100, 120]
funnel = Funnel("漏斗图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

funnel.add("商品", attr, value, is_label_show=True, label_pos="inside", label_text_color="#fff")
funnel
```

In [ ]:

```
funnel = Funnel("漏斗图示例", width=600, height=400, title_pos='center'
                ,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

funnel.add("商品", attr, value, is_label_show=True, label_pos="outside",
           legend_orient='vertical', legend_pos='left')
funnel
```

[返回目录](#目录)

## Gauge/仪表盘[¶](#Gauge/仪表盘)

Gauge.add() 方法签名

```
add(name, attr, value,  
    scale_range=None,  
    angle_range=None, **kwargs)
```

- name -> str
    图例名称  
- attr -> list
    属性名称  
- value -> list
    属性所对应的值  
- scale_range -> list
    仪表盘数据范围。默认为 [0, 100]  
- angle_range -> list
    仪表盘角度范围。默认为 [225, -45]  

In [ ]:

```
from pyecharts import Gauge

gauge = Gauge("仪表盘示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

gauge.add("业务指标", "完成率", 66.66)
gauge
```

In [ ]:

```
gauge = Gauge("仪表盘示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

gauge.add("业务指标", "完成率", 166.66, angle_range=[180, 0], scale_range=[0, 200],
          is_legend_show=False)
gauge
```

[返回目录](#目录)

## Graph/关系图[¶](#Graph/关系图)

> 用于展现节点以及节点之间的关系数据。

Graph.add() 方法签名

```
add(name, nodes, links,  
    categories=None,  
    is_focusnode=True,  
    is_roam=True,  
    is_rotatelabel=False,  
    layout="force",  
    graph_edge_length=50,  
    graph_gravity=0.2,  
    graph_repulsion=50, **kwargs)
```

- name -> str
    图例名称  

- nodes -> dict

    关系图结点，包含的数据项有    

  - name：结点名称（必须有！）  
  - x：节点的初始 x 值  
  - y：节点的初始 y 值  
  - value：结点数值   
  - category：结点类目  
  - symbol：标记图形  
  - symbolSize：标记图形大小  

- links -> dict

    结点间的关系数据，包含的数据项有    

  - source：边的源节点名称的字符串，也支持使用数字表示源节点的索引（必须有！）  
  - target：边的目标节点名称的字符串，也支持使用数字表示源节点的索引（必须有！）  
  - value：边的数值，可以在力引导布局中用于映射到边的长度  

- categories -> list
    结点分类的类目，结点可以指定分类，也可以不指定。
    如果节点有分类的话可以通过 nodes[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上  

- is_focusnode -> bool
    是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。默认为 True  

- is_roam -> bool/str
    是否开启鼠标缩放和平移漫游。默认为 True
    如果只想要开启缩放或者平移，可以设置成'scale'或者'move'。设置成 True 为都开启  

- is_rotatelabel -> bool
    是否旋转标签，默认为 False  

- graph_layout -> str

    关系图布局，默认为 'force'  

  - none：不采用任何布局，使用节点中必须提供的 x， y 作为节点的位置。  
  - circular：采用环形布局  
  - force：采用力引导布局  

- graph_edge_length -> int
    力布局下边的两个节点之间的距离，这个距离也会受 repulsion 影响。默认为 50
    支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长  

- graph_gravity -> int
    节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。默认为 0.2  

- graph_repulsion -> int
    节点之间的斥力因子。默认为 50
    支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大  

- graph_edge_symbol -> str/list
    边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']  

- graph_edge_symbolsize -> int/list
    边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。  

In [ ]:

```
from pyecharts import Graph

nodes = [{"name": "结点1", "symbolSize": 10},
         {"name": "结点2", "symbolSize": 20},
         {"name": "结点3", "symbolSize": 30},
         {"name": "结点4", "symbolSize": 40},
         {"name": "结点5", "symbolSize": 50},
         {"name": "结点6", "symbolSize": 40},
         {"name": "结点7", "symbolSize": 30},
         {"name": "结点8", "symbolSize": 20}]
links = []
for i in nodes:
    for j in nodes:
        links.append({"source": i.get('name'), "target": j.get('name')})
graph = Graph("关系图-力引导布局示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

graph.add("", nodes, links, repulsion=8000)
graph
```

In [ ]:

```
from pyecharts import Graph
graph = Graph("关系图-环形布局示例")
graph.add("", nodes, links, is_label_show=True,
          graph_repulsion=8000, graph_layout='circular', label_text_color=None,
         jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 
graph
```

**Note：** 可配置 **lineStyle** 参数

[返回目录](#目录)

# HeatMap/热力图[¶](#HeatMap/热力图)

> 热力图主要通过颜色去表现数值的大小，必须要配合 visualMap 组件使用。直角坐标系上必须要使用两个类目轴。

HeatMap.add() 方法签名

```
add(*args, **kwargs)
```

如果指定了 `is_calendar_heatmap`（使用日历热力图）为 True，则参数为

- name -> str
    图例名称  
- data -> [list], 包含列表的列表
    数据项，数据中，每一行是一个『数据项』，每一列属于一个『维度』  
- calendar_date_range -> str/list
    日历热力图的日期, "2016" 表示 2016 年, ["2016-5-5", "2017-5-5"] 表示 2016 年 5 月 5 日至 2017 年 5 月 5 日    
- calendar_cell_size -> list
    日历每格框的大小，可设置单值 或数组 第一个元素是宽 第二个元素是高，支持设置自适应 "auto"。默认为 ["auto", 20]  

默认为不指定，参数为

- name -> str
    图例名称  
- x_axis -> str
    x 坐标轴数据。需为类目轴，也就是不能是数值。  
- y_axis -> str
    y 坐标轴数据。需为类目轴，也就是不能是数值。  
- data -> [list], 包含列表的列表
    数据项，数据中，每一行是一个『数据项』，每一列属于一个『维度』  

默认情况，不指定 `is_calendar_heatmap`

In [ ]:

```
import random
from pyecharts import HeatMap

x_axis = ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a",
          "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]
y_axis = ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]
data = [[i, j, random.randint(0, 50)] for i in range(24) for j in range(7)]
heatmap = HeatMap(jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

heatmap.add("热力图直角坐标系", x_axis, y_axis, data, is_visualmap=True,
            visual_text_color="#000", visual_orient='horizontal')
heatmap
```

使用日历热力图，指定 `is_calendar_heatmap` 为 True

**Note：** 热力图必须配合 [通用配置项](https://github.com/chenjiandongx/pyecharts/blob/master/docs/zh-cn/documentation.md#通用配置项) 中的 VisualMap 使用才有效果。

[返回目录](#目录)

## Kline/K线图[¶](#Kline/K线图)

> 红涨蓝跌

Kline.add() 方法签名

```
add(name, x_axis, y_axis, **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> [list], 包含列表的列表
    y 坐标轴数据。数据中，每一行是一个『数据项』，每一列属于一个『维度』。
    数据项具体为 [open, close, lowest, highest] （即：[开盘值, 收盘值, 最低值, 最高值]）  

In [ ]:

```
from pyecharts import Kline

v1 = [[2320.26, 2320.26, 2287.3, 2362.94], [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2345.92], [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.75, 2382.48, 2347.89, 2383.76], [2383.43, 2385.42, 2371.23, 2391.82],
      [2377.41, 2419.02, 2369.57, 2421.15], [2425.92, 2428.15, 2417.58, 2440.38],
      [2411, 2433.13, 2403.3, 2437.42], [2432.68, 2334.48, 2427.7, 2441.73],
      [2430.69, 2418.53, 2394.22, 2433.89], [2416.62, 2432.4, 2414.4, 2443.03],
      [2441.91, 2421.56, 2418.43, 2444.8], [2420.26, 2382.91, 2373.53, 2427.07],
      [2383.49, 2397.18, 2370.61, 2397.94], [2378.82, 2325.95, 2309.17, 2378.82],
      [2322.94, 2314.16, 2308.76, 2330.88], [2320.62, 2325.82, 2315.01, 2338.78],
      [2313.74, 2293.34, 2289.89, 2340.71], [2297.77, 2313.22, 2292.03, 2324.63],
      [2322.32, 2365.59, 2308.92, 2366.16], [2364.54, 2359.51, 2330.86, 2369.65],
      [2332.08, 2273.4, 2259.25, 2333.54], [2274.81, 2326.31, 2270.1, 2328.14],
      [2333.61, 2347.18, 2321.6, 2351.44], [2340.44, 2324.29, 2304.27, 2352.02],
      [2326.42, 2318.61, 2314.59, 2333.67], [2314.68, 2310.59, 2296.58, 2320.96],
      [2309.16, 2286.6, 2264.83, 2333.29], [2282.17, 2263.97, 2253.25, 2286.33],
      [2255.77, 2270.28, 2253.31, 2276.22]]
kline = Kline("K 线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1)
kline
```

Kline + dataZoom

In [ ]:

```
kline = Kline("K 线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1,
          mark_point=["max"], is_datazoom_show=True)
kline.render()
kline
```

dataZoom 效果加在纵坐标轴上

In [ ]:

```
kline = Kline("K 线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1, mark_point=["max"],
          is_datazoom_show=True, datazoom_orient='vertical')
kline.render()
kline
```

指定 markLine 位于开盘或者收盘上

In [ ]:

```
kline = Kline("K 线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)],
          v1, mark_line=["max"], mark_line_symbolsize=0,
          datazoom_orient='vertical', mark_line_valuedim='close')
kline.render()
kline
```

[返回目录](#目录)

## Line/折线/面积图[¶](#Line/折线/面积图)

> 折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。

Line.add() 方法签名

```
add(name, x_axis, y_axis,  
    is_symbol_show=True,  
    is_smooth=False,  
    is_stack=False,  
    is_step=False,  
    is_fill=False, **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> list
    y 坐标轴数据  
- is_symbol_show -> bool
    是否显示标记图形，默认为 True  
- is_smooth -> bool
    是否平滑曲线显示，默认为 False  
- is_stack -> bool
    数据堆叠，同个类目轴上系列配置相同的 stack 值可以堆叠放置。默认为 False  
- is_step -> bool/str
    是否是阶梯线图。可以设置为 True 显示成阶梯线图。默认为 False
    也支持设置成'start', 'middle', 'end'分别配置在当前点，当前点与下个点的中间下个点拐弯。  
- is_fill -> bool
    是否填充曲线所绘制面积，默认为 False  

In [ ]:

```
from pyecharts import Line

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 10, 100]
v2 = [55, 60, 16, 20, 15, 80]
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, v1, mark_point=["average"])
line.add("商家B", attr, v2, is_smooth=True, mark_line=["max", "average"])
line
```

标记点其他配置

In [ ]:

```
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, v1, mark_point=["average", "max", "min"],
         mark_point_symbol='diamond', mark_point_textcolor='#40ff27')
line.add("商家B", attr, v2, mark_point=["average", "max", "min"],
         mark_point_symbol='arrow', mark_point_symbolsize=40)
line.render()
line
```

In [ ]:

```
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, v1,
            mark_point=["average", {
                "coord": ["裤子", 10], "name": "这是我想要的第一个标记点"}])
line.add("商家B", attr, v2, is_smooth=True,
            mark_point=[{
                "coord": ["袜子", 80], "name": "这是我想要的第二个标记点"}])
line.render()
line
```

In [ ]:

```
line = Line("折线图-数据堆叠示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, v1, is_stack=True, is_label_show=True)
line.add("商家B", attr, v2, is_stack=True, is_label_show=True)
line.render()
line
```

In [ ]:

```
line = Line("折线图-阶梯图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

line.add("商家A", attr, v1, is_step=True, is_label_show=True)
line.render()
line
```

In [ ]:

```
line = Line("折线图-面积图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, v1, is_fill=True, line_opacity=0.2, area_opacity=0.4, symbol=None)
line.add("商家B", attr, v2, is_fill=True, area_color='#000', area_opacity=0.3, is_smooth=True)
line.render()
line
```

- area_opacity -> float
    填充区域透明度  
- area_color -> str
    填充区域颜色  

**Note：** 可配置 **lineStyle** 参数
**Note：** 可以通过 label_color 来设置线条颜色，如 ['#eee', '#000']，所有的图表类型的图例颜色都可通过 label_color 来修改。

如果是对数数据，推荐使用 `yaxis_type` 参数来设置 y 坐标轴为对数轴

In [ ]:

```
import math, random
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("商家A", attr, [math.log10(random.randint(1, 99999)) for _ in range(6)])
line.add("商家B", attr, [math.log10(random.randint(1, 99999999)) for _ in range(6)],
         yaxis_type="log")
line.render()
line
```

某地最低温和最高气温折线图

In [ ]:

```
from pyecharts import Line

attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日', ]
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
         mark_point=["max", "min"],  mark_line=["average"],
         yaxis_formatter="°C")
# line.show_config()
line.render()
line
```

[返回目录](#目录)

## Polar/极坐标系[¶](#Polar/极坐标系)

> 可以用于散点图和折线图。

Polar.add() 方法签名

```
add(name, data,  
    angle_data=None,  
    radius_data=None,  
    type='line',  
    symbol_size=4,  
    start_angle=90,  
    rotate_step=0,  
    boundary_gap=True,  
    clockwise=True, **kwargs)
```

- name -> str
    图例名称  
- data -> [list], 包含列表的列表
    数据项 [极径，极角 [数据值]]  
- angle_data -> list
    角度类目数据  
- radius_data -> list
    半径类目数据  
- type -> str
    图例类型，有'line', 'scatter', 'effectScatter', 'barAngle', 'barRadius'可选。默认为 'line'  
- symbol_size -> int
    标记图形大小，默认为 4。  
- start_angle -> int
    起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方  
- rotate_step -> int
    刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠
    旋转的角度从 -90 度到 90 度。默认为 0  
- boundary_gap -> bool
    坐标轴两边留白策略
    默认为 True，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间  
- clockwise -> bool
    刻度增长是否按顺时针，默认 True  
- is_stack -> bool
    数据堆叠，同个类目轴上系列配置相同的 stack 值可以堆叠放置  
- axis_range -> list
    坐标轴刻度范围。默认值为 [None, None]。  
- is_angleaxis_show -> bool
    是否显示极坐标系的角度轴，默认为 True  
- is_radiusaxis_show -> bool
    是否显示极坐标系的径向轴，默认为 True  

In [ ]:

```
from pyecharts import Polar

import random
data = [(i, random.randint(1, 100)) for i in range(101)]
polar = Polar("极坐标系-散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

polar.add("", data, boundary_gap=False, type='scatter', is_splitline_show=False,
          area_color=None, is_axisline_show=True)
polar.render()
polar
```

- is_splitline_show  -> bool
    是否显示分割线，默认为 True  
- is_axisline_show -> bool
    是否显示坐标轴线，默认为 True  
- area_opacity -> float
    填充区域透明度  
- area_color -> str
    填充区域颜色  

**Note：** 可配置 **lineStyle** 参数

In [ ]:

```
from pyecharts import Polar

import random
data_1 = [(10, random.randint(1, 100)) for i in range(300)]
data_2 = [(11, random.randint(1, 100)) for i in range(300)]
polar = Polar("极坐标系-散点图示例", width=900, height=600,
             jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

polar.add("", data_1, type='scatter')
polar.add("", data_2, type='scatter')
polar.render()
polar
```

In [ ]:

```
from pyecharts import Polar

import random
data = [(i, random.randint(1, 100)) for i in range(10)]
polar = Polar("极坐标系-动态散点图示例", width=900, height=600,
             jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

polar.add("", data, type='effectScatter', effect_scale=10, effect_period=5)
polar.render()
polar
```

In [ ]:

```
from pyecharts import Polar

radius = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
polar = Polar("极坐标系-堆叠柱状图示例", width=900, height=600,
             jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 
# *jshost="https://cdn.kesci.com/nbextensions/echarts"*
polar.add("A", [1, 2, 3, 4, 3, 5, 1], radius_data=radius, type='barRadius', is_stack=True)
polar.add("B", [2, 4, 6, 1, 2, 3, 1], radius_data=radius, type='barRadius', is_stack=True)
polar.add("C", [1, 2, 3, 4, 1, 2, 5], radius_data=radius, type='barRadius', is_stack=True)
polar.render()
polar
```

In [ ]:

```
from pyecharts import Polar

radius = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
polar = Polar("极坐标系-堆叠柱状图示例", width=900, height=600,
             jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

polar.add("", [1, 2, 3, 4, 3, 5, 1], radius_data=radius, type='barAngle', is_stack=True)
polar.add("", [2, 4, 6, 1, 2, 3, 1], radius_data=radius, type='barAngle', is_stack=True)
polar.add("", [1, 2, 3, 4, 1, 2, 5], radius_data=radius, type='barAngle', is_stack=True)
polar.render()
polar
```

[返回目录](#目录)

## Radar/雷达图[¶](#Radar/雷达图)

> 雷达图主要用于表现多变量的数据。

Radar.add() 方法签名

```
add(name, value,  
    item_color=None, **kwargs)
```

- name -> list
    图例名称  
- value -> [list], 包含列表的列表
    数据项。数据中，每一行是一个『数据项』，每一列属于一个『维度』  
- item_color -> str
    指定单图例颜色  

Radar.config() 方法签名

```
config(schema=None,  
    c_schema=None,  
    shape="",  
    rader_text_color="#000", **kwargs):
```

- schema -> list
    默认雷达图的指示器，用来指定雷达图中的多个维度，会对数据处理成 {name:xx, value:xx} 的字典  

- c_schema -> dict

    用户自定义雷达图的指示器，用来指定雷达图中的多个维度  

  - name: 指示器名称  
  - min: 指示器最小值  
  - max: 指示器最大值  

- shape -> str
    雷达图绘制类型，有'polygon'（多边形）和'circle'可选  

- rader_text_color -> str
    雷达图数据项字体颜色，默认为'#000'  

- radar_text_size -> int
    雷达图m数据项字体大小，默认为 12  

In [ ]:

```
from pyecharts import Radar

schema = [ 
    ("销售", 6500), ("管理", 16000), ("信息技术", 30000),
    ("客服", 38000), ("研发", 52000), ("市场", 25000)
]
v1 = [[4300, 10000, 28000, 35000, 50000, 19000]]
v2 = [[5000, 14000, 28000, 31000, 42000, 21000]]
radar = Radar(jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 

# radar.config(schema)
radar.add("预算分配", v1, is_splitline=True, is_axisline_show=True)
radar.add("实际开销", v2, label_color=["#4e79a7"], is_area_show=False,
          legend_selectedmode='single')
radar.render()
radar
```

- is_area_show -> bool
    是否显示填充区域  
- area_opacity -> float
    填充区域透明度  
- area_color -> str
    填充区域颜色  
- is_splitline_show  -> bool
    是否显示分割线，默认为 True  
- is_axisline_show -> bool
    是否显示坐标轴线，默认为 True  

**Note：** 可配置 **lineStyle** 参数

In [ ]:

```
value_bj = [
    [55, 9, 56, 0.46, 18, 6, 1], [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3], [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5], [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7], [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9], [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11], [41, 11, 40, 0.43, 21, 7, 12],
    [64, 38, 74, 1.04, 46, 22, 13], [108, 79, 120, 1.7, 75, 41, 14],
    [108, 63, 116, 1.48, 44, 26, 15], [33, 6, 29, 0.34, 13, 5, 16],
    [94, 66, 110, 1.54, 62, 31, 17], [186, 142, 192, 3.88, 93, 79, 18],
    [57, 31, 54, 0.96, 32, 14, 19], [22, 8, 17, 0.48, 23, 10, 20],
    [39, 15, 36, 0.61, 29, 13, 21], [94, 69, 114, 2.08, 73, 39, 22],
    [99, 73, 110, 2.43, 76, 48, 23], [31, 12, 30, 0.5, 32, 16, 24],
    [42, 27, 43, 1, 53, 22, 25], [154, 117, 157, 3.05, 92, 58, 26],
    [234, 185, 230, 4.09, 123, 69, 27],[160, 120, 186, 2.77, 91, 50, 28],
    [134, 96, 165, 2.76, 83, 41, 29], [52, 24, 60, 1.03, 50, 21, 30],
]
value_sh = [
    [91, 45, 125, 0.82, 34, 23, 1], [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3], [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5], [109, 81, 121, 1.28, 68, 51, 6],
    [106, 77, 114, 1.07, 55, 51, 7], [89, 65, 78, 0.86, 51, 26, 8],
    [53, 33, 47, 0.64, 50, 17, 9], [80, 55, 80, 1.01, 75, 24, 10],
    [117, 81, 124, 1.03, 45, 24, 11], [99, 71, 142, 1.1, 62, 42, 12],
    [95, 69, 130, 1.28, 74, 50, 13], [116, 87, 131, 1.47, 84, 40, 14],
    [108, 80, 121, 1.3, 85, 37, 15], [134, 83, 167, 1.16, 57, 43, 16],
    [79, 43, 107, 1.05, 59, 37, 17], [71, 46, 89, 0.86, 64, 25, 18],
    [97, 71, 113, 1.17, 88, 31, 19], [84, 57, 91, 0.85, 55, 31, 20],
    [87, 63, 101, 0.9, 56, 41, 21], [104, 77, 119, 1.09, 73, 48, 22],
    [87, 62, 100, 1, 72, 28, 23], [168, 128, 172, 1.49, 97, 56, 24],
    [65, 45, 51, 0.74, 39, 17, 25], [39, 24, 38, 0.61, 47, 17, 26],
    [39, 24, 39, 0.59, 50, 19, 27], [93, 68, 96, 1.05, 79, 29, 28],
    [188, 143, 197, 1.66, 99, 51, 29], [174, 131, 174, 1.55, 108, 50, 30],
]
c_schema= [{"name": "AQI", "max": 300, "min": 5},
           {"name": "PM2.5", "max": 250, "min": 20},
           {"name": "PM10", "max": 300, "min": 5},
           {"name": "CO", "max": 5},
           {"name": "NO2", "max": 200},
           {"name": "SO2", "max": 100}]
radar = Radar(jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 
radar.config(c_schema=c_schema, shape='circle')
radar.add("北京", value_bj, item_color="#f9713c", symbol=None)
radar.add("上海", value_sh, item_color="#b3e4a1", symbol=None, legend_selectedmode='signle')
radar.render()
radar
```

**Note：** symblo=None 可隐藏标记图形（小圆圈）

图例多例模式。

In [ ]:

```
radar = Radar(jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 
# *jshost="https://cdn.kesci.com/nbextensions/echarts"*
radar.config(c_schema=c_schema, shape='circle')
radar.add("北京", value_bj, item_color="#f9713c", symbol=None)
radar.add("上海", value_sh, item_color="#b3e4a1", symbol=None)
radar.render()
radar
```

[返回目录](#目录)

## Sankey/桑基图[¶](#Sankey/桑基图)

> 桑基图是一种特殊的流图, 它主要用来表示原材料、能量等如何从初始形式经过中间过程的加工、转化到达最终形式。

Sankey.add() 方法签名

```
add(name, nodes, links,  
    sankey_node_width=20,  
    sankey_node_gap=8, **kwargs)
```

- name -> str
     图例名称  

- nodes -> list

    桑基图结点，必须包含的数据项有：  

  - name：数据项名称  
  - value：数据项数值  

- links -> list

    桑基图结点关系  

  - source：边的源节点名称（必须有！）  
  - target：边的目标节点名称（必须有！）  
  - value：边的数值，决定边的宽度。  
    - sankey_node_width -> int
      图中每个矩形节点的宽度。默认为 20  
    - sankey_node_gap -> int
      图中每一列任意两个矩形节点之间的间隔。默认为 8  

In [ ]:

```
from pyecharts import Sankey

nodes = [
    {'name': 'category1'}, {'name': 'category2'}, {'name': 'category3'},
    {'name': 'category4'}, {'name': 'category5'}, {'name': 'category6'},
]

links = [
    {'source': 'category1', 'target': 'category2', 'value': 10},
    {'source': 'category2', 'target': 'category3', 'value': 15},
    {'source': 'category3', 'target': 'category4', 'value': 20},
    {'source': 'category5', 'target': 'category6', 'value': 25}
]
sankey = Sankey("桑基图示例", width=1000, height=600,
               jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数, 
# *jshost="https://cdn.kesci.com/nbextensions/echarts"*
sankey.add("sankey", nodes, links, line_opacity=0.2,
           line_curve=0.5, line_color='source', is_label_show=True, label_pos='right')
sankey.render()
sankey
```

[返回目录](#目录)

## Scatter/散点图[¶](#Scatter/散点图)

> 直角坐标系上的散点图可以用来展现数据的 x，y 之间的关系，如果数据项有多个维度，可以用颜色来表现，利用 geo 组件。

Scatter.add() 方法签名

```
add(name, x_axis, y_axis,  
    extra_data=None,  
    symbol_size=10, **kwargs)
```

- name -> str
    图例名称  
- x_axis -> list
    x 坐标轴数据  
- y_axis -> list
    y 坐标轴数据  
- extra_data -> int
    第三维度数据，x 轴为第一个维度，y 轴为第二个维度。（可在 visualmap 中将视图元素映射到第三维度）  
- symbol_size -> int
    标记图形大小，默认为 10  

In [ ]:

```
from pyecharts import Scatter

v1 = [10, 20, 30, 40, 50, 60]
v2 = [10, 20, 30, 40, 50, 60]
scatter = Scatter("散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
scatter.add("A", v1, v2)
scatter.add("B", v1[::-1], v2)
scatter.render()
scatter
```

利用 Visualmap 组件，通过颜色映射数值。

In [ ]:

```
scatter = Scatter("散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
scatter.add("A", v1, v2)
scatter.add("B", v1[::-1], v2, is_visualmap=True)
scatter.render()
scatter
```

利用 Visualmap 组件，通过图形点大小映射数值。

In [ ]:

```
scatter = Scatter("散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
scatter.add("A", v1, v2)
scatter.add("B", v1[::-1], v2, is_visualmap=True, visual_type='size', visual_range_size=[20, 80])
scatter.render()
scatter
```

利用 Visualmap 组件映射到第三维度数据

In [ ]:

```
data = [
        [28604, 77, 17096869],
        [31163, 77.4, 27662440],
        [1516, 68, 1154605773],
        [13670, 74.7, 10582082],
        [28599, 75, 4986705],
        [29476, 77.1, 56943299],
        [31476, 75.4, 78958237],
        [28666, 78.1, 254830],
        [1777, 57.7, 870601776],
        [29550, 79.1, 122249285],
        [2076, 67.9, 20194354],
        [12087, 72, 42972254],
        [24021, 75.4, 3397534],
        [43296, 76.8, 4240375],
        [10088, 70.8, 38195258],
        [19349, 69.6, 147568552],
        [10670, 67.3, 53994605],
        [26424, 75.7, 57110117],
        [37062, 75.4, 252847810]
    ]

x_lst = [v[0] for v in data]
y_lst = [v[1] for v in data]
extra_data = [v[2] for v in data]
sc = Scatter(jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
sc.add("scatter", x_lst, y_lst, extra_data=extra_data, is_visualmap=True,
        visual_dimension=2, visual_orient='horizontal',
        visual_type='size', visual_range=[254830, 1154605773],
        visual_text_color='#000')
sc.render()
sc
```

**Note：** 请配合 [通用配置项](https://github.com/chenjiandongx/pyecharts/blob/master/docs/zh-cn/documentation.md#通用配置项) 中的 Visualmap 使用

散点图默认的坐标轴都为数值轴，如果想实现横坐标为类目轴，可通过 `xaxis_type` 修改

In [ ]:

```
scatter = Scatter("散点图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
scatter.add("A", ["a", "b", "c", "d", "e", "f"], v2)
scatter.add("B", ["a", "b", "c", "d", "e", "f"], v1[::-1], xaxis_type="category")
scatter.render()
scatter
```

[返回目录](#目录)

## ThemeRiver/主题河流图[¶](#ThemeRiver/主题河流图)

> 主题河流图是一种特殊的流图, 它主要用来表示事件或主题等在一段时间内的变化。
> ThemeRiver.add() 方法签名
>
> ```
> add(name, data)
> ```
>
> - name -> list
>     图例名称，必须为 list 类型，list 中每个值为数据项中的种类。  
> - data -> [list], 包含列表的列表
>     数据项，数据中，每一行是一个『数据项』，每一列属于一个『维度』。每个数据项至少需要三个维度，如 ['2015/11/08', 10, 'DQ']，分别为 [时间，数值，种类（图例名）]  

In [ ]:

```
from pyecharts import ThemeRiver

data = [
    ['2015/11/08', 10, 'DQ'], ['2015/11/09', 15, 'DQ'], ['2015/11/10', 35, 'DQ'],
    ['2015/11/14', 7, 'DQ'], ['2015/11/15', 2, 'DQ'], ['2015/11/16', 17, 'DQ'],
    ['2015/11/17', 33, 'DQ'], ['2015/11/18', 40, 'DQ'], ['2015/11/19', 32, 'DQ'],
    ['2015/11/20', 26, 'DQ'], ['2015/11/21', 35, 'DQ'], ['2015/11/22', 40, 'DQ'],
    ['2015/11/23', 32, 'DQ'], ['2015/11/24', 26, 'DQ'], ['2015/11/25', 22, 'DQ'],
    ['2015/11/08', 35, 'TY'], ['2015/11/09', 36, 'TY'], ['2015/11/10', 37, 'TY'],
    ['2015/11/11', 22, 'TY'], ['2015/11/12', 24, 'TY'], ['2015/11/13', 26, 'TY'],
    ['2015/11/14', 34, 'TY'], ['2015/11/15', 21, 'TY'], ['2015/11/16', 18, 'TY'],
    ['2015/11/17', 45, 'TY'], ['2015/11/18', 32, 'TY'], ['2015/11/19', 35, 'TY'],
    ['2015/11/20', 30, 'TY'], ['2015/11/21', 28, 'TY'], ['2015/11/22', 27, 'TY'],
    ['2015/11/23', 26, 'TY'], ['2015/11/24', 15, 'TY'], ['2015/11/25', 30, 'TY'],
    ['2015/11/26', 35, 'TY'], ['2015/11/27', 42, 'TY'], ['2015/11/28', 42, 'TY'],
    ['2015/11/08', 21, 'SS'], ['2015/11/09', 25, 'SS'], ['2015/11/10', 27, 'SS'],
    ['2015/11/11', 23, 'SS'], ['2015/11/12', 24, 'SS'], ['2015/11/13', 21, 'SS'],
    ['2015/11/14', 35, 'SS'], ['2015/11/15', 39, 'SS'], ['2015/11/16', 40, 'SS'],
    ['2015/11/17', 36, 'SS'], ['2015/11/18', 33, 'SS'], ['2015/11/19', 43, 'SS'],
    ['2015/11/20', 40, 'SS'], ['2015/11/21', 34, 'SS'], ['2015/11/22', 28, 'SS'],
    ['2015/11/14', 7, 'QG'], ['2015/11/15', 2, 'QG'], ['2015/11/16', 17, 'QG'],
    ['2015/11/17', 33, 'QG'], ['2015/11/18', 40, 'QG'], ['2015/11/19', 32, 'QG'],
    ['2015/11/20', 26, 'QG'], ['2015/11/21', 35, 'QG'], ['2015/11/22', 40, 'QG'],
    ['2015/11/23', 32, 'QG'], ['2015/11/24', 26, 'QG'], ['2015/11/25', 22, 'QG'],
    ['2015/11/26', 16, 'QG'], ['2015/11/27', 22, 'QG'], ['2015/11/28', 10, 'QG'],
    ['2015/11/08', 10, 'SY'], ['2015/11/09', 15, 'SY'], ['2015/11/10', 35, 'SY'],
    ['2015/11/11', 38, 'SY'], ['2015/11/12', 22, 'SY'], ['2015/11/13', 16, 'SY'],
    ['2015/11/14', 7, 'SY'], ['2015/11/15', 2, 'SY'], ['2015/11/16', 17, 'SY'],
    ['2015/11/17', 33, 'SY'], ['2015/11/18', 40, 'SY'], ['2015/11/19', 32, 'SY'],
    ['2015/11/20', 26, 'SY'], ['2015/11/21', 35, 'SY'], ['2015/11/22', 4, 'SY'],
    ['2015/11/23', 32, 'SY'], ['2015/11/24', 26, 'SY'], ['2015/11/25', 22, 'SY'],
    ['2015/11/26', 16, 'SY'], ['2015/11/27', 22, 'SY'], ['2015/11/28', 10, 'SY'],
    ['2015/11/08', 10, 'DD'], ['2015/11/09', 15, 'DD'], ['2015/11/10', 35, 'DD'],
    ['2015/11/11', 38, 'DD'], ['2015/11/12', 22, 'DD'], ['2015/11/13', 16, 'DD'],
    ['2015/11/14', 7, 'DD'], ['2015/11/15', 2, 'DD'], ['2015/11/16', 17, 'DD'],
    ['2015/11/17', 33, 'DD'], ['2015/11/18', 4, 'DD'], ['2015/11/19', 32, 'DD'],
    ['2015/11/20', 26, 'DD'], ['2015/11/21', 35, 'DD'], ['2015/11/22', 40, 'DD'],
    ['2015/11/23', 32, 'DD'], ['2015/11/24', 26, 'DD'], ['2015/11/25', 22, 'DD']
]
tr = ThemeRiver("主题河流图示例图",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
tr.add(['DQ', 'TY', 'SS', 'QG', 'SY', 'DD'], data, is_label_show=True)
tr.render()
tr
```

**Note：** 可以看到，每个数据项中的第三个数值就是该项的种类，而种类可以在 `add()` 第一个参数指定。

[返回目录](#目录)

# 用户自定义[¶](#用户自定义)

## Grid：并行显示多张图[¶](#Grid：并行显示多张图)

> 用户可以自定义结合 Line/Bar/Kline/Scatter/EffectScatter/Pie/HeatMap/Boxplot 图表，将不同类型图表画在多张图上。第一个图需为 有 x/y 轴的图，即不能为 Pie，其他位置顺序任意。

Grid 类的使用：

1. 引入 `Grid` 类，`from pyecharts import Grid`  
2. 实例化 Grid 类，`grid = Grid()` ，可指定 `page_title`, `width`, `height`, `jhost` 参数。  
3. 使用 `add()` 向 `grid` 中添加图，至少需要设置一个 `grid_top`, `grid_bottom`, `grid_left`, `grid_right` 四个参数中的一个。`grid_width` 和 `grid_height` 一般不用设置，默认即可。  
4. 使用 `render()` 渲染生成 .html 文件  

**Note：** `Overlap` 可类放入 `Grid` 类中，不过有个前提，`Overlap` 不可为多 x 轴或者多 y 轴，否则会出现坐标轴索引混乱问题

Grid 类中其他方法：

- `render_embed()`：在 Flask&Django 中可以使用该方法渲染  
- `show_config()`：打印输出所有配置项  
- `chart`：chart 属性返回图形实例  
- 在 Jupyter-notebook 中直接调用 Grid 实例即可显示图表  

Grid.add() 方法签名

```
add(chart,  
    grid_width=None,  
    grid_height=None,  
    grid_top=None,  
    grid_bottom=None,  
    grid_left=None,  
    grid_right=None)
```

- chart -> chart instance
    图表实例  
- grid_width -> str/int
    grid 组件的宽度。默认自适应。  
- grid_height -> str/int
    grid 组件的高度。默认自适应。  
- grid_top -> str/int
    grid 组件离容器顶部的距离。默认为 None, 有'top', 'center', 'middle'可选，也可以为百分数或者整数  
- grid_bottom -> str/int
    grid 组件离容器底部的距离。默认为 None, 有'top', 'center', 'middle'可选，也可以为百分数或者整数  
- grid_left -> str/int
    grid 组件离容器左侧的距离。默认为 None, 有'left', 'center', 'right'可选，也可以为百分数或者整数  
- grid_right -> str/int
    grid 组件离容器右侧的距离。默认为 None, 有'left', 'center', 'right'可选，也可以为百分数或者整数  

上下类型，Bar + Line

In [ ]:

```
from pyecharts import Bar, Line, Grid

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("柱状图示例", height=720,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数

bar.add("商家A", attr, v1, is_stack=True)
bar.add("商家B", attr, v2, is_stack=True)
line = Line("折线图示例", title_top="50%")
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0], mark_point=["max", "min"],
         mark_line=["average"], legend_top="50%")

grid = Grid()
grid.add(bar, grid_bottom="60%")
grid.add(line, grid_top="60%")
grid.render()
grid
```

左右类型，Scatter + EffectScatter

In [ ]:

```
from pyecharts import Scatter, EffectScatter, Grid

v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
scatter = Scatter(width=1000,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
scatter.add("散点图示例", v1, v2, legend_pos="70%")
es = EffectScatter()
es.add("动态散点图示例", [11, 11, 15, 13, 12, 13, 10], [1, -2, 2, 5, 3, 2, 0],
           effect_scale=6, legend_pos="20%")

grid = Grid()
grid.add(scatter, grid_left="60%")
grid.add(es, grid_right="60%")
grid.render()
grid
```

上下左右类型，Bar + Line + Scatter + EffectScatter

In [ ]:

```
from pyecharts import Bar, Line, Scatter, EffectScatter, Grid  

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("柱状图示例", height=600, width=1000, title_pos="65%",
          jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar.add("商家A", attr, v1, is_stack=True)
bar.add("商家B", attr, v2, is_stack=True, legend_pos="80%")
line = Line("折线图示例")
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0], mark_point=["max", "min"],
         mark_line=["average"], legend_pos="20%")
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
scatter = Scatter("散点图示例", title_top="50%", title_pos="65%")
scatter.add("scatter", v1, v2, legend_top="50%", legend_pos="80%")
es = EffectScatter("动态散点图示例", title_top="50%")
es.add("es", [11, 11, 15, 13, 12, 13, 10], [1, -2, 2, 5, 3, 2, 0], effect_scale=6,
        legend_top="50%", legend_pos="20%")

grid = Grid()
grid.add(bar, grid_bottom="60%", grid_left="60%")
grid.add(line, grid_bottom="60%", grid_right="60%")
grid.add(scatter, grid_top="60%", grid_left="60%")
grid.add(es, grid_top="60%", grid_right="60%")
grid.render()
grid
```

Line +  Pie

In [ ]:

```
from pyecharts import Line, Pie, Grid

line = Line("折线图示例", width=1000,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10], mark_point=["max", "min"],
         mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0], mark_point=["max", "min"],
         mark_line=["average"], legend_pos="20%")
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [11, 12, 13, 10, 10, 10]
pie = Pie("饼图示例", title_pos="55%")
pie.add("", attr, v1, radius=[45, 65], center=[65, 50], legend_pos="80%",
        legend_orient='vertical')

grid = Grid()
grid.add(line, grid_right="55%")
grid.add(pie, grid_left="60%")
grid.render()
grid
```

**Note：** 可以通过设置 center 参数改变 Pie 图的位置，如 [v1, v2]， 要求 v1 > v2。

Line + Kline

In [ ]:

```
from pyecharts import Line, Kline, Grid

line = Line("折线图示例", width=1000,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0], mark_point=["max", "min"],
         mark_line=["average"], legend_pos="20%")
v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
      [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2345.92],
      [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.75, 2382.48, 2347.89, 2383.76],
      [2383.43, 2385.42, 2371.23, 2391.82],
      [2377.41, 2419.02, 2369.57, 2421.15],
      [2425.92, 2428.15, 2417.58, 2440.38],
      [2411, 2433.13, 2403.3, 2437.42],
      [2432.68, 2334.48, 2427.7, 2441.73],
      [2430.69, 2418.53, 2394.22, 2433.89],
      [2416.62, 2432.4, 2414.4, 2443.03],
      [2441.91, 2421.56, 2418.43, 2444.8],
      [2420.26, 2382.91, 2373.53, 2427.07],
      [2383.49, 2397.18, 2370.61, 2397.94],
      [2378.82, 2325.95, 2309.17, 2378.82],
      [2322.94, 2314.16, 2308.76, 2330.88],
      [2320.62, 2325.82, 2315.01, 2338.78],
      [2313.74, 2293.34, 2289.89, 2340.71],
      [2297.77, 2313.22, 2292.03, 2324.63],
      [2322.32, 2365.59, 2308.92, 2366.16],
      [2364.54, 2359.51, 2330.86, 2369.65],
      [2332.08, 2273.4, 2259.25, 2333.54],
      [2274.81, 2326.31, 2270.1, 2328.14],
      [2333.61, 2347.18, 2321.6, 2351.44],
      [2340.44, 2324.29, 2304.27, 2352.02],
      [2326.42, 2318.61, 2314.59, 2333.67],
      [2314.68, 2310.59, 2296.58, 2320.96],
      [2309.16, 2286.6, 2264.83, 2333.29],
      [2282.17, 2263.97, 2253.25, 2286.33],
      [2255.77, 2270.28, 2253.31, 2276.22]]
kline = Kline("K 线图示例", title_pos="60%")
kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1, legend_pos="80%")

grid = Grid()
grid.add(line, grid_right="60%")
grid.add(kline, grid_left="55%")
grid.render()
grid
```

HeatMap + Bar

In [ ]:

```
import random
from pyecharts import HeatMap
x_axis = ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a",
          "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]
y_axis = ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]
data = [[i, j, random.randint(0, 50)] for i in range(24) for j in range(7)]
heatmap = HeatMap("热力图示例", height=700,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
heatmap.add("热力图直角坐标系", x_axis, y_axis, data, is_visualmap=True, visual_top="45%",
            visual_text_color="#000", visual_orient='horizontal')
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("柱状图示例", title_top="52%")
bar.add("商家A", attr, v1, is_stack=True)
bar.add("商家B", attr, v2, is_stack=True, legend_top="50%")

grid = Grid()
grid.add(heatmap, grid_bottom="60%")
grid.add(bar, grid_top="60%")
grid.render()
grid
```

Bar 会受 HeatMap 影响，很有趣。

datazoom 组件同时控制多个图

In [ ]:

```
line = Line("折线图示例", width=1000, height=700,
            jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0], mark_point=["max", "min"], legend_top="50%",
         mark_line=["average"], is_datazoom_show=True, datazoom_xaxis_index=[0, 1])

v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
      [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2345.92],
      [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.75, 2382.48, 2347.89, 2383.76],
      [2383.43, 2385.42, 2371.23, 2391.82],
      [2377.41, 2419.02, 2369.57, 2421.15],
      [2425.92, 2428.15, 2417.58, 2440.38],
      [2411, 2433.13, 2403.3, 2437.42],
      [2432.68, 2334.48, 2427.7, 2441.73],
      [2430.69, 2418.53, 2394.22, 2433.89],
      [2416.62, 2432.4, 2414.4, 2443.03],
      [2441.91, 2421.56, 2418.43, 2444.8],
      [2420.26, 2382.91, 2373.53, 2427.07],
      [2383.49, 2397.18, 2370.61, 2397.94],
      [2378.82, 2325.95, 2309.17, 2378.82],
      [2322.94, 2314.16, 2308.76, 2330.88],
      [2320.62, 2325.82, 2315.01, 2338.78],
      [2313.74, 2293.34, 2289.89, 2340.71],
      [2297.77, 2313.22, 2292.03, 2324.63],
      [2322.32, 2365.59, 2308.92, 2366.16],
      [2364.54, 2359.51, 2330.86, 2369.65],
      [2332.08, 2273.4, 2259.25, 2333.54],
      [2274.81, 2326.31, 2270.1, 2328.14],
      [2333.61, 2347.18, 2321.6, 2351.44],
      [2340.44, 2324.29, 2304.27, 2352.02],
      [2326.42, 2318.61, 2314.59, 2333.67],
      [2314.68, 2310.59, 2296.58, 2320.96],
      [2309.16, 2286.6, 2264.83, 2333.29],
      [2282.17, 2263.97, 2253.25, 2286.33],
      [2255.77, 2270.28, 2253.31, 2276.22]]
kline = Kline("K 线图示例", title_top="50%")
kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1, is_datazoom_show=True)

grid = Grid()
grid.add(line, grid_top="60%")
grid.add(kline, grid_bottom="60%")
grid.render()
grid
```

倒映直角坐标系

In [ ]:

```
import random

attr = ['{}天'.format(i) for i in range(1, 31)]
line_top = Line("折线图示例", width=1000, height=700,
                jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
line_top.add("最高气温", attr, [random.randint(20, 100) for i in range(30)],
             mark_point=["max", "min"], mark_line=["average"], legend_pos='38%')
line_bottom = Line()
line_bottom.add("最低气温", attr, [random.randint(20, 100) for i in range(30)],
                mark_point=["max", "min"], mark_line=["average"],
                is_yaxis_inverse=True, xaxis_pos='top')

grid = Grid()
grid.add(line_top, grid_bottom='60%')
grid.add(line_bottom, grid_top='50%')
grid.render()
grid
```

Grid+Overlap

```
from pyecharts import Overlap, Bar, Line, Grid  

grid = Grid()  

attr = ["{}月".format(i) for i in range(1, 13)]  
v1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]  
v2 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]  
v3 = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]  

bar = Bar(width=1200, height=600, title="Overlap+Grid 示例", title_pos="40%",  
         jshost="https://cdn.kesci.com/nbextensions/echarts")  
bar.add("蒸发量", attr, v1)  
bar.add("降水量", attr, v2, yaxis_formatter=" ml", yaxis_max=250,  
        legend_pos="85%", legend_orient="vertical", legend_top="45%")  
line = Line()  
line.add("平均温度", attr, v3, yaxis_formatter=" °C")  
overlap = Overlap()  
overlap.add(bar)  
overlap.add(line, is_add_yaxis=True, yaxis_index=1)  

# grid.add(overlap, grid_right='20%')  
grid.add(overlap)  
grid.render()  
grid
```

**Note：** `Overlap` 放入 `Grid` 可以利用其 grid 网格调整布局，例如上图将图例放在右边，这种情况在**图例名字过长**时很有用。

[返回目录](#目录)

## Overlap：结合不同类型图表叠加画在同张图上[¶](#Overlap：结合不同类型图表叠加画在同张图上)

> 用户可以自定义结合 Line/Bar/Kline, Scatter/EffectScatter 图表，将不同类型图表画在一张图上。利用第一个图表为基础，往后的数据都将会画在第一个图表上。
> Overlap 类的使用：
>
> 1. 引入 `Overlap` 类，`from pyecharts import Overlap`  
> 2. 实例化 `Overlap` 类，`overlap = Overlap()`  ，可指定 `page_title`, `width`, `height`, `jhost` 参数。  
> 3. 使用 `add()` 向 `overlap` 中添加图  
> 4. 使用 `render()` 渲染生成 .html 文件  

Overlap.add() 方法签名

```
add(chart,  
    xaxis_index=0,  
    yaxis_index=0,  
    is_add_xaxis=False,  
    is_add_yaxis=False)
```

- chart -> chart instance
    图表示例  
- xaxis_index -> int
    x 坐标轴索引，默认为 0  
- yaxis_index -> int
    y 坐标轴索引，默认为 0  
- is_add_xaxis -> bool
    是否新增一个 x 坐标轴，默认为 False  
- is_add_yaxis -> bool
    是否新增一个 y 坐标轴，默认为 False  

Overlap 类中其他方法：

- `render_embed()`：在 Flask&Django 中可以使用该方法渲染  
- `show_config()`：打印输出所有配置项  
- `chart`：返回图形实例  
- 在 Jupyter-notebook 中直接调用 Overlap 实例即可显示图表  

Line + Bar

In [ ]:

```
from pyecharts import Bar, Line, Overlap

attr = ['A', 'B', 'C', 'D', 'E', 'F']
v1 = [10, 20, 30, 40, 50, 60]
v2 = [38, 28, 58, 48, 78, 68]
bar = Bar("Line - Bar 示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar.add("bar", attr, v1)
line = Line()
line.add("line", attr, v2)

overlap = Overlap()
overlap.add(bar)
overlap.add(line)
overlap.render()
overlap
```

Scatter + EffectScatter

In [ ]:

```
from pyecharts import Scatter, EffectScatter, Overlap

v1 = [10, 20, 30, 40, 50, 60]
v2 = [30, 30, 30, 30, 30, 30]
v3 = [50, 50, 50, 50, 50, 50]
v4 = [10, 10, 10, 10, 10, 10]
es = EffectScatter("Scatter - EffectScatter 示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
es.add("es", v1, v2)
scatter = Scatter()
scatter.add("scatter", v1, v3)
es_1 = EffectScatter()
es_1.add("es_1", v1, v4, symbol='pin', effect_scale=5)

overlap = Overlap()
overlap.add(es)
overlap.add(scatter)
overlap.add(es_1)
overlap.render()
overlap
```

Kline + Line

In [ ]:

```
import random
from pyecharts import Line, Kline, Overlap

v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
      [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2345.92],
      [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.75, 2382.48, 2347.89, 2383.76],
      [2383.43, 2385.42, 2371.23, 2391.82],
      [2377.41, 2419.02, 2369.57, 2421.15],
      [2425.92, 2428.15, 2417.58, 2440.38],
      [2411, 2433.13, 2403.3, 2437.42],
      [2432.68, 2334.48, 2427.7, 2441.73],
      [2430.69, 2418.53, 2394.22, 2433.89],
      [2416.62, 2432.4, 2414.4, 2443.03],
      [2441.91, 2421.56, 2418.43, 2444.8],
      [2420.26, 2382.91, 2373.53, 2427.07],
      [2383.49, 2397.18, 2370.61, 2397.94],
      [2378.82, 2325.95, 2309.17, 2378.82],
      [2322.94, 2314.16, 2308.76, 2330.88],
      [2320.62, 2325.82, 2315.01, 2338.78],
      [2313.74, 2293.34, 2289.89, 2340.71],
      [2297.77, 2313.22, 2292.03, 2324.63],
      [2322.32, 2365.59, 2308.92, 2366.16],
      [2364.54, 2359.51, 2330.86, 2369.65],
      [2332.08, 2273.4, 2259.25, 2333.54],
      [2274.81, 2326.31, 2270.1, 2328.14],
      [2333.61, 2347.18, 2321.6, 2351.44],
      [2340.44, 2324.29, 2304.27, 2352.02],
      [2326.42, 2318.61, 2314.59, 2333.67],
      [2314.68, 2310.59, 2296.58, 2320.96],
      [2309.16, 2286.6, 2264.83, 2333.29],
      [2282.17, 2263.97, 2253.25, 2286.33],
      [2255.77, 2270.28, 2253.31, 2276.22]]
attr = ["2017/7/{}".format(i + 1) for i in range(31)]
kline = Kline("Kline - Line 示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
kline.add("日K", attr, v1)
line_1 = Line()
line_1.add("line-1", attr, [random.randint(2400, 2500) for _ in range(31)])
line_2 = Line()
line_2.add("line-2", attr, [random.randint(2400, 2500) for _ in range(31)])

overlap = Overlap()
overlap.add(kline)
overlap.add(line_1)
overlap.add(line_2)
overlap.render()
overlap
```

Line + EffectScatter

In [ ]:

```
from pyecharts import Line, EffectScatter, Overlap

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 10, 100]
line = Line("line - es 示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
line.add("", attr, v1, is_random=True)
es = EffectScatter()
es.add("", attr, v1, effect_scale=8)

overlap = Overlap()
overlap.add(line)
overlap.add(es)
overlap.render()
overlap
```

如果想改变轴索引，使其有多 X 轴或者多 Y 轴的话。请看下面

In [ ]:

```
from pyecharts import Line, Bar, Overlap

attr = ["{}月".format(i) for i in range(1, 13)]
v1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
v2 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
v3 = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

bar = Bar(width=1000, height=600,jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar.add("蒸发量", attr, v1)
bar.add("降水量", attr, v2, yaxis_formatter=" ml", yaxis_interval=50, yaxis_max=250)

line = Line()
line.add("平均温度", attr, v3, yaxis_formatter=" °C", yaxis_interval=5)

overlap = Overlap()
# 默认不新增 x y 轴，并且 x y 轴的索引都为 0
overlap.add(bar)
# 新增一个 y 轴，此时 y 轴的数量为 2，第二个 y 轴的索引为 1（索引从 0 开始），所以设置 yaxis_index = 1
# 由于使用的是同一个 x 轴，所以 x 轴部分不用做出改变
overlap.add(line, yaxis_index=1, is_add_yaxis=True)
overlap.render()
overlap
```

**Note：** 关于双 Y 轴对齐，可以使用 `yaxis_force_interval` 参数，强制分割成相同份数的刻度。这里有个小技巧，可以先设置 y 轴最大值。举个例子，如果双 y 轴一个最大值为 700，一个最大值为 400。那你可以把两个的 `yaxis_force_interval` 参数分别设置为 140 和 80，那就会都分成均等的 5 份了。

如果只是想在单个 .html 按顺序展示图表，推荐使用 `Page()` 类

[返回目录](#目录)

## Page：同一网页按顺序展示多图[¶](#Page：同一网页按顺序展示多图)

> Grid/Timeline/Overlap 都可在 Page 中正常展示，把其当做一个图加入到 Page 中即可

Page 类的使用：

1. 引入 `Page` 类，`from pyecharts import Page`  
2. 实例化 `Page` 类，`page = Page()`  ，可指定 `page_title`, `jhost` 参数。  
3. 使用 `add()` 向 `page` 中添加图，可以是单个图实例，也可以是一个图实例列表。  
4. 使用 `render()` 渲染生成 .html 文件  

Page 类中其他方法：

- `render_embed()`：在 Flask&Django 中可以使用该方法渲染  
- `show_config()`：打印输出所有配置项  
- `chart`：chart 属性返回图形实例  
- 在 Jupyter-notebook 中直接调用 Page 实例即可显示图表  

In [ ]:

```
#coding=utf-8
from __future__ import unicode_literals

from pyecharts import Bar, Scatter3D
from pyecharts import Page


page = Page()         # step 1

# bar
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [5, 20, 36, 10, 75, 90]
v2 = [10, 25, 8, 60, 20, 80]
bar = Bar("柱状图数据堆叠示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar.add("商家A", attr, v1, is_stack=True)
bar.add("商家B", attr, v2, is_stack=True)
page.add(bar)         # step 2

# scatter3D
import random
data = [
    [random.randint(0, 100),
    random.randint(0, 100),
    random.randint(0, 100)] for _ in range(80)
]
range_color = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
               '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
scatter3D = Scatter3D("3D 散点图示例", width=1000, height=600)
scatter3D.add("", data, is_visualmap=True, visual_range_color=range_color)
page.add(scatter3D)  # step 2

page.render()        # step 3
page
```

运行之后，你会发现 render.html 已经按顺序显示了两个图:

当然，更多图也是可以的

In [ ]:

```
#coding=utf-8
from __future__ import unicode_literals

from pyecharts import Line, Pie, Kline, Radar
from pyecharts import Page


page = Page()

# line
attr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
line = Line("折线图示例",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
line.add("最高气温", attr, [11, 11, 15, 13, 12, 13, 10],
         mark_point=["max", "min"], mark_line=["average"])
line.add("最低气温", attr, [1, -2, 2, 5, 3, 2, 0],
         mark_point=["max", "min"], mark_line=["average"])
page.add(line)

# pie
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
v1 = [11, 12, 13, 10, 10, 10]
pie = Pie("饼图-圆环图示例", title_pos='center')
pie.add("", attr, v1, radius=[40, 75], label_text_color=None, is_label_show=True,
        legend_orient='vertical', legend_pos='left')
page.add(pie)

# kline
v1 = [[2320.26, 2320.26, 2287.3, 2362.94],
      [2300, 2291.3, 2288.26, 2308.38],
      [2295.35, 2346.5, 2295.35, 2345.92],
      [2347.22, 2358.98, 2337.35, 2363.8],
      [2360.75, 2382.48, 2347.89, 2383.76],
      [2383.43, 2385.42, 2371.23, 2391.82],
      [2377.41, 2419.02, 2369.57, 2421.15],
      [2425.92, 2428.15, 2417.58, 2440.38],
      [2411, 2433.13, 2403.3, 2437.42],
      [2432.68, 2334.48, 2427.7, 2441.73],
      [2430.69, 2418.53, 2394.22, 2433.89],
      [2416.62, 2432.4, 2414.4, 2443.03],
      [2441.91, 2421.56, 2418.43, 2444.8],
      [2420.26, 2382.91, 2373.53, 2427.07],
      [2383.49, 2397.18, 2370.61, 2397.94],
      [2378.82, 2325.95, 2309.17, 2378.82],
      [2322.94, 2314.16, 2308.76, 2330.88],
      [2320.62, 2325.82, 2315.01, 2338.78],
      [2313.74, 2293.34, 2289.89, 2340.71],
      [2297.77, 2313.22, 2292.03, 2324.63],
      [2322.32, 2365.59, 2308.92, 2366.16],
      [2364.54, 2359.51, 2330.86, 2369.65],
      [2332.08, 2273.4, 2259.25, 2333.54],
      [2274.81, 2326.31, 2270.1, 2328.14],
      [2333.61, 2347.18, 2321.6, 2351.44],
      [2340.44, 2324.29, 2304.27, 2352.02],
      [2326.42, 2318.61, 2314.59, 2333.67],
      [2314.68, 2310.59, 2296.58, 2320.96],
      [2309.16, 2286.6, 2264.83, 2333.29],
      [2282.17, 2263.97, 2253.25, 2286.33],
      [2255.77, 2270.28, 2253.31, 2276.22]]
kline = Kline("K 线图示例")
kline.add("日K", ["2017/7/{}".format(i + 1) for i in range(31)], v1)
page.add(kline)

# radar
schema = [
    ("销售", 6500), ("管理", 16000), ("信息技术", 30000),
    ("客服", 38000), ("研发", 52000), ("市场", 25000)
]
v1 = [[4300, 10000, 28000, 35000, 50000, 19000]]
v2 = [[5000, 14000, 28000, 31000, 42000, 21000]]
radar = Radar("雷达图示例")
radar.config(schema)
radar.add("预算分配", v1, is_splitline=True, is_axisline_show=True)
radar.add("实际开销", v2, label_color=["#4e79a7"], is_area_show=False,
          legend_selectedmode='single')
page.add(radar)

page.render()
page
```

[返回目录](#目录)

## Timeline：提供时间线轮播多张图[¶](#Timeline：提供时间线轮播多张图)

Timeline 类的使用：

1. 引入 `Timeline` 类，`from pyecharts import Timeline`  
2. 实例化 `Timeline` 类  
3. 使用 `add()` 向 `timeline` 中添加图。如 `add(bar, '2013')` 接受两个参数，第一个为图实例，第二个为时间线的 ”时间点“。  
4. 使用 `render()` 渲染生成 .html 文件  

实例化 Timeline 类时接受设置参数：

- page_title -> str
    生成 html 文件的 `<title>` 标签的值，默认为'Echarts'  
- width -> int
    画布宽度，默认为 800  
- height -> int
    画布高度，默认为 400  
- jhost -> str
    自定义每个实例的 JavaScript host  
- is_auto_play -> bool
    是否自动播放，默认为 Flase  
- is_loop_play -> bool
    是否循环播放，默认为 True  
- is_rewind_play -> bool
    是否方向播放，默认为 Flase  
- is_timeline_show -> bool
    是否显示 timeline 组件。默认为 True，如果设置为false，不会显示，但是功能还存在。  
- timeline_play_interval -> int
    播放的速度（跳动的间隔），单位毫秒（ms）。  
- timeline_symbol -> str
    标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'  
- timeline_symbol_size -> int/list
    标记的图形大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为 20，高为 10。  
- timeline_left -> int/str
    timeline 组件离容器左侧的距离。
    left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。  
- timeline_right -> int/str
    timeline 组件离容器右侧的距离。同 left  
- timeline_top -> int/str
    timeline 组件离容器顶侧的距离。同 left  
- timeline_bottom -> int/str
    timeline 组件离容器底侧的距离。同 left  

Timeline 类中其他方法：

- `render_embed()`：在 Flask&Django 中可以使用该方法渲染  
- `show_config()`：打印输出所有配置项  
- `chart`：chart 属性返回图形实例  
- Timeline 在 Jupyter-notebook 中显示有问题（无法正常显示动画）  

In [ ]:

```
from pyecharts import Bar, Timeline
from random import randint

attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
bar_1 = Bar("2012 年销量", "数据纯属虚构",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar_1.add("春季", attr, [randint(10, 100) for _ in range(6)])
bar_1.add("夏季", attr, [randint(10, 100) for _ in range(6)])
bar_1.add("秋季", attr, [randint(10, 100) for _ in range(6)])
bar_1.add("冬季", attr, [randint(10, 100) for _ in range(6)])

bar_2 = Bar("2013 年销量", "数据纯属虚构")
bar_2.add("春季", attr, [randint(10, 100) for _ in range(6)])
bar_2.add("夏季", attr, [randint(10, 100) for _ in range(6)])
bar_2.add("秋季", attr, [randint(10, 100) for _ in range(6)])
bar_2.add("冬季", attr, [randint(10, 100) for _ in range(6)])

bar_3 = Bar("2014 年销量", "数据纯属虚构")
bar_3.add("春季", attr, [randint(10, 100) for _ in range(6)])
bar_3.add("夏季", attr, [randint(10, 100) for _ in range(6)])
bar_3.add("秋季", attr, [randint(10, 100) for _ in range(6)])
bar_3.add("冬季", attr, [randint(10, 100) for _ in range(6)])

bar_4 = Bar("2015 年销量", "数据纯属虚构")
bar_4.add("春季", attr, [randint(10, 100) for _ in range(6)])
bar_4.add("夏季", attr, [randint(10, 100) for _ in range(6)])
bar_4.add("秋季", attr, [randint(10, 100) for _ in range(6)])
bar_4.add("冬季", attr, [randint(10, 100) for _ in range(6)])

bar_5 = Bar("2016 年销量", "数据纯属虚构")
bar_5.add("春季", attr, [randint(10, 100) for _ in range(6)])
bar_5.add("夏季", attr, [randint(10, 100) for _ in range(6)])
bar_5.add("秋季", attr, [randint(10, 100) for _ in range(6)])
bar_5.add("冬季", attr, [randint(10, 100) for _ in range(6)], is_legend_show=True)

timeline = Timeline(is_auto_play=True, timeline_bottom=0)
timeline.add(bar_1, '2012 年')
timeline.add(bar_2, '2013 年')
timeline.add(bar_3, '2014 年')
timeline.add(bar_4, '2015 年')
timeline.add(bar_5, '2016 年')
timeline.render()
timeline
```

In [ ]:

```
from pyecharts import Pie, Timeline
from random import randint
attr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
pie_1 = Pie("2012 年销量比例", "数据纯属虚构",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
pie_1.add("秋季", attr, [randint(10, 100) for _ in range(6)],
          is_label_show=True, radius=[30, 55], rosetype='radius')

pie_2 = Pie("2013 年销量比例", "数据纯属虚构")
pie_2.add("秋季", attr, [randint(10, 100) for _ in range(6)],
          is_label_show=True, radius=[30, 55], rosetype='radius')

pie_3 = Pie("2014 年销量比例", "数据纯属虚构")
pie_3.add("秋季", attr, [randint(10, 100) for _ in range(6)],
          is_label_show=True, radius=[30, 55], rosetype='radius')

pie_4 = Pie("2015 年销量比例", "数据纯属虚构")
pie_4.add("秋季", attr, [randint(10, 100) for _ in range(6)],
          is_label_show=True, radius=[30, 55], rosetype='radius')

pie_5 = Pie("2016 年销量比例", "数据纯属虚构")
pie_5.add("秋季", attr, [randint(10, 100) for _ in range(6)],
          is_label_show=True, radius=[30, 55], rosetype='radius')

timeline = Timeline(is_auto_play=True, timeline_bottom=0)
timeline.add(pie_1, '2012 年')
timeline.add(pie_2, '2013 年')
timeline.add(pie_3, '2014 年')
timeline.add(pie_4, '2015 年')
timeline.add(pie_5, '2016 年')
timeline.render()
timeline
```

In [ ]:

```
from pyecharts import Bar, Line, Timeline, Overlap

attr = ["{}月".format(i) for i in range(1, 7)]
bar = Bar("1 月份数据", "数据纯属虚构",jshost="https://cdn.kesci.com/nbextensions/echarts")
# **提醒**一下，pyecharts的渲染基于JavaScript，在线上运行的时候需要在```function```中传入```jshost```参数
bar.add("bar", attr, [randint(10, 50) for _ in range(6)])
line = Line()
line.add("line", attr, [randint(50, 80) for _ in range(6)])
overlap = Overlap()
overlap.add(bar)
overlap.add(line)

bar_1 = Bar("2 月份数据", "数据纯属虚构")
bar_1.add("bar", attr, [randint(10, 50) for _ in range(6)])
line_1 = Line()
line_1.add("line", attr, [randint(50, 80) for _ in range(6)])
overlap_1 = Overlap()
overlap_1.add(bar_1)
overlap_1.add(line_1)

bar_2 = Bar("3 月份数据", "数据纯属虚构")
bar_2.add("bar", attr, [randint(10, 50) for _ in range(6)])
line_2 = Line()
line_2.add("line", attr, [randint(50, 80) for _ in range(6)])
overlap_2 = Overlap()
overlap_2.add(bar_2)
overlap_2.add(line_2)

bar_3 = Bar("4 月份数据", "数据纯属虚构")
bar_3.add("bar", attr, [randint(10, 50) for _ in range(6)])
line_3 = Line()
line_3.add("line", attr, [randint(50, 80) for _ in range(6)])
overlap_3 = Overlap()
overlap_3.add(bar_3)
overlap_3.add(line_3)

bar_4 = Bar("5 月份数据", "数据纯属虚构")
bar_4.add("bar", attr, [randint(10, 50) for _ in range(6)])
line_4 = Line()
line_4.add("line", attr, [randint(50, 80) for _ in range(6)])
overlap_4 = Overlap()
overlap_4.add(bar_4)
overlap_4.add(line_4)

timeline = Timeline(timeline_bottom=0)
timeline.add(overlap, '1 月')
timeline.add(overlap_1, '2 月')
timeline.add(overlap_2, '3 月')
timeline.add(overlap_3, '4 月')
timeline.add(overlap_4, '5 月')
timeline.render()
timeline
```

## Bar3D（3D 柱状图）[¶](#Bar3D（3D-柱状图）)

In [ ]:

```
from pyecharts import Bar3D
bar3d = Bar3D("3D 柱状图示例", width=1200, height=600,jshost="https://cdn.kesci.com/nbextensions/echarts")
x_axis = ["12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a",
          "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]
y_axis = ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]
data = [
    [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
    [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2],
    [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6],
    [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5],
    [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0],
    [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2],
    [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7],
    [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2],
    [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0],
    [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2],
    [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5],
    [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4],
    [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0],
    [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4],
    [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5],
    [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1],
    [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1],
    [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4],
    [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1],
    [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0],
    [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0],
    [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1],
    [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6],
    [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0],
    [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0],
    [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0],
    [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0],
    [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
    ]
range_color = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
               '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
bar3d.add("", x_axis, y_axis, [[d[1], d[0], d[2]] for d in data], is_visualmap=True,
          visual_range=[0, 20], visual_range_color=range_color, grid3d_width=200, grid3d_depth=80)
bar3d
```

In [ ]:

```
from pyecharts import Bar3D

bar3d = Bar3D("3D 柱状图示例", width=1200, height=600)
x_axis = [
    "12a", "1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a",
    "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"]
y_axis = [
    "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"]
data = [
    [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
    [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2],
    [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6],
    [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5],
    [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0],
    [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2],
    [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7],
    [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2],
    [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0],
    [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2],
    [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5],
    [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4],
    [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0],
    [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4],
    [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5],
    [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1],
    [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1],
    [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4],
    [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1],
    [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0],
    [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0],
    [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1],
    [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6],
    [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0],
    [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0],
    [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0],
    [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0],
    [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
    ]
range_color = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf',
               '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
bar3d.add("", x_axis, y_axis, [[d[1], d[0], d[2]] for d in data],
          is_visualmap=True, visual_range=[0, 20],
          visual_range_color=range_color, grid3d_width=200, grid3d_depth=80)
```

[返回目录](#目录)