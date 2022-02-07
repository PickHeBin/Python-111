## 初始化[¶](#初始化)

In [1]:

```
# 查看个人持久化工作区文件
!ls /home/kesci/work/
bar_base.html  images  lost+found  model.hdf5  multiple_y_axes.html
```

In [2]:

```
# 查看当前kernel下的package
# !pip list --format=columns
```

In [3]:

```
# !pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
!pip install pyecharts -U -i https://pypi.tuna.tsinghua.edu.cn/simple
!pip install jieba -i https://pypi.tuna.tsinghua.edu.cn/simple
!pip install gensim -i https://pypi.tuna.tsinghua.edu.cn/simple
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting pyecharts
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/d2/1a/a094c0d11c3c87cf407cbd9dc069882e9bba08374df1ad81dfb39de1a8d3/pyecharts-1.9.0-py3-none-any.whl (135 kB)
     |████████████████████████████████| 135 kB 1.1 MB/s eta 0:00:01
Requirement already satisfied, skipping upgrade: jinja2 in /opt/conda/lib/python3.8/site-packages (from pyecharts) (2.11.2)
Collecting simplejson
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/55/ac/1a7ac72f402f8978996dab444567092fcd56fde372b8a31226139c719819/simplejson-3.17.2-cp38-cp38-manylinux2010_x86_64.whl (137 kB)
     |████████████████████████████████| 137 kB 2.2 MB/s eta 0:00:01
Collecting prettytable
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/94/d5/52e48f3bcf66f838d411ad85c3ac9550c2451d082623e2d4d4df7411ed5c/prettytable-2.0.0-py3-none-any.whl (22 kB)
Requirement already satisfied, skipping upgrade: MarkupSafe>=0.23 in /opt/conda/lib/python3.8/site-packages (from jinja2->pyecharts) (1.1.1)
Requirement already satisfied, skipping upgrade: wcwidth in /opt/conda/lib/python3.8/site-packages (from prettytable->pyecharts) (0.2.5)
Requirement already satisfied, skipping upgrade: setuptools in /opt/conda/lib/python3.8/site-packages (from prettytable->pyecharts) (49.6.0.post20200814)
Installing collected packages: simplejson, prettytable, pyecharts
Successfully installed prettytable-2.0.0 pyecharts-1.9.0 simplejson-3.17.2
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting jieba
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/c6/cb/18eeb235f833b726522d7ebed54f2278ce28ba9438e3135ab0278d9792a2/jieba-0.42.1.tar.gz (19.2 MB)
     |████████████████████████████████| 19.2 MB 3.7 MB/s eta 0:00:01
Building wheels for collected packages: jieba
  Building wheel for jieba (setup.py) ... done
  Created wheel for jieba: filename=jieba-0.42.1-py3-none-any.whl size=19314478 sha256=64e397f9796f509742da5907297ef7422c4ac76c0501e0995e91da124def0192
  Stored in directory: /home/kesci/.cache/pip/wheels/f3/30/86/64b88bf0241f0132806c61b1e2686b44f1327bfc5642f9d77d
Successfully built jieba
Installing collected packages: jieba
Successfully installed jieba-0.42.1
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting gensim
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/30/7e/f29979d98e7d7e6883ef42725fe91a09388412fcd68c7b8a13d6a9e582ca/gensim-3.8.3-cp38-cp38-manylinux1_x86_64.whl (24.2 MB)
     |████████████████████████████████| 24.2 MB 605 kB/s eta 0:00:01
Requirement already satisfied: scipy>=0.18.1 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.5.2)
Requirement already satisfied: six>=1.5.0 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.15.0)
Requirement already satisfied: numpy>=1.11.3 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.19.1)
Collecting smart-open>=1.8.1
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/ea/54/01525817b6f31533d308968b814999f7e666b2234f39a55cbe5de7c1ff99/smart_open-4.1.2-py3-none-any.whl (111 kB)
     |████████████████████████████████| 111 kB 114.9 MB/s eta 0:00:01
Installing collected packages: smart-open, gensim
Successfully installed gensim-3.8.3 smart-open-4.1.2
```

## 导入包[¶](#导入包)

In [4]:

```
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
```

## 加载数据[¶](#加载数据)

In [5]:

```
# 查看当前挂载的数据集目录
!ls /home/kesci/input/food_video2484
BiliBili_FOOD_Video_1.csv  Bilibili_FOOD_Video_3.csv
BiliBili_FOOD_Video_2.csv  Bilibili_FOOD_Video_4.csv
```

In [6]:

```
data1=pd.read_csv('/home/kesci/input/food_video2484/BiliBili_FOOD_Video_1.csv')
data2=pd.read_csv('/home/kesci/input/food_video2484/BiliBili_FOOD_Video_2.csv')
data3=pd.read_csv('/home/kesci/input/food_video2484/Bilibili_FOOD_Video_3.csv')
data4=pd.read_csv('/home/kesci/input/food_video2484/Bilibili_FOOD_Video_4.csv')
print(data1.columns.tolist())
print("data1.shape:",data1.shape)
print("data2.shape:",data2.shape)
print("data3.shape:",data3.shape)
print("data4.shape:",data4.shape)
['标题', '总播放数', '总弹幕数', '发布时间', '发布者', '点赞数', '金币数', '收藏量', '分享数', '视频介绍', '标签', '评论数']
data1.shape: (8974, 12)
data2.shape: (17951, 12)
data3.shape: (9628, 12)
data4.shape: (10459, 12)
```

In [ ]:

```

```

In [7]:

```
# 合并数据集
data=pd.concat([data1,data2,data3,data4],axis=0)
data=data.reset_index(drop=True)
data.head()
```

Out[7]:

|      | 标题                                                         | 总播放数  | 总弹幕数 | 发布时间       | 发布者     | 点赞数 | 金币数         | 收藏量 | 分享数 | 视频介绍                                                     | 标签                                                         | 评论数 |
| ---- | ------------------------------------------------------------ | --------- | -------- | -------------- | ---------- | ------ | -------------- | ------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 0    | 活动作品卷饼卷一切 \| 麦西恩卷饼 \| 早餐                     | 54播放 ·  | 0弹幕    | 2021/1/5 14:56 | 兔巨头_    | 2\n    | \n      投币\n | 收藏\n | 分享\n | 微博:兔巨头_\n公众号:兔巨头     分享日常♡\nThanks for whatchi... | 一人食美食美食美食制作\n          出发吧2021\n        \n    ... | 1.0    |
| 1    | 活动作品Vlog71 \| 2020年的最后一支vlog\| 午餐肉韩式炒饭 \| 冬日美食\|你好... | 3播放 ·   | 0弹幕    | 2021/1/5 14:55 | 杏庄老酒   | 1\n    | \n      投币\n | 收藏\n | 分享\n | -                                                            | 家常菜美食美食美食制作\n          人生百味·年度美食大赏\n        \n... | 0.0    |
| 2    | 50买了一个两斤半的猪肘，小马今天做“红烧猪肘”软烂入味，肥而不腻！ | 2播放 ·   | 0弹幕    | 2021/1/5 14:52 | 庄味小马   | 点赞\n | \n      投币\n | 收藏\n | 分享\n | 50买了一个两斤半的猪肘，小马今天做“红烧猪肘”软烂入味，肥而不腻！ | 烹饪厨艺美食美食美食制作\n          料理制作\n        \n      ... | 0.0    |
| 3    | 新年假期最后一天，杰哥为媳妇孩子逛了又逛，最后买回一兜啥？   | 1播放 ·   | 0弹幕    | 2021/1/5 14:51 | 杰小郭     | 点赞\n | \n      投币\n | 收藏\n | 分享\n | 酱大骨头的家常做法，酱味十足，香烂入味，好吃不油腻           | 烹饪家常菜美食美食美食制作\n          料理制作\n        \n     ... | 0.0    |
| 4    | 吃不完的猪肉，直接放冰箱就错了，教您一招，放30天还是新鲜的   | 208播放 · | 0弹幕    | 2021/1/5 14:49 | 李小米美食 | 10\n   | \n      2\n    | 4\n    | 2\n    | 吃不完的猪肉，直接放冰箱就错了，教您一招，放30天还是新鲜的啊 | 美食美食美食制作\n          猪肉\n        \n          保存... | 1.0    |

In [8]:

```
data.shape
```

Out[8]:

```
(47012, 12)
```

## 数据分析[¶](#数据分析)

### 缺失值统计[¶](#缺失值统计)

In [9]:

```
data.shape[0]-data.count()
```

Out[9]:

```
标题          5
总播放数       25
总弹幕数       41
发布时间       47
发布者       157
点赞数        67
金币数        68
收藏量        71
分享数        71
视频介绍     3267
标签         73
评论数     37265
dtype: int64
```

## ① 美食up最喜欢做啥样的食材[¶](#①-美食up最喜欢做啥样的食材)

我们通过上面的数据可以发现食材可以来自：

- 标题：50买了一个两斤半的`猪肘`，小马今天做“红烧猪肘”软烂入味，肥而不腻！  
- 视频介绍：    吃不完的`猪肉`，直接放冰箱就错了，教您一招，放30天还是新鲜的啊  
- 标签：  美食美食美食制作\n `猪肉`\n \n 保存  

我们可以对文本进行预处理以及统计词频，画出相关词云，进行产看

### 标题中的食材统计[¶](#标题中的食材统计)

In [10]:

```
import jieba.posseg
[(w.word,w.flag) for w in jieba.posseg.cut('吃不完的猪肉，直接放冰箱就错了，教您一招，放30天还是新鲜的啊')]
Building prefix dict from the default dictionary ...
Dumping model to file cache /tmp/jieba.cache
Loading model cost 0.689 seconds.
Prefix dict has been built successfully.
```

Out[10]:

```
[('吃不完', 'v'),
 ('的', 'uj'),
 ('猪肉', 'n'),
 ('，', 'x'),
 ('直接', 'ad'),
 ('放', 'v'),
 ('冰箱', 'n'),
 ('就', 'd'),
 ('错', 'v'),
 ('了', 'ul'),
 ('，', 'x'),
 ('教', 'v'),
 ('您', 'r'),
 ('一招', 'm'),
 ('，', 'x'),
 ('放', 'v'),
 ('30', 'm'),
 ('天', 'n'),
 ('还是', 'c'),
 ('新鲜', 'ns'),
 ('的', 'uj'),
 ('啊', 'y')]
```

