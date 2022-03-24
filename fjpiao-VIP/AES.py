import base64
from Crypto.Cipher import AES


# 需要补位，str不是16的倍数那就补足为16的倍数
def add_to_16(value):
    while len(value) % 16 != 0:
        value += '\0'
    return str.encode(value)


# 加密方法
def aes_encrypt(key, t, iv):
    pad = 16 - len(t) % 16
    t = t + chr(2) * pad
    # 创建 AES对象
    encryptor = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    # AES 进行加密
    encryptor_str = encryptor.encrypt(t.encode())
    encrypted_text = base64.b64encode(encryptor_str).decode()
    return encrypted_text


# 解密方法
def aes_decrypt(key, t, iv):
    cryptor = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    plain_text = cryptor.decrypt(base64.b64decode(t))
    return plain_text.decode()


if __name__ == '__main__':
    secret_key = '0CoJUm6Qyw8W8jud'  # 密钥
    text = '{"ids":"[1899079967]","level":"standard","encodeType":"aac","csrf_token":""}'  # 加密对象
    iv = '0102030405060708'  # 初始向量
    encrypted_str = aes_encrypt(secret_key, text, iv)
    print('加密字符串：', encrypted_str)
    decrypted_str = aes_decrypt(secret_key, encrypted_str, iv)
    print('解密字符串：', decrypted_str)

# 加密字符串：lAVKvkQh+GtdNpoKf4/mHA==
# 解密字符串：I love Python!

# js代码
# // 引用 crypto-js 加密模块
# var CryptoJS = require('crypto-js')
# var text = "I love Python!"       // 待加密对象
# var aesKey = "6f726c64f2c2057c"   // 密钥，16 倍数
# var aesIv = "0123456789ABCDEF"    // 偏移量，16 倍数
# function tripleAesEncrypt() {
#     var key = CryptoJS.enc.Utf8.parse(aesKey),
#         iv = CryptoJS.enc.Utf8.parse(aesIv),
#         srcs = CryptoJS.enc.Utf8.parse(text),
#         // CBC 加密方式，Pkcs7 填充方式
#         encrypted = CryptoJS.AES.encrypt(srcs, key, {
#             iv: iv,
#             mode: CryptoJS.mode.CBC,
#             padding: CryptoJS.pad.Pkcs7
#         });
#     return encrypted.toString();
# }
#
# function tripleAesDecrypt() {
#     var key = CryptoJS.enc.Utf8.parse(aesKey),
#         iv = CryptoJS.enc.Utf8.parse(aesIv),
#         srcs = encryptedData,
#         // CBC 加密方式，Pkcs7 填充方式
#         decrypted = CryptoJS.AES.decrypt(srcs, key, {
#             iv: iv,
#             mode: CryptoJS.mode.CBC,
#             padding: CryptoJS.pad.Pkcs7
#         });
#     return decrypted.toString(CryptoJS.enc.Utf8);
# }
#
#
# var encryptedData = tripleAesEncrypt()
# var decryptedData = tripleAesDecrypt()
#
# console.log("加密字符串: ", encryptedData)
# console.log("解密字符串: ", decryptedData)
#
# // 加密字符串:  dZL7TLJR786VGvuUvqYGoQ==
# // 解密字符串:  I love Python!
