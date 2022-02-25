from gmssl import sm2
import base64

# 16 进制的公钥和私钥
# private_key = '00B9AB0B828FF68872F21A837FC303668428DEA11DCD1B24429D0C99E24EED83D5'
# public_key = 'B9C9A6E04E9C91F7BA880429273747D7EF5DDEB0BB2FF6317EB00BEF331A83081A6994B8993F3F5D6EADDDB81872266C87C018FB4162F5AF347B483E24620207'
private_key = '009c4a35d9aca4c68f1a3fa89c93684347205a4d84dc260558a049869709ac0b42'
public_key = '04429ac3742d737d4b1bf8533c714f96b88ab809ff9f34d697c2e24712f0e22422494232ba0969b45c4d91d0a2357717be4a931fbf5187f036b04154ea18de2b79'
sm2_crypt = sm2.CryptSM2(public_key=public_key, private_key=private_key)
# 待加密数据和加密后数据为 bytes 类型
data = 'appCode=T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ&data={"pageNum":"2","pageSize":"10","regnCode":"110000"}&encType=SM4&signType=SM2&timestamp=1645082648&version=1.0.0&key=NMVFVILMKT13GEMD3BKPKCTBOQBPZR2P'.encode()
enc_data = sm2_crypt.encrypt(data)
# dec_data = sm2_crypt.decrypt(enc_data)
print('enc_data: ', enc_data.hex())
data = enc_data.hex()
a = base64.b64encode(data.encode())
print(a)
# print('dec_data: ', dec_data)