In [11]:

```
# 先统计一些名词
from collections import Counter
from tqdm import tqdm_notebook,tqdm
title_noun_words=[]
title_texts=[]
for title in tqdm(data['标题']):
    # print([(w.word,w.flag) for w in jieba.posseg.cut(str(title))])
    word_flags=[(w.word,w.flag) for w in jieba.posseg.cut(str(title))]
    words_=[(wf[0]) for wf in word_flags if wf[1] in ['n','nz'] ]
    title_texts.append(' '.join([(wf[0]) for wf in word_flags]))
    title_noun_words.extend(words_)
100%|██████████| 47012/47012 [00:58<00:00, 800.82it/s] 
```

In [12]:

```
print(len(Counter(title_noun_words)))
Counter(title_noun_words).most_common(20)
11684
```

Out[12]:

```
[('作品', 23474),
 ('美食', 2779),
 ('人', 2024),
 ('蛋糕', 1606),
 ('味道', 1547),
 ('肉', 1486),
 ('美味', 1398),
 ('锅', 1269),
 ('菜', 1071),
 ('过瘾', 1042),
 ('牛肉', 1037),
 ('火锅', 1021),
 ('面', 974),
 ('面包', 936),
 ('鱼', 898),
 ('饭', 865),
 ('农村', 824),
 ('鸡', 819),
 ('汤', 801),
 ('零食', 780)]
```

In [13]:

```
# 去除一些非食材的停用词
food_stop_words=['作品','美食','美味','人','味道','学会','教程',
    '锅','配方','营养','家常','早餐','家人','工人','小吃','大厨',
    '大家','食谱','技巧','日记','企时','方法','孩子','懒人',
    '正宗','厨房','手','饭','饭店','过瘾','农村']
```

In [14]:

```
noun_topk_words=Counter(title_noun_words).most_common(10000)
noun_topk_words=[wc for wc in noun_topk_words if wc[0] not in food_stop_words]
noun_topk_words[:20]
```

Out[14]:

```
[('蛋糕', 1606),
 ('肉', 1486),
 ('菜', 1071),
 ('牛肉', 1037),
 ('火锅', 1021),
 ('面', 974),
 ('面包', 936),
 ('鱼', 898),
 ('鸡', 819),
 ('汤', 801),
 ('零食', 780),
 ('粉', 745),
 ('鸡蛋', 724),
 ('小伙', 715),
 ('豆腐', 608),
 ('咖啡', 585),
 ('炸鸡', 557),
 ('探店', 538),
 ('茶', 534),
 ('肉松', 528)]
```

In [15]:

```
# plot 词云函数
import pyecharts.options as opts
from pyecharts.charts import WordCloud
from pyecharts.globals import CurrentConfig, NotebookType
CurrentConfig.NOTEBOOK_TYPE = NotebookType.JUPYTER_NOTEBOOK

def plot_wordclod(data,title=""):
    c=(
        WordCloud()
        .add(series_name=title, data_pair=noun_topk_words, word_size_range=[10, 66])
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title=title, title_textstyle_opts=opts.TextStyleOpts(font_size=23)
            ),
            tooltip_opts=opts.TooltipOpts(is_show=True),
        )
    )
    return c
    
```

In [16]:

```
# 使用次数最多的食材词云
c=plot_wordclod(noun_topk_words,title="标题中的热点食材分析")
c.render_notebook()
```

Out[16]:

### 视频介绍汇中的食材[¶](#视频介绍汇中的食材)

In [17]:

```
# 先统计一些名词
from collections import Counter
from tqdm import tqdm_notebook,tqdm
intro_noun_words=[]
intro_texts=[]
for title in tqdm(data['视频介绍']):
    # print([(w.word,w.flag) for w in jieba.posseg.cut(str(title))])
    word_flags=[(w.word,w.flag) for w in jieba.posseg.cut(str(title))]
    words_=[(wf[0]) for wf in word_flags if wf[1] in ['n','nz'] ]
    intro_texts.append(' '.join([(wf[0]) for wf in word_flags]))
    intro_noun_words.extend(words_)
100%|██████████| 47012/47012 [01:19<00:00, 588.48it/s] 
```

In [18]:

```
noun_topk_words=Counter(intro_noun_words).most_common(100000)
food_stop_words2=['视频','食材','口感','物','评论','时间','西施',
'朋友','油管','手工','菜','农村']
noun_topk_words=[wc for wc in noun_topk_words if wc[0] not in \
food_stop_words2+food_stop_words]
noun_topk_words[:20]
```

Out[18]:

```
[('肉', 1159),
 ('蛋糕', 783),
 ('店', 775),
 ('火锅', 737),
 ('鱼', 734),
 ('牛肉', 726),
 ('地址', 665),
 ('粉', 658),
 ('面', 649),
 ('博', 633),
 ('鸡蛋', 601),
 ('面包', 597),
 ('水', 586),
 ('鸡', 563),
 ('时候', 541),
 ('投币', 533),
 ('汤', 527),
 ('群', 484),
 ('感觉', 471),
 ('小伙伴', 448)]
```

In [19]:

```
c=plot_wordclod(noun_topk_words,title="视频介绍中的热点食材分析")
c.render_notebook()
```

Out[19]:

### 标签中的食材统计[¶](#标签中的食材统计)

In [20]:

```
# 先统计一些名词
from collections import Counter
from tqdm import tqdm_notebook,tqdm
tag_noun_words=[]
tag_texts=[]
for text in tqdm(data['标签']):
    text=''.join(str(text).split())
    # print([(w.word,w.flag) for w in jieba.posseg.cut(str(text))])
    word_flags=[(w.word,w.flag) for w in jieba.posseg.cut(str(text))]
    words_=[(wf[0]) for wf in word_flags if wf[1] in ['n','nz'] ]
    tag_texts.append(' '.join([(wf[0]) for wf in word_flags if wf[0]]))
    tag_noun_words.extend(words_)
100%|██████████| 47012/47012 [00:31<00:00, 1471.19it/s]
```

In [21]:

```
noun_topk_words=Counter(intro_noun_words).most_common(100000)
food_stop_words3=['原','博','时候','小伙伴',
'一键','记录','家庭','技术','文化','减脂',
'教学','小时','材料','量','天']
noun_topk_words=[wc for wc in noun_topk_words if wc[0] not in \
food_stop_words2+food_stop_words+food_stop_words3]
noun_topk_words[:20]
```

Out[21]:

```
[('肉', 1159),
 ('蛋糕', 783),
 ('店', 775),
 ('火锅', 737),
 ('鱼', 734),
 ('牛肉', 726),
 ('地址', 665),
 ('粉', 658),
 ('面', 649),
 ('鸡蛋', 601),
 ('面包', 597),
 ('水', 586),
 ('鸡', 563),
 ('投币', 533),
 ('汤', 527),
 ('群', 484),
 ('感觉', 471),
 ('豆腐', 443),
 ('有点', 437),
 ('粉丝', 417)]
```

In [22]:

```
c=plot_wordclod(noun_topk_words,title="视频标签中的热点食材分析")
c.render_notebook()
```

Out[22]:

### 基于Word2Vec的食材词发现[¶](#基于Word2Vec的食材词发现)

In [23]:

```
!pip install gensim -i http://mirrors.aliyun.com/pypi/simple/ 
Looking in indexes: http://mirrors.aliyun.com/pypi/simple/
Requirement already satisfied: gensim in /opt/conda/lib/python3.8/site-packages (3.8.3)
Requirement already satisfied: six>=1.5.0 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.15.0)
Requirement already satisfied: numpy>=1.11.3 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.19.1)
Requirement already satisfied: smart-open>=1.8.1 in /opt/conda/lib/python3.8/site-packages (from gensim) (4.1.2)
Requirement already satisfied: scipy>=0.18.1 in /opt/conda/lib/python3.8/site-packages (from gensim) (1.5.2)
```

In [24]:

```
corpus=title_texts+intro_texts+tag_texts
print("num sentences of corpus:{}".format(len(corpus)))
num sentences of corpus:141036
```

In [25]:

```
sentences=[sent.split() for sent in corpus]
```

In [26]:

```
from gensim.models import word2vec, keyedvectors
model = word2vec.Word2Vec(size=50, min_count=1, hs=1, negative=0)
model.build_vocab(sentences)
model.train(sentences, total_examples=model.corpus_count, epochs=model.epochs)
```

Out[26]:

```
(9787097, 12376900)
```

In [27]:

```
sims = model.wv.most_similar('蛋糕', topn=10)
sims
```

Out[27]:

```
[('巧克力', 0.7264723777770996),
 ('草莓', 0.713034987449646),
 ('慕斯', 0.7103459239006042),
 ('燕麦', 0.7102378606796265),
 ('泡芙', 0.6958266496658325),
 ('酸奶', 0.6859506964683533),
 ('珍珠奶茶', 0.6792590618133545),
 ('蓝莓', 0.6775678992271423),
 ('麻薯', 0.6737960577011108),
 ('甜品', 0.6720385551452637)]
```

In [28]:

```
sims = model.wv.most_similar('鸡蛋', topn=10)
sims
```

Out[28]:

```
[('茄子', 0.5800912976264954),
 ('秃', 0.5685547590255737),
 ('鸡胸肉', 0.5628572702407837),
 ('西红柿', 0.5575353503227234),
 ('番茄', 0.5545694828033447),
 ('打底', 0.5545563697814941),
 ('泡菜', 0.5539757609367371),
 ('可真多', 0.5503755807876587),
 ('洋葱', 0.5478838682174683),
 ('炒蛋', 0.5477198958396912)]
```

In [29]:

```
sims = model.wv.most_similar('面粉', topn=10)
sims
```

Out[29]:

```
[('韭菜', 0.5536747574806213),
 ('小笼包', 0.5007625222206116),
 ('纯牛奶', 0.49718958139419556),
 ('十元', 0.49132296442985535),
 ('节课', 0.4875353276729584),
 ('秃', 0.48704344034194946),
 ('道菜', 0.47789984941482544),
 ('钟头', 0.4773373305797577),
 ('羊記', 0.4766201972961426),
 ('盐', 0.46653664112091064)]
```

In [30]:

```
sims = model.wv.most_similar('猪肉', topn=10)
sims
```

Out[30]:

