## 简介

该数据集采集于葡萄牙北部“Vinho Verde”葡萄酒，由于隐私和物流问题，只有理化变量特征是可以进行使用的(例如，数据集中没有关于葡萄品种、葡萄酒品牌、葡萄酒销售价格等的数据)。本篇notebook使用了红葡萄酒质量的数据集，并用KNN进行分类模型的训练。

## 加载数据集

In [1]:

```
#加载库
import pandas as pd
import numpy as np
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sns
/opt/conda/lib/python3.5/site-packages/matplotlib/font_manager.py:229: UserWarning: Matplotlib is building the font cache using fc-list. This may take a moment.
  'Matplotlib is building the font cache using fc-list. '
```

In [2]:

```
#加载数据
df = pd.read_csv("./winequality-red.csv")
df.head()
```

Out[2]:

|      | fixed acidity | volatile acidity | citric acid | residual sugar | chlorides | free sulfur dioxide | total sulfur dioxide | density |   pH | sulphates | alcohol | quality |
| :--- | ------------: | ---------------: | ----------: | -------------: | --------: | ------------------: | -------------------: | ------: | ---: | --------: | ------: | ------: |
| 0    |           7.4 |             0.70 |        0.00 |            1.9 |     0.076 |                11.0 |                 34.0 |  0.9978 | 3.51 |      0.56 |     9.4 |       5 |
| 1    |           7.8 |             0.88 |        0.00 |            2.6 |     0.098 |                25.0 |                 67.0 |  0.9968 | 3.20 |      0.68 |     9.8 |       5 |
| 2    |           7.8 |             0.76 |        0.04 |            2.3 |     0.092 |                15.0 |                 54.0 |  0.9970 | 3.26 |      0.65 |     9.8 |       5 |
| 3    |          11.2 |             0.28 |        0.56 |            1.9 |     0.075 |                17.0 |                 60.0 |  0.9980 | 3.16 |      0.58 |     9.8 |       6 |
| 4    |           7.4 |             0.70 |        0.00 |            1.9 |     0.076 |                11.0 |                 34.0 |  0.9978 | 3.51 |      0.56 |     9.4 |       5 |

In [3]:

```
#查看数据集行列数
print("该数据集共有 {} 行 {} 列".format(df.shape[0],df.shape[1])) 
该数据集共有 1599 行 12 列
```

In [4]:

```
#查看特征和空值
print("查看空值：")
df.isnull().any()
查看空值：
```

Out[4]:

```
fixed acidity           False
volatile acidity        False
citric acid             False
residual sugar          False
chlorides               False
free sulfur dioxide     False
total sulfur dioxide    False
density                 False
pH                      False
sulphates               False
alcohol                 False
quality                 False
dtype: bool
```

In [5]:

```
# 查看葡萄酒质量情况分布
score = df.groupby("quality").agg({"fixed acidity": lambda x: len(x)})
score = score.reset_index()
score.columns = ["quality","count"]
score
```

Out[5]:

|      | quality | count |
| :--- | ------: | ----: |
| 0    |       3 |  10.0 |
| 1    |       4 |  53.0 |
| 2    |       5 | 681.0 |
| 3    |       6 | 638.0 |
| 4    |       7 | 199.0 |
| 5    |       8 |  18.0 |

In [11]:

```
sns.barplot(x = 'quality', y = 'count', data = score, palette="rocket").set_title("葡萄酒质量分布")
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/69C0F9F22617475583A0467570B7DE68/pji4v9x0se.png)

## 高质量红酒的定义

我们将评分为6分及以上的红酒定义为高质量红酒。

本研究的目的是建立KNN模型，区分“高质量红酒”与非“高质量红酒”，是一个**二元分类**问题。

In [12]:

```
df["GoodWine"] = df.quality.apply(lambda x: 1 if x >=6 else 0)
```

## 将数据转为NumPy Arrays

SciKit-Learn接受NumPy Arrays形式的输入，因此我们把11个特征(features)和分类标签(classification label)改成NumPy Arrays的形式。

In [13]:

```
#特征
X = np.array(df[df.columns[:11]])
X
```

Out[13]:

```
array([[ 7.4  ,  0.7  ,  0.   , ...,  3.51 ,  0.56 ,  9.4  ],
       [ 7.8  ,  0.88 ,  0.   , ...,  3.2  ,  0.68 ,  9.8  ],
       [ 7.8  ,  0.76 ,  0.04 , ...,  3.26 ,  0.65 ,  9.8  ],
       ...,
       [ 6.3  ,  0.51 ,  0.13 , ...,  3.42 ,  0.75 , 11.   ],
       [ 5.9  ,  0.645,  0.12 , ...,  3.57 ,  0.71 , 10.2  ],
       [ 6.   ,  0.31 ,  0.47 , ...,  3.39 ,  0.66 , 11.   ]])
```

In [14]:

```
#分类标签
y = np.array(df.GoodWine)
y
```

Out[14]:

```
array([0, 0, 0, ..., 1, 0, 1])
```

## 将数据集分为training/test set

我们有1599行数据，按照70%和30%将数据集分为training set和test set。

In [15]:

```
# 将数据打乱并分开
from sklearn.cross_validation import train_test_split
X_train_unproc, X_test_unproc, y_train, y_test = train_test_split(X,y,test_size = 0.3)
X_train_unproc
/opt/conda/lib/python3.5/site-packages/sklearn/cross_validation.py:41: DeprecationWarning: This module was deprecated in version 0.18 in favor of the model_selection module into which all the refactored classes and functions are moved. Also note that the interface of the new CV iterators are different from that of this module. This module will be removed in 0.20.
  "This module will be removed in 0.20.", DeprecationWarning)
