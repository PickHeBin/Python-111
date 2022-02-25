def creat():
    id = input('输入工号 ')
    name = input('输入姓名 ')
    #sex = input('输入性别 ')
    while True:
        sex = input('输入性别 ')
        if sex != '男' and sex != '女':
            print('输入错误')
            continue
        else:
            break
    #age = input('输入年龄')
    while True:
        age = input('输入年龄 ')
        age = int(age)
        if age < 0 or age > 100:
            print('年龄输入有误')
            continue
        else:
            break
    hight = input('输入身高 ')
    list=[id,name,sex,age,hight]
    print("工号是", id, "姓名是", name, "性别是", sex, "年龄是", age, "身高是", hight)
def update():
    id = input('输入修改后的工号 ')
    name = input('输入修改后的姓名 ')
    # sex = input('输入性别 ')
    while True:
        sex = input('输入修改后的性别 ')
        if sex != '男' and sex != '女':
            print('输入错误')
            continue
        else:
            break
    # age = input('输入年龄')
    while True:
        age = input('输入修改后的年龄 ')
        age = int(age)
        if age < 0 or age > 100:
            print('年龄输入有误')
            continue
        else:
            break
    hight = input('输入修改后的身高')
    list1 = [id, name, sex, age, hight]
    print("工号是", id, "姓名是", name, "性别是", sex, "年龄是", age, "身高是", hight)
def delete():
    id = input('输入查询的工号')
    name = input('输入查询的姓名')
    # sex = input('输入性别 ')
    while True:
        sex = input('输入性别 ')
        if sex != '男' and sex != '女':
            print('输入错误')
            continue
        else:
            break
    # age = input('输入年龄')
    while True:
        age = input('输入年龄 ')
        age = int(age)
        if age < 0 or age > 100:
            print('年龄输入有误')
            continue
        else:
            break
    hight = input('输入查询的身高')
    list = [id, name, sex, age, hight]
    print("工号是", id, "姓名是", name, "性别是", sex, "年龄是", age, "身高是", hight)
    del list1
def search():
    id = input('输入查询的工号')


def inquire():
    while True:
        if search() == 23:
            print(list1)
        if search() == 13:
            print(list2)


if __name__ == '__main__':
    list1 = [23,'张三','男',18,168]
    list2 = [13,'李苗','女',20,170]
    number = 'admin'
    pwd = '123456'
    a = '员工创建'
    b = '员工修改资料'
    d = '员工删除'
    f = '员工搜索'
    h = '查看资料'
    i = 1
    while True:
        while(i < 4):
            number1 = input('输入账号')
            if number != number1:
                print('用户名错误')
                i = i + 1
                continue
            pwd1 = input('请输入密码')
            if pwd == pwd1:
                print('登录成功')
                print('请输入"员工创建、员工修改资料、员工删除、员工搜索"，否则请直接回车')
                change = input('输入操作')
                if change == a:
                    creat()
                    print('创建成功')
                if change == b:
                    update()
                    print('修改成功')
                if change == d:
                    delete()
                    print('删除成功')
                if change == f:
                    search()
                    print('请输入"查看资料、修改资料、删除资料"，否则请直接回车')
                    change1 = input('选择操作')
                    while True:
                        if change1 == '查看资料':
                            inquire()
                        if change1 == '修改资料':
                            update()
                        if change1 == '删除资料':
                            delete()
                        else:
                            break
                #else:
                    #print('结束操作')
                continue
            else:
                print('密码错误')
                i = i + 1
            continue
        print('登录失败')
        break