```
[('腊肉', 0.7231677770614624),
 ('粉条', 0.6907979249954224),
 ('豆腐', 0.685492753982544),
 ('猪脚', 0.6668732762336731),
 ('萝卜', 0.6627582907676697),
 ('白萝卜', 0.6600216627120972),
 ('大锅菜', 0.6546180844306946),
 ('酸菜', 0.650286078453064),
 ('香菇', 0.6350525617599487),
 ('炒菜', 0.6312235593795776)]
```

In [31]:

```
sims = model.wv.most_similar('牛肉', topn=10)
sims
```

Out[31]:

```
[('牛杂', 0.6810640692710876),
 ('特色', 0.6706598997116089),
 ('羊肉', 0.6554085612297058),
 ('汤', 0.649901270866394),
 ('肥肠', 0.6467644572257996),
 ('辣椒', 0.6401302814483643),
 ('肥牛', 0.6296205520629883),
 ('鸡肉', 0.6193506121635437),
 ('土豆', 0.616536021232605),
 ('肉', 0.6154890656471252)]
```

- 从上面分析我们发现，美食up主比较喜欢：蛋糕、面包、鸡蛋、面粉、牛奶食材类的美食，难道是因为喜欢吃甜的，还是因为比较容易操作  
- 其次也喜欢做做肉类的食物，比如猪肉，牛肉等  

## ② 最受欢迎的美食up有什么共同之处？[¶](#②-最受欢迎的美食up有什么共同之处？)

In [32]:

```
data.head(2)
```

Out[32]:

|      | 标题                                                         | 总播放数 | 总弹幕数 | 发布时间       | 发布者   | 点赞数 | 金币数         | 收藏量 | 分享数 | 视频介绍                                                     | 标签                                                         | 评论数 |
| ---- | ------------------------------------------------------------ | -------- | -------- | -------------- | -------- | ------ | -------------- | ------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 0    | 活动作品卷饼卷一切 \| 麦西恩卷饼 \| 早餐                     | 54播放 · | 0弹幕    | 2021/1/5 14:56 | 兔巨头_  | 2\n    | \n      投币\n | 收藏\n | 分享\n | 微博:兔巨头_\n公众号:兔巨头     分享日常♡\nThanks for whatchi... | 一人食美食美食美食制作\n          出发吧2021\n        \n    ... | 1.0    |
| 1    | 活动作品Vlog71 \| 2020年的最后一支vlog\| 午餐肉韩式炒饭 \| 冬日美食\|你好... | 3播放 ·  | 0弹幕    | 2021/1/5 14:55 | 杏庄老酒 | 1\n    | \n      投币\n | 收藏\n | 分享\n | -                                                            | 家常菜美食美食美食制作\n          人生百味·年度美食大赏\n        \n... | 0.0    |

### 最受欢迎的美食up的评分计算[¶](#最受欢迎的美食up的评分计算)

目标是寻找综合得分最高的美食up主播:**视频质量高、互动效果最好的UP**

我们可以根据播放量，弹幕数，点赞数，金币数，收藏量，分享数以及评论数的`总和` 的视频平均得分来定义最受欢迎的美食up主

popularity−score(up)=playcount+barragecount+votecount+coincount+favoritecount+sharecount+reviewcountvideocount popularity_{-}score(up) =\frac{play_{count}+barrage_{count}+vote_{count} +coin_{count}+favorite_{count}+share_{count}+review_{count}}{video_{count}}

In [33]:

```
import re

def get_nums(x):
    res=re.findall(r"\d+\.?\d*",x)
    
    if len(res)>0:
        num=float(res[0])
        if '万' in x:
            return num*10000
        return num
    return 0
```

In [34]:

```
tmp=pd.DataFrame()
tmp['up']=data['发布者']
tmp['play_count']=data['总播放数'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['barrage_count']=data['总弹幕数'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['vote_count']=data['点赞数'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['coin_count']=data['金币数'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['favorite_count']=data['收藏量'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['share_count']=data['分享数'].apply(lambda x:get_nums(str(x))).astype("float")
tmp['review_count']=data['评论数'].apply(lambda x:get_nums(str(x))).astype("float")

tmp['play_count'].describe()
tmp['barrage_count'].describe()
tmp['vote_count'].describe()
tmp.describe()
```

Out[34]:

|       | play_count   | barrage_count | vote_count    | coin_count    | favorite_count | share_count  | review_count |
| ----- | ------------ | ------------- | ------------- | ------------- | -------------- | ------------ | ------------ |
| count | 4.701200e+04 | 47012.000000  | 47012.000000  | 47012.000000  | 47012.000000   | 47012.000000 | 47012.000000 |
| mean  | 5.041103e+04 | 252.643261    | 2910.087233   | 811.083808    | 270.812239     | 162.580171   | 23.051583    |
| std   | 1.995294e+05 | 1478.327400   | 15474.368840  | 7993.064373   | 2401.673737    | 1233.307537  | 200.205117   |
| min   | 0.000000e+00 | 0.000000      | 0.000000      | 0.000000      | 0.000000       | 0.000000     | 0.000000     |
| 25%   | 1.500000e+01 | 0.000000      | 1.000000      | 0.000000      | 0.000000       | 0.000000     | 0.000000     |
| 50%   | 2.772000e+03 | 6.000000      | 111.000000    | 11.000000     | 11.000000      | 2.000000     | 0.000000     |
| 75%   | 3.000000e+04 | 112.000000    | 1326.000000   | 183.000000    | 108.000000     | 23.000000    | 0.000000     |
| max   | 6.839000e+06 | 86000.000000  | 710000.000000 | 608000.000000 | 232000.000000  | 91000.000000 | 16886.000000 |

In [35]:

```
# 为了减少数量的量纲影响，比如播放量很大，但是其他数量很少，如果相加的话，其他字段的数量的贡献体现不出来，我们对数据做一个归一化处理。
# 我们统一对数据做一个归一化处理
from sklearn.preprocessing import MinMaxScaler
scaler=MinMaxScaler()
count_columns=['play_count','barrage_count','vote_count','coin_count','favorite_count','share_count','review_count']
tmp[count_columns]=scaler.fit_transform(tmp[count_columns])
tmp.describe()
```

Out[35]:

|       | play_count   | barrage_count | vote_count   | coin_count   | favorite_count | share_count  | review_count |
| ----- | ------------ | ------------- | ------------ | ------------ | -------------- | ------------ | ------------ |
| count | 47012.000000 | 47012.000000  | 47012.000000 | 47012.000000 | 47012.000000   | 47012.000000 | 47012.000000 |
| mean  | 0.007371     | 0.002938      | 0.004099     | 0.001334     | 0.001167       | 0.001787     | 0.001365     |
| std   | 0.029175     | 0.017190      | 0.021795     | 0.013146     | 0.010352       | 0.013553     | 0.011856     |
| min   | 0.000000     | 0.000000      | 0.000000     | 0.000000     | 0.000000       | 0.000000     | 0.000000     |
| 25%   | 0.000002     | 0.000000      | 0.000001     | 0.000000     | 0.000000       | 0.000000     | 0.000000     |
| 50%   | 0.000405     | 0.000070      | 0.000156     | 0.000018     | 0.000047       | 0.000022     | 0.000000     |
| 75%   | 0.004387     | 0.001302      | 0.001868     | 0.000301     | 0.000466       | 0.000253     | 0.000000     |
| max   | 1.000000     | 1.000000      | 1.000000     | 1.000000     | 1.000000       | 1.000000     | 1.000000     |

In [36]:

```
# 美食up评分
tmp['up'].value_counts()
```

Out[36]:

```
攒一袋星星去购物      224
谁老了不得跳广场舞-    187
小九美食          183
肉肉大搜索         182
汉堡鲍           170
             ... 
三四月刀            1
帅的一逼遭           1
麻麻哒妳的嘴          1
锅圈食汇F阳光城店       1
周氏严选普洱茶         1
Name: up, Length: 6423, dtype: int64
```

In [37]:

```
tmp['video_count']=tmp.groupby(by='up')['play_count'].transform('count')
tmp['video_count'].describe()
```

Out[37]:

```
count    46855.000000
mean        30.319646
std         37.881183
min          1.000000
25%          6.000000
50%         15.000000
75%         40.000000
max        224.000000
Name: video_count, dtype: float64
```

In [38]:

```
tmp['score']=tmp[count_columns].sum(axis=1)
tmp['score']
```

Out[38]:

```
0        6.993345e-05
1        1.847111e-06
2        2.924404e-07
3        1.462202e-07
4        1.462278e-04
             ...     
47007    1.299291e-01
47008    1.196713e-01
47009    1.438048e-01
47010    1.289909e-01
47011    1.830593e-01
Name: score, Length: 47012, dtype: float64
```

In [39]:

```
tmp['popular_score']=tmp.groupby(by='up')['score'].transform('sum')/tmp['video_count']
tmp['popular_score']=tmp['popular_score']*100
tmp['popular_score'].describe()
```

Out[39]:

```
count    46855.000000
mean         1.963772
std          7.968870
min          0.000000
25%          0.001241
50%          0.175313
75%          1.459244
max        371.442848
Name: popular_score, dtype: float64
```

In [40]:

```
up_score={}
for index,row in tmp.iterrows():
    if row['up'] not in up_score:
        up_score[row['up']]=row['popular_score']
# up_score
```

### 最受欢迎的top5美食up主播[¶](#最受欢迎的top5美食up主播)

In [41]:

```
# sorted(up_score.items(),key=lambda x:x[1],reverse=False)[-2]
```

In [42]:

```
top5_ups=sorted(up_score.items(),key=lambda x:x[1],reverse=False)[-5:]
top5_ups
```

Out[42]:

```
[('食贫道', 157.639744308143),
 ('盗月社食遇记', 157.8850674826937),
 ('李子柒', 166.98607295886805),
 ('绵羊料理', 167.51002373169584),
 ('罗翔说刑法', 371.44284802902325)]
```

In [43]:

