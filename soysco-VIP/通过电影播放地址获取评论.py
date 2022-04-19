"""
在demo中得到了赘婿这部电视剧的评论
现在我们放宽一些，通过播放地址来获取评论
url = 'https://www.iqiyi.com/v_19rrn3dk9g.html'
"""
# 思路
# 1、对比不同电影和电视，查看评论的请求参数有什么不同的地方。分析发现在channel_id和content_id存在比较大的差异
# channel_id 预估为电视或者电影频道id
# content_id 预估为电影或者电视的id
import csv
import pprint
import re
import time

import requests

'''
agent_type: 118
agent_version: 9.11.5
authcookie: null
business_type: 17
channel_id: 4    # 存在不同
content_id: 323932600  # 存在不同
hot_size: 10
last_id:   # 存在不同
page: 
page_size: 10
types: hot,time
callback: jsonp_1640421676352_51436  # 存在不同
'''
# 再来一个电视剧的
"""
'agent_type': '118',
'agent_version': '9.11.5',
'authcookie': 'null',
'business_type': '17',
'channel_id': '2',
'content_id': '7973227714515400',
'hot_size': '10',
'last_id': str(last_id),
'page': '',
'page_size': '10',
'types': 'time',
'callback': 'jsonp_1639637803362_12830',
"""
base_headers_ = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
}

base_params_ = {
    'agent_type': '118',
    'agent_version': '9.11.5',
    'authcookie': 'null',
    'business_type': '17',
    # 'channel_id': '2',
    # 'content_id': '7973227714515400',
    'hot_size': '10',
    # 'last_id': str(last_id),
    'page': '',
    'page_size': '20',
    'types': 'time',
    # 'callback': 'jsonp_1639637803362_12830',
}


def get_ids(url):
    """通过url获取id"""
    dict1 = {}
    response = requests.get(url, headers=base_headers_).text
    # print(response)
    channel_id = re.findall('param\[\'channelID\'\] = "(\d+)";', response, re.S)[0]
    content_id = re.findall('param\[\'tvid\'\] = "(\d+)";', response, re.S)[0]

    # print(channel_id)
    # print(content_id)
    dict1['channel_id'] = channel_id
    dict1['content_id'] = content_id
    return dict1



def get_all_page(dict):
    """获取并保存评论数据"""
    dict4 = {}
    url = 'https://sns-comment.iqiyi.com/v3/comment/get_comments.action?'
    response = requests.get(url, params=dict, headers=base_headers_).json()
    # pprint.pprint(response)
    comments = response['data']['comments']   # 获得评论内容
    for com in comments:
        addTime = com['addTime']  # 评论时间
        content = com['content']  # 评论内容
        content = content.replace('\n', '')
        rootCommentId = com['rootCommentId']  # 评论id
        data = [addTime, content, rootCommentId]
        print(data)
        save(data)
        try:
            replies = com['replies']  # 评论的评论，如果存在进入此选项，如果不存在则continue
            # print(replies)
            for reply in replies:  # 评论的评论，可以存在多条，所以需要遍历
                addTime = reply['addTime']
                content = reply['content']
                content = content.replace('\n', '')
                data = [addTime, content]
                print(data)
                save(data)
        except:
            continue
    dict4['last_id'] = rootCommentId
    dict.update(dict4)
    time.sleep(3)
    get_all_page(dict)
def save(data):
    """保存csv数据"""
    with open('评论.csv', mode='a', encoding='utf-8',newline='') as f:
        write = csv.writer(f)
        write.writerow(data)

def main(url):
    # 获取播放电影/电视的类型和id
    dict1 = get_ids(url)
    # 把 电影/电视的类型和id 添加进params_里去，获得新的请求参数
    base_params_.update(dict1)
    # 获取所有页面的数据并保存
    get_all_page(base_params_)


if __name__ == '__main__':
    # url = 'https://www.iqiyi.com/v_19rrn3dk9g.html'
    url = 'https://www.iqiyi.com/v_19rqpozz4w.html'  # 播放地址
    main(url)

