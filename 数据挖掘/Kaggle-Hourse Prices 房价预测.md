## Hourse Prices目录[¶](#Hourse-Prices目录)

### 1、数据导入与预处理[¶](#1、数据导入与预处理)

- 1.1 模块导入  
- 1.2 数据导入  
- 1.3 Id特征处理  
- 1.4 异常值处理  
- 1.5 SalePrice特征处理  

### 2、特征工程[¶](#2、特征工程)

- 2.1 数据集连接  
- 2.2 缺失数据分析  
- 2.3 数据相关性  
- 2.4 缺失值填充  
- 2.5 标签编码  
- 2.6 增加特征  
- 2.7 倾斜特征  
- 2.8 独热编码  
- 2.9 重新划分数据集  
- 2.10 特征重要性检测  

### 3、基础模型[¶](#3、基础模型)

- 3.1 定义交叉验证策略  
- 3.2 建立基础模型  
- 3.3 基础模型分数  

### 4、模型融合[¶](#4、模型融合)

- 4.1 方法一：模型平均  
  - 4.1.1 模型平均类  
  - 4.1.2 模型平均分数  
- 4.2 方法二：模型叠加  
  - 4.2.1 模型叠加类  
  - 4.2.2 模型叠加分数  

### 5、模型训练与预测[¶](#5、模型训练与预测)

- 5.1 定义评估函数  
- 5.2 模型训练、预测、评估  
- 5.3 集成预测  
- 5.4 生成结果文件  

# 数据导入与预处理[¶](#数据导入与预处理)

## 模块导入[¶](#模块导入)

In [208]:

```
import numpy as np
import pandas as pd
%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from scipy import stats
from scipy.stats import norm, skew
from scipy.special import boxcox1p

from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import ElasticNet, Lasso, BayesianRidge, LassoLarsIC
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.kernel_ridge import KernelRidge
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import RobustScaler
from sklearn.base import BaseEstimator, TransformerMixin, RegressorMixin, clone
from sklearn.model_selection import KFold, cross_val_score, train_test_split
from sklearn.metrics import mean_squared_error
import xgboost as xgb
import lightgbm as lgb
```

## 数据导入[¶](#数据导入)

In [209]:

```
train = pd.read_csv('/home/kesci/input/hourse6965/train.csv')
test = pd.read_csv('/home/kesci/input/hourse6965/test.csv')
```

In [210]:

```
train.head(5)
```

Out[210]:

|      | Id   | MSSubClass | MSZoning | LotFrontage | LotArea | Street | Alley | LotShape | LandContour | Utilities | LotConfig | LandSlope | Neighborhood | Condition1 | Condition2 | BldgType | HouseStyle | OverallQual | OverallCond | YearBuilt | YearRemodAdd | RoofStyle | RoofMatl | Exterior1st | Exterior2nd | MasVnrType | MasVnrArea | ExterQual | ExterCond | Foundation | BsmtQual | BsmtCond | BsmtExposure | BsmtFinType1 | BsmtFinSF1 | BsmtFinType2 | BsmtFinSF2 | BsmtUnfSF | TotalBsmtSF | Heating | ...  | CentralAir | Electrical | 1stFlrSF | 2ndFlrSF | LowQualFinSF | GrLivArea | BsmtFullBath | BsmtHalfBath | FullBath | HalfBath | BedroomAbvGr | KitchenAbvGr | KitchenQual | TotRmsAbvGrd | Functional | Fireplaces | FireplaceQu | GarageType | GarageYrBlt | GarageFinish | GarageCars | GarageArea | GarageQual | GarageCond | PavedDrive | WoodDeckSF | OpenPorchSF | EnclosedPorch | 3SsnPorch | ScreenPorch | PoolArea | PoolQC | Fence | MiscFeature | MiscVal | MoSold | YrSold | SaleType | SaleCondition | SalePrice |
| ---- | ---- | ---------- | -------- | ----------- | ------- | ------ | ----- | -------- | ----------- | --------- | --------- | --------- | ------------ | ---------- | ---------- | -------- | ---------- | ----------- | ----------- | --------- | ------------ | --------- | -------- | ----------- | ----------- | ---------- | ---------- | --------- | --------- | ---------- | -------- | -------- | ------------ | ------------ | ---------- | ------------ | ---------- | --------- | ----------- | ------- | ---- | ---------- | ---------- | -------- | -------- | ------------ | --------- | ------------ | ------------ | -------- | -------- | ------------ | ------------ | ----------- | ------------ | ---------- | ---------- | ----------- | ---------- | ----------- | ------------ | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------- | ------------- | --------- | ----------- | -------- | ------ | ----- | ----------- | ------- | ------ | ------ | -------- | ------------- | --------- |
| 0    | 1    | 60         | RL       | 65.0        | 8450    | Pave   | NaN   | Reg      | Lvl         | AllPub    | Inside    | Gtl       | CollgCr      | Norm       | Norm       | 1Fam     | 2Story     | 7           | 5           | 2003      | 2003         | Gable     | CompShg  | VinylSd     | VinylSd     | BrkFace    | 196.0      | Gd        | TA        | PConc      | Gd       | TA       | No           | GLQ          | 706        | Unf          | 0          | 150       | 856         | GasA    | ...  | Y          | SBrkr      | 856      | 854      | 0            | 1710      | 1            | 0            | 2        | 1        | 3            | 1            | Gd          | 8            | Typ        | 0          | NaN         | Attchd     | 2003.0      | RFn          | 2          | 548        | TA         | TA         | Y          | 0          | 61          | 0             | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 2      | 2008   | WD       | Normal        | 208500    |
| 1    | 2    | 20         | RL       | 80.0        | 9600    | Pave   | NaN   | Reg      | Lvl         | AllPub    | FR2       | Gtl       | Veenker      | Feedr      | Norm       | 1Fam     | 1Story     | 6           | 8           | 1976      | 1976         | Gable     | CompShg  | MetalSd     | MetalSd     | None       | 0.0        | TA        | TA        | CBlock     | Gd       | TA       | Gd           | ALQ          | 978        | Unf          | 0          | 284       | 1262        | GasA    | ...  | Y          | SBrkr      | 1262     | 0        | 0            | 1262      | 0            | 1            | 2        | 0        | 3            | 1            | TA          | 6            | Typ        | 1          | TA          | Attchd     | 1976.0      | RFn          | 2          | 460        | TA         | TA         | Y          | 298        | 0           | 0             | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 5      | 2007   | WD       | Normal        | 181500    |
| 2    | 3    | 60         | RL       | 68.0        | 11250   | Pave   | NaN   | IR1      | Lvl         | AllPub    | Inside    | Gtl       | CollgCr      | Norm       | Norm       | 1Fam     | 2Story     | 7           | 5           | 2001      | 2002         | Gable     | CompShg  | VinylSd     | VinylSd     | BrkFace    | 162.0      | Gd        | TA        | PConc      | Gd       | TA       | Mn           | GLQ          | 486        | Unf          | 0          | 434       | 920         | GasA    | ...  | Y          | SBrkr      | 920      | 866      | 0            | 1786      | 1            | 0            | 2        | 1        | 3            | 1            | Gd          | 6            | Typ        | 1          | TA          | Attchd     | 2001.0      | RFn          | 2          | 608        | TA         | TA         | Y          | 0          | 42          | 0             | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 9      | 2008   | WD       | Normal        | 223500    |
| 3    | 4    | 70         | RL       | 60.0        | 9550    | Pave   | NaN   | IR1      | Lvl         | AllPub    | Corner    | Gtl       | Crawfor      | Norm       | Norm       | 1Fam     | 2Story     | 7           | 5           | 1915      | 1970         | Gable     | CompShg  | Wd Sdng     | Wd Shng     | None       | 0.0        | TA        | TA        | BrkTil     | TA       | Gd       | No           | ALQ          | 216        | Unf          | 0          | 540       | 756         | GasA    | ...  | Y          | SBrkr      | 961      | 756      | 0            | 1717      | 1            | 0            | 1        | 0        | 3            | 1            | Gd          | 7            | Typ        | 1          | Gd          | Detchd     | 1998.0      | Unf          | 3          | 642        | TA         | TA         | Y          | 0          | 35          | 272           | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 2      | 2006   | WD       | Abnorml       | 140000    |
| 4    | 5    | 60         | RL       | 84.0        | 14260   | Pave   | NaN   | IR1      | Lvl         | AllPub    | FR2       | Gtl       | NoRidge      | Norm       | Norm       | 1Fam     | 2Story     | 8           | 5           | 2000      | 2000         | Gable     | CompShg  | VinylSd     | VinylSd     | BrkFace    | 350.0      | Gd        | TA        | PConc      | Gd       | TA       | Av           | GLQ          | 655        | Unf          | 0          | 490       | 1145        | GasA    | ...  | Y          | SBrkr      | 1145     | 1053     | 0            | 2198      | 1            | 0            | 2        | 1        | 4            | 1            | Gd          | 9            | Typ        | 1          | TA          | Attchd     | 2000.0      | RFn          | 3          | 836        | TA         | TA         | Y          | 192        | 84          | 0             | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 12     | 2008   | WD       | Normal        | 250000    |

5 rows × 81 columns

In [211]:

```
test.head(5)
```

Out[211]:

