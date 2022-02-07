首发于[远辰](http://www.zhihu.com/column/c_1224300037469204480)

写文章

![B站up主视频质量分析——以科技区为例](https://pic1.zhimg.com/v2-40d562b2d41d27cb4aaf736851cff536_1440w.jpg?source=172ae18b)

# B站up主视频质量分析——以科技区为例

[![远辰](https://pic4.zhimg.com/v2-c90826233ee97366941cb7797258f02b_xs.jpg?source=172ae18b)](http://www.zhihu.com/people/ji-yi-51-20)

[远辰](http://www.zhihu.com/people/ji-yi-51-20)

读书/猫奴/健身/学习

11 人赞同了该文章



## 一、项目概览

- **分析背景**

近来B站入驻了越来越多的科普视频的up主，如半佛仙人、罗翔老师等。半佛凭借着核心逻辑+关键细节+大量流行梗+海量表情包+磁性的嗓音（？），频繁抓住了B站用户的痛点，使半佛一跃成为了顶级流量的up主。而半佛在B站的走红，标志着科普内容从文字时代进入视频时代。公众号、知乎、微博等文字媒体上有着大量优秀创作者和优质文章，半佛等人走红的榜样作用将会促使越来越多的文字创作者进入视频创作领域。而B站在之前是有着科普基础，也从来不缺少硬核up主。但早期的B站尚未出圈，科普向的内容还在相对小的圈子内，并没被大众所熟知。

- **分析目的**

在RFM模型的基础上建立针对哔哩哔哩视频质量分析的IFL模型，从数据角度挖掘出高质量的UP主。

- **数据来源**

分析数据基于 bilibili 网站上的公开信息，主要采集了以下数据维度：

2019年1月~2020年3月，科技区播放量过5w视频的**分区名称、作者名称、作者id、发布时间、播放数、硬币数、弹幕数、收藏数、点赞数、分享数、评论数，**一共50130行。

- **源数据下载链接**

链接：[https://pan.baidu.com/s/1W6yDtzpfPbKhGBmKOm1fqA](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1W6yDtzpfPbKhGBmKOm1fqA) 

提取码：qig3



## 二、数据概览

**视频信息表：**

<img src="https://pic2.zhimg.com/v2-5fe67d5b19b797d784b44211678ab049_b.jpg" data-caption="" data-size="normal" data-rawwidth="1140" data-rawheight="340" class="origin_image zh-lightbox-thumb" width="1140" data-original="https://pic2.zhimg.com/v2-5fe67d5b19b797d784b44211678ab049_r.jpg"/>

coins：投硬币数

danmu：弹幕数

favorite：收藏数

likes：点赞数

replay：评论数

share：分享数

view：播放量



**各字段数量：**

<img src="https://pic4.zhimg.com/v2-e1170705137429d2b8700f8e21f53533_b.jpg" data-caption="" data-size="normal" data-rawwidth="395" data-rawheight="387" class="content_image" width="395"/>

**缺失值数量：**

<img src="https://pic3.zhimg.com/v2-7932309a558eb10847928468679a2b5e_b.jpg" data-caption="" data-size="normal" data-rawwidth="304" data-rawheight="283" class="content_image" width="304"/>

## 三、数据清洗

- 删除空值

```text
df = df.dropna()
df.info()
```

共删除了19行数据，剩余50111行数据

<img src="https://pic3.zhimg.com/v2-aedbe6cd590c23cf491b30fe040deca6_b.jpg" data-caption="" data-size="normal" data-rawwidth="294" data-rawheight="292" class="content_image" width="294"/>

- 删除重复值

```text
df = df.drop_duplicates()
df.info()
```

删除了1312行重复的数据，剩余数据量48799行

<img src="https://pic1.zhimg.com/v2-20ae650a375aad7123676fbd204338a8_b.jpg" data-caption="" data-size="normal" data-rawwidth="301" data-rawheight="300" class="content_image" width="301"/>

- 提取所需关键词

```text
df = df[['分区', 'author','date','coins','danmu','favorite','likes','replay','share','view']]
df.head()
```

<img src="https://pic3.zhimg.com/v2-613f0a42ccae6c68e0d751b91d65dfaa_b.jpg" data-caption="" data-size="normal" data-rawwidth="694" data-rawheight="173" class="origin_image zh-lightbox-thumb" width="694" data-original="https://pic3.zhimg.com/v2-613f0a42ccae6c68e0d751b91d65dfaa_r.jpg"/>





## 四、构建模型

RFM模型是衡量客户价值和创利能力的重要工具和手段。通过一个客户近期购买行为、购买的总体频率以及消费金额三项指标来描述客户的价值状况。

R：最近一次消费时间（最近一次消费到参考时间的间隔）

F：消费的频率(消费了多少次）

M：消费的金额 （总消费金额）



但RFM模型并不能评价视频的质量，所以在这里针对up主的视频信息构建了IFL模型，以评估视频的质量。

- I(Interaction_rate)：

I值反映的是平均每个视频的互动率，互动率越高，表明其视频更能产生用户的共鸣，使其有话题感。

![[公式]](https://www.zhihu.com/equation?tex=I+%3D+%28%E6%80%BB%E5%BC%B9%E5%B9%95%E6%95%B0%2B%E6%80%BB%E8%AF%84%E8%AE%BA%E6%95%B0%29%2F%E6%80%BB%E6%92%AD%E6%94%BE%E9%87%8F%2F%E7%BB%9F%E8%AE%A1%E8%8C%83%E5%9B%B4%E5%86%85%E8%A7%86%E9%A2%91%E6%95%B0%E9%87%8F) 

- F(Frequence)：

F值表示的是每个视频的平均发布周期，每个视频之间的发布周期越短，说明内容生产者创作视频的时间也就越短，创作时间太长，不是忠实粉丝的用户可能将其遗忘。

![[公式]](https://www.zhihu.com/equation?tex=F%3D%5Cfrac%7B%E7%BB%9F%E8%AE%A1%E8%8C%83%E5%9B%B4%E5%86%85%E6%9C%80%E6%99%9A%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%E6%97%B6%E9%97%B4-%E6%9C%80%E6%97%A9%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%E6%97%B6%E9%97%B4%7D%7B%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%E7%9A%84%E6%95%B0%E9%87%8F%7D) 

- L(Like_rate)：

L值表示的是统计时间内发布视频的平均点赞率，越大表示视频质量越稳定，用户对up主的认可度也就越高。

![[公式]](https://www.zhihu.com/equation?tex=L%3D%5Cfrac%7B%E7%82%B9%E8%B5%9E%E6%95%B0%5Ctimes1%2B%E6%8A%95%E5%B8%81%E6%95%B0%5Ctimes2%2B%E6%94%B6%E8%97%8F%E6%95%B0%5Ctimes3%2B%E5%88%86%E4%BA%AB%E6%95%B0%5Ctimes4%7D%7B%E6%92%AD%E6%94%BE%E9%87%8F%7D%2F%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%E6%95%B0) 



**1、提取需要的信息**

根据不同的分区进行IFL打分，这里以科普区为例

```text
sc = df.loc[df['分区']=='科学科普']
so = df.loc[df['分区']=='社科人文']
ma = df.loc[df['分区']=='机械']
tec = df.loc[df['分区']=='野生技术协会']
mi = df.loc[df['分区']=='星海'] # 一般发布军事内容
car = df.loc[df['分区']=='汽车']
sc.info()
```

<img src="https://pic3.zhimg.com/v2-987bd5289dbdcca216ebbe79944a8d02_b.jpg" data-caption="" data-size="normal" data-rawwidth="302" data-rawheight="236" class="content_image" width="302"/>



**2、关键词构造**

- **F值**

首先，先筛选出发布视频大于5的up主，视频播放量在5W以上的视频数少于5，说明可能是有些视频标题取得好播放量才高，而不是视频质量稳定的up主。

```text
# 计算发布视频的次数
count = sc.groupby('author')['date'].count().reset_index() 
count.columns = ['author','times']
# 剔除掉发布视频少于5的up主
com_m = count[count['times']>5]
com_m.info()
```

<img src="https://pic2.zhimg.com/v2-865f35118a81c680fb01f3aba8c86901_b.jpg" data-caption="" data-size="normal" data-rawwidth="288" data-rawheight="115" class="content_image" width="288"/>

筛选完只剩下208个up主的视频数在5个以上。  

```text
last = sc.groupby('author')['date'].max()
late = sc.groupby('author')['date'].min()
# 最晚发布日期与最早之间的天数/发布次数，保留整数，用date重新命名列
F = round((last-late).dt.days/sc.groupby('author')['date'].count()).reset_index()
F.columns = ['author', 'F']
F = pd.merge(com_m, F,on='author', how='inner')
F.describe()
```

<img src="https://pic4.zhimg.com/v2-1524af73e899a0d1e968ee476a488097_b.jpg" data-caption="" data-size="normal" data-rawwidth="244" data-rawheight="232" class="content_image" width="244"/>

通过describe()方法发现，最晚发布日期与最早发布日期为0的现象，猜测是在同一天内发布了大量的视频。

```text
# 查找的一天内发布视频数大于5的人
F.loc[F['F'].idxmin()]
```

<img src="https://pic4.zhimg.com/v2-876c2a2ab51ff5ab278b7437a2a204a3_b.jpg" data-caption="" data-size="normal" data-rawwidth="266" data-rawheight="76" class="content_image" width="266"/>

<img src="https://pic4.zhimg.com/v2-7e890a278181ded6a38bc675cd43b3a7_b.jpg" data-caption="" data-size="normal" data-rawwidth="543" data-rawheight="186" class="origin_image zh-lightbox-thumb" width="543" data-original="https://pic4.zhimg.com/v2-7e890a278181ded6a38bc675cd43b3a7_r.jpg"/>

其视频皆为转载，将其剔除统计范围内。

```text
F = F.loc[F['F']>0]
F.describe()
```

<img src="https://pic3.zhimg.com/v2-63f69e9a74763acdfb61b2b2a52946e6_b.jpg" data-caption="" data-size="normal" data-rawwidth="259" data-rawheight="230" class="content_image" width="259"/>



- **I值**

```text
# 构建I值
danmu = sc.groupby('author')['danmu'].sum() # 总弹幕数
replay = sc.groupby('author')['replay'].sum() # 总评论数
view = sc.groupby('author')['view'].sum() # 总观看数
count = sc.groupby('author')['date'].count() # 发布视频总数
I = round((danmu+replay)/view/count*100,2).reset_index() # 保留两位小数
I.columns=['author','I']
F_I = pd.merge(F,I,on='author',how='inner')
F_I.head()
```

<img src="https://pic2.zhimg.com/v2-83c516869904ed2d299390f21d6f38ad_b.jpg" data-caption="" data-size="normal" data-rawwidth="300" data-rawheight="170" class="content_image" width="300"/>



- **L值**

```text
# 计算出所有视频的点赞率
sc['L'] = (sc['likes']+sc['coins']*2+sc['favorite']*3)/sc['view']*100
sc.head()
```

<img src="https://pic2.zhimg.com/v2-37e57b6f35eb8bf2b88ce4625281555d_b.jpg" data-caption="" data-size="normal" data-rawwidth="725" data-rawheight="250" class="origin_image zh-lightbox-thumb" width="725" data-original="https://pic2.zhimg.com/v2-37e57b6f35eb8bf2b88ce4625281555d_r.jpg"/>

```text
# 构建L值
L = round((sc.groupby('author')['L'].sum()/sc.groupby('author')['date'].count()).reset_index(),2)
L.columns = ['author', 'L']
IFL = pd.merge(F_I, L, on='author',how='inner')
IFL = IFL[['author', 'I','F','L']]
IFL.head()
```

<img src="https://pic3.zhimg.com/v2-fdbfc6e118e685d430195e5e2157630a_b.jpg" data-caption="" data-size="normal" data-rawwidth="337" data-rawheight="167" class="content_image" width="337"/>



**3、维度打分**

维度确认的核心是分值确定，按照设定的标准，我们给每个消费者的I/F/L值打分，分值的大小取决于我们的偏好，**即我们越喜欢的行为，打的分数就越高**：

- I值，I代表了up主视频的平均评论率，这个值越大，就说明其视频越能使用户有话题，当I值越大时，分值越大。
- F值表示视频的平均发布周期，我们当然想要经常看到，所以这个值越大时，分值越小。
- L值表示发布视频的平均点赞率，S值越大时，质量越稳定，分值也就越大。

I/S值根据四分位数打分，F值根据更新周期打分。

```text
IFL.describe()
```

<img src="https://pic4.zhimg.com/v2-26aeced15ad0df147c44cfbb9f7e5973_b.jpg" data-caption="" data-size="normal" data-rawwidth="365" data-rawheight="235" class="content_image" width="365"/>



I值打分：

<img src="https://pic3.zhimg.com/v2-347a863be5881b31cf218bf4c05691e6_b.jpg" data-caption="" data-size="normal" data-rawwidth="391" data-rawheight="133" class="content_image" width="391"/>

L值打分：

<img src="https://pic4.zhimg.com/v2-385074497fcb79f2c7aae8f6a970a89f_b.jpg" data-caption="" data-size="normal" data-rawwidth="399" data-rawheight="138" class="content_image" width="399"/>

F值根据发布周期打分：

<img src="https://pic1.zhimg.com/v2-021c25ac55bdbf026edea494346ddf9c_b.jpg" data-caption="" data-size="normal" data-rawwidth="390" data-rawheight="162" class="content_image" width="390"/>



**4、分值计算**

```text
# bins参数代表我们按照什么区间进行分组
# labels和bins切分的数组前后呼应,给每个分组打标签
# right表示了右侧区间是开还是闭，即包不包括右边的数值，如果设置成False，就代表[0,30)
IFL['I_SCORE'] = pd.cut(IFL['I'], bins=[0,0.03,0.06,0.11,1000], 
                        labels=[1,2,3,4], right=False).astype(float)

IFL['F_SCORE'] = pd.cut(IFL['F'], bins=[0,7,15,30,90,1000], 
                        labels=[5,4,3,2,1], right=False).astype(float)

IFL['L_SCORE'] = pd.cut(IFL['L'], bins=[0,5.39,9.07,15.58,1000], 
                        labels=[1,2,3,4], right=False).astype(float)
IFL.head()
```

<img src="https://pic1.zhimg.com/v2-b96ded14523c5bcd1cc7bdfe48a57114_b.jpg" data-caption="" data-size="normal" data-rawwidth="503" data-rawheight="163" class="origin_image zh-lightbox-thumb" width="503" data-original="https://pic1.zhimg.com/v2-b96ded14523c5bcd1cc7bdfe48a57114_r.jpg"/>

判断用户的分值是否大于平均值：

```text
# 1为大于均值 0为小于均值
IFL['I是否大于平均值'] = (IFL['I_SCORE'] > IFL['I_SCORE'].mean()) * 1
IFL['F是否大于平均值'] = (IFL['F_SCORE'] > IFL['F_SCORE'].mean()) * 1
IFL['L是否大于平均值'] = (IFL['L_SCORE'] > IFL['L_SCORE'].mean()) * 1
IFL.head()
```

<img src="https://pic4.zhimg.com/v2-78fc9a0fd2914a8572a6ca82402b06cb_b.jpg" data-caption="" data-size="normal" data-rawwidth="729" data-rawheight="197" class="origin_image zh-lightbox-thumb" width="729" data-original="https://pic4.zhimg.com/v2-78fc9a0fd2914a8572a6ca82402b06cb_r.jpg"/>



**5、客户分层**

RFM经典的分层会按照R/F/M每一项指标是否高于平均值，把用户划分为8类，我们根据根据案例中的情况进行划分，具体像下面表格这样：

<img src="https://pic1.zhimg.com/v2-e3b8be13575d97797560ee43aad1d588_b.jpg" data-caption="" data-size="normal" data-rawwidth="924" data-rawheight="318" class="origin_image zh-lightbox-thumb" width="924" data-original="https://pic1.zhimg.com/v2-e3b8be13575d97797560ee43aad1d588_r.jpg"/>

引入人群数值的辅助列，把之前判断的I\F\S是否大于均值的三个值串联起来：

```text
IFL['人群数值'] = (IFL['I是否大于平均值'] * 100) + (IFL['F是否大于平均值'] * 10) + (IFL['L是否大于平均值'] * 1)
IFL.head()
```

<img src="https://pic4.zhimg.com/v2-f8c3ac8faf07e54c85a224b3bc603743_b.jpg" data-caption="" data-size="normal" data-rawwidth="719" data-rawheight="196" class="origin_image zh-lightbox-thumb" width="719" data-original="https://pic4.zhimg.com/v2-f8c3ac8faf07e54c85a224b3bc603743_r.jpg"/>

构建判断函数，通过判断人群数值的值，来返回对应标签：

```text
# 基于指标给客户进行分类
def transform_label(x):
    if x == 111:
        label = '高价值up主'
    elif x == 101:
        label = '高价值拖更up主'
    elif x == 11:
        label = '高质量内容高深up主'
    elif x == 1:
        label = '高质量内容高深拖更up主'
    elif x == 110:
        label = '接地气活跃up主'
    elif x == 10:
        label = '活跃up主'
    elif x == 100:
        label = '接地气up主'
    elif x == 0:
        label = '还在成长的up主'
    return label
```



将标签分类函数应用到人群数值列：

```text
IFL['人群类型'] = IFL['人群数值'].apply(transform_label)
IFL.head()
```

<img src="https://pic1.zhimg.com/v2-9b8f12782107fbbc91a3bd54065f1760_b.jpg" data-caption="" data-size="normal" data-rawwidth="716" data-rawheight="297" class="origin_image zh-lightbox-thumb" width="716" data-original="https://pic1.zhimg.com/v2-9b8f12782107fbbc91a3bd54065f1760_r.jpg"/>



各类用户占比：

```text
cat = IFL['人群类型'].value_counts().reset_index()
cat['人数占比'] = round(cat['人群类型'] / cat['人群类型'].sum(),2)
cat
```

<img src="https://pic2.zhimg.com/v2-bd0686407607807f0836f3b772a0ace9_b.jpg" data-caption="" data-size="normal" data-rawwidth="357" data-rawheight="250" class="content_image" width="357"/>

<img src="https://pic1.zhimg.com/v2-31c251844e1cd202f711bec106a854fc_b.jpg" data-caption="" data-size="normal" data-rawwidth="699" data-rawheight="445" class="origin_image zh-lightbox-thumb" width="699" data-original="https://pic1.zhimg.com/v2-31c251844e1cd202f711bec106a854fc_r.jpg"/>





## **五、各分区高价值up主排行top15**

（1）科学科普分区

```text
high = IFL.loc[IFL['人群类型']=='高价值up主']
rank = high[['author','L','I','F']].sort_values('L',ascending=False)
rank.to_excel('科普区排行.xlsx', sheet_name='科学科普',encoding='utf-8')
```

<img src="https://pic1.zhimg.com/v2-39d016067ab554e4daf3eaf48baf5cfc_b.jpg" data-caption="" data-size="normal" data-rawwidth="578" data-rawheight="289" class="origin_image zh-lightbox-thumb" width="578" data-original="https://pic1.zhimg.com/v2-39d016067ab554e4daf3eaf48baf5cfc_r.jpg"/>



（2）社科人文分区

<img src="https://pic1.zhimg.com/v2-a5c39f2a27bc901d20de5cb581b363c8_b.jpg" data-caption="" data-size="normal" data-rawwidth="585" data-rawheight="289" class="origin_image zh-lightbox-thumb" width="585" data-original="https://pic1.zhimg.com/v2-a5c39f2a27bc901d20de5cb581b363c8_r.jpg"/>


 （3）机械分区

<img src="https://pic4.zhimg.com/v2-00ed399896b97672af2c265275ed1bbb_b.jpg" data-caption="" data-size="normal" data-rawwidth="559" data-rawheight="109" class="origin_image zh-lightbox-thumb" width="559" data-original="https://pic4.zhimg.com/v2-00ed399896b97672af2c265275ed1bbb_r.jpg"/>

机械分区高价值up主只有5位，因为机械分区在科技区是个小分区，发布视频的up主仅有54位。

<img src="https://pic4.zhimg.com/v2-3a078c907ca86a8b014365850e4cea03_b.jpg" data-caption="" data-size="normal" data-rawwidth="600" data-rawheight="508" class="origin_image zh-lightbox-thumb" width="600" data-original="https://pic4.zhimg.com/v2-3a078c907ca86a8b014365850e4cea03_r.jpg"/>



（4）野生技术协会分区

<img src="https://pic4.zhimg.com/v2-46d9666f11b9508dae3d3e95af53cbe7_b.jpg" data-caption="" data-size="normal" data-rawwidth="588" data-rawheight="289" class="origin_image zh-lightbox-thumb" width="588" data-original="https://pic4.zhimg.com/v2-46d9666f11b9508dae3d3e95af53cbe7_r.jpg"/>

（5）星海

<img src="https://pic1.zhimg.com/v2-70a977d8a7d82a172bb56e3f5d2a6874_b.jpg" data-caption="" data-size="normal" data-rawwidth="543" data-rawheight="289" class="origin_image zh-lightbox-thumb" width="543" data-original="https://pic1.zhimg.com/v2-70a977d8a7d82a172bb56e3f5d2a6874_r.jpg"/>



（6）汽车

<img src="https://pic1.zhimg.com/v2-60f6041ff63b6378e5386dc42cba909c_b.jpg" data-caption="" data-size="normal" data-rawwidth="521" data-rawheight="253" class="origin_image zh-lightbox-thumb" width="521" data-original="https://pic1.zhimg.com/v2-60f6041ff63b6378e5386dc42cba909c_r.jpg"/>



参考文章：

[不到70行Python代码，轻松玩转RFM用户分析模型（附案例数据和代码）mp.weixin.qq.com![图标](https://pic1.zhimg.com/v2-a900352a51dd49aae474983cee844498_180x120.jpg)](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzU5Mjg2OTQ1MA%3D%3D%26mid%3D2247484281%26idx%3D1%26sn%3D03706ac68d4ec2464c5bd04965e27896%26chksm%3Dfe18625cc96feb4af2301b0b1afd0a5ff678a60d06176c9f6d17c6e9a802ad1206b3cb82e448%26scene%3D21%23wechat_redirect)[Crossin：B站用户行为分析非官方报告zhuanlan.zhihu.com![图标](https://pic1.zhimg.com/v2-9e88c4a30f8d39cff595c91765b7e304_180x120.jpg)](https://zhuanlan.zhihu.com/p/93581509)[https://github.com/Vespa314/bilibili-api/blob/master/api.mdgithub.com](https://link.zhihu.com/?target=https%3A//github.com/Vespa314/bilibili-api/blob/master/api.md)



编辑于 2020-05-22

[哔哩哔哩](http://www.zhihu.com/topic/19628957)

[B站游戏区](http://www.zhihu.com/topic/20043633)

[UP 主](http://www.zhihu.com/topic/20022557)

赞同 11

添加评论

分享

喜欢收藏



### 文章被以下专栏收录

- [![远辰](https://pic2.zhimg.com/v2-61d02bd7a0b106c97bc8be1ad5ca702c_xs.jpg?source=172ae18b)](http://www.zhihu.com/column/c_1224300037469204480)

- ## [远辰](http://www.zhihu.com/column/c_1224300037469204480)

- [进入专栏](http://www.zhihu.com/column/c_1224300037469204480)

### 推荐阅读

- ![数据分析深扒B站UP主！各分区TOP15有你关注的吗？](https://pic1.zhimg.com/v2-f39360fa15dce4ccbafe3499e0a4c29b_250x0.jpg?source=172ae18b)

- # 数据分析深扒B站UP主！各分区TOP15有你关注的吗？

- 爱数据-橙...发表于数据分析学...

- ![这7位优秀的B站UP主，可为你打发无聊时光](https://pic2.zhimg.com/v2-cd37b268528796b0d1d3c2c3af712c8e_250x0.jpg?source=172ae18b)

- # 这7位优秀的B站UP主，可为你打发无聊时光

- 橙子的橘子

- # 哔哩哔哩一万播放量多少钱，哔哩哔哩up主靠什么收入

- B站里有两种人，一种叫粉丝，一种叫UP主。 所谓的UP主其实就是视频的制作者和上传者，他们通过将自己的见解做成视频，并分享出去。 去年3月，还在念大一的我做起了up主。一开始他做的是动漫…

- 李哥自媒体发表于李哥自媒体

- ![B站第一位千万粉丝up达成的背后，是否有很多疑问？](https://pic1.zhimg.com/v2-ab3a8ba11c32dd4dd48463fce1197d6a_250x0.jpg?source=172ae18b)

- # B站第一位千万粉丝up达成的背后，是否有很多疑问？

- 李敏

## 还没有评论

写下你的评论...



发布



想来知乎工作？请发送邮件到 jobs@zhihu.com