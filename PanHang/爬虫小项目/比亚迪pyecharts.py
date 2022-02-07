import pandas as pd
import numpy as np
from pyecharts.charts import Grid, Line, Bar, EffectScatter, Kline
from pyecharts import options as opts
from pyecharts.commons.utils import JsCode
import talib as ta

df = pd.read_csv(
    r'F:\Python练习\股票\比亚迪.csv',
    parse_dates=['trade_date'],
    index_col='trade_date'
)[['open', 'high', 'low', 'close', 'vol']].sort_index()

df['MA20'] = df.close.rolling(window=20).mean()
df.dropna(how='any', axis=0, inplace=True)
# print(df.head())

# 准备K线数据
oclh = df[['open', 'close', 'low', 'high']].values.round(2).tolist()
# ohlc = list(zip(df.open, df.high, df.low, df.close))
# print(oclh)
# 准备x轴数据
v0 = list(df.index.strftime('%Y-%m-%d'))  # 日期索引设置格式后要转化成列表才能作为x轴展示
# print(v0)
# 准备vol数据
vol = df['vol'].values.tolist()
volume_rise = [df.vol[x] if df.close[x] > df.open[x] else np.nan for x in
               range(0, len(df.index))]
volume_drop = [df.vol[x] if df.close[x] <= df.open[x] else "0" for x in
               range(0, len(df.index))]

# 准备MA5数据
df['MA5'] = df.close.round(2).rolling(window=5).mean()
MA5 = df['MA5'].values.round(2).tolist()

# 准备MA34数据
df['MA34'] = df.close.round(2).rolling(window=34).mean()
MA34 = df['MA34'].values.round(2).tolist()
# 准备MA170数据
df['MA170'] = df.close.round(2).rolling(window=170).mean()
# MA170 = df['MA170'].values.round(2).tolist()
MA170 = ta.MA(df.close, timeperiod=170, matype=0).round(2)

# 准备MACD
dw = pd.DataFrame()
dw['DIF'], dw['DEA'], dw['MACD'] = ta.MACD(df['close'], fastperiod=5, slowperiod=23, signalperiod=8)
dw['MACD'] = dw['MACD'].apply(lambda x: float(x)*2)
macd = dw['MACD'].values.round(2).tolist()
dif = dw['DIF'].values.round(2).tolist()
dea = dw['DEA'].values.round(2).tolist()


kline = (
    Kline(init_opts=opts.InitOpts(width='1800px', height='900px'))  # 初始化选项设置图形大小
        .add_xaxis(v0)
        .add_yaxis(
        series_name="",  # 鼠标移动到K线显示的文字，不输入文字不会显示图例
        y_axis=oclh,
        markpoint_opts=opts.MarkPointOpts(  # 标记点设置
            data=[
                opts.MarkPointItem(type_='max', name='最大值', value_dim='highest'),  # 显示范围内K线最高价的最大值
                opts.MarkPointItem(type_='min', name='最小值', value_dim='lowest')  # 显示范围内K线最低价的最小值
            ],
            # label_opts=opts.LabelOpts(color='#ec0000')
        ),
        itemstyle_opts=opts.ItemStyleOpts(  # 设置K线格式
            color="#ec0000",  # 阳线颜色 ec0000
            color0="#00da3c",  # 阴线颜色
            border_color="#8A0000",  # 阳线描边颜色 8A0000
            border_color0="#008F28",  # 阴线描边颜色
            # border_width=1.5
        )
    )
        .set_global_opts(  # 设置全局配置
        xaxis_opts=opts.AxisOpts(is_scale=False),  # x轴选项，是否刻意包含0刻度
        yaxis_opts=opts.AxisOpts(  # y轴选项
            is_scale=True,
            splitarea_opts=opts.SplitAreaOpts(  # 色带分隔y轴区域，看到白灰相间的图案
                is_show=True, areastyle_opts=opts.AreaStyleOpts(opacity=5)  # 显示色带，并且设置透明度
            ),
        ),
        datazoom_opts=[  # 设置缩放
            opts.DataZoomOpts(type_='slider', range_start=95, range_end=100, xaxis_index=[0, 1, 2]),  # 显示滑动条。xaxis_index代表可同步缩放的x轴，0是K线图，1是柱状图
            opts.DataZoomOpts(type_='inside', range_start=95, range_end=100),  # 支持鼠标左键拖拽和滚轮缩放
        ],
        title_opts=opts.TitleOpts(title="比亚迪K线图"),  # 设置图表的标题
        tooltip_opts=opts.TooltipOpts(  # 设置提示组件框
            trigger='axis',  # 鼠标沿着x轴移动的时候自动跳出K线的提示框
            axis_pointer_type='cross',  # 鼠标移动时显示十字架和y轴值
            # background_color="rgba(245, 245, 245, 0.8)",  # 设置提示框的背景颜色
            border_width=1,  # 提示框的边框阴影宽度
            border_color="#ccc",  # 提示框的边框阴影颜色
            # textstyle_opts=opts.TextStyleOpts(color="#000"),  # 设置提示框的字体
            position=['15%', '8%']
        ),
        # visualmap_opts=opts.VisualMapOpts(  # 视觉映射配置
        #     is_show=True,
        #     dimension=2,
        #     series_index=5,
        #     is_piecewise=True,
        #     pieces=[
        #         {"value": 1, "color": "#00da3c"},
        #         {"value": -1, "color": "#ec0000"},
        #     ],
        # ),
        axispointer_opts=opts.AxisPointerOpts(
            is_show=True,
            # link=[{"xAxisIndex": "all"}],  # 十字游标所有图统一
            label=opts.LabelOpts(background_color="#777"),
        ),
        legend_opts=opts.LegendOpts(is_show=True)
    )
)

