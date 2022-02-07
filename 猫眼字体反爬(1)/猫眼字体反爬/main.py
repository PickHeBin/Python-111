import requests
import urllib.request as down
import re
from fontTools.ttLib import TTFont  # 字体解析库
from xml.etree.ElementTree import parse
from difflib import SequenceMatcher  # 序列匹配器


##########————————————on字典
nums_matching = {
    0: [
        ['1', '0', '1', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1', '0', '1',
         '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0'],
        ['1', '0', '1', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1', '0', '1',
         '0', '0', '0', '0', '0', '0', '0', '1', '0']
    ],
    1: [['1', '1', '1', '0', '0', '1', '1', '0', '1', '0', '0', '1', '1']],

    2: [['1', '1', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1', '0', '1', '0', '1',
         '1', '0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1'],
        ['1', '1', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '1', '1', '0', '0',
         '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1', '1', '1', '0', '1']
        ],
    3: [
        ['1', '0', '0', '1', '0', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1', '0', '1', '0',
         '1', '0', '1', '0', '0', '1', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0',
         '1', '0', '1', '0', '0', '1'],
        ['1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '1', '1', '1', '0', '0', '1', '0', '0', '0', '0', '1', '1',
         '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1']
    ],
    4: [['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']],
    5: [['1', '0', '0', '1', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1',
         '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1']],
    6: [['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '0', '1',
         '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1',
         '0', '1', '0', '1', '0']],
    7: [['1', '1', '1', '1', '0', '0', '0', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1']],
    8: [['1', '0', '1', '0', '0', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '0', '1',
         '0', '0', '1', '0', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0',
         '0', '0', '1', '0', '1', '0'],
        ['1', '0', '1', '0', '0', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0',
         '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0']
        ],
    9: [
        ['1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0',
         '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1',
         '0', '1', '0', '1', '0', '0', '1', '0'],
        ['1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0',
         '1', '0', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '1', '0', '0', '1', '0', '1',
         '0', '1', '0', '1', '0', '0', '1', '0'],
        ['1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0',
         '0', '1', '0', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '0', '1', '0', '0',
         '0', '0'],
        ['1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0',
         '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0']
    ]
}

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2'
}


def getMovieinfos(url):
    response = requests.get(url, headers=headers).json()
    # 获取存放字典的json字段，并提取字体url
    fontStyle = response['fontStyle']

    fontStyle = re.findall(',url\(\\"(.*?woff)\\"\)', fontStyle)
    # print(fontStyle)
    fonturl = 'http:' + fontStyle[0]  # 字体url链接
    print(fonturl)
    # 将加载的字体下载保存到本地，并对其进行分析
    down.urlretrieve(fonturl, "猫眼" + '.woff')
    content = response['movieList']['data']['list']
    return content

##########————————————获取加载字体的on属性列表字典
def readingXml_pt():
    xml = parse('猫眼.xml')
    root = xml.getroot()
    nums_on_dict = {}
    for i in root:
        if i.tag == 'glyf':

            for j in i:
                if j.get('name') == 'glyph00000' or j.get('name') == 'x':
                    continue
                on_list = []
                for k in j:
                    for l in k:
                        on_list.append(l.get('on'))
                nums_on_dict[j.get('name')] = on_list
            break

    return nums_on_dict

def similarity(a, b):
    '''
    对比a,b序列，返回相似度（0~1.0）
    eg：
    list1=[1,2,3,4,5]
    list2=[1,2,3]
    similarity(list1,list2)
    return 0.75
    :param a: 序列a
    :param b: 序列b
    :return:  相似度（0~1.0）
    '''
    return SequenceMatcher(None, a, b).ratio()#引用ratio方法，返回序列相似性的度量




if __name__ == '__main__':
    url = 'https://piaofang.maoyan.com/dashboard-ajax?orderType=0&uuid=177ccef7b7983-0cbfb7f7fb767-c7d6957-1fa400-177ccef7b7ac8'
    # https://piaofang.maoyan.com/getBoxList?date=1&isSplit=true 移动端无加密接口
    content = getMovieinfos(url)
    # print(content)
    # 获得字体对象
    with TTFont('猫眼.woff') as fontnew:
        fontnew.saveXML('猫眼.xml')  # 保存为XML格式
        f = fontnew.getBestCmap()  # 获取字体关系映射 code="0xe359"——name="uniE359"
    # 将获得到的字体关系映射存为字典保存
    fontMaps = {}
    for num, code in f.items():
        if code == 'x': continue
        fontMaps[code] = hex(num)  # 存入字典

    nums_on_dict = readingXml_pt()

    num_code = {}
    for num, matching in nums_matching.items():
        for _num, _matching in nums_on_dict.items():
            for i in matching:
                if similarity(i, _matching) >= 0.9:  # >=0.9 则成功匹配
                    num_code[fontMaps[_num].replace('0x', '&#x')] = str(num)
                    break
    # 信息字典
    movieNum = {}  # 综合票房数字典
    for i in content:
        moviename = i['movieInfo']['movieName']
        movieNum[moviename] = i['boxSplitUnit']['num']
        movieDayOne = i['sumBoxDesc']
        movieRate = i['splitBoxRate']
        movieshowCount = i['showCount']
        movieViewerAvg = i['avgShowView']

    ##########————————————替换加密字体，获得正确数字，并输出结果
    # 对加密的字体遍历分组，并去除无用字符
    for name, numbercode in movieNum.items():
        movieNum[name] = re.findall('([\S]*?);', numbercode)

    # 根据得到的fontcodes映射对加密字体进行替换，得到正确数值
    for index, (name, numbercodelist) in enumerate(movieNum.items()):
        num = []
        # 替换操作
        for code in numbercodelist:
            if '.' in code:
                code = code.replace('.', '')
                num.append('.' + num_code[code])
            else:
                num.append(num_code[code])
        infos = ['排行:' + str(index + 1),
                 '片名', name,
                 '上映首日', movieDayOne,
                 '票房', ''.join(num) + '万',
                 '票房占比', movieRate,
                 '场均人数', movieViewerAvg + '人',
                 '排片场次', movieshowCount]
        print(infos)


"""
薪资20-30K的爬虫工程师水平到底是怎么样？
    企业到底需要哪方面的技术人才
    今晚8点锁定腾讯课堂，柏汌老师带你一探究竟

课题：
    Python爬虫实例——2021猫眼票房字体加密反爬对策

主讲老师: 柏汌老师
直播时间：20:00


"""


