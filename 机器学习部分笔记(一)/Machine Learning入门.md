```
# 加载教程中会用到的包
import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
import seaborn as sns

# 加载 warnings
import warnings

# 忽略 warnings
warnings.filterwarnings("ignore")
```

In [2]:

In [3]:

```
# 从csv文件中写入数据
data = pd.read_csv('.column_2C_weka.csv')
print(plt.style.available)   # 列出所有可用的绘图样式
plt.style.use('ggplot')      # 使用“ggplot”样式
['seaborn-pastel', 'seaborn-white', 'classic', 'seaborn-dark', 'ggplot', 'seaborn-talk', 'Solarize_Light2', 'fast', 'bmh', '_classic_test', 'seaborn-muted', 'seaborn-bright', 'seaborn-paper', 'fivethirtyeight', 'seaborn-notebook', 'seaborn', 'dark_background', 'seaborn-dark-palette', 'seaborn-deep', 'seaborn-colorblind', 'seaborn-poster', 'seaborn-whitegrid', 'seaborn-darkgrid', 'seaborn-ticks', 'grayscale', 'tableau-colorblind10']
```

# 机器学习

- 首先，让我们看一个机器学习的定义，本定义由来自Carnegie Mellon University 的 Tom Mitchell 提出：

  > Tom Mitchell (1998).
  > Well-posed Learning Problem: A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.
  >
  > 如果一个计算机程序在任务 T 上的性能度量 P ，通过经验 E 而提高，那么我们称这个计算机程序通过经验 E 来学习。

- 学习算法分好几个类型，主要分成两大类，分别是**监督学习 (Supervised Learning)** 和**无监督学习 (Unsupervised Learning)**，在后文中笔者将介绍这些术语的具体含义。不过归根到底，Supervised Learning 就是我们要明确告诉计算机如何做某件事情，而 Unsupervised Learning 则意味着我们要让程序自己进行学习。

## 监督学习

- 监督学习（Supervised learning）: 使用带有标签的数据。例如，骨科患者的数据有“

  normal

  ”和“

  abnormal

  ”的标签。

  - 数据集中含有特征变量和目标变量，特征变量如*pelvic radius（盆腔半径）*、*sacral slope（骶骨倾斜角）*，目标变量为 *normal* 和 *abnormal* 。本次监督学习的目的是根据给定的特征（输入变量）预测目标变量（输出变量）是“*normal*”还是“*abnormal*”。

- 分类模型:预测离散值，如：这是一张狗、猫还是兔子图片？

- 回归模型:预测连续值，如：预测用户点击此广告的概率是多少？

*如果以上介绍对你来说还不够清晰，请Google相关内容进行补充学习。*