```

Out[15]:

```
array([[ 6.3 ,  0.76,  0.  , ...,  3.51,  0.6 , 11.5 ],
       [ 7.  ,  0.54,  0.09, ...,  3.43,  0.59, 11.5 ],
       [ 7.6 ,  0.41,  0.24, ...,  3.28,  0.59,  9.5 ],
       ...,
       [ 5.5 ,  0.49,  0.03, ...,  3.5 ,  0.82, 14.  ],
       [ 6.7 ,  0.76,  0.02, ...,  3.55,  0.63,  9.95],
       [12.7 ,  0.6 ,  0.65, ...,  3.03,  0.57,  9.9 ]])
```

## 数据归一化(Normalisation)

因为KNN模型对数据的缩放(scaling)很敏感，我们根据training set数据进行归一化，并把同样的转换加诸于test set上。这样能够确保每个特征对KNN模型的影响力一样大。

In [16]:

```
# data normalisation
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler().fit(X_train_unproc)

X_train = scaler.transform(X_train_unproc)
X_test = scaler.transform(X_test_unproc)

X_train
```

Out[16]:

```
array([[-1.16646468,  1.33099342, -1.39981201, ...,  1.35100935,
        -0.33536614,  1.03872132],
       [-0.76136967,  0.07449276, -0.93434806, ...,  0.81310526,
        -0.3998685 ,  1.03872132],
       [-0.41414538, -0.66798491, -0.1585748 , ..., -0.19546493,
        -0.3998685 , -0.86291745],
       ...,
       [-1.6294304 , -0.21107557, -1.24465736, ...,  1.28377134,
         1.08368572,  3.41576977],
       [-0.93498182,  1.33099342, -1.29637558, ...,  1.6199614 ,
        -0.14185907, -0.43504872],
       [ 2.53726107,  0.41717476,  1.9618721 , ..., -1.87641523,
        -0.52887322, -0.48258969]])
```

## 训练KNN分类器

KNN算法主要考虑三个重要要素：

- K值的选择
- 距离度量的方式
- 分类决策规则

在这里，我们先给k值选择一个较小的值，然后通过交叉验证选择一个合适k值。

假定k = 3，建立一个KNN分类器，并查看其准确率。

In [17]:

```
from sklearn.neighbors import KNeighborsClassifier

#初始化
k = 3
clf = KNeighborsClassifier(k)

#使用training set训练模型
clf.fit(X_train, y_train)
```

Out[17]:

```
KNeighborsClassifier(algorithm='auto', leaf_size=30, metric='minkowski',
           metric_params=None, n_jobs=1, n_neighbors=3, p=2,
           weights='uniform')
```

In [18]:

```
# training set正确率
print("训练集正确率：{}%".format(round(clf.score(X_train, y_train)*100,2)))
训练集正确率：86.51%
```

5折交叉验证

In [19]:

```
# cross validation正确率
from sklearn import cross_validation as cv
scores = cv.cross_val_score(clf, X_train, y_train, cv = 5)
score = scores.mean()
print("交叉验证正确率：{}%".format(round(score*100, 2)))
交叉验证正确率：72.93%
```

## 选择最优的k

我们使用交叉验证(cross validation)选择最好的k，使得KNN分类器在未来的数据上有最好的表现。

这里我们尝试了k = 1,2,3,...100。

In [20]:

```
# selecting the best k
ks = range(1,100)
inSampleScores = []
crossValidationScores = []
d = {} #key = k, value = cv accuracy rate

for k in ks:
    clf = KNeighborsClassifier(k).fit(X_train, y_train)
    inSampleScores.append(clf.score(X_train, y_train))
    scores = cv.cross_val_score(clf, X_train, y_train, cv = 5)
    crossValidationScores.append(scores.mean())
    d[k] = scores.mean()
```

In [21]:

```
# 画图
import matplotlib.pyplot as plt

p1 = plt.plot(ks, inSampleScores)
p2 = plt.plot(ks, crossValidationScores)
plt.legend(["train正确率", "cv正确率"])
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/421F6DDBA46A4AAE8409FDCA99272304/pji5chl84x.png)

In [22]:

```
# 选择最好的k
best_k = sorted(d.items(), key = lambda x:x[1], reverse = True)[0][0]
print("最优的k值：{}".format(best_k))
最优的k值：98
```

## 将最好的KNN分类器应用于test set上

In [23]:

```
#建模
clf = KNeighborsClassifier(best_k).fit(X_train, y_train)

#预测
y_test_pred = clf.predict(X_test)
```

In [24]:

```
#正确率
print("测试集正确率：{}%".format(round(clf.score(X_test, y_test)*100, 2)))
测试集正确率：73.54%
```

In [28]:

```
# 混淆矩阵 (confusion matrix)
from sklearn.metrics import confusion_matrix
cnf_matrix = confusion_matrix(y_test, y_test_pred)

class_names = [0,1]
plot_confusion_matrix(cnf_matrix , classes=class_names, title='Confusion matrix')
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/5F63E956F4CB44C38FA7ACB8D7589332/pji5hj751q.png)

In [30]:

```
# 评估报告
from sklearn.metrics import classification_report
print(classification_report(y_test, y_test_pred))
             precision    recall  f1-score   support

          0       0.74      0.70      0.72       231
          1       0.73      0.77      0.75       249

avg / total       0.74      0.74      0.73       480
```