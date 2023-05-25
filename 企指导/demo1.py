# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @Time     : 2022/8/28 20:42
# @File     : demo1.py
# @Project  : pythonProject

import requests
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import requests,execjs

def decrypt(data):
    html = base64.b64decode(data)
    key = b'xc46VoB49X3PGYAg'
    aes = AES.new(key=key, mode=AES.MODE_ECB)
    info = aes.decrypt(html)
    decrypt_data = unpad(info, 16).decode()
    return decrypt_data


cookies = {
    'wz_uuid': 'X%2Fd8a47e265bea9ec4b224a126e04471d6',
    'sajssdk_2015_cross_new_user': '1',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22182e47f955d61e-02deba1e33452e-72422e2e-2073600-182e47f955e1bd9%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgyZTQ3Zjk1NWQ2MWUtMDJkZWJhMWUzMzQ1MmUtNzI0MjJlMmUtMjA3MzYwMC0xODJlNDdmOTU1ZTFiZDkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22182e47f955b186b-00d27d27d27d27d-72422e2e-2073600-182e47f955c16eb%22%7D',
    'sensorsdata2015jssdkchannel': '%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D',
    'Hm_lvt_9ea3e7293b7c088e0d2c88874b63e7dd': '1661690360,1661691139',
    'Hm_lpvt_9ea3e7293b7c088e0d2c88874b63e7dd': '1661692140',
    'acw_tc': '784e2cb116616921973875234e2c2a06a9467f67c472e84f981161f152e0c3',
    'smidV2': '20220828210957fc70705a9e86f46d9a60c85f509c1c05008f9d48f36ed38a0',
    '.thumbcache_de0d870e3139ba2368b2e7ea8f11063c': 'qZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg%3D%3D',
    '_bl_uid': 'galw17Izd3wckwmCsqez0942nRv7',
    'Hm_lvt_eee25c1d7326569aba0ef6948ffdad95': '1661692198',
    'patentDetailTechnicalSupportShowTime': 'show',
    'Hm_lpvt_eee25c1d7326569aba0ef6948ffdad95': '1661692471',
    'x-web-ip': '113.246.154.12, 120.78.44.166, 100.121.109.5',
}

headers = {
    'authority': 'patents.qizhidao.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    # Already added when you pass json=
    # 'content-type': 'application/json',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'wz_uuid=X%2Fd8a47e265bea9ec4b224a126e04471d6; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22182e47f955d61e-02deba1e33452e-72422e2e-2073600-182e47f955e1bd9%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgyZTQ3Zjk1NWQ2MWUtMDJkZWJhMWUzMzQ1MmUtNzI0MjJlMmUtMjA3MzYwMC0xODJlNDdmOTU1ZTFiZDkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22182e47f955b186b-00d27d27d27d27d-72422e2e-2073600-182e47f955c16eb%22%7D; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; Hm_lvt_9ea3e7293b7c088e0d2c88874b63e7dd=1661690360,1661691139; Hm_lpvt_9ea3e7293b7c088e0d2c88874b63e7dd=1661692140; acw_tc=784e2cb116616921973875234e2c2a06a9467f67c472e84f981161f152e0c3; smidV2=20220828210957fc70705a9e86f46d9a60c85f509c1c05008f9d48f36ed38a0; .thumbcache_de0d870e3139ba2368b2e7ea8f11063c=qZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg%3D%3D; _bl_uid=galw17Izd3wckwmCsqez0942nRv7; Hm_lvt_eee25c1d7326569aba0ef6948ffdad95=1661692198; patentDetailTechnicalSupportShowTime=show; Hm_lpvt_eee25c1d7326569aba0ef6948ffdad95=1661692471; x-web-ip=113.246.154.12, 120.78.44.166, 100.121.109.5',
    'device-id': 'BqZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg==',
    'eagleeye-pappname': 'fyw9n1jhpf@545ab88155a2a87',
    'eagleeye-sessionid': 'X0l4p7R0d2Ic8wwtp67jhRvzmmOX',
    'eagleeye-traceid': 'cc29843916616926394841028a2a87',
    'origin': 'https://patents.qizhidao.com',
    'referer': 'https://patents.qizhidao.com/search/detail/cf4b5bbb3aa0b628175bb2b4649a00c2?orderColumn=undefined&orderType=undefined&filter=&tab=0&from=simple&businessSource=%E6%9F%A5%E4%B8%93%E5%88%A9-%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E5%88%97%E8%A1%A8-%E6%90%9C%E7%B4%A2%E6%9B%B4%E5%A4%9A&statement=%E5%8D%8E%E4%B8%BA&patentName=%E5%8D%8E%E4%B8%BA%E8%8D%A3%E8%80%807%E4%B8%93%E7%94%A8%E4%BF%9D%E6%8A%A4%E5%A5%97&rightSidebar=false&simpleMode=1&sortType=0&leftTabVal=0&rightTabVal=3',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Microsoft Edge";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sensordeviceid': '182e47f955b186b-00d27d27d27d27d-72422e2e-2073600-182e47f955c16eb',
    'sensorsdistinctid': '182e47f955d61e-02deba1e33452e-72422e2e-2073600-182e47f955e1bd9',
    'signature': 'c9d8eb52fc8ff69adde43f606f817c88.FzonDy',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70',
    'user-agent-web': 'X/d8a47e265bea9ec4b224a126e04471d6',
    'x-web-ip': '113.246.154.12, 120.78.44.166, 100.121.108.229',
}

json_data = {
    'pn': 'cf4b5bbb3aa0b628175bb2b4649a00c2',
    'limit': True,
    'statement': '华为',
    'subWordSwitch': None,
    'simpleVersion': True,
}

response = requests.post('https://patents.qizhidao.com/api/qzd-bff-patent/patent/info/record', cookies=cookies, headers=headers, json=json_data).json()
aa = decrypt(response['data1'])
print(aa)