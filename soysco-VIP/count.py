import os
import requests
import urllib3
urllib3.disable_warnings()
import time
from openpyxl import load_workbook, Workbook
import json
url='https://data.stats.gov.cn/easyquery.htm'
headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
'Cookie':'_trs_uv=kxsf7awy_6_k7r5; u=6; JSESSIONID=CZ4PssLfOAGAOTwJlP1z9xMngIxroIcD7P23KTXZIyrt6iRlePH_!1909598655; wzws_cid=0e8a3a4fc1ee26c938be62c387030beb6a580f975836aaf324637244b3ffbe7759f8b166169ed7a9c7f010cc77b55d3e26c3fd6e13f52322c49843d9458dd8b2; __utma=64623162.2080569561.1640941129.1640941129.1640941129.1; __utmc=64623162; __utmz=64623162.1640941129.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmb=64623162.1.10.1640941129',
'Host':'data.stats.gov.cn',
'Origin':'https://data.stats.gov.cn'}
data={'id':'zb',
    'dbcode':'hgnd',
    'wdcode':'zb',
    'm':'getTree'}
root='指标/'

# 获取数据
def get_data(id_zb,id_sj,path):
    urllib3.disable_warnings()
    url='https://data.stats.gov.cn/easyquery.htm'
    headers_get={'User-Agent':'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
    'Cookie':'u=6; JSESSIONID=cCFGCMlTlOhRH2LYkxq-zjpSJgBNnyw10NEAqAz70I68HIk-6IqQ!1909598655; wzws_cid=75098c5fde46c4b64730707c9844df2f50ea815e51e0f203a973ac3a9cd1bffefda8239597a1c5809679702d8f2d538a94e8041fef1a178a90dcc8f34f40522a157563ba5703415e166fc0ecb62c9438',
    'Host':'data.stats.gov.cn'}
    dfwds='[{"wdcode":"zb","valuecode":"'+str(id_zb)+'"},{"wdcode":"sj","valuecode":"'+id_sj+'"}]'
    data_get={'m':'QueryData',
    'dbcode':'hgnd',
    'rowcode':'zb',
    'colcode':'sj',
    'wds':'[]',
    'dfwds':dfwds,
    'k1':str(int(round(time.time() * 1000))),
    'h':'1'}
    while True:
        try:
            res_get=requests.post(url,data=data_get,headers=headers_get,verify=False)
            break
        except requests.exceptions.ConnectionError:
            print('网络异常，3秒钟后重试...')
            time.sleep(3)
    res_get.encoding='utf-8-sig'
    try:
        rej_get=res_get.json()
    except json.decoder.JSONDecodeError:
        print('43')
        return('连接中断，请切换IP。')
    wb=Workbook()
    ws=wb.active
    head=['指标ID','指标名称','指标解释']
    for node in rej_get['returndata']['wdnodes'][1]['nodes']:
        head.append(node['cname'])
    ws.append(head)
    for node in rej_get['returndata']['wdnodes'][0]['nodes']:
        cname=node['cname']+'（{}）'.format(node['unit'])
        exp=node['exp']
        code=node['code']
        data_list=[code,cname,exp]
        for datanode in rej_get['returndata']['datanodes']:
            if code in datanode['code']:
                data_list.append(round(datanode['data']['data'],2))
        ws.append(data_list)
    name=path.split('/')[-2]
    # print('{}{}（最近{}年）.xlsx 已获取完毕！'.format(path,name,id_sj[4:]))
    wb.save('{}{}（最近{}年）.xlsx'.format(path,name,id_sj[4:]))

