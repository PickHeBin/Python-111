import requests
import re
import json

response = requests.get('https://data.163.com/special/datablog/')
text = response.text
text = text.replace('\n','')
text = text.replace(' ','')
rex = re.search('hnofuchlist=(.*);ohnofuchlist.pop',text)
wyjs = rex.group(1)
print(json.dumps(wyjs,ensure_ascii=False))