|      | Id   | MSSubClass | MSZoning | LotFrontage | LotArea | Street | Alley | LotShape | LandContour | Utilities | LotConfig | LandSlope | Neighborhood | Condition1 | Condition2 | BldgType | HouseStyle | OverallQual | OverallCond | YearBuilt | YearRemodAdd | RoofStyle | RoofMatl | Exterior1st | Exterior2nd | MasVnrType | MasVnrArea | ExterQual | ExterCond | Foundation | BsmtQual | BsmtCond | BsmtExposure | BsmtFinType1 | BsmtFinSF1 | BsmtFinType2 | BsmtFinSF2 | BsmtUnfSF | TotalBsmtSF | Heating | HeatingQC | CentralAir | Electrical | 1stFlrSF | 2ndFlrSF | LowQualFinSF | GrLivArea | BsmtFullBath | BsmtHalfBath | FullBath | HalfBath | BedroomAbvGr | KitchenAbvGr | KitchenQual | TotRmsAbvGrd | Functional | Fireplaces | FireplaceQu | GarageType | GarageYrBlt | GarageFinish | GarageCars | GarageArea | GarageQual | GarageCond | PavedDrive | WoodDeckSF | OpenPorchSF | EnclosedPorch | 3SsnPorch | ScreenPorch | PoolArea | PoolQC | Fence | MiscFeature | MiscVal | MoSold | YrSold | SaleType | SaleCondition |
| ---- | ---- | ---------- | -------- | ----------- | ------- | ------ | ----- | -------- | ----------- | --------- | --------- | --------- | ------------ | ---------- | ---------- | -------- | ---------- | ----------- | ----------- | --------- | ------------ | --------- | -------- | ----------- | ----------- | ---------- | ---------- | --------- | --------- | ---------- | -------- | -------- | ------------ | ------------ | ---------- | ------------ | ---------- | --------- | ----------- | ------- | --------- | ---------- | ---------- | -------- | -------- | ------------ | --------- | ------------ | ------------ | -------- | -------- | ------------ | ------------ | ----------- | ------------ | ---------- | ---------- | ----------- | ---------- | ----------- | ------------ | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------- | ------------- | --------- | ----------- | -------- | ------ | ----- | ----------- | ------- | ------ | ------ | -------- | ------------- |
| 0    | 1461 | 20         | RH       | 80.0        | 11622   | Pave   | NaN   | Reg      | Lvl         | AllPub    | Inside    | Gtl       | NAmes        | Feedr      | Norm       | 1Fam     | 1Story     | 5           | 6           | 1961      | 1961         | Gable     | CompShg  | VinylSd     | VinylSd     | None       | 0.0        | TA        | TA        | CBlock     | TA       | TA       | No           | Rec          | 468.0      | LwQ          | 144.0      | 270.0     | 882.0       | GasA    | TA        | Y          | SBrkr      | 896      | 0        | 0            | 896       | 0.0          | 0.0          | 1        | 0        | 2            | 1            | TA          | 5            | Typ        | 0          | NaN         | Attchd     | 1961.0      | Unf          | 1.0        | 730.0      | TA         | TA         | Y          | 140        | 0           | 0             | 0         | 120         | 0        | NaN    | MnPrv | NaN         | 0       | 6      | 2010   | WD       | Normal        |
| 1    | 1462 | 20         | RL       | 81.0        | 14267   | Pave   | NaN   | IR1      | Lvl         | AllPub    | Corner    | Gtl       | NAmes        | Norm       | Norm       | 1Fam     | 1Story     | 6           | 6           | 1958      | 1958         | Hip       | CompShg  | Wd Sdng     | Wd Sdng     | BrkFace    | 108.0      | TA        | TA        | CBlock     | TA       | TA       | No           | ALQ          | 923.0      | Unf          | 0.0        | 406.0     | 1329.0      | GasA    | TA        | Y          | SBrkr      | 1329     | 0        | 0            | 1329      | 0.0          | 0.0          | 1        | 1        | 3            | 1            | Gd          | 6            | Typ        | 0          | NaN         | Attchd     | 1958.0      | Unf          | 1.0        | 312.0      | TA         | TA         | Y          | 393        | 36          | 0             | 0         | 0           | 0        | NaN    | NaN   | Gar2        | 12500   | 6      | 2010   | WD       | Normal        |
| 2    | 1463 | 60         | RL       | 74.0        | 13830   | Pave   | NaN   | IR1      | Lvl         | AllPub    | Inside    | Gtl       | Gilbert      | Norm       | Norm       | 1Fam     | 2Story     | 5           | 5           | 1997      | 1998         | Gable     | CompShg  | VinylSd     | VinylSd     | None       | 0.0        | TA        | TA        | PConc      | Gd       | TA       | No           | GLQ          | 791.0      | Unf          | 0.0        | 137.0     | 928.0       | GasA    | Gd        | Y          | SBrkr      | 928      | 701      | 0            | 1629      | 0.0          | 0.0          | 2        | 1        | 3            | 1            | TA          | 6            | Typ        | 1          | TA          | Attchd     | 1997.0      | Fin          | 2.0        | 482.0      | TA         | TA         | Y          | 212        | 34          | 0             | 0         | 0           | 0        | NaN    | MnPrv | NaN         | 0       | 3      | 2010   | WD       | Normal        |
| 3    | 1464 | 60         | RL       | 78.0        | 9978    | Pave   | NaN   | IR1      | Lvl         | AllPub    | Inside    | Gtl       | Gilbert      | Norm       | Norm       | 1Fam     | 2Story     | 6           | 6           | 1998      | 1998         | Gable     | CompShg  | VinylSd     | VinylSd     | BrkFace    | 20.0       | TA        | TA        | PConc      | TA       | TA       | No           | GLQ          | 602.0      | Unf          | 0.0        | 324.0     | 926.0       | GasA    | Ex        | Y          | SBrkr      | 926      | 678      | 0            | 1604      | 0.0          | 0.0          | 2        | 1        | 3            | 1            | Gd          | 7            | Typ        | 1          | Gd          | Attchd     | 1998.0      | Fin          | 2.0        | 470.0      | TA         | TA         | Y          | 360        | 36          | 0             | 0         | 0           | 0        | NaN    | NaN   | NaN         | 0       | 6      | 2010   | WD       | Normal        |
| 4    | 1465 | 120        | RL       | 43.0        | 5005    | Pave   | NaN   | IR1      | HLS         | AllPub    | Inside    | Gtl       | StoneBr      | Norm       | Norm       | TwnhsE   | 1Story     | 8           | 5           | 1992      | 1992         | Gable     | CompShg  | HdBoard     | HdBoard     | None       | 0.0        | Gd        | TA        | PConc      | Gd       | TA       | No           | ALQ          | 263.0      | Unf          | 0.0        | 1017.0    | 1280.0      | GasA    | Ex        | Y          | SBrkr      | 1280     | 0        | 0            | 1280      | 0.0          | 0.0          | 2        | 0        | 2            | 1            | Gd          | 5            | Typ        | 0          | NaN         | Attchd     | 1992.0      | RFn          | 2.0        | 506.0      | TA         | TA         | Y          | 0          | 82          | 0             | 0         | 144         | 0        | NaN    | NaN   | NaN         | 0       | 1      | 2010   | WD       | Normal        |

## Id特征处理[¶](#Id特征处理)

In [212]:

```
# 处理前数据形状
print(train.shape)
print(test.shape)
(1460, 81)
(1459, 80)
```

In [213]:

```
train_Id = train['Id']
test_Id = test['Id']
train.drop('Id', axis=1, inplace=True)
test.drop('Id', axis=1, inplace=True)
```

In [214]:

```
# 处理后数据形状
print(train.shape)
print(test.shape)
(1460, 80)
(1459, 79)
```

## 异常值处理[¶](#异常值处理)

In [215]:

```
# 处理前数据分布
fig, ax = plt.subplots()
ax.scatter(x=train['GrLivArea'], y=train['SalePrice'])
plt.xlabel('GrLivArea', fontsize=13)
plt.ylabel('SalePrice', fontsize=13)
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/65287B5F621948148A20D4AD3D468E61/ph5qi8mali.png) 

In [216]:

```
# 删除右下角两个异常值
train = train.drop(train[(train['GrLivArea']>4000) & (train['SalePrice']<300000)].index)
```

In [217]:

```
# 处理后数据分布
fig, ax = plt.subplots()
ax.scatter(x=train['GrLivArea'], y=train['SalePrice'])
plt.xlabel('GrLivArea', fontsize=13)
plt.ylabel('SalePrice', fontsize=13)
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/EADD79369D0C43E9857EC42AD8A5FEC6/ph5qi88i0a.png) 

## SalePrice特征处理[¶](#SalePrice特征处理)

In [218]:

```
# 处理前数据分布
sns.distplot(train['SalePrice'], fit=norm)

(mu, sigma) = norm.fit(train['SalePrice'])
print('\n mu={:.2f} and sigma={:.2f} \n'.format(mu, sigma))

plt.legend(['Normal dist.($\mu=$ {:.2f} and $\sigma=$ {:.2f})'.format(mu, sigma)], loc='best')
plt.ylabel('Frequency')
plt.title('SalePrice distribution')

fig = plt.figure()
stats.probplot(train['SalePrice'], plot=plt)
plt.show()
/opt/conda/lib/python3.5/site-packages/matplotlib/axes/_axes.py:6499: MatplotlibDeprecationWarning: 
The 'normed' kwarg was deprecated in Matplotlib 2.1 and will be removed in 3.1. Use 'density' instead.
  alternative="'density'", removal="3.1")
 mu=180932.92 and sigma=79467.79 
```

