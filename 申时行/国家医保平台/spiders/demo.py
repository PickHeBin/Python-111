import requests
import execjs
import json

with open('demo.js', 'r', encoding='utf-8') as f:
    js_str = f.read()
ctx = execjs.compile(js_str)
result = ctx.call('get_from_data',1)
data = result['data']
print(data)

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
response = requests.post('https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/fixed/queryFixedHospital', headers=headers,
                         data=data)
encData = response.json()['data']['data']['encData']
fixedHospital_result = ctx.call('get_result',encData)
print(fixedHospital_result)