- [机器学习术语表（中文版）](https://developers.google.cn/machine-learning/glossary/?hl=zh-CN#top_of_page)

### EDA

- 首先，我们需要对数据进行探索，让数据创造价值。详细的探索性数据分析介绍在[Data Sicence入门教程](https://www.kesci.com/home/project/5c1b4b54f8caa6002bc7abe9)中。
- 本文使用 head() 查看特征“ *pelvic_incidence（骨盆入射角）、pelvic_tilt numeric（骨盆倾斜角度）、lumbar_lordosis_angle(腰椎前凸角度)、sacral_slope(骶骨倾斜角)、pelvic_radius(盆腔半径) 和 degree_spondylolisthesis(脊椎前移程度)* 以及目标变量 *class* ”
- head(): 它的默认值显示前5行(示例)，如果你想看100行就写head(100)

In [4]:

```
# 查看特征值和目标值
data.head()
```

Out[4]:

|      | pelvic_incidence | pelvic_tilt numeric | lumbar_lordosis_angle | sacral_slope | pelvic_radius | degree_spondylolisthesis |    class |
| :--- | ---------------: | ------------------: | --------------------: | -----------: | ------------: | -----------------------: | -------: |
| 0    |        63.027818 |           22.552586 |             39.609117 |    40.475232 |     98.672917 |                -0.254400 | Abnormal |
| 1    |        39.056951 |           10.060991 |             25.015378 |    28.995960 |    114.405425 |                 4.564259 | Abnormal |
| 2    |        68.832021 |           22.218482 |             50.092194 |    46.613539 |    105.985135 |                -3.530317 | Abnormal |
| 3    |        69.297008 |           24.652878 |             44.311238 |    44.644130 |    101.868495 |                11.211523 | Abnormal |
| 4    |        49.712859 |            9.652075 |             28.317406 |    40.060784 |    108.168725 |                 7.918501 | Abnormal |

In [5]:

```
# 想要知道数据里是否含有NaN值及数据规模多大，使用info查看
data.info()
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 310 entries, 0 to 309
Data columns (total 7 columns):
pelvic_incidence            310 non-null float64
pelvic_tilt numeric         310 non-null float64
lumbar_lordosis_angle       310 non-null float64
sacral_slope                310 non-null float64
pelvic_radius               310 non-null float64
degree_spondylolisthesis    310 non-null float64
class                       310 non-null object
dtypes: float64(6), object(1)
memory usage: 17.0+ KB
```

可以看到:

- 数据规模: 310 (有索引的范围内)
- 特征值是float数据类型
- 目标值是一个类似于str的对象
- 以上，我们对数据有了一些基本的了解，现在让我们更深入的研究一下数据
  - describe(): 一次性输出多个描述性统计指标
    - 为什么我们需要看 mean, std, max, min 这些数据? 为了可视化数据，相邻数值之间应该比较接近，至少应该没有不兼容的值（比如一个特征的均值是0.1，另一个特征的均值是1000）。

In [6]:

```
data.describe()
```

Out[6]:

|       | pelvic_incidence | pelvic_tilt numeric | lumbar_lordosis_angle | sacral_slope | pelvic_radius | degree_spondylolisthesis |
| :---- | ---------------: | ------------------: | --------------------: | -----------: | ------------: | -----------------------: |
| count |       310.000000 |          310.000000 |            310.000000 |   310.000000 |    310.000000 |               310.000000 |
| mean  |        60.496653 |           17.542822 |             51.930930 |    42.953831 |    117.920655 |                26.296694 |
| std   |        17.236520 |           10.008330 |             18.554064 |    13.423102 |     13.317377 |                37.559027 |
| min   |        26.147921 |           -6.554948 |             14.000000 |    13.366931 |     70.082575 |               -11.058179 |
| 25%   |        46.430294 |           10.667069 |             37.000000 |    33.347122 |    110.709196 |                 1.603727 |
| 50%   |        58.691038 |           16.357689 |             49.562398 |    42.404912 |    118.268178 |                11.767934 |
| 75%   |        72.877696 |           22.120395 |             63.000000 |    52.695888 |    125.467674 |                41.287352 |
| max   |       129.834041 |           49.431864 |            125.742385 |   121.429566 |    163.071041 |               418.543082 |

**pd.plotting.scatter_matrix：绘制散点图矩阵。**

- green: normal ， red: abnormal
- c: 颜色
- figsize: 图像尺寸
- diagonal: 在{'hist', 'kde'}中选择其一，kde：Kernel Density Estimation（核密度估计图），hist：Histogram plot（直方图）
- alpha: 透明度
- marker：Matplotlib标记类型，默认为'.'
- s: marker的尺寸

详细介绍请点击[官方文档](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.plotting.scatter_matrix.html)

In [7]:

```
# 建议大家动手改变参数运行一下，这样有助于更好的理解
color_list = ['red' if i=='Abnormal' else 'green' for i in data.loc[:,'class']]
pd.plotting.scatter_matrix(data.loc[:, data.columns != 'class'],   
                                       c=color_list,               
                                       figsize= [15,15],
                                       diagonal='hist',
                                       alpha=0.5,
                                       s = 200,
                                       marker = '*',
                                       edgecolor= "blue")
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/1D67B4C8A7CE41079AB85790781DAB09/pm11xsg2e4.png)

在上述三点矩阵图中我们可以看到每两个特征间都有关系，现在我们想要弄清楚*normal(green)*和*abnormal(red)*各有多少个

- seaborn库中的countplot()可以计算类的数量
- 也可以使用value_counts()打印

这些数据看起来分布很均匀（实际上，分布是否均匀没有严格的定义）

现在让我们学习第一种分类方法KNN

In [8]:

```
# 看一下两个类分别有多少个数据
sns.countplot(x="class", data=data)
data.loc[:,'class'].value_counts()
```

Out[8]:

```
Abnormal    210
Normal      100
Name: class, dtype: int64
```

![img](https://cdn.kesci.com/rt_upload/17D13C0552784580892F7C9DB8C0BCBB/pm11xsg6vp.png)

### KNN

- KNN（K-邻近算法）: 通过测量不同特征值之间的距离进行分类
- KNN是分类算法的一种
- 首先我们需要训练数据
- fit(): 训练数据
- predict(): 预测数据
  如果不理解什么是KNN，请参考：[链接](https://www.kesci.com/home/project/5c2720a85986fa002c5c0ba7)

让我们学习如何使用sklearn实现

- x: 特征值
- y: 目标值(normal, abnormal)
- n_neighbors: K，在示例里是3，意思是看3个距离样本最近的数据点

In [9]:

```
# KNN
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors = 3)
x,y = data.loc[:,data.columns != 'class'], data.loc[:,'class']
knn.fit(x,y)
prediction = knn.predict(x)
# format()：格式化输出
print('Prediction: {}'.format(prediction))
Prediction: ['Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Normal'
 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Normal' 'Normal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Abnormal' 'Normal'
 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Abnormal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Abnormal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Abnormal' 'Normal' 'Normal' 'Abnormal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Abnormal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Abnormal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Abnormal' 'Normal' 'Normal' 'Normal' 'Abnormal' 'Normal' 'Normal'
 'Normal' 'Normal' 'Normal' 'Normal' 'Normal' 'Abnormal' 'Normal'
 'Abnormal' 'Normal' 'Normal']
```

- 以上，我们已经使用KNN训练并预测了数据
- 新的问题出现了：我们的预测是否准确？我们的准确度是什么?准确度是评价我们预测结果的最好的衡量标准吗？
- 准确度是准确预测的一部分，是常用的度量标准。我们将使用它，但还有一个问题:

如你所见，我用x(特征值)训练数据，然后再次预测x(特征值)，emmmm看起来很荒谬。

因此，我们需要把数据集切分成训练集和测试集

- train set: 训练集，用来训练数据
- test set: 测试集，基于训练集预测数据
- train_test_split(x,y,test_size = 0.3,random_state = 1)：交叉验证中常用的函数，功能是从样本中随机的按比例选取train data和test data
  - x: 特征，即在进行预测时使用的输入变量。
  - y: 目标，即在进行预测时使用的输出变量。
  - test_size: 测试集所占的百分比。例如test_size = 0.3, 即test size = 30%， train size = 70%
  - random_state: 随机种子. 其实就是该组随机数的编号，在需要重复试验的时候，保证得到一组一样的随机数。比如你每次都填1，其他参数一样的情况下你得到的随机数组是一样的。但填None，每次都会不一样。
- fit(x_train,y_train): 拟合到训练集
- score(x_test,y_test)): 预测并给出测准确度

In [10]:

```
from sklearn.model_selection import train_test_split
# 切分数据集、测试集，固定随机种子（保证数据集每次的切分都一样）
x_train,x_test,y_train,y_test = train_test_split(x,y,test_size = 0.3,random_state = 1)
# 设置k值为3
knn = KNeighborsClassifier(n_neighbors = 3)
# 设置特征值和预测值
x,y = data.loc[:,data.columns != 'class'], data.loc[:,'class']
# 将模型拟合到训练集
knn.fit(x_train,y_train)
# 预测精准度
prediction = knn.predict(x_test)
print('Prediction: {}'.format(prediction))
print('With KNN (K=3) accuracy is: ',knn.score(x_test,y_test)) 
Prediction: ['Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal'
 'Abnormal' 'Abnormal' 'Normal' 'Abnormal' 'Normal' 'Abnormal' 'Abnormal'
 'Normal' 'Abnormal' 'Normal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Normal' 'Abnormal' 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Normal' 'Abnormal' 'Abnormal' 'Normal' 'Normal' 'Normal' 'Normal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Normal'
 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Normal' 'Abnormal' 'Abnormal'
 'Normal' 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Normal'
 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal' 'Normal' 'Abnormal'
 'Abnormal' 'Normal' 'Abnormal' 'Abnormal' 'Abnormal' 'Abnormal' 'Normal'
 'Normal' 'Abnormal' 'Abnormal' 'Abnormal']
With KNN (K=3) accuracy is:  0.8602150537634409
```

*我们看到准确率是86%，我会在后面的教程中回答它是否是一个很好的准确度。*

现在我想解答的问题是：我们为什么设置K=3，或者说我们应该设置K值为多少？
——答案在于模型的复杂度。

![Image Name](https://cdn.kesci.com/upload/image/pj5l00l6tt.png?imageView2/0/w/720/h/720)

- K有个大众化的名字——超参数，我们需要知道怎样给K赋值才能带给模型最好的准确率
- 过拟合(overfitting)：创建的模型与训练数据过于匹配，以致于模型无法根据新数据做出正确的预测。
- 欠拟合(underfitting)：创建的模型与训练数据匹配度较差。
- K值较小，则模型复杂度较高，容易发生过拟合，学习的估计误差会增大，预测结果对近邻的实例点非常敏感。
- K值较大，则模型复杂度较低，可以减少学习的估计误差，但是学习的近似误差会增大，与输入实例较远的训练实例也会对预测起作用，使预测发生错误。
- 在下面的代码中，设置K值的范围从1到25（不包括1和25）并找到每个K值的准确性。从图中可以看出，当K = 1时，它对训练集进行记忆，在测试集上不能给出很好的精度(过拟合)。如果K = 18，则导致模型不能很好的拟合测试集（欠拟合）。但是当K为18(最佳性能)时，准确率最高，接近88%。

In [11]:

```
# 模型复杂度
neig = np.arange(1, 25)
train_accuracy = []
test_accuracy = []
# 循环K值从1到25
for i, k in enumerate(neig):
    # k从1到25(不包括1、25)
    knn = KNeighborsClassifier(n_neighbors=k)
    # 使用KNN拟合
    knn.fit(x_train,y_train)
    # 训练集的准确度
    train_accuracy.append(knn.score(x_train, y_train))
    # 测试集的准确度
    test_accuracy.append(knn.score(x_test, y_test))

# 可视化
plt.figure(figsize=[13,8])
plt.plot(neig, test_accuracy, label = 'Testing Accuracy')
plt.plot(neig, train_accuracy, label = 'Training Accuracy')
plt.legend()
plt.title('-value VS Accuracy')
plt.xlabel('Number of Neighbors')
plt.ylabel('Accuracy')
plt.xticks(neig)
plt.savefig('graph.png')
plt.show()
print("Best accuracy is {} with K = {}".format(np.max(test_accuracy),1+test_accuracy.index(np.max(test_accuracy))))
```

![img](https://cdn.kesci.com/rt_upload/59BD9D1FDA5D418A9BD1FC7C6D26E11B/pm11xspo8m.png)

```
Best accuracy is 0.8817204301075269 with K = 18
```

到目前为止，你学习了:

- 监督学习
- EDA
- KNN
  - 如何切分数据集
  - 如何训练、预测数据
  - 如何评判模型准确度
  - 如何选择k值

**如果我将标题KNN改为其他分类方法，比如Random Forest（随机森林），会发生什么呢?**

- The answer is **nothing**.
  你只需要看一段youtube上关于随机森林的视频，然后用KNN实现你学到的东西。因为思想和大多数代码(只有KNeighborsClassifier需要改为RandomForestClassifier)是相同的。你需要切分、训练、预测数据和评估性能，并选择random forest的超参数(如max_depth)。

### 线性回归

- 回归属于监督学习，分为线性回归（linear regression）和逻辑回归（logistic regression）。

- 这个骨科患者的数据不适合回归方法，所以我只使用了两个特征：abnormal中的

  sacral_slope

   

  和

   

  pelvic_incidence

  - *pelvicin_cidence*作为特征值，*sacral_slope*作为预测值
  - 让我们画一个散点图以便更好地理解它
  - reshape(-1,1): 将数组变成1列。如果不用这个方法，x或y的形状就变成了(210，)，在sklearn中我们无法使用。因此我们用reshape(-1,1)，这样x或y的形状是(210,1)

In [12]:

```
# 创建data1，其中包括特征pelvic_incidence和预测值sacral_slope
data1 = data[data['class'] =='Abnormal']
x = np.array(data1.loc[:,'pelvic_incidence']).reshape(-1,1)
y = np.array(data1.loc[:,'sacral_slope']).reshape(-1,1)
# 散点图
plt.figure(figsize=[10,10])
plt.scatter(x=x,y=y)
plt.xlabel('pelvic_incidence')
plt.ylabel('sacral_slope')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/9F7F43CEC37647988B8899333B573704/pm11xs2ej9.png)