```
import pyecharts.options as opts
from pyecharts.charts import Line, Grid
from pyecharts.commons.utils import JsCode



x_data = [x[0] for x in top5_ups]
print(x_data)
y_data =  [y[1] for y in top5_ups]

background_color_js = (
    "new echarts.graphic.LinearGradient(0, 0, 0, 1, "
    "[{offset: 0, color: '#c86589'}, {offset: 1, color: '#06a7ff'}], false)"
)
area_color_js = (
    "new echarts.graphic.LinearGradient(0, 0, 0, 1, "
    "[{offset: 0, color: '#eb64fb'}, {offset: 1, color: '#3fbbff0d'}], false)"
)

c = (
    Line(init_opts=opts.InitOpts(bg_color=JsCode(background_color_js)))
    .add_xaxis(xaxis_data=x_data)
    .add_yaxis(
        series_name="主播热度",
        y_axis=y_data,
        is_smooth=True,
        is_symbol_show=True,
        symbol="circle",
        symbol_size=6,
        linestyle_opts=opts.LineStyleOpts(color="#fff"),
        label_opts=opts.LabelOpts(is_show=True, position="top", color="white"),
        itemstyle_opts=opts.ItemStyleOpts(
            color="red", border_color="#fff", border_width=3
        ),
        tooltip_opts=opts.TooltipOpts(is_show=False),
        areastyle_opts=opts.AreaStyleOpts(color=JsCode(area_color_js), opacity=1),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="B站最受欢迎的美食UP",
            pos_bottom="3%",
            pos_left="center",
            title_textstyle_opts=opts.TextStyleOpts(color="#fff", font_size=15),
        ),
        xaxis_opts=opts.AxisOpts(
            type_="category",
            boundary_gap=False,
            axislabel_opts=opts.LabelOpts(margin=3, color="#ffffff63"),
            axisline_opts=opts.AxisLineOpts(is_show=False),
            axistick_opts=opts.AxisTickOpts(
                is_show=True,
                length=10,
                linestyle_opts=opts.LineStyleOpts(color="#ffffff1f"),
            ),
            splitline_opts=opts.SplitLineOpts(
                is_show=True, linestyle_opts=opts.LineStyleOpts(color="#ffffff1f")
            ),
        ),
        yaxis_opts=opts.AxisOpts(
            type_="value",
            position="right",
            axislabel_opts=opts.LabelOpts(margin=20, color="#ffffff63"),
            axisline_opts=opts.AxisLineOpts(
                linestyle_opts=opts.LineStyleOpts(width=2, color="#fff")
            ),
            axistick_opts=opts.AxisTickOpts(
                is_show=True,
                length=30,
                linestyle_opts=opts.LineStyleOpts(color="#ffffff1f"),
            ),
            splitline_opts=opts.SplitLineOpts(
                is_show=True, linestyle_opts=opts.LineStyleOpts(color="#ffffff1f")
            ),
        ),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)

(
    Grid()
    .add(
        c,
        grid_opts=opts.GridOpts(
            pos_top="20%",
            pos_left="10%",
            pos_right="10%",
            pos_bottom="15%",
            is_contain_label=True,
        ),
    )
    # .render("beautiful_line_chart.html")
)
c.render_notebook()
['食贫道', '盗月社食遇记', '李子柒', '绵羊料理', '罗翔说刑法']
```

Out[43]:

### 最受欢迎的美食up的共同之处[¶](#最受欢迎的美食up的共同之处)

In [44]:

```
[('食贫道', 157.639744308143),
 ('盗月社食遇记', 157.8850674826937),
 ('李子柒', 166.98607295886805),
 ('绵羊料理', 167.51002373169584),
 ('罗翔说刑法', 371.44284802902325)]
```

Out[44]:

```
[('食贫道', 157.639744308143),
 ('盗月社食遇记', 157.8850674826937),
 ('李子柒', 166.98607295886805),
 ('绵羊料理', 167.51002373169584),
 ('罗翔说刑法', 371.44284802902325)]
```

In [45]:

```
data[data['发布者'].isin(['罗翔说刑法'])].head(3)
```

Out[45]:

|       | 标题                                               | 总播放数      | 总弹幕数  | 发布时间         | 发布者     | 点赞数   | 金币数           | 收藏量  | 分享数  | 视频介绍                                                   | 标签                                                         | 评论数 |
| ----- | -------------------------------------------------- | ------------- | --------- | ---------------- | ---------- | -------- | ---------------- | ------- | ------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| 32544 | 【罗翔】第一次吃螺狮粉，感谢“罗师粉”们的支持与鼓励 | 683.9万播放 · | 7.8万弹幕 | 2020/10/26 17:00 | 罗翔说刑法 | 71.0万\n | \n      17.4万\n | 4.7万\n | 2.9万\n | 之前一直听说螺狮粉，今天第一次吃螺狮粉，到底是什么味道呢？ | 罗翔美食美食美食测评\n          螺狮粉\n        \n         ... | NaN    |

In [46]:

```
data[data['发布者'].isin(['绵羊料理'])].head(3)
```

Out[46]:

|       | 标题                                         | 总播放数      | 总弹幕数  | 发布时间         | 发布者   | 点赞数   | 金币数           | 收藏量  | 分享数  | 视频介绍                                                     | 标签                                                         | 评论数 |
| ----- | -------------------------------------------- | ------------- | --------- | ---------------- | -------- | -------- | ---------------- | ------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 37695 | 活动作品好的食材，往往只需要最复杂的处理...  | 510.2万播放 · | 3.7万弹幕 | 2020/11/3 18:00  | 绵羊料理 | 31.3万\n | \n      11.6万\n | 2.7万\n | 7776\n  | 文字版菜谱在视频末尾(*￣ω￣) 日更微博@绵羊料理\n微信公众号：绵羊料理\n油管同步更新... | 街头美食探店美食搞笑美食美食侦探\n          人生百味挑战\n        \n... | NaN    |
| 37701 | 活动作品只需一碗酸香的鱼汤，麻雀也能变成凤凰 | 339.0万播放 · | 1.4万弹幕 | 2020/11/25 18:00 | 绵羊料理 | 24.8万\n | \n      8.9万\n  | 2.4万\n | 9983\n  | 文字版菜谱在视频末尾(*￣ω￣) 日更微博@绵羊料理\n微信公众号：绵羊料理\n油管同步更新... | 川菜街头美食探店美食搞笑美食美食侦探\n          街头小吃\n        \n... | NaN    |
| 42356 | 活动作品湖南妹子挑战山西最辣面条，这一次...  | 443.9万播放 · | 1.7万弹幕 | 2020/11/5 19:22  | 绵羊料理 | 27.8万\n | \n      11.2万\n | 2.2万\n | 1.1万\n | 文字版菜谱在视频末尾(*￣ω￣) 日更微博@绵羊料理\n微信公众号：绵羊料理\n油管同步更新... | 街头美食探店美食搞笑美食美食侦探\n          辣味接力\n        \n  ... | NaN    |

In [47]:

```
data[data['发布者'].isin(['李子柒'])].head(3)
```

Out[47]:

|       | 标题                                                     | 总播放数      | 总弹幕数  | 发布时间         | 发布者 | 点赞数   | 金币数           | 收藏量  | 分享数  | 视频介绍                                                     | 标签                                                         | 评论数 |
| ----- | -------------------------------------------------------- | ------------- | --------- | ---------------- | ------ | -------- | ---------------- | ------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 28078 | 活动作品芋头的一生，辣椒…是送的                          | 316.1万播放 · | 4.4万弹幕 | 2020/11/8 21:53  | 李子柒 | 25.0万\n | \n      11.8万\n | 2.4万\n | 1.2万\n | 小时候我爷爷教过一句让我很疑惑的顺口溜：“红薯芋头本姓张，煮的没有烧的香”…虽然到现在也想不... | 美食美食田园美食\n          人生百味挑战\n        \n        ... | NaN    |
| 28079 | 活动作品芋头的一生，辣椒…是送的                          | 316.1万播放 · | 4.4万弹幕 | 2020/11/8 21:53  | 李子柒 | 25.0万\n | \n      11.8万\n | 2.4万\n | 1.2万\n | 华农兄弟：本来想宰猪大肠B来烤，没抓到，只好抓只替罪羊        | 美食美食田园美食\n          生活\n        \n          日常... | NaN    |
| 28081 | 活动作品【丰收季】一年忙忙碌碌，为的就是谷物满仓的踏实感 | 265.8万播放 · | 3.8万弹幕 | 2020/10/10 23:14 | 李子柒 | 24.5万\n | \n      13.8万\n | 2.6万\n | 9129\n  | 春生夏长，秋收冬藏。\n秋分已去寒露来。\n忙完玉米 谷子 南瓜 花生的收获存储之后\n就该... | 美食美食田园美食\n          生活记录\n        \n          ... | NaN    |

In [48]:

```
data[data['发布者'].isin(['盗月社食遇记'])].head(3)
```

Out[48]:

|       | 标题                                                         | 总播放数      | 总弹幕数  | 发布时间         | 发布者       | 点赞数   | 金币数           | 收藏量  | 分享数  | 视频介绍                                  | 标签                                                         | 评论数 |
| ----- | ------------------------------------------------------------ | ------------- | --------- | ---------------- | ------------ | -------- | ---------------- | ------- | ------- | ----------------------------------------- | ------------------------------------------------------------ | ------ |
| 37696 | 活动作品当把鸡交给东北人，骨头都给你做香了！连啃3只贼拉带劲✌️ | 457.8万播放 · | 1.8万弹幕 | 2020/11/1 19:00  | 盗月社食遇记 | 42.4万\n | \n      22.9万\n | 4.8万\n | 3.6万\n | 沈阳老雪闷倒驴？我沐上直接问老板要了6瓶！ | 夜宵烧烤美食侦探探店吃货美食美食美食侦探\n          人生百味挑战\n      ... | NaN    |
| 37697 | 活动作品当把鸡交给东北人，骨头都给你做香了！连啃3只贼拉带劲✌️ | 457.8万播放 · | 1.8万弹幕 | 2020/11/1 19:00  | 盗月社食遇记 | 42.4万\n | \n      22.9万\n | 4.8万\n | 3.6万\n | 沈阳老雪闷倒驴？我沐上直接问老板要了6瓶！ | 夜宵烧烤美食侦探探店吃货美食美食美食侦探\n          人生百味挑战\n      ... | 5505.0 |
| 37698 | 活动作品东北菜量有多大？12元一盆4人吃撑，南方人沉默了😳       | 454.0万播放 · | 3.5万弹幕 | 2020/10/24 20:18 | 盗月社食遇记 | 30.2万\n | \n      17.8万\n | 4.4万\n | 5.2万\n | 朋友推荐的东北神店，究竟有多神？          | 美食侦探探店吃货美食搞笑美食美食侦探\n          B站美食大侦探悬赏令\n    ... | NaN    |

