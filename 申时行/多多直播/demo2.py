import requests

headers = {
    'authority': 'file.pinduoduo.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.69',
    'sec-ch-ua-platform': '"Windows"',
    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarylLBWwcqGMshGBb09',
    'accept': '*/*',
    'origin': 'https://live.pinduoduo.com',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://live.pinduoduo.com/',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
}

params = (
    ('sdk_version', 'js-0.0.9'),
    ('tag_name', 'backbone-video'),
)

data = {
  '$------WebKitFormBoundarylLBWwcqGMshGBb09\\r\\nContent-Disposition: form-data; name': '"file"; filename="1.mp4"\\r\\nContent-Type: video/mp4\\r\\n\\r\\n\\r\\n------WebKitFormBoundarylLBWwcqGMshGBb09\\r\\nContent-Disposition: form-data; name="create_media"\\r\\n\\r\\ntrue\\r\\n------WebKitFormBoundarylLBWwcqGMshGBb09\\r\\nContent-Disposition: form-data; name="sign"\\r\\n\\r\\nMDpbCmzeyVFkvdHHQ3YsSYVCoNMDXb1kpgBBy0XnLxQfWmKf3V2NPTH0PoMbGwcXvGwHa8ppfiFp0DlVgEn6x0lsWgoKeBBptVW4OidIjFOZWfOZcrAyzjCOQ__FZNkUP8DB68uSaT752RG1utR6yTHtM69V2lRAzFQr8Q7Uji69TWVR0RDh24f8vvxomjwhrGwA-_S_8uzVsh3M1C_lGzOhG2Ctst5ioPLrrQn3Bzd-l4D5ALvB-1WPrQ3HDGkzbt8Z58t1i8HIrRieUc_RV3jzT7Nb8JiIxuW2dXiv5Q_vfkFnHLfCynaGbPB7ueJ6Vm6VZrNoulVp_jrcy_0btfMUHiGDZ0Fqtqv_m3yo96RD5OKHVa5LbHDQ5QcdpLlMG0DZVio_3J0oMM6LTcz12CC_mOtbVrAyscPlW_G6XytKuMEYqE9QyEeBDYB_iMNVlIk=\\r\\n------WebKitFormBoundarylLBWwcqGMshGBb09--\\r\\n'
}

response = requests.post('https://file.pinduoduo.com/v1/store_video', headers=headers, params=params, data=data)

print(response.text)