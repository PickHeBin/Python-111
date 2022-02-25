import requests
from requests_toolbelt import MultipartEncoder

headers = {
    'content-type': 'application/json; charset=UTF-8',
    'cookie': '_nano_fp=XpEYX5Ubl098nqTal9_plhYh6sPaNAIbT7HJ5tf9; api_uid=ChAtZmHuKUAx/BGqSnKtAg==; _bee=OOt9rpdVMJoUTUCNJAUWzYhALe5ikGND; _f77=edd5454b-f1fd-42fc-9bc4-ef0318aaf91a; _a42=a5c125f1-a7ed-4a9b-875a-cc7ec03b3a5c; rckk=OOt9rpdVMJoUTUCNJAUWzYhALe5ikGND; ru1k=edd5454b-f1fd-42fc-9bc4-ef0318aaf91a; ru2k=a5c125f1-a7ed-4a9b-875a-cc7ec03b3a5c; L_PASS_ID=EJQSSODHBIM2BUPS4MACBHWZ3AKCD5TCPCELFOOR4DKY2YTEOBMA11355af; L_PASS_TYPE=2; L_PASS_DEAD=1645686386'
}

uploadImg_data = '{"useVideo":true}'

res = requests.post(url='https://live.pinduoduo.com/sprite/obs/auth/uploadImg', headers=headers,
                    data=uploadImg_data)
sign = res.json()['result']
store_video_headers = {
    'authority': 'file.pinduoduo.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.69',
    'sec-ch-ua-platform': '"Windows"',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarywvheU1ij4T4iaCyN',
    'accept': '*/*',
    'origin': 'https://live.pinduoduo.com',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://live.pinduoduo.com/',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
}

store_video_data = {
    'file': MultipartEncoder(
        fields={
            'fileName': '1.mp4',
            'fileToUpload': ('1.mp4', open(r'.\1.mp4','rb').read()),
        },
    ),
    'sign': sign,
    'create_media': 'true'
}

# store_video_data = {
#     'file': requests.get(
#         'https://video.pddugc.com/backbone-video/2022-01-25/98c3d6b3a55a7c88273e9ffa58fa9efa.mp4').content,
#     'sign': sign,
#     'create_media': 'true'
# }
#
store_video_res = requests.post(
    'https://file.pinduoduo.com/v1/store_video?sdk_version=js-0.0.9&tag_name=backbone-video',
    headers=store_video_headers,
    data=store_video_data)
print(store_video_res.text)
