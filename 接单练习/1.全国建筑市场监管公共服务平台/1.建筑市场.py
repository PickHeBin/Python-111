# encoding: utf-8
import time

import execjs
import json

from myScrawl.scrawlbase import ScrawlBase
from myScrawl.dbbase import MySqlDB

class JZ(ScrawlBase):

    def __init__(self):
        super().__init__()
        self.baseUrl = "http://jzsc.mohurd.gov.cn/api/webApi/dataservice/query/comp/list"
        self.conn = MySqlDB(user="root", pwd='root123456', dbName="spiders").getConn()
        with open("jz.js", 'r', encoding='utf-8') as f:
            self.js_code = execjs.compile(f.read())

    def run(self):
        params = {
            "pg": 0,
            "pgsz": 15,
            "total": 450
        }

        for i in range(30):
            params["pg"] = i
            print("开始请求第%s页数据" % i)
            res = self.getData(url=self.baseUrl, params=params)
            if res:
                self.parse(res)
            time.sleep(1)

    def parse(self, res):
        t = res.text
        parse_data = self.js_code.call("aesDecrypt", t)
        # 拿到数据列表
        list = json.loads(parse_data).get("data").get("list")
        for item in list:
            self.save(item)


    def save(self, item):
        cursor = self.conn.cursor()
        try:
            qy_name = item.get("QY_NAME")
            qy_fr_name = item.get("QY_FR_NAME")
            qy_region_name = item.get("QY_REGION_NAME")
            sql = "insert into jz_qy(qy_name, qy_fr_name, qy_region_name) values (%s, %s, %s)"
            cursor.execute(sql, (qy_name, qy_fr_name, qy_region_name))
            self.conn.commit()
        except Exception as e:
            print(e)
            self.conn.rollback()


if __name__ == '__main__':
    JZ().run()