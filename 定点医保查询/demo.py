import requests
import execjs
import json

with open('demo222.js', 'r', encoding='utf-8') as f:
    js_str = f.read()
ctx = execjs.compile(js_str)
result = ctx.call('get_result')

params_data = result['data']['data']
encData = params_data['encData']
signData = params_data['signData']
timestamp = params_data['timestamp']

data = {"data":{"data":{"encData":"3DFBCA4667B978F639BB23B95DCE4CC74CE34C33DC32F1068E9E23CA546C9EA8CCD20943B4DAE96380B41164D761DE971A73FF4F786B80008E16B6B53CF56E2E42C84A985FE3BABC31CB352556BB87C9C1495DB24A29AB6BC3A85AB7FCA00F33DCA72DB9D7E46A1FC083358BDB8F72C23B1D043A5B55437606F4B3B97F0C93AE"},"appCode":"T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ","version":"1.0.0","encType":"SM4","signType":"SM2","timestamp":1645358880,"signData":"7xLvGLyKZLoaCsd7lxKCCDGTZpEJqptcljrmCosdbLJm/8eK4SnbVWMalAfqbN5v3afQixACBq2uxQQq+p8RyQ=="}}

# data = {
#     'data': {
#         'data': {
#             'encData': 'C1FE47C37EC99B6D727891BFAB909AF946A733513B9D7FA150A1097A3B0DF19D8558226BBD504B4C4D480D6020A906FE23AE57A579165AFFE7C8E189FF7C2FE9C3E64BF73DCB5051935CC6B0B8DB78ECAF59340A8452C928441650AA9E1FEE194CE34C33DC32F1068E9E23CA546C9EA85102CB5479D7F6457403E7956603F86B'},
#         'appCode': 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
#         'version': '1.0.0',
#         'encType': 'SM4',
#         'signType': 'SM2',
#         'timestamp': 1645207936,
#         'signData': 'R1CC4fHHH2ZHVvCTtFH1JCXfNwKxaNlEjwqb/edQzWvbsiuaAAk+vCeVt1llcuAHYCpMm7GJT/ELxtg1C8jbOA=='
#     }
# }
print(data)
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                  ' Chrome/94.0.4606.81 Safari/537.36',
}
response = requests.post('https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/fixed/queryFixedHospital', headers=headers,
                         json=data)
print(response.text)
