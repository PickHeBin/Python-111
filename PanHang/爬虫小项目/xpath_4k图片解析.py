import requests
from lxml import etree
import os
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'}
url = 'https://pic.netbian.com/4kmeinv/'
res = requests.get(url, headers=headers)
page_text = res.text
tree = etree.HTML(page_text)
li_list = tree.xpath('//div[@class="slist"]/ul/li')  # 提取li标签内容
if not os.path.exists('./picLibs'):
    os.mkdir('picLibs')

for li in li_list:
    img_src = 'https://pic.netbian.com/' + li.xpath('./a/img/@src')[0]
    img_name = li.xpath('./a/img/@alt')[0] + '.jpg'
    # 处理中文乱码的通用解决方案
    img_name = img_name.encode('iso-8859-1').decode('gbk')
    # print(img_name, img_src)
    img_data = requests.get(url=img_src, headers=headers).content
    img_path = 'picLibs/'+img_name
    with open(img_path, 'wb') as fp:
        fp.write(img_data)
        print(img_name, '下载成功！')