# 获取目录树节点参数
def tree(id_zb,root,id_sj):
    data={'id':id_zb,
        'dbcode':'hgnd',
        'wdcode':'zb',
        'm':'getTree'}
    while True:
        try:
            res=requests.post(url,data=data,headers=headers,verify=False)
            break
        except requests.exceptions.ConnectionError:
            print('网络异常，3秒钟后重试...')
            time.sleep(3)
    res.encoding='utf-8-sig'
    try:
        rej=res.json()
    except json.decoder.JSONDecodeError:
        print('80')
        return(print('连接中断，请切换IP。'))
    if rej==[]:
        if os.path.exists(root)==False:
            os.makedirs(root)
        if get_data(id_zb,id_sj,root)=='连接中断，请切换IP。':
            print('连接中断，请切换IP。')
            return('fail')
    for r in rej:
        name=r['name']
        path=root+name+'/'
        id_zb=r['id']
        data={'id':id_zb,
            'dbcode':'hgnd',
            'wdcode':'zb',
            'm':'getTree'}
        if r['isParent']==True:
            tree(id_zb,path,id_sj)
        else:
            if os.path.exists(path)==False:
                os.makedirs(path)
            if get_data(id_zb,id_sj,path)=='连接中断，请切换IP。':
                print('连接中断，请切换IP。')
                return('fail')

# 获取年度指标项目名称目录文件
def get_tree_file(data,root):
    while True:
        try:
            res=requests.post(url,data=data,headers=headers,verify=False)
            break
        except requests.exceptions.ConnectionError:
            print('网络异常，3秒钟后重试...')
            time.sleep(3)
    res.encoding='utf-8-sig'
    try:
        rej=res.json()
    except json.decoder.JSONDecodeError:
        print('117')
        return(print('连接中断，请切换IP。'))
    for r in rej:
        name=r['name']
        path=root+name+'/'
        id=r['id']
        data={'id':id,
            'dbcode':'hgnd',
            'wdcode':'zb',
            'm':'getTree'}
        with open('./年度指标项目名称目录.txt','a') as f:
            print(path,'id:',id,file=f)
        if r['isParent']==True:
            get_tree_file(data,path)

# 读取本地目录文件节点信息
def file_get_path(id_zb):
    if os.path.exists('年度指标项目名称目录.txt')==True:
        with open('年度指标项目名称目录.txt','r') as f:
            for line in f.readlines():
                if line.strip('\n').split(' ')[2]==id_zb:
                    return(line.split(' ')[0])
            return False
    else:
        print("'年度指标项目名称目录.txt'文件不存在，请先下载，或复制到程序当前目录中。")
        return('no file')

# 用户输入获取选项并输入错误处理
def input_to_get():
    id_zb=input('请对照 “年度指标项目名称目录.txt” 文件，输入您要获取的指标项目名称对应的 id 号（输入“zb”获取全部）：')
    if file_get_path(id_zb)=='no file':
        return
    while True:
        path=file_get_path(id_zb)
        if path!=False or id_zb=='zb':
            break
        else:
            id_zb=input('id号匹配失败，请确认“年度指标项目名称目录.txt” 文件未作改动且id号输入正确，请重新输入:')
    input_sj=str(input('请选择您要获取的时间段序号（1、最近5年；  2、最近10年；  3、最近20年）：'))
    while True:
        try:
            id_sj=input_sj_dict[input_sj]
            break
        except KeyError:
            input_sj=input('时间段序号输入有误，请重新输入:')
    if id_zb=='zb':
        path='指标/'
    print(path)
    if tree(id_zb,path,id_sj)=='fail':
        print('fail')
        return
    if input('数据获取完毕，输入“y”继续获取，输入其他退出。')=='y':
        input_to_get()

input_sj_dict={'1':'LAST5','2':'LAST10','3':'LAST20'}
choice_get_tree=input('\n请问是否需要下载年度指标项目名称目录文件？ 输入 “y” 下载，输入其他返回（第一次运行请下载）：')
if choice_get_tree=='y':
    print('请稍候，正在获取年度指标项目名称目录，可能要花几分钟时间...')
    get_tree_file(data,root)
    print('年度指标项目名称目录获取完毕，存放在 “./年度指标项目名称目录.txt” 文件中，请查看。（请勿做改动！）')
    input_to_get()
else:
    input_to_get()