通过计算美食up主播的流行性评分，我们可以看出：

- 比较受欢迎的美食up主播的视频播放量都会非常高，能够达到几百万的两级，比如流行性评分第一名的主播`罗翔说刑法`的单个视频播放量达到了800+万  
- 这些大V主播的运营能力比较强或者具有专业的运营团队，他们视频定位以及标签、简介都很完善，标题同时具有吸引力
- 他们一般喜欢下午或者晚上发布视频，因为大家都下班或者休息了，这样曝光率会更高

## ③ 浏览/投币 比最高的视频是？[¶](#③-浏览/投币-比最高的视频是？)

这个比较简单，我们可以直接通过视频的总播放数以及每个视频的金币数可以达到我们目标视频

```
注意：在get_nums函数里需要识别带有**万**字的数字，需要乘以10000
```

存在“相同视频” 我们可以对数据进行去重

In [49]:

```
print("去重之前的数据大小：",data.shape)
data=data.drop_duplicates(subset=['标题','发布者','发布者'],keep='first')
print("去重之后的数据大小：",data.shape)
去重之前的数据大小： (47012, 12)
去重之后的数据大小： (25544, 12)
```

### 浏览最多的视频[¶](#浏览最多的视频)

In [50]:

```
data['play_count']=data['总播放数'].apply(lambda x:get_nums(str(x))).astype("float")
data['play_count'].describe()
```

Out[50]:

```
count    2.554400e+04
mean     5.744858e+04
std      2.021206e+05
min      0.000000e+00
25%      2.317500e+02
50%      1.100000e+04
75%      4.100000e+04
max      6.839000e+06
Name: play_count, dtype: float64
```

In [51]:

```
# 按照总播放数从大到小排序
data=data.sort_values(by='play_count',ascending=False)
```

In [52]:

```
data.head(5)
```

Out[52]:

|       | 标题                                                   | 总播放数      | 总弹幕数  | 发布时间         | 发布者       | 点赞数   | 金币数           | 收藏量   | 分享数  | 视频介绍                                                     | 标签                                                         | 评论数 | play_count |
| ----- | ------------------------------------------------------ | ------------- | --------- | ---------------- | ------------ | -------- | ---------------- | -------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ | ---------- |
| 32544 | 【罗翔】第一次吃螺狮粉，感谢“罗师粉”们的支持与鼓励     | 683.9万播放 · | 7.8万弹幕 | 2020/10/26 17:00 | 罗翔说刑法   | 71.0万\n | \n      17.4万\n | 4.7万\n  | 2.9万\n | 之前一直听说螺狮粉，今天第一次吃螺狮粉，到底是什么味道呢？   | 罗翔美食美食美食测评\n          螺狮粉\n        \n         ... | NaN    | 6839000.0  |
| 37694 | 活动作品冬天吃日式烤和牛，我的心是暖暖的，你呢？       | 657.0万播放 · | 8.6万弹幕 | 2020/12/4 20:09  | 食贫道       | 63.4万\n | \n      60.7万\n | 23.2万\n | 9.1万\n | -                                                            | 日本料理探店美食美食美食侦探\n          日常\n        \n      ... | NaN    | 6570000.0  |
| 32545 | 爷青回！炭烤8988元一只巨型皇帝蟹！不愧是蟹中帝皇！     | 607.2万播放 · | 4.8万弹幕 | 2020/10/2 18:00  | NaN          | 45.6万\n | \n      34.2万\n | 4.7万\n  | 2.6万\n | 皇帝蟹的钳子被我掰断了没法抽奖了，要不抽个安慕希吧（         | 烧烤海鲜试吃美食搞笑美食美食测评\n          测评\n        \n    ... | NaN    | 6072000.0  |
| 37695 | 活动作品好的食材，往往只需要最复杂的处理...            | 510.2万播放 · | 3.7万弹幕 | 2020/11/3 18:00  | 绵羊料理     | 31.3万\n | \n      11.6万\n | 2.7万\n  | 7776\n  | 文字版菜谱在视频末尾(*￣ω￣) 日更微博@绵羊料理\n微信公众号：绵羊料理\n油管同步更新... | 街头美食探店美食搞笑美食美食侦探\n          人生百味挑战\n        \n... | NaN    | 5102000.0  |
| 42354 | 活动作品东北神级甜品！本以为是鸡蛋，咬一口爆浆了...... | 458.2万播放 · | 2.9万弹幕 | 2020/11/5 18:30  | 盗月社食遇记 | 59.0万\n | \n      27.0万\n | 5.5万\n  | 1.8万\n | 这口感，也太神奇了！爱了爱了！                               | 甜点吃货美食搞笑美食美食侦探\n          甜味接力\n        \n    ... | NaN    | 4582000.0  |

In [53]:

```
video_counts=dict(zip(data['标题'],data['play_count']))
top_videos=sorted(video_counts.items(),key=lambda x:x[1],reverse=False)[-10:]
top_videos
```

Out[53]:

```
[('一辈子没吃过自热米饭，花18元买盒到工地吃，牛肉太少了呀！', 4240000.0),
 ('活动作品湖南妹子挑战山西最辣面条，这一次...', 4439000.0),
 ('活动作品暗访外卖评分最低的实体店铺，最后我把它给举报了，不能忍！', 4477000.0),
 ('活动作品东北菜量有多大？12元一盆4人吃撑，南方人沉默了😳', 4540000.0),
 ('活动作品当把鸡交给东北人，骨头都给你做香了！连啃3只贼拉带劲✌️', 4578000.0),
 ('活动作品东北神级甜品！本以为是鸡蛋，咬一口爆浆了......', 4582000.0),
 ('活动作品好的食材，往往只需要最复杂的处理...', 5102000.0),
 ('爷青回！炭烤8988元一只巨型皇帝蟹！不愧是蟹中帝皇！', 6072000.0),
 ('活动作品冬天吃日式烤和牛，我的心是暖暖的，你呢？', 6570000.0),
 ('【罗翔】第一次吃螺狮粉，感谢“罗师粉”们的支持与鼓励', 6839000.0)]
```

In [54]:

```
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker
x_data = [x[0] for x in top_videos]
y_data =  [y[1] for y in top_videos]
c = (
    Bar()
    .add_xaxis(x_data)
    .add_yaxis("视频播放量", y_data, category_gap="60%")
    .set_series_opts(
        itemstyle_opts={
            "normal": {
                "color": JsCode(
                    """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 244, 255, 1)'
            }, {
                offset: 1,
                color: 'rgba(0, 77, 167, 1)'
            }], false)"""
                ),
                "barBorderRadius": [30, 30, 30, 30],
                "shadowColor": "rgb(0, 160, 221)",
            }
        }
    )
    .set_global_opts(
        xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=-10)),
        title_opts=opts.TitleOpts(title="播放数量最多的10个视频"))
    # .render("bar_border_radius.html")
)

grid=Grid()
# 仅使用pos_top修改相对顶部的位置
# grid.add(c,grid_opts=opts.GridOpts(pos_bottom="50%"))

c.render_notebook()
grid=Grid()
# 仅使用pos_top修改相对顶部的位置
grid.add(c,grid_opts=opts.GridOpts(pos_bottom="20%"))
grid.render_notebook()
```

Out[54]:

### 投币最多的视频[¶](#投币最多的视频)

In [55]:

```
data['coin_count']=data['金币数'].apply(lambda x:get_nums(str(x))).astype("float")
data['coin_count'].describe()
```

Out[55]:

```
count     25544.000000
mean        871.373121
std        7432.512798
min           0.000000
25%           1.000000
50%          40.000000
75%         287.000000
max      607000.000000
Name: coin_count, dtype: float64
```

In [56]:

```
# 按照总播放数从大到小排序
data=data.sort_values(by='coin_count',ascending=False)
```

In [57]:

```
video_counts=dict(zip(data['标题'],data['coin_count']))
top_videos=sorted(video_counts.items(),key=lambda x:x[1],reverse=False)[-10:]
top_videos
```

Out[57]:

```
[('活动作品东北菜量有多大？12元一盆4人吃撑，南方人沉默了😳', 178000.0),
 ('活动作品【王师傅】用40万账单同款大黄鱼招待全网千万UP主王老菊！！', 202000.0),
 ('活动作品中国最便宜的串串？20块钱100串，10种蘸料无限吃！', 222000.0),
 ('一辈子没吃过自热米饭，花18元买盒到工地吃，牛肉太少了呀！', 223000.0),
 ('活动作品当把鸡交给东北人，骨头都给你做香了！连啃3只贼拉带劲✌️', 229000.0),
 ('活动作品东北竟用泥巴烤肉？灵魂蘸料吃法，外地人懵了…', 235000.0),
 ('活动作品东北神级甜品！本以为是鸡蛋，咬一口爆浆了......', 270000.0),
 ('活动作品“你们不要再这样吃面了！这样只会饿死我！”', 289000.0),
 ('爷青回！炭烤8988元一只巨型皇帝蟹！不愧是蟹中帝皇！', 342000.0),
 ('活动作品冬天吃日式烤和牛，我的心是暖暖的，你呢？', 607000.0)]
```

In [58]:

```
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.charts import Bar,Grid
from pyecharts.faker import Faker
x_data = [x[0] for x in top_videos]
y_data =  [y[1] for y in top_videos]
c = (

    Bar()
    .add_xaxis(x_data)
    .add_yaxis("视频投币数", y_data)
    .reversal_axis()
    .set_series_opts(label_opts=opts.LabelOpts(position="right"))
    .set_global_opts(title_opts=opts.TitleOpts(title="视频投币数"))
    # .render("bar_reversal_axis.html")
)
grid=Grid()
# 仅使用pos_top修改相对顶部的位置
grid.add(c,grid_opts=opts.GridOpts(pos_left="40%"))
grid.render_notebook()
```

Out[58]:

## ④ 美食视频的热门标签是什么？哪些标签的视频更容易火？[¶](#④-美食视频的热门标签是什么？哪些标签的视频更容易火？)

In [59]:

