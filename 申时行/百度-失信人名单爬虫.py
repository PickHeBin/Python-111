import random
import requests
import json
import time
import pandas as pd
import threading

'''
百度-全国失信被执行人查询名单
https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=95943715_hao_pg&wd=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&oq=%25E8%2580%2581%25E8%25B5%2596&rsv_pq=ecfe18c60011f0ce&rsv_t=6a5abUHHmp%2Fzoatl41a4utSn%2BO%2BUh02Rya3hLGof5jPawKdfIntoYEcuolgm%2B8KzeslYUd3x&rqlang=cn&rsv_enter=1&rsv_dl=ts_4&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&rsv_btype=t&prefixsug=%25E5%2585%25A8%25E5%259B%25BD%25E5%25A4%25B1%25E4%25BF%25A1%25E8%25A2%25AB%25E6%2589%25A7%25E8%25A1%258C%25E4%25BA%25BA%25E6%259F%25A5%25E8%25AF%25A2&rsp=4&inputT=2446&rsv_sug4=2446&rsv_sug=1

https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&pn=10&rn=10&from_mid=1&ie=utf-8&oe=utf-8&format=json&t=1644920955276&cb=jQuery1102009881806639008461_1644920952543&_=1644920952544
https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&pn=20&rn=10&from_mid=1&ie=utf-8&oe=utf-8&format=json&t=1644920969444&cb=jQuery1102009881806639008461_1644920952543&_=1644920952545
https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&pn=60&rn=10&from_mid=1&ie=utf-8&oe=utf-8&format=json&t=1644917821936&cb=jQuery1102013373527887412306_1644917729846&_=1644917729848
'''

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-TW;q=0.5',
    'Connection': 'keep-alive',
    'Host': 'sp1.baidu.com',
    'Referer': 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=95943715_hao_pg&wd=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&oq=%25E8%2580%2581%25E8%25B5%2596&rsv_pq=ecfe18c60011f0ce&rsv_t=6a5abUHHmp%2Fzoatl41a4utSn%2BO%2BUh02Rya3hLGof5jPawKdfIntoYEcuolgm%2B8KzeslYUd3x&rqlang=cn&rsv_enter=1&rsv_dl=ts_4&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&rsv_btype=t&prefixsug=%25E5%2585%25A8%25E5%259B%25BD%25E5%25A4%25B1%25E4%25BF%25A1%25E8%25A2%25AB%25E6%2589%25A7%25E8%25A1%258C%25E4%25BA%25BA%25E6%259F%25A5%25E8%25AF%25A2&rsp=4&inputT=2446&rsv_sug4=2446&rsv_sug=1',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Microsoft Edge";v="98"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36 Edg/98.0.1108.50',
}

mysession = requests.Session()
time0 = time.time()


def get_page(page0):
    global time0, i_count
    time1 = time.time()
    url = f'https://sp1.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6899&query=%E5%85%A8%E5%9B%BD%E5%A4%B1%E4%BF%A1%E8%A2%AB%E6%89%A7%E8%A1%8C%E4%BA%BA%E6%9F%A5%E8%AF%A2%E5%90%8D%E5%8D%95&pn={(page0 - 1) * 10}&rn=10&from_mid=1&ie=utf-8&oe=utf-8&format=json&t={time1}&cb=jQuery1102009881806639008461_{time0}&_={time1}'
    params = {
        'resource_id': '6899',
        'query': '全国失信被执行人查询名单',
        'pn': (page0 - 1) * 20,
        'rn': '10',
        'from_mid': '1',
        'ie': 'utf-8',
        'oe': 'utf-8',
        'format': 'json',
        't': time1,
        'cb': 'jQuery1102009881806639008461_1644920952543',
        '_': time1,
    }
    response = mysession.get(url, headers=headers, params=params).content.decode('utf-8')[47:-2]
    # print(response)
    data_json = json.loads(response)
    for i in data_json['data'][0]['disp_data']:
        items.append(i)
        print(f'第{i_count}条:', i)
        save_data(i)
        i_count += 1


def save_data(data0):
    with open('result.txt', 'a', encoding='GBK') as f:
        f.write(str(data0) + '\n')


if __name__ == '__main__':
    start_time = time.strftime('%Y-%m-%d %H:%M:%S')
    items = []
    i_count = 1
    t_l = []
    for i in range(30):
        t = threading.Thread(target=get_page, args=(i,))
        t_l.append(t)
        t.start()
        if i % 100 == 0 and i != 0:
            print('延时中')
            time.sleep(random.randint(1, 5))
        if i > 7171340:
            break
    for t in t_l:
        t.join()
    end_time = time.strftime('%Y-%m-%d %H:%M:%S')
    print('\nfinish\n', start_time, '\n', end_time)
    colnames = ['SiteId', 'StdStg', 'StdStl', 'age', 'areaName', 'areaNameNew', 'businessEntity', 'cambrian_appid',
                'cardNum', 'caseCode', 'changefreq', 'courtName', 'disruptTypeName', 'duty', 'focusNumber', 'gistId',
                'gistUnit', 'iname', 'lastmod', 'loc', 'partyTypeName', 'performance', 'performedPart', 'priority',
                'publishDate', 'publishDateStamp', 'regDate', 'sexy', 'sitelink', 'title', 'type', 'unperformPart',
                'xzhId', '_select_time', '_update_time', '_version']
    result = pd.DataFrame(columns=colnames, data=items)
    result.to_excel('result.xlsx', index=None, encoding='utf-8')
