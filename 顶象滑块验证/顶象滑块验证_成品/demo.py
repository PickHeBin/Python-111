
import requests
import execjs
import re
import numpy as  np
from PIL import Image
import cv2

class DX_hk(object):

    def __init__(self):
        self.headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-type': 'application/x-www-form-urlencoded',
    'Origin': 'https://cdn.dingxiang-inc.com',
    'Pragma': 'no-cache',
    'Referer': 'https://cdn.dingxiang-inc.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
        self.session = requests.session()

    def reduction_image(self,_seq,_img):
            """
            用于将图片还原
            @param _seq:图片的序列号，也就是 Sequence方法生成的结果 还原数组
            @param _img:背景图片
            @return new img
            """
            a = 200
            np_image = np.array(_img)
            new_np_img = np.zeros((200,400,3), dtype = np.uint8)
            for u in range(0,32):
                c = _seq[u] % 32 * 12
                xpos = u % 32 * 12
                slice_img = np_image[0:(0 + a), c:(c + 12)]
                n = len(slice_img[0])
                new_np_img[0:(0 + a), xpos: (xpos + n)] = slice_img
            return new_np_img

    def image_processing(self):
            from PIL import Image
            #  待处理图片路径
            img_path_1 = Image.open('bg.png')
            #  resize图片大小，入口参数为一个tuple，新的图片的大小
            img_size_1 = img_path_1.resize((380, 165))
            #  处理图片后存储路径，以及存储格式
            img_size_1.save('bg.png')
            img_path_2=Image.open('slide.png')
            img_size_2 = img_path_2.resize((64, 55))
            #  处理图片后存储路径，以及存储格式
            img_size_2.save('slide.png')

    def dXImgSlider(self,origin, sliderImg):
            slider = cv2.imread(sliderImg)
            originImg = cv2.imread(origin)
            bgImg = cv2.cvtColor(originImg, cv2.COLOR_BGR2GRAY)
            sliderImg = cv2.cvtColor(slider, cv2.COLOR_BGR2GRAY)
            # 反相
            frame_gray_c = sliderImg.copy()
            height, width = frame_gray_c.shape
            for i in range(height):
                for j in range(width):
                    pv = frame_gray_c[i, j]
                    frame_gray_c[i][j] = 255 - pv

            # 高斯滤波
            imgGaussianBlur1 = cv2.GaussianBlur(frame_gray_c, (3, 3), 0)
            imgGaussianBlur2 = cv2.GaussianBlur(bgImg, (7, 7), 0)

            # 获取模板图像的高和宽
            th, tw = sliderImg.shape[:2]
            # 使用标准相关系数匹配,1表示完美匹配,-1表示糟糕的匹配,0表示没有任何相关性
            result = cv2.matchTemplate(imgGaussianBlur2, imgGaussianBlur1, cv2.TM_CCOEFF_NORMED)
            min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
            tl = max_loc
            br = (tl[0] + tw, tl[1] + th)

            # 绘制识别框
            im = cv2.rectangle(originImg, tl, br, (0, 0, 255), 2)
            cv2.imwrite("result"  + ".png", im)
            resObj = [tl[0], tl[1], br[0], br[1]]

            return tl[0]


    def get_api(self):
     #处理api接口，获取
        with open('constid.js', encoding='utf-8') as f:
           jscode = f.read()
        dd=execjs.compile(jscode).call('get_data','99de95ad1f23597c23b3558d932ded3c')

        c=re.findall('"data":"(.*?)"',dd)[0]

        params = {
            "w": "380",
            "h": "165",
            "s": "50",
            "ak": "99de95ad1f23597c23b3558d932ded3c",
            "c": c,
            "jsv": "5.0.7.0",
            "aid": "dx-1661422549783-62699831-3",
            "wp": "1",
            "de": "0",
            "uid": "",
            "lf": "0",
            "tpc": "",
            "cid": "81285951",
            "_r": "0.3102111224836641"
        }
        api_res = self.session.get("https://cap.dingxiang-inc.com/api/a",headers=self.headers,params=params,verify=False).json()
        print(api_res)
        #获取
        img_url_base='https://static.dingxiang-inc.com/picture'
        image_item={
            "sid":api_res['sid'],
            "cid":api_res['cid'],
            "y":api_res['y'],#用于控制页面上滑块上的显示位置
            "bg_url":img_url_base+api_res['p1'],#等待还原背景图
            "slide_url":img_url_base+api_res['p2']#滑块底图
        }
        url_name = re.search(r'https://static.dingxiang-inc.com/picture/dx/.*?/.*?/(.*?).webp', image_item['bg_url']).group(1)

        with open('reduction_array.js', encoding='utf-8') as f:
          jscode2 = f.read()
        array = execjs.compile(jscode2).call('Ir', url_name)
        print(array)
        resp = requests.get(url=image_item['bg_url'], headers= {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }, verify=False)

        # //图片保存
        with open('bg.png', 'wb') as f:
            f.write(resp.content)
        cv2.imwrite('bg.png', cv2.imread('bg.png'), [cv2.IMWRITE_PNG_COMPRESSION, 0])


        resp = requests.get(url=image_item['slide_url'], headers= {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }, verify=False)
        #图片还原处理
        with open('slide.png', 'wb') as f:
            f.write(resp.content)
        cv2.imwrite('slide.png', cv2.imread('slide.png'), [cv2.IMWRITE_PNG_COMPRESSION, 0])
        new_img = self.reduction_image(array, Image.open('bg.png'))
        cv2.imwrite('bg.png', new_img)
        self.image_processing()
        # 继续缺口的距离
        distance=self.dXImgSlider('bg.png', 'slide.png')
        print(distance)

        v1_url = "https://cap.dingxiang-inc.com/api/v1"

        with open('ac_token.js', encoding='utf-8') as f:
            dd = f.read()
        ac = execjs.compile(dd).call('slide_ac', image_item['sid'], distance, image_item['y'])
        data = {
            "ac": ac,
            "ak": "99de95ad1f23597c23b3558d932ded3c",
            "c": c,
            "uid": "",
            "jsv": "5.1.2",
            "sid": image_item['sid'],
            "aid": "dx-1661422549783-62699831-3",
            "x": distance,
            "y":image_item['y'],
            "w": "380",
            "h": "165"
        }
        response = self.session.post(v1_url, headers=self.headers, data=data,verify=False)

        print(response.text)
        print(response)

if __name__ == '__main__':
    DX_hk().get_api()