```
!pip uninstall plotly cufflinks -y
!pip install plotly -i  https://pypi.tuna.tsinghua.edu.cn/simple
!pip install cufflinks -i https://pypi.tuna.tsinghua.edu.cn/simple
WARNING: Skipping plotly as it is not installed.
WARNING: Skipping cufflinks as it is not installed.
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting plotly
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/1f/f6/bd3c17c8003b6641df1228e80e1acac97ed8402635e46c2571f8e1ef63af/plotly-4.14.3-py2.py3-none-any.whl (13.2 MB)
     |████████████████████████████████| 13.2 MB 307 kB/s eta 0:00:01     |████████████████████████████▊   | 11.8 MB 307 kB/s eta 0:00:05
Requirement already satisfied: six in /opt/conda/lib/python3.8/site-packages (from plotly) (1.15.0)
Collecting retrying>=1.3.3
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/44/ef/beae4b4ef80902f22e3af073397f079c96969c69b2c7d52a57ea9ae61c9d/retrying-1.3.3.tar.gz (10 kB)
Building wheels for collected packages: retrying
  Building wheel for retrying (setup.py) ... done
  Created wheel for retrying: filename=retrying-1.3.3-py3-none-any.whl size=11429 sha256=8681f863ed17122375767db72b7f963c3b6250a09a77cd83e834013ca73887eb
  Stored in directory: /home/kesci/.cache/pip/wheels/fd/5f/26/2a74eb0944a15671ce276a02eb1520cd617b5e3b3d8623786d
Successfully built retrying
Installing collected packages: retrying, plotly
Successfully installed plotly-4.14.3 retrying-1.3.3
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
Collecting cufflinks
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/1a/18/4d32edaaf31ba4af9745dac676c4a28c48d3fc539000c29e855bd8db3b86/cufflinks-0.17.3.tar.gz (81 kB)
     |████████████████████████████████| 81 kB 1.1 MB/s eta 0:00:011
Requirement already satisfied: numpy>=1.9.2 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (1.19.1)
Requirement already satisfied: pandas>=0.19.2 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (1.1.1)
Requirement already satisfied: plotly>=4.1.1 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (4.14.3)
Requirement already satisfied: six>=1.9.0 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (1.15.0)
Collecting colorlover>=0.2.1
  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/9a/53/f696e4480b1d1de3b1523991dea71cf417c8b19fe70c704da164f3f90972/colorlover-0.3.0-py3-none-any.whl (8.9 kB)
Requirement already satisfied: setuptools>=34.4.1 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (49.6.0.post20200814)
Requirement already satisfied: ipython>=5.3.0 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (7.17.0)
Requirement already satisfied: ipywidgets>=7.0.0 in /opt/conda/lib/python3.8/site-packages (from cufflinks) (7.5.1)
Requirement already satisfied: pytz>=2017.2 in /opt/conda/lib/python3.8/site-packages (from pandas>=0.19.2->cufflinks) (2020.1)
Requirement already satisfied: python-dateutil>=2.7.3 in /opt/conda/lib/python3.8/site-packages (from pandas>=0.19.2->cufflinks) (2.8.1)
Requirement already satisfied: retrying>=1.3.3 in /opt/conda/lib/python3.8/site-packages (from plotly>=4.1.1->cufflinks) (1.3.3)
Requirement already satisfied: backcall in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (0.2.0)
Requirement already satisfied: pickleshare in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (0.7.5)
Requirement already satisfied: jedi>=0.10 in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (0.17.2)
Requirement already satisfied: traitlets>=4.2 in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (4.3.3)
Requirement already satisfied: decorator in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (4.4.2)
Requirement already satisfied: prompt-toolkit!=3.0.0,!=3.0.1,<3.1.0,>=2.0.0 in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (3.0.6)
Requirement already satisfied: pygments in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (2.6.1)
Requirement already satisfied: pexpect; sys_platform != "win32" in /opt/conda/lib/python3.8/site-packages (from ipython>=5.3.0->cufflinks) (4.8.0)
Requirement already satisfied: nbformat>=4.2.0 in /opt/conda/lib/python3.8/site-packages (from ipywidgets>=7.0.0->cufflinks) (5.0.7)
Requirement already satisfied: widgetsnbextension~=3.5.0 in /opt/conda/lib/python3.8/site-packages (from ipywidgets>=7.0.0->cufflinks) (3.5.1)
Requirement already satisfied: ipykernel>=4.5.1 in /opt/conda/lib/python3.8/site-packages (from ipywidgets>=7.0.0->cufflinks) (5.3.4)
Requirement already satisfied: parso<0.8.0,>=0.7.0 in /opt/conda/lib/python3.8/site-packages (from jedi>=0.10->ipython>=5.3.0->cufflinks) (0.7.1)
Requirement already satisfied: ipython-genutils in /opt/conda/lib/python3.8/site-packages (from traitlets>=4.2->ipython>=5.3.0->cufflinks) (0.2.0)
Requirement already satisfied: wcwidth in /opt/conda/lib/python3.8/site-packages (from prompt-toolkit!=3.0.0,!=3.0.1,<3.1.0,>=2.0.0->ipython>=5.3.0->cufflinks) (0.2.5)
Requirement already satisfied: ptyprocess>=0.5 in /opt/conda/lib/python3.8/site-packages (from pexpect; sys_platform != "win32"->ipython>=5.3.0->cufflinks) (0.6.0)
Requirement already satisfied: jupyter-core in /opt/conda/lib/python3.8/site-packages (from nbformat>=4.2.0->ipywidgets>=7.0.0->cufflinks) (4.6.3)
Requirement already satisfied: jsonschema!=2.5.0,>=2.4 in /opt/conda/lib/python3.8/site-packages (from nbformat>=4.2.0->ipywidgets>=7.0.0->cufflinks) (3.2.0)
Requirement already satisfied: notebook>=4.4.1 in /opt/conda/lib/python3.8/site-packages (from widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (6.1.3)
Requirement already satisfied: jupyter-client in /opt/conda/lib/python3.8/site-packages (from ipykernel>=4.5.1->ipywidgets>=7.0.0->cufflinks) (6.1.6)
Requirement already satisfied: tornado>=4.2 in /opt/conda/lib/python3.8/site-packages (from ipykernel>=4.5.1->ipywidgets>=7.0.0->cufflinks) (6.0.4)
Requirement already satisfied: attrs>=17.4.0 in /opt/conda/lib/python3.8/site-packages (from jsonschema!=2.5.0,>=2.4->nbformat>=4.2.0->ipywidgets>=7.0.0->cufflinks) (20.1.0)
Requirement already satisfied: pyrsistent>=0.14.0 in /opt/conda/lib/python3.8/site-packages (from jsonschema!=2.5.0,>=2.4->nbformat>=4.2.0->ipywidgets>=7.0.0->cufflinks) (0.16.0)
Requirement already satisfied: prometheus-client in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.8.0)
Requirement already satisfied: jinja2 in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (2.11.2)
Requirement already satisfied: Send2Trash in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (1.5.0)
Requirement already satisfied: pyzmq>=17 in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (19.0.2)
Requirement already satisfied: terminado>=0.8.3 in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.8.3)
Requirement already satisfied: argon2-cffi in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (20.1.0)
Requirement already satisfied: nbconvert in /opt/conda/lib/python3.8/site-packages (from notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (5.6.1)
Requirement already satisfied: MarkupSafe>=0.23 in /opt/conda/lib/python3.8/site-packages (from jinja2->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (1.1.1)
Requirement already satisfied: cffi>=1.0.0 in /opt/conda/lib/python3.8/site-packages (from argon2-cffi->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (1.14.1)
Requirement already satisfied: pandocfilters>=1.4.1 in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (1.4.2)
Requirement already satisfied: testpath in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.4.4)
Requirement already satisfied: bleach in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (3.1.5)
Requirement already satisfied: defusedxml in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.6.0)
Requirement already satisfied: mistune<2,>=0.8.1 in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.8.4)
Requirement already satisfied: entrypoints>=0.2.2 in /opt/conda/lib/python3.8/site-packages (from nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.3)
Requirement already satisfied: pycparser in /opt/conda/lib/python3.8/site-packages (from cffi>=1.0.0->argon2-cffi->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (2.20)
Requirement already satisfied: packaging in /opt/conda/lib/python3.8/site-packages (from bleach->nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (20.4)
Requirement already satisfied: webencodings in /opt/conda/lib/python3.8/site-packages (from bleach->nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (0.5.1)
Requirement already satisfied: pyparsing>=2.0.2 in /opt/conda/lib/python3.8/site-packages (from packaging->bleach->nbconvert->notebook>=4.4.1->widgetsnbextension~=3.5.0->ipywidgets>=7.0.0->cufflinks) (2.4.7)
Building wheels for collected packages: cufflinks
  Building wheel for cufflinks (setup.py) ... done
  Created wheel for cufflinks: filename=cufflinks-0.17.3-py3-none-any.whl size=67921 sha256=6db9e6a2da1557befb21ab74d1fc543e8aec522117041206b69dce938ca374b8
  Stored in directory: /home/kesci/.cache/pip/wheels/b8/dc/4a/ee6a2005fc8f8837ea81546193ef51303fa08acb51f9e7f271
Successfully built cufflinks
Installing collected packages: colorlover, cufflinks
Successfully installed colorlover-0.3.0 cufflinks-0.17.3
```

In [60]:

```
from plotly import tools
import plotly.graph_objs as go
from plotly.offline import iplot
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
%matplotlib inline

from matplotlib import rcParams
import seaborn as sns
from plotly import tools
import plotly.graph_objs as go
from plotly.offline import iplot
%matplotlib inline
plt.rcParams['figure.figsize'] = [10, 5]
import cufflinks as cf
cf.go_offline()
cf.set_config_file(offline=False, world_readable=True)
```



### 标签的热点词[¶](#标签的热点词)

In [61]:

```
# 从标签中获取top-n个词
def get_top_n_words(corpus, n=None):
    vec = CountVectorizer().fit(corpus)
    bag_of_words = vec.transform(corpus)
    sum_words = bag_of_words.sum(axis=0) 
    words_freq = [(word, sum_words[0, idx]) for word, idx in vec.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], reverse=True)
    return words_freq[:n]

#从标签中获取出现次数最多的20个词
common_words = get_top_n_words(tag_texts, 20)

#打印词语与词频
for word, freq in common_words:
    print(word, freq)

#构建词语与词频的dataframe
df1 = pd.DataFrame(common_words, columns = ['word' , 'count'])

#对每个词语所有的词频进行累加并展示
df1.groupby('word').sum()['count'].sort_values(ascending=False).iplot(
    kind='bar', yTitle='Count', linecolor='black', title='视频标签中的Top 20个词')
美食 197577
制作 30706
vlog 19669
挑战 15382
打卡 13018
侦探 11737
田园 11313
测评 11232
记录 10449
生活 10019
人生 8873
百味 8872
探店 8818
农村 8503
年度 7161
料理 7150
家常菜 6601
教程 6340
创作 6086
吃货 5740
```

