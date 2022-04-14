import re
import time, random
import requests
import os
from os.path import exists

"""
下载一些上班需要的资料，网站不让复制，部分图片也没法复制，因此直接下载网站上的图片

申请图片的时候发现sid是加密的，用js调试发现要从readerConfig的属性里面拿，但是这个readerConfig来源有点迷，试着打开网页源代码，居然发现了
1、需要的文档url='https://www.docin.com/p-146561281.html?toImg=1'
2、在网页源代码中可以寻找到 var readerConfig = {内容}，提取出这个 readerConfig内容
3、allPage = readerConfig['allPage']
4、productId = readerConfig['productId']
5、sid = readerConfig['flash_param_hzq']


"""


def get_readerconfig(url):
    list = []
    response = requests.get(url).text
    # print(response)
    title = re.findall('<title>(.*?) - 豆丁网</title>', response, re.S)[0]
    readerconfig = re.findall('var readerConfig = (.*?);', response, re.S)[0]
    # print(readerconfig)
    allpage = re.findall('allPage:(\d+),', readerconfig, re.S)[0]
    productId = re.findall('productId:(\d+),', readerconfig, re.S)[0]
    flash_param_hzq = re.findall('flash_param_hzq:"(.*?)",', readerconfig, re.S)[0]
    # print(allpage, productId, flash_param_hzq)
    list.append(allpage)
    list.append(productId)
    list.append(flash_param_hzq)
    list.append(title)
    return list


list = get_readerconfig('https://www.docin.com/p-1702179727.html?toImg=1')
print(list)

headers = {
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "image",
    "Referer": "https://www.docin.com/p-532707405.html?toImg=1",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
cookies = {
    "docin_session_id": "d7519c26-2d7b-44e5-b70c-e4735f01a936",
    "jumpIn": "400",
    "cookie_id": "C9C81C2317500001341D46F0114E4910",
    "time_id": "2022411223755",
    "partner_tips": "1",
    "_ga": "GA1.2.555196185.1649687877",
    "mobilefirsttip": "tip",
    "saveFinProductToCookieValue": "532707405",
    "s_from": "baidu",
    "uaType": "chrome",
    "_gid": "GA1.2.323213662.1649886996",
    "login_email": "txqq_3cc107584b",
    "user_password": "Znad03J0erzjDfxrSbbu6Wxb7kG8u0zHverJ2yaXcAf0bCykbfv6fIr9OEq^%^2BABf0H_Tf^%^2FEg1xSzAfa1IDA1^%^2Fb5VMZvi4IvUUA^%^2BOblYRCKVmYg3T39E2J59ZQyTC1c3MyU4Newos7EBiuk9Q^%^0A893RC1V7N^%^2BZ2J2YdK5^%^2Bg",
    "lastLoginType": "qq",
    "netfunction": "^\\^/app/my/bookshelf/saveFolder.do^^",
    "downloadClickId": "-1",
    "remindClickId": "-1",
    "booksaveClickId": "-1",
    "payReadClickId": "-1",
    "payReadClickId_v2": "-1",
    "partnerLogin": "-1",
    "vip_alert_adv": "-1",
    "can_copy_alert": "-1",
    "showFeekClickId": "-1",
    "showShareClickId": "-1"
}
url = "https://docimg1.docin.com/docinpic.jsp"

for pageno in range(1, int(list[0]) + 1):
    time.sleep(random.randint(1, 4))   # 第一次用固定时间4s，被服务器拒绝了。估计是被检测了
    params = {
        "file": list[1],
        "width": "942",
        "sid": list[2],
        "pageno": pageno,
        "pcimg": "1"
    }
    print(params)
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    # print(response.text)
    # print(response)
    path = 'C:/Users/Administrator/Desktop/西门子' + os.sep + list[3]
    if not exists(path):
        os.mkdir(path)
    filename = path + os.sep + str(pageno) + '.jpg'
    # print(filename)
    # print(response.content)
    with open(filename, mode='wb') as f:
        f.write(response.content)
        print(f'{filename}下载完成')
