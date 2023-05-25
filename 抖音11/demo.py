#!/usr/bin/python3
# -*- coding: utf-8 -*-
import io
import sys
from urllib.parse import urlencode
import os
import execjs
import requests


with open("./dy_xb.js", encoding='utf-8', errors='ignore') as f:
    js_code = f.read()
xb_run = execjs.compile(js_code)
def get_web_x_bogus(url, ua):
    url_para = url.split("?")[1]
    result = xb_run.call('get_xb_ret', url_para, ua)
    return result
headers = {
    'cookie': 'ttwid=1|tbNhCgyqo8rec3vfLTjNsv8vuedPMDVu9NAkuj-jKUw|1676634464|3fbce9fc17f9ae030b4be2b3732968567249be3283b3b1b5bc1455c0972ced4f; passport_csrf_token=6bcc988a8c6fcf365a6a429a2a7a8ac6; passport_csrf_token_default=6bcc988a8c6fcf365a6a429a2a7a8ac6; s_v_web_id=verify_le8guw3n_5YgOmENe_WLTV_4D9E_9njX_s5AJ6ssLTifh; _tea_utm_cache_2018=undefined; download_guide="3/20230217"; VIDEO_FILTER_MEMO_SELECT={"expireTime":1677486799707,"type":1}; __ac_signature=_02B4Z6wo00f01YyjPPAAAIDBDKHGsPGjb5GMgzhAAADdjBuTKWQY20-Hs7xeRSGE3PmJDqYGLAd5NTf3DeLmKam1tETjJY3Evtm3kJ9RytGoycbFhSOiD22Yw5C5hXZKo0hG7Xgzy-zou7G4a5; strategyABtestKey="1676950579.227"; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWNsaWVudC1jZXJ0IjoiLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlDRlRDQ0FidWdBd0lCQWdJVkFPeXV6c3NybW90dGxaYzhveGREN1VRSm1zcGVNQW9HQ0NxR1NNNDlCQU1DXG5NREV4Q3pBSkJnTlZCQVlUQWtOT01TSXdJQVlEVlFRRERCbDBhV05yWlhSZlozVmhjbVJmWTJGZlpXTmtjMkZmXG5NalUyTUI0WERUSXpNREl4TlRBMk5Ua3lNbG9YRFRNek1ESXhOVEUwTlRreU1sb3dKekVMTUFrR0ExVUVCaE1DXG5RMDR4R0RBV0JnTlZCQU1NRDJKa1gzUnBZMnRsZEY5bmRXRnlaREJaTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5XG5Bd0VIQTBJQUJQRjZDYXZEdmk2eS93RmRWZTFBQTBvMmNaemMzb0J5Mng4Q3JuN0ZKenJGcGFPUXhzakY0ck1BXG5BNlk3czk0NDZ4YkUzTzROb3BoTk55T21xVHVBb0dlamdia3dnYll3RGdZRFZSMFBBUUgvQkFRREFnV2dNREVHXG5BMVVkSlFRcU1DZ0dDQ3NHQVFVRkJ3TUJCZ2dyQmdFRkJRY0RBZ1lJS3dZQkJRVUhBd01HQ0NzR0FRVUZCd01FXG5NQ2tHQTFVZERnUWlCQ0J4NFhtM3pTMy9pbGtYTk1ib2MvQytXNVRhbFFuaU4wTkJsOGZ1Y2QwZ0hqQXJCZ05WXG5IU01FSkRBaWdDQXlwV2Zxam1SSUVvM01UazFBZTNNVW0wZHRVM3FrMFlEWGVaU1hleUpIZ3pBWkJnTlZIUkVFXG5FakFRZ2c1M2QzY3VaRzkxZVdsdUxtTnZiVEFLQmdncWhrak9QUVFEQWdOSUFEQkZBaUVBMnhid1FKalN5QVFqXG5sMlBJaFZnRlI0cGp0UHFvUmh6RWVHUkZkdVBnNUlBQ0lEaldNOUNDREVySG52Q1pSTU9abnhsMFZjN2VjZzAzXG5BUzNCbEFxQ0EwVGZcbi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS1cbiJ9; SEARCH_RESULT_LIST_TYPE="single"; home_can_add_dy_2_desktop="1"; tt_scid=Th0hAyR8znBE8OFDoaI6k2.TZPIJkWLbJRTjPt85iIlq0E66SRsEfZmt30v2eJ2d2dba; msToken=0vMl6QEwPgrqXDe-7COD6wMQAXU8ieY2yQCRKdEThwvEursypL75upXXKUz8ozH_wAuVOzkPYPq3LyZ8cld4ixmBjKB8RSdvCWBjiTuweZQXpsQs3MRGBQ==; msToken=mrphON41dVFp8GV0E8gdpjqNc-jnqsxpBbBGo_xsVW1M79hVjDYfdwcDnycgPeplVZZWHKABBc1uyhfcSO5irfVKEV_G0iE5642JiFJg7TyHcyL5EG4MJw==',
    "authority": "www.douyin.com",
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    'referer': 'https://www.douyin.com/search/593450507?source=switch_tab&type=user',
    "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
}

params = {
    "device_platform": "webapp",
    "aid": "6383",
    "channel": "channel_pc_web",
    "search_channel": "aweme_user_web",
    "keyword": "593450507",
    "search_source": "normal_search",
    "query_correct_type": "1",
    "is_filter_search": "0",
    "from_group_id": "",
    "offset": "0",
    "count": "8",
    "pc_client_type": "1",
    "version_code": "170400",
    "version_name": "17.4.0",
    "cookie_enabled": "true",
    "screen_width": "1366",
    "screen_height": "768",
    "browser_language": "zh-CN",
    "browser_platform": "Win32",
    "browser_name": "Chrome",
    "browser_version": "110.0.0.0",
    "browser_online": "true",
    "engine_name": "Blink",
    "engine_version": "110.0.0.0",
    "os_name": "Windows",
    "os_version": "10",
    "cpu_core_num": "4",
    "device_memory": "8",
    "platform": "PC",
    "downlink": "10",
    "effective_type": "4g",
    "round_trip_time": "50",
    "webid": "7201090126952285729",
    # 'msToken': 'ncBIJkjv3jrdVzhyDFGfoiNGniDKfpqWvKPjD5f686RQmNmzbAU3nJ35_8rX_X59EdH6L-qQ90dDwGypfxUzpJOzqSUdXZ7kK-peGeV3G4bKL1d1tnnTl4jhXEUW-oc=',
    # 'X-Bogus': 'DFSzswVLDsXANcXnSgdHXl9WX7jK'
    # "msToken": "0vMl6QEwPgrqXDe-7COD6wMQAXU8ieY2yQCRKdEThwvEursypL75upXXKUz8ozH_wAuVOzkPYPq3LyZ8cld4ixmBjKB8RSdvCWBjiTuweZQXpsQs3MRGBQ=="
}
url = "https://www.douyin.com/aweme/v1/web/discover/search/?" + urlencode(params)
# url = "https://www.douyin.com/aweme/v1/web/discover/search/"
# print(url)
xb = get_web_x_bogus(url, headers['user-agent'])
# print(xb)
msToken =  'eA53SlUEQbyPXH85S7-UuRUX_FAj-AXTxUrsoJXaCCqTEzEgyIiJqlXNVVk4VC1FdfSLWVt5cls7v0ZuKzKQS8mRUXA7n4Mivh1TPsngycj5mQzfjttUCRPhDCja5yY='
url = url + "&msToken=" + msToken + "&X-Bogus=" + xb
# print(url)
response = requests.get(url, headers=headers).json()
print(response)
