import pandas as pd
import csv
df2 = pd.DataFrame()
for i in range(6):
    url2 = 'http://vip.stock.finance.sina.com.cn/q/go.php/vComStockHold/kind/jjzc/index.phtml?p={page}'.format(page=i+1)
    df2 = pd.concat([df2,pd.read_html(url2)[0]])
    print('第{page}页抓取完成'.format(page = i + 1))
# df2.to_csv("./新浪财经数据.csv", encoding='utf-8', index=0)
print(df2.head())