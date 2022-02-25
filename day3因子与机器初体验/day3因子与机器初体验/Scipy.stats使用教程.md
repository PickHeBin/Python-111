```
from scipy import stats
```

有些例子假设对象被这样的方式导入（不用输完整路径）了。

In [7]:

```
from scipy.stats import norm
```

## 获得帮助

所有分布可以使用help函数得到解释。为获得这些信息只需要使用像这样的简单调用：

In [4]:

```
print(norm.__doc__)
A normal continuous random variable.

    The location (``loc``) keyword specifies the mean.
    The scale (``scale``) keyword specifies the standard deviation.

    As an instance of the `rv_continuous` class, `norm` object inherits from it
    a collection of generic methods (see below for the full list),
    and completes them with details specific for this particular distribution.
    
    Methods
    -------
    rvs(loc=0, scale=1, size=1, random_state=None)
        Random variates.
    pdf(x, loc=0, scale=1)
        Probability density function.
    logpdf(x, loc=0, scale=1)
        Log of the probability density function.
    cdf(x, loc=0, scale=1)
        Cumulative distribution function.
    logcdf(x, loc=0, scale=1)
        Log of the cumulative distribution function.
    sf(x, loc=0, scale=1)
        Survival function  (also defined as ``1 - cdf``, but `sf` is sometimes more accurate).
    logsf(x, loc=0, scale=1)
        Log of the survival function.
    ppf(q, loc=0, scale=1)
        Percent point function (inverse of ``cdf`` --- percentiles).
    isf(q, loc=0, scale=1)
        Inverse survival function (inverse of ``sf``).
    moment(n, loc=0, scale=1)
        Non-central moment of order n
    stats(loc=0, scale=1, moments='mv')
        Mean('m'), variance('v'), skew('s'), and/or kurtosis('k').
    entropy(loc=0, scale=1)
        (Differential) entropy of the RV.
    fit(data, loc=0, scale=1)
        Parameter estimates for generic data.
    expect(func, args=(), loc=0, scale=1, lb=None, ub=None, conditional=False, **kwds)
        Expected value of a function (of one argument) with respect to the distribution.
    median(loc=0, scale=1)
        Median of the distribution.
    mean(loc=0, scale=1)
        Mean of the distribution.
    var(loc=0, scale=1)
        Variance of the distribution.
    std(loc=0, scale=1)
        Standard deviation of the distribution.
    interval(alpha, loc=0, scale=1)
        Endpoints of the range that contains alpha percent of the distribution

    Notes
    -----
    The probability density function for `norm` is:

    .. math::

        f(x) = \frac{\exp(-x^2/2)}{\sqrt{2\pi}}

    for a real number :math:`x`.

    The probability density above is defined in the "standardized" form. To shift
    and/or scale the distribution use the ``loc`` and ``scale`` parameters.
    Specifically, ``norm.pdf(x, loc, scale)`` is identically
    equivalent to ``norm.pdf(y) / scale`` with
    ``y = (x - loc) / scale``.

    Examples
    --------
    >>> from scipy.stats import norm
    >>> import matplotlib.pyplot as plt
    >>> fig, ax = plt.subplots(1, 1)
    
    Calculate a few first moments:
    
    
    >>> mean, var, skew, kurt = norm.stats(moments='mvsk')
    
    Display the probability density function (``pdf``):
    
    >>> x = np.linspace(norm.ppf(0.01),
    ...                 norm.ppf(0.99), 100)
    >>> ax.plot(x, norm.pdf(x),
    ...        'r-', lw=5, alpha=0.6, label='norm pdf')
    
    Alternatively, the distribution object can be called (as a function)
    to fix the shape, location and scale parameters. This returns a "frozen"
    RV object holding the given parameters fixed.
    
    Freeze the distribution and display the frozen ``pdf``:
    
    >>> rv = norm()
    >>> ax.plot(x, rv.pdf(x), 'k-', lw=2, label='frozen pdf')
    
    Check accuracy of ``cdf`` and ``ppf``:
    
    >>> vals = norm.ppf([0.001, 0.5, 0.999])
    >>> np.allclose([0.001, 0.5, 0.999], norm.cdf(vals))
    True
    
    Generate random numbers:
    
    >>> r = norm.rvs(size=1000)
    
    And compare the histogram:
    
    >>> ax.hist(r, density=True, histtype='stepfilled', alpha=0.2)
    >>> ax.legend(loc='best', frameon=False)
    >>> plt.show()
    

    
```

作为例子，我们用这种方式获取分布的上下界

In [6]:

```
print('bounds of distribution lower: %s, upper: %s' % (norm.a,norm.b))
bounds of distribution lower: -inf, upper: inf
```

我们可以用`dir(norm)`列出分布的所有方法和属性。事实证明，有些方法是私有的，尽管它们没有被这样命名（它们的名字没有以前导下划线开始），例如`veccdf`，只适用于内部计算（当人们试图使用这些方法时，会发出警告，并可能会在后续开发中被移除）。

为了获得真正的主要方法，我们列出了*冻结*分布的方法。(我们在下面解释冻结分布的含义）。

In [7]:

```
rv = norm()
dir(rv) #重新格式化的
```

Out[7]:

```
['__class__',
 '__delattr__',
 '__dict__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__le__',
 '__lt__',
 '__module__',
 '__ne__',
 '__new__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 '__weakref__',
 'a',
 'args',
 'b',
 'cdf',
 'dist',
 'entropy',
 'expect',
 'interval',
 'isf',
 'kwds',
 'logcdf',
 'logpdf',
 'logpmf',
 'logsf',
 'mean',
 'median',
 'moment',
 'pdf',
 'pmf',
 'ppf',
 'random_state',
 'rvs',
 'sf',
 'stats',
 'std',
 'var']
```

最后，我们能通过内省获得所有的可用分布的信息。

In [8]:

```
import warnings
warnings.simplefilter('ignore', DeprecationWarning)
dist_continu = [d for d in dir(stats) if isinstance(getattr(stats,d), stats.rv_continuous)]
dist_discrete = [d for d in dir(stats) if isinstance(getattr(stats,d), stats.rv_discrete)]
print('number of continuous distributions:', len(dist_continu))
print('number of discrete distributions:  ', len(dist_discrete))
number of continuous distributions: 98
number of discrete distributions:   14
```

## 通用方法

连续随机变量的主要公共方法如下：

- rvs：随机变量（就是从这个分布中抽一些样本）
- pdf：概率密度函数。
- cdf：累计分布函数
- sf：残存函数（1-CDF）
- ppf：分位点函数（CDF的逆）
- isf：逆残存函数（sf的逆）
- stats：返回均值，方差，（费舍尔）偏态，（费舍尔）峰度。
- moment：分布的非中心矩。

让我们使用一个标准正态(normal)随机变量(RV)作为例子。

In [9]:

```
norm.cdf(0)
```

Out[9]:

```
0.5
```

为了计算在一个点上的cdf，我们可以传递一个列表或一个numpy数组。

In [10]:

```
norm.cdf([-1., 0, 1])
```

Out[10]:

```
array([0.15865525, 0.5       , 0.84134475])
```

In [11]:

```
import numpy as np
norm.cdf(np.array([-1., 0, 1]))
```

Out[11]:

```
array([0.15865525, 0.5       , 0.84134475])
```

相应的，像pdf,cdf之类的简单方法可以用np.vectorize进行矢量化。
一些其他的实用通用方法：

In [12]:

```
norm.mean(), norm.std(), norm.var()
```

Out[12]:

```
(0.0, 1.0, 1.0)
```

In [13]:

```
norm.stats(moments = "mv")
```

Out[13]:

```
(array(0.), array(1.))
```

为了找到一个分布的中中位数，我们可以使用分位数函数ppf，它是cdf的逆

In [14]:

```
norm.ppf(0.5)
```

Out[14]:

```
0.0
```

为了产生一个随机变量列，使用`size`关键字参数

In [15]:

```
norm.rvs(size=5)
```

Out[15]:

```
array([ 0.11595019, -0.07891672, -1.16335639, -0.96704128, -0.41096412])
```

不要认为`norm.rvs(5)`产生了五个变量

In [16]:

```
norm.rvs(5)
```

Out[16]:

```
3.8270440688132457
```

这里，没有关键字的5被解释为第一个可能的关键字参数loc，它是所有连续分布采取的一对关键字参数中的第一个。这就把我们带到了下一小节的主题。

## 随机数产生

产生随机数依赖于[numpy.random](https://numpy.org/devdocs/reference/random/index.html#module-numpy.random)包的生成器。在上面的例子中，特定的随机数流在不同的运行中是不可复制的。为了实现可重复性，你可以明确地给随机数生成器播种（seed）。在NumPy中，发生器是[numpy.random.Generator](https://numpy.org/devdocs/reference/random/generator.html#numpy.random.Generator)的一个实例。下面是创建一个生成器的典型方法。

In [2]:

```
from numpy.random import default_rng
rng = default_rng()
```

而修复种子可以这样做:

In [3]:

```
rng = default_rng(301439351238479871608357552876690613766)
# 不要复制这个数字
```

不要使用这个数字或诸如0这样的常用值。只使用一小部分种子来实例化较大的状态空间，意味着有一些初始状态是不可能达到的。如果大家都使用这样的值，这就会产生一些偏差。获取种子的一个好方法是使用`numpy.random.SeedSequence`。

In [5]:

```
from numpy.random import SeedSequence
print(SeedSequence().entropy)
151721506037993405554823415393885068441
```

分布中的`random_state`参数接受`numpy.random.Generator`类的一个实例，或者一个整数，然后用来给内部的Generator对象播种

In [9]:

```
norm.rvs(size=5, random_state=rng)
```

Out[9]:

```
array([ 0.9611924 ,  0.1264337 ,  0.7457116 ,  1.15220084, -0.24389797])
```

更多信息，见[NumPy’s documentation](https://numpy.org/doc/stable/reference/random/index.html)

## 偏移(Shifting)与缩放(Scaling)

所有连续分布可以操纵`loc`以及`scale`参数调整分布的location和scale属性。作为例子， 标准正态分布的location是均值而scale是标准差。

In [10]:

```
norm.stats(loc=3, scale=4, moments="mv")
```

Out[10]:

```
(array(3.), array(16.))
```

通常经标准化的分布的随机变量`X`可以通过变换`(X-loc)/scale`获得。它们的默认值是`loc=0`以及`scale=1`。

聪明的使用`loc`与`scale`可以帮助以灵活的方式调整标准分布达到所想要的效果。 为了进一步说明缩放的效果，下面给出期望为1/λ指数分布的cdf。

F(x)=1−exp(−λx)

通过像上面那样使用`scale = 1./lambda`，我们可以得到适当的比例。

In [11]:

```
from scipy.stats import expon
expon.mean(scale=3.)
```

Out[11]:

```
3.0
```

> Note:
> 采取形状参数的分布可能需要比简单地应用`loc`和/或`scale`来实现所需的形式。例如，给定一个长度恒定的矢量被每个分量的独立N(0,σ2)偏差扰动的二维矢量，长度分布是rice(R/σ,scale=σ) 。第一个参数是一个形状参数，需要和x一起进行缩放。

均匀分布也是令人感兴趣的：

In [12]:

```
from scipy.stats import uniform
uniform.cdf([0, 1, 2, 3, 4, 5], loc = 1, scale = 4)
```

Out[12]:

```
array([0.  , 0.  , 0.25, 0.5 , 0.75, 1.  ])
```

最后，联系起我们在前面段落中留下的`norm.rvs(5)`的问题。事实上，像这样调用一个分布， 其第一个参数，像之前的5，是把`loc`参数调到了5，让我们看：

In [13]:

```
np.mean(norm.rvs(5, size=500))
```

Out[13]:

```
4.924449334102351
```

因此，为了解释上一节例子的输出： `norm.rvs(5)` 生成了一个平均数为 `loc=5` 的单一正态分布随机变量，因为默认的 `size=1`。

我们建议你明确地设置 `loc` 和 `scale` 参数，将这些值作为关键字而不是参数传递。在调用一个给定的RV的一个以上的方法时，可以通过使用[冻结分布](https://www.heywhale.com/api/notebooks/611e1ea8fe727700176f44d3/RenderedContent?cellcomment=1#冻结分布)的技术来尽量减少重复，如下文所解释的。

## 形态(shape)参数

虽然一般连续随机变量都可以通过赋予`loc`和`scale`参数进行偏移和缩放，但一些分布还需要额外的形态参数确定其形态。作为例子，看到这个伽马分布，这是它的密度函数

γ(x,a)=λ(λx)a−1Γ(a)e−λx,

它要求一个形态参数a。注意到λ的设置可以通过设置scale关键字为1/λ进行。

让我们检查伽马分布的形态参数的名字的数量。（我们从上面知道其应该为1）

In [14]:

```
from scipy.stats import gamma
gamma.numargs,gamma.shapes
```

Out[14]:

```
(1, 'a')
```

现在我们设置形态变量的值为1以变成指数分布。所以我们可以容易的比较是否得到了我们所期望的结果。

In [15]:

```
gamma(1, scale=2.).stats(moments="mv")
```

Out[15]:

```
(array(2.), array(4.))
```

注意我们也可以以关键字的方式指定形态参数：

In [16]:

```
gamma(a=1, scale=2.).stats(moments="mv")
```

Out[16]:

```
(array(2.), array(4.))
```

## 冻结分布

不断地传递`loc`与`scale`关键字最终会让人厌烦。而冻结RV的概念被用来解决这个问题。

In [17]:

```
rv = gamma(1, scale=2.)
```

通过使用rv，在任何情况下我们不再需要包含scale与形态参数。显然，分布可以被多种方式使用， 我们可以通过传递所有分布参数给对方法的每次调用（像我们之前做的那样）或者可以对一个分 布对象先冻结参数。让我们看看是怎么回事：

In [18]:

```
rv.mean(), rv.std()
```

Out[18]:

```
(2.0, 2.0)
```

这正是我们应该得到的。

## 广播

像`pdf`这样的简单方法满足numpy的广播规则。作为例子，我们可以计算t分布的右尾分布的临界值 对于不同的概率值以及自由度。

In [19]:

```
stats.t.isf([0.1, 0.05, 0.01], [[10], [11]])
```

Out[19]:

```
array([[1.37218364, 1.81246112, 2.76376946],
       [1.36343032, 1.79588482, 2.71807918]])
```

这里，第一行是以10自由度的临界值，而第二行是以11为自由度的临界值。所以， 广播规则与下面调用了两次isf产生的结果相同。

In [20]:

```
print(stats.t.isf([0.1, 0.05, 0.01], 10))
print(stats.t.isf([0.1, 0.05, 0.01], 11))
[1.37218364 1.81246112 2.76376946]
[1.36343032 1.79588482 2.71807918]
```

但是如果概率数组，如`[0.1,0.05,0.01]`与自由度数组,如`[10,11,12]`具有相同的数组形态， 则进行对应匹配，我们可以分别得到10%，5%，1%尾的临界值对于10，11，12的自由度。

In [21]:

```
stats.t.isf([0.1, 0.05, 0.01], [10, 11, 12])
```

Out[21]:

```
array([1.37218364, 1.79588482, 2.68099799])
```

## 离散分布的特殊之处

离散分布的方法的大多数与连续分布很类似。当然像`pdf`被更换为密度函数`pmf`，没有估计方法， 像`fit`就不能用了。而`scale`不是一个合法的关键字参数。Location参数， 关键字`loc`则仍然可以使用用于位移。

cdf的计算要求一些额外的关注。在连续分布的情况下，累积分布函数在大多数标准情况下是严格递增的， 所以有唯一的逆。而cdf在离散分布却一般是阶跃函数，所以cdf的逆，分位点函数，要求一个不同的定义：

```
ppf(q) = min{x : cdf(x) >= q, x integer}
```

为了更多信息可以看[这里](https://docs.scipy.org/doc/scipy/reference/tutorial/stats/discrete.html#percent-point-function-inverse-cdf)。

我们可以看这个超几何分布的例子

In [1]:

```
from scipy.stats import hypergeom
[M, n, N] = [20, 7, 12]
```

如果我们在一些整数点使用cdf，则它们的cdf值再作用ppf会回到开始的值

In [3]:

```
x = np.arange(4)*2
x
```

Out[3]:

```
array([0, 2, 4, 6])
```

In [5]:

```
prb = hypergeom.cdf(x, M, n, N)
prb
```

Out[5]:

```
array([1.03199174e-04, 5.21155831e-02, 6.08359133e-01, 9.89783282e-01])
```

In [6]:

```
hypergeom.ppf(prb, M, n, N)
```

Out[6]:

```
array([0., 2., 4., 6.])
```

如果我们使用的值不是cdf的函数值，则我们得到一个更高的值。

In [7]:

```
hypergeom.ppf(prb + 1e-8, M, n, N)
```

Out[7]:

```
array([1., 3., 5., 7.])
```

In [8]:

```
hypergeom.ppf(prb - 1e-8, M, n, N)
```

Out[8]:

```
array([0., 2., 4., 6.])
```

## 分布拟合

非冻结分布的参数估计的主要方法：

- fit：分布参数的极大似然估计，包括location与scale
- fit_loc_scale：给定形态参数确定下的location和scale参数的估计
- nnlf：负对数似然函数
- expect：计算函数pdf或pmf的期望值。

## 性能问题与注意事项

分布方法的性能与运行速度根据分布的不同表现差异极大。方法的结果可以由两种方式获得， 精确计算或使用独立于各具体分布的通用算法。

精确计算一般更快。为了进行精确计算，要么直接使用解析公式，要么使用`scipy.special`中的 函数，对于`rvs`还可以使用`numpy.random`里的函数。

另一方面，如果不能进行精确计算，将使用通用方法进行计算。于是为了定义一个分布， 只有pdf异或cdf是必须的；通用方法使用数值积分和求根法进行求解。作为例子， `rgh = stats.gausshyper.rvs(0.5, 2, 2, 2, size=100)`以这种方式创建了100个随机变量 （抽了100个值），这在我的电脑上花了19秒（译者：我花了3.5秒）， 对比取一百万个标准正态分布的值只需要1秒。

## 遗留问题

`scipy.stats`里的分布最近进行了升级并且被仔细的检查过了，不过仍有一些问题存在。

- 分布在很多参数区间上的值被测试过了，然而在一些奇葩的临界条件，仍然可能有错误的值存在。
- fit的极大似然估计以默认值作为初始参数将不会工作的很好，用户必须指派合适的初始参数。 并且，对于一些分布使用极大似然估计本身就不是一个好的选择。

# 三、构造具体的分布

下一个例子展示了如何建立你自己的分布。更多的例子见分布用法以及统计检验

## 创建一个连续分布，继承`rv_continuous`类

创建连续分布是非常简单的

In [9]:

```
from scipy import stats
class deterministic_gen(stats.rv_continuous):
    def _cdf(self, x):
        return np.where(x < 0, 0., 1.)
    def _stats(self):
        return 0., 0., 0., 0.
deterministic = deterministic_gen(name="deterministic")
deterministic.cdf(np.arange(-3, 3, 0.5))
```

Out[9]:

```
array([0., 0., 0., 0., 0., 0., 1., 1., 1., 1., 1., 1.])
```

令人高兴的是，pdf也能被自动计算出来：

In [10]:

```
deterministic.pdf(np.arange(-3, 3, 0.5))
```

Out[10]:

```
array([0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00,
       0.00000000e+00, 0.00000000e+00, 5.83333333e+04, 4.16333634e-12,
       4.16333634e-12, 4.16333634e-12, 4.16333634e-12, 4.16333634e-12])
```

注意这种用法的性能问题，参见“性能问题与注意事项”一节。这种缺乏信息的通用计算可能非常慢。 而且再看看下面这个准确性的例子：

In [11]:

```
from scipy.integrate import quad
quad(deterministic.pdf, -1e-1, 1e-1)
```

Out[11]:

```
(4.163336342344337e-13, 0.0)
```

但这并不是对pdf积分的正确的结果，实际上结果应为1.让我们将积分变得更小一些。

In [12]:

```
quad(deterministic.pdf, -1e-3, 1e-3)
<ipython-input-12-2bd0c5e5ed9f>:1: IntegrationWarning: The maximum number of subdivisions (50) has been achieved.
  If increasing the limit yields no improvement it is advised to analyze 
  the integrand in order to determine the difficulties.  If the position of a 
  local difficulty can be determined (singularity, discontinuity) one will 
  probably gain from splitting up the interval and calling the integrator 
  on the subranges.  Perhaps a special-purpose integrator should be used.
  quad(deterministic.pdf, -1e-3, 1e-3)
```

Out[12]:

```
(1.000076872229173, 0.0010625571718182458)
```

这样看上去好多了，然而，问题本身来源于pdf不是来自包给定的类的定义。

## 继承`rv_discrete`类

在之后我们使用 stats.rv_discrete 产生一个离散分布，其有一个整数区间截断概率。

### 通用信息

通用信息可以从 rv_discrete 的 docstring 中得到。

In [13]:

```
from scipy.stats import rv_discrete
help(rv_discrete)
Help on class rv_discrete in module scipy.stats._distn_infrastructure:

class rv_discrete(rv_generic)
 |  rv_discrete(a=0, b=inf, name=None, badvalue=None, moment_tol=1e-08, values=None, inc=1, longname=None, shapes=None, extradoc=None, seed=None)
 |  
 |  A generic discrete random variable class meant for subclassing.
 |  
 |  `rv_discrete` is a base class to construct specific distribution classes
 |  and instances for discrete random variables. It can also be used
 |  to construct an arbitrary distribution defined by a list of support
 |  points and corresponding probabilities.
 |  
 |  Parameters
 |  ----------
 |  a : float, optional
 |      Lower bound of the support of the distribution, default: 0
 |  b : float, optional
 |      Upper bound of the support of the distribution, default: plus infinity
 |  moment_tol : float, optional
 |      The tolerance for the generic calculation of moments.
 |  values : tuple of two array_like, optional
 |      ``(xk, pk)`` where ``xk`` are integers and ``pk`` are the non-zero
 |      probabilities between 0 and 1 with ``sum(pk) = 1``. ``xk``
 |      and ``pk`` must have the same shape.
 |  inc : integer, optional
 |      Increment for the support of the distribution.
 |      Default is 1. (other values have not been tested)
 |  badvalue : float, optional
 |      The value in a result arrays that indicates a value that for which
 |      some argument restriction is violated, default is np.nan.
 |  name : str, optional
 |      The name of the instance. This string is used to construct the default
 |      example for distributions.
 |  longname : str, optional
 |      This string is used as part of the first line of the docstring returned
 |      when a subclass has no docstring of its own. Note: `longname` exists
 |      for backwards compatibility, do not use for new subclasses.
 |  shapes : str, optional
 |      The shape of the distribution. For example "m, n" for a distribution
 |      that takes two integers as the two shape arguments for all its methods
 |      If not provided, shape parameters will be inferred from
 |      the signatures of the private methods, ``_pmf`` and ``_cdf`` of
 |      the instance.
 |  extradoc :  str, optional
 |      This string is used as the last part of the docstring returned when a
 |      subclass has no docstring of its own. Note: `extradoc` exists for
 |      backwards compatibility, do not use for new subclasses.
 |  seed : {None, int, `~np.random.RandomState`, `~np.random.Generator`}, optional
 |      This parameter defines the object to use for drawing random variates.
 |      If `seed` is `None` the `~np.random.RandomState` singleton is used.
 |      If `seed` is an int, a new ``RandomState`` instance is used, seeded
 |      with seed.
 |      If `seed` is already a ``RandomState`` or ``Generator`` instance,
 |      then that object is used.
 |      Default is None.
 |  
 |  Methods
 |  -------
 |  rvs
 |  pmf
 |  logpmf
 |  cdf
 |  logcdf
 |  sf
 |  logsf
 |  ppf
 |  isf
 |  moment
 |  stats
 |  entropy
 |  expect
 |  median
 |  mean
 |  std
 |  var
 |  interval
 |  __call__
 |  support
 |  
 |  
 |  Notes
 |  -----
 |  
 |  This class is similar to `rv_continuous`. Whether a shape parameter is
 |  valid is decided by an ``_argcheck`` method (which defaults to checking
 |  that its arguments are strictly positive.)
 |  The main differences are:
 |  
 |  - the support of the distribution is a set of integers
 |  - instead of the probability density function, ``pdf`` (and the
 |    corresponding private ``_pdf``), this class defines the
 |    *probability mass function*, `pmf` (and the corresponding
 |    private ``_pmf``.)
 |  - scale parameter is not defined.
 |  
 |  To create a new discrete distribution, we would do the following:
 |  
 |  >>> from scipy.stats import rv_discrete
 |  >>> class poisson_gen(rv_discrete):
 |  ...     "Poisson distribution"
 |  ...     def _pmf(self, k, mu):
 |  ...         return exp(-mu) * mu**k / factorial(k)
 |  
 |  and create an instance::
 |  
 |  >>> poisson = poisson_gen(name="poisson")
 |  
 |  Note that above we defined the Poisson distribution in the standard form.
 |  Shifting the distribution can be done by providing the ``loc`` parameter
 |  to the methods of the instance. For example, ``poisson.pmf(x, mu, loc)``
 |  delegates the work to ``poisson._pmf(x-loc, mu)``.
 |  
 |  **Discrete distributions from a list of probabilities**
 |  
 |  Alternatively, you can construct an arbitrary discrete rv defined
 |  on a finite set of values ``xk`` with ``Prob{X=xk} = pk`` by using the
 |  ``values`` keyword argument to the `rv_discrete` constructor.
 |  
 |  Examples
 |  --------
 |  
 |  Custom made discrete distribution:
 |  
 |  >>> from scipy import stats
 |  >>> xk = np.arange(7)
 |  >>> pk = (0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.2)
 |  >>> custm = stats.rv_discrete(name='custm', values=(xk, pk))
 |  >>>
 |  >>> import matplotlib.pyplot as plt
 |  >>> fig, ax = plt.subplots(1, 1)
 |  >>> ax.plot(xk, custm.pmf(xk), 'ro', ms=12, mec='r')
 |  >>> ax.vlines(xk, 0, custm.pmf(xk), colors='r', lw=4)
 |  >>> plt.show()
 |  
 |  Random number generation:
 |  
 |  >>> R = custm.rvs(size=100)
 |  
 |  Method resolution order:
 |      rv_discrete
 |      rv_generic
 |      builtins.object
 |  
 |  Methods defined here:
 |  
 |  __init__(self, a=0, b=inf, name=None, badvalue=None, moment_tol=1e-08, values=None, inc=1, longname=None, shapes=None, extradoc=None, seed=None)
 |      Initialize self.  See help(type(self)) for accurate signature.
 |  
 |  cdf(self, k, *args, **kwds)
 |      Cumulative distribution function of the given RV.
 |      
 |      Parameters
 |      ----------
 |      k : array_like, int
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      cdf : ndarray
 |          Cumulative distribution function evaluated at `k`.
 |  
 |  expect(self, func=None, args=(), loc=0, lb=None, ub=None, conditional=False, maxcount=1000, tolerance=1e-10, chunksize=32)
 |      Calculate expected value of a function with respect to the distribution
 |      for discrete distribution by numerical summation.
 |      
 |      Parameters
 |      ----------
 |      func : callable, optional
 |          Function for which the expectation value is calculated.
 |          Takes only one argument.
 |          The default is the identity mapping f(k) = k.
 |      args : tuple, optional
 |          Shape parameters of the distribution.
 |      loc : float, optional
 |          Location parameter.
 |          Default is 0.
 |      lb, ub : int, optional
 |          Lower and upper bound for the summation, default is set to the
 |          support of the distribution, inclusive (``ul <= k <= ub``).
 |      conditional : bool, optional
 |          If true then the expectation is corrected by the conditional
 |          probability of the summation interval. The return value is the
 |          expectation of the function, `func`, conditional on being in
 |          the given interval (k such that ``ul <= k <= ub``).
 |          Default is False.
 |      maxcount : int, optional
 |          Maximal number of terms to evaluate (to avoid an endless loop for
 |          an infinite sum). Default is 1000.
 |      tolerance : float, optional
 |          Absolute tolerance for the summation. Default is 1e-10.
 |      chunksize : int, optional
 |          Iterate over the support of a distributions in chunks of this size.
 |          Default is 32.
 |      
 |      Returns
 |      -------
 |      expect : float
 |          Expected value.
 |      
 |      Notes
 |      -----
 |      For heavy-tailed distributions, the expected value may or may not exist,
 |      depending on the function, `func`. If it does exist, but the sum converges
 |      slowly, the accuracy of the result may be rather low. For instance, for
 |      ``zipf(4)``, accuracy for mean, variance in example is only 1e-5.
 |      increasing `maxcount` and/or `chunksize` may improve the result, but may
 |      also make zipf very slow.
 |      
 |      The function is not vectorized.
 |  
 |  isf(self, q, *args, **kwds)
 |      Inverse survival function (inverse of `sf`) at q of the given RV.
 |      
 |      Parameters
 |      ----------
 |      q : array_like
 |          Upper tail probability.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      k : ndarray or scalar
 |          Quantile corresponding to the upper tail probability, q.
 |  
 |  logcdf(self, k, *args, **kwds)
 |      Log of the cumulative distribution function at k of the given RV.
 |      
 |      Parameters
 |      ----------
 |      k : array_like, int
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      logcdf : array_like
 |          Log of the cumulative distribution function evaluated at k.
 |  
 |  logpmf(self, k, *args, **kwds)
 |      Log of the probability mass function at k of the given RV.
 |      
 |      Parameters
 |      ----------
 |      k : array_like
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter. Default is 0.
 |      
 |      Returns
 |      -------
 |      logpmf : array_like
 |          Log of the probability mass function evaluated at k.
 |  
 |  logsf(self, k, *args, **kwds)
 |      Log of the survival function of the given RV.
 |      
 |      Returns the log of the "survival function," defined as 1 - `cdf`,
 |      evaluated at `k`.
 |      
 |      Parameters
 |      ----------
 |      k : array_like
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      logsf : ndarray
 |          Log of the survival function evaluated at `k`.
 |  
 |  pmf(self, k, *args, **kwds)
 |      Probability mass function at k of the given RV.
 |      
 |      Parameters
 |      ----------
 |      k : array_like
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      pmf : array_like
 |          Probability mass function evaluated at k
 |  
 |  ppf(self, q, *args, **kwds)
 |      Percent point function (inverse of `cdf`) at q of the given RV.
 |      
 |      Parameters
 |      ----------
 |      q : array_like
 |          Lower tail probability.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      k : array_like
 |          Quantile corresponding to the lower tail probability, q.
 |  
 |  rvs(self, *args, **kwargs)
 |      Random variates of given type.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      size : int or tuple of ints, optional
 |          Defining number of random variates (Default is 1).  Note that `size`
 |          has to be given as keyword, not as positional argument.
 |      random_state : {None, int, `~np.random.RandomState`, `~np.random.Generator`}, optional
 |          This parameter defines the object to use for drawing random
 |          variates.
 |          If `random_state` is `None` the `~np.random.RandomState` singleton
 |          is used.
 |          If `random_state` is an int, a new ``RandomState`` instance is used,
 |          seeded with random_state.
 |          If `random_state` is already a ``RandomState`` or ``Generator``
 |          instance, then that object is used.
 |          Default is None.
 |      
 |      Returns
 |      -------
 |      rvs : ndarray or scalar
 |          Random variates of given `size`.
 |  
 |  sf(self, k, *args, **kwds)
 |      Survival function (1 - `cdf`) at k of the given RV.
 |      
 |      Parameters
 |      ----------
 |      k : array_like
 |          Quantiles.
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      
 |      Returns
 |      -------
 |      sf : array_like
 |          Survival function evaluated at k.
 |  
 |  ----------------------------------------------------------------------
 |  Static methods defined here:
 |  
 |  __new__(cls, a=0, b=inf, name=None, badvalue=None, moment_tol=1e-08, values=None, inc=1, longname=None, shapes=None, extradoc=None, seed=None)
 |      Create and return a new object.  See help(type) for accurate signature.
 |  
 |  ----------------------------------------------------------------------
 |  Methods inherited from rv_generic:
 |  
 |  __call__(self, *args, **kwds)
 |      Freeze the distribution for the given arguments.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution.  Should include all
 |          the non-optional arguments, may include ``loc`` and ``scale``.
 |      
 |      Returns
 |      -------
 |      rv_frozen : rv_frozen instance
 |          The frozen distribution.
 |  
 |  __getstate__(self)
 |  
 |  __setstate__(self, state)
 |  
 |  entropy(self, *args, **kwds)
 |      Differential entropy of the RV.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          Location parameter (default=0).
 |      scale : array_like, optional  (continuous distributions only).
 |          Scale parameter (default=1).
 |      
 |      Notes
 |      -----
 |      Entropy is defined base `e`:
 |      
 |      >>> drv = rv_discrete(values=((0, 1), (0.5, 0.5)))
 |      >>> np.allclose(drv.entropy(), np.log(2.0))
 |      True
 |  
 |  freeze(self, *args, **kwds)
 |      Freeze the distribution for the given arguments.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution.  Should include all
 |          the non-optional arguments, may include ``loc`` and ``scale``.
 |      
 |      Returns
 |      -------
 |      rv_frozen : rv_frozen instance
 |          The frozen distribution.
 |  
 |  interval(self, alpha, *args, **kwds)
 |      Confidence interval with equal areas around the median.
 |      
 |      Parameters
 |      ----------
 |      alpha : array_like of float
 |          Probability that an rv will be drawn from the returned range.
 |          Each value should be in the range [0, 1].
 |      arg1, arg2, ... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          location parameter, Default is 0.
 |      scale : array_like, optional
 |          scale parameter, Default is 1.
 |      
 |      Returns
 |      -------
 |      a, b : ndarray of float
 |          end-points of range that contain ``100 * alpha %`` of the rv's
 |          possible values.
 |  
 |  mean(self, *args, **kwds)
 |      Mean of the distribution.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          location parameter (default=0)
 |      scale : array_like, optional
 |          scale parameter (default=1)
 |      
 |      Returns
 |      -------
 |      mean : float
 |          the mean of the distribution
 |  
 |  median(self, *args, **kwds)
 |      Median of the distribution.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          Location parameter, Default is 0.
 |      scale : array_like, optional
 |          Scale parameter, Default is 1.
 |      
 |      Returns
 |      -------
 |      median : float
 |          The median of the distribution.
 |      
 |      See Also
 |      --------
 |      rv_discrete.ppf
 |          Inverse of the CDF
 |  
 |  moment(self, n, *args, **kwds)
 |      n-th order non-central moment of distribution.
 |      
 |      Parameters
 |      ----------
 |      n : int, n >= 1
 |          Order of moment.
 |      arg1, arg2, arg3,... : float
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          location parameter (default=0)
 |      scale : array_like, optional
 |          scale parameter (default=1)
 |  
 |  stats(self, *args, **kwds)
 |      Some statistics of the given RV.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          location parameter (default=0)
 |      scale : array_like, optional (continuous RVs only)
 |          scale parameter (default=1)
 |      moments : str, optional
 |          composed of letters ['mvsk'] defining which moments to compute:
 |          'm' = mean,
 |          'v' = variance,
 |          's' = (Fisher's) skew,
 |          'k' = (Fisher's) kurtosis.
 |          (default is 'mv')
 |      
 |      Returns
 |      -------
 |      stats : sequence
 |          of requested moments.
 |  
 |  std(self, *args, **kwds)
 |      Standard deviation of the distribution.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          location parameter (default=0)
 |      scale : array_like, optional
 |          scale parameter (default=1)
 |      
 |      Returns
 |      -------
 |      std : float
 |          standard deviation of the distribution
 |  
 |  support(self, *args, **kwargs)
 |      Return the support of the distribution.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, ... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information).
 |      loc : array_like, optional
 |          location parameter, Default is 0.
 |      scale : array_like, optional
 |          scale parameter, Default is 1.
 |      Returns
 |      -------
 |      a, b : float
 |          end-points of the distribution's support.
 |  
 |  var(self, *args, **kwds)
 |      Variance of the distribution.
 |      
 |      Parameters
 |      ----------
 |      arg1, arg2, arg3,... : array_like
 |          The shape parameter(s) for the distribution (see docstring of the
 |          instance object for more information)
 |      loc : array_like, optional
 |          location parameter (default=0)
 |      scale : array_like, optional
 |          scale parameter (default=1)
 |      
 |      Returns
 |      -------
 |      var : float
 |          the variance of the distribution
 |  
 |  ----------------------------------------------------------------------
 |  Data descriptors inherited from rv_generic:
 |  
 |  __dict__
 |      dictionary for instance variables (if defined)
 |  
 |  __weakref__
 |      list of weak references to the object (if defined)
 |  
 |  random_state
 |      Get or set the RandomState object for generating random variates.
 |      
 |      This can be either None, int, a RandomState instance, or a
 |      np.random.Generator instance.
 |      
 |      If None (or np.random), use the RandomState singleton used by np.random.
 |      If already a RandomState or Generator instance, use it.
 |      If an int, use a new RandomState instance seeded with seed.
```

从中我们得知：

> “你可以构建任意一个像P(X=xk)=pk一样形式的离散rv，通过传递(xk,pk)元组序列给 rv_discrete初始化方法(通过values=keyword方式)，但其不能有0概率值。”

接下来，还有一些进一步的要求：

- keyword必须给出。
- Xk必须是整数
- 小数的有效位数应当被给出。
  事实上，如果最后两个要求没有被满足，一个异常将被抛出或者导致一个错误的数值。

### 一个例子

让我们开始，首先

In [14]:

```
npoints = 20   # number of integer support points of the distribution minus 1
npointsh = npoints / 2
npointsf = float(npoints)
nbound = 4   # bounds for the truncated normal
normbound = (1+1/npointsf) * nbound   # actual bounds of truncated normal
grid = np.arange(-npointsh, npointsh+2, 1)   # integer grid
gridlimitsnorm = (grid-0.5) / npointsh * nbound   # bin limits for the truncnorm
gridlimits = grid - 0.5   # used later in the analysis
grid = grid[:-1]
probs = np.diff(stats.truncnorm.cdf(gridlimitsnorm, -normbound, normbound))
gridint = grid
```

然后我们可以继承rv_discrete类

In [15]:

```
normdiscrete = stats.rv_discrete(values=(gridint,np.round(probs, decimals=7)), name='normdiscrete')
```

现在我们已经定义了这个分布，我们可以调用其所有常规的离散分布方法。

In [16]:

```
print('mean = %6.4f, variance = %6.4f, skew = %6.4f, kurtosis = %6.4f'% \
...       normdiscrete.stats(moments =  'mvsk'))
nd_std = np.sqrt(normdiscrete.stats(moments='v'))
mean = -0.0000, variance = 6.3302, skew = 0.0000, kurtosis = -0.0076
```

### 测试上面的结果

让我们产生一个随机样本并且比较连续概率的情况。

In [17]:

```
n_sample = 500
np.random.seed(87655678)   # fix the seed for replicability
rvs = normdiscrete.rvs(size=n_sample)
rvsnd = rvs
f, l = np.histogram(rvs, bins=gridlimits)
sfreq = np.vstack([gridint, f, probs*n_sample]).T
print(sfreq)
[[-1.00000000e+01  0.00000000e+00  2.95019349e-02]
 [-9.00000000e+00  0.00000000e+00  1.32294142e-01]
 [-8.00000000e+00  0.00000000e+00  5.06497902e-01]
 [-7.00000000e+00  2.00000000e+00  1.65568919e+00]
 [-6.00000000e+00  1.00000000e+00  4.62125309e+00]
 [-5.00000000e+00  9.00000000e+00  1.10137298e+01]
 [-4.00000000e+00  2.60000000e+01  2.24137683e+01]
 [-3.00000000e+00  3.70000000e+01  3.89503370e+01]
 [-2.00000000e+00  5.10000000e+01  5.78004747e+01]
 [-1.00000000e+00  7.10000000e+01  7.32455414e+01]
 [ 0.00000000e+00  7.40000000e+01  7.92618251e+01]
 [ 1.00000000e+00  8.90000000e+01  7.32455414e+01]
 [ 2.00000000e+00  5.50000000e+01  5.78004747e+01]
 [ 3.00000000e+00  5.00000000e+01  3.89503370e+01]
 [ 4.00000000e+00  1.70000000e+01  2.24137683e+01]
 [ 5.00000000e+00  1.10000000e+01  1.10137298e+01]
 [ 6.00000000e+00  4.00000000e+00  4.62125309e+00]
 [ 7.00000000e+00  3.00000000e+00  1.65568919e+00]
 [ 8.00000000e+00  0.00000000e+00  5.06497902e-01]
 [ 9.00000000e+00  0.00000000e+00  1.32294142e-01]
 [ 1.00000000e+01  0.00000000e+00  2.95019349e-02]]
```

![Image Name](https://cdn.kesci.com/upload/image/qy2io0p7v5.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qy2io9y7qi.png?imageView2/0/w/960/h/960)

接下来，我们可以测试，是否我们的样本取自于一个normdiscrete分布。这也是在验证 是否随机数是以正确的方式产生的。

卡方测试要求起码在每个子区间（bin）里具有最小数目的观测值。我们组合末端子区间进大子区间 所以它们现在包含了足够数量的观测值。

In [18]:

```
f2 = np.hstack([f[:5].sum(), f[5:-5], f[-5:].sum()])
p2 = np.hstack([probs[:5].sum(), probs[5:-5], probs[-5:].sum()])
ch2, pval = stats.chisquare(f2, p2*n_sample)
```

In [19]:

```
print('chisquare for normdiscrete: chi2 = %6.3f pvalue = %6.4f' % (ch2, pval))
chisquare for normdiscrete: chi2 = 12.466 pvalue = 0.4090
```

P值在这个情况下是不显著的，所以我们可以断言我们的随机样本的确是由此分布产生的。

# 四、样本分析

首先，我们创建一些随机变量。我们设置一个种子所以每次我们都可以得到相同的结果以便观察。 作为一个例子，我们从t分布中抽一个样本。

In [20]:

```
np.random.seed(282629734)
x = stats.t.rvs(10, size=1000)
```

这里，我们设置了t分布的形态参数，在这里就是自由度设为10，使用size=1000表示。我们的样本由1000个抽样是独立的（伪）。当我们不指派loc和scale时，它们具有默认值0和1。

## 描述统计

X是一个numpy数组。我们可以直接调用它的方法。

In [21]:

```
x.max(), x.min()
```

Out[21]:

```
(5.263277329807165, -3.7897557242248197)
```

In [22]:

```
x.mean(), x.var() 
```

Out[22]:

```
(0.014061066398468422, 1.288993862079285)
```

如何比较分布本身和它的样本的指标？

In [23]:

```
m, v, s, k = stats.t.stats(10, moments='mvsk')
n, (smin, smax), sm, sv, ss, sk = stats.describe(x)
```

In [27]:

```
print('distribution:')
sstr = 'mean = %6.4f, variance = %6.4f, skew = %6.4f, kurtosis = %6.4f'
print(sstr %(m, v, s ,k))
print('sample:      ')
print(sstr %(sm, sv, ss, sk))
distribution:
mean = 0.0000, variance = 1.2500, skew = 0.0000, kurtosis = 1.0000
sample:      
mean = 0.0141, variance = 1.2903, skew = 0.2165, kurtosis = 1.0556
```

注意：stats.describe用的是无偏的方差估计量，而np.var却用的是有偏的估计量。

## T检验和KS检验

我们可以使用t检验是否样本与给定均值（这里是理论均值）存在统计显著差异。

In [28]:

```
print('t-statistic = %6.3f pvalue = %6.4f' %  stats.ttest_1samp(x, m))
t-statistic =  0.391 pvalue = 0.6955
```

P值为0.7，这代表第一类错误的概率，在例子中，为10%。我们不能拒绝“该样本均值为0”这个假设， 0是标准t分布的理论均值。
作为练习，我们也可以不使用所提供的函数直接计算我们的t检验，这应该会给我们同样的答案：

In [29]:

```
tt = (sm-m)/np.sqrt(sv/float(n))  # t-statistic for mean
pval = stats.t.sf(np.abs(tt), n-1)*2  # two-sided pvalue = Prob(abs(t)>tt)
print('t-statistic = %6.3f pvalue = %6.4f' % (tt, pval))
t-statistic =  0.391 pvalue = 0.6955
```

这里Kolmogorov-Smirnov检验（KS检验）被被用来检验样本是否来自一个标准的t分布。

In [30]:

```
print('KS-statistic D = %6.3f pvalue = %6.4f' % stats.kstest(x, 't', (10,)))
KS-statistic D =  0.016 pvalue = 0.9571
```

又一次得到了很高的P值。所以我们不能拒绝样本是来自t分布的假设。在实际应用中， 我们不能知道潜在的分布到底是什么。如果我们使用KS检验我们的样本对照正态分布， 那么我们将也不能拒绝我们的样本是来自正态分布的，在这种情况下P值为0.4左右。

In [31]:

```
print('KS-statistic D = %6.3f pvalue = %6.4f' % stats.kstest(x,'norm'))
KS-statistic D =  0.028 pvalue = 0.3918
```

无论如何，标准正态分布有1的方差，当我们的样本有1.29时。如果我们标准化我们的样本并且 测试它比照正态分布，那么P值将又一次很高我们将还是不能拒绝假设是来自正态分布的。

In [32]:

```
d, pval = stats.kstest((x-x.mean())/x.std(), 'norm')
print('KS-statistic D = %6.3f pvalue = %6.4f' % (d, pval))
KS-statistic D =  0.032 pvalue = 0.2397
```

> Note:
> 注释：KS检验假设我们比照的分布就是以给定的参数确定的，但我们在最后估计了均值和方差， 这个假设就被违反了，故而这个测试统计量的P值是含偏的，这个用法是错误的。

## 分布尾部

最后，我们可以检查分布的右尾，我们可以使用分位点函数ppf，其为cdf函数的逆，来获得临界值， 或者更直接的，我们可以使用残存函数的逆来办。

In [33]:

```
crit01, crit05, crit10 = stats.t.ppf([1-0.01, 1-0.05, 1-0.10], 10)
print('critical values from ppf at 1%%, 5%% and 10%% %8.4f %8.4f %8.4f'% (crit01, crit05, crit10))
print('critical values from isf at 1%%, 5%% and 10%% %8.4f %8.4f %8.4f'% tuple(stats.t.isf([0.01,0.05,0.10],10)))

freq01 = np.sum(x>crit01) / float(n) * 100
freq05 = np.sum(x>crit05) / float(n) * 100
freq10 = np.sum(x>crit10) / float(n) * 100
print('sample %%-frequency at 1%%, 5%% and 10%% tail %8.4f %8.4f %8.4f'% (freq01, freq05, freq10))
critical values from ppf at 1%, 5% and 10%   2.7638   1.8125   1.3722
critical values from isf at 1%, 5% and 10%   2.7638   1.8125   1.3722
sample %-frequency at 1%, 5% and 10% tail   1.4000   5.8000  10.5000
```

在这三种情况中，我们的样本有有一个更重的尾部，即实际在理论分界值右边的概率要高于理论值。 我们可以通过使用更大的样本来获得更好的拟合。在以下情况经验频率已经很接近理论概率了， 但即使我们重复这个过程若干次，波动依然会保持在这个程度。

In [34]:

```
freq05l = np.sum(stats.t.rvs(10, size=10000) > crit05) / 10000.0 * 100
print('larger sample %%-frequency at 5%% tail %8.4f'% freq05l)
larger sample %-frequency at 5% tail   4.8000
```

我们也可以比较它与正态分布的尾部，其有一个轻的多的尾部：

In [36]:

```
print('tail prob. of normal at 1%%, 5%% and 10%% %8.4f %8.4f %8.4f'% \
    tuple(stats.norm.sf([crit01, crit05, crit10])*100))
tail prob. of normal at 1%, 5% and 10%   0.2857   3.4957   8.5003
```

卡方检验可以被用来测试，是否一个有限的分类观测值频率与假定的理论概率分布具有显著差异。

In [37]:

```
quantiles = [0.0, 0.01, 0.05, 0.1, 1-0.10, 1-0.05, 1-0.01, 1.0]
crit = stats.t.ppf(quantiles, 10)
print(crit)
[       -inf -2.76376946 -1.81246112 -1.37218364  1.37218364  1.81246112
  2.76376946         inf]
```

In [39]:

```
n_sample = x.size
freqcount = np.histogram(x, bins=crit)[0]
tprob = np.diff(quantiles)
nprob = np.diff(stats.norm.cdf(crit))
tch, tpval = stats.chisquare(freqcount, tprob*n_sample)
nch, npval = stats.chisquare(freqcount, nprob*n_sample)
print('chisquare for t:      chi2 = %6.3f pvalue = %6.4f' % (tch, tpval))
print('chisquare for normal: chi2 = %6.3f pvalue = %6.4f' % (nch, npval))
chisquare for t:      chi2 =  2.300 pvalue = 0.8901
chisquare for normal: chi2 = 64.605 pvalue = 0.0000
```

我们看到当t分布检验没被拒绝时标准正态分布却被完全拒绝。在我们的样本区分出这两个分布后， 我们可以先进行拟合确定scale与location再检查拟合后的分布的差异性。

我们可以先进行拟合，再用拟合分布而不是默认（起码location和scale是默认的）分布去进行检验。

In [40]:

```
tdof, tloc, tscale = stats.t.fit(x)
nloc, nscale = stats.norm.fit(x)
tprob = np.diff(stats.t.cdf(crit, tdof, loc=tloc, scale=tscale))
nprob = np.diff(stats.norm.cdf(crit, loc=nloc, scale=nscale))
tch, tpval = stats.chisquare(freqcount, tprob*n_sample)
nch, npval = stats.chisquare(freqcount, nprob*n_sample)
print('chisquare for t:      chi2 = %6.3f pvalue = %6.4f' % (tch, tpval))
print('chisquare for normal: chi2 = %6.3f pvalue = %6.4f' % (nch, npval))
chisquare for t:      chi2 =  1.577 pvalue = 0.9542
chisquare for normal: chi2 = 11.085 pvalue = 0.0858
```

在经过参数调整之后，我们仍然可以以5%水平拒绝正态分布假设。然而却以95%的p值显然的不能拒绝t分布。

## 正态分布的特殊检验

自从正态分布变为统计学中最常见的分布，就出现了大量的方法用来检验一个样本 是否可以被看成是来自正态分布的。

首先我们检验分布的峰度和偏度是否显著地与正态分布的对应值相差异。

In [41]:

```
print('normal skewtest teststat = %6.3f pvalue = %6.4f' % stats.skewtest(x))
print('normal kurtosistest teststat = %6.3f pvalue = %6.4f' % stats.kurtosistest(x))
normal skewtest teststat =  2.785 pvalue = 0.0054
normal kurtosistest teststat =  4.757 pvalue = 0.0000
```

将这两个检验组合起来的正态性检验

In [42]:

```
print('normaltest teststat = %6.3f pvalue = %6.4f' % stats.normaltest(x))
normaltest teststat = 30.379 pvalue = 0.0000
```

在所有三个测试中，P值是非常低的，所以我们可以拒绝我们的样本的峰度与偏度与正态分布相同的假设。

当我们的样本标准化之后，我们依旧得到相同的结果。

In [43]:

```
print('normaltest teststat = %6.3f pvalue = %6.4f' % \
    stats.normaltest((x-x.mean())/x.std()))
normaltest teststat = 30.379 pvalue = 0.0000
```

因为正态性被很强的拒绝了，所以我们可以检查这种检验方式是否可以有效地作用到其他情况中。

In [44]:

```
print('normaltest teststat = %6.3f pvalue = %6.4f' % stats.normaltest(stats.t.rvs(10, size=100)))
print('normaltest teststat = %6.3f pvalue = %6.4f' % stats.normaltest(stats.norm.rvs(size=1000)))
normaltest teststat =  4.698 pvalue = 0.0955
normaltest teststat =  0.613 pvalue = 0.7361
```

我们检验了小样本的t分布样本的观测值以及一个大样本的正态分布观测值，在这两种情况中我们 都不能拒绝其来自正态分布的空假设。得到这样的结果是因为前者是因为无法区分小样本下的t分布， 后者是因为它本来就来自正态分布。

# 五、比较两个样本

接下来，我们有两个分布，其可以判定为相同或者来自不同的分布，以及我们希望测试是否这些 样本有相同的统计特征。

## 均值

以相同的均值产生的样本进行检验：

In [45]:

```
rvs1 = stats.norm.rvs(loc=5, scale=10, size=500)
rvs2 = stats.norm.rvs(loc=5, scale=10, size=500)
stats.ttest_ind(rvs1, rvs2)
```

Out[45]:

```
Ttest_indResult(statistic=-0.5489036175088705, pvalue=0.5831943748663959)
```

以不同的均值产生的样本进行检验：

In [47]:

```
rvs3 = stats.norm.rvs(loc=8, scale=10, size=500)
stats.ttest_ind(rvs1, rvs3)
```

Out[47]:

```
Ttest_indResult(statistic=-4.533414290175026, pvalue=6.507128186389019e-06)
```

## 对于两个不同的样本进行的KS检验

在这个例子中我们使用两个同分布的样本进行检验.设因为P值很高,毫不奇怪我们不能拒绝原假设。

In [48]:

```
stats.ks_2samp(rvs1, rvs2)
```

Out[48]:

```
KstestResult(statistic=0.026, pvalue=0.9959527565364388)
```

在第二个例子中，由于均值不同，所以我们可以拒绝空假设，由P值小于1%。

In [49]:

```
stats.ks_2samp(rvs1, rvs3)
```

Out[49]:

```
KstestResult(statistic=0.114, pvalue=0.00299005061044668)
```

# 六、核密度估计

一个常见的统计学问题是从一个样本中估计随机变量的概率密度分布函数（PDF） 这个问题被称为密度估计，对此最著名的工具是直方图。直方图是一个很好的可视化工具 （主要是因为每个人都理解它）。但是对于对于数据特征的利用却并不是非常有效率。

核密度估计(KDE对于这个问题)是一个更有效的工具。这个[gaussian_kde](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.gaussian_kde.html#scipy.stats.gaussian_kde)估计方法可以被用来估计 单元或多元数据的PDF。它在数据呈单峰的时候工作的最好，但也可以在多峰情况下工作。

## 单元估计

我们以一个最小数据集来观察[gaussian_kde](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.gaussian_kde.html#scipy.stats.gaussian_kde)是如何工作的，以及带宽（bandwidth）的不同选择方式。 PDF对应的数据被以蓝线的形式显示在图像的底端（被称为毯图（rug plot））

In [50]:

```
from scipy import stats
import matplotlib.pyplot as plt
x1 = np.array([-7, -5, 1, 4, 5], dtype=np.float64)
kde1 = stats.gaussian_kde(x1)
kde2 = stats.gaussian_kde(x1, bw_method='silverman')
fig = plt.figure()
ax = fig.add_subplot(111)
ax.plot(x1, np.zeros(x1.shape), 'b+', ms=20)  # rug plot
x_eval = np.linspace(-10, 10, num=200)
ax.plot(x_eval, kde1(x_eval), 'k-', label="Scott's Rule")
ax.plot(x_eval, kde2(x_eval), 'r-', label="Silverman's Rule")
plt.show()
```

![img](https://cdn.kesci.com/upload/rt/05AB80C61BA54F299FDE57B209DB76B8/qy2sv4ojf5.png)

我们看到在Scott规则以及Silverman规则下的结果几乎没有差异。以及带宽的选择相比较于 数据的稀少显得太宽。我们可以定义我们的带宽函数以获得一个更少平滑的结果。

In [51]:

```
def my_kde_bandwidth(obj, fac=1./5):
    """We use Scott's Rule, multiplied by a constant factor."""
    return np.power(obj.n, -1./(obj.d+4)) * fac
fig = plt.figure()
ax = fig.add_subplot(111)
ax.plot(x1, np.zeros(x1.shape), 'b+', ms=20)  # rug plot
kde3 = stats.gaussian_kde(x1, bw_method=my_kde_bandwidth)
ax.plot(x_eval, kde3(x_eval), 'g-', label="With smaller BW")
plt.show()
```

![img](https://cdn.kesci.com/upload/rt/A191D957D55B4B709D863A30F8524CD4/qy2svtjx1o.png)

我们看到如果我们设置带宽为非常狭窄，则获得PDF的估计退化为围绕在数据点的简单的高斯和。

我们现在使用更真实的例子，并且看看在两种带宽选择规则中的差异。这些规则被认为在 正态分布上很好用，但即使是偏离正态的单峰分布上它也工作的很好。作为一个非正态分布， 我们采用5自由度的t分布。

In [52]:

```
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats


rng = np.random.default_rng()
x1 = rng.normal(size=200)  # random data, normal distribution
xs = np.linspace(x1.min()-1, x1.max()+1, 200)

kde1 = stats.gaussian_kde(x1)
kde2 = stats.gaussian_kde(x1, bw_method='silverman')

fig = plt.figure(figsize=(8, 6))

ax1 = fig.add_subplot(211)
ax1.plot(x1, np.zeros(x1.shape), 'b+', ms=12)  # rug plot
ax1.plot(xs, kde1(xs), 'k-', label="Scott's Rule")
ax1.plot(xs, kde2(xs), 'b-', label="Silverman's Rule")
ax1.plot(xs, stats.norm.pdf(xs), 'r--', label="True PDF")

ax1.set_xlabel('x')
ax1.set_ylabel('Density')
ax1.set_title("Normal (top) and Student's T$_{df=5}$ (bottom) distributions")
ax1.legend(loc=1)

x2 = stats.t.rvs(5, size=200, random_state=rng)  # random data, T distribution
xs = np.linspace(x2.min() - 1, x2.max() + 1, 200)

kde3 = stats.gaussian_kde(x2)
kde4 = stats.gaussian_kde(x2, bw_method='silverman')

ax2 = fig.add_subplot(212)
ax2.plot(x2, np.zeros(x2.shape), 'b+', ms=12)  # rug plot
ax2.plot(xs, kde3(xs), 'k-', label="Scott's Rule")
ax2.plot(xs, kde4(xs), 'b-', label="Silverman's Rule")
ax2.plot(xs, stats.t.pdf(xs, 5), 'r--', label="True PDF")

ax2.set_xlabel('x')
ax2.set_ylabel('Density')

plt.show()
```

![img](https://cdn.kesci.com/upload/rt/A7676E7B3450474092EFCA900353A016/qy2swm36ab.png)

下面我们看到这个一个宽一个窄的双峰分布。可以想到结果将难达到以十分近似， 因为每个峰需要不同的带宽去拟合。

In [53]:

```
from functools import partial
loc1, scale1, size1 = (-2, 1, 175)
loc2, scale2, size2 = (2, 0.2, 50)
x2 = np.concatenate([np.random.normal(loc=loc1, scale=scale1, size=size1),
                     np.random.normal(loc=loc2, scale=scale2, size=size2)])
x_eval = np.linspace(x2.min() - 1, x2.max() + 1, 500)
kde = stats.gaussian_kde(x2)
kde2 = stats.gaussian_kde(x2, bw_method='silverman')
kde3 = stats.gaussian_kde(x2, bw_method=partial(my_kde_bandwidth, fac=0.2))
kde4 = stats.gaussian_kde(x2, bw_method=partial(my_kde_bandwidth, fac=0.5))
pdf = stats.norm.pdf
bimodal_pdf = pdf(x_eval, loc=loc1, scale=scale1) * float(size1) / x2.size + \
              pdf(x_eval, loc=loc2, scale=scale2) * float(size2) / x2.size
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111)
ax.plot(x2, np.zeros(x2.shape), 'b+', ms=12)
ax.plot(x_eval, kde(x_eval), 'k-', label="Scott's Rule")
ax.plot(x_eval, kde2(x_eval), 'b-', label="Silverman's Rule")
ax.plot(x_eval, kde3(x_eval), 'g-', label="Scott * 0.2")
ax.plot(x_eval, kde4(x_eval), 'c-', label="Scott * 0.5")
ax.plot(x_eval, bimodal_pdf, 'r--', label="Actual PDF")
ax.set_xlim([x_eval.min(), x_eval.max()])
ax.legend(loc=2)
ax.set_xlabel('x')
ax.set_ylabel('Density')
plt.show()
```

![img](https://cdn.kesci.com/upload/rt/DDEE3761E93F49AB9F20DB72FFE0FA97/qy2sxf3c7q.png)

正如预想的，KDE并没有很好的趋近正确的PDF，因为双峰分布的形状不同。通过使用默认带宽 （Scott*0.5）我们可以做得更好，再使用更小的带宽将使平滑性受到影响。这里我们真正需要 的是非均匀（自适应）带宽。

## 多元估计

通过[gaussian_kde](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.gaussian_kde.html#scipy.stats.gaussian_kde)我们可以像单元估计那样进行多元估计。我们现在来解决二元情况， 首先我们产生一些随机的二元数据。

In [54]:

```
def measure(n):
    """Measurement model, return two coupled measurements."""
    m1 = np.random.normal(size=n)
    m2 = np.random.normal(scale=0.5, size=n)
    return m1+m2, m1-m2
m1, m2 = measure(2000)
xmin = m1.min()
xmax = m1.max()
ymin = m2.min()
ymax = m2.max()
```

然后我们对这些数据使用KDE：

In [55]:

```
X, Y = np.mgrid[xmin:xmax:100j, ymin:ymax:100j]
positions = np.vstack([X.ravel(), Y.ravel()])
values = np.vstack([m1, m2])
kernel = stats.gaussian_kde(values)
Z = np.reshape(kernel.evaluate(positions).T, X.shape)
```

最后我们把估计的双峰分布以colormap形式显示出来，并且在上面画出每个数据点。

In [56]:

```
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111)
ax.imshow(np.rot90(Z), cmap=plt.cm.gist_earth_r,
          extent=[xmin, xmax, ymin, ymax])
ax.plot(m1, m2, 'k.', markersize=2)
ax.set_xlim([xmin, xmax])
ax.set_ylim([ymin, ymax])
plt.show()
```

![img](https://cdn.kesci.com/upload/rt/A10D020443684901BE5193D988D60F41/qy2t3q3fqc.png)

## 多尺度图谱关联（MGC）

通过[multiscale_graphcorr](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.multiscale_graphcorr.html#scipy.stats.multiscale_graphcorr)，我们可以测试高维和非线性数据的独立性。在我们开始之前，让我们导入一些有用的包。

In [57]:

```
import numpy as np
import matplotlib.pyplot as plt; plt.style.use('classic')
from scipy.stats import multiscale_graphcorr
```

让我们使用一个自定义绘图函数来绘制数据关系。

In [58]:

```
def mgc_plot(x, y, sim_name, mgc_dict=None, only_viz=False,
             only_mgc=False):
    """Plot sim and MGC-plot"""
    if not only_mgc:
        # simulation
        plt.figure(figsize=(8, 8))
        ax = plt.gca()
        ax.set_title(sim_name + " Simulation", fontsize=20)
        ax.scatter(x, y)
        ax.set_xlabel('X', fontsize=15)
        ax.set_ylabel('Y', fontsize=15)
        ax.axis('equal')
        ax.tick_params(axis="x", labelsize=15)
        ax.tick_params(axis="y", labelsize=15)
        plt.show()
    if not only_viz:
        # local correlation map
        plt.figure(figsize=(8,8))
        ax = plt.gca()
        mgc_map = mgc_dict["mgc_map"]
        # draw heatmap
        ax.set_title("Local Correlation Map", fontsize=20)
        im = ax.imshow(mgc_map, cmap='YlGnBu')
        # colorbar
        cbar = ax.figure.colorbar(im, ax=ax)
        cbar.ax.set_ylabel("", rotation=-90, va="bottom")
        ax.invert_yaxis()
        # Turn spines off and create white grid.
        for edge, spine in ax.spines.items():
            spine.set_visible(False)
        # optimal scale
        opt_scale = mgc_dict["opt_scale"]
        ax.scatter(opt_scale[0], opt_scale[1],
                   marker='X', s=200, color='red')
        # other formatting
        ax.tick_params(bottom="off", left="off")
        ax.set_xlabel('#Neighbors for X', fontsize=15)
        ax.set_ylabel('#Neighbors for Y', fontsize=15)
        ax.tick_params(axis="x", labelsize=15)
        ax.tick_params(axis="y", labelsize=15)
        ax.set_xlim(0, 100)
        ax.set_ylim(0, 100)
        plt.show()
```

让我们先看一些线性数据。

In [59]:

```
rng = np.random.default_rng()
x = np.linspace(-1, 1, num=100)
y = x + 0.3 * rng.random(x.size)
```

仿真关系如下所示：

In [60]:

```
mgc_plot(x, y, "Linear", only_viz=True)
```

![img](https://cdn.kesci.com/upload/rt/AF0E6754FAB346DB92FEFDF34227B668/qy2t9mn9q4.png)

现在，我们可以看到测试统计量、P值和MGC图在下面可视化了。最佳比例尺在地图上显示为一个红色的 "x"。

In [61]:

```
stat, pvalue, mgc_dict = multiscale_graphcorr(x, y)
print("MGC test statistic: ", round(stat, 1))
print("P-value: ", round(pvalue, 1))
mgc_plot(x, y, "Linear", mgc_dict, only_mgc=True)
MGC test statistic:  1.0
P-value:  0.0
```

![img](https://cdn.kesci.com/upload/rt/CAE604AF2111484AA8769CE7D03079F7/qy2tb6w20a.png)

从这里可以看出，MGC能够确定输入数据矩阵之间的关系，因为P值很低，MGC测试统计量也相对较高。MGC-map表明了一种**强烈的线性关系**。直观地说，这是因为有更多的邻居将有助于确定和之间的线性关系。在这种情况下，**最佳尺度相当于全局尺度**，由地图上的红点标记。

对于非线性数据集也可以这样做。下面`x`的`y`数组是由非线性模拟得出的。

In [62]:

```
unif = np.array(rng.uniform(0, 5, size=100))
x = unif * np.cos(np.pi * unif)
y = unif * np.sin(np.pi * unif) + 0.4 * rng.random(x.size)
```

仿真关系可以画在下面。

In [63]:

```
mgc_plot(x, y, "Spiral", only_viz=True)
```

![img](https://cdn.kesci.com/upload/rt/1EA29DA692CC4A528B4B339758FFC208/qy2tg1e8y5.png)

现在，我们可以看到测试统计量、P值和MGC地图在下面可视化了。最佳比例尺在地图上显示为一个红色的 "x"。

In [64]:

```
stat, pvalue, mgc_dict = multiscale_graphcorr(x, y)
print("MGC test statistic: ", round(stat, 1))
print("P-value: ", round(pvalue, 1))
mgc_plot(x, y, "Spiral", mgc_dict, only_mgc=True)
MGC test statistic:  0.2
P-value:  0.0
```

![img](https://cdn.kesci.com/upload/rt/350BD3F00481468394F620C2799E0824/qy2ti5yxfw.png)

从这里可以看出，MGC能够再次确定一种关系，因为P值很低，MGC检验统计量也相对较高。MGC图表明了一种**强烈的非线性关系**。在这种情况下，最佳尺度**相当于当地的尺度**，在地图上用红点标记。

# 七、准蒙特卡洛(Quasi-Monte Carlo)

在谈及准蒙特卡洛（QMC）之前，先简单介绍一下蒙特卡洛（MC）。蒙特卡洛方法或蒙特卡洛实验是一类广泛的计算算法，依靠重复随机抽样来获得数值结果。其基本概念是利用随机性来解决原则上可能是确定性的问题。它们经常被用于物理和数学问题，并且在难以或无法使用其他方法时最为有用。MC方法主要用于三类问题：优化、数字积分和从概率分布中生成抽样。

生成具有特定属性的随机数是一个比听起来更复杂的问题。简单的MC方法被设计为采样点是独立和相同分布的（IID）。但生成多组随机点会产生截然不同的结果。

![Image Name](https://cdn.kesci.com/upload/image/qy2to91gmk.png?imageView2/0/w/960/h/960)

在上面的两种情况下，点是随机产生的，没有任何关于以前绘制的点的知识。很明显，空间的一些区域没有被探索到--这可能会在模拟中造成问题，因为一组特定的点可能会引发完全不同的行为。

MC的一个很大的好处是它有已知的收敛特性。让我们来看看5维空间中平方和的平均值

f(x)=(∑j=15xj)2

当x∼U(0,1)。它有一个已知的平均值μ=5/3+5(5−1)/4 。使用MC采样，我们可以用数字来计算这个均值，近似误差遵循理论上的O(n−1/2)的速率。

![Image Name](https://cdn.kesci.com/upload/image/qy2vh8gb4u.png?imageView2/0/w/960/h/960)

虽然收敛性得到了保证，但实践者往往希望有一个更具有确定性的探索过程。对于普通的MC，可以使用一个种子来获得一个可重复的过程。但是固定种子会破坏收敛性：一个给定的种子可能对某一类问题有效，而对另一类问题则无效。

为了以确定的方式走过空间，通常所做的是使用一个横跨所有参数维度的规则网格，也称为饱和设计。让我们考虑单位超立方体，所有的界线都在0到1之间。现在，在各点之间有0.1的距离，填充单位间隔所需的点的数量将是10。在二维超立方体中，同样的间距需要100个，而在三维中需要1000个点。随着维数的增长，填充空间所需的实验数量随着空间维度的增加而呈指数式增长。这种指数式增长被称为 "维度的诅咒"。

In [65]:

```
import numpy as np
disc = 10
x1 = np.linspace(0, 1, disc)
x2 = np.linspace(0, 1, disc)
x3 = np.linspace(0, 1, disc)
x1, x2, x3 = np.meshgrid(x1, x2, x3)
```

![Image Name](https://cdn.kesci.com/upload/image/qy2vinbhiv.png?imageView2/0/w/960/h/960)
为了缓解这个问题，已经设计了QMC方法。它们是确定性的，对空间有很好的覆盖，其中一些可以继续下去，并保持良好的特性。与MC方法的主要区别是，这些点不是IID，但它们知道以前的点。因此，有些方法也被称为序列。

![Image Name](https://cdn.kesci.com/upload/image/qy2vjkkylt.png?imageView2/0/w/960/h/960)
该图展示了2组256个点。左边的设计是一个普通的MC，而右边的设计是一个使用Sobol'方法的QMC设计。我们清楚地看到，QMC的版本更加均匀。在边界附近的点取样更好，而且有更少的群集或空白。

评估均匀性的一种方法是使用一种叫做差异的措施。这里的Sobol'点的差异比粗略的MC好。

回到均值的计算上，QMC方法对误差的收敛率也更好。他们对于这个函数可以达到O(n−1)，甚至在非常平滑的函数上也有更好的速率。该图显示，Sobol'方法的速率为O(n−1):

![Image Name](https://cdn.kesci.com/upload/image/qy2vnfjn4k.png?imageView2/0/w/960/h/960)

关于更多的数学细节，我们可以参考[scipy.stats.qmc](https://docs.scipy.org/doc/scipy/reference/stats.qmc.html#module-scipy.stats.qmc)的文档。

## 计算差异

我们来考虑两组点。从下图中可以看出，左边的设计比右边的设计覆盖了更多的空间。这可以用[差异度量](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.qmc.discrepancy.html#scipy.stats.qmc.discrepancy)来量化。差异越小，样本就越均匀。

In [6]:

```
import numpy as np
from scipy.stats import qmc
space_1 = np.array([[1, 3], [2, 6], [3, 2], [4, 5], [5, 1], [6, 4]])
space_2 = np.array([[1, 5], [2, 4], [3, 3], [4, 2], [5, 1], [6, 6]])
l_bounds = [0.5, 0.5]
u_bounds = [6.5, 6.5]
space_1 = qmc.scale(space_1, l_bounds, u_bounds, reverse=True)
space_2 = qmc.scale(space_2, l_bounds, u_bounds, reverse=True)
qmc.discrepancy(space_1)
```

Out[6]:

```
0.008142039609053464
```

In [7]:

```
qmc.discrepancy(space_2)
```

Out[7]:

```
0.010456854423869011
```

![Image Name](https://cdn.kesci.com/upload/image/qy2w7inza5.png?imageView2/0/w/960/h/960)

## 使用QMC引擎

有几个QMC采样器/引擎已经实现。这里我们看一下两个最常用的QMC方法：[Sobol](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.qmc.Sobol.html#scipy.stats.qmc.Sobol)和[Halton](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.qmc.Halton.html#scipy.stats.qmc.Halton)序列。

In [9]:

```
from scipy.stats import qmc
import numpy as np

import matplotlib.pyplot as plt


rng = np.random.default_rng()

n_sample = 256
dim = 2

sample = {}

# Sobol'
engine = qmc.Sobol(d=dim, seed=rng)
sample["Sobol'"] = engine.random(n_sample)

# Halton
engine = qmc.Halton(d=dim, seed=rng)
sample["Halton"] = engine.random(n_sample)

fig, axs = plt.subplots(1, 2, figsize=(8, 4))

for i, kind in enumerate(sample):
    axs[i].scatter(sample[kind][:, 0], sample[kind][:, 1])

    axs[i].set_aspect('equal')
    axs[i].set_xlabel(r'$x_1$')
    axs[i].set_ylabel(r'$x_2$')
    axs[i].set_title(f'{kind}—$C^2 = ${qmc.discrepancy(sample[kind]):.2}')

plt.tight_layout()
plt.show()
```

![img](https://cdn.kesci.com/upload/rt/F0A7E8BF223C4D6B8047DA36CA1F04ED/qy2wb2rjgc.png)

> Warning:
> QMC方法需要特别小心，用户必须阅读文件以避免常见的陷阱。例如，"Sobol "要求点的数量是2的幂，另外，, thinning, burning 或其他点的选择会破坏序列的属性，导致一组点不会比MC更好。

QMC引擎是有状态意识的。意味着你可以继续这个序列，跳过一些点，或者重置它。让我们从Halton取5个点。然后再要求第二组5个点。
为了缓解这个问题，已经设计了QMC方法。它们是确定性的，对空间有很好的覆盖，其中一些可以继续下去，并保持良好的特性。与MC方法的主要区别是，这些点不是IID，但它们知道以前的点。因此，有些方法也被称为序列。

In [40]:

```
from scipy.stats import qmc
import numpy
engine = qmc.Halton(d=2,seed=99999)
engine.random(5)
```

Out[40]:

```
array([[0.51935   , 0.43745514],
       [0.26935   , 0.21523292],
       [0.76935   , 0.88189958],
       [0.14435   , 0.54856625],
       [0.64435   , 0.32634403]])
```

In [41]:

```
engine.random(5)
```

Out[41]:

```
array([[0.39435   , 0.99301069],
       [0.89435   , 0.65967736],
       [0.08185   , 0.01770205],
       [0.58185   , 0.68436872],
       [0.33185   , 0.35103538]])
```

现在我们重新设定顺序。要求5个点，就会出现同样的前5个点。

In [42]:

```
engine.reset()
engine.random(5)
```

Out[42]:

```
array([[0.51935   , 0.43745514],
       [0.26935   , 0.21523292],
       [0.76935   , 0.88189958],
       [0.14435   , 0.54856625],
       [0.64435   , 0.32634403]])
```

而在这里，我们推进这个序列，得到同样的第二组5个点。

In [43]:

```
engine.reset()
engine.fast_forward(5)
engine.random(5)
```

Out[43]:

```
array([[0.39435   , 0.99301069],
       [0.89435   , 0.65967736],
       [0.08185   , 0.01770205],
       [0.58185   , 0.68436872],
       [0.33185   , 0.35103538]])
```

> Note:
> 默认情况下，Sobol和Halton都是加扰的。收敛性更好，而且可以防止出现高维的边缘或明显的点的模式。应该没有实际的理由不使用加扰的版本。

## 制作一个QMC引擎，即子类化QMCEngine

要制作你自己的**QMCEngine**，必须定义一些方法。下面是一个包装[numpy.random.Generator](https://numpy.org/devdocs/reference/random/generator.html#numpy.random.Generator)的例子。

In [44]:

```
import numpy as np
from scipy.stats import qmc
class RandomEngine(qmc.QMCEngine):
    def __init__(self, d, seed=None):
        super().__init__(d=d, seed=seed)
        self.rng = np.random.default_rng(self.rng_seed)


    def random(self, n=1):
        self.num_generated += n
        return self.rng.random((n, self.d))


    def reset(self):
        self.rng = np.random.default_rng(self.rng_seed)
        self.num_generated = 0
        return self


    def fast_forward(self, n):
        self.random(n)
        return self
```

然后我们像其他QMC引擎一样使用它。

In [47]:

```
engine = RandomEngine(2,seed=9999)
engine.random(5)
```

Out[47]:

```
array([[0.8387465 , 0.76201399],
       [0.26236274, 0.78888675],
       [0.24366716, 0.57600174],
       [0.55832321, 0.85114412],
       [0.09932578, 0.82642274]])
```

In [48]:

```
engine.reset()
engine.random(5)
```

Out[48]:

```
array([[0.8387465 , 0.76201399],
       [0.26236274, 0.78888675],
       [0.24366716, 0.57600174],
       [0.55832321, 0.85114412],
       [0.09932578, 0.82642274]])
```

## 关于使用QMC的指南

- QMC有规则! 请务必阅读文件，否则你可能比MC没有好处。
- 如果你需要**精确**的am个点，请使用Sobol。
- Halton允许对任意数量的点进行采样或跳过。这是以比Sobol'慢的收敛速度为代价的。
- 不要删除序列的第一个点。这将破坏其属性。
- 扰动总是更好的。
- 如果你使用基于LHS的方法，你不能在不失去LHS属性的情况下增加点。(有一些方法可以做到这一点，但这并没有实现。)