现在我们有可以做回归分析的数据了。
在回归问题中，目标值是一个不断变化的变量，如房价或*sacral_slope*。我们用直线去拟合这些点。

**线性回归**

- 单变量线性回归：只含有一个特征（输入变量）

  > y'：想要预测的值,用来和真实值 y 区分
  > x：特征，即输入变量
  > omega：模型的参数，即特征1的权重

y′=ω1x1+b0



- 多变量线性回归：含有多个特征（输入变量）

  y′=ω1x1+ω2x2+...+ωnxn+b0

- 我们根据损失函数（即评估函数）来选择模型的参数(omega)，使预测值 y' 尽可能的接近 y ;

  在线性回归中，我们使用普通最小二乘法(OLS)作为损失函数,OLS: 残值的平方的和。

  OLS=∑i=1t(y−y′)2

- Score: 回归线拟合程度的评判标准使用R^2（决定系数），公式如下：

  R2=1−∑(Yactual−Ypredicted)2∑(Yactual−Ymean)2

  R2

  的值介于0与1之间，越大代表拟合程度越高。

In [13]:

```
# 线性回归
from sklearn.linear_model import LinearRegression
reg = LinearRegression()
# 预测区域
predict_space = np.linspace(min(x), max(x)).reshape(-1,1)
# 将训练数据拟合到模型中
reg.fit(x,y)
# 预测
predicted = reg.predict(predict_space)
# R^2 
print('R^2 score: ',reg.score(x, y))
# 绘制回归线和散点
plt.plot(predict_space, predicted, color='black', linewidth=3)
plt.scatter(x=x,y=y)
plt.xlabel('pelvic_incidence')
plt.ylabel('sacral_slope')
plt.show()
R^2 score:  0.6458410481075871
```

