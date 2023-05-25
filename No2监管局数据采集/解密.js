var CryptoJS = require('crypto-js')

 function h(t) {

       var  f = CryptoJS.enc.Utf8.parse("jo8j9wGw%6HbxfFn")
        var m = CryptoJS.enc.Utf8.parse("0123456789ABCDEF");

            var e = CryptoJS.enc.Hex.parse(t)
              , n = CryptoJS.enc.Base64.stringify(e)
              , a = CryptoJS.AES.decrypt(n, f, {
                iv: m,
                mode: CryptoJS.mode.CBC,
                padding:CryptoJS.pad.Pkcs7
            })
              , r = a.toString(CryptoJS.enc.Utf8);
            return r.toString()
        }