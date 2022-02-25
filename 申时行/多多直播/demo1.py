import requests

headers = {
    'authority': 'live.pinduoduo.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'anti-content': '0apAfa5e-wCEfo1WEqab_754mEfGaFQXZ3Nq_5yVQyoyNvG59oJcgNor7MGqt9PE5_NE8TTZ55XktBWdvf_dBqFI3Rpzek1v34eFjtk0ywLqW-3RHFs1EUFRd7LeeUK1W-LcEF3ZA-K0Xupv2NrnQ2QbQ4TXYPyX5lJX0EjH598HpTqnngjn0Xan59yXrEyXIXo0-VoZn5SjGmCHptYH1VywydYS8iRvzelp1tR1eL2CUEbytINN-Psha9sToXi98HsSP4eZDv4Ve-fKSf5TdslkMV1UMu-ZDLKHD-AHe-4VIu6ZtRQ5UfleMk1CMO1mMkRKSfYwFsRD11RKD-ACeLf-kzwM1zFTM2Zz-fwfUq7kySLwnITonaPYNqqT_lZo0dqo5TytmW9yZthX4TaaYtRP4m5XHlHl40wYigYtmpmoNcyfX8qC8Zv4q_mXaaGSMPi_Ij06_hyMuoGCxlN_aYpDzj7N-j5IlhlLnms9BPLC86COzkfx',
    'sec-ch-ua-mobile': '?0',
    'etag': 'OOt9rpdVMJoUTUCNJAUWzYhALe5ikGND',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.69',
    'content-type': 'application/json; charset=UTF-8',
    'accept': 'application/json, text/plain, */*',
    'sec-ch-ua-platform': '"Windows"',
    'origin': 'https://live.pinduoduo.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://live.pinduoduo.com/creator/index',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cookie': '_nano_fp=XpEYX5Ubl098nqTal9_plhYh6sPaNAIbT7HJ5tf9; api_uid=ChAtZmHuKUAx/BGqSnKtAg==; _bee=OOt9rpdVMJoUTUCNJAUWzYhALe5ikGND; _f77=edd5454b-f1fd-42fc-9bc4-ef0318aaf91a; _a42=a5c125f1-a7ed-4a9b-875a-cc7ec03b3a5c; rckk=OOt9rpdVMJoUTUCNJAUWzYhALe5ikGND; ru1k=edd5454b-f1fd-42fc-9bc4-ef0318aaf91a; ru2k=a5c125f1-a7ed-4a9b-875a-cc7ec03b3a5c; L_PASS_ID=EJQSSODHBIM2BUPS4MACBHWZ3AKCD5TCPCELFOOR4DKY2YTEOBMA11355af; L_PASS_TYPE=2; L_PASS_DEAD=1645608271',
}

data = '{"feeds":[{"desc":"123123","url":"https://video.pddugc.com/backbone-video/2022-01-24/a730139f1b47029b407070f37fb5668f.mp4","goodsIdList":[],"vid":"backbone-video#ep6poozxnitvptmzvexhsckkmvjbk8ey"}]}'

response = requests.post('https://live.pinduoduo.com/api/backbone/video/publish', headers=headers, data=data)
print(response.text)