![img](https://cdn.kesci.com/rt_upload/B27B2D0C4BD54E77835DE15837C5923A/pm11xsb77g.png)

在示例里，我们看到R2=0.6458410481075871，这意味着约65%的 *sacralslope* 可以用 *pelvicincidence* 来解释。

### 交叉验证

在KNN模型中，我们使用random_state将数据集每次都切分成相同的训练集和测试集。如果没有用random_state,数据集每次的切分都不同，相应的会得到不同的准确度。
我们可以得到一个结论：模型的精度却决于数据集的切分。
举个栗子：假设对数据集进行了5次切分，模型的精度依次是0.89, 0.9, 0.91, 0.92 和 0.93。可以看到，在不同的划分方法下，模型的准确度是有变化的。因此如果我们的训练集和测试集的划分方法不够好，很有可能无法选择到最好的模型与参数。

**使用交叉验证，我们可以找到最合适的准确度。**

**交叉验证(Cross Validation)**

- K折交叉验证(k-fold cross validation)
  - 将原始数据均分成K组，每个子集数据分别做一次验证集，其余的K-1组子集数据作为训练集，这样会得到K个模型，用这K个模型最终验证集的分类准确率的平均数作为此K-CV分类器下的性能指标。
  - k：将数据集分成K个子集。
  - k值越大，计算成本越大，耗时约长。
- **cross_val_score(reg,x,y,cv=5)**: 使用上文定义的线性回归方法拟合数据，设置k值为5。

In [14]:

```
# 交叉验证（cv）
from sklearn.model_selection import cross_val_score
reg = LinearRegression()
k = 5
cv_result = cross_val_score(reg,x,y,cv=k) # 使用R^2评判拟合程度
print('CV Scores: ',cv_result)
print('CV scores average: ',np.sum(cv_result)/k)
CV Scores:  [0.32924233 0.61683991 0.53117056 0.1954798  0.29299864]
CV scores average:  0.3931462502884867
```

### 正则化

请查看以下泛化曲线，该曲线显示的是训练集和验证集相对于训练迭代次数的损失。
![Image Name](https://cdn.kesci.com/upload/image/pj5axorkpb.png?imageView2/0/w/500/h/500)
图中显示的是某个模型的训练损失逐渐减少，但验证损失最终增加。换言之，该泛化曲线显示该模型与训练集中的数据过拟合。根据奥卡姆剃刀定律，或许我们可以通过降低复杂模型的复杂度来防止过拟合，这种原则称为**正则化**。
也就是说，并非只是以最小化损失（经验风险最小化）为目标：

minimize(Loss(Data|Model))



而是以最小化损失和复杂度为目标，这称为**结构风险最小化**：

minimize(Loss(Data|Model) + complexity(Model))



现在，我们的训练优化算法是一个由两项内容组成的函数：一个是损失项，用于衡量模型与数据的拟合度，另一个是正则化项，用于衡量模型复杂度。

- 我们可以使用 **L2 正则化公式**来量化复杂度，该公式将正则化项定义为所有特征权重的平方和：

L2 regularization term=∑w2=w12+w22+...+wn2


在这个公式中，接近于 0 的权重对模型复杂度几乎没有影响，而离群值权重则可能会产生巨大的影响。

- L1正则化公式

  定义为所有特征权重的绝对值之和：

  L1 regularization term=∑|w|=|w1|+|w2|+...+|wn|

使用线性回归时，我们要选择最小化损失函数的参数(回归系数)。如果线性回归认为某一特征是重要的，则该特征具有较高的系数。这种情况常常会导致过拟合。为了避免过拟合，我们使用正则化（regularization）来惩罚大系数。

- Ridge回归: 我们介绍的第一个正则化方法，也叫做L2正则化。
  - Ridge回归损失函数 = OLS+α∑ω2
  - α是我们需要选择的参数，用来拟合和预测数据。与在KNN中选择最优K值相似，α是一个超参数，我们需要选择它来获得最佳的准确性和模型的复杂性，这个过程称为超参数优化。
  - 如果α是0呢?损失函数=OLS（最小二乘法），即线性回归。
  - 如果α值很小，就会导致过拟合
  - 如果α值很大，就会导致欠拟合。但是大与小没有一个明确的标准，这些可以随着问题的不同而改变。
- Lasso回归: 第二个正则化方法，也被称为L1正则化。
  - Lasso回归损失函数 = OLS+α∑|ω|
  - 它可以用来选择数据的重要特征，因为Lasso回归可以使特征值的权重为0
  - 为了选择特征，我在回归数据中添加了新的特征 *'pelvic_tilt numeric' , 'lumbar_lordosisangle' , 'pelvic_radius'*

Linear VS Ridge VS Lasso
凭直觉: Linear
特征选择: 1.Lasso 2.Ridge
回归模型: 1.Ridge 2.Lasso 3.Linear

In [15]:

```
# Ridge
from sklearn.linear_model import Ridge
# 固定随机种子，random_state=2得到的划分与random_state=1时不同
x_train,x_test,y_train,y_test = train_test_split(x,y,random_state = 2, test_size = 0.3)
ridge = Ridge(alpha = 0.1, normalize = True)
ridge.fit(x_train,y_train)
ridge_predict = ridge.predict(x_test)
print('Ridge score: ',ridge.score(x_test,y_test))
Ridge score:  0.5608287918841997
```

In [16]:

```
# Lasso
from sklearn.linear_model import Lasso
x = np.array(data1.loc[:,['pelvic_incidence','pelvic_tilt numeric','lumbar_lordosis_angle','pelvic_radius']])
x_train,x_test,y_train,y_test = train_test_split(x,y,random_state = 3, test_size = 0.3)
lasso = Lasso(alpha = 0.1, normalize = True)
lasso.fit(x_train,y_train)
ridge_predict = lasso.predict(x_test)
print('Lasso score: ',lasso.score(x_test,y_test))
print('Lasso coefficients: ',lasso.coef_)
Lasso score:  0.9640334804327547
Lasso coefficients:  [ 0.82498243 -0.7209057   0.         -0.        ]
```

正你所看到的， *pelvic_incidence* 和 *pelvic_tilt numeric* 是重要的特征，其他特性并不重要。

现在让我们讨论准确性。模型选择的度量是否足够?
例如，有一个数据包含95%的正常样本和5%的异常样本，我们的模型使用精度作为度量标准。然后我们的模型预测所有样本100%正常，准确率为95%，但对所有异常样本进行了错误分类。因此，需要在不平衡数据中使用混淆矩阵作为模型度量矩阵。

在使用混淆矩阵的同时，利用随机森林分类器实现分类方法的多样化。

- TP = 真正列(20), FP = 假正列(7), FN = 假负列(8), TN = 真负列(58)
- TP = 真正例是指模型将正类别样本正确地预测为正类别（normal）。
- FP = 真负例是指模型将负类别样本正确地预测为负类别（abnormal）。
- FN = 假负例是指模型将正类别样本错误地预测为负类别。
- TN = 真负例是指模型将负类别样本正确地预测为负类别。
- 准确率准确率是一个用于评估分类模型的指标。通俗来说，准确率是指我们的模型预测正确的结果所占的比例。

> 正式点说，准确率的定义如下：

Accuracy=Number of correct predictionsTotal number of predictions



> 对于二元分类，也可以根据正类别和负类别按如下方式计算准确率：

Accuracy=TP+TNTP+TN+FP+FN



- 精确率：精确率解释了在被识别为正类别的样本中，确实为正类别的比例是多少？精确率的定义如下：

Precision=TPTP+FP



- 召回率：召回率解释了在所有正类别样本中，被正确识别为正类别的比例是多少？定义如下：

Recall=TPTP+FN



- f1=2∗precision∗recallprecision+recall

如果不了解混淆矩阵的概念，请参考[链接](http://www.kesci.com/home/project/5c481f6489f4aa002b85956a)

In [17]:

```
# 随机森林的混淆矩阵(confusion matrix)
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.ensemble import RandomForestClassifier
x,y = data.loc[:,data.columns != 'class'], data.loc[:,'class']
x_train,x_test,y_train,y_test = train_test_split(x,y,test_size = 0.3,random_state = 1)
rf = RandomForestClassifier(random_state = 4)
rf.fit(x_train,y_train)
y_pred = rf.predict(x_test)
cm = confusion_matrix(y_test,y_pred)
print('Confusion matrix: \n',cm)
print('Classification report: \n',classification_report(y_test,y_pred))
Confusion matrix: 
 [[58  8]
 [ 7 20]]
Classification report: 
               precision    recall  f1-score   support

    Abnormal       0.89      0.88      0.89        66
      Normal       0.71      0.74      0.73        27

   micro avg       0.84      0.84      0.84        93
   macro avg       0.80      0.81      0.81        93
weighted avg       0.84      0.84      0.84        93
```

In [18]:

```
# 使用seaborn库进行可视化
sns.heatmap(cm,annot=True,fmt="d") 
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/45946109ED71493388D23456F52AF54A/pm11xt8rkh.png)

### ROC曲线与逻辑回归

- 逻辑回归是一种极其高效的概率计算机制，输出的是概率估值。
- 如果概率大于0.5，则数据为1(abnormal)，否则为0(normal)
- 默认情况下逻辑回归的分类阈值为0.5
- ROC 曲线（接收者操作特征曲线）是一种显示分类模型在所有分类阈值下的效果的图表。该曲线绘制了以下两个参数：
  - 真正例率 (TPR):TPR=TPTP+FN
  - 假正例率 (FPR):FPR=FPFP+TN
- ROC 曲线用于绘制采用不同分类阈值时的 TPR 与 FPR。降低分类阈值会导致将更多样本归为正类别，从而增加假正例和真正例的个数。下图显示了一个典型的 ROC 曲线。

![Image Name](https://cdn.kesci.com/upload/image/pj9cyfb1x5.png?imageView2/0/w/350/h/350)

- 如果图中的曲线更接近左上角，则测试结果更准确。
- AUC是一个模型评价指标，只能用于二分类模型的评价。AUC的值是ROC曲线下面区域的面积.
- 曲线下面积的取值范围为 0-1。预测结果 100% 错误的模型的曲线下面积为 0；而预测结果 100% 正确的模型的曲线下面积为1。

![Image Name](https://cdn.kesci.com/upload/image/pj9dscywcn.png?imageView2/0/w/350/h/350)

In [19]:

```
# ROC曲线与逻辑回归
from sklearn.metrics import roc_curve
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report
# abnormal = 1 ， normal = 0
data['class_binary'] = [1 if i == 'Abnormal' else 0 for i in data.loc[:,'class']]
x,y = data.loc[:,(data.columns != 'class') & (data.columns != 'class_binary')], data.loc[:,'class_binary']
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state=42)
logreg = LogisticRegression()
logreg.fit(x_train,y_train)
y_pred_prob = logreg.predict_proba(x_test)[:,1]
fpr, tpr, thresholds = roc_curve(y_test, y_pred_prob)
# 绘制ROC曲线
plt.plot([0, 1], [0, 1], 'k--')
plt.plot(fpr, tpr)
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/169620C69B414E9B88A0404AF3B689B8/pm11xty11v.png)

### 超参数调优

正如在KNN中提到的，我们需要对超参数进行优化

- 举个栗子:
  - KNN中的k
  - Ridge和Lasso中的α
  - 随机森林中的max_depth
  - 线性回归中的参数θ
- 超参数调优:
  - 尝试不同参数的所有组合
  - 拟合模型
  - 衡量预测的准确度
  - 看看他们的表现如何
  - 最后选择最佳超参数
- 我们只需要一行代码，即GridSearchCV
  - grid: K从1到50(开区间)
  - GridSearchCV采用knn和grid进行网格搜索。它意味着所有超参数的组合。示例中是k。

In [20]:

```
# 网格搜索与超参数调优
from sklearn.model_selection import GridSearchCV
grid = {'n_neighbors': np.arange(1,50)}
knn = KNeighborsClassifier()
knn_cv = GridSearchCV(knn, grid, cv=3)    # GridSearchCV
knn_cv.fit(x,y)   # 训练

# 打印hyperparameter
print("Tuned hyperparameter k: {}".format(knn_cv.best_params_)) 
print("Best score: {}".format(knn_cv.best_score_))
Tuned hyperparameter k: {'n_neighbors': 4}
Best score: 0.7548387096774194
/opt/conda/lib/python3.6/site-packages/sklearn/model_selection/_search.py:841: DeprecationWarning: The default of the `iid` parameter will change from True to False in version 0.22 and will be removed in 0.24. This will change numeric results when test-set sizes are unequal.
  DeprecationWarning)
```

其他两个超参数的网格搜索示例：

- 第一个超参数是C:逻辑回归正则化参数
  - 如果C值高:过拟合
  - 如果C值低:欠拟合
- 第二个超参数是惩罚(损失函数):l1 (Lasso)或l2(Ridge)，这是我们在线性回归部分学到的。

In [21]:

```
# 网格搜索交叉验证与2个超参数
# 1. 超参数为C:logistic回归正则化参数
# 2. 惩罚L1或L2
# Hyperparameter网格
param_grid = {'C': np.logspace(-3, 3, 7), 'penalty': ['l1', 'l2']}
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size = 0.3,random_state = 12)
logreg = LogisticRegression()
logreg_cv = GridSearchCV(logreg,param_grid,cv=3)
logreg_cv.fit(x_train,y_train)

# 打印最佳参数和最佳评分
print("Tuned hyperparameters : {}".format(logreg_cv.best_params_))
print("Best Accuracy: {}".format(logreg_cv.best_score_))
Tuned hyperparameters : {'C': 100.0, 'penalty': 'l2'}
Best Accuracy: 0.8525345622119815
```

### 数据预处理

- 在现实场景中，数据可以包含 object data 和 categorical data，为了在sklearn中使用它们，我们需要将它们转换为 numerical data
- 在数据中，类有 *abnormal* 和 *normal* ，让我们把它们转换成数值
- 创建不同的特征，分别名为 *class_Abnormal* 和 *class_Normal*
- 但是我们需要删除其中一列，因为它们是重复的

In [22]:

```
# 加载数据
data = pd.read_csv('.column_2C_weka.csv')
# get_dummies：将拥有不同值的变量转换为0/1数值
df = pd.get_dummies(data)
df.head(10)
```

Out[22]:

|      | pelvic_incidence | pelvic_tilt numeric | lumbar_lordosis_angle | sacral_slope | pelvic_radius | degree_spondylolisthesis | class_Abnormal | class_Normal |
| :--- | ---------------: | ------------------: | --------------------: | -----------: | ------------: | -----------------------: | -------------: | -----------: |
| 0    |        63.027818 |           22.552586 |             39.609117 |    40.475232 |     98.672917 |                -0.254400 |              1 |            0 |
| 1    |        39.056951 |           10.060991 |             25.015378 |    28.995960 |    114.405425 |                 4.564259 |              1 |            0 |
| 2    |        68.832021 |           22.218482 |             50.092194 |    46.613539 |    105.985135 |                -3.530317 |              1 |            0 |
| 3    |        69.297008 |           24.652878 |             44.311238 |    44.644130 |    101.868495 |                11.211523 |              1 |            0 |
| 4    |        49.712859 |            9.652075 |             28.317406 |    40.060784 |    108.168725 |                 7.918501 |              1 |            0 |
| 5    |        40.250200 |           13.921907 |             25.124950 |    26.328293 |    130.327871 |                 2.230652 |              1 |            0 |
| 6    |        53.432928 |           15.864336 |             37.165934 |    37.568592 |    120.567523 |                 5.988551 |              1 |            0 |
| 7    |        45.366754 |           10.755611 |             29.038349 |    34.611142 |    117.270068 |               -10.675871 |              1 |            0 |
| 8    |        43.790190 |           13.533753 |             42.690814 |    30.256437 |    125.002893 |                13.289018 |              1 |            0 |
| 9    |        36.686353 |            5.010884 |             41.948751 |    31.675469 |     84.241415 |                 0.664437 |              1 |            0 |

In [23]:

```
# 删除其中一个特征
df.drop("class_Normal",axis = 1, inplace = True) 
df.head(10)
# 比起两行代码，我们可以简化成一步： pd.get_dummies(data,drop_first = True)
```

Out[23]:

|      | pelvic_incidence | pelvic_tilt numeric | lumbar_lordosis_angle | sacral_slope | pelvic_radius | degree_spondylolisthesis | class_Abnormal |
| :--- | ---------------: | ------------------: | --------------------: | -----------: | ------------: | -----------------------: | -------------: |
| 0    |        63.027818 |           22.552586 |             39.609117 |    40.475232 |     98.672917 |                -0.254400 |              1 |
| 1    |        39.056951 |           10.060991 |             25.015378 |    28.995960 |    114.405425 |                 4.564259 |              1 |
| 2    |        68.832021 |           22.218482 |             50.092194 |    46.613539 |    105.985135 |                -3.530317 |              1 |
| 3    |        69.297008 |           24.652878 |             44.311238 |    44.644130 |    101.868495 |                11.211523 |              1 |
| 4    |        49.712859 |            9.652075 |             28.317406 |    40.060784 |    108.168725 |                 7.918501 |              1 |
| 5    |        40.250200 |           13.921907 |             25.124950 |    26.328293 |    130.327871 |                 2.230652 |              1 |
| 6    |        53.432928 |           15.864336 |             37.165934 |    37.568592 |    120.567523 |                 5.988551 |              1 |
| 7    |        45.366754 |           10.755611 |             29.038349 |    34.611142 |    117.270068 |               -10.675871 |              1 |
| 8    |        43.790190 |           13.533753 |             42.690814 |    30.256437 |    125.002893 |                13.289018 |              1 |
| 9    |        36.686353 |            5.010884 |             41.948751 |    31.675469 |     84.241415 |                 0.664437 |              1 |

其他预处理步骤是centering、scaling或normalizing

- 在KNN算法中，你会注意到KNN使用距离的形式进行分类。因此，我们需要缩放数据。所以我们使用：
  - standardization: ( x - x.mean) / x.variance 或 x - x.min / x.range
- pipeline: 管道的目的是封装几个步骤，如svm(分类器)和standardization(预处理)
- 如何创建参数名:例如 SVM_ _C: stepName__parameterName
- 然后进行网格搜索以找到最佳参数

In [24]:

```
# SVM, pre-process 和 pipeline
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
steps = [('scalar', StandardScaler()),
         ('SVM', SVC())]
pipeline = Pipeline(steps)
parameters = {'SVM__C':[1, 10, 100],
              'SVM__gamma':[0.1, 0.01]}
x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2,random_state = 1)
cv = GridSearchCV(pipeline,param_grid=parameters,cv=3)
cv.fit(x_train,y_train)

y_pred = cv.predict(x_test)

print("Accuracy: {}".format(cv.score(x_test, y_test)))
print("Tuned Model Parameters: {}".format(cv.best_params_))
Accuracy: 0.8548387096774194
Tuned Model Parameters: {'SVM__C': 100, 'SVM__gamma': 0.01}
/opt/conda/lib/python3.6/site-packages/sklearn/model_selection/_search.py:841: DeprecationWarning: The default of the `iid` parameter will change from True to False in version 0.22 and will be removed in 0.24. This will change numeric results when test-set sizes are unequal.
  DeprecationWarning)
```

## 无监督学习

- 无监督学习:它使用未标记的数据，并从未标记的数据中发现隐藏的模式。例如，有一些骨科患者的数据没有标签。你不知道哪个骨科病人是 *normal* 还是*abnormal*。
- 如你所知，骨科患者的数据是有标记(监督)的数据。它有目标变量。为了进行无监督学习，让我们去掉目标变量，只考虑 *pelvic_radius(盆腔半径)* 和 *degree_spondylolisthesis(脊椎前移度)*

### K-Means

聚类算法的详细讲解请参考[链接](https://www.kesci.com/home/project/5c1211db43e8e5002ba02627)。

- 让我们尝试第一个非监督方法，即K-Means聚类算法。
- K-Means聚类: 该算法根据提供的特性，迭代地将每个数据点分配给K个组中的一个。数据点是基于特征相似性聚类的。
- KMeans(n_clusters = 2): n_clusters = 2 表示创建两个簇，即分成两类。

In [25]:

```
# 数据没有lable
data = pd.read_csv('.column_2C_weka.csv')
plt.scatter(data['pelvic_radius'],data['degree_spondylolisthesis'])
plt.xlabel('pelvic_radius')
plt.ylabel('degree_spondylolisthesis')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/B1033A1FFFE049AE8F42FFD72DD918BB/pm11xwstkl.png)

In [26]:

```
# K-Means聚类
data2 = data.loc[:,['degree_spondylolisthesis','pelvic_radius']]
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters = 2)
kmeans.fit(data2)
labels = kmeans.predict(data2)
plt.scatter(data['pelvic_radius'],data['degree_spondylolisthesis'],c = labels)
plt.xlabel('pelvic_radius')
plt.xlabel('degree_spondylolisthesis')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/42AED10B6B4742E98EE2F34AE5476122/pm11xw61rh.png)