ma5 = (
    Line()
        .add_xaxis(v0)
        .add_yaxis(
        'MA5',
        y_axis=MA5,
        is_smooth=False,
        linestyle_opts=opts.LineStyleOpts(opacity=0.5, width=3, type_='solid', color='#ff8d1e'),
        label_opts=opts.LabelOpts(is_show=False),
        is_symbol_show=False # 不显示圆点
    )
)

ma34 = (
    Line()
        .add_xaxis(v0)
        .add_yaxis(
        'MA34',
        y_axis=MA34,
        is_smooth=False,
        linestyle_opts=opts.LineStyleOpts(opacity=0.5, width=3, color='#0caee6'),
        label_opts=opts.LabelOpts(is_show=False),
        is_symbol_show=False
    )
)

ma170 = (
    Line()
        .add_xaxis(v0)
        .add_yaxis(
        'MA170',
        y_axis=MA170,
        is_smooth=False,
        linestyle_opts=opts.LineStyleOpts(opacity=0.5, width=3, type_='solid', color='#e970dc'),
        label_opts=opts.LabelOpts(is_show=False),
        is_symbol_show=False
    )
)

# print(type(oclh))
overlap_Kline_MA = kline.overlap(ma5).overlap(ma34).overlap(ma170)

# bar_vol = (
#     Bar()
#         .add_xaxis(xaxis_data=v0)
#         .add_yaxis('rvolume', volume_rise)
#         .add_yaxis('dvolume', volume_drop)
#         .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
#         .set_global_opts(
#         xaxis_opts=opts.AxisOpts(
#             type_='category',
#             grid_index=1,
#             axislabel_opts=opts.LabelOpts(is_show=False)
#         ),
#         # datazoom_opts=[opts.DataZoomOpts(xaxis_index=[0, 1], is_show=True)],
#         legend_opts=opts.LegendOpts(is_show=False)
#     )
# )

