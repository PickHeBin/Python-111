## 什么时候使用KNN算法?

- KNN既可用于分类问题，也可用于回归预测问题。然而，它更广泛地应用于行业的分类问题。为了评估任何一种技术，我们通常会考虑三个重要方面:
  1. 易于解释输出
  2. 计算时间
  3. 预测能力
- 举个栗子来说明KNN的重要性:

![Image Name](https://cdn.kesci.com/upload/image/pkhre9mr0t.png?imageView2/0/w/960/h/960)

- KNN算法遍历所有需要考虑的参数。该方法解释简单，计算时间短，应用广泛。

## KNN算法是如何工作的?

让我们用一个简单的例子来理解这个算法。下面是一些红色圆圈（RC）和绿色方块（GS）:

![Image Name](https://cdn.kesci.com/upload/image/pkhric4td.png?imageView2/0/w/600/h/600)

现在我们打算找出蓝色星星（BS）属于哪一类。BS既可以属于RC类也可以属于GS类，也可以不属于任何一类。K是KNN算法是我们想要找出的最近的邻近点的个数。假设K = 3。因此，我们现在要做一个以BS为中心的圆，它和平面上的三个数据点一样大。详见下图:
![Image Name](https://cdn.kesci.com/upload/image/pkhrjwg3cy.png?imageView2/0/w/600/h/600)

离BS最近的三个点都是RC。因此，我们可以很有把握地说，BS应该属于RC类。在这里，选择变得非常明显，因为BS附近最近的三个点全部是RC。

在该算法中，参数K的选择至关重要。接下来我们将了解得出最佳K值需要考虑哪些因素。

## 如何选择参数K?

首先让我们试着理解K在算法中到底有什么影响。如果我们看最后一个例子，假设所有6个training observation都保持不变，在给定的K值下，我们可以确定每个类的边界。这些边界将使RC与GS分离。同样，让我们来看看值“K”对类边界的影响。下面是用K的不同值分隔两个类的不同边界。

![Image Name](https://cdn.kesci.com/upload/image/pkhrmf9jo2.png?imageView2/0/w/500/h/500)

可以发现，随着K值的增加，边界变得愈加平滑。随着K值的增加到无穷大，它最终会变成全蓝或全红，这取决于哪个是大多数。训练错误率和验证错误率是我们需要在不同K值上访问的两个参数。

以下是K值变化的训练错误率曲线:
![Image Name](https://cdn.kesci.com/upload/image/pkhrnl6gig.png?imageView2/0/w/600/h/600)

可以看到，对于训练样本，K=1时的错误率总是零。这是因为与任何训练数据点最接近的点就是它本身。因此，当K=1时，预测总是准确的。如果验证误差曲线也是相似的，那么我们我们选择的K就是1。以下是K值变化的验证误差曲线:
![Image Name](https://cdn.kesci.com/upload/image/pkhrouja6u.png?imageView2/0/w/600/h/600)

现在更加清晰了。在K = 1时，我们过度拟合边界。随着K的逐步增加，错误率最初会降低并达到最小值。在极小值点之后，它随着K的增加而增加。要获得K的最佳值，可以将训练和验证与初始数据集分开。现在绘制验证误差曲线以获得K的最佳值，该K值应该用于所有预测。

## 分解- KNN的实现步骤

我们可以通过以下步骤来实现KNN模型:

- 加载数据
- 初始化k值
- 为了得到预测的类, 从k=1迭代到训练数据点的总数
  - 计算测试数据与每一行训练数据之间的距离。这里我们将使用欧几里得距离作为距离度量，因为它是最常用的方法。其他可以使用的度量是 Chebyshev, cos等。
  - 根据距离值对计算出的距离按升序排序
  - 从排序数组中获取前k行
  - 获得这些行中最频繁的类
  - 返回预测的类

## 核心公式

1. 距离的度量(怎么判断朋友)

   > 对于两个向量(xi,xj),一般使用Lp距离进行计算。 假设特征空间X是n维实数向量空间Rn , 其中,xi,xj∈X,
   > xi=(xi(1),xi(2),…,xi(n)),xj=(xj(1),xj(2),…,xj(n))
   > ，xi，xj的Lp距离定义为:
   >
   > Lp(xi,xj)=(∑l=1n|xi(l)−xj(l)|p)1p
   >
   > 

> 这里的p≥1. 当p=2时候，称为欧氏距离(Euclidean distance), 有
>
> L2(xi,xj)=(∑l=1n|xi(l)−xj(l)|2)12
>
> 
>
> 当p=1时候，称为曼哈顿距离(Manhattan distance), 有
>
> L1(xi,xj)=∑l=1n|xi(l)−xj(l)|
>
> 当
>
> p=∞
>
> 时候，称为极大距离(infty distance), 表示各个坐标的距离最大值， 有
>
> Lp(xi,xj)=maxln|xi(l)−xj(l)|

1. k值的选择

   > kNN中的k是一个超参数，需要我们进行指定，一般情况下这个k和数据有很大关系，都是交叉验证进行选择，但是建议使用交叉验证的时候，k∈[2,20]
   > k∈[2,20], 使用交叉验证得到一个很好的k值。
   > k值还可以表示我们的模型复杂度，当k值越小意味着模型复杂度表达，更容易过拟合，(用极少树的样例来绝对这个预测的结果，很容易产生偏见，这就是过拟合)。我们有这样一句话，k值越大学习的估计误差越小，但是学习的近似误差就会增大.

2. 怎么理解 “k值越大学习的估计误差越小，但是学习的近似误差就会增大”

   > 估计误差表示最后的结果，k值大，集百家所长，更可能得到准确的值，表示估计的准确，则误差就小；但是我们的估计的时候，在学习过程中，使用最相近的k个实例进行估计，每一个值都会和预测的x有一个近似误差，k越大则误差的总和就越大。

### 5. KD树

> kNN，从上述算法中，我们可以看到主要是从训练数据中，知道k个相近实例，但是每次都要便利这个数据集合，主要的问题就是速度慢. 这时候就出现了加速查找的数据结构，其中之一就是kd 树.
>
> - 构造kd 树
>   kd树是一种对k维空间中的实例店进行存储以便能够进行快速检索的数据结构. kd树是一个二叉树，表示对k维空间的一个划分. 构造kd树就是不断用垂直于坐标轴的超平面 (一般用每一个维度的中位数来表示) 将k维空间划分，构成一系列的k维超矩形区域.

- 基于kd树查找最近邻
  构造kd树的目的就是快速查找最近邻和k近邻，这里我们给出二维的列子，这里例子来自与书中和 wiki百科，我尝试说明百这几张图的运行原理.
  数据 T = {(2,3), (5,4), (9,6), (4,7), (8,1), (7,2)}
  构造kd树，二叉树和空间角度的划分图，再次注意每一次用的这个维度对应的所有这个空间中的中位数.

![Image Name](https://cdn.kesci.com/upload/image/pwmrl1zg94.png)

- 二叉树划分图
  根据x维度有{2,4,5,7,8,9}: 中位数是7，因此(7,2)作为根节点，x < 7,在左子树，其他在右子树。依次递归构造左右子树，下一次根据维度y，之后根据维度x. 注意这里的k是维度，n 可能大学k，故要每次对k取余数. （这个k不是kNN中的k）.
  下面的空间划分图，表示空间上的显示格式. 其实整体的搜索是在这个空间上进行的.

![Image Name](https://cdn.kesci.com/upload/image/pwmrmd4dw2.png)

- 空间划分图
  下面用一个gif图来表示搜索最近邻的过程,简单来说就是一句话，根据构造过程，从头到尾左右二分，在这个过程中记录下来最近的点。从这个图中，我们可以看到，我们目标实例target用四角星表示

![Image Name](https://cdn.kesci.com/upload/image/pwmrn3inpo.png)

1. 二叉树搜索，依次到叶子节点D，路劲是A - B - D. 这个过程中最近的点是B，作为最有候选集合.
2. 我们以target为圆心，target到B的距离为半径，画圆，我们发现，B的另外的部分与圆相交，这表示，可能存在更近的候选点在另半部分，如果不存在相交，此时的候选点B就是最近点。
3. 如果存在和其他空间相交，则将搜索空间上升为其父节点，用target和其父节点距离作圆，如果依然和其他空间相交，继续回溯搜索，直到不想交或者全部搜索完毕找到候选点.
4. 上面介绍的是最近邻查找，如何查找k近邻？

使用各最大堆数据结果，维护k大小的最大堆，从根节点开始如果堆的大小不足k，就候选集如果
如果大小为k，就比较堆顶元素和当前元素的距离大小，如果当前小于堆顶距离就进行替换，
之后以堆顶元素为中心，就编程了找最近邻问题。最后返回结果

### 小案例

# K-近邻实现

## 一、概述

k-近邻算法（k-Nearest Neighbour algorithm），又称为KNN算法，是数据挖掘技术中原理最简单的算法。KNN的工作原理：给定一个已知标签类别的训练数据集，输入没有标签的新数据后，在训练数据集中找到与新数据最邻近的k个实例，如果这k个实例的多数属于某个类别，那么新数据就属于这个类别。可以简单理解为：**由那些离X最近的k个点来投票决定X归为哪一类**。

![Image Name](https://cdn.kesci.com/upload/image/qkculv1zty.PNG?imageView2/0/w/960/h/960)
图1
图1中有红色三角和蓝色方块两种类别，我们现在需要判断绿色圆点属于哪种类别
当k=3时，绿色圆点属于红色三角这种类别；
当k=5时，绿色圆点属于蓝色方块这种类别。
举个简单的例子，可以用k-近邻算法分类一个电影是爱情片还是动作片。（打斗镜头和接吻镜头数量为虚构）

![Image Name](https://cdn.kesci.com/upload/image/qkcumq87dj.png?imageView2/0/w/960/h/960)

表1 每部电影的打斗镜头数、接吻镜头数和电影分类

表1就是我们已有的数据集合，也就是训练样本集。这个数据集有两个特征——打斗镜头数和接吻镜头数。除此之
外，我们也知道每部电影的所属类型，即分类标签。粗略看来，接吻镜头多的就是爱情片，打斗镜头多的就是动作
片。以我们多年的经验来看，这个分类还算合理。如果现在给我一部新的电影，告诉我电影中的打斗镜头和接吻镜
头分别是多少，那么我可以根据你给出的信息进行判断，这部电影是属于爱情片还是动作片。而k-近邻算法也可以
像我们人一样做到这一点。但是，这仅仅是两个特征，如果把特征扩大到N个呢？我们人类还能凭经验“一眼看
出”电影的所属类别吗？想想就知道这是一个非常困难的事情，但算法可以，这就是算法的魅力所在。
我们已经知道k-近邻算法的工作原理，根据特征比较，然后提取样本集中特征最相似数据（最近邻）的分类标签。
那么如何进行比较呢？比如表1中新出的电影，我们该如何判断他所属的电影类别呢？如图2所示。

![Image Name](https://cdn.kesci.com/upload/image/qkcun2ri2u.png?imageView2/0/w/960/h/960)

图2 电影分类

我们可以从散点图中大致推断，这个未知电影有可能是爱情片，因为看起来距离已知的三个爱情片更近一点。k-近
邻算法是用什么方法进行判断呢？没错，就是距离度量。这个电影分类例子中有两个特征，也就是在二维平面中计
算两点之间的距离，就可以用我们高中学过的距离计算公式：

![Image Name](https://cdn.kesci.com/upload/image/qkcunoq77d.png?imageView2/0/w/960/h/960)

如果是多个特征扩展到N维空间，怎么计算？没错，我们可以使用欧氏距离（也称欧几里得度量），如下所示

![Image Name](https://cdn.kesci.com/upload/image/qkcuo3p8ft.png?imageView2/0/w/960/h/960)

通过计算可以得到训练集中所有电影与未知电影的距离，如表2所示

![Image Name](https://cdn.kesci.com/upload/image/qkcuofv2ci.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qkcup16f5g.png?imageView2/0/w/960/h/960)

表2 与未知电影的距离计算结果

通过表2的计算结果，我们可以知道绿点标记的电影到爱情片《后来的我们》距离最近，为29.1。如果仅仅根据这
个结果，判定绿点电影的类别为爱情片，这个算法叫做最近邻算法，而非k-近邻算法。k-近邻算法步骤如下：
(1) 计算已知类别数据集中的点与当前点之间的距离；
(2) 按照距离递增次序排序；
(3) 选取与当前点距离最小的k个点；
(4) 确定前k个点所在类别的出现频率；
(5) 返回前k个点出现频率最高的类别作为当前点的预测类别。

比如，现在K=4，那么在这个电影例子中，把距离按照升序排列，距离绿点电影最近的前4个的电影分别是《后来
的我们》、《前任3》、《无问西东》和《红海行动》，这四部电影的类别统计为爱情片:动作片=3:1，出现频率最
高的类别为爱情片，所以在k=4时，绿点电影的类别为爱情片。这个判别过程就是k-近邻算法。

## 二、k-近邻算法的Python实现

#### 1.构建原始数据集

In [1]:

```
import pandas as pd
rowdata={'电影名称':['无问西东','后来的我们','前任3','红海行动','唐人街探案','战狼2'],
         '打斗镜头':[1,5,12,108,112,115],
         '接吻镜头':[101,89,97,5,9,8],
         '电影类型':['爱情片','爱情片','爱情片','动作片','动作片','动作片']}
movie_data=pd.DataFrame(rowdata)
movie_data
```

Out[1]:

|      |   电影名称 | 打斗镜头 | 接吻镜头 | 电影类型 |
| :--- | ---------: | -------: | -------: | -------: |
| 0    |   无问西东 |        1 |      101 |   爱情片 |
| 1    | 后来的我们 |        5 |       89 |   爱情片 |
| 2    |      前任3 |       12 |       97 |   爱情片 |
| 3    |   红海行动 |      108 |        5 |   动作片 |
| 4    | 唐人街探案 |      112 |        9 |   动作片 |
| 5    |      战狼2 |      115 |        8 |   动作片 |

#### 2. 计算已知类别数据集中的点与当前点之间的距离

In [2]:

```
new_data = [24,67]
#计算打斗镜头、接吻镜头两列跟new_data之间的距离。
# 公式：两点距离，各个维度相减的平方和再开方
dist = list((((movie_data.iloc[:6,1:3] - new_data) ** 2).sum(1)) ** 0.5 )
dist
```

Out[2]:

```
[41.048751503547585,
 29.068883707497267,
 32.31098884280702,
 104.4030650891055,
 105.39449701004318,
 108.45275469069469]
```

#### 3.将距离升序排列，再选取距离最小的k个点

In [3]:

```
dist_l = pd.DataFrame({'dist':dist,'labels':(movie_data.iloc[:6,3])})
dr = dist_l.sort_values(by='dist')[:4]
dr
```

Out[3]:

|      |       dist | labels |
| :--- | ---------: | -----: |
| 1    |  29.068884 | 爱情片 |
| 2    |  32.310989 | 爱情片 |
| 0    |  41.048752 | 爱情片 |
| 3    | 104.403065 | 动作片 |

#### 4.确定前K个点所在类别的出现频率

In [4]:

```
re = dr.loc[:,'labels'].value_counts()
re
```

Out[4]:

```
爱情片    3
动作片    1
Name: labels, dtype: int64
```

#### 5.选取频率最高的类别作为当前点的预测类别

In [5]:

```
result = []
result.append(re.index[0])
result
```

Out[5]:

```
['爱情片']
```

## 2. 封装函数

In [6]:

```
import pandas as pd
def classify0(inx,dataSet,k):
    result = []
    dist = list((((movie_data.iloc[:6,1:3] - new_data) ** 2).sum(1)) ** 0.5 )
    dist_l = pd.DataFrame({'dist':dist,'labels':(movie_data.iloc[:6,3])})
    dr=dist_l.sort_values(by='dist')[:k]
    re = dr.loc[:,'labels'].value_counts()
    result.append(re.index[0])
    return result
```

In [7]:

```
inx = new_data
dataSet = movie_data
k =3 
classify0(inx,dataSet,k)
```

Out[7]:

```
['爱情片']
```

## 三、K-近邻算法之约会网站配对效果判定

#### 1.准备数据

In [10]:

```
path = '/home/kesci/input/data/datingTestSet.txt'
datingTest = pd.read_table(path,header=None)
datingTest.head()
/opt/conda/lib/python3.6/site-packages/ipykernel_launcher.py:2: FutureWarning: read_table is deprecated, use read_csv instead, passing sep='\t'.
  
```

Out[10]:

|      |     0 |         1 |        2 |          3 |
| :--- | ----: | --------: | -------: | ---------: |
| 0    | 40920 |  8.326976 | 0.953952 | largeDoses |
| 1    | 14488 |  7.153469 | 1.673904 | smallDoses |
| 2    | 26052 |  1.441871 | 0.805124 |  didntLike |
| 3    | 75136 | 13.147394 | 0.428964 |  didntLike |
| 4    | 38344 |  1.669788 | 0.134296 |  didntLike |

#### 2.分析数据

###### 使用matplotlib创建散点图，查看各数据的分布情况

In [11]:

```
%matplotlib inline
import matplotlib.pyplot as plt

# 把不同标签用颜色区分
Colors = []
for i in range(datingTest.shape[0]):
    m = datingTest.iloc[i,-1]
    if m == 'didntLike':
        Colors.append('black')
    if m == 'smallDoses':
        Colors.append('orange')
    if m == 'largeDoses':
        Colors.append('red')
        
# 绘制两两特征之间的散点图
plt.rcParams['font.sans-serif']=['Simhei']   #图中字体设置为黑体
pl = plt.figure(figsize=(12,8))
fig1 = pl.add_subplot(221)
plt.scatter(datingTest.iloc[:,1],datingTest.iloc[:,2],marker='.',c=Colors)
plt.xlabel('玩游戏视频所占时间比')
plt.ylabel('每周消费冰淇淋公升数')


fig2 = pl.add_subplot(222)
plt.scatter(datingTest.iloc[:,0],datingTest.iloc[:,1],marker='.',c=Colors)
plt.xlabel('每年飞行常客里数')
plt.ylabel('玩游戏所占时间比')

fig3=pl.add_subplot(223)
plt.scatter(datingTest.iloc[:,0],datingTest.iloc[:,2],marker='.',c=Colors)
plt.xlabel('每年飞行常客里程')
plt.ylabel('每周消费冰淇淋公升数')
plt.show()

```



### 3.数据归一化

In [12]:

```
def minmax(dataSet):
    minDf = dataSet.min()
    maxDf = dataSet.max()
    normSet = (dataSet - minDf)/(maxDf - minDf)
    return normSet
datingT=pd.concat([minmax(datingTest.iloc[:,:3]),datingTest.iloc[:,3]],axis=1)
datingT.head()
```

Out[12]:

|      |        0 |        1 |        2 |          3 |
| :--- | -------: | -------: | -------: | ---------: |
| 0    | 0.448325 | 0.398051 | 0.562334 | largeDoses |
| 1    | 0.158733 | 0.341955 | 0.987244 | smallDoses |
| 2    | 0.285429 | 0.068925 | 0.474496 |  didntLike |
| 3    | 0.823201 | 0.628480 | 0.252489 |  didntLike |
| 4    | 0.420102 | 0.079820 | 0.078578 |  didntLike |

In [13]:

```
### 4.划分训练集和测试集
```

In [14]:

```
import numpy as np
def randSplit(dataSet,rate=0.9):
    n = dataSet.shape[0]
    m = int (n * rate)
    train = dataSet.iloc[:m,:]
    test = dataSet.iloc[m:,:]
    test.index=range(test.shape[0])
    return train,test

train,test=randSplit(datingT)
train
test
```

Out[14]:

|      |        0 |        1 |        2 |          3 |
| :--- | -------: | -------: | -------: | ---------: |
| 0    | 0.513766 | 0.170320 | 0.262181 |  didntLike |
| 1    | 0.089599 | 0.154426 | 0.785277 | smallDoses |
| 2    | 0.611167 | 0.172689 | 0.915245 |  didntLike |
| 3    | 0.012578 | 0.000000 | 0.195477 | smallDoses |
| 4    | 0.110241 | 0.187926 | 0.287082 | smallDoses |
| 5    | 0.812113 | 0.705201 | 0.681085 |  didntLike |
| 6    | 0.729712 | 0.490545 | 0.960202 |  didntLike |
| 7    | 0.130301 | 0.133239 | 0.926158 | smallDoses |
| 8    | 0.557755 | 0.722409 | 0.780811 | largeDoses |
| 9    | 0.437051 | 0.247835 | 0.131156 | largeDoses |
| 10   | 0.722174 | 0.184918 | 0.074908 |  didntLike |
| 11   | 0.719578 | 0.167690 | 0.016377 |  didntLike |
| 12   | 0.690193 | 0.526749 | 0.251657 |  didntLike |
| 13   | 0.403745 | 0.182242 | 0.386039 |  didntLike |
| 14   | 0.401751 | 0.528543 | 0.222839 | largeDoses |
| 15   | 0.425931 | 0.421948 | 0.590885 | largeDoses |
| 16   | 0.294479 | 0.534140 | 0.871767 | largeDoses |
| 17   | 0.506678 | 0.550039 | 0.248375 | largeDoses |
| 18   | 0.139811 | 0.372772 | 0.086617 | largeDoses |
| 19   | 0.386555 | 0.485440 | 0.807905 | largeDoses |
| 20   | 0.748370 | 0.508872 | 0.408589 |  didntLike |
| 21   | 0.342511 | 0.461926 | 0.897321 | largeDoses |
| 22   | 0.380770 | 0.515810 | 0.774052 | largeDoses |
| 23   | 0.146900 | 0.134351 | 0.129138 | smallDoses |
| 24   | 0.332683 | 0.469709 | 0.818801 | largeDoses |
| 25   | 0.117329 | 0.067943 | 0.399234 | smallDoses |
| 26   | 0.266585 | 0.531719 | 0.476847 | largeDoses |
| 27   | 0.498691 | 0.640661 | 0.389745 | largeDoses |
| 28   | 0.067687 | 0.057949 | 0.493195 | smallDoses |
| 29   | 0.116562 | 0.074976 | 0.765075 | smallDoses |
| ...  |      ... |      ... |      ... |        ... |
| 70   | 0.588465 | 0.580790 | 0.819148 | largeDoses |
| 71   | 0.705258 | 0.437379 | 0.515681 |  didntLike |
| 72   | 0.101772 | 0.462088 | 0.808077 | smallDoses |
| 73   | 0.664085 | 0.173051 | 0.169156 |  didntLike |
| 74   | 0.200914 | 0.250428 | 0.739211 | smallDoses |
| 75   | 0.250293 | 0.703453 | 0.886825 | largeDoses |
| 76   | 0.818161 | 0.690544 | 0.714136 |  didntLike |
| 77   | 0.374076 | 0.650571 | 0.214290 | largeDoses |
| 78   | 0.155062 | 0.150176 | 0.249725 | smallDoses |
| 79   | 0.102188 | 0.000000 | 0.070700 | smallDoses |
| 80   | 0.208068 | 0.021738 | 0.609152 | smallDoses |
| 81   | 0.100720 | 0.024394 | 0.008994 | smallDoses |
| 82   | 0.025035 | 0.184718 | 0.363083 | smallDoses |
| 83   | 0.104007 | 0.321426 | 0.331622 | smallDoses |
| 84   | 0.025977 | 0.205043 | 0.006732 | smallDoses |
| 85   | 0.152981 | 0.000000 | 0.847443 | smallDoses |
| 86   | 0.025188 | 0.178477 | 0.411431 | smallDoses |
| 87   | 0.057651 | 0.095729 | 0.813893 | smallDoses |
| 88   | 0.051045 | 0.119632 | 0.108045 | smallDoses |
| 89   | 0.192631 | 0.305083 | 0.516670 | smallDoses |
| 90   | 0.304033 | 0.408557 | 0.075279 | largeDoses |
| 91   | 0.108115 | 0.128827 | 0.254764 | smallDoses |
| 92   | 0.200859 | 0.188880 | 0.196029 | smallDoses |
| 93   | 0.041414 | 0.471152 | 0.193598 | smallDoses |
| 94   | 0.199292 | 0.098902 | 0.253058 | smallDoses |
| 95   | 0.122106 | 0.163037 | 0.372224 | smallDoses |
| 96   | 0.754287 | 0.476818 | 0.394621 |  didntLike |
| 97   | 0.291159 | 0.509103 | 0.510795 | largeDoses |
| 98   | 0.527111 | 0.436655 | 0.429005 | largeDoses |
| 99   | 0.479408 | 0.376809 | 0.785718 | largeDoses |

100 rows × 4 columns

In [15]:

```
### 5.分类器针对于约会
```

In [16]:

```
def datingClass(train,test,k):
    n = train.shape[1] - 1
    m = test.shape[0]
    result = []
    for i in range(m):
        dist = list((((train.iloc[:,:n]-test.iloc[i,:n])**2).sum(1))**5)
        dist_l = pd.DataFrame({'dist':dist,'labels':(train.iloc[:,n])})
        dr =dist_l.sort_values(by = 'dist')[:k]
        re = dr.loc[:,'labels'].value_counts()
        result.append(re.index[0])
    result = pd.Series(result)
    test['predict'] = result
    acc = (test.iloc[:,-1]==test.iloc[:,-2]).mean()
    print(f'模型预测准确率是{acc}')
    return test
```

In [17]:

```
datingClass(train,test,5)
模型预测准确率是0.95
```

Out[17]:

|      |        0 |        1 |        2 |          3 |    predict |
| :--- | -------: | -------: | -------: | ---------: | ---------: |
| 0    | 0.513766 | 0.170320 | 0.262181 |  didntLike |  didntLike |
| 1    | 0.089599 | 0.154426 | 0.785277 | smallDoses | smallDoses |
| 2    | 0.611167 | 0.172689 | 0.915245 |  didntLike |  didntLike |
| 3    | 0.012578 | 0.000000 | 0.195477 | smallDoses | smallDoses |
| 4    | 0.110241 | 0.187926 | 0.287082 | smallDoses | smallDoses |
| 5    | 0.812113 | 0.705201 | 0.681085 |  didntLike |  didntLike |
| 6    | 0.729712 | 0.490545 | 0.960202 |  didntLike |  didntLike |
| 7    | 0.130301 | 0.133239 | 0.926158 | smallDoses | smallDoses |
| 8    | 0.557755 | 0.722409 | 0.780811 | largeDoses | largeDoses |
| 9    | 0.437051 | 0.247835 | 0.131156 | largeDoses |  didntLike |
| 10   | 0.722174 | 0.184918 | 0.074908 |  didntLike |  didntLike |
| 11   | 0.719578 | 0.167690 | 0.016377 |  didntLike |  didntLike |
| 12   | 0.690193 | 0.526749 | 0.251657 |  didntLike |  didntLike |
| 13   | 0.403745 | 0.182242 | 0.386039 |  didntLike |  didntLike |
| 14   | 0.401751 | 0.528543 | 0.222839 | largeDoses | largeDoses |
| 15   | 0.425931 | 0.421948 | 0.590885 | largeDoses | largeDoses |
| 16   | 0.294479 | 0.534140 | 0.871767 | largeDoses | largeDoses |
| 17   | 0.506678 | 0.550039 | 0.248375 | largeDoses | largeDoses |
| 18   | 0.139811 | 0.372772 | 0.086617 | largeDoses | smallDoses |
| 19   | 0.386555 | 0.485440 | 0.807905 | largeDoses | largeDoses |
| 20   | 0.748370 | 0.508872 | 0.408589 |  didntLike |  didntLike |
| 21   | 0.342511 | 0.461926 | 0.897321 | largeDoses | largeDoses |
| 22   | 0.380770 | 0.515810 | 0.774052 | largeDoses | largeDoses |
| 23   | 0.146900 | 0.134351 | 0.129138 | smallDoses | smallDoses |
| 24   | 0.332683 | 0.469709 | 0.818801 | largeDoses | largeDoses |
| 25   | 0.117329 | 0.067943 | 0.399234 | smallDoses | smallDoses |
| 26   | 0.266585 | 0.531719 | 0.476847 | largeDoses | largeDoses |
| 27   | 0.498691 | 0.640661 | 0.389745 | largeDoses | largeDoses |
| 28   | 0.067687 | 0.057949 | 0.493195 | smallDoses | smallDoses |
| 29   | 0.116562 | 0.074976 | 0.765075 | smallDoses | smallDoses |
| ...  |      ... |      ... |      ... |        ... |        ... |
| 70   | 0.588465 | 0.580790 | 0.819148 | largeDoses | largeDoses |
| 71   | 0.705258 | 0.437379 | 0.515681 |  didntLike |  didntLike |
| 72   | 0.101772 | 0.462088 | 0.808077 | smallDoses | smallDoses |
| 73   | 0.664085 | 0.173051 | 0.169156 |  didntLike |  didntLike |
| 74   | 0.200914 | 0.250428 | 0.739211 | smallDoses | smallDoses |
| 75   | 0.250293 | 0.703453 | 0.886825 | largeDoses | largeDoses |
| 76   | 0.818161 | 0.690544 | 0.714136 |  didntLike |  didntLike |
| 77   | 0.374076 | 0.650571 | 0.214290 | largeDoses | largeDoses |
| 78   | 0.155062 | 0.150176 | 0.249725 | smallDoses | smallDoses |
| 79   | 0.102188 | 0.000000 | 0.070700 | smallDoses | smallDoses |
| 80   | 0.208068 | 0.021738 | 0.609152 | smallDoses | smallDoses |
| 81   | 0.100720 | 0.024394 | 0.008994 | smallDoses | smallDoses |
| 82   | 0.025035 | 0.184718 | 0.363083 | smallDoses | smallDoses |
| 83   | 0.104007 | 0.321426 | 0.331622 | smallDoses | smallDoses |
| 84   | 0.025977 | 0.205043 | 0.006732 | smallDoses | smallDoses |
| 85   | 0.152981 | 0.000000 | 0.847443 | smallDoses | smallDoses |
| 86   | 0.025188 | 0.178477 | 0.411431 | smallDoses | smallDoses |
| 87   | 0.057651 | 0.095729 | 0.813893 | smallDoses | smallDoses |
| 88   | 0.051045 | 0.119632 | 0.108045 | smallDoses | smallDoses |
| 89   | 0.192631 | 0.305083 | 0.516670 | smallDoses | smallDoses |
| 90   | 0.304033 | 0.408557 | 0.075279 | largeDoses | largeDoses |
| 91   | 0.108115 | 0.128827 | 0.254764 | smallDoses | smallDoses |
| 92   | 0.200859 | 0.188880 | 0.196029 | smallDoses | smallDoses |
| 93   | 0.041414 | 0.471152 | 0.193598 | smallDoses | smallDoses |
| 94   | 0.199292 | 0.098902 | 0.253058 | smallDoses | smallDoses |
| 95   | 0.122106 | 0.163037 | 0.372224 | smallDoses | smallDoses |
| 96   | 0.754287 | 0.476818 | 0.394621 |  didntLike |  didntLike |
| 97   | 0.291159 | 0.509103 | 0.510795 | largeDoses | largeDoses |
| 98   | 0.527111 | 0.436655 | 0.429005 | largeDoses | largeDoses |
| 99   | 0.479408 | 0.376809 | 0.785718 | largeDoses | largeDoses |

100 rows × 5 columns

## 四、算法总结

**1. 优点**

- 简单好用，容易理解，精度高，理论成熟，既可以用来做分类也可以用来做回归
- 可用于数值型数据和离散型数据
- 无数据输入假定
- 适合对稀有事件进行分类

**2. 缺点**

- 计算复杂性高；空间复杂性高；
- 计算量太大，所以一般数值很大的时候不用这个，但是单个样本又不能太少，否则容易发生误分。
- 样本不平衡问题（即有些类别的样本数量很多，而其它样本的数量很少）
- 可理解性比较差，无法给出数据的内在含义