### 效果评估

我们把数据分成了两组，这个聚类结果是否正确?为了评估聚类结果，我们将使用cross tabulation table（交叉表）。

- 有两个簇分别是*0*和*1*
- 第一类*0*包括138例异常和100例正常
- 第二类*1*包括72例异常，0例正常
- 两组患者中多数是异常患者。

In [27]:

```
# 交叉表
df = pd.DataFrame({'labels':labels,"class":data['class']})
ct = pd.crosstab(df['labels'],df['class'])
print(ct)
class   Abnormal  Normal
labels                  
0             72       0
1            138     100
```

在上文使用的数据中，我们是知道数据分为两类的。但是在无监督问题中，类属性或者明确的类成员划分是不存在的。
那么就出现了新的问题，在不知道类的数量时，怎样才能知道簇的最有数目是多少？

- inertia: float型，每个点到其簇的质心的距离之和。
- inertia越低意味着簇越多
- 簇的最佳数量是多少?
  - 随着簇个数的增加，样本划分会更加精细，每个簇的聚合程度会逐渐提高，inertia自然越来越小。而当到达最佳聚类数时，再增加簇的个数所得到的聚合程度回报会迅速变小，所以inertia的下降幅度会骤减，然后随着簇个数的继续增大而趋于平缓，也就是说簇的个数和inertia的关系图是一个手肘的形状，而这个肘部对应的簇的个数就是数据的最佳聚类数。
    - 在下图中可以看出肘部值是簇数=2。