bar_vol = (
    Bar()
        .add_xaxis(xaxis_data=v0)
        .add_yaxis(
        series_name="Volume",
        y_axis=vol,
        xaxis_index=1,
        yaxis_index=1,
        label_opts=opts.LabelOpts(is_show=False),
        itemstyle_opts=opts.ItemStyleOpts(
            color=JsCode(
                """
            function(params) {
                var colorList;
                if (barData[params.dataIndex][1] > barData[params.dataIndex][0]) {
                    colorList = '#14b143';
                } else {
                    colorList = '#ef232a';
                }
                return colorList;
            }
            """
            )
        )
    )
        .set_global_opts(
        xaxis_opts=opts.AxisOpts(
            type_="category",   # 设置成类目轴，用于离散数据
            is_scale=True,
            grid_index=1,
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=False),
            axistick_opts=opts.AxisTickOpts(is_show=False),
            splitline_opts=opts.SplitLineOpts(is_show=False),
            axislabel_opts=opts.LabelOpts(is_show=False),
            split_number=20,
            min_="dataMin",
            max_="dataMax",
        ),
        yaxis_opts=opts.AxisOpts(
            grid_index=1,
            is_scale=True,
            split_number=2, # y轴分隔区间，总共会显示2n+1个数字
            axislabel_opts=opts.LabelOpts(is_show=False),    # y轴刻度标签
            axisline_opts=opts.AxisLineOpts(is_show=False),     # y轴刻度横线
            axistick_opts=opts.AxisTickOpts(is_show=False),
            splitline_opts=opts.SplitLineOpts(is_show=False),
        ),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

bar_macd = (
    Bar()
        .add_xaxis(xaxis_data=v0)
        .add_yaxis(
        series_name="MACD",
        y_axis=macd,
        xaxis_index=1,
        yaxis_index=1,
        label_opts=opts.LabelOpts(is_show=False),
        itemstyle_opts=opts.ItemStyleOpts(
            color=JsCode(
                """
            function(params) {
                var colorList;
                if (params.data > 0) {
                    colorList = '#ef232a';
                } else {
                    colorList = '#14b143';
                }
                return colorList;
            }
            """
            )
        )
    )
        .set_global_opts(
        xaxis_opts=opts.AxisOpts(
            type_="category",   # 设置成类目轴，用于离散数据
            is_scale=True,
            grid_index=1,
            boundary_gap=False,
            axisline_opts=opts.AxisLineOpts(is_on_zero=False),
            axistick_opts=opts.AxisTickOpts(is_show=False),
            splitline_opts=opts.SplitLineOpts(is_show=False),
            axislabel_opts=opts.LabelOpts(is_show=False),
            split_number=20,
            min_="dataMin",
            max_="dataMax",
        ),
        yaxis_opts=opts.AxisOpts(
            grid_index=1,
            is_scale=True,
            split_number=2, # y轴分隔区间，总共会显示2n+1个数字
            axislabel_opts=opts.LabelOpts(is_show=False),    # y轴刻度标签
            axisline_opts=opts.AxisLineOpts(is_show=False),     # y轴刻度横线
            axistick_opts=opts.AxisTickOpts(is_show=False),
            splitline_opts=opts.SplitLineOpts(is_show=False),
        ),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

line_dif_dea = (
    Line()
    .add_xaxis(xaxis_data=v0)
    .add_yaxis(
        series_name='DIF',
        y_axis=dif,
        label_opts=opts.LabelOpts(is_show=False),
        is_smooth=False,
        is_symbol_show=False,
        linestyle_opts=opts.LineStyleOpts(opacity=0.5, width=3, type_='solid', color='#ff8d1e')
    )
    .add_yaxis(
        series_name='DEA',
        y_axis=dea,
        label_opts=opts.LabelOpts(is_show=False),
        is_smooth=False,
        is_symbol_show=False,
        linestyle_opts=opts.LineStyleOpts(opacity=0.5, width=3, type_='solid', color='#0caee6')
    )
    .set_global_opts(
        legend_opts=opts.LegendOpts(is_show=False)
    )
)
overlap_macd = bar_macd.overlap(line_dif_dea)

grid_chart = Grid(init_opts=opts.InitOpts(width="1400px", height="900px"))

grid_chart.add_js_funcs("var barData = {}".format(oclh))    # 加这句话才能在柱状图判断颜色

grid_chart.add(
    overlap_Kline_MA,
    grid_opts=opts.GridOpts(
        pos_left="3%", pos_right="1%", pos_top="11%", height="60%"
    )
)
grid_chart.add(
    bar_vol,
    grid_opts=opts.GridOpts(
        pos_left="3%", pos_right="1%", pos_top="71%", height="10%"
    )
)
grid_chart.add(
    overlap_macd,
    grid_opts=opts.GridOpts(
        pos_left="3%", pos_right="1%", pos_top="81%", height="20%"
    )
)

grid_chart.render("BYD.html")