美食制作vlog挑战打卡侦探田园测评记录生活人生百味探店农村年度料理家常菜教程创作吃货050k100k150k200kExport to plot.ly »

视频标签中的Top 20个词Count













### 标签的热点词语[¶](#标签的热点词语)

In [62]:

```
# 获取top-k的bigra词组
def get_top_n_bigram(corpus, n=None):
    vec = CountVectorizer(ngram_range=(2, 2)).fit(corpus)
    bag_of_words = vec.transform(corpus)
    sum_words = bag_of_words.sum(axis=0) 
    words_freq = [(word, sum_words[0, idx]) for word, idx in vec.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], reverse=True)
    return words_freq[:n]

#从标签中获取出现次数最多的20个词
common_words = get_top_n_bigram(tag_texts, 20)

#打印词语与词频
for word, freq in common_words:
    print(word, freq)
    
#构建词语与词频的dataframe
df2 = pd.DataFrame(common_words, columns = ['word' , 'count'])

#对每个词语所有的词频进行累加并展示
df2.groupby('word').sum()['count'].sort_values(ascending=False).iplot(
    kind='bar', yTitle='Count', linecolor='black', title='视频标签中的Top 20个bigrams')
美食 美食 87290
美食 制作 19892
美食 vlog 15543
打卡 挑战 12924
美食 侦探 11731
美食 田园 9418
田园 美食 9131
人生 百味 8861
美食 测评 8176
百味 年度 7131
年度 美食 7131
农村 美食 6622
料理 制作 6139
美食 记录 5861
制作 教程 5833
制作 美食 5661
吃货 美食 5122
美食 探店 4860
厨艺 美食 4478
制作 人生 4118
```

美食 美食美食 制作美食 vlog打卡 挑战美食 侦探美食 田园田园 美食人生 百味美食 测评年度 美食百味 年度农村 美食料理 制作美食 记录制作 教程制作 美食吃货 美食美食 探店厨艺 美食制作 人生010k20k30k40k50k60k70k80k90kExport to plot.ly »

视频标签中的Top 20个bigramsCount













### 标签的热点短语[¶](#标签的热点短语)

In [63]:

```
def get_top_n_trigram(corpus, n=None):
    vec = CountVectorizer(ngram_range=(3, 3), stop_words='english').fit(corpus)
    bag_of_words = vec.transform(corpus)
    sum_words = bag_of_words.sum(axis=0) 
    words_freq = [(word, sum_words[0, idx]) for word, idx in vec.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], reverse=True)
    return words_freq[:n]

common_words = get_top_n_trigram(tag_texts, 20)

for word, freq in common_words:
    print(word, freq)

#构建词语与词频的dataframe
df3 = pd.DataFrame(common_words, columns = ['word' , 'count'])

#对每个词语所有的词频进行累加并展示
df3.groupby('word').sum()['count'].sort_values(ascending=False).iplot(
    kind='bar', yTitle='Count', linecolor='black', title='视频标签中的Top 20个trigrams')
美食 美食 美食 36312
美食 美食 制作 18082
美食 田园 美食 9048
美食 美食 田园 8722
美食 美食 侦探 7665
美食 美食 测评 7253
人生 百味 年度 7131
百味 年度 美食 7130
美食 美食 记录 5729
厨艺 美食 美食 4437
吃货 美食 美食 4433
制作 美食 vlog 4237
美食 制作 人生 4118
制作 人生 百味 4118
创作 美食 美食 3871
美食 侦探 悬赏 3818
美食 制作 美食 3797
农村 美食 美食 3477
制作 制作 教程 3036
探店 美食 美食 2665
```

美食 美食 美食美食 美食 制作美食 田园 美食美食 美食 田园美食 美食 侦探美食 美食 测评人生 百味 年度百味 年度 美食美食 美食 记录厨艺 美食 美食吃货 美食 美食制作 美食 vlog美食 制作 人生制作 人生 百味创作 美食 美食美食 侦探 悬赏美食 制作 美食农村 美食 美食制作 制作 教程探店 美食 美食05k10k15k20k25k30k35kExport to plot.ly »

视频标签中的Top 20个trigramsCount













从上面视频美食标签的中，我们可以得到一些常见的词语或者词组：

- 视频标签的基础词汇：`美食`,`制作`,`vlog`,`挑战`,`打卡`,`年度`,`农村`等  
- 视频标签的常用词组：`美食 制作`,`打卡 挑战`,`年度 美食`,`农村 美食`,`制作 教程`  

In [ ]:

```

```

## ⑤ 高浏览量的视频的财富密码是（标题关键词？发布时间？）[¶](#⑤-高浏览量的视频的财富密码是（标题关键词？发布时间？）)

我们按照浏览量 从大到小 进行排序

In [64]:

```
data=data.sort_values(by='play_count',ascending=False)
data.head(3)
```

Out[64]:

|       | 标题                                               | 总播放数      | 总弹幕数  | 发布时间         | 发布者     | 点赞数   | 金币数           | 收藏量   | 分享数  | 视频介绍                                                   | 标签                                                         | 评论数 | play_count | coin_count |
| ----- | -------------------------------------------------- | ------------- | --------- | ---------------- | ---------- | -------- | ---------------- | -------- | ------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------ | ---------- | ---------- |
| 32544 | 【罗翔】第一次吃螺狮粉，感谢“罗师粉”们的支持与鼓励 | 683.9万播放 · | 7.8万弹幕 | 2020/10/26 17:00 | 罗翔说刑法 | 71.0万\n | \n      17.4万\n | 4.7万\n  | 2.9万\n | 之前一直听说螺狮粉，今天第一次吃螺狮粉，到底是什么味道呢？ | 罗翔美食美食美食测评\n          螺狮粉\n        \n         ... | NaN    | 6839000.0  | 174000.0   |
| 37694 | 活动作品冬天吃日式烤和牛，我的心是暖暖的，你呢？   | 657.0万播放 · | 8.6万弹幕 | 2020/12/4 20:09  | 食贫道     | 63.4万\n | \n      60.7万\n | 23.2万\n | 9.1万\n | -                                                          | 日本料理探店美食美食美食侦探\n          日常\n        \n      ... | NaN    | 6570000.0  | 607000.0   |
| 32545 | 爷青回！炭烤8988元一只巨型皇帝蟹！不愧是蟹中帝皇！ | 607.2万播放 · | 4.8万弹幕 | 2020/10/2 18:00  | NaN        | 45.6万\n | \n      34.2万\n | 4.7万\n  | 2.6万\n | 皇帝蟹的钳子被我掰断了没法抽奖了，要不抽个安慕希吧（       | 烧烤海鲜试吃美食搞笑美食美食测评\n          测评\n        \n    ... | NaN    | 6072000.0  | 342000.0   |

In [65]:

```
data.shape
```

Out[65]:

```
(25544, 14)
```

为了有效分析高浏览量的视频的财富密码，我们基于浏览量次数排名前1000的文章进行关键词和时间分析

In [66]:

```
top1000_videos=data.iloc[0:1000,:]
```

In [67]:

```
# https://www.kaggle.com/benroshan/fake-news-classifier-lstm
```

In [68]:

```
top1000_videos['play_count'].describe()
```

Out[68]:

```
count    1.000000e+03
mean     7.424120e+05
std      7.035062e+05
min      2.950000e+05
25%      3.770000e+05
50%      5.035000e+05
75%      7.922500e+05
max      6.839000e+06
Name: play_count, dtype: float64
```

In [69]:

```
# top1000_videos=top1000_videos.dropna()
top1000_videos.shape
```

Out[69]:

```
(1000, 14)
```

### 基于Tfidf关键词提取[¶](#基于Tfidf关键词提取)

In [70]:

```
import jieba.analyse
from collections import Counter
food_stop_words=['作品','美食','美味','人','味道','学会','教程',
    '锅','配方','营养','家常','早餐','家人','工人','小吃','大厨',
    '大家','食谱','技巧','日记','企时','方法','孩子','懒人',
    '正宗','厨房','手','饭','饭店','过瘾','农村']
food_stop_words2=['视频','食材','口感','物','评论','时间','西施',
'朋友','油管','手工','菜','农村']
food_stop_words3=['原','博','时候','小伙伴',
'一键','记录','家庭','技术','文化','减脂',
'教学','小时','材料','量','天']

keywords=[]

for title in top1000_videos['标题']:
    keywords_top=jieba.analyse.extract_tags(title,topK=3)
    # print(keywords_top)
    keywords.extend(keywords_top)

keywords_cnt=Counter(keywords)
len(keywords_cnt)
top50_keywords=keywords_cnt.most_common(50)
top50_keywords[:10]
```

Out[70]:

```
[('作品', 51),
 ('探店', 37),
 ('10', 35),
 ('试吃', 32),
 ('赶海', 20),
 ('50', 20),
 ('30', 18),
 ('华农', 17),
 ('泡面', 16),
 ('20', 15)]
```

In [71]:

```
#构建词语与词频的dataframe
df3 = pd.DataFrame(top50_keywords, columns = ['word' , 'count'])

#对每个词语所有的词频进行累加并展示
df3.groupby('word').sum()['count'].sort_values(ascending=False).iplot(
    kind='bar', yTitle='Count', linecolor='black', title='Tf-Idf标题关键词')
```

作品探店10试吃赶海5030华农泡面20小哥炸鸡老外米其林100路边摊活动帅小伙...火锅外卖打卡牛肉退潮牛排早餐Hamzy大闸蟹好吃100012吃火锅15自助餐过瘾2000网红3000零食大齐烤肉胖龙25700无广18兄弟赚大拉面sao01020304050Export to plot.ly »

Tf-Idf标题关键词Count













### 基于TextRank关键词提取[¶](#基于TextRank关键词提取)

In [72]:

