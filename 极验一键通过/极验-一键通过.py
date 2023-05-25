
import execjs
import requests
import re
import time


def get_gt_ch(headers,shijian):

    url = "https://www.geetest.com/demo/gt/register-fullpage"
    params = {
        "t": shijian
    }
    response = requests.get(url, headers=headers, params=params).text
    print(response)
    # 获取challenge和gt的值
    challenge = re.findall('challenge":"(.*?)"',response)[0]
    challenge_1 = '"' + challenge + '"'
    gt = re.findall('gt":"(.*?)"',response)[0]
    gt_1 = '"' + gt + '"'

    with open('fullpage.9-7657612d.js',encoding='utf-8') as f:
        js_code = f.read()

    ppe = '{"gt":'+gt_1+',"challenge":'+challenge_1+',"offline":false,"new_captcha":true,"product":"float","width":"300px","https":true,"api_server":"apiv6.geetest.com","protocol":"https://","type":"fullpage","static_servers":["static.geetest.com/","dn-staticdown.qbox.me/"],"voice":"/static/js/voice.1.2.2.js","click":"/static/js/click.3.0.7.js","beeline":"/static/js/beeline.1.0.1.js","fullpage":"/static/js/fullpage.9.1.1.js","slide":"/static/js/slide.7.8.9.js","geetest":"/static/js/geetest.6.0.9.js","aspect_radio":{"slide":103,"click":128,"voice":128,"beeline":50},"cc":4,"ww":true,"i":"16778!!18216!!CSS1Compat!!1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!3!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!-1!!-1!!-1!!0!!26!!0!!0!!253!!605!!1280!!717!!en!!en,zh!!-1!!2!!24!!Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36!!1!!1!!1280!!800!!1280!!744!!1!!1!!1!!-1!!MacIntel!!0!!-8!!4e38dc10ce1a03c9d97ef22954105ae1!!0!!internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer!!0!!-1!!0!!4!!AndaleMono,Arial,ArialBlack,ArialHebrew,ArialNarrow,ArialRoundedMTBold,ArialUnicodeMS,ComicSansMS,Consolas,Courier,CourierNew,Geneva,Georgia,Helvetica,HelveticaNeue,Impact,LUCIDAGRANDE,MicrosoftSansSerif,Monaco,MYRIADPRO,Palatino,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings,Wingdings2,Wingdings3!!' + shijian.replace("'","") + '!!-1!!-1!!-1!!12!!-1!!-1!!-1!!5!!-1!!-1"}'
    print(ppe)
    w = execjs.compile(js_code).call('generate_w',ppe)

    print(w)
    return gt,challenge,w

def get_validate(gt,challenge,w,shijian):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "en,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.geetest.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    url = "https://api.geevisit.com/ajax.php"
    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": w,
        "callback": "geetest_" + shijian
    }
    response = requests.get(url, headers=headers,params=params).text
    print(response)

if __name__ == '__main__':
    headers = {
        "authority": "www.geetest.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://www.geetest.com/demo/fullpage.html",
        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    shijian = str(int(time.time() * 1000))
    gt,challenge,w = get_gt_ch(headers,shijian)
    get_validate(gt,challenge,w,shijian)


