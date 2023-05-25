# encoding: utf-8

import hashlib
import hmac
import time

from myScrawl.scrawlbase import ScrawlBase
from myScrawl.dbbase import MyMongo
class Qcc(ScrawlBase):

    def __init__(self):
        super().__init__()
        self.url = "https://www.qcc.com/api/datalist/touzilist"
        self.uri = "/api/datalist/touzilist"
        self.client = MyMongo().getConn()

    def run(self):
        params = {
            "keyNo": "9cce0780ab7644008b73bc2120479d31",
            "pageIndex": 3
        }

        for i in range(1, 6):
            params["pageIndex"] = i
            # 获取自定义headers
            number_header = self.getNumberHeader(params)

            headers = {
                "referer": "https://www.qcc.com/firm/9cce0780ab7644008b73bc2120479d31.html",
                "x-pid": "dc3bd09b70e49022801b40db89285c24",
                "cookie": "QCCSESSID=1efd48e5b6e4797dbd21a7664e; qcc_did=8aabe8f7-4cba-4ce2-ba01-53c797b0f09e; UM_distinctid=1828576723b1075-005d87537b17ce-1d525635-13c680-1828576723cc50; CNZZDATA1254842228=858961966-1660093816-|1660096265"
            }
            headers.update(number_header)
            print("请求的header", headers)
            res = self.getData(url=self.url, headers=headers, params=params)
            if res:
                json_data = res.json()
                list = json_data.get("data")
                self.parse(list)

            time.sleep(1)


    def getNumberHeader(self, params):
        s = (self.uri + "?" + self.getQueryString(params)).lower()
        s2 = s + s

        k_msg = s + "{}"
        headerK = self.getHeaderK(self.encodeS(s2), k_msg)
        # print("生成的header key：", headerK)

        v_msg = s + "pathString" + "{}" + "6827a6649ad688dc2f99ff318e5d4b74"
        headerV = self.getHeaderV(self.encodeS(s2), v_msg)

        return {headerK: headerV}


    def encodeS(self, to_encode_s):
        scode = {
            "n": 20,
            "codes": {
                "0": "W",
                "1": "l",
                "2": "k",
                "3": "B",
                "4": "Q",
                "5": "g",
                "6": "f",
                "7": "i",
                "8": "i",
                "9": "r",
                "10": "v",
                "11": "6",
                "12": "A",
                "13": "K",
                "14": "N",
                "15": "k",
                "16": "4",
                "17": "L",
                "18": "1",
                "19": "8"
            }
        }

        encode_s=""
        for i in to_encode_s:
            n = ord(i) % scode.get("n")
            encode_s += scode.get("codes").get(str(n))

        return encode_s

    def getHeaderK(self, key, msg):
        # print("key:", key)
        # print("msg:", msg)
        hamcValue = hmac.new(bytes(key, encoding='utf-8'), bytes(msg, encoding='utf-8'), hashlib.sha512).hexdigest()
        return hamcValue[8:28]

    def getHeaderV(self, key, msg):
        # print("key:", key)
        # print("msg:", msg)
        hamcValue = hmac.new(bytes(key, encoding='utf-8'), bytes(msg, encoding='utf-8'), hashlib.sha512).hexdigest()
        return hamcValue

    def getQueryString(self, params):
        items = []
        for k, v in params.items():
            items.append("%s=%s" % (k, v))

        return "&".join(items)

    def parse(self, list):
        items=[]
        for i in list:
            # 存入mongo
            item = {
                "Name": i.get("Name"),
                "OperName" : i.get("OperName"),
                "RegistCapi" : i.get("RegistCapi"),
                "ShouldCapi" : i.get("ShouldCapi")
            }
            items.append(item)
            
        self.save(items)

    def save(self, items):
        self.client["tl"]["qcc"].insert_many(items)


if __name__ == '__main__':
    Qcc().run()