In [28]:

```
# inertia
inertia_list = np.empty(8)
for i in range(1,8):
    kmeans = KMeans(n_clusters=i)
    kmeans.fit(data2)
    inertia_list[i] = kmeans.inertia_
plt.plot(range(0,8),inertia_list,'-o')
plt.xlabel('Number of cluster')
plt.ylabel('Inertia')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/7CBD7AECCF3C4B73AAD2F63E305A6E22/pm11xwz95w.png)

### 标准化

- Standardizaton标准化（标准化）对监督学习和无监督学习都很重要
- 不要忘记Standardizaton是预处理过程。
- 我们已经有了可视化的数据，你已经知道了结果。现在我们可以使所有特征进行聚类。
- 我们可以像监督学习一样使用 pipeline 。

In [29]:

```
data = pd.read_csv('.column_2C_weka.csv')
data3 = data.drop('class',axis = 1)
```

In [30]:

```
# StandardScaler：相当于（原始数值-均值）/标准差，使各特征的均值为0，方差为1
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
scalar = StandardScaler()
kmeans = KMeans(n_clusters = 2)
pipe = make_pipeline(scalar,kmeans)
pipe.fit(data3)
labels = pipe.predict(data3)
df = pd.DataFrame({'labels':labels,"class":data['class']})
ct = pd.crosstab(df['labels'],df['class'])
print(ct)
class   Abnormal  Normal
labels                  
0             94      90
1            116      10
```

### 层次聚类

层次聚类(Hierarchical Clustering)是一种聚类算法，通过计算不同类别数据点间的相似度来创建一棵有层次的嵌套聚类树。在聚类树中，不同类别的原始数据点是树的最低层，树的顶层是一个聚类的根节点。

- [层次聚类算法的原理及实现](http://bluewhale.cc/2016-04-19/hierarchical-clustering.html#ixzz58ZXsykA1)

In [31]:

```
from scipy.cluster.hierarchy import linkage,dendrogram
# 使用linkage函数对samples进行层次聚类
merg = linkage(data3.iloc[200:220,:],method = 'single')
# 使用dendrogram函数绘制树形图
dendrogram(merg, leaf_rotation = 90, leaf_font_size = 6)
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/9F3FAB12D27841BD8DBF60119E089970/pm11xx5igs.png)

