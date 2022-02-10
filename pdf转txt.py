from docx import Document
from pdfminer.layout import LAParams
from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.converter import PDFPageAggregator
from pdfminer.pdfpage import PDFTextExtractionNotAllowed, PDFPage
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter

# 打开原文件
fp = open(r'C:\Users\Administrator\Downloads\“三不”一体推进__深化正风肃纪反腐_钟敏__绵阳日报社融媒体记者__谢艳.pdf', 'rb')

# 文档分析器
parser = PDFParser(fp)
# 创建pdf文件连接分析器
doc = PDFDocument(parser)
# 检查原文件可否转换
if not doc.is_extractable:
    raise PDFTextExtractionNotAllowed
else:
    # 资源管理器
    rsrcmagr = PDFResourceManager()
    # 参数对象
    laparams = LAParams()
    # 聚合器
    device = PDFPageAggregator(rsrcmagr, laparams=laparams)
    # 解释器
    interpreter = PDFPageInterpreter(rsrcmagr, device)
    f = open('2.txt',mode='a',encoding='utf8') #将文本信息存储到txt中
    # 逐页分析原文件
    for page in PDFPage.create_pages(doc):
        interpreter.process_page(page)
        # 取得每一页的结果
        layout = device.get_result()
        # 分析每一页的每个对象
        for x in layout:
            try:
                # 得到文本
                result = x.get_text()
                print(result)
                # 将文本写入存储文档
                f.write(result+'\n')
            except:
                pass
    # 保存
    f.close()
