"""
熟悉selenium应用


"""
from selenium import webdriver
import time
import csv


def drop_down():
    """
    下拉
    """
    js = 'var q= document.documentElement.scrollTop=10000'
    wb.execute_script(js)
    time.sleep(5)
def next_page():
    """
    翻页
    """
    wb.find_element_by_xpath('//*[@id="J_bottomPage"]/span[1]/a[9]/em').click()
    time.sleep(5)

def save_date():
    """
    保存
    """
    f = open(f'{word}.csv', mode='a', encoding='utf-8', newline='')
    csv_writer = csv.DictWriter(f, fieldnames=['price', 'introduction', 'icon'])
    csv_writer.writeheader()  # 写入表头

    lis = wb.find_elements_by_css_selector('.gl-item')
    for li in lis:
        price = li.find_element_by_css_selector('.p-price i').text
        if price:   # 判断不为空值
            price = price
        else:    # 如果为空，设置为0
            price = 0
        introduction = li.find_element_by_css_selector('.p-name em').text
        if introduction:
            introduction = introduction
        else:
            introduction = ''
        icon = li.find_element_by_css_selector('.J_im_icon a').text
        if icon:
            icon = icon
        else:
            icon = ''
        print(price, introduction, icon)
        date = {
            'price': price,
            'introduction': introduction,
            'icon': icon,
        }
        csv_writer.writerow(date)
    time.sleep(5)

if __name__ == '__main__':
    wb = webdriver.Chrome()  # 建立浏览器对象
    wb.get('https://www.jd.com/')  # 访问京东网站
    # wb.maximize_window()  # 最大化窗口
    word = input("请输入你要查找的物品：")  # 输入要查找的物品
    wb.find_element_by_xpath('//*[@id="key"]').send_keys(word)
    wb.find_element_by_xpath('//*[@id="search"]/div/div[2]/button/i').click()
    # 将页面滚动条拖到底部
    time.sleep(3)
    # wb.implicitly_wait(10)
    i = 0
    while i < 10:   # 循环翻10页
        drop_down()
        save_date()
        next_page()
        i += 1
    wb.quit()   # 退出浏览器