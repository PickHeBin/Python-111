# encoding: utf-8
"""
@author: 夏洛
@QQ: 1972386194
@site: https://www.tulingxueyuan.cn/
@file: 12306余票查询.py
@time: 2021/5/8 20:18
"""
import re,  datetime, time, json
from prettytable import PrettyTable
from colorama import init, Fore
import urllib.parse
init(autoreset=False)
import re,requests
requests.packages.urllib3.disable_warnings()

url = "https://kyfw.12306.cn/otn/resources/js/framework/station_name.js?station_version=1.8971"
response = requests.get(url,verify=False)
#将车站的名字和编码进行提取
chezhan = re.findall(r'([\u4e00-\u9fa5]+)\|([A-Z]+)', response.text)

chezhan_code = dict(chezhan)
chezhan_names = dict(zip(chezhan_code.values(),chezhan_code.keys()))

class Colored(object):

    def yeah(self, s):
        return Fore.LIGHTCYAN_EX + s + Fore.RESET

    def green(self, s):
        return Fore.LIGHTGREEN_EX + s + Fore.RESET

    def yellow(self, s):
        return Fore.LIGHTYELLOW_EX + s + Fore.RESET

    def white(self, s):
        return Fore.LIGHTWHITE_EX + s + Fore.RESET

    def blue(self, s):
        return Fore.LIGHTBLUE_EX + s + Fore.RESET


def showTicket(html):
    try:
        html = json.loads(html)
    except Exception as e:
        print(e)
        exit()
    table = PrettyTable(
        [" 车次 ", "出发车站", "到达车站", "出发时间", "到达时间", " 历时 ", "商务座", " 一等座", "二等座", "高级软卧", "软卧", "动卧", "硬卧", "软座", "硬座",
         "无座", "其他", "备注"])
    for i in html['data']['result']:
        name = [
            "station_train_code",
            "from_station_name",
            "to_station_name",
            "start_time",
            "arrive_time",
            "lishi",
            "swz_num",
            "zy_num",
            "ze_num",
            "dw_num",
            "gr_num",
            "rw_num",
            "yw_num",
            "rz_num",
            "yz_num",
            "wz_num",
            "qt_num",
            "note_num"
        ]
        data = {
            "station_train_code": '',
            "from_station_name": '',
            "to_station_name": '',
            "start_time": '',
            "arrive_time": '',
            "lishi": '',
            "swz_num": '',
            "zy_num": '',
            "ze_num": '',
            "dw_num": '',
            "gr_num": '',
            "rw_num": '',
            "yw_num": '',
            "rz_num": '',
            "yz_num": '',
            "wz_num": '',
            "qt_num": '',
            "note_num": ''
        }
        # 将各项信息提取并赋值
        item = i.split('|')  # 使用“|”进行分割
        # print(item)
        data["station_train_code"] = item[3]  # 获取车次信息，在3号位置
        data["from_station_name"] = item[6]  # 始发站信息在6号位置
        data["to_station_name"] = item[7]  # 终点站信息在7号位置
        data["start_time"] = item[8]  # 出发时间在8号位置
        data["arrive_time"] = item[9]  # 抵达时间在9号位置
        data["lishi"] = item[10]  # 经历时间在10号位置
        data["swz_num"] = item[32] or item[25]  # 特别注意，商务座在32或25位置
        data["zy_num"] = item[31]  # 一等座信息在31号位置
        data["ze_num"] = item[30]  # 二等座信息在30号位置
        data["gr_num"] = item[21]  # 高级软卧信息在21号位置
        data["rw_num"] = item[23]  # 软卧信息在23号位置   要数据
        data["dw_num"] = item[27]  # 动卧信息在27号位置   无数据
        # print(item[23])  #  无数据
        # print(item[27])   # 有数据  软卧的数据
        data["yw_num"] = item[28]  # 硬卧信息在28号位置
        data["rz_num"] = item[24]  # 软座信息在24号位置
        data["yz_num"] = item[29]  # 硬座信息在29号位置
        data["wz_num"] = item[26]  # 无座信息在26号位置
        data["qt_num"] = item[22]  # 其他信息在22号位置
        data["note_num"] = item[1]  # 备注信息在1号位置
        color = Colored()
        data["note_num"] = color.white(item[1])
        # 如果没有信息，那么就用“-”代替
        for pos in name:
            if data[pos] == "":
                data[pos] = "-"
        tickets = []
        cont = []
        cont.append(data)
        for x in cont:
            tmp = []
            for y in name:
                if y == "from_station_name":
                    s = color.green(chezhan_names[data["from_station_name"]])
                    tmp.append(s)
                elif y == "to_station_name":
                    s = color.yeah(chezhan_names[data["to_station_name"]])
                    tmp.append(s)
                elif y == "start_time":
                    s = color.green(data["start_time"])
                    tmp.append(s)
                elif y == "arrive_time":
                    s = color.yeah(data["arrive_time"])
                    tmp.append(s)
                elif y == "station_train_code":
                    s = color.yellow(data["station_train_code"])
                    tmp.append(s)
                else:
                    tmp.append(data[y])
            tickets.append(tmp)
        for ticket in tickets:
            table.add_row(ticket)
    print(table)

def input_params():
    today = datetime.datetime.today()
    month = today.month
    day = today.day
    months = input("请输入出行月份1-12：\n")
    if not re.match('^([1-9]|10|11|12)$', months):
        print("I'm afraid you're a fool")
        exit()
    if int(months) < month:
        print('没有时间观念吗？')
        exit()

    days = input("请输入出行日期1-31：\n")
    if not re.match('^([1-9]|[1-2]\d|3[0-1])$', days):
        print("I'm afraid you're a fool")
        exit()
    if int(days) < day:
        print('没有时间观念吗？')
        exit()

    temp = datetime.date(2021, int(months), int(days))
    times = temp.strftime("%Y-%m-%d")
    from_station = input("请输入起始站点：\n")
    to_station = input("请输入目的站点：\n")
    return times,from_station,to_station

def main():
    # date = input("请输入出发时间2021-05-20格式：\n")
    a1,a2,a3  = input_params()
    start = chezhan_code.get(a2)
    end = chezhan_code.get(a3)
    if not start:
        print('能正常输入吗？')
        input_params()
    if not end:
        print('能正常输入吗？')
        input_params()
    url1 = f'https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date={a1}&leftTicketDTO.from_station={start}&leftTicketDTO.to_station={end}&purpose_codes=ADULT'

    # url = "https://kyfw.12306.cn/otn/leftTicket/queryZ?"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5702.400 QQBrowser/10.2.1893.400",
        'Cookie': 'RAIL_DEVICEID=tCmVAeZAyKZbO7fuMtPPoAOs9KQ3pnw5ymtAAJdl3weX6Ae0-NFVfMU25gTiZ6MerYFV7QomFRc986KyIWuYuIP674xVpu46Ql3865_7o1ffAMO7eXHZLoWcagYe8iR4z1YhD4xrRXyllW9R3T5bObxhQ-Moq9H0; RAIL_EXPIRATION=1624104449018; BIGipServerpool_index=804258314.43286.0000; route=9036359bb8a8a461c164a04f8f50b252; BIGipServerotn=1290797578.50210.0000',
    }

    # url = f'https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs={urllib.parse.quote(from_station)},CSQ&ts={urllib.parse.quote(to_station)},BJP&date=2021-05-08&flag=N,N,Y'
# print(url) 已经检查过生成的URL是正确的
# request请求获取主页
    r = requests.get(url1, headers=headers ,verify=False)
    headers.update({'Cookie':r.cookies})
    r.raise_for_status()  # 如果发送了一个错误的请求，会抛出异常
    r.encoding = r.apparent_encoding
    # print(r.text)
    showTicket(r.text)
# print(r.text)
if __name__ == '__main__':
    a = """
                 __  ___       _
                 \ \/ (_) __ _| |   _   _  ___
                  \  /| |/ _` | |  | | | |/ _ |
                  /  \| | (_| | |__| |_| | (_) |
                 /_/\_\_|\__,_|_____\__,_|\___/
          功能列表：   
          1. 查询                                                                             
          2. 停止
          
             """
    print(a)
    while True:
        choice_function = input('请选择:')
        if choice_function == '1':
            main()
        else:
            break

"""
https://kyfw.12306.cn/otn/leftTicket/queryZ?leftTicketDTO.train_date=2021-05-09&leftTicketDTO.from_station=CDW&leftTicketDTO.to_station=SZQ&purpose_codes=ADULT

https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E9%95%BF%E6%B2%99,CSQ&ts=%E5%8C%97%E4%BA%AC,BJP&date=2021-05-08&flag=N,N,Y

https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=2021-05-12&leftTicketDTO.from_station=NJH&leftTicketDTO.to_station=BJP&purpose_codes=ADULT

"""


