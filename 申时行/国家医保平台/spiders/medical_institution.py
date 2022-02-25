# -*- coding: utf-8 -*-
"""
Created on 2022-02-10 14:10:14
---------
@summary:
---------
@author: Administrator
"""

import feapder
import execjs
from items import medical_item
import pandas as pd

with open('demo.js', 'r', encoding='utf-8') as f:
    js_str = f.read()
ctx = execjs.compile(js_str)

csv_file = '../medical.csv'
df = pd.DataFrame(columns=['机构编号', '医疗机构名称', '医疗机构等级', '医疗机构类型', '医疗机构地址'])
df.to_csv(csv_file, line_terminator="\n", index=False, mode='a', encoding='utf8')


class MedicalInstitution(feapder.Spider):

    def start_requests(self):
        url = 'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/fixed/queryFixedHospital'
        for pageNum in range(1, 297 + 1):
            result = ctx.call('get_from_data', pageNum)
            data = result['data']
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                              ' Chrome/94.0.4606.81 Safari/537.36',
                "Accept": "application/json",
                "Content-Type": "application/json",
                "channel": "web",
            }
            hd = result['headers']
            headers['x-tif-signature'] = hd['x-tif-signature']
            headers['x-tif-timestamp'] = str(hd['x-tif-timestamp'])
            headers['x-tif-nonce'] = hd['x-tif-nonce']
            headers['contentType'] = hd['contentType']
            yield feapder.Request(url=url, headers=headers, data=data)

    def parse(self, request, response):
        encData = response.json['data']['data']['encData']
        fixedHospital_result = ctx.call('get_result', encData)
        result_list = fixedHospital_result['list']
        for result in result_list:
            item = medical_item.MedicalItem()
            item.id = result.get('medinsCode')
            item.address = result.get('addr')
            item.type = result.get('medinsTypeName')
            item.level = result.get('medinsLvName')
            item.name = result.get('medinsName')
            # self.save_mysql(item)
            self.save_csv(item)

    def save_mysql(self, item):
        """
        写入mysql
        """
        yield item

    def save_csv(self, item):
        """
        写入csv
        """
        write_clo = [item.id, item.name, item.level, item.type, item.address]
        df = pd.DataFrame(columns=(write_clo))
        df.to_csv(csv_file, line_terminator="\n", index=False, mode='a', encoding='utf8')


if __name__ == "__main__":
    MedicalInstitution(redis_key="feapder:medical_test", thread_count=10).start()