```
keywords=[]
for title in top1000_videos['标题']:
    keywords_top=jieba.analyse.textrank(title, topK=3, withWeight=False, allowPOS=('ns','n','vn','v')) 
    # print(keywords_top)
    keywords.extend(keywords_top)

keywords_cnt=Counter(keywords)
len(keywords_cnt)
top50_keywords=keywords_cnt.most_common(50)
print(top50_keywords[:10])
#构建词语与词频的dataframe
df3 = pd.DataFrame(top50_keywords, columns = ['word' , 'count'])

#对每个词语所有的词频进行累加并展示
df3.groupby('word').sum()['count'].sort_values(ascending=False).iplot(
    kind='bar', yTitle='Count', linecolor='black', title='TextRank标题关键词')
[('活动', 344), ('作品', 270), ('试吃', 22), ('火锅', 21), ('兄弟', 18), ('重庆', 17), ('牛肉', 16), ('顶级', 16), ('探店', 16), ('退潮', 16)]
```

活动作品试吃火锅兄弟重庆牛肉顶级探店退潮美食妹子早餐零食赶海老板老外海鲜大庆餐厅自助挑战牛排炸鸡还有螃蟹西安好吃贵州日本路边摊烤肉过瘾小时成都中国拉面新疆小哥泡面四川发现北京长沙限量羊肉排队杭州大海英国050100150200250300350Export to plot.ly »

TextRank标题关键词Count













我们从上面可以发现什么：

- 首先可以知道在浏览量前1000的文章中浏览量分布，其中浏览量最大值为6839000（680万+），最小值295000（29万+）,平均值为 742412（74万+），说明这些视频浏览数量都是很高的也比较具有代表性  
- 其次我们通过两种方式：Tfidf和Textrank算法提取标题关键词为：`活动`,`作品`,`试吃`,`牛肉`,`拉面`,等
- 其次不少标题中出现了数字，我们看看还有数字的标题有哪些：从下面可以看出播放量1000的文章标题中约有43.8%的包含了数字,大多数代表了没试的价格，看来吃货们不仅关心是否好吃，同时还关心是否实惠，**明码标价是最好的宣传方式**

In [73]:

```
top1000_videos[top1000_videos['标题'].str.contains(r'\d+', regex=True)].shape
```

Out[73]:

```
(438, 14)
```

In [74]:

```
top1000_videos[top1000_videos['标题'].str.contains(r'\d+', regex=True)].head()
```

Out[74]:

|       | 标题                                                         | 总播放数      | 总弹幕数  | 发布时间         | 发布者       | 点赞数   | 金币数           | 收藏量  | 分享数  | 视频介绍                                                     | 标签                                                         | 评论数 | play_count | coin_count |
| ----- | ------------------------------------------------------------ | ------------- | --------- | ---------------- | ------------ | -------- | ---------------- | ------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ | ---------- | ---------- |
| 32545 | 爷青回！炭烤8988元一只巨型皇帝蟹！不愧是蟹中帝皇！           | 607.2万播放 · | 4.8万弹幕 | 2020/10/2 18:00  | NaN          | 45.6万\n | \n      34.2万\n | 4.7万\n | 2.6万\n | 皇帝蟹的钳子被我掰断了没法抽奖了，要不抽个安慕希吧（         | 烧烤海鲜试吃美食搞笑美食美食测评\n          测评\n        \n    ... | NaN    | 6072000.0  | 342000.0   |
| 37696 | 活动作品当把鸡交给东北人，骨头都给你做香了！连啃3只贼拉带劲✌️ | 457.8万播放 · | 1.8万弹幕 | 2020/11/1 19:00  | 盗月社食遇记 | 42.4万\n | \n      22.9万\n | 4.8万\n | 3.6万\n | 沈阳老雪闷倒驴？我沐上直接问老板要了6瓶！                    | 夜宵烧烤美食侦探探店吃货美食美食美食侦探\n          人生百味挑战\n      ... | NaN    | 4578000.0  | 229000.0   |
| 37698 | 活动作品东北菜量有多大？12元一盆4人吃撑，南方人沉默了😳       | 454.0万播放 · | 3.5万弹幕 | 2020/10/24 20:18 | 盗月社食遇记 | 30.2万\n | \n      17.8万\n | 4.4万\n | 5.2万\n | 朋友推荐的东北神店，究竟有多神？                             | 美食侦探探店吃货美食搞笑美食美食侦探\n          B站美食大侦探悬赏令\n    ... | NaN    | 4540000.0  | 178000.0   |
| 22483 | 一辈子没吃过自热米饭，花18元买盒到工地吃，牛肉太少了呀！     | 424.0万播放 · | 1.3万弹幕 | 2020/11/15 12:10 | 农民工川哥   | 38.1万\n | \n      22.3万\n | 3.4万\n | 1.2万\n | 川哥还是第一次吃自热米饭，方便是挺方便的，味道也可以，但里面牛肉有些少，就很小几个，有些亏。... | 美食美食美食记录\n          工地吃饭\n        \n          ... | NaN    | 4240000.0  | 223000.0   |
| 37700 | 活动作品中国最便宜的串串？20块钱100串，10种蘸料无限吃！      | 343.0万播放 · | 2.6万弹幕 | 2020/12/8 18:18  | 盗月社食遇记 | 35.8万\n | \n      22.2万\n | 4.8万\n | 2.2万\n | 活了18年，才发现，原来20块钱能买100个串！我吃吃吃吃吃        | 夜宵试吃美食美食美食侦探\n          为热爱去夺冠\n        \n    ... | NaN    | 3430000.0  | 222000.0   |

### 发布时间探索[¶](#发布时间探索)

In [75]:

```
# 将时间字符串转为时间格式
top1000_videos['time']=pd.to_datetime(top1000_videos['发布时间'])
top1000_videos['year']=top1000_videos['time'].dt.year.astype('Int64')
top1000_videos['month']=top1000_videos['time'].dt.month.astype('Int64')
top1000_videos['day']=top1000_videos['time'].dt.day.astype('Int64')
top1000_videos['hour']=top1000_videos['time'].dt.hour.astype('Int64')
top1000_videos['weekday']=top1000_videos['time'].dt.weekday.astype('Int64')+1
weekday_map={1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六',7:'周日'}
top1000_videos['weekday']=top1000_videos['weekday'].apply(lambda x:weekday_map[x] if x in weekday_map else '周一')
top1000_videos.head(2)
```

Out[75]:

|       | 标题                                               | 总播放数      | 总弹幕数  | 发布时间         | 发布者     | 点赞数   | 金币数           | 收藏量   | 分享数  | 视频介绍                                                   | 标签                                                         | 评论数 | play_count | coin_count | time                | year | month | day  | hour | weekday |
| ----- | -------------------------------------------------- | ------------- | --------- | ---------------- | ---------- | -------- | ---------------- | -------- | ------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------ | ---------- | ---------- | ------------------- | ---- | ----- | ---- | ---- | ------- |
| 32544 | 【罗翔】第一次吃螺狮粉，感谢“罗师粉”们的支持与鼓励 | 683.9万播放 · | 7.8万弹幕 | 2020/10/26 17:00 | 罗翔说刑法 | 71.0万\n | \n      17.4万\n | 4.7万\n  | 2.9万\n | 之前一直听说螺狮粉，今天第一次吃螺狮粉，到底是什么味道呢？ | 罗翔美食美食美食测评\n          螺狮粉\n        \n         ... | NaN    | 6839000.0  | 174000.0   | 2020-10-26 17:00:00 | 2020 | 10    | 26   | 17   | 周一    |
| 37694 | 活动作品冬天吃日式烤和牛，我的心是暖暖的，你呢？   | 657.0万播放 · | 8.6万弹幕 | 2020/12/4 20:09  | 食贫道     | 63.4万\n | \n      60.7万\n | 23.2万\n | 9.1万\n | -                                                          | 日本料理探店美食美食美食侦探\n          日常\n        \n      ... | NaN    | 6570000.0  | 607000.0   | 2020-12-04 20:09:00 | 2020 | 12    | 4    | 20   | 周五    |

- 每周热门视频发布规律  

In [76]:

```
values = top1000_videos['weekday'].value_counts(dropna=False).keys().tolist()
counts = top1000_videos['weekday'].value_counts(dropna=False).tolist()
weekday_counts = dict(zip(values, counts))
print(weekday_counts)
{'周五': 173, '周三': 147, '周日': 145, '周二': 140, '周一': 140, '周六': 136, '周四': 119}
```

In [77]:

```
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker

c = (
    Pie()
    .add(
        "",
        [list(z) for z in zip(weekday_counts.keys(), weekday_counts.values())],
        radius=["40%", "75%"],
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="每周热门视频的发布数据分布"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_top="15%", pos_left="2%"),
    )
    .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
    # .render("pie_radius.html")
)
c.render_notebook()
```

Out[77]:

我们可以看出其实每周热门视频发布比例还是比较均匀的，但是有意思的现象是：周五发布的最多，其次是周三 周日和周一，奇数排在了前面，大家也可以验证下更多的视频

- 小时粒度的热门视频分布  

In [78]:

```
top1000_videos['hour']=top1000_videos['hour'].astype(str)
values = top1000_videos['hour'].value_counts(dropna=False).keys().tolist()
counts = top1000_videos['hour'].value_counts(dropna=False).tolist()
hour_counts = dict(zip(values, counts))
hour_counts
```

Out[78]:

```
{'18': 294,
 '17': 198,
 '19': 102,
 '11': 93,
 '16': 84,
 '12': 51,
 '20': 46,
 '15': 23,
 '21': 19,
 '14': 18,
 '10': 18,
 '22': 14,
 '9': 8,
 '0': 6,
 '8': 6,
 '23': 5,
 '13': 5,
 '1': 4,
 '6': 2,
 '7': 2,
 '<NA>': 1,
 '5': 1}
```

In [79]:

```
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker

c = (
    Pie()
    .add(
        "",
        [list(z) for z in zip(hour_counts.keys(), hour_counts.values())],
        radius=["40%", "75%"],
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="视频发布时刻-小时分布"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_top="15%", pos_left="2%"),
    )
    .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
    # .render("pie_radius.html")
)
c.render_notebook()
```

Out[79]:

从上图可以看出，热门视频集中在中午（11点）、傍晚：16-19点区间，是不是都是在饭店左右哈哈？

In [ ]:

```

```