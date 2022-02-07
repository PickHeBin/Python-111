#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : Helaoshi
# @Time     : 2021/12/18 13:17
# @File     : baostcok123.py
# @Project  : pythonProject

import baostock as bs
import pandas as pd

#### 登陆系统 ####
lg = bs.login()
rs = bs.query_history_k_data("000001.SH",
                             "date,code,open,high,low,close,preclose,volume,amount,adjustflag,turn,tradestatus,pctChg,peTTM,pbMRQ,psTTM,pcfNcfTTM,isST",
                             start_date='2010-01-01', end_date='2021-10-31', frequency="d", adjustflag="3")
data_list = []
while (rs.error_code == '0') & rs.next():  # 获取一条记录，将记录合并在一起
    data_list.append(rs.get_row_data())
result = pd.DataFrame(data_list, columns=rs.fields)
print(result)