![img](https://cdn.kesci.com/rt_upload/E7EEE80B2C484E4182E6B417F24AAAD0/ph5qi82drn.png) 

![img](https://cdn.kesci.com/rt_upload/E7EEE80B2C484E4182E6B417F24AAAD0/ph5qi8vloh.png) 

In [219]:

```
# 数据偏度大，用log1p函数转化，使其更加服从高斯分布。
# 最后需要将预测出的平滑数据进行还原，而还原过程就是log1p的逆运算expm1
train['SalePrice'] = np.log1p(train['SalePrice'])
```

In [220]:

```
# 处理后数据分布
sns.distplot(train['SalePrice'], fit=norm)

(mu, sigma) = norm.fit(train['SalePrice'])
print('\n mu={:.2f} and sigma={:.2f} \n'.format(mu, sigma))

plt.legend(['Normal dist.($\mu=$ {:.2f} and $\sigma=$ {:.2f})'.format(mu, sigma)], loc='best')
plt.ylabel('Frequency')
plt.title('SalePrice distribution')

fig = plt.figure()
stats.probplot(train['SalePrice'], plot=plt)
plt.show()
/opt/conda/lib/python3.5/site-packages/matplotlib/axes/_axes.py:6499: MatplotlibDeprecationWarning: 
The 'normed' kwarg was deprecated in Matplotlib 2.1 and will be removed in 3.1. Use 'density' instead.
  alternative="'density'", removal="3.1")
 mu=12.02 and sigma=0.40 
```

![img](https://cdn.kesci.com/rt_upload/37AE3D263272420DA2D6F59F4FD9BF52/ph5qi9bdwi.png) 

![img](https://cdn.kesci.com/rt_upload/37AE3D263272420DA2D6F59F4FD9BF52/ph5qi9twof.png) 

# 特征工程[¶](#特征工程)

## 数据集连接[¶](#数据集连接)

In [221]:

```
ntrain = train.shape[0]
ntest = test.shape[0]
y_train = train.SalePrice.values
all_data = pd.concat((train, test)).reset_index(drop=True)
all_data.drop(['SalePrice'], axis=1, inplace=True)
print('all_data size is {}'.format(all_data.shape))
all_data size is (2917, 79)
```

## 缺失数据分析[¶](#缺失数据分析)

In [222]:

```
all_data.isnull().head()
```

Out[222]:

|      | 1stFlrSF | 2ndFlrSF | 3SsnPorch | Alley | BedroomAbvGr | BldgType | BsmtCond | BsmtExposure | BsmtFinSF1 | BsmtFinSF2 | BsmtFinType1 | BsmtFinType2 | BsmtFullBath | BsmtHalfBath | BsmtQual | BsmtUnfSF | CentralAir | Condition1 | Condition2 | Electrical | EnclosedPorch | ExterCond | ExterQual | Exterior1st | Exterior2nd | Fence | FireplaceQu | Fireplaces | Foundation | FullBath | Functional | GarageArea | GarageCars | GarageCond | GarageFinish | GarageQual | GarageType | GarageYrBlt | GrLivArea | HalfBath | Heating | HeatingQC | HouseStyle | KitchenAbvGr | KitchenQual | LandContour | LandSlope | LotArea | LotConfig | LotFrontage | LotShape | LowQualFinSF | MSSubClass | MSZoning | MasVnrArea | MasVnrType | MiscFeature | MiscVal | MoSold | Neighborhood | OpenPorchSF | OverallCond | OverallQual | PavedDrive | PoolArea | PoolQC | RoofMatl | RoofStyle | SaleCondition | SaleType | ScreenPorch | Street | TotRmsAbvGrd | TotalBsmtSF | Utilities | WoodDeckSF | YearBuilt | YearRemodAdd | YrSold |
| ---- | -------- | -------- | --------- | ----- | ------------ | -------- | -------- | ------------ | ---------- | ---------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ---------- | ---------- | ---------- | ---------- | ------------- | --------- | --------- | ----------- | ----------- | ----- | ----------- | ---------- | ---------- | -------- | ---------- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- | ----------- | --------- | -------- | ------- | --------- | ---------- | ------------ | ----------- | ----------- | --------- | ------- | --------- | ----------- | -------- | ------------ | ---------- | -------- | ---------- | ---------- | ----------- | ------- | ------ | ------------ | ----------- | ----------- | ----------- | ---------- | -------- | ------ | -------- | --------- | ------------- | -------- | ----------- | ------ | ------------ | ----------- | --------- | ---------- | --------- | ------------ | ------ |
| 0    | False    | False    | False     | True  | False        | False    | False    | False        | False      | False      | False        | False        | False        | False        | False    | False     | False      | False      | False      | False      | False         | False     | False     | False       | False       | True  | True        | False      | False      | False    | False      | False      | False      | False      | False        | False      | False      | False       | False     | False    | False   | False     | False      | False        | False       | False       | False     | False   | False     | False       | False    | False        | False      | False    | False      | False      | True        | False   | False  | False        | False       | False       | False       | False      | False    | True   | False    | False     | False         | False    | False       | False  | False        | False       | False     | False      | False     | False        | False  |
| 1    | False    | False    | False     | True  | False        | False    | False    | False        | False      | False      | False        | False        | False        | False        | False    | False     | False      | False      | False      | False      | False         | False     | False     | False       | False       | True  | False       | False      | False      | False    | False      | False      | False      | False      | False        | False      | False      | False       | False     | False    | False   | False     | False      | False        | False       | False       | False     | False   | False     | False       | False    | False        | False      | False    | False      | False      | True        | False   | False  | False        | False       | False       | False       | False      | False    | True   | False    | False     | False         | False    | False       | False  | False        | False       | False     | False      | False     | False        | False  |
| 2    | False    | False    | False     | True  | False        | False    | False    | False        | False      | False      | False        | False        | False        | False        | False    | False     | False      | False      | False      | False      | False         | False     | False     | False       | False       | True  | False       | False      | False      | False    | False      | False      | False      | False      | False        | False      | False      | False       | False     | False    | False   | False     | False      | False        | False       | False       | False     | False   | False     | False       | False    | False        | False      | False    | False      | False      | True        | False   | False  | False        | False       | False       | False       | False      | False    | True   | False    | False     | False         | False    | False       | False  | False        | False       | False     | False      | False     | False        | False  |
| 3    | False    | False    | False     | True  | False        | False    | False    | False        | False      | False      | False        | False        | False        | False        | False    | False     | False      | False      | False      | False      | False         | False     | False     | False       | False       | True  | False       | False      | False      | False    | False      | False      | False      | False      | False        | False      | False      | False       | False     | False    | False   | False     | False      | False        | False       | False       | False     | False   | False     | False       | False    | False        | False      | False    | False      | False      | True        | False   | False  | False        | False       | False       | False       | False      | False    | True   | False    | False     | False         | False    | False       | False  | False        | False       | False     | False      | False     | False        | False  |
| 4    | False    | False    | False     | True  | False        | False    | False    | False        | False      | False      | False        | False        | False        | False        | False    | False     | False      | False      | False      | False      | False         | False     | False     | False       | False       | True  | False       | False      | False      | False    | False      | False      | False      | False      | False        | False      | False      | False       | False     | False    | False   | False     | False      | False        | False       | False       | False     | False   | False     | False       | False    | False        | False      | False    | False      | False      | True        | False   | False  | False        | False       | False       | False       | False      | False    | True   | False    | False     | False         | False    | False       | False  | False        | False       | False     | False      | False     | False        | False  |

In [223]:

```
all_data.isnull().sum().head(10)
```

Out[223]:

```
1stFlrSF           0
2ndFlrSF           0
3SsnPorch          0
Alley           2719
BedroomAbvGr       0
BldgType           0
BsmtCond          82
BsmtExposure      82
BsmtFinSF1         1
BsmtFinSF2         1
dtype: int64
```

In [224]:

```
all_data_na = (all_data.isnull().sum()/len(all_data))*100
all_data_na = all_data_na.drop(all_data_na[all_data_na == 0].index).sort_values(ascending=False)
missing_data = pd.DataFrame({'Missing Ratio' : all_data_na})
missing_data.head(20)
```

Out[224]:

|              | Missing Ratio |
| ------------ | ------------- |
| PoolQC       | 99.691464     |
| MiscFeature  | 96.400411     |
| Alley        | 93.212204     |
| Fence        | 80.425094     |
| FireplaceQu  | 48.680151     |
| LotFrontage  | 16.660953     |
| GarageQual   | 5.450806      |
| GarageCond   | 5.450806      |
| GarageFinish | 5.450806      |
| GarageYrBlt  | 5.450806      |
| GarageType   | 5.382242      |
| BsmtExposure | 2.811107      |
| BsmtCond     | 2.811107      |
| BsmtQual     | 2.776826      |
| BsmtFinType2 | 2.742544      |
| BsmtFinType1 | 2.708262      |
| MasVnrType   | 0.822763      |
| MasVnrArea   | 0.788481      |
| MSZoning     | 0.137127      |
| BsmtFullBath | 0.068564      |

In [225]:

```
# 含有缺失值的特征的缺失率
f, axis = plt.subplots(figsize=(15,12))
plt.xticks(rotation='90')
sns.barplot(x=all_data_na.index, y=all_data_na)
plt.xlabel('Features', fontsize=15)
plt.ylabel('Percent of missing values', fontsize=15)
plt.title('Percent missing data by feature', fontsize=15)
```

Out[225]:

```
Text(0.5, 1.0, 'Percent missing data by feature')
```

![img](https://cdn.kesci.com/rt_upload/EABD2820B16F43C28B28AFEF75D9A113/ph5qia4hmw.png) 

## 数据相关性[¶](#数据相关性)

In [226]:

```
# 全部数值特征
corrmat = train.corr()
plt.subplots(figsize=(15,12))
sns.heatmap(corrmat, vmax=0.9, square=True)
```

Out[226]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7ff046e50898>
```

![img](https://cdn.kesci.com/rt_upload/5EB83F4C1F484E1E9DE64AC1F76249DD/ph5qibvnwg.png) 

In [227]:

```
# 相关性最大的10个特征
corrmat = train.corr()
plt.subplots(figsize=(10,8))
k = 10
cols = corrmat.nlargest(k, 'SalePrice')['SalePrice'].index
cm = np.corrcoef(train[cols].values.T)
sns.heatmap(cm, cbar=True, annot=True, square=True, fmt='.2f', annot_kws={'size': 10}, yticklabels=cols.values, xticklabels=cols.values)
```

Out[227]:

```
<matplotlib.axes._subplots.AxesSubplot at 0x7ff046d80b38>
```

![img](https://cdn.kesci.com/rt_upload/96CEC2DA14514DF28AC25A65FD6F8517/ph5qicvha4.png) 

## 缺失值填充[¶](#缺失值填充)

In [228]:

```
all_data.head()
```

Out[228]:

|      | 1stFlrSF | 2ndFlrSF | 3SsnPorch | Alley | BedroomAbvGr | BldgType | BsmtCond | BsmtExposure | BsmtFinSF1 | BsmtFinSF2 | BsmtFinType1 | BsmtFinType2 | BsmtFullBath | BsmtHalfBath | BsmtQual | BsmtUnfSF | CentralAir | Condition1 | Condition2 | Electrical | EnclosedPorch | ExterCond | ExterQual | Exterior1st | Exterior2nd | Fence | FireplaceQu | Fireplaces | Foundation | FullBath | Functional | GarageArea | GarageCars | GarageCond | GarageFinish | GarageQual | GarageType | GarageYrBlt | GrLivArea | HalfBath | Heating | HeatingQC | HouseStyle | KitchenAbvGr | KitchenQual | LandContour | LandSlope | LotArea | LotConfig | LotFrontage | LotShape | LowQualFinSF | MSSubClass | MSZoning | MasVnrArea | MasVnrType | MiscFeature | MiscVal | MoSold | Neighborhood | OpenPorchSF | OverallCond | OverallQual | PavedDrive | PoolArea | PoolQC | RoofMatl | RoofStyle | SaleCondition | SaleType | ScreenPorch | Street | TotRmsAbvGrd | TotalBsmtSF | Utilities | WoodDeckSF | YearBuilt | YearRemodAdd | YrSold |
| ---- | -------- | -------- | --------- | ----- | ------------ | -------- | -------- | ------------ | ---------- | ---------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ---------- | ---------- | ---------- | ---------- | ------------- | --------- | --------- | ----------- | ----------- | ----- | ----------- | ---------- | ---------- | -------- | ---------- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- | ----------- | --------- | -------- | ------- | --------- | ---------- | ------------ | ----------- | ----------- | --------- | ------- | --------- | ----------- | -------- | ------------ | ---------- | -------- | ---------- | ---------- | ----------- | ------- | ------ | ------------ | ----------- | ----------- | ----------- | ---------- | -------- | ------ | -------- | --------- | ------------- | -------- | ----------- | ------ | ------------ | ----------- | --------- | ---------- | --------- | ------------ | ------ |
| 0    | 856      | 854      | 0         | NaN   | 3            | 1Fam     | TA       | No           | 706.0      | 0.0        | GLQ          | Unf          | 1.0          | 0.0          | Gd       | 150.0     | Y          | Norm       | Norm       | SBrkr      | 0             | TA        | Gd        | VinylSd     | VinylSd     | NaN   | NaN         | 0          | PConc      | 2        | Typ        | 548.0      | 2.0        | TA         | RFn          | TA         | Attchd     | 2003.0      | 1710      | 1        | GasA    | Ex        | 2Story     | 1            | Gd          | Lvl         | Gtl       | 8450    | Inside    | 65.0        | Reg      | 0            | 60         | RL       | 196.0      | BrkFace    | NaN         | 0       | 2      | CollgCr      | 61          | 5           | 7           | Y          | 0        | NaN    | CompShg  | Gable     | Normal        | WD       | 0           | Pave   | 8            | 856.0       | AllPub    | 0          | 2003      | 2003         | 2008   |
| 1    | 1262     | 0        | 0         | NaN   | 3            | 1Fam     | TA       | Gd           | 978.0      | 0.0        | ALQ          | Unf          | 0.0          | 1.0          | Gd       | 284.0     | Y          | Feedr      | Norm       | SBrkr      | 0             | TA        | TA        | MetalSd     | MetalSd     | NaN   | TA          | 1          | CBlock     | 2        | Typ        | 460.0      | 2.0        | TA         | RFn          | TA         | Attchd     | 1976.0      | 1262      | 0        | GasA    | Ex        | 1Story     | 1            | TA          | Lvl         | Gtl       | 9600    | FR2       | 80.0        | Reg      | 0            | 20         | RL       | 0.0        | None       | NaN         | 0       | 5      | Veenker      | 0           | 8           | 6           | Y          | 0        | NaN    | CompShg  | Gable     | Normal        | WD       | 0           | Pave   | 6            | 1262.0      | AllPub    | 298        | 1976      | 1976         | 2007   |
| 2    | 920      | 866      | 0         | NaN   | 3            | 1Fam     | TA       | Mn           | 486.0      | 0.0        | GLQ          | Unf          | 1.0          | 0.0          | Gd       | 434.0     | Y          | Norm       | Norm       | SBrkr      | 0             | TA        | Gd        | VinylSd     | VinylSd     | NaN   | TA          | 1          | PConc      | 2        | Typ        | 608.0      | 2.0        | TA         | RFn          | TA         | Attchd     | 2001.0      | 1786      | 1        | GasA    | Ex        | 2Story     | 1            | Gd          | Lvl         | Gtl       | 11250   | Inside    | 68.0        | IR1      | 0            | 60         | RL       | 162.0      | BrkFace    | NaN         | 0       | 9      | CollgCr      | 42          | 5           | 7           | Y          | 0        | NaN    | CompShg  | Gable     | Normal        | WD       | 0           | Pave   | 6            | 920.0       | AllPub    | 0          | 2001      | 2002         | 2008   |
| 3    | 961      | 756      | 0         | NaN   | 3            | 1Fam     | Gd       | No           | 216.0      | 0.0        | ALQ          | Unf          | 1.0          | 0.0          | TA       | 540.0     | Y          | Norm       | Norm       | SBrkr      | 272           | TA        | TA        | Wd Sdng     | Wd Shng     | NaN   | Gd          | 1          | BrkTil     | 1        | Typ        | 642.0      | 3.0        | TA         | Unf          | TA         | Detchd     | 1998.0      | 1717      | 0        | GasA    | Gd        | 2Story     | 1            | Gd          | Lvl         | Gtl       | 9550    | Corner    | 60.0        | IR1      | 0            | 70         | RL       | 0.0        | None       | NaN         | 0       | 2      | Crawfor      | 35          | 5           | 7           | Y          | 0        | NaN    | CompShg  | Gable     | Abnorml       | WD       | 0           | Pave   | 7            | 756.0       | AllPub    | 0          | 1915      | 1970         | 2006   |
| 4    | 1145     | 1053     | 0         | NaN   | 4            | 1Fam     | TA       | Av           | 655.0      | 0.0        | GLQ          | Unf          | 1.0          | 0.0          | Gd       | 490.0     | Y          | Norm       | Norm       | SBrkr      | 0             | TA        | Gd        | VinylSd     | VinylSd     | NaN   | TA          | 1          | PConc      | 2        | Typ        | 836.0      | 3.0        | TA         | RFn          | TA         | Attchd     | 2000.0      | 2198      | 1        | GasA    | Ex        | 2Story     | 1            | Gd          | Lvl         | Gtl       | 14260   | FR2       | 84.0        | IR1      | 0            | 60         | RL       | 350.0      | BrkFace    | NaN         | 0       | 12     | NoRidge      | 84          | 5           | 8           | Y          | 0        | NaN    | CompShg  | Gable     | Normal        | WD       | 0           | Pave   | 9            | 1145.0      | AllPub    | 192        | 2000      | 2000         | 2008   |

In [229]:

```
# 根据各特征的现实含义，填充合适的值
feature1 = ['PoolQC', 'MiscFeature', 'Alley', 'Fence', 'FireplaceQu', 'GarageType', 
            'GarageFinish', 'GarageQual', 'GarageCond', 'BsmtQual', 'BsmtCond', 
            'BsmtExposure','BsmtFinType1', 'BsmtFinType2', 'MasVnrType', 'MSSubClass']
for i in feature1:
    all_data[i] = all_data[i].fillna('None')
    
feature2 = ['GarageYrBlt', 'GarageArea', 'GarageCars', 'BsmtFinSF1', 'BsmtFinSF2', 
            'BsmtUnfSF','TotalBsmtSF', 'BsmtFullBath', 'BsmtHalfBath', 'MasVnrArea']
for i in feature2:
    all_data[i] = all_data[i].fillna(0)

feature3 = ['MSZoning', 'Electrical', 'KitchenQual', 'Exterior1st', 'Exterior2nd', 'SaleType']
for i in feature3:
    all_data[i] = all_data[i].fillna(all_data[i].mode()[0])
    
all_data['LotFrontage'] = all_data.groupby('Neighborhood')['LotFrontage'].transform(lambda x: x.fillna(x.median()))
all_data = all_data.drop(['Utilities'], axis=1)
all_data['Functional'] = all_data['Functional'].fillna('Typ')
```

In [230]:

```
# 填充完成后，查看是否还有缺失值
all_data_na = (all_data.isnull().sum()/len(all_data))*100
all_data_na = all_data_na.drop(all_data_na[all_data_na == 0].index).sort_values(ascending=False)
missing_data = pd.DataFrame({'Missing Ratio' : all_data_na})
missing_data.head()
```

Out[230]:

|      | Missing Ratio |
| ---- | ------------- |
|      |               |

## 标签编码[¶](#标签编码)

In [231]:

```
# 查看待编码特征情况
cols = ['FireplaceQu', 'BsmtQual', 'BsmtCond', 'GarageQual', 'GarageCond', 'ExterQual', 'ExterCond',
        'HeatingQC', 'PoolQC', 'KitchenQual', 'BsmtFinType1', 'BsmtFinType2', 'Functional', 'Fence',
        'BsmtExposure', 'GarageFinish', 'LandSlope', 'LotShape', 'PavedDrive', 'Street', 'Alley',
        'CentralAir', 'MSSubClass', 'OverallCond', 'YrSold', 'MoSold']
all_data[cols].head()
```

Out[231]:

|      | FireplaceQu | BsmtQual | BsmtCond | GarageQual | GarageCond | ExterQual | ExterCond | HeatingQC | PoolQC | KitchenQual | BsmtFinType1 | BsmtFinType2 | Functional | Fence | BsmtExposure | GarageFinish | LandSlope | LotShape | PavedDrive | Street | Alley | CentralAir | MSSubClass | OverallCond | YrSold | MoSold |
| ---- | ----------- | -------- | -------- | ---------- | ---------- | --------- | --------- | --------- | ------ | ----------- | ------------ | ------------ | ---------- | ----- | ------------ | ------------ | --------- | -------- | ---------- | ------ | ----- | ---------- | ---------- | ----------- | ------ | ------ |
| 0    | None        | Gd       | TA       | TA         | TA         | Gd        | TA        | Ex        | None   | Gd          | GLQ          | Unf          | Typ        | None  | No           | RFn          | Gtl       | Reg      | Y          | Pave   | None  | Y          | 60         | 5           | 2008   | 2      |
| 1    | TA          | Gd       | TA       | TA         | TA         | TA        | TA        | Ex        | None   | TA          | ALQ          | Unf          | Typ        | None  | Gd           | RFn          | Gtl       | Reg      | Y          | Pave   | None  | Y          | 20         | 8           | 2007   | 5      |
| 2    | TA          | Gd       | TA       | TA         | TA         | Gd        | TA        | Ex        | None   | Gd          | GLQ          | Unf          | Typ        | None  | Mn           | RFn          | Gtl       | IR1      | Y          | Pave   | None  | Y          | 60         | 5           | 2008   | 9      |
| 3    | Gd          | TA       | Gd       | TA         | TA         | TA        | TA        | Gd        | None   | Gd          | ALQ          | Unf          | Typ        | None  | No           | Unf          | Gtl       | IR1      | Y          | Pave   | None  | Y          | 70         | 5           | 2006   | 2      |
| 4    | TA          | Gd       | TA       | TA         | TA         | Gd        | TA        | Ex        | None   | Gd          | GLQ          | Unf          | Typ        | None  | Av           | RFn          | Gtl       | IR1      | Y          | Pave   | None  | Y          | 60         | 5           | 2008   | 12     |

In [232]:

```
# 将数值类型转化为字符串类型
feature = ['MSSubClass', 'OverallCond', 'YrSold', 'MoSold']
for i in feature:
    all_data[i] = all_data[i].astype(str)
```

In [233]:

```
# 标签编码对不连续的数字或者文本进行编号,转换成连续的数值型变量
for c in cols:
    le = LabelEncoder()
    le.fit(list(all_data[c].values))
    all_data[c] = le.transform(list(all_data[c].values))
```

In [234]:

```
# 编码后特征情况
all_data[cols].head()
```

Out[234]:

|      | FireplaceQu | BsmtQual | BsmtCond | GarageQual | GarageCond | ExterQual | ExterCond | HeatingQC | PoolQC | KitchenQual | BsmtFinType1 | BsmtFinType2 | Functional | Fence | BsmtExposure | GarageFinish | LandSlope | LotShape | PavedDrive | Street | Alley | CentralAir | MSSubClass | OverallCond | YrSold | MoSold |
| ---- | ----------- | -------- | -------- | ---------- | ---------- | --------- | --------- | --------- | ------ | ----------- | ------------ | ------------ | ---------- | ----- | ------------ | ------------ | --------- | -------- | ---------- | ------ | ----- | ---------- | ---------- | ----------- | ------ | ------ |
| 0    | 3           | 2        | 4        | 5          | 5          | 2         | 4         | 0         | 3      | 2           | 2            | 6            | 6          | 4     | 3            | 2            | 0         | 3        | 2          | 1      | 1     | 1          | 10         | 4           | 2      | 4      |
| 1    | 5           | 2        | 4        | 5          | 5          | 3         | 4         | 0         | 3      | 3           | 0            | 6            | 6          | 4     | 1            | 2            | 0         | 3        | 2          | 1      | 1     | 1          | 5          | 7           | 1      | 7      |
| 2    | 5           | 2        | 4        | 5          | 5          | 2         | 4         | 0         | 3      | 2           | 2            | 6            | 6          | 4     | 2            | 2            | 0         | 0        | 2          | 1      | 1     | 1          | 10         | 4           | 2      | 11     |
| 3    | 2           | 4        | 1        | 5          | 5          | 3         | 4         | 2         | 3      | 2           | 0            | 6            | 6          | 4     | 3            | 3            | 0         | 0        | 2          | 1      | 1     | 1          | 11         | 4           | 0      | 4      |
| 4    | 5           | 2        | 4        | 5          | 5          | 2         | 4         | 0         | 3      | 2           | 2            | 6            | 6          | 4     | 0            | 2            | 0         | 0        | 2          | 1      | 1     | 1          | 10         | 4           | 2      | 3      |

In [236]:

```
pd.set_option('max_columns', 80)
all_data.head()
```

Out[236]:

|      | 1stFlrSF | 2ndFlrSF | 3SsnPorch | Alley | BedroomAbvGr | BldgType | BsmtCond | BsmtExposure | BsmtFinSF1 | BsmtFinSF2 | BsmtFinType1 | BsmtFinType2 | BsmtFullBath | BsmtHalfBath | BsmtQual | BsmtUnfSF | CentralAir | Condition1 | Condition2 | Electrical | EnclosedPorch | ExterCond | ExterQual | Exterior1st | Exterior2nd | Fence | FireplaceQu | Fireplaces | Foundation | FullBath | Functional | GarageArea | GarageCars | GarageCond | GarageFinish | GarageQual | GarageType | GarageYrBlt | GrLivArea | HalfBath | Heating | HeatingQC | HouseStyle | KitchenAbvGr | KitchenQual | LandContour | LandSlope | LotArea | LotConfig | LotFrontage | LotShape | LowQualFinSF | MSSubClass | MSZoning | MasVnrArea | MasVnrType | MiscFeature | MiscVal | MoSold | Neighborhood | OpenPorchSF | OverallCond | OverallQual | PavedDrive | PoolArea | PoolQC | RoofMatl | RoofStyle | SaleCondition | SaleType | ScreenPorch | Street | TotRmsAbvGrd | TotalBsmtSF | WoodDeckSF | YearBuilt | YearRemodAdd | YrSold |
| ---- | -------- | -------- | --------- | ----- | ------------ | -------- | -------- | ------------ | ---------- | ---------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ---------- | ---------- | ---------- | ---------- | ------------- | --------- | --------- | ----------- | ----------- | ----- | ----------- | ---------- | ---------- | -------- | ---------- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- | ----------- | --------- | -------- | ------- | --------- | ---------- | ------------ | ----------- | ----------- | --------- | ------- | --------- | ----------- | -------- | ------------ | ---------- | -------- | ---------- | ---------- | ----------- | ------- | ------ | ------------ | ----------- | ----------- | ----------- | ---------- | -------- | ------ | -------- | --------- | ------------- | -------- | ----------- | ------ | ------------ | ----------- | ---------- | --------- | ------------ | ------ |
| 0    | 856      | 854      | 0         | 1     | 3            | 1Fam     | 4        | 3            | 706.0      | 0.0        | 2            | 6            | 1.0          | 0.0          | 2        | 150.0     | 1          | Norm       | Norm       | SBrkr      | 0             | 4         | 2         | VinylSd     | VinylSd     | 4     | 3           | 0          | PConc      | 2        | 6          | 548.0      | 2.0        | 5          | 2            | 5          | Attchd     | 2003.0      | 1710      | 1        | GasA    | 0         | 2Story     | 1            | 2           | Lvl         | 0         | 8450    | Inside    | 65.0        | 3        | 0            | 10         | RL       | 196.0      | BrkFace    | None        | 0       | 4      | CollgCr      | 61          | 4           | 7           | 2          | 0        | 3      | CompShg  | Gable     | Normal        | WD       | 0           | 1      | 8            | 856.0       | 0          | 2003      | 2003         | 2      |
| 1    | 1262     | 0        | 0         | 1     | 3            | 1Fam     | 4        | 1            | 978.0      | 0.0        | 0            | 6            | 0.0          | 1.0          | 2        | 284.0     | 1          | Feedr      | Norm       | SBrkr      | 0             | 4         | 3         | MetalSd     | MetalSd     | 4     | 5           | 1          | CBlock     | 2        | 6          | 460.0      | 2.0        | 5          | 2            | 5          | Attchd     | 1976.0      | 1262      | 0        | GasA    | 0         | 1Story     | 1            | 3           | Lvl         | 0         | 9600    | FR2       | 80.0        | 3        | 0            | 5          | RL       | 0.0        | None       | None        | 0       | 7      | Veenker      | 0           | 7           | 6           | 2          | 0        | 3      | CompShg  | Gable     | Normal        | WD       | 0           | 1      | 6            | 1262.0      | 298        | 1976      | 1976         | 1      |
| 2    | 920      | 866      | 0         | 1     | 3            | 1Fam     | 4        | 2            | 486.0      | 0.0        | 2            | 6            | 1.0          | 0.0          | 2        | 434.0     | 1          | Norm       | Norm       | SBrkr      | 0             | 4         | 2         | VinylSd     | VinylSd     | 4     | 5           | 1          | PConc      | 2        | 6          | 608.0      | 2.0        | 5          | 2            | 5          | Attchd     | 2001.0      | 1786      | 1        | GasA    | 0         | 2Story     | 1            | 2           | Lvl         | 0         | 11250   | Inside    | 68.0        | 0        | 0            | 10         | RL       | 162.0      | BrkFace    | None        | 0       | 11     | CollgCr      | 42          | 4           | 7           | 2          | 0        | 3      | CompShg  | Gable     | Normal        | WD       | 0           | 1      | 6            | 920.0       | 0          | 2001      | 2002         | 2      |
| 3    | 961      | 756      | 0         | 1     | 3            | 1Fam     | 1        | 3            | 216.0      | 0.0        | 0            | 6            | 1.0          | 0.0          | 4        | 540.0     | 1          | Norm       | Norm       | SBrkr      | 272           | 4         | 3         | Wd Sdng     | Wd Shng     | 4     | 2           | 1          | BrkTil     | 1        | 6          | 642.0      | 3.0        | 5          | 3            | 5          | Detchd     | 1998.0      | 1717      | 0        | GasA    | 2         | 2Story     | 1            | 2           | Lvl         | 0         | 9550    | Corner    | 60.0        | 0        | 0            | 11         | RL       | 0.0        | None       | None        | 0       | 4      | Crawfor      | 35          | 4           | 7           | 2          | 0        | 3      | CompShg  | Gable     | Abnorml       | WD       | 0           | 1      | 7            | 756.0       | 0          | 1915      | 1970         | 0      |
| 4    | 1145     | 1053     | 0         | 1     | 4            | 1Fam     | 4        | 0            | 655.0      | 0.0        | 2            | 6            | 1.0          | 0.0          | 2        | 490.0     | 1          | Norm       | Norm       | SBrkr      | 0             | 4         | 2         | VinylSd     | VinylSd     | 4     | 5           | 1          | PConc      | 2        | 6          | 836.0      | 3.0        | 5          | 2            | 5          | Attchd     | 2000.0      | 2198      | 1        | GasA    | 0         | 2Story     | 1            | 2           | Lvl         | 0         | 14260   | FR2       | 84.0        | 0        | 0            | 10         | RL       | 350.0      | BrkFace    | None        | 0       | 3      | NoRidge      | 84          | 4           | 8           | 2          | 0        | 3      | CompShg  | Gable     | Normal        | WD       | 0           | 1      | 9            | 1145.0      | 192        | 2000      | 2000         | 2      |

## 增加特征[¶](#增加特征)

In [237]:

```
all_data['TotalSF'] = all_data['TotalBsmtSF'] + all_data['1stFlrSF'] + all_data['2ndFlrSF']
```

## 倾斜特征[¶](#倾斜特征)

In [238]:

```
all_data.dtypes.head(10)
```

Out[238]:

```
1stFlrSF          int64
2ndFlrSF          int64
3SsnPorch         int64
Alley             int64
BedroomAbvGr      int64
BldgType         object
BsmtCond          int64
BsmtExposure      int64
BsmtFinSF1      float64
BsmtFinSF2      float64
dtype: object
```

In [239]:

```
all_data.dtypes[all_data.dtypes != 'object'].index
```

Out[239]:

```
Index(['1stFlrSF', '2ndFlrSF', '3SsnPorch', 'Alley', 'BedroomAbvGr',
       'BsmtCond', 'BsmtExposure', 'BsmtFinSF1', 'BsmtFinSF2', 'BsmtFinType1',
       'BsmtFinType2', 'BsmtFullBath', 'BsmtHalfBath', 'BsmtQual', 'BsmtUnfSF',
       'CentralAir', 'EnclosedPorch', 'ExterCond', 'ExterQual', 'Fence',
       'FireplaceQu', 'Fireplaces', 'FullBath', 'Functional', 'GarageArea',
       'GarageCars', 'GarageCond', 'GarageFinish', 'GarageQual', 'GarageYrBlt',
       'GrLivArea', 'HalfBath', 'HeatingQC', 'KitchenAbvGr', 'KitchenQual',
       'LandSlope', 'LotArea', 'LotFrontage', 'LotShape', 'LowQualFinSF',
       'MSSubClass', 'MasVnrArea', 'MiscVal', 'MoSold', 'OpenPorchSF',
       'OverallCond', 'OverallQual', 'PavedDrive', 'PoolArea', 'PoolQC',
       'ScreenPorch', 'Street', 'TotRmsAbvGrd', 'TotalBsmtSF', 'WoodDeckSF',
       'YearBuilt', 'YearRemodAdd', 'YrSold', 'TotalSF'],
      dtype='object')
```

In [240]:

```
# 计算特征偏度
numeric_feats = all_data.dtypes[all_data.dtypes != 'object'].index
skewed_feats = all_data[numeric_feats].apply(lambda x: skew(x.dropna())).sort_values(ascending=False)
skewness = pd.DataFrame({'Skew':skewed_feats})
skewness.head(10)
```

Out[240]:

|               | Skew      |
| ------------- | --------- |
| MiscVal       | 21.939672 |
| PoolArea      | 17.688664 |
| LotArea       | 13.109495 |
| LowQualFinSF  | 12.084539 |
| 3SsnPorch     | 11.372080 |
| LandSlope     | 4.973254  |
| KitchenAbvGr  | 4.300550  |
| BsmtFinSF2    | 4.144503  |
| EnclosedPorch | 4.002344  |
| ScreenPorch   | 3.945101  |

In [241]:

```
# 对偏态分布的数据进行标准化处理，使其更加服从正态分布
skewness = skewness[abs(skewness) > 0.75]
print('There are {} skewed numerical features to Box Cox transform'.format(skewness.shape[0]))

skewed_features = skewness.index
lam = 0.15
for feat in skewed_features:
    all_data[feat] = boxcox1p(all_data[feat], lam)
    
# all_data[skewed_features] = np.log1p(all_data[skewed_features])
There are 59 skewed numerical features to Box Cox transform
```

In [242]:

```
all_data.head()
```

Out[242]:

|      | 1stFlrSF  | 2ndFlrSF  | 3SsnPorch | Alley    | BedroomAbvGr | BldgType | BsmtCond | BsmtExposure | BsmtFinSF1 | BsmtFinSF2 | BsmtFinType1 | BsmtFinType2 | BsmtFullBath | BsmtHalfBath | BsmtQual | BsmtUnfSF | CentralAir | Condition1 | Condition2 | Electrical | EnclosedPorch | ExterCond | ExterQual | Exterior1st | Exterior2nd | Fence    | FireplaceQu | Fireplaces | Foundation | FullBath | Functional | GarageArea | GarageCars | GarageCond | GarageFinish | GarageQual | GarageType | GarageYrBlt | GrLivArea | HalfBath | Heating | HeatingQC | HouseStyle | KitchenAbvGr | KitchenQual | LandContour | LandSlope | LotArea   | LotConfig | LotFrontage | LotShape | LowQualFinSF | MSSubClass | MSZoning | MasVnrArea | MasVnrType | MiscFeature | MiscVal | MoSold   | Neighborhood | OpenPorchSF | OverallCond | OverallQual | PavedDrive | PoolArea | PoolQC   | RoofMatl | RoofStyle | SaleCondition | SaleType | ScreenPorch | Street   | TotRmsAbvGrd | TotalBsmtSF | WoodDeckSF | YearBuilt | YearRemodAdd | YrSold   | TotalSF   |
| ---- | --------- | --------- | --------- | -------- | ------------ | -------- | -------- | ------------ | ---------- | ---------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ---------- | ---------- | ---------- | ---------- | ------------- | --------- | --------- | ----------- | ----------- | -------- | ----------- | ---------- | ---------- | -------- | ---------- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- | ----------- | --------- | -------- | ------- | --------- | ---------- | ------------ | ----------- | ----------- | --------- | --------- | --------- | ----------- | -------- | ------------ | ---------- | -------- | ---------- | ---------- | ----------- | ------- | -------- | ------------ | ----------- | ----------- | ----------- | ---------- | -------- | -------- | -------- | --------- | ------------- | -------- | ----------- | -------- | ------------ | ----------- | ---------- | --------- | ------------ | -------- | --------- |
| 0    | 11.692623 | 11.686189 | 0.0       | 0.730463 | 1.540963     | 1Fam     | 1.820334 | 1.540963     | 11.170327  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 7.483296  | 0.730463   | Norm       | Norm       | SBrkr      | 0.000000      | 1.820334  | 1.194318  | VinylSd     | VinylSd     | 1.820334 | 1.540963    | 0.000000   | PConc      | 1.194318 | 2.259674   | 10.506271  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | Attchd     | 14.187527   | 13.698888 | 0.730463 | GasA    | 0.000000  | 2Story     | 0.730463     | 1.194318    | Lvl         | 0.0       | 19.212182 | Inside    | 5.831328    | 1.540963 | 0.0          | 2.885846   | RL       | 8.059126   | BrkFace    | None        | 0.0     | 1.820334 | CollgCr      | 5.714669    | 1.820334    | 2.440268    | 1.194318   | 0.0      | 1.540963 | CompShg  | Gable     | Normal        | WD       | 0.0         | 0.730463 | 2.602594     | 11.692623   | 0.000000   | 14.187527 | 14.187527    | 1.194318 | 14.976591 |
| 1    | 12.792276 | 0.000000  | 0.0       | 0.730463 | 1.540963     | 1Fam     | 1.820334 | 0.730463     | 12.062832  | 0.0        | 0.000000     | 2.259674     | 0.000000     | 0.730463     | 1.194318 | 8.897844  | 0.730463   | Feedr      | Norm       | SBrkr      | 0.000000      | 1.820334  | 1.540963  | MetalSd     | MetalSd     | 1.820334 | 2.055642    | 0.730463   | CBlock     | 1.194318 | 2.259674   | 10.062098  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | Attchd     | 14.145138   | 12.792276 | 0.000000 | GasA    | 0.000000  | 1Story     | 0.730463     | 1.540963    | Lvl         | 0.0       | 19.712205 | FR2       | 6.221214    | 1.540963 | 0.0          | 2.055642   | RL       | 0.000000   | None       | None        | 0.0     | 2.440268 | Veenker      | 0.000000    | 2.440268    | 2.259674    | 1.194318   | 0.0      | 1.540963 | CompShg  | Gable     | Normal        | WD       | 0.0         | 0.730463 | 2.259674     | 12.792276   | 9.010206   | 14.145138 | 14.145138    | 0.730463 | 14.923100 |
| 2    | 11.892039 | 11.724598 | 0.0       | 0.730463 | 1.540963     | 1Fam     | 1.820334 | 1.194318     | 10.200343  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 9.917060  | 0.730463   | Norm       | Norm       | SBrkr      | 0.000000      | 1.820334  | 1.194318  | VinylSd     | VinylSd     | 1.820334 | 2.055642    | 0.730463   | PConc      | 1.194318 | 2.259674   | 10.775536  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | Attchd     | 14.184404   | 13.832085 | 0.730463 | GasA    | 0.000000  | 2Story     | 0.730463     | 1.194318    | Lvl         | 0.0       | 20.347241 | Inside    | 5.914940    | 0.000000 | 0.0          | 2.885846   | RL       | 7.646538   | BrkFace    | None        | 0.0     | 3.011340 | CollgCr      | 5.053371    | 1.820334    | 2.440268    | 1.194318   | 0.0      | 1.540963 | CompShg  | Gable     | Normal        | WD       | 0.0         | 0.730463 | 2.259674     | 11.892039   | 0.000000   | 14.184404 | 14.185966    | 1.194318 | 15.149678 |
| 3    | 12.013683 | 11.354094 | 0.0       | 0.730463 | 1.540963     | 1Fam     | 0.730463 | 1.540963     | 8.274266   | 0.0        | 0.000000     | 2.259674     | 0.730463     | 0.000000     | 1.820334 | 10.468500 | 0.730463   | Norm       | Norm       | SBrkr      | 8.797736      | 1.820334  | 1.540963  | Wd Sdng     | Wd Shng     | 1.820334 | 1.194318    | 0.730463   | BrkTil     | 0.730463 | 2.259674   | 10.918253  | 1.540963   | 2.055642   | 1.540963     | 2.055642   | Detchd     | 14.179714   | 13.711364 | 0.000000 | GasA    | 1.194318  | 2Story     | 0.730463     | 1.194318    | Lvl         | 0.0       | 19.691553 | Corner    | 5.684507    | 0.000000 | 0.0          | 3.011340   | RL       | 0.000000   | None       | None        | 0.0     | 1.820334 | Crawfor      | 4.745132    | 1.820334    | 2.440268    | 1.194318   | 0.0      | 1.540963 | CompShg  | Gable     | Abnorml       | WD       | 0.0         | 0.730463 | 2.440268     | 11.354094   | 0.000000   | 14.047529 | 14.135652    | 0.000000 | 14.857121 |
| 4    | 12.510588 | 12.271365 | 0.0       | 0.730463 | 1.820334     | 1Fam     | 1.820334 | 0.000000     | 10.971129  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 10.221051 | 0.730463   | Norm       | Norm       | SBrkr      | 0.000000      | 1.820334  | 1.194318  | VinylSd     | VinylSd     | 1.820334 | 2.055642    | 0.730463   | PConc      | 1.194318 | 2.259674   | 11.627708  | 1.540963   | 2.055642   | 1.194318     | 2.055642   | Attchd     | 14.182841   | 14.480029 | 0.730463 | GasA    | 0.000000  | 2Story     | 0.730463     | 1.194318    | Lvl         | 0.0       | 21.325160 | FR2       | 6.314735    | 0.000000 | 0.0          | 2.885846   | RL       | 9.391827   | BrkFace    | None        | 0.0     | 1.540963 | NoRidge      | 6.314735    | 1.820334    | 2.602594    | 1.194318   | 0.0      | 1.540963 | CompShg  | Gable     | Normal        | WD       | 0.0         | 0.730463 | 2.750250     | 12.510588   | 8.013884   | 14.182841 | 14.182841    | 1.194318 | 15.852312 |

## 独热编码[¶](#独热编码)

In [243]:

```
# 独热编码用来解决类别型数据的离散值问题
all_data = pd.get_dummies(all_data)
all_data.head()
```

Out[243]:

|      | 1stFlrSF  | 2ndFlrSF  | 3SsnPorch | Alley    | BedroomAbvGr | BsmtCond | BsmtExposure | BsmtFinSF1 | BsmtFinSF2 | BsmtFinType1 | BsmtFinType2 | BsmtFullBath | BsmtHalfBath | BsmtQual | BsmtUnfSF | CentralAir | EnclosedPorch | ExterCond | ExterQual | Fence    | FireplaceQu | Fireplaces | FullBath | Functional | GarageArea | GarageCars | GarageCond | GarageFinish | GarageQual | GarageYrBlt | GrLivArea | HalfBath | HeatingQC | KitchenAbvGr | KitchenQual | LandSlope | LotArea   | LotFrontage | LotShape | LowQualFinSF | ...  | Neighborhood_NPkVill | Neighborhood_NWAmes | Neighborhood_NoRidge | Neighborhood_NridgHt | Neighborhood_OldTown | Neighborhood_SWISU | Neighborhood_Sawyer | Neighborhood_SawyerW | Neighborhood_Somerst | Neighborhood_StoneBr | Neighborhood_Timber | Neighborhood_Veenker | RoofMatl_CompShg | RoofMatl_Membran | RoofMatl_Metal | RoofMatl_Roll | RoofMatl_Tar&Grv | RoofMatl_WdShake | RoofMatl_WdShngl | RoofStyle_Flat | RoofStyle_Gable | RoofStyle_Gambrel | RoofStyle_Hip | RoofStyle_Mansard | RoofStyle_Shed | SaleCondition_Abnorml | SaleCondition_AdjLand | SaleCondition_Alloca | SaleCondition_Family | SaleCondition_Normal | SaleCondition_Partial | SaleType_COD | SaleType_CWD | SaleType_Con | SaleType_ConLD | SaleType_ConLI | SaleType_ConLw | SaleType_New | SaleType_Oth | SaleType_WD |
| ---- | --------- | --------- | --------- | -------- | ------------ | -------- | ------------ | ---------- | ---------- | ------------ | ------------ | ------------ | ------------ | -------- | --------- | ---------- | ------------- | --------- | --------- | -------- | ----------- | ---------- | -------- | ---------- | ---------- | ---------- | ---------- | ------------ | ---------- | ----------- | --------- | -------- | --------- | ------------ | ----------- | --------- | --------- | ----------- | -------- | ------------ | ---- | -------------------- | ------------------- | -------------------- | -------------------- | -------------------- | ------------------ | ------------------- | -------------------- | -------------------- | -------------------- | ------------------- | -------------------- | ---------------- | ---------------- | -------------- | ------------- | ---------------- | ---------------- | ---------------- | -------------- | --------------- | ----------------- | ------------- | ----------------- | -------------- | --------------------- | --------------------- | -------------------- | -------------------- | -------------------- | --------------------- | ------------ | ------------ | ------------ | -------------- | -------------- | -------------- | ------------ | ------------ | ----------- |
| 0    | 11.692623 | 11.686189 | 0.0       | 0.730463 | 1.540963     | 1.820334 | 1.540963     | 11.170327  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 7.483296  | 0.730463   | 0.000000      | 1.820334  | 1.194318  | 1.820334 | 1.540963    | 0.000000   | 1.194318 | 2.259674   | 10.506271  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | 14.187527   | 13.698888 | 0.730463 | 0.000000  | 0.730463     | 1.194318    | 0.0       | 19.212182 | 5.831328    | 1.540963 | 0.0          | ...  | 0                    | 0                   | 0                    | 0                    | 0                    | 0                  | 0                   | 0                    | 0                    | 0                    | 0                   | 0                    | 1                | 0                | 0              | 0             | 0                | 0                | 0                | 0              | 1               | 0                 | 0             | 0                 | 0              | 0                     | 0                     | 0                    | 0                    | 1                    | 0                     | 0            | 0            | 0            | 0              | 0              | 0              | 0            | 0            | 1           |
| 1    | 12.792276 | 0.000000  | 0.0       | 0.730463 | 1.540963     | 1.820334 | 0.730463     | 12.062832  | 0.0        | 0.000000     | 2.259674     | 0.000000     | 0.730463     | 1.194318 | 8.897844  | 0.730463   | 0.000000      | 1.820334  | 1.540963  | 1.820334 | 2.055642    | 0.730463   | 1.194318 | 2.259674   | 10.062098  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | 14.145138   | 12.792276 | 0.000000 | 0.000000  | 0.730463     | 1.540963    | 0.0       | 19.712205 | 6.221214    | 1.540963 | 0.0          | ...  | 0                    | 0                   | 0                    | 0                    | 0                    | 0                  | 0                   | 0                    | 0                    | 0                    | 0                   | 1                    | 1                | 0                | 0              | 0             | 0                | 0                | 0                | 0              | 1               | 0                 | 0             | 0                 | 0              | 0                     | 0                     | 0                    | 0                    | 1                    | 0                     | 0            | 0            | 0            | 0              | 0              | 0              | 0            | 0            | 1           |
| 2    | 11.892039 | 11.724598 | 0.0       | 0.730463 | 1.540963     | 1.820334 | 1.194318     | 10.200343  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 9.917060  | 0.730463   | 0.000000      | 1.820334  | 1.194318  | 1.820334 | 2.055642    | 0.730463   | 1.194318 | 2.259674   | 10.775536  | 1.194318   | 2.055642   | 1.194318     | 2.055642   | 14.184404   | 13.832085 | 0.730463 | 0.000000  | 0.730463     | 1.194318    | 0.0       | 20.347241 | 5.914940    | 0.000000 | 0.0          | ...  | 0                    | 0                   | 0                    | 0                    | 0                    | 0                  | 0                   | 0                    | 0                    | 0                    | 0                   | 0                    | 1                | 0                | 0              | 0             | 0                | 0                | 0                | 0              | 1               | 0                 | 0             | 0                 | 0              | 0                     | 0                     | 0                    | 0                    | 1                    | 0                     | 0            | 0            | 0            | 0              | 0              | 0              | 0            | 0            | 1           |
| 3    | 12.013683 | 11.354094 | 0.0       | 0.730463 | 1.540963     | 0.730463 | 1.540963     | 8.274266   | 0.0        | 0.000000     | 2.259674     | 0.730463     | 0.000000     | 1.820334 | 10.468500 | 0.730463   | 8.797736      | 1.820334  | 1.540963  | 1.820334 | 1.194318    | 0.730463   | 0.730463 | 2.259674   | 10.918253  | 1.540963   | 2.055642   | 1.540963     | 2.055642   | 14.179714   | 13.711364 | 0.000000 | 1.194318  | 0.730463     | 1.194318    | 0.0       | 19.691553 | 5.684507    | 0.000000 | 0.0          | ...  | 0                    | 0                   | 0                    | 0                    | 0                    | 0                  | 0                   | 0                    | 0                    | 0                    | 0                   | 0                    | 1                | 0                | 0              | 0             | 0                | 0                | 0                | 0              | 1               | 0                 | 0             | 0                 | 0              | 1                     | 0                     | 0                    | 0                    | 0                    | 0                     | 0            | 0            | 0            | 0              | 0              | 0              | 0            | 0            | 1           |
| 4    | 12.510588 | 12.271365 | 0.0       | 0.730463 | 1.820334     | 1.820334 | 0.000000     | 10.971129  | 0.0        | 1.194318     | 2.259674     | 0.730463     | 0.000000     | 1.194318 | 10.221051 | 0.730463   | 0.000000      | 1.820334  | 1.194318  | 1.820334 | 2.055642    | 0.730463   | 1.194318 | 2.259674   | 11.627708  | 1.540963   | 2.055642   | 1.194318     | 2.055642   | 14.182841   | 14.480029 | 0.730463 | 0.000000  | 0.730463     | 1.194318    | 0.0       | 21.325160 | 6.314735    | 0.000000 | 0.0          | ...  | 0                    | 0                   | 1                    | 0                    | 0                    | 0                  | 0                   | 0                    | 0                    | 0                    | 0                   | 0                    | 1                | 0                | 0              | 0             | 0                | 0                | 0                | 0              | 1               | 0                 | 0             | 0                 | 0              | 0                     | 0                     | 0                    | 0                    | 1                    | 0                     | 0            | 0            | 0            | 0              | 0              | 0              | 0            | 0            | 1           |

5 rows × 220 columns

## 重新划分数据集[¶](#重新划分数据集)

In [244]:

```
# 将处理好的数据重新划分成训练集和测试集，为模型训练与测试做准备
train = all_data[:ntrain]
test = all_data[ntrain:]
```

## 特征重要性检测[¶](#特征重要性检测)

In [245]:

```
lasso=Lasso(alpha=0.001)
lasso.fit(train,y_train)
```

Out[245]:

```
Lasso(alpha=0.001, copy_X=True, fit_intercept=True, max_iter=1000,
   normalize=False, positive=False, precompute=False, random_state=None,
   selection='cyclic', tol=0.0001, warm_start=False)
```

In [246]:

```
FI_lasso = pd.DataFrame({"Feature Importance":lasso.coef_}, index=train.columns)
FI_lasso.sort_values("Feature Importance",ascending=False)
```

Out[246]:

|                       | Feature Importance |
| --------------------- | ------------------ |
| OverallQual           | 0.274562           |
| OverallCond           | 0.159865           |
| TotalSF               | 0.121968           |
| CentralAir            | 0.069192           |
| Neighborhood_Crawfor  | 0.058231           |
| GrLivArea             | 0.054475           |
| Neighborhood_StoneBr  | 0.048933           |
| Functional            | 0.048200           |
| GarageCars            | 0.048164           |
| Condition1_Norm       | 0.046992           |
| SaleType_New          | 0.044927           |
| Foundation_PConc      | 0.042024           |
| Exterior1st_BrkFace   | 0.034384           |
| Neighborhood_NoRidge  | 0.033931           |
| HalfBath              | 0.029456           |
| Fireplaces            | 0.029337           |
| Neighborhood_Somerst  | 0.028999           |
| MSZoning_FV           | 0.025189           |
| BsmtFullBath          | 0.023540           |
| BldgType_1Fam         | 0.023056           |
| PavedDrive            | 0.021034           |
| Neighborhood_NridgHt  | 0.020744           |
| FullBath              | 0.020300           |
| LotArea               | 0.019976           |
| GarageArea            | 0.018859           |
| LotConfig_CulDSac     | 0.015153           |
| MasVnrType_Stone      | 0.015072           |
| Neighborhood_BrkSide  | 0.010656           |
| BsmtCond              | 0.010412           |
| Exterior2nd_VinylSd   | 0.010219           |
| ...                   | ...                |
| LotConfig_Inside      | -0.000675          |
| 2ndFlrSF              | -0.000886          |
| BsmtFinSF2            | -0.002046          |
| MiscVal               | -0.002842          |
| BsmtFinType1          | -0.002934          |
| LotShape              | -0.003095          |
| BsmtUnfSF             | -0.004649          |
| KitchenAbvGr          | -0.004929          |
| MSSubClass            | -0.005704          |
| Neighborhood_Mitchel  | -0.006023          |
| YrSold                | -0.006378          |
| TotalBsmtSF           | -0.006569          |
| Condition1_Artery     | -0.007371          |
| BedroomAbvGr          | -0.007565          |
| GarageYrBlt           | -0.009248          |
| GarageFinish          | -0.010123          |
| BsmtExposure          | -0.011024          |
| SaleType_WD           | -0.014619          |
| Exterior1st_Wd Sdng   | -0.018696          |
| MSZoning_RM           | -0.019994          |
| Foundation_BrkTil     | -0.025873          |
| HeatingQC             | -0.026353          |
| Neighborhood_Edwards  | -0.029135          |
| Neighborhood_IDOTRR   | -0.029591          |
| BsmtQual              | -0.047526          |
| Neighborhood_OldTown  | -0.049377          |
| ExterQual             | -0.051608          |
| KitchenQual           | -0.052991          |
| SaleCondition_Abnorml | -0.062275          |
| MSZoning_C (all)      | -0.175309          |

220 rows × 1 columns

In [247]:

```
FI_lasso[FI_lasso["Feature Importance"]!=0].sort_values("Feature Importance").plot(kind="barh",figsize=(15,25))
plt.xticks(rotation=90)
plt.show()
```

![img](https://cdn.kesci.com/rt_upload/73FBF694C00F44848C61FB37AA01736D/ph5qif90ql.png) 

# 基础模型[¶](#基础模型)

## 定义交叉验证策略[¶](#定义交叉验证策略)

In [248]:

```
# cross_val_score默认使用K折交叉验证策略。此处先使用KFold的shuffle参数混洗数据
# neg_mean_squared_error：负均方误差，是损失函数，优化目标是使其最小化
n_splits = 5
def nmse_cv(model):
    kf = KFold(n_splits, shuffle=True, random_state=42).get_n_splits(train.values)
    nmse = np.sqrt(-cross_val_score(model, train.values, y_train, scoring='neg_mean_squared_error', cv=kf))
    return(nmse)
```

## 建立基础模型[¶](#建立基础模型)

In [249]:

```
# lasso/ElasticNet模型对异常值敏感，使用RobustScaler缩放有离群值的数据
lasso = make_pipeline(RobustScaler(), Lasso(alpha=0.0005, random_state=1))
ENet = make_pipeline(RobustScaler(), ElasticNet(alpha=0.0005, l1_ratio=.9, random_state=3))
KRR = KernelRidge(alpha=0.6, kernel='polynomial', degree=2, coef0=0.25)
GBoost = GradientBoostingRegressor(n_estimators=3000, learning_rate=0.05,
                                   max_depth=4, max_features='sqrt',
                                   min_samples_leaf=15, min_samples_split=10, 
                                   loss='huber', random_state =5)
model_xgb = xgb.XGBRegressor(colsample_bytree=0.4603, gamma=0.0468, 
                             learning_rate=0.05, max_depth=3, 
                             min_child_weight=1.7817, n_estimators=2200,
                             reg_alpha=0.4640, reg_lambda=0.8571,
                             subsample=0.5213, silent=1,
                             random_state =7, nthread = -1)
model_lgb = lgb.LGBMRegressor(objective='regression',num_leaves=5,
                              learning_rate=0.05, n_estimators=720,
                              max_bin = 55, bagging_fraction = 0.8,
                              bagging_freq = 5, feature_fraction = 0.2319,
                              feature_fraction_seed=9, bagging_seed=9,
                              min_data_in_leaf =6, min_sum_hessian_in_leaf = 11)
```

## 基础模型分数[¶](#基础模型分数)

In [250]:

```
models = [lasso, ENet, KRR, GBoost, model_xgb, model_lgb]
names = ['Lasso', 'ELasticNet', 'KernelRidge', 'GradientBoosting', 'Xgboost', 'LGBM']
for model, name in zip(models, names):
    score = nmse_cv(model)
    # 验证结果返回5个分数，求均值和标准差
    print('{} score:{:.4f} ({:.4f}) \n'.format(name, score.mean(), score.std()))
Lasso score:0.1115 (0.0074) 

ELasticNet score:0.1116 (0.0074) 

KernelRidge score:0.1184 (0.0073) 

GradientBoosting score:0.1177 (0.0080) 

Xgboost score:0.1161 (0.0079) 

LGBM score:0.1167 (0.0072) 
```

# 模型融合[¶](#模型融合)

## 方法一：模型平均[¶](#方法一：模型平均)

### 模型平均类[¶](#模型平均类)

In [251]:

```
class AveragingModels(BaseEstimator, RegressorMixin, TransformerMixin):
    
    def __init__(self, models):
        self.models = models
        
    def fit(self, X, y):
        self.clone_models = [clone(x) for x in self.models]
        for model in self.clone_models:
            model.fit(X, y)
        return self
    
    def predict(self, X):
        predictions = np.column_stack([model.predict(X) for model in self.clone_models])
        return np.mean(predictions, axis=1)
```

### 模型平均分数[¶](#模型平均分数)

In [252]:

```
averaged_models = AveragingModels(models = [ENet, GBoost, KRR, lasso])
score = nmse_cv(averaged_models)
print('Averaged base models score: {:.4f} ({:.4f}) \n'.format(score.mean(), score.std()))
Averaged base models score: 0.1092 (0.0073) 
```

In [253]:

```
averaged_models = AveragingModels(models = [lasso, ENet, KRR, GBoost, model_xgb, model_lgb])
score = nmse_cv(averaged_models)
print('Averaged base models score: {:.4f} ({:.4f}) \n'.format(score.mean(), score.std()))
Averaged base models score: 0.1089 (0.0072) 
```

## 方法二：模型叠加[¶](#方法二：模型叠加)

### 模型叠加类[¶](#模型叠加类)

In [254]:

```
class StackingAveragedModels(BaseEstimator, RegressorMixin, TransformerMixin):
    
    def __init__(self, base_models, meta_model, n_folds=5):
        self.base_models = base_models
        self.meta_model = meta_model
        self.n_folds = n_folds
        
    # 将原来的模型clone出来，并且实现fit功能    
    def fit(self, X, y):
        self.clone_base_models = [list() for x in self.base_models]
        self.clone_meta_model = clone(self.meta_model)
        kfold = KFold(n_splits=self.n_folds, shuffle=True, random_state=156)
        out_of_fold_predictions = np.zeros((X.shape[0], len(self.base_models)))
        
        # 使用K-fold的方法来进行交叉验证，将每次验证的结果作为新的特征来进行处理
        for i, model in enumerate(self.base_models):
            for train_index, test_index in kfold.split(X, y):
                instance = clone(model)
                self.clone_base_models[i].append(instance)
                instance.fit(X[train_index], y[train_index])
                y_pred = instance.predict(X[test_index])
                out_of_fold_predictions[test_index, i] = y_pred
                
        # 将交叉验证预测出的结果(标签)和训练集中的标签值用元模型进行训练
        self.clone_meta_model.fit(out_of_fold_predictions, y)
        return self
        
    def predict(self, X):
        # 得到各模型预测结果平均值的二维数组
        meta_features = np.column_stack([
            np.column_stack([model.predict(X) for model in base_models]).mean(axis=1)
            for base_models in self.clone_base_models
        ])
        return self.clone_meta_model.predict(meta_features)
```

In [255]:

```
# 额外补充：举例理解column_stack

# a,b代表各个模型预测结果
a = np.array([1,2,3])
b = np.array([4,5,6])
# 将列排成二维数组，即将各个模型对每一个样本的预测结果分别组成一个数组，3行2列
np.column_stack((a,b))
```

Out[255]:

```
array([[1, 4],
       [2, 5],
       [3, 6]])
```

In [256]:

```
# 按列取平均值，即各样本预测结果的平均值，得到一维数组
np.column_stack([a,b]).mean(axis=1)
```

Out[256]:

```
array([2.5, 3.5, 4.5])
```

In [257]:

```
# 将一维数组转化为二维数组，3行1列
np.column_stack([np.column_stack([a,b]).mean(axis=1)])
```

Out[257]:

```
array([[2.5],
       [3.5],
       [4.5]])
```

### 模型叠加分数[¶](#模型叠加分数)

In [258]:

```
stacked_averaged_models = StackingAveragedModels(base_models=(ENet, GBoost, KRR), meta_model=lasso)
score = nmse_cv(stacked_averaged_models)
print('Stacking Averaged models score: {:.4f} ({:.4f})'.format(score.mean(), score.std()))
# 结果模型叠加分数比模型平均分数更低，模型效果更好
Stacking Averaged models score: 0.1084 (0.0073)
```

# 模型训练与预测[¶](#模型训练与预测)

## 定义评估函数[¶](#定义评估函数)

In [259]:

```
# 均方差：MSE的值越小，预测模型具有更好的精确度
def mse(y, y_pred):
    return np.sqrt(mean_squared_error(y, y_pred))
```

## 模型训练、预测、评估[¶](#模型训练、预测、评估)

In [261]:

```
stacked_averaged_models.fit(train.values, y_train)
stacked_train_pred = stacked_averaged_models.predict(train.values)
# 前面用log1p函数转化使标签更加服从高斯分布，现用expm1将预测出的平滑数据进行还原
stacked_pred = np.expm1(stacked_averaged_models.predict(test.values))
print(mse(y_train, stacked_train_pred))
0.07835268430261988
```

In [262]:

```
model_xgb.fit(train, y_train)
xgb_train_pred = model_xgb.predict(train)
xgb_pred = np.expm1(model_xgb.predict(test))
print(mse(y_train, xgb_train_pred))
0.0785165142425036
```

In [263]:

```
model_lgb.fit(train, y_train)
lgb_train_pred = model_lgb.predict(train)
lgb_pred = np.expm1(model_lgb.predict(test))
print(mse(y_train, lgb_train_pred))
0.07343743130986105
```

In [264]:

```
# 基于交叉验证分数给出权重
# Xgboost score:0.1161 (0.0079) 
# LGBM score:0.1167 (0.0072) 
# Stacking Averaged models score: 0.1084 (0.0073)
print('MSE score on train data:')
print(mse(y_train, stacked_train_pred*0.70 + xgb_train_pred*0.15 + lgb_train_pred*0.15))
MSE score on train data:
0.07558281617788487
```

## 集成预测[¶](#集成预测)

In [265]:

```
ensemble = stacked_pred*0.70 + xgb_pred*0.15 + lgb_pred*0.15
ensemble
```

Out[265]:

```
array([120570.39157779, 159044.24614346, 187561.78057202, ...,
       167373.74269011, 116895.70968177, 221597.81084848])
```

## 生成结果文件[¶](#生成结果文件)

In [266]:

```
sub = pd.DataFrame()
sub['Id'] = test_Id
sub['SalePrice'] = ensemble
sub.to_csv('submit.csv', index=False)
```