### T - SNE

- t-SNE 算法是一种十分强大的高维数据降维方法

- learning_rate:正常是50-200

- fit_transform: 即可以 fit 也可以 transform ， t-sne 只有 fit_transform

- 具有相同位置的是同一类

  [详解可视化利器 t-SNE 算法：数无形时少直觉](http://https//www.jiqizhixin.com/articles/2017-11-13-7)

In [32]:

```
from sklearn.manifold import TSNE
model = TSNE(learning_rate=100)
transformed = model.fit_transform(data2)
x = transformed[:,0]
y = transformed[:,1]
plt.scatter(x,y,c = color_list )
plt.xlabel('pelvic_radius')
plt.xlabel('degree_spondylolisthesis')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/D6A26B51FFA742BF9AFDB7CC8F5582D3/pm11xy6el2.png)

### PCA

- 常用降维方法
- 第一步是去相关:
  - 旋转要与轴对齐的数据样本
  - 平移数据样本，使其均值为零
  - 没有信息丢失
  - fit():学习如何移动样本
  - transform():应用所学的转换，还可以应用测试数据
- 得到的PCA特征不是线性相关的
- 主成分:方差方向

In [33]:

```
# PCA
from sklearn.decomposition import PCA
model = PCA()
model.fit(data3)
transformed = model.transform(data3)
print('Principle components: ',model.components_)
Principle components:  [[ 3.23645647e-01  1.13192291e-01  3.03674740e-01  2.10453357e-01
  -2.99598300e-02  8.63153779e-01]
 [-4.76634849e-01 -9.85632787e-02 -5.32783979e-01 -3.78071570e-01
   3.21809199e-01  4.82438036e-01]
 [-1.54481282e-03 -2.64657410e-01 -4.96541893e-01  2.63112598e-01
  -7.74612852e-01  1.18940778e-01]
 [ 3.73677251e-01  7.54113757e-01 -3.39411757e-01 -3.80436506e-01
  -1.75106042e-01 -3.29143086e-02]
 [-4.41703869e-01  7.35414748e-02  5.12024113e-01 -5.15245344e-01
  -5.14639730e-01  8.35992525e-02]
 [ 5.77350269e-01 -5.77350269e-01 -1.08930072e-11 -5.77350269e-01
  -3.59059872e-12  3.06729795e-12]]
```

In [34]:

```
# PCA方差
scaler = StandardScaler()
pca = PCA()
pipeline = make_pipeline(scaler,pca)
pipeline.fit(data3)

plt.bar(range(pca.n_components_), pca.explained_variance_)
plt.xlabel('PCA feature')
plt.ylabel('variance')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/AE370D28B74341C98AA3112E412CC3B4/pm11xyzc1p.png)

- 第二步: 固有维数（intrinsic dimension）
- 当样本具有任意数量的特征时，PAC可以识别出样本的固有维数
- 固有维数=方差显著的PAC特征个数
- 为了选择固有维数，我们需要试遍所有维数，找出最准确的维数

In [35]:

```
# PCA
pca = PCA(n_components = 2)
pca.fit(data3)
transformed = pca.transform(data3)
x = transformed[:,0]
y = transformed[:,1]
plt.scatter(x,y,c = color_list)
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/E8AB90813EDB4EC080A14C1B0AE6B32C/pm11xzk11h.png)