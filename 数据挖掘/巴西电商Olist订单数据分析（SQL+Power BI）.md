## 一、数据信息[¶](#一、数据信息)

**来源**：[kaggle](https://www.kaggle.com/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv)
**说明**：本数据集为巴西电商Olist的交易订单数据，提供了该平台16年到18年近10万条订单交易记录，数据集包含9张数据表。
**字段**：本次分析只用到其中5张表

- olist_orders_dataset：包含订单id，顾客id，订单状态，购买时间等信息  
- olist_order_items_dataset：包含订单id，物品数量，商品id，商品价格和运费等信息  
- olist_order_reviews_dataset：包含评论id，订单id，评价分数等信息  
- olist_products_dataset：包含商品id，商品品类等商品信息  
- product_category_name_translation：包含商品品类和商品品类的英文翻译  

## 二、结论先行：[¶](#二、结论先行：)

**1.平台运营建议**：综合订单数、MAU和GMV指标来看，平台遇到发展瓶颈，典型表现为用户平均收入水平维持，指标增速放缓，甚至出现回落的趋势。

- 针对用户规模，需评估国内市场流量是否见顶进入存量竞争阶段，如果是，可以考虑发展海外市场，同时做好用户运营，减少用户流失；如果否，则可能与平台自身运营不佳有关或竞争对手抢占市场导致，一方面需要对内调整运营策略，优化用户体验，减少流失，对外及时跟进竞争对手动态，持续拓展站外流量。  
- 针对成交额，在保证用户规模健康增长的同时，一方面有效利用10-22点的用户活跃时段进行运营，提高各环节的转化率，另一方面做好用户运营，培养优质用户，提高用户平均收入。  

**2.用户运营建议**：结合用户共同特点和商品喜好采取运营措施。

- 平台用户的消费次数都较少，有较大的提升空间，对于已经有消费行为的老用户进行针对性消息推送并提供消费返还抵用券等优惠，降低二次消费门槛，提升复购率。同时可以推出vip会员服务，为用户提供消费折扣，引导用户长期消费，增强粘性。  
- 健美产品、电脑配件、运动休闲等品类是大众热门品类，适合结合特定节假日做促销优惠，吸引用户关注，增加曝光量，而手表和家居用品则属于小众热门商品，对特定类型用户来说更受欢迎，适合选择合适的用户群体进行推荐。  

## 三、分析框架：[¶](#三、分析框架：)

1.流量指标：活跃用户数（DAU、MAU、时段）
2.运营指标：GMV（季度、月）、ARPU（季度、月）、订单数（天、月、时段）
3.RFM用户价值分层：各层次用户品类（热门指数=金额+评价分数）

## 四、数据清洗[¶](#四、数据清洗)

In [ ]:

```
# 原数据表名过长，为方便后续处理对表重新命名
# 重命名表
RENAME TABLE olist_customers_dataset to customer;
RENAME TABLE olist_geolocation_dataset to geo;
RENAME TABLE olist_orders_dataset to orders;
RENAME TABLE olist_order_items_dataset to item;
RENAME TABLE olist_order_payments_dataset to payment;
RENAME TABLE olist_order_reviews_dataset to review;
RENAME TABLE olist_products_dataset to product ;
RENAME TABLE olist_sellers_dataset to seller;
RENAME TABLE product_category_name_translation to category;
```

In [ ]:

```
# 空值处理
# 从kaggle数据源提供的各表各列空值情况可知，review表的空值集中在review_comment_title列和review_comment_message列
# 而orders表的空值集中在order_approved_at列、order_delivered_carrier_date列和order_delivered_customer_date列
# 用0替换这几列空值数据
UPDATE review
SET review_comment_title=0
where review_comment_title is null;

UPDATE review
SET review_comment_message=0
WHERE review_comment_message is NULL;

UPDATE orders
SET order_approved_at=0
where order_approved_at is NULL;

UPDATE orders
SET order_delivered_carrier_date= 0
where order_delivered_carrier_date is NULL;

UPDATE orders
SET order_delivered_customer_date=0
where order_delivered_customer_date is NULL;
```

In [ ]:

```
# 检查重复值
# orders表
SELECT order_id from orders
group by order_id
HAVING count(*)>1;

# item表
SELECT order_id from item
GROUP BY order_id,order_item_id
HAVING count(*)>1;

# review表
SELECT review_id,order_id
from review
group by review_id,order_id
HAVING count(*)>1;

# product表
SELECT product_id from product
GROUP BY product_id
HAVING count(*)>1;

# category表
SELECT product_category_name_english FROM category
GROUp BY product_category_name_english
having COUNT(*)>1;

# 本次分析所用到的表均没有重复值
```

In [ ]:

```
# 提取订单时间数据
CREATE TABLE order_time AS
SELECT order_id,customer_id,
year(order_purchase_timestamp) as y,
quarter(order_purchase_timestamp) as q,
month(order_purchase_timestamp) as m,
date(order_purchase_timestamp) as d,
hour(order_purchase_timestamp) as h 
from orders
where order_purchase_timestamp not like '2016-09-%' # 过滤数据量异常的月份
and order_purchase_timestamp not like '2016-12-%'
and order_purchase_timestamp not like '2018-09-%' 
and order_purchase_timestamp not like '2018-10-%' 
```

In [ ]:

```
# 计算每笔订单金额
CREATE view total_order_value as
select order_id,product_id,seller_id,(price*count(*))+(freight_value*count(*)) as order_value
from item
group by order_id;

# 整合每笔订单的时间和金额，为后面计算GMV等指标做准备
CREATE view order_detail as
select a.order_id,product_id,seller_id,
customer_id,round(order_value,2) as order_value,
y,q,m,d,h 
from total_order_value a 
inner join order_time b 
on a.order_id=b.order_id ;
```

## 五、数据分析[¶](#五、数据分析)

### 1.活跃用户数及订单数分析[¶](#1.活跃用户数及订单数分析)

In [ ]:

```
# 样本数据中，每个用户只有一笔订单记录，订单和用户是一一对应的，分布趋势一致，所以这里订单数和活跃用户数放在一起分析
# 活跃用户数时间分布
# 日活跃用户数
select d 日期,count(DISTINCT customer_id) DAU from order_detail
group by d
order by d;

#月活跃用户数
select y 年份,m 月份,count(DISTINCT customer_id) MAU from order_detail
group by y,m
order by y,m;

# 各时段活跃用户数
select h 时,count(DISTINCT customer_id) 时段活跃用户数 from order_detail
group by h
order by h;

# 订单数时间分布
# 每日订单数
SELECT d 日期,count(order_id) 订单数 from order_detail
GROUP BY d;

# 每月订单数
SELECT y 年份,m 月份, count(order_id) 订单数 from order_detail
GROUP BY y,m
order by y,m;

# 各时段订单数
SELECT h 时, count(order_id) 订单数 from order_detail
where h is not NULL
group by h
order by h;
```

![Image Name](https://cdn.kesci.com/upload/image/qlits5sryf.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qlitsmsarj.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qlitsu7x4a.png?imageView2/0/w/960/h/960)

观察结果：
1）活跃用户数和订单数持续稳步上升，并在17年11月下旬出现明显峰值，由此带动当月MAU和订单数达到两年以来的最高值，18年后月活跃用户数增长趋缓。
2）上午10点到晚上22点的用户数和订单数明显高于平均水平，是用户活跃时段，其中12点和18点推测由于饭点休息时间导致活跃度略有下滑。22点后用户数和订单数明显下降，到次日5点后开始回升，直到9点后逐渐恢复到正常活跃水平。

### 2.GMV分析[¶](#2.GMV分析)

In [ ]:

```
# 季度GMV
select y 年份,q 季度,sum(order_value) 季度GMV from order_detail
group by y,q
order by y,q;

# 月GMV
select y 年份,m 月份,sum(order_value) 月GMV from order_detail
group by y,m
order by y,m;
```

![Image Name](https://cdn.kesci.com/upload/image/qliujx671o.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qliuk5oatn.png?imageView2/0/w/960/h/960)

观察结果：
1）16--17年间，平台GMV快速增长，平均季度增幅近50%，但在进入18年后增速放缓，甚至在18年Q3出现负增长。
2）细化到各月情况来看，平台的快速发展期其实是在16年的Q4和17年的Q1，随后增速整体趋缓，仅靠个别月份的小峰值维持整体增速。
3）18年Q3的GMV出现负增长的原因一方面是缺少18年9月的数据，但同时也可以看到18年7-8月的GMV整体是不及4-6月的水平的，一定程度上可以说明出现了负增长的苗头。

### 3.ARPU分析[¶](#3.ARPU分析)

In [ ]:

```
# 各季度ARPU值=GMV/季度活跃用户数
select y 年份,q 季度, round((sum(order_value)/count(DISTINCT customer_id)),2) 季度ARPU from order_detail
group by y,q
order by y,q;

# 各月ARPU值=GMV/月活跃用户数
select y 年份,m 月份,round((sum(order_value)/count(DISTINCT customer_id)),2) 月ARPU from order_detail
group by y,m
order by y,m;

# 日ARPU
select d, round((sum(order_value)/count(DISTINCT customer_id)),2) ARPU from order_detail
group by d
order by d;
```

![Image Name](https://cdn.kesci.com/upload/image/qlivdqtqxf.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qlivf1c5o.png?imageView2/0/w/960/h/960)

观察结果：
1）用户平均收入在16-17年间有明显提升后，一直维持在一定水平上波动，没有进一步提升，并在18年Q3开始下滑。
2）18年Q3的ARPU下滑原因跟GMV类似，跟数据缺失有一定关系，但ARPU值无法突破的问题也值得平台重视。

### 4.RFM模型用户分层[¶](#4.RFM模型用户分层)

In [ ]:

```
# RFM用户分群
# 查看所有用户的消费次数
SELECT customer_id, count(*) from order_detail
GROUP BY customer_id
HAVING count(*)>1;
# 由于所有用户消费次数都只有一次，故Frequency默认为低

# 构造R值
CREATE VIEW Recency AS
SELECT customer_id,(CASE WHEN 
DATEDIFF(d,(SELECT MAX(d) FROM order_detail))>(SELECT AVG(DATEDIFF(d,(SELECT max(d) FROM order_detail))) FROM order_detail)
THEN 1 ELSE 0 END) AS R
FROM order_detail;

# 构造M值
CREATE VIEW Monetary AS
SELECT customer_id,order_value>(SELECT AVG(order_value) FROM order_detail) as M
FROM order_detail;

# 构造RFM分层
CREATE VIEW RFM AS
SELECT Recency.customer_id, (CASE 
WHEN R=1 AND M=1 THEN '重要发展用户'
WHEN R=0 AND M=1 THEN '重要挽留用户'
WHEN R=1 AND M=0 THEN '一般发展用户'
WHEN R=0 AND M=0 THEN '一般挽留用户'
ELSE '其他' END) AS 用户类型
FROM Recency INNER JOIN Monetary ON Recency.customer_id=Monetary.customer_id;
```

In [ ]:

```
 #3.2 各类型用户的热门商品类型
# 热门指数=0.7*消费金额+0.3*商品评分*10000（这里乘10000是为了平衡消费金额和评分之间的数量级差距）

# 查看各类型用户数量
SELECT 用户类型,count(*) 数量 from rfm
GROUP BY 用户类型
ORDER BY 用户类型;

# 重要发展用户的热门商品品类
SELECT e.product_category_name_english 商品品类,SUM(a.order_value) 消费金额,ROUND(AVG(c.review_score),2) 商品评分,
(0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) 热门指数,
rank() over(ORDER BY (0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) DESC) 热门排名
FROM order_detail a 
INNER JOIN (SELECT customer_id from rfm WHERE 用户类型='重要发展用户' ) as b ON a.customer_id=b.customer_id
LEFT JOIN review c ON a.order_id=c.order_id
LEFT JOIN product d ON a.product_id=d.product_id
LEFT JOIN category e ON d.product_category_name=e.product_category_name
GROUP BY e.product_category_name_english;


# 重要挽留用户的热门商品品类
SELECT e.product_category_name_english 商品品类,SUM(a.order_value) 消费金额,ROUND(AVG(c.review_score),2) 商品评分,
(0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) 热门指数,
rank() over(ORDER BY (0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) DESC) 热门排名
FROM order_detail a 
INNER JOIN (SELECT customer_id from rfm WHERE 用户类型='重要挽留用户' ) as b ON a.customer_id=b.customer_id
LEFT JOIN review c ON a.order_id=c.order_id
LEFT JOIN product d ON a.product_id=d.product_id
LEFT JOIN category e ON d.product_category_name=e.product_category_name
GROUP BY e.product_category_name_english;


# 一般发展用户的热门商品品类
SELECT e.product_category_name_english 商品品类,SUM(a.order_value) 消费金额,ROUND(AVG(c.review_score),2) 商品评分,
(0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) 热门指数,
rank() over(ORDER BY (0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) DESC) 热门排名
FROM order_detail a 
INNER JOIN (SELECT customer_id from rfm WHERE 用户类型='一般发展用户' ) as b ON a.customer_id=b.customer_id
LEFT JOIN review c ON a.order_id=c.order_id
LEFT JOIN product d ON a.product_id=d.product_id
LEFT JOIN category e ON d.product_category_name=e.product_category_name
GROUP BY e.product_category_name_english;


# 一般挽留用户的热门商品品类
SELECT e.product_category_name_english 商品品类,SUM(a.order_value) 消费金额,ROUND(AVG(c.review_score),2) 商品评分,
(0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) 热门指数,
rank() over(ORDER BY (0.7*SUM(a.order_value)+0.3*10000*ROUND(AVG(c.review_score),7)) DESC) 热门排名
FROM order_detail a 
INNER JOIN (SELECT customer_id from rfm WHERE 用户类型='一般挽留用户' ) as b ON a.customer_id=b.customer_id
LEFT JOIN review c ON a.order_id=c.order_id
LEFT JOIN product d ON a.product_id=d.product_id
LEFT JOIN category e ON d.product_category_name=e.product_category_name
GROUP BY e.product_category_name_english;
```

![Image Name](https://cdn.kesci.com/upload/image/qliwj852bi.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qliwjlnwb9.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qliwjx7955.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qliwk730xb.png?imageView2/0/w/960/h/960)

![Image Name](https://cdn.kesci.com/upload/image/qliwkog7w6.png?imageView2/0/w/960/h/960)

观察结果：
1）整体来看，重要发展用户和重要挽留用户的比例不到30%，明显低于一般发展用户和一般挽留用户的70%比例，而重要和一般用户内部的数量则相对均衡。
2）各类型用户的热门商品品类中，健美产品、电脑配件、运动休闲等品类均出现在热门排名前列，说明这类商品是大众热门品类，适合对各类用户做推广和促销，而手表和家居用品则属于小众热门商品，对特定类型用户来说更受欢迎，适合选择合适的用户群体进行推荐。