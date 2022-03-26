import requests
import execjs
import json

url1 = 'https://music.163.com/weapi/comment/resource/comments/get?csrf_token='
js = open('demo.js', mode='r', encoding='utf-8').read()
# offset控制换页，每页20条数据，第一页offset=0，然后每次加20
# 歌曲id控制歌曲，更换歌曲的时候需要更换page里的参数和referer里面的参数

page = '{"rid":"R_SO_4_394640","threadId":"R_SO_4_394640","pageNo":"1","pageSize":"20","cursor":"-1","offset":"0","orderType":"1","csrf_token":""}'
num1 = '010001'
str1 = '0CoJUm6Qyw8W8jud'
str2 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'

cont = execjs.compile(js)
data = cont.call('data', page, num1, str2, str1)
print(data)
data1 = {
    'params': data['encText'],
    'encSecKey': data['encSecKey']
}
headers = {
    # 'referer': 'https://music.163.com/song?id=394640',  # 歌曲id，需要在查询页面中去获得
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
}
response1 = requests.post(url=url1, headers=headers, data=data1).json()
print(response1)
