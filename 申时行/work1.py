def creat():
    id = input('输入工号')
    name = input('输入姓名')
    sex = input('输入性别')
    age = input('输入年龄')
    hight = input('输入身高')
    list = [id, name, sex, age, hight]
    print("工号是", id, "姓名是", name, "性别是", sex, "年龄是", age, "身高是", hight)


def update():
    id1 = input('输入修改后的工号')
    name1 = input('输入修改后的姓名')
    sex1 = input('输入修改后的性别')
    age1 = input('输入修改后的年龄')
    hight1 = input('输入修改后的身高')
    list1 = [id1, name1, sex1, age1, hight1]
    print("工号是", id1, "姓名是", name1, "性别是", sex1, "年龄是", age1, "身高是", hight1)


def delete():
    id1 = input('输入查询的工号')
    name1 = input('输入查询的姓名')
    sex1 = input('输入查询的性别')
    age1 = input('输入查询的年龄')
    hight1 = input('输入查询的身高')
    list1 = [id1, name1, sex1, age1, hight1]
    print("工号是", id1, "姓名是", name1, "性别是", sex1, "年龄是", age1, "身高是", hight1)
    del list1


if __name__ == '__main__':
    number = 'admin'
    pwd = '123456'
    a = '员工创建'
    b = '员工修改资料'
    d = '员工删除'
    i = 1
    while True:
        while (i < 4):
            number1 = input('输入账号:')
            if number != number1:
                print('用户名错误')
                i = i + 1
                continue
            pwd1 = input('请输入密码:')
            if pwd == pwd1:
                print('登录成功')
                print('请输入"员工创建"或"员工修改资料"或"员工删除"，否则请直接回车')
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
                # else:
                # print('结束操作')
                continue
            else:
                print('密码错误')
                i = i + 1
            continue
        print('登录失败')
        break
