"""
post表单的调用有些麻烦
请求头验证部分和正常的不一样
自调用函数的出口设置
"""
import json
import os
import time
from os.path import exists
import requests

url = 'https://www.kuaishou.com/graphql'

headers = {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': '552',
    'content-type': 'application/json',
    'Host': 'www.kuaishou.com',
    'Origin': 'https://www.kuaishou.com',
    'Referer': 'https://www.kuaishou.com/profile/3xdqpuv5gbqz4ri',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Cookie': 'kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; did=web_1e80519fd59c4e64086e1fe6e9990ca6; client_key=65890b29; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABNAET_RTKXn6xZOgfzH4MgExwd9bVWiBeq3msUBTWoI7QneRGIWBw7HR7g5OCc0zOwQaLwXvzaD0UCOaHMXKdha_aAO7S215w_QQTCPZJY0_VDXJ8yI-F8TuxeoF0txYm3Onn8cOD0rhYpIAobG5UaC_kvzeYahsCT-dUC58hXZO4DUw-nm7eZB21riD4t6Y24Xow6Z2sRNgNH6Ux5wdEaxoSfVpfCMyKId3v5a5yUz8_gvvmIiA7t8qv7jdWvcEo87ROc-qBhlDOA3_3zNykRcgTVYNTYigFMAE; kuaishou.server.web_ph=3a902113b687b41ace83de3e97129ea7b55c; ktrace-context=1|MS43NjQ1ODM2OTgyODY2OTgyLjgzNjI2MzU5LjE2NDg0MjM4ODkyMDkuNDAwNzg2|MS43NjQ1ODM2OTgyODY2OTgyLjcxNTIzNTk2LjE2NDg0MjM4ODkyMDkuNDAwNzg3|0|graphql-server|webservice|false|NA',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
}


def get_infos(pcursor):
    payload = {
        "operationName": "visionProfilePhotoList",
        "variables": {
            "userId": "3xvq56hw377n6ay",
            "pcursor": pcursor,

            "page": "profile"
        },
        "query": "query visionProfilePhotoList($pcursor: String, $userId: String, $page: String, $webPageArea: String) {\n  visionProfilePhotoList(pcursor: $pcursor, userId: $userId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      type\n      author {\n        id\n        name\n        following\n        headerUrl\n        headerUrls {\n          cdn\n          url\n          __typename\n        }\n        __typename\n      }\n      tags {\n        type\n        name\n        __typename\n      }\n      photo {\n        id\n        duration\n        caption\n        likeCount\n        realLikeCount\n        coverUrl\n        coverUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrl\n        liked\n        timestamp\n        expTag\n        animatedCoverUrl\n        stereoType\n        videoRatio\n        profileUserTopPhoto\n        __typename\n      }\n      canAddComment\n      currentPcursor\n      llsid\n      status\n      __typename\n    }\n    hostName\n    pcursor\n    __typename\n  }\n}\n"
    }
    time.sleep(2)
    response = requests.post(url, headers=headers, data=json.dumps(payload)).json()
    # print(response)
    pcursor = response['data']['visionProfilePhotoList']['pcursor']
    print(pcursor)
    feeds = response['data']['visionProfilePhotoList']['feeds']
    for feed in feeds:
        # print(feed)
        filename = '短视频' + os.sep + feed['author']['name'] + feed['photo']['id'] + '.mp4'
        photo_url = feed['photo']['photoUrl']
        # print(photo_url)
        data = requests.get(photo_url).content
        save(data, filename)
    if pcursor != 'no_more':
        get_infos(pcursor)  # 自调用函数，需要设置出口 pcursor == 'no_more' 就是出口
    else:
        print('没有更多内容了')
        return ''


def save(data, filename):
    with open(filename, mode='wb') as f:
        f.write(data)
        print(filename, '下载成功')


if __name__ == '__main__':
    if not exists('短视频'):
        os.mkdir('短视频')
    pcursor = ""
    get_infos(pcursor)
