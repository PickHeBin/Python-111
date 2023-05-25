const { JSDOM } = require('jsdom')
const dom = new JSDOM('<!DOCTYPE html><p> hello </p>', {url:'https://bj.ke.com/'})
window = dom.window
document = window.document
location = window.location
navigator = window.navigator

// 单文件webpack
// 1. webpack资源 加载器进行调用
// 2. 模块 []   {}
var let123;
var bbbb;
!function(n) {
    var r = {};
    function i(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, i),
        e.l = !0,
        e.exports
    }
    i.m = n,
    i.c = r,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "/",
    i(i.s = 20)
    let123 = i;
}(
    [function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "scene", function() {
        return L
    }),
    n.d(e, "withCredentialDomain", function() {
        return M
    }),
    n.d(e, "APIEndpoint", function() {
        return r
    }),
    n.d(e, "PasswordAPIEndpoint", function() {
        return o
    }),
    n.d(e, "captchaDomain", function() {
        return a
    }),
    n.d(e, "captchaJSAddr", function() {
        return u
    }),
    n.d(e, "APIDomainKe", function() {
        return h
    }),
    n.d(e, "APIDomainDeyoulife", function() {
        return d
    }),
    n.d(e, "APIDomainLianjia", function() {
        return g
    }),
    n.d(e, "mainAuthMethodName", function() {
        return v
    }),
    n.d(e, "TitleEnum", function() {
        return b
    }),
    n.d(e, "allianceMethods", function() {
        return x
    }),
    n.d(e, "SupportedIdentityCheckMethodsEnum", function() {
        return E
    }),
    n.d(e, "accountSystem", function() {
        return _
    }),
    n.d(e, "smsTypeEnum", function() {
        return k
    }),
    n.d(e, "SceneKey", function() {
        return D
    }),
    n.d(e, "AuthStatus", function() {
        return O
    }),
    n.d(e, "Gender", function() {
        return I
    }),
    n.d(e, "Views", function() {
        return j
    });
    var r, i, o, s, a, c, u, l, h, f, d, p, g, m, v, y, b, w, x, T, E, S, _, A, k, C, D, N, O, R, I, P, j, B, L = ["0x6c", "0x6f", "0x67", "0x69", "0x6e", "0x5f", "0x73", "0x6c", "0x69", "0x64", "0x65", "0x72"].map(function(t) {
        return String.fromCharCode(Number(t))
    }).reduce(function(t, e) {
        return t + e
    }), M = ["ke.com", "lianjia.com", "deyoulife.com"];
    (i = r = r || {}).init = "/authentication/initialize",
    i.auth = "/authentication/authenticate",
    i.sms = "/authentication/mfa/sms",
    i.getinfo = "/serviceValidate",
    i.register = "/registration/register",
    i.logout = "/authentication/destroy",
    i.userLogout = "/logout",
    i.qr = "/qrcode",
    i.polling = "/qrcode/status",
    (s = o = o || {}).init = "/authentication/password/initialize",
    s.change = "/authentication/password",
    s.reset = "/authentication/reset-password",
    s.validate = "/authentication/password/action/validate",
    (c = a = a || {}).dev = "//test3-captcha.lianjia.com",
    c.test = "//test3-captcha.lianjia.com",
    c.prod = "https://captcha.lianjia.com",
    c.preview = "https://captcha.lianjia.com",
    (l = u = u || {}).dev = "//test-s1.ljcdn.com/test-captcha-js-sdk-v2/captcha.js",
    l.test = "//test-s1.ljcdn.com/test-captcha-js-sdk-v2/captcha.js",
    l.prod = "https://s1.ljcdn.com/captcha-js-sdk-v2/captcha.js",
    l.preview = "https://s1.ljcdn.com/captcha-js-sdk-v2/captcha.js",
    (f = h = h || {}).dev = "http://alps-passport.login-dev.tta.test.ke.com",
    f.test = "https://test-clogin.ke.com",
    f.prod = "https://clogin.ke.com",
    f.preview = "https://clogin.ke.com",
    (p = d = d || {}).dev = "http://alps-passport.login-dev.tta.test.ke.com",
    p.test = "https://test-clogin.ke.com",
    p.prod = "https://clogin.ke.com",
    p.preview = "https://clogin.ke.com",
    (m = g = g || {}).dev = "http://alps-passport.login-dev.tta.test.ke.com",
    m.test = "https://test-clogin.lianjia.com",
    m.prod = "https://clogin.lianjia.com",
    m.preview = "https://clogin.lianjia.com",
    (y = v = v || {}).PASSWORD = "username-password",
    y.QR = "qrcode",
    y.PHONE = "phone-code",
    (w = b = b || {})["username-password"] = "账号密码登录",
    w.qrcode = "二维码登录",
    w["phone-code"] = "短信验证码登录",
    (T = x = x || {}).security = "security-code",
    T.shield = "shield-code",
    (S = E = E || {}).id_num = "id-num",
    S.security_code = "security-code",
    S.old_password = "old-password",
    S.security_code_id_num = "security-code&id-num",
    (A = _ = _ || {}).commerceSeller = "commerce-seller",
    A.customer = "customer",
    A.employee = "employee",
    A.guangsha = "guangsha",
    A.rentSaas = "rent-saas",
    (C = k = k || {}).sms = "sms",
    C.voice = "voice",
    (N = D = D || {}).DEFAULT = "DEFAULT",
    N.WHEN_LOGIN = "WHEN_LOGIN",
    N.WHEN_VALIDATE_PASSWORD = "WHEN_VALIDATE_PASSWORD",
    N.WHEN_REGISTER = "WHEN_REGISTER",
    N.WHEN_RESET_PASSWORD = "WHEN_RESET_PASSWORD",
    N.WHEN_LOGOUT = "WHEN_LOGOUT",
    N.WHEN_SEND_SMS = "WHEN_SEND_SMS",
    N.WHEN_RESET_PASSWORD_SEND_SMS = "WHEN_RESET_PASSWORD_SEND_SMS",
    (R = O = O || {}).PASS = "PASS",
    R.WARN = "WARN",
    (P = I = I || {}).MALE = "MALE",
    P.FEMALE = "FEMALE",
    (B = j = j || {})[B.passwordlogin = 0] = "passwordlogin",
    B[B.smslogin = 1] = "smslogin",
    B[B.resetpassword = 2] = "resetpassword",
    B[B.register = 3] = "register",
    e.default = {
        scene: L,
        APIEndpoint: r,
        PasswordAPIEndpoint: o,
        captchaDomain: a,
        captchaJSAddr: u,
        mainAuthMethodName: v,
        TitleEnum: b,
        allianceMethods: x,
        accountSystem: _,
        Gender: I,
        SceneKey: D,
        AuthStatus: O,
        APIDomainKe: h,
        APIDomainLianjia: g,
        Views: j
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "loadScriptWithPromise", function() {
        return f
    }),
    n.d(e, "commonValidator", function() {
        return d
    }),
    n.d(e, "triggerInput", function() {
        return p
    }),
    n.d(e, "maskPhoneNumber", function() {
        return g
    }),
    n.d(e, "ulog", function() {
        return m
    }),
    n.d(e, "fetch", function() {
        return v
    }),
    n.d(e, "Xml2Json", function() {
        return y
    }),
    n.d(e, "parseUserInfo", function() {
        return b
    }),
    n.d(e, "cookie", function() {
        return w
    }),
    n.d(e, "getEnv", function() {
        return x
    }),
    n.d(e, "parseURL", function() {
        return T
    }),
    n.d(e, "env", function() {
        return E
    }),
    n.d(e, "plat", function() {
        return S
    }),
    n.d(e, "withCredential", function() {
        return _
    }),
    n.d(e, "getQuery", function() {
        return A
    });
    var r = n(7)
      , o = n.n(r)
      , i = n(4)
      , a = n.n(i);
    a.a.defaults.withCredentials = !0;
    function s(t) {
        var e = document.createElement("b");
        return e.innerHTML = "\x3c!--[if IE " + t + "]><i></i><![endif]--\x3e",
        1 === e.getElementsByTagName("i").length
    }
    function c(s) {
        return window.XDomainRequest ? new Promise(function(e, n) {
            var t = s.method || "GET"
              , r = s.timeout || 3e4
              , i = s.data || s.params || {};
            i instanceof Object && (i = JSON.stringify(i));
            var o = new window.XDomainRequest;
            o.open(t, s.url),
            o.timeout = r,
            o.onload = function() {
                try {
                    var t = JSON.parse(o.responseText);
                    return e(t.data)
                } catch (t) {
                    n(t)
                }
                return n({})
            }
            ,
            o.onprogress = function() {}
            ,
            o.ontimeout = function() {
                return n("XDomainRequest timeout")
            }
            ,
            o.onerror = function() {
                return n("XDomainRequest error")
            }
            ,
            setTimeout(function() {
                o.send(i)
            }, 0)
        }
        ) : a()(s)
    }
    var u, l, h, f = function(i) {
        return new Promise(function(t, e) {
            var n = o()(i);
            if (document.querySelector("#md5" + n))
                return t(!0);
            var r = document.createElement("script");
            r.src = i,
            r.id = "md5" + n,
            r.addEventListener("load", function() {
                t(!0)
            }),
            document.head.appendChild(r)
        }
        )
    }, d = {
        mail: function(t) {
            return /.*\@.+\..+/.test(t)
        },
        mobile: function(t) {
            return /1\d{10}/.test(t)
        },
        pasword: function(t) {
            return /(?!^[0-9]+$)(?!^[A-Za-z]+$)(?!^[_\-+=(){},.;!~'@#$%^&*]+$).{8,}/.test(t)
        }
    }, p = function(t, e) {
        var n = document.querySelector(t);
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set.call(n, e);
        var r = new Event("input",{
            bubbles: !0
        });
        n.dispatchEvent(r)
    }, g = function(t) {
        return t.slice(0, 3) + "****" + t.slice(7, t.length)
    }, m = function() {}, v = function(t) {
        return (t.url && function(t) {
            var e = /^(https?):\/\/([a-zA-Z\.\-\_]+)\/?(:\d+)?/.exec(t)
              , n = /^(https?):\/\/([a-zA-Z\.\-\_]+)\/?(:\d+)?/.exec(window.location.href)
              , r = !1;
            return null !== e && null !== n && (r = e[1] === n[1] && e[2] === n[2] && e[3] === n[3]),
            r
        }(t.url) && (s(9) || s(8) || s(7) || s(6) || s(5) || s(4)) ? c : a.a)(t)
    }, y = function t(e) {
        var n = {};
        if (e.nodeType === Node.ELEMENT_NODE) {
            var r = e.attributes;
            if (0 < r.length)
                for (var i = 0; i < r.length; i++)
                    n["@" + r[i].nodeName] = r[i].value
        } else
            e.nodeType === Node.TEXT_NODE && (n = "" === e.nodeValue.replace(/[\ +\r\n]/g, "") ? "" : e.nodeValue);
        if (e.hasChildNodes())
            for (var o = e.childNodes, s = 0; s < o.length; s++) {
                var a = o[s].nodeName;
                if (void 0 === n[a]) {
                    "" !== (u = t(o[s])) && (n[a] = u)
                } else {
                    if (void 0 === n[a].push) {
                        var c = n[a];
                        n[a] = [],
                        n[a].push(c)
                    }
                    var u;
                    "" !== (u = t(o[s])) && n[a].push(u)
                }
            }
        return n
    }, b = function(t) {
        return {
            username: t["cas:serviceResponse"]["cas:authenticationSuccess"]["cas:attributes"]["cas:displayName"]["#text"],
            ucid: t["cas:serviceResponse"]["cas:authenticationSuccess"]["cas:attributes"]["cas:ucid"]["#text"]
        }
    }, w = {
        set: function(t, e, n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
            var i = "expires=" + r.toUTCString();
            document.cookie = t + "=" + e + ";" + i + ";path=/"
        },
        get: function(t) {
            for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r]; " " == i.charAt(0); )
                    i = i.substring(1);
                if (0 == i.indexOf(e))
                    return i.substring(e.length, i.length)
            }
            return ""
        }
    }, x = function(t) {
        var e = T(window.location.href);
        return /dev/.test(t) || /^http:\/\/localhost/.test(e.url) || "127.0.0.1" === e.host ? "dev" : /test/.test(t) ? "test" : "prod"
    }, T = function(t) {
        if (!t)
            return null;
        var e = ["url", "origin", "scheme", "slash", "host", "port", "path", "query", "hash"]
          , n = /^((?:([A-Za-z]+)?:?(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?)(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(t)
          , r = {};
        if (null !== n)
            for (var i = 0, o = e.length; i < o; i += 1)
                r[e[i]] = n[i] || "";
        return r
    }, E = (u = T(window.location.href).host,
    x(u)), S = (l = T(window.location.href).host,
    /lianjia/.test(l) ? "lianjia" : "ke"), _ = (h = T(window.location.href).host,
    !!(/^(.*\.)?lianjia\.com/.test(h) || /^(.*\.)?ke\.com/.test(h) || /^(.*\.)?deyoulife\.com/.test(h))), A = function(t, e) {
        var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
          , r = e.split("?")[1].match(n);
        return null != r ? r[2] : null
    };
    "prod" !== E && (window.fillValueToEl || (window.fillValueToEl = function(t, e) {
        return p(e, t)
    }
    )),
    e.default = {
        loadScriptWithPromise: f,
        md5: o.a,
        triggerInput: p,
        commonValidator: d,
        maskPhoneNumber: g,
        ulog: m,
        fetch: v,
        parseUserInfo: b,
        cookie: w,
        getQuery: A
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "makeParam", function() {
        return o
    }),
    n.d(e, "sendFee", function() {
        return r
    });
    var o = function(e) {
        var n = "";
        try {
            n = JSON.stringify(e.detail)
        } catch (t) {
            n = Object.prototype.toString.call(e.detail)
        }
        return {
            type: "error",
            common: {
                pid: e.pid,
                uuid: e.uuid,
                ucid: e.ucid,
                is_test: "test" === e.env,
                record: {
                    time_on_page: !0,
                    performance: !0,
                    js_error: !0,
                    js_error_report_config: {
                        ERROR_RUNTIME: !0,
                        ERROR_SCRIPT: !0,
                        ERROR_STYLE: !0,
                        ERROR_IMAGE: !0,
                        ERROR_AUDIO: !0,
                        ERROR_VIDEO: !0,
                        ERROR_CONSOLE: !0,
                        ERROR_TRY_CATCH: !0
                    }
                },
                version: "1.0.0",
                timestamp: Date.now(),
                runtime_version: e.version,
                sdk_version: "1.3.0",
                page_type: e.pageUrl || "/"
            },
            code: 8,
            extra: {
                desc: n
            },
            detail: {
                error_no: e.errorName || "unknown_error",
                url: e.pageUrl || "",
                http_code: 0,
                during_ms: 0,
                request_size_b: 0,
                response_size_b: 0
            }
        }
    }
      , r = function(t) {
        var e = t.errorName
          , n = t.detail
          , r = o({
            detail: n,
            env: /test/.test(window.location.href) ? "test" : "prod",
            errorName: e,
            pid: "pc_login_sdk",
            ucid: 1,
            uuid: "",
            version: "1.2.0"
        })
          , i = "https://dig.lianjia.com/fee.gif?d=" + encodeURIComponent(JSON.stringify(r));
        try {
            new Image(0,0).src = i
        } catch (t) {}
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(11)
      , r = n(33)
      , o = Object.prototype.toString;
    function s(t) {
        return "[object Array]" === o.call(t)
    }
    function a(t) {
        return null !== t && "object" == typeof t
    }
    function c(t) {
        return "[object Function]" === o.call(t)
    }
    function u(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
            s(t))
                for (var n = 0, r = t.length; n < r; n++)
                    e.call(null, t[n], n, t);
            else
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
    }
    t.exports = {
        isArray: s,
        isArrayBuffer: function(t) {
            return "[object ArrayBuffer]" === o.call(t)
        },
        isBuffer: r,
        isFormData: function(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isObject: a,
        isUndefined: function(t) {
            return void 0 === t
        },
        isDate: function(t) {
            return "[object Date]" === o.call(t)
        },
        isFile: function(t) {
            return "[object File]" === o.call(t)
        },
        isBlob: function(t) {
            return "[object Blob]" === o.call(t)
        },
        isFunction: c,
        isStream: function(t) {
            return a(t) && c(t.pipe)
        },
        isURLSearchParams: function(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: u,
        merge: function n() {
            var r = {};
            function t(t, e) {
                "object" == typeof r[e] && "object" == typeof t ? r[e] = n(r[e], t) : r[e] = t
            }
            for (var e = 0, i = arguments.length; e < i; e++)
                u(arguments[e], t);
            return r
        },
        deepMerge: function n() {
            var r = {};
            function t(t, e) {
                "object" == typeof r[e] && "object" == typeof t ? r[e] = n(r[e], t) : r[e] = "object" == typeof t ? n({}, t) : t
            }
            for (var e = 0, i = arguments.length; e < i; e++)
                u(arguments[e], t);
            return r
        },
        extend: function(n, t, r) {
            return u(t, function(t, e) {
                n[e] = r && "function" == typeof t ? i(t, r) : t
            }),
            n
        },
        trim: function(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}
, function(t, e, n) {
    t.exports = n(32)
}
, function(t, e, n) {
    !function(t) {
        "use strict";
        var e = "0123456789abcdefghijklmnopqrstuvwxyz";
        function c(t) {
            return e.charAt(t)
        }
        function n(t, e) {
            return t & e
        }
        function u(t, e) {
            return t | e
        }
        function r(t, e) {
            return t ^ e
        }
        function i(t, e) {
            return t & ~e
        }
        function o(t) {
            if (0 == t)
                return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16,
            e += 16),
            0 == (255 & t) && (t >>= 8,
            e += 8),
            0 == (15 & t) && (t >>= 4,
            e += 4),
            0 == (3 & t) && (t >>= 2,
            e += 2),
            0 == (1 & t) && ++e,
            e
        }
        function s(t) {
            for (var e = 0; 0 != t; )
                t &= t - 1,
                ++e;
            return e
        }
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function l(t) {
            var e, n, r = "";
            for (e = 0; e + 3 <= t.length; e += 3)
                n = parseInt(t.substring(e, e + 3), 16),
                r += a.charAt(n >> 6) + a.charAt(63 & n);
            for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
            r += a.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
            r += a.charAt(n >> 2) + a.charAt((3 & n) << 4)); 0 < (3 & r.length); )
                r += "=";
            return r
        }
        function h(t) {
            var e, n = "", r = 0, i = 0;
            for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                var o = a.indexOf(t.charAt(e));
                o < 0 || (r = 0 == r ? (n += c(o >> 2),
                i = 3 & o,
                1) : 1 == r ? (n += c(i << 2 | o >> 4),
                i = 15 & o,
                2) : 2 == r ? (n += c(i),
                n += c(o >> 2),
                i = 3 & o,
                3) : (n += c(i << 2 | o >> 4),
                n += c(15 & o),
                0))
            }
            return 1 == r && (n += c(i << 2)),
            n
        }
        var f, d = function(t, e) {
            return (d = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            )(t, e)
        };
        var p, g = {
            decode: function(t) {
                var e;
                if (void 0 === f) {
                    var n = "0123456789ABCDEF"
                      , r = " \f\n\r\t \u2028\u2029";
                    for (f = {},
                    e = 0; e < 16; ++e)
                        f[n.charAt(e)] = e;
                    for (n = n.toLowerCase(),
                    e = 10; e < 16; ++e)
                        f[n.charAt(e)] = e;
                    for (e = 0; e < r.length; ++e)
                        f[r.charAt(e)] = -1
                }
                var i = []
                  , o = 0
                  , s = 0;
                for (e = 0; e < t.length; ++e) {
                    var a = t.charAt(e);
                    if ("=" == a)
                        break;
                    if (-1 != (a = f[a])) {
                        if (void 0 === a)
                            throw new Error("Illegal character at offset " + e);
                        o |= a,
                        2 <= ++s ? (i[i.length] = o,
                        s = o = 0) : o <<= 4
                    }
                }
                if (s)
                    throw new Error("Hex encoding incomplete: 4 bits missing");
                return i
            }
        }, m = {
            decode: function(t) {
                var e;
                if (void 0 === p) {
                    var n = "= \f\n\r\t \u2028\u2029";
                    for (p = Object.create(null),
                    e = 0; e < 64; ++e)
                        p["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                    for (e = 0; e < n.length; ++e)
                        p[n.charAt(e)] = -1
                }
                var r = []
                  , i = 0
                  , o = 0;
                for (e = 0; e < t.length; ++e) {
                    var s = t.charAt(e);
                    if ("=" == s)
                        break;
                    if (-1 != (s = p[s])) {
                        if (void 0 === s)
                            throw new Error("Illegal character at offset " + e);
                        i |= s,
                        4 <= ++o ? (r[r.length] = i >> 16,
                        r[r.length] = i >> 8 & 255,
                        r[r.length] = 255 & i,
                        o = i = 0) : i <<= 6
                    }
                }
                switch (o) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    r[r.length] = i >> 10;
                    break;
                case 3:
                    r[r.length] = i >> 16,
                    r[r.length] = i >> 8 & 255
                }
                return r
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function(t) {
                var e = m.re.exec(t);
                if (e)
                    if (e[1])
                        t = e[1];
                    else {
                        if (!e[2])
                            throw new Error("RegExp out of sync");
                        t = e[2]
                    }
                return m.decode(t)
            }
        }, v = 1e13, y = function() {
            function t(t) {
                this.buf = [+t || 0]
            }
            return t.prototype.mulAdd = function(t, e) {
                var n, r, i = this.buf, o = i.length;
                for (n = 0; n < o; ++n)
                    (r = i[n] * t + e) < v ? e = 0 : r -= (e = 0 | r / v) * v,
                    i[n] = r;
                0 < e && (i[n] = e)
            }
            ,
            t.prototype.sub = function(t) {
                var e, n, r = this.buf, i = r.length;
                for (e = 0; e < i; ++e)
                    n = r[e] - t,
                    t = n < 0 ? (n += v,
                    1) : 0,
                    r[e] = n;
                for (; 0 === r[r.length - 1]; )
                    r.pop()
            }
            ,
            t.prototype.toString = function(t) {
                if (10 != (t || 10))
                    throw new Error("only base 10 is supported");
                for (var e = this.buf, n = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r)
                    n += (v + e[r]).toString().substring(1);
                return n
            }
            ,
            t.prototype.valueOf = function() {
                for (var t = this.buf, e = 0, n = t.length - 1; 0 <= n; --n)
                    e = e * v + t[n];
                return e
            }
            ,
            t.prototype.simplify = function() {
                var t = this.buf;
                return 1 == t.length ? t[0] : this
            }
            ,
            t
        }(), b = "…", w = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, x = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        function T(t, e) {
            return t.length > e && (t = t.substring(0, e) + b),
            t
        }
        var E, S = function() {
            function n(t, e) {
                this.hexDigits = "0123456789ABCDEF",
                t instanceof n ? (this.enc = t.enc,
                this.pos = t.pos) : (this.enc = t,
                this.pos = e)
            }
            return n.prototype.get = function(t) {
                if (void 0 === t && (t = this.pos++),
                t >= this.enc.length)
                    throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
            }
            ,
            n.prototype.hexByte = function(t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }
            ,
            n.prototype.hexDump = function(t, e, n) {
                for (var r = "", i = t; i < e; ++i)
                    if (r += this.hexByte(this.get(i)),
                    !0 !== n)
                        switch (15 & i) {
                        case 7:
                            r += "  ";
                            break;
                        case 15:
                            r += "\n";
                            break;
                        default:
                            r += " "
                        }
                return r
            }
            ,
            n.prototype.isASCII = function(t, e) {
                for (var n = t; n < e; ++n) {
                    var r = this.get(n);
                    if (r < 32 || 176 < r)
                        return !1
                }
                return !0
            }
            ,
            n.prototype.parseStringISO = function(t, e) {
                for (var n = "", r = t; r < e; ++r)
                    n += String.fromCharCode(this.get(r));
                return n
            }
            ,
            n.prototype.parseStringUTF = function(t, e) {
                for (var n = "", r = t; r < e; ) {
                    var i = this.get(r++);
                    n += i < 128 ? String.fromCharCode(i) : 191 < i && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                }
                return n
            }
            ,
            n.prototype.parseStringBMP = function(t, e) {
                for (var n, r, i = "", o = t; o < e; )
                    n = this.get(o++),
                    r = this.get(o++),
                    i += String.fromCharCode(n << 8 | r);
                return i
            }
            ,
            n.prototype.parseTime = function(t, e, n) {
                var r = this.parseStringISO(t, e)
                  , i = (n ? w : x).exec(r);
                return i ? (n && (i[1] = +i[1],
                i[1] += +i[1] < 70 ? 2e3 : 1900),
                r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
                i[5] && (r += ":" + i[5],
                i[6] && (r += ":" + i[6],
                i[7] && (r += "." + i[7]))),
                i[8] && (r += " UTC",
                "Z" != i[8] && (r += i[8],
                i[9] && (r += ":" + i[9]))),
                r) : "Unrecognized time: " + r
            }
            ,
            n.prototype.parseInteger = function(t, e) {
                for (var n, r = this.get(t), i = 127 < r, o = i ? 255 : 0, s = ""; r == o && ++t < e; )
                    r = this.get(t);
                if (0 === (n = e - t))
                    return i ? -1 : 0;
                if (4 < n) {
                    for (s = r,
                    n <<= 3; 0 == (128 & (+s ^ o)); )
                        s = +s << 1,
                        --n;
                    s = "(" + n + " bit)\n"
                }
                i && (r -= 256);
                for (var a = new y(r), c = t + 1; c < e; ++c)
                    a.mulAdd(256, this.get(c));
                return s + a.toString()
            }
            ,
            n.prototype.parseBitString = function(t, e, n) {
                for (var r = this.get(t), i = (e - t - 1 << 3) - r, o = "(" + i + " bit)\n", s = "", a = t + 1; a < e; ++a) {
                    for (var c = this.get(a), u = a == e - 1 ? r : 0, l = 7; u <= l; --l)
                        s += c >> l & 1 ? "1" : "0";
                    if (s.length > n)
                        return o + T(s, n)
                }
                return o + s
            }
            ,
            n.prototype.parseOctetString = function(t, e, n) {
                if (this.isASCII(t, e))
                    return T(this.parseStringISO(t, e), n);
                var r = e - t
                  , i = "(" + r + " byte)\n";
                (n /= 2) < r && (e = t + n);
                for (var o = t; o < e; ++o)
                    i += this.hexByte(this.get(o));
                return n < r && (i += b),
                i
            }
            ,
            n.prototype.parseOID = function(t, e, n) {
                for (var r = "", i = new y, o = 0, s = t; s < e; ++s) {
                    var a = this.get(s);
                    if (i.mulAdd(128, 127 & a),
                    o += 7,
                    !(128 & a)) {
                        if ("" === r)
                            if ((i = i.simplify())instanceof y)
                                i.sub(80),
                                r = "2." + i.toString();
                            else {
                                var c = i < 80 ? i < 40 ? 0 : 1 : 2;
                                r = c + "." + (i - 40 * c)
                            }
                        else
                            r += "." + i.toString();
                        if (r.length > n)
                            return T(r, n);
                        i = new y,
                        o = 0
                    }
                }
                return 0 < o && (r += ".incomplete"),
                r
            }
            ,
            n
        }(), _ = function() {
            function l(t, e, n, r, i) {
                if (!(r instanceof A))
                    throw new Error("Invalid tag value.");
                this.stream = t,
                this.header = e,
                this.length = n,
                this.tag = r,
                this.sub = i
            }
            return l.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                case 0:
                    switch (this.tag.tagNumber) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString"
                    }
                    return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                    return "Application_" + this.tag.tagNumber.toString();
                case 2:
                    return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                    return "Private_" + this.tag.tagNumber.toString()
                }
            }
            ,
            l.prototype.content = function(t) {
                if (void 0 === this.tag)
                    return null;
                void 0 === t && (t = 1 / 0);
                var e = this.posContent()
                  , n = Math.abs(this.length);
                if (!this.tag.isUniversal())
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                switch (this.tag.tagNumber) {
                case 1:
                    return 0 === this.stream.get(e) ? "false" : "true";
                case 2:
                    return this.stream.parseInteger(e, e + n);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                case 6:
                    return this.stream.parseOID(e, e + n, t);
                case 16:
                case 17:
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                case 12:
                    return T(this.stream.parseStringUTF(e, e + n), t);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return T(this.stream.parseStringISO(e, e + n), t);
                case 30:
                    return T(this.stream.parseStringBMP(e, e + n), t);
                case 23:
                case 24:
                    return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
                }
                return null
            }
            ,
            l.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            l.prototype.toPrettyString = function(t) {
                void 0 === t && (t = "");
                var e = t + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (e += "+"),
                e += this.length,
                this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"),
                e += "\n",
                null !== this.sub) {
                    t += "  ";
                    for (var n = 0, r = this.sub.length; n < r; ++n)
                        e += this.sub[n].toPrettyString(t)
                }
                return e
            }
            ,
            l.prototype.posStart = function() {
                return this.stream.pos
            }
            ,
            l.prototype.posContent = function() {
                return this.stream.pos + this.header
            }
            ,
            l.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            l.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            l.decodeLength = function(t) {
                var e = t.get()
                  , n = 127 & e;
                if (n == e)
                    return n;
                if (6 < n)
                    throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 == n)
                    return null;
                for (var r = e = 0; r < n; ++r)
                    e = 256 * e + t.get();
                return e
            }
            ,
            l.prototype.getHexStringValue = function() {
                var t = this.toHexString()
                  , e = 2 * this.header
                  , n = 2 * this.length;
                return t.substr(e, n)
            }
            ,
            l.decode = function(t) {
                var r;
                r = t instanceof S ? t : new S(t,0);
                var e = new S(r)
                  , n = new A(r)
                  , i = l.decodeLength(r)
                  , o = r.pos
                  , s = o - e.pos
                  , a = null
                  , c = function() {
                    var t = [];
                    if (null !== i) {
                        for (var e = o + i; r.pos < e; )
                            t[t.length] = l.decode(r);
                        if (r.pos != e)
                            throw new Error("Content size is not correct for container starting at offset " + o)
                    } else
                        try {
                            for (; ; ) {
                                var n = l.decode(r);
                                if (n.tag.isEOC())
                                    break;
                                t[t.length] = n
                            }
                            i = o - r.pos
                        } catch (t) {
                            throw new Error("Exception while decoding undefined length content: " + t)
                        }
                    return t
                };
                if (n.tagConstructed)
                    a = c();
                else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber))
                    try {
                        if (3 == n.tagNumber && 0 != r.get())
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        a = c();
                        for (var u = 0; u < a.length; ++u)
                            if (a[u].tag.isEOC())
                                throw new Error("EOC is not supposed to be actual content.")
                    } catch (t) {
                        a = null
                    }
                if (null === a) {
                    if (null === i)
                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                    r.pos = o + Math.abs(i)
                }
                return new l(e,s,i,n,a)
            }
            ,
            l
        }(), A = function() {
            function t(t) {
                var e = t.get();
                if (this.tagClass = e >> 6,
                this.tagConstructed = 0 != (32 & e),
                this.tagNumber = 31 & e,
                31 == this.tagNumber) {
                    for (var n = new y; e = t.get(),
                    n.mulAdd(128, 127 & e),
                    128 & e; )
                        ;
                    this.tagNumber = n.simplify()
                }
            }
            return t.prototype.isUniversal = function() {
                return 0 === this.tagClass
            }
            ,
            t.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            }
            ,
            t
        }(), k = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], C = (1 << 26) / k[k.length - 1], D = function() {
            function b(t, e, n) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }
            return b.prototype.toString = function(t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var e;
                if (16 == t)
                    e = 4;
                else if (8 == t)
                    e = 3;
                else if (2 == t)
                    e = 1;
                else if (32 == t)
                    e = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    e = 2
                }
                var n, r = (1 << e) - 1, i = !1, o = "", s = this.t, a = this.DB - s * this.DB % e;
                if (0 < s--)
                    for (a < this.DB && 0 < (n = this[s] >> a) && (i = !0,
                    o = c(n)); 0 <= s; )
                        a < e ? (n = (this[s] & (1 << a) - 1) << e - a,
                        n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r,
                        a <= 0 && (a += this.DB,
                        --s)),
                        0 < n && (i = !0),
                        i && (o += c(n));
                return i ? o : "0"
            }
            ,
            b.prototype.negate = function() {
                var t = P();
                return b.ZERO.subTo(this, t),
                t
            }
            ,
            b.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            b.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e)
                    return e;
                var n = this.t;
                if (0 != (e = n - t.t))
                    return this.s < 0 ? -e : e;
                for (; 0 <= --n; )
                    if (0 != (e = this[n] - t[n]))
                        return e;
                return 0
            }
            ,
            b.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + U(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            b.prototype.mod = function(t) {
                var e = P();
                return this.abs().divRemTo(t, null, e),
                this.s < 0 && 0 < e.compareTo(b.ZERO) && t.subTo(e, e),
                e
            }
            ,
            b.prototype.modPowInt = function(t, e) {
                var n;
                return n = t < 256 || e.isEven() ? new O(e) : new R(e),
                this.exp(t, n)
            }
            ,
            b.prototype.clone = function() {
                var t = P();
                return this.copyTo(t),
                t
            }
            ,
            b.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            b.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            b.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            b.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            b.prototype.toByteArray = function() {
                var t = this.t
                  , e = [];
                e[0] = this.s;
                var n, r = this.DB - t * this.DB % 8, i = 0;
                if (0 < t--)
                    for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); 0 <= t; )
                        r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r,
                        n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255,
                        r <= 0 && (r += this.DB,
                        --t)),
                        0 != (128 & n) && (n |= -256),
                        0 == i && (128 & this.s) != (128 & n) && ++i,
                        (0 < i || n != this.s) && (e[i++] = n);
                return e
            }
            ,
            b.prototype.equals = function(t) {
                return 0 == this.compareTo(t)
            }
            ,
            b.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }
            ,
            b.prototype.max = function(t) {
                return 0 < this.compareTo(t) ? this : t
            }
            ,
            b.prototype.and = function(t) {
                var e = P();
                return this.bitwiseTo(t, n, e),
                e
            }
            ,
            b.prototype.or = function(t) {
                var e = P();
                return this.bitwiseTo(t, u, e),
                e
            }
            ,
            b.prototype.xor = function(t) {
                var e = P();
                return this.bitwiseTo(t, r, e),
                e
            }
            ,
            b.prototype.andNot = function(t) {
                var e = P();
                return this.bitwiseTo(t, i, e),
                e
            }
            ,
            b.prototype.not = function() {
                for (var t = P(), e = 0; e < this.t; ++e)
                    t[e] = this.DM & ~this[e];
                return t.t = this.t,
                t.s = ~this.s,
                t
            }
            ,
            b.prototype.shiftLeft = function(t) {
                var e = P();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                e
            }
            ,
            b.prototype.shiftRight = function(t) {
                var e = P();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                e
            }
            ,
            b.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t])
                        return t * this.DB + o(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            b.prototype.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                    t += s(this[n] ^ e);
                return t
            }
            ,
            b.prototype.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }
            ,
            b.prototype.setBit = function(t) {
                return this.changeBit(t, u)
            }
            ,
            b.prototype.clearBit = function(t) {
                return this.changeBit(t, i)
            }
            ,
            b.prototype.flipBit = function(t) {
                return this.changeBit(t, r)
            }
            ,
            b.prototype.add = function(t) {
                var e = P();
                return this.addTo(t, e),
                e
            }
            ,
            b.prototype.subtract = function(t) {
                var e = P();
                return this.subTo(t, e),
                e
            }
            ,
            b.prototype.multiply = function(t) {
                var e = P();
                return this.multiplyTo(t, e),
                e
            }
            ,
            b.prototype.divide = function(t) {
                var e = P();
                return this.divRemTo(t, e, null),
                e
            }
            ,
            b.prototype.remainder = function(t) {
                var e = P();
                return this.divRemTo(t, null, e),
                e
            }
            ,
            b.prototype.divideAndRemainder = function(t) {
                var e = P()
                  , n = P();
                return this.divRemTo(t, e, n),
                [e, n]
            }
            ,
            b.prototype.modPow = function(t, e) {
                var n, r, i = t.bitLength(), o = q(1);
                if (i <= 0)
                    return o;
                n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                r = i < 8 ? new O(e) : e.isEven() ? new I(e) : new R(e);
                var s = []
                  , a = 3
                  , c = n - 1
                  , u = (1 << n) - 1;
                if (s[1] = r.convert(this),
                1 < n) {
                    var l = P();
                    for (r.sqrTo(s[1], l); a <= u; )
                        s[a] = P(),
                        r.mulTo(l, s[a - 2], s[a]),
                        a += 2
                }
                var h, f, d = t.t - 1, p = !0, g = P();
                for (i = U(t[d]) - 1; 0 <= d; ) {
                    for (c <= i ? h = t[d] >> i - c & u : (h = (t[d] & (1 << i + 1) - 1) << c - i,
                    0 < d && (h |= t[d - 1] >> this.DB + i - c)),
                    a = n; 0 == (1 & h); )
                        h >>= 1,
                        --a;
                    if ((i -= a) < 0 && (i += this.DB,
                    --d),
                    p)
                        s[h].copyTo(o),
                        p = !1;
                    else {
                        for (; 1 < a; )
                            r.sqrTo(o, g),
                            r.sqrTo(g, o),
                            a -= 2;
                        0 < a ? r.sqrTo(o, g) : (f = o,
                        o = g,
                        g = f),
                        r.mulTo(g, s[h], o)
                    }
                    for (; 0 <= d && 0 == (t[d] & 1 << i); )
                        r.sqrTo(o, g),
                        f = o,
                        o = g,
                        g = f,
                        --i < 0 && (i = this.DB - 1,
                        --d)
                }
                return r.revert(o)
            }
            ,
            b.prototype.modInverse = function(t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum())
                    return b.ZERO;
                for (var n = t.clone(), r = this.clone(), i = q(1), o = q(0), s = q(0), a = q(1); 0 != n.signum(); ) {
                    for (; n.isEven(); )
                        n.rShiftTo(1, n),
                        e ? (i.isEven() && o.isEven() || (i.addTo(this, i),
                        o.subTo(t, o)),
                        i.rShiftTo(1, i)) : o.isEven() || o.subTo(t, o),
                        o.rShiftTo(1, o);
                    for (; r.isEven(); )
                        r.rShiftTo(1, r),
                        e ? (s.isEven() && a.isEven() || (s.addTo(this, s),
                        a.subTo(t, a)),
                        s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a),
                        a.rShiftTo(1, a);
                    0 <= n.compareTo(r) ? (n.subTo(r, n),
                    e && i.subTo(s, i),
                    o.subTo(a, o)) : (r.subTo(n, r),
                    e && s.subTo(i, s),
                    a.subTo(o, a))
                }
                return 0 != r.compareTo(b.ONE) ? b.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a),
                a.signum() < 0 ? a.add(t) : a) : a
            }
            ,
            b.prototype.pow = function(t) {
                return this.exp(t, new N)
            }
            ,
            b.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone()
                  , n = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(n) < 0) {
                    var r = e;
                    e = n,
                    n = r
                }
                var i = e.getLowestSetBit()
                  , o = n.getLowestSetBit();
                if (o < 0)
                    return e;
                for (i < o && (o = i),
                0 < o && (e.rShiftTo(o, e),
                n.rShiftTo(o, n)); 0 < e.signum(); )
                    0 < (i = e.getLowestSetBit()) && e.rShiftTo(i, e),
                    0 < (i = n.getLowestSetBit()) && n.rShiftTo(i, n),
                    0 <= e.compareTo(n) ? (e.subTo(n, e),
                    e.rShiftTo(1, e)) : (n.subTo(e, n),
                    n.rShiftTo(1, n));
                return 0 < o && n.lShiftTo(o, n),
                n
            }
            ,
            b.prototype.isProbablePrime = function(t) {
                var e, n = this.abs();
                if (1 == n.t && n[0] <= k[k.length - 1]) {
                    for (e = 0; e < k.length; ++e)
                        if (n[0] == k[e])
                            return !0;
                    return !1
                }
                if (n.isEven())
                    return !1;
                for (e = 1; e < k.length; ) {
                    for (var r = k[e], i = e + 1; i < k.length && r < C; )
                        r *= k[i++];
                    for (r = n.modInt(r); e < i; )
                        if (r % k[e++] == 0)
                            return !1
                }
                return n.millerRabin(t)
            }
            ,
            b.prototype.copyTo = function(t) {
                for (var e = this.t - 1; 0 <= e; --e)
                    t[e] = this[e];
                t.t = this.t,
                t.s = this.s
            }
            ,
            b.prototype.fromInt = function(t) {
                this.t = 1,
                this.s = t < 0 ? -1 : 0,
                0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }
            ,
            b.prototype.fromString = function(t, e) {
                var n;
                if (16 == e)
                    n = 4;
                else if (8 == e)
                    n = 3;
                else if (256 == e)
                    n = 8;
                else if (2 == e)
                    n = 1;
                else if (32 == e)
                    n = 5;
                else {
                    if (4 != e)
                        return void this.fromRadix(t, e);
                    n = 2
                }
                this.t = 0,
                this.s = 0;
                for (var r = t.length, i = !1, o = 0; 0 <= --r; ) {
                    var s = 8 == n ? 255 & +t[r] : V(t, r);
                    s < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1,
                    0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o,
                    this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o,
                    (o += n) >= this.DB && (o -= this.DB))
                }
                8 == n && 0 != (128 & +t[0]) && (this.s = -1,
                0 < o && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                this.clamp(),
                i && b.ZERO.subTo(this, this)
            }
            ,
            b.prototype.clamp = function() {
                for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t; )
                    --this.t
            }
            ,
            b.prototype.dlShiftTo = function(t, e) {
                var n;
                for (n = this.t - 1; 0 <= n; --n)
                    e[n + t] = this[n];
                for (n = t - 1; 0 <= n; --n)
                    e[n] = 0;
                e.t = this.t + t,
                e.s = this.s
            }
            ,
            b.prototype.drShiftTo = function(t, e) {
                for (var n = t; n < this.t; ++n)
                    e[n - t] = this[n];
                e.t = Math.max(this.t - t, 0),
                e.s = this.s
            }
            ,
            b.prototype.lShiftTo = function(t, e) {
                for (var n = t % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(t / this.DB), s = this.s << n & this.DM, a = this.t - 1; 0 <= a; --a)
                    e[a + o + 1] = this[a] >> r | s,
                    s = (this[a] & i) << n;
                for (var a = o - 1; 0 <= a; --a)
                    e[a] = 0;
                e[o] = s,
                e.t = this.t + o + 1,
                e.s = this.s,
                e.clamp()
            }
            ,
            b.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t)
                    e.t = 0;
                else {
                    var r = t % this.DB
                      , i = this.DB - r
                      , o = (1 << r) - 1;
                    e[0] = this[n] >> r;
                    for (var s = n + 1; s < this.t; ++s)
                        e[s - n - 1] |= (this[s] & o) << i,
                        e[s - n] = this[s] >> r;
                    0 < r && (e[this.t - n - 1] |= (this.s & o) << i),
                    e.t = this.t - n,
                    e.clamp()
                }
            }
            ,
            b.prototype.subTo = function(t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                    r += this[n] - t[n],
                    e[n++] = r & this.DM,
                    r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; n < this.t; )
                        r += this[n],
                        e[n++] = r & this.DM,
                        r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t; )
                        r -= t[n],
                        e[n++] = r & this.DM,
                        r >>= this.DB;
                    r -= t.s
                }
                e.s = r < 0 ? -1 : 0,
                r < -1 ? e[n++] = this.DV + r : 0 < r && (e[n++] = r),
                e.t = n,
                e.clamp()
            }
            ,
            b.prototype.multiplyTo = function(t, e) {
                var n = this.abs()
                  , r = t.abs()
                  , i = n.t;
                for (e.t = i + r.t; 0 <= --i; )
                    e[i] = 0;
                for (i = 0; i < r.t; ++i)
                    e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
                e.s = 0,
                e.clamp(),
                this.s != t.s && b.ZERO.subTo(e, e)
            }
            ,
            b.prototype.squareTo = function(t) {
                for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n; )
                    t[n] = 0;
                for (n = 0; n < e.t - 1; ++n) {
                    var r = e.am(n, e[n], t, 2 * n, 0, 1);
                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                    t[n + e.t + 1] = 1)
                }
                0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                t.s = 0,
                t.clamp()
            }
            ,
            b.prototype.divRemTo = function(t, e, n) {
                var r = t.abs();
                if (!(r.t <= 0)) {
                    var i = this.abs();
                    if (i.t < r.t)
                        return null != e && e.fromInt(0),
                        void (null != n && this.copyTo(n));
                    null == n && (n = P());
                    var o = P()
                      , s = this.s
                      , a = t.s
                      , c = this.DB - U(r[r.t - 1]);
                    0 < c ? (r.lShiftTo(c, o),
                    i.lShiftTo(c, n)) : (r.copyTo(o),
                    i.copyTo(n));
                    var u = o.t
                      , l = o[u - 1];
                    if (0 != l) {
                        var h = l * (1 << this.F1) + (1 < u ? o[u - 2] >> this.F2 : 0)
                          , f = this.FV / h
                          , d = (1 << this.F1) / h
                          , p = 1 << this.F2
                          , g = n.t
                          , m = g - u
                          , v = null == e ? P() : e;
                        for (o.dlShiftTo(m, v),
                        0 <= n.compareTo(v) && (n[n.t++] = 1,
                        n.subTo(v, n)),
                        b.ONE.dlShiftTo(u, v),
                        v.subTo(o, o); o.t < u; )
                            o[o.t++] = 0;
                        for (; 0 <= --m; ) {
                            var y = n[--g] == l ? this.DM : Math.floor(n[g] * f + (n[g - 1] + p) * d);
                            if ((n[g] += o.am(0, y, n, m, 0, u)) < y)
                                for (o.dlShiftTo(m, v),
                                n.subTo(v, n); n[g] < --y; )
                                    n.subTo(v, n)
                        }
                        null != e && (n.drShiftTo(u, e),
                        s != a && b.ZERO.subTo(e, e)),
                        n.t = u,
                        n.clamp(),
                        0 < c && n.rShiftTo(c, n),
                        s < 0 && b.ZERO.subTo(n, n)
                    }
                }
            }
            ,
            b.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var e = 3 & t;
                return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
            }
            ,
            b.prototype.isEven = function() {
                return 0 == (0 < this.t ? 1 & this[0] : this.s)
            }
            ,
            b.prototype.exp = function(t, e) {
                if (4294967295 < t || t < 1)
                    return b.ONE;
                var n = P()
                  , r = P()
                  , i = e.convert(this)
                  , o = U(t) - 1;
                for (i.copyTo(n); 0 <= --o; )
                    if (e.sqrTo(n, r),
                    0 < (t & 1 << o))
                        e.mulTo(r, i, n);
                    else {
                        var s = n;
                        n = r,
                        r = s
                    }
                return e.revert(n)
            }
            ,
            b.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }
            ,
            b.prototype.toRadix = function(t) {
                if (null == t && (t = 10),
                0 == this.signum() || t < 2 || 36 < t)
                    return "0";
                var e = this.chunkSize(t)
                  , n = Math.pow(t, e)
                  , r = q(n)
                  , i = P()
                  , o = P()
                  , s = "";
                for (this.divRemTo(r, i, o); 0 < i.signum(); )
                    s = (n + o.intValue()).toString(t).substr(1) + s,
                    i.divRemTo(r, i, o);
                return o.intValue().toString(t) + s
            }
            ,
            b.prototype.fromRadix = function(t, e) {
                this.fromInt(0),
                null == e && (e = 10);
                for (var n = this.chunkSize(e), r = Math.pow(e, n), i = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
                    var c = V(t, a);
                    c < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (i = !0) : (s = e * s + c,
                    ++o >= n && (this.dMultiply(r),
                    this.dAddOffset(s, 0),
                    s = o = 0))
                }
                0 < o && (this.dMultiply(Math.pow(e, o)),
                this.dAddOffset(s, 0)),
                i && b.ZERO.subTo(this, this)
            }
            ,
            b.prototype.fromNumber = function(t, e, n) {
                if ("number" == typeof e)
                    if (t < 2)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(t, n),
                        this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this),
                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                            this.dAddOffset(2, 0),
                            this.bitLength() > t && this.subTo(b.ONE.shiftLeft(t - 1), this);
                else {
                    var r = []
                      , i = 7 & t;
                    r.length = 1 + (t >> 3),
                    e.nextBytes(r),
                    0 < i ? r[0] &= (1 << i) - 1 : r[0] = 0,
                    this.fromString(r, 256)
                }
            }
            ,
            b.prototype.bitwiseTo = function(t, e, n) {
                var r, i, o = Math.min(t.t, this.t);
                for (r = 0; r < o; ++r)
                    n[r] = e(this[r], t[r]);
                if (t.t < this.t) {
                    for (i = t.s & this.DM,
                    r = o; r < this.t; ++r)
                        n[r] = e(this[r], i);
                    n.t = this.t
                } else {
                    for (i = this.s & this.DM,
                    r = o; r < t.t; ++r)
                        n[r] = e(i, t[r]);
                    n.t = t.t
                }
                n.s = e(this.s, t.s),
                n.clamp()
            }
            ,
            b.prototype.changeBit = function(t, e) {
                var n = b.ONE.shiftLeft(t);
                return this.bitwiseTo(n, e, n),
                n
            }
            ,
            b.prototype.addTo = function(t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i; )
                    r += this[n] + t[n],
                    e[n++] = r & this.DM,
                    r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; n < this.t; )
                        r += this[n],
                        e[n++] = r & this.DM,
                        r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t; )
                        r += t[n],
                        e[n++] = r & this.DM,
                        r >>= this.DB;
                    r += t.s
                }
                e.s = r < 0 ? -1 : 0,
                0 < r ? e[n++] = r : r < -1 && (e[n++] = this.DV + r),
                e.t = n,
                e.clamp()
            }
            ,
            b.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
            }
            ,
            b.prototype.dAddOffset = function(t, e) {
                if (0 != t) {
                    for (; this.t <= e; )
                        this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV; )
                        this[e] -= this.DV,
                        ++e >= this.t && (this[this.t++] = 0),
                        ++this[e]
                }
            }
            ,
            b.prototype.multiplyLowerTo = function(t, e, n) {
                var r = Math.min(this.t + t.t, e);
                for (n.s = 0,
                n.t = r; 0 < r; )
                    n[--r] = 0;
                for (var i = n.t - this.t; r < i; ++r)
                    n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                for (var i = Math.min(t.t, e); r < i; ++r)
                    this.am(0, t[r], n, r, 0, e - r);
                n.clamp()
            }
            ,
            b.prototype.multiplyUpperTo = function(t, e, n) {
                --e;
                var r = n.t = this.t + t.t - e;
                for (n.s = 0; 0 <= --r; )
                    n[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r)
                    n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                n.clamp(),
                n.drShiftTo(1, n)
            }
            ,
            b.prototype.modInt = function(t) {
                if (t <= 0)
                    return 0;
                var e = this.DV % t
                  , n = this.s < 0 ? t - 1 : 0;
                if (0 < this.t)
                    if (0 == e)
                        n = this[0] % t;
                    else
                        for (var r = this.t - 1; 0 <= r; --r)
                            n = (e * n + this[r]) % t;
                return n
            }
            ,
            b.prototype.millerRabin = function(t) {
                var e = this.subtract(b.ONE)
                  , n = e.getLowestSetBit();
                if (n <= 0)
                    return !1;
                var r = e.shiftRight(n);
                k.length < (t = t + 1 >> 1) && (t = k.length);
                for (var i = P(), o = 0; o < t; ++o) {
                    i.fromInt(k[Math.floor(Math.random() * k.length)]);
                    var s = i.modPow(r, this);
                    if (0 != s.compareTo(b.ONE) && 0 != s.compareTo(e)) {
                        for (var a = 1; a++ < n && 0 != s.compareTo(e); )
                            if (0 == (s = s.modPowInt(2, this)).compareTo(b.ONE))
                                return !1;
                        if (0 != s.compareTo(e))
                            return !1
                    }
                }
                return !0
            }
            ,
            b.prototype.square = function() {
                var t = P();
                return this.squareTo(t),
                t
            }
            ,
            b.prototype.gcda = function(t, e) {
                var n = this.s < 0 ? this.negate() : this.clone()
                  , r = t.s < 0 ? t.negate() : t.clone();
                if (n.compareTo(r) < 0) {
                    var i = n;
                    n = r,
                    r = i
                }
                var o = n.getLowestSetBit()
                  , s = r.getLowestSetBit();
                if (s < 0)
                    e(n);
                else {
                    o < s && (s = o),
                    0 < s && (n.rShiftTo(s, n),
                    r.rShiftTo(s, r));
                    var a = function() {
                        0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n),
                        0 < (o = r.getLowestSetBit()) && r.rShiftTo(o, r),
                        0 <= n.compareTo(r) ? (n.subTo(r, n),
                        n.rShiftTo(1, n)) : (r.subTo(n, r),
                        r.rShiftTo(1, r)),
                        0 < n.signum() ? setTimeout(a, 0) : (0 < s && r.lShiftTo(s, r),
                        setTimeout(function() {
                            e(r)
                        }, 0))
                    };
                    setTimeout(a, 10)
                }
            }
            ,
            b.prototype.fromNumberAsync = function(t, e, n, r) {
                if ("number" == typeof e)
                    if (t < 2)
                        this.fromInt(1);
                    else {
                        this.fromNumber(t, n),
                        this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var i = this
                          , o = function() {
                            i.dAddOffset(2, 0),
                            i.bitLength() > t && i.subTo(b.ONE.shiftLeft(t - 1), i),
                            i.isProbablePrime(e) ? setTimeout(function() {
                                r()
                            }, 0) : setTimeout(o, 0)
                        };
                        setTimeout(o, 0)
                    }
                else {
                    var s = []
                      , a = 7 & t;
                    s.length = 1 + (t >> 3),
                    e.nextBytes(s),
                    0 < a ? s[0] &= (1 << a) - 1 : s[0] = 0,
                    this.fromString(s, 256)
                }
            }
            ,
            b
        }(), N = function() {
            function t() {}
            return t.prototype.convert = function(t) {
                return t
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }
            ,
            t
        }(), O = function() {
            function t(t) {
                this.m = t
            }
            return t.prototype.convert = function(t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }
            ,
            t.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }(), R = function() {
            function t(t) {
                this.m = t,
                this.mp = t.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << t.DB - 15) - 1,
                this.mt2 = 2 * t.t
            }
            return t.prototype.convert = function(t) {
                var e = P();
                return t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
                t.s < 0 && 0 < e.compareTo(D.ZERO) && this.m.subTo(e, e),
                e
            }
            ,
            t.prototype.revert = function(t) {
                var e = P();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            t.prototype.reduce = function(t) {
                for (; t.t <= this.mt2; )
                    t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var n = 32767 & t[e]
                      , r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (n = e + this.m.t,
                    t[n] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV; )
                        t[n] -= t.DV,
                        t[++n]++
                }
                t.clamp(),
                t.drShiftTo(this.m.t, t),
                0 <= t.compareTo(this.m) && t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }(), I = function() {
            function t(t) {
                this.m = t,
                this.r2 = P(),
                this.q3 = P(),
                D.ONE.dlShiftTo(2 * t.t, this.r2),
                this.mu = this.r2.divide(t)
            }
            return t.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t)
                    return t.mod(this.m);
                if (t.compareTo(this.m) < 0)
                    return t;
                var e = P();
                return t.copyTo(e),
                this.reduce(e),
                e
            }
            ,
            t.prototype.revert = function(t) {
                return t
            }
            ,
            t.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                    t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m); )
                    t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n),
                this.reduce(n)
            }
            ,
            t.prototype.sqrTo = function(t, e) {
                t.squareTo(e),
                this.reduce(e)
            }
            ,
            t
        }();
        function P() {
            return new D(null)
        }
        function j(t, e) {
            return new D(t,e)
        }
        E = "Microsoft Internet Explorer" == navigator.appName ? (D.prototype.am = function(t, e, n, r, i, o) {
            var s = 32767 & e
              , a = e >> 15;
            for (; 0 <= --o; ) {
                var c = 32767 & this[t]
                  , u = this[t++] >> 15
                  , l = a * c + u * s;
                c = s * c + ((32767 & l) << 15) + n[r] + (1073741823 & i),
                i = (c >>> 30) + (l >>> 15) + a * u + (i >>> 30),
                n[r++] = 1073741823 & c
            }
            return i
        }
        ,
        30) : "Netscape" != navigator.appName ? (D.prototype.am = function(t, e, n, r, i, o) {
            for (; 0 <= --o; ) {
                var s = e * this[t++] + n[r] + i;
                i = Math.floor(s / 67108864),
                n[r++] = 67108863 & s
            }
            return i
        }
        ,
        26) : (D.prototype.am = function(t, e, n, r, i, o) {
            var s = 16383 & e
              , a = e >> 14;
            for (; 0 <= --o; ) {
                var c = 16383 & this[t]
                  , u = this[t++] >> 14
                  , l = a * c + u * s;
                c = s * c + ((16383 & l) << 14) + n[r] + i,
                i = (c >> 28) + (l >> 14) + a * u,
                n[r++] = 268435455 & c
            }
            return i
        }
        ,
        28),
        D.prototype.DB = E,
        D.prototype.DM = (1 << E) - 1,
        D.prototype.DV = 1 << E;
        D.prototype.FV = Math.pow(2, 52),
        D.prototype.F1 = 52 - E,
        D.prototype.F2 = 2 * E - 52;
        var B, L, M = [];
        for (B = "0".charCodeAt(0),
        L = 0; L <= 9; ++L)
            M[B++] = L;
        for (B = "a".charCodeAt(0),
        L = 10; L < 36; ++L)
            M[B++] = L;
        for (B = "A".charCodeAt(0),
        L = 10; L < 36; ++L)
            M[B++] = L;
        function V(t, e) {
            var n = M[t.charCodeAt(e)];
            return null == n ? -1 : n
        }
        function q(t) {
            var e = P();
            return e.fromInt(t),
            e
        }
        function U(t) {
            var e, n = 1;
            return 0 != (e = t >>> 16) && (t = e,
            n += 16),
            0 != (e = t >> 8) && (t = e,
            n += 8),
            0 != (e = t >> 4) && (t = e,
            n += 4),
            0 != (e = t >> 2) && (t = e,
            n += 2),
            0 != (e = t >> 1) && (t = e,
            n += 1),
            n
        }
        D.ZERO = q(0),
        D.ONE = q(1);
        var H = function() {
            function t() {
                this.i = 0,
                this.j = 0,
                this.S = []
            }
            return t.prototype.init = function(t) {
                var e, n, r;
                for (e = 0; e < 256; ++e)
                    this.S[e] = e;
                for (e = n = 0; e < 256; ++e)
                    n = n + this.S[e] + t[e % t.length] & 255,
                    r = this.S[e],
                    this.S[e] = this.S[n],
                    this.S[n] = r;
                this.i = 0,
                this.j = 0
            }
            ,
            t.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
            }
            ,
            t
        }();
        var F, K, W = 256, z = null;
        if (null == z) {
            z = [];
            var G = void (K = 0);
            if (window.crypto && window.crypto.getRandomValues) {
                var $ = new Uint32Array(256);
                for (window.crypto.getRandomValues($),
                G = 0; G < $.length; ++G)
                    z[K++] = 255 & $[G]
            }
            var X = function(t) {
                if (this.count = this.count || 0,
                256 <= this.count || W <= K)
                    window.removeEventListener ? window.removeEventListener("mousemove", X, !1) : window.detachEvent && window.detachEvent("onmousemove", X);
                else
                    try {
                        var e = t.x + t.y;
                        z[K++] = 255 & e,
                        this.count += 1
                    } catch (t) {}
            };
            window.addEventListener ? window.addEventListener("mousemove", X, !1) : window.attachEvent && window.attachEvent("onmousemove", X)
        }
        function Q() {
            if (null == F) {
                for (F = new H; K < W; ) {
                    var t = Math.floor(65536 * Math.random());
                    z[K++] = 255 & t
                }
                for (F.init(z),
                K = 0; K < z.length; ++K)
                    z[K] = 0;
                K = 0
            }
            return F.next()
        }
        var J = function() {
            function t() {}
            return t.prototype.nextBytes = function(t) {
                for (var e = 0; e < t.length; ++e)
                    t[e] = Q()
            }
            ,
            t
        }();
        var Z = function() {
            function t() {
                this.n = null,
                this.e = 0,
                this.d = null,
                this.p = null,
                this.q = null,
                this.dmp1 = null,
                this.dmq1 = null,
                this.coeff = null
            }
            return t.prototype.doPublic = function(t) {
                return t.modPowInt(this.e, this.n)
            }
            ,
            t.prototype.doPrivate = function(t) {
                if (null == this.p || null == this.q)
                    return t.modPow(this.d, this.n);
                for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0; )
                    e = e.add(this.p);
                return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
            }
            ,
            t.prototype.setPublic = function(t, e) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = j(t, 16),
                this.e = parseInt(e, 16))
            }
            ,
            t.prototype.encrypt = function(t) {
                var e = function(t, e) {
                    if (e < t.length + 11)
                        return null;
                    var n = []
                      , r = t.length - 1;
                    for (; 0 <= r && 0 < e; ) {
                        var i = t.charCodeAt(r--);
                        i < 128 ? n[--e] = i : 127 < i && i < 2048 ? (n[--e] = 63 & i | 128,
                        n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128,
                        n[--e] = i >> 6 & 63 | 128,
                        n[--e] = i >> 12 | 224)
                    }
                    n[--e] = 0;
                    var o = new J
                      , s = [];
                    for (; 2 < e; ) {
                        for (s[0] = 0; 0 == s[0]; )
                            o.nextBytes(s);
                        n[--e] = s[0]
                    }
                    return n[--e] = 2,
                    n[--e] = 0,
                    new D(n)
                }(t, this.n.bitLength() + 7 >> 3);
                if (null == e)
                    return null;
                var n = this.doPublic(e);
                if (null == n)
                    return null;
                var r = n.toString(16);
                return 0 == (1 & r.length) ? r : "0" + r
            }
            ,
            t.prototype.setPrivate = function(t, e, n) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = j(t, 16),
                this.e = parseInt(e, 16),
                this.d = j(n, 16))
            }
            ,
            t.prototype.setPrivateEx = function(t, e, n, r, i, o, s, a) {
                null != t && null != e && 0 < t.length && 0 < e.length && (this.n = j(t, 16),
                this.e = parseInt(e, 16),
                this.d = j(n, 16),
                this.p = j(r, 16),
                this.q = j(i, 16),
                this.dmp1 = j(o, 16),
                this.dmq1 = j(s, 16),
                this.coeff = j(a, 16))
            }
            ,
            t.prototype.generate = function(t, e) {
                var n = new J
                  , r = t >> 1;
                this.e = parseInt(e, 16);
                for (var i = new D(e,16); ; ) {
                    for (; this.p = new D(t - r,1,n),
                    0 != this.p.subtract(D.ONE).gcd(i).compareTo(D.ONE) || !this.p.isProbablePrime(10); )
                        ;
                    for (; this.q = new D(r,1,n),
                    0 != this.q.subtract(D.ONE).gcd(i).compareTo(D.ONE) || !this.q.isProbablePrime(10); )
                        ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var o = this.p;
                        this.p = this.q,
                        this.q = o
                    }
                    var s = this.p.subtract(D.ONE)
                      , a = this.q.subtract(D.ONE)
                      , c = s.multiply(a);
                    if (0 == c.gcd(i).compareTo(D.ONE)) {
                        this.n = this.p.multiply(this.q),
                        this.d = i.modInverse(c),
                        this.dmp1 = this.d.mod(s),
                        this.dmq1 = this.d.mod(a),
                        this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }
            ,
            t.prototype.decrypt = function(t) {
                var e = j(t, 16)
                  , n = this.doPrivate(e);
                return null == n ? null : function(t, e) {
                    var n = t.toByteArray()
                      , r = 0;
                    for (; r < n.length && 0 == n[r]; )
                        ++r;
                    if (n.length - r != e - 1 || 2 != n[r])
                        return null;
                    ++r;
                    for (; 0 != n[r]; )
                        if (++r >= n.length)
                            return null;
                    var i = "";
                    for (; ++r < n.length; ) {
                        var o = 255 & n[r];
                        o < 128 ? i += String.fromCharCode(o) : 191 < o && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]),
                        ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]),
                        r += 2)
                    }
                    return i
                }(n, this.n.bitLength() + 7 >> 3)
            }
            ,
            t.prototype.generateAsync = function(t, e, i) {
                var o = new J
                  , s = t >> 1;
                this.e = parseInt(e, 16);
                var a = new D(e,16)
                  , c = this
                  , u = function() {
                    var e = function() {
                        if (c.p.compareTo(c.q) <= 0) {
                            var t = c.p;
                            c.p = c.q,
                            c.q = t
                        }
                        var e = c.p.subtract(D.ONE)
                          , n = c.q.subtract(D.ONE)
                          , r = e.multiply(n);
                        0 == r.gcd(a).compareTo(D.ONE) ? (c.n = c.p.multiply(c.q),
                        c.d = a.modInverse(r),
                        c.dmp1 = c.d.mod(e),
                        c.dmq1 = c.d.mod(n),
                        c.coeff = c.q.modInverse(c.p),
                        setTimeout(function() {
                            i()
                        }, 0)) : setTimeout(u, 0)
                    }
                      , n = function() {
                        c.q = P(),
                        c.q.fromNumberAsync(s, 1, o, function() {
                            c.q.subtract(D.ONE).gcda(a, function(t) {
                                0 == t.compareTo(D.ONE) && c.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(n, 0)
                            })
                        })
                    }
                      , r = function() {
                        c.p = P(),
                        c.p.fromNumberAsync(t - s, 1, o, function() {
                            c.p.subtract(D.ONE).gcda(a, function(t) {
                                0 == t.compareTo(D.ONE) && c.p.isProbablePrime(10) ? setTimeout(n, 0) : setTimeout(r, 0)
                            })
                        })
                    };
                    setTimeout(r, 0)
                };
                setTimeout(u, 0)
            }
            ,
            t.prototype.sign = function(t, e, n) {
                var r = function(t) {
                    return Y[t] || ""
                }(n)
                  , i = r + e(t).toString()
                  , o = function(t, e) {
                    if (e < t.length + 22)
                        return null;
                    for (var n = e - t.length - 6, r = "", i = 0; i < n; i += 2)
                        r += "ff";
                    return j("0001" + r + "00" + t, 16)
                }(i, this.n.bitLength() / 4);
                if (null == o)
                    return null;
                var s = this.doPrivate(o);
                if (null == s)
                    return null;
                var a = s.toString(16);
                return 0 == (1 & a.length) ? a : "0" + a
            }
            ,
            t.prototype.verify = function(t, e, n) {
                var r = j(e, 16)
                  , i = this.doPublic(r);
                if (null == i)
                    return null;
                var o = i.toString(16).replace(/^1f+00/, "")
                  , s = function(t) {
                    for (var e in Y)
                        if (Y.hasOwnProperty(e)) {
                            var n = Y[e]
                              , r = n.length;
                            if (t.substr(0, r) == n)
                                return t.substr(r)
                        }
                    return t
                }(o);
                return s == n(t).toString()
            }
            ,
            t
        }();
        var Y = {
            md2: "3020300c06082a864886f70d020205000410",
            md5: "3020300c06082a864886f70d020505000410",
            sha1: "3021300906052b0e03021a05000414",
            sha224: "302d300d06096086480165030402040500041c",
            sha256: "3031300d060960864801650304020105000420",
            sha384: "3041300d060960864801650304020205000430",
            sha512: "3051300d060960864801650304020305000440",
            ripemd160: "3021300906052b2403020105000414"
        };
        var tt = {};
        tt.lang = {
            extend: function(t, e, n) {
                if (!e || !t)
                    throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                var r = function() {};
                if (r.prototype = e.prototype,
                t.prototype = new r,
                (t.prototype.constructor = t).superclass = e.prototype,
                e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
                n) {
                    var i;
                    for (i in n)
                        t.prototype[i] = n[i];
                    var o = function() {}
                      , s = ["toString", "valueOf"];
                    try {
                        /MSIE/.test(navigator.userAgent) && (o = function(t, e) {
                            for (i = 0; i < s.length; i += 1) {
                                var n = s[i]
                                  , r = e[n];
                                "function" == typeof r && r != Object.prototype[n] && (t[n] = r)
                            }
                        }
                        )
                    } catch (t) {}
                    o(t.prototype, n)
                }
            }
        };
        var et = {};
        void 0 !== et.asn1 && et.asn1 || (et.asn1 = {}),
        et.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                e
            }
            ,
            this.bigIntToMinTwosComplementsHex = function(t) {
                var e = t.toString(16);
                if ("-" != e.substr(0, 1))
                    e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                else {
                    var n = e.substr(1)
                      , r = n.length;
                    r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2);
                    for (var i = "", o = 0; o < r; o++)
                        i += "f";
                    var s = new D(i,16)
                      , a = s.xor(t).add(D.ONE);
                    e = a.toString(16).replace(/^-/, "")
                }
                return e
            }
            ,
            this.getPEMStringFromHex = function(t, e) {
                return hextopem(t, e)
            }
            ,
            this.newObject = function(t) {
                var e = et
                  , n = e.asn1
                  , r = n.DERBoolean
                  , i = n.DERInteger
                  , o = n.DERBitString
                  , s = n.DEROctetString
                  , a = n.DERNull
                  , c = n.DERObjectIdentifier
                  , u = n.DEREnumerated
                  , l = n.DERUTF8String
                  , h = n.DERNumericString
                  , f = n.DERPrintableString
                  , d = n.DERTeletexString
                  , p = n.DERIA5String
                  , g = n.DERUTCTime
                  , m = n.DERGeneralizedTime
                  , v = n.DERSequence
                  , y = n.DERSet
                  , b = n.DERTaggedObject
                  , w = n.ASN1Util.newObject
                  , x = Object.keys(t);
                if (1 != x.length)
                    throw "key of param shall be only one.";
                var T = x[0];
                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + T + ":"))
                    throw "undefined key: " + T;
                if ("bool" == T)
                    return new r(t[T]);
                if ("int" == T)
                    return new i(t[T]);
                if ("bitstr" == T)
                    return new o(t[T]);
                if ("octstr" == T)
                    return new s(t[T]);
                if ("null" == T)
                    return new a(t[T]);
                if ("oid" == T)
                    return new c(t[T]);
                if ("enum" == T)
                    return new u(t[T]);
                if ("utf8str" == T)
                    return new l(t[T]);
                if ("numstr" == T)
                    return new h(t[T]);
                if ("prnstr" == T)
                    return new f(t[T]);
                if ("telstr" == T)
                    return new d(t[T]);
                if ("ia5str" == T)
                    return new p(t[T]);
                if ("utctime" == T)
                    return new g(t[T]);
                if ("gentime" == T)
                    return new m(t[T]);
                if ("seq" == T) {
                    for (var E = t[T], S = [], _ = 0; _ < E.length; _++) {
                        var A = w(E[_]);
                        S.push(A)
                    }
                    return new v({
                        array: S
                    })
                }
                if ("set" == T) {
                    for (var E = t[T], S = [], _ = 0; _ < E.length; _++) {
                        var A = w(E[_]);
                        S.push(A)
                    }
                    return new y({
                        array: S
                    })
                }
                if ("tag" == T) {
                    var k = t[T];
                    if ("[object Array]" === Object.prototype.toString.call(k) && 3 == k.length) {
                        var C = w(k[2]);
                        return new b({
                            tag: k[0],
                            explicit: k[1],
                            obj: C
                        })
                    }
                    var D = {};
                    if (void 0 !== k.explicit && (D.explicit = k.explicit),
                    void 0 !== k.tag && (D.tag = k.tag),
                    void 0 === k.obj)
                        throw "obj shall be specified for 'tag'.";
                    return D.obj = w(k.obj),
                    new b(D)
                }
            }
            ,
            this.jsonToASN1HEX = function(t) {
                var e = this.newObject(t);
                return e.getEncodedHex()
            }
        }
        ,
        et.asn1.ASN1Util.oidHexToInt = function(t) {
            for (var e = "", n = parseInt(t.substr(0, 2), 16), r = Math.floor(n / 40), i = n % 40, e = r + "." + i, o = "", s = 2; s < t.length; s += 2) {
                var a = parseInt(t.substr(s, 2), 16)
                  , c = ("00000000" + a.toString(2)).slice(-8);
                if (o += c.substr(1, 7),
                "0" == c.substr(0, 1)) {
                    var u = new D(o,2);
                    e = e + "." + u.toString(10),
                    o = ""
                }
            }
            return e
        }
        ,
        et.asn1.ASN1Util.oidIntToHex = function(t) {
            var c = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            }
              , e = function(t) {
                var e = ""
                  , n = new D(t,10)
                  , r = n.toString(2)
                  , i = 7 - r.length % 7;
                7 == i && (i = 0);
                for (var o = "", s = 0; s < i; s++)
                    o += "0";
                r = o + r;
                for (var s = 0; s < r.length - 1; s += 7) {
                    var a = r.substr(s, 7);
                    s != r.length - 7 && (a = "1" + a),
                    e += c(parseInt(a, 2))
                }
                return e
            };
            if (!t.match(/^[0-9.]+$/))
                throw "malformed oid string: " + t;
            var n = ""
              , r = t.split(".")
              , i = 40 * parseInt(r[0]) + parseInt(r[1]);
            n += c(i),
            r.splice(0, 2);
            for (var o = 0; o < r.length; o++)
                n += e(r[o]);
            return n
        }
        ,
        et.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if (void 0 === this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var t = this.hV.length / 2
                  , e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e),
                t < 128)
                    return e;
                var n = e.length / 2;
                if (15 < n)
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                var r = 128 + n;
                return r.toString(16) + e
            }
            ,
            this.getEncodedHex = function() {
                return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(),
                this.hL = this.getLengthHexFromValue(),
                this.hTLV = this.hT + this.hL + this.hV,
                this.isModified = !1),
                this.hTLV
            }
            ,
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            }
            ,
            this.getFreshValueHex = function() {
                return ""
            }
        }
        ,
        et.asn1.DERAbstractString = function(t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this),
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object),
        et.asn1.DERAbstractTime = function(t) {
            et.asn1.DERAbstractTime.superclass.constructor.call(this),
            this.localDateToUTC = function(t) {
                utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                var e = new Date(utc);
                return e
            }
            ,
            this.formatDate = function(t, e, n) {
                var r = this.zeroPadding
                  , i = this.localDateToUTC(t)
                  , o = String(i.getFullYear());
                "utc" == e && (o = o.substr(2, 2));
                var s = r(String(i.getMonth() + 1), 2)
                  , a = r(String(i.getDate()), 2)
                  , c = r(String(i.getHours()), 2)
                  , u = r(String(i.getMinutes()), 2)
                  , l = r(String(i.getSeconds()), 2)
                  , h = o + s + a + c + u + l;
                if (!0 === n) {
                    var f = i.getMilliseconds();
                    if (0 != f) {
                        var d = r(String(f), 3);
                        d = d.replace(/[0]+$/, ""),
                        h = h + "." + d
                    }
                }
                return h + "Z"
            }
            ,
            this.zeroPadding = function(t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }
            ,
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = t,
                this.hV = stohex(t)
            }
            ,
            this.setByDateValue = function(t, e, n, r, i, o) {
                var s = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                this.setByDate(s)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object),
        et.asn1.DERAbstractStructured = function(t) {
            et.asn1.DERAbstractString.superclass.constructor.call(this),
            this.setByASN1ObjectArray = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t
            }
            ,
            this.appendASN1Object = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(t)
            }
            ,
            this.asn1Array = new Array,
            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
        }
        ,
        tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object),
        et.asn1.DERBoolean = function() {
            et.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        }
        ,
        tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object),
        et.asn1.DERInteger = function(t) {
            et.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function(t) {
                var e = new D(String(t),10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function(t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object),
        et.asn1.DERBitString = function(t) {
            if (void 0 !== t && void 0 !== t.obj) {
                var e = et.asn1.ASN1Util.newObject(t.obj);
                t.hex = "00" + e.getEncodedHex()
            }
            et.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = t
            }
            ,
            this.setUnusedBitsAndHexValue = function(t, e) {
                if (t < 0 || 7 < t)
                    throw "unused bits shall be from 0 to 7: u = " + t;
                var n = "0" + t;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = n + e
            }
            ,
            this.setByBinaryString = function(t) {
                var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                8 == e && (e = 0);
                for (var n = 0; n <= e; n++)
                    t += "0";
                for (var r = "", n = 0; n < t.length - 1; n += 8) {
                    var i = t.substr(n, 8)
                      , o = parseInt(i, 2).toString(16);
                    1 == o.length && (o = "0" + o),
                    r += o
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + e + r
            }
            ,
            this.setByBooleanArray = function(t) {
                for (var e = "", n = 0; n < t.length; n++)
                    1 == t[n] ? e += "1" : e += "0";
                this.setByBinaryString(e)
            }
            ,
            this.newFalseArray = function(t) {
                for (var e = new Array(t), n = 0; n < t; n++)
                    e[n] = !1;
                return e
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
        }
        ,
        tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object),
        et.asn1.DEROctetString = function(t) {
            if (void 0 !== t && void 0 !== t.obj) {
                var e = et.asn1.ASN1Util.newObject(t.obj);
                t.hex = e.getEncodedHex()
            }
            et.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
        }
        ,
        tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString),
        et.asn1.DERNull = function() {
            et.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        }
        ,
        tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object),
        et.asn1.DERObjectIdentifier = function(t) {
            var c = function(t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                e
            }
              , o = function(t) {
                var e = ""
                  , n = new D(t,10)
                  , r = n.toString(2)
                  , i = 7 - r.length % 7;
                7 == i && (i = 0);
                for (var o = "", s = 0; s < i; s++)
                    o += "0";
                r = o + r;
                for (var s = 0; s < r.length - 1; s += 7) {
                    var a = r.substr(s, 7);
                    s != r.length - 7 && (a = "1" + a),
                    e += c(parseInt(a, 2))
                }
                return e
            };
            et.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.setValueOidString = function(t) {
                if (!t.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + t;
                var e = ""
                  , n = t.split(".")
                  , r = 40 * parseInt(n[0]) + parseInt(n[1]);
                e += c(r),
                n.splice(0, 2);
                for (var i = 0; i < n.length; i++)
                    e += o(n[i]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = e
            }
            ,
            this.setValueName = function(t) {
                var e = et.asn1.x509.OID.name2oid(t);
                if ("" === e)
                    throw "DERObjectIdentifier oidName undefined: " + t;
                this.setValueOidString(e)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
        }
        ,
        tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object),
        et.asn1.DEREnumerated = function(t) {
            et.asn1.DEREnumerated.superclass.constructor.call(this),
            this.hT = "0a",
            this.setByBigInteger = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function(t) {
                var e = new D(String(t),10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function(t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
        }
        ,
        tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object),
        et.asn1.DERUTF8String = function(t) {
            et.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
        }
        ,
        tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString),
        et.asn1.DERNumericString = function(t) {
            et.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
        }
        ,
        tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString),
        et.asn1.DERPrintableString = function(t) {
            et.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
        }
        ,
        tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString),
        et.asn1.DERTeletexString = function(t) {
            et.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
        }
        ,
        tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString),
        et.asn1.DERIA5String = function(t) {
            et.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
        }
        ,
        tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString),
        et.asn1.DERUTCTime = function(t) {
            et.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)),
                this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }
        ,
        tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime),
        et.asn1.DERGeneralizedTime = function(t) {
            et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.withMillis = !1,
            this.setByDate = function(t) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = t,
                this.s = this.formatDate(this.date, "gen", this.withMillis),
                this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                this.s = this.formatDate(this.date, "gen", this.withMillis),
                this.hV = stohex(this.s)),
                this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date),
            !0 === t.millis && (this.withMillis = !0))
        }
        ,
        tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime),
        et.asn1.DERSequence = function(t) {
            et.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t += n.getEncodedHex()
                }
                return this.hV = t,
                this.hV
            }
        }
        ,
        tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured),
        et.asn1.DERSet = function(t) {
            et.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.sortFlag = !0,
            this.getFreshValueHex = function() {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var n = this.asn1Array[e];
                    t.push(n.getEncodedHex())
                }
                return 1 == this.sortFlag && t.sort(),
                this.hV = t.join(""),
                this.hV
            }
            ,
            void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
        }
        ,
        tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured),
        et.asn1.DERTaggedObject = function(t) {
            et.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(t, e, n) {
                this.hT = e,
                this.isExplicit = t,
                this.asn1Object = n,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                this.hTLV = null,
                this.isModified = !0) : (this.hV = null,
                this.hTLV = n.getEncodedHex(),
                this.hTLV = this.hTLV.replace(/^../, e),
                this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag),
            void 0 !== t.explicit && (this.isExplicit = t.explicit),
            void 0 !== t.obj && (this.asn1Object = t.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object);
        var nt = function(n) {
            function r(t) {
                var e = n.call(this) || this;
                return t && ("string" == typeof t ? e.parseKey(t) : (r.hasPrivateKeyProperty(t) || r.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)),
                e
            }
            return function(t, e) {
                function n() {
                    this.constructor = t
                }
                d(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                new n)
            }(r, n),
            r.prototype.parseKey = function(t) {
                try {
                    var e = 0
                      , n = 0
                      , r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? g.decode(t) : m.unarmor(t)
                      , i = _.decode(r);
                    if (3 === i.sub.length && (i = i.sub[2].sub[0]),
                    9 === i.sub.length) {
                        e = i.sub[1].getHexStringValue(),
                        this.n = j(e, 16),
                        n = i.sub[2].getHexStringValue(),
                        this.e = parseInt(n, 16);
                        var o = i.sub[3].getHexStringValue();
                        this.d = j(o, 16);
                        var s = i.sub[4].getHexStringValue();
                        this.p = j(s, 16);
                        var a = i.sub[5].getHexStringValue();
                        this.q = j(a, 16);
                        var c = i.sub[6].getHexStringValue();
                        this.dmp1 = j(c, 16);
                        var u = i.sub[7].getHexStringValue();
                        this.dmq1 = j(u, 16);
                        var l = i.sub[8].getHexStringValue();
                        this.coeff = j(l, 16)
                    } else {
                        if (2 !== i.sub.length)
                            return !1;
                        var h = i.sub[1]
                          , f = h.sub[0];
                        e = f.sub[0].getHexStringValue(),
                        this.n = j(e, 16),
                        n = f.sub[1].getHexStringValue(),
                        this.e = parseInt(n, 16)
                    }
                    return !0
                } catch (t) {
                    return !1
                }
            }
            ,
            r.prototype.getPrivateBaseKey = function() {
                var t = {
                    array: [new et.asn1.DERInteger({
                        int: 0
                    }), new et.asn1.DERInteger({
                        bigint: this.n
                    }), new et.asn1.DERInteger({
                        int: this.e
                    }), new et.asn1.DERInteger({
                        bigint: this.d
                    }), new et.asn1.DERInteger({
                        bigint: this.p
                    }), new et.asn1.DERInteger({
                        bigint: this.q
                    }), new et.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new et.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new et.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                }
                  , e = new et.asn1.DERSequence(t);
                return e.getEncodedHex()
            }
            ,
            r.prototype.getPrivateBaseKeyB64 = function() {
                return l(this.getPrivateBaseKey())
            }
            ,
            r.prototype.getPublicBaseKey = function() {
                var t = new et.asn1.DERSequence({
                    array: [new et.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new et.asn1.DERNull]
                })
                  , e = new et.asn1.DERSequence({
                    array: [new et.asn1.DERInteger({
                        bigint: this.n
                    }), new et.asn1.DERInteger({
                        int: this.e
                    })]
                })
                  , n = new et.asn1.DERBitString({
                    hex: "00" + e.getEncodedHex()
                })
                  , r = new et.asn1.DERSequence({
                    array: [t, n]
                });
                return r.getEncodedHex()
            }
            ,
            r.prototype.getPublicBaseKeyB64 = function() {
                return l(this.getPublicBaseKey())
            }
            ,
            r.wordwrap = function(t, e) {
                if (e = e || 64,
                !t)
                    return t;
                var n = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(n, "g")).join("\n")
            }
            ,
            r.prototype.getPrivateKey = function() {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += r.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                t += "-----END RSA PRIVATE KEY-----"
            }
            ,
            r.prototype.getPublicKey = function() {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += r.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                t += "-----END PUBLIC KEY-----"
            }
            ,
            r.hasPublicKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }
            ,
            r.hasPrivateKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }
            ,
            r.prototype.parsePropertiesFrom = function(t) {
                this.n = t.n,
                this.e = t.e,
                t.hasOwnProperty("d") && (this.d = t.d,
                this.p = t.p,
                this.q = t.q,
                this.dmp1 = t.dmp1,
                this.dmq1 = t.dmq1,
                this.coeff = t.coeff)
            }
            ,
            r
        }(Z)
          , rt = function() {
            function t(t) {
                t = t || {},
                this.default_key_size = parseInt(t.default_key_size, 10) || 1024,
                this.default_public_exponent = t.default_public_exponent || "010001",
                this.log = t.log || !1,
                this.key = null
            }
            return t.prototype.setKey = function(t) {
                this.log && this.key,
                this.key = new nt(t)
            }
            ,
            t.prototype.setPrivateKey = function(t) {
                this.setKey(t)
            }
            ,
            t.prototype.setPublicKey = function(t) {
                this.setKey(t)
            }
            ,
            t.prototype.decrypt = function(t) {
                try {
                    return this.getKey().decrypt(h(t))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.encrypt = function(t) {
                try {
                    return l(this.getKey().encrypt(t))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.sign = function(t, e, n) {
                try {
                    return l(this.getKey().sign(t, e, n))
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.verify = function(t, e, n) {
                try {
                    return this.getKey().verify(t, h(e), n)
                } catch (t) {
                    return !1
                }
            }
            ,
            t.prototype.getKey = function(t) {
                if (!this.key) {
                    if (this.key = new nt,
                    t && "[object Function]" === {}.toString.call(t))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }
            ,
            t.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }
            ,
            t.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }
            ,
            t.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }
            ,
            t.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }
            ,
            t.version = "3.0.0-rc.1",
            t
        }();
        window.JSEncrypt = rt,
        t.JSEncrypt = rt,
        t.default = rt,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }(e)
}
, function(t, e, n) {
    "use strict";
    var r;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = (r = "lianjia",
    /\.ke.com/.test(location.host) && (r = "ke"),
    r)
}
, function(t, e, n) {
    var v, y, b, w, x;
    v = n(30),
    y = n(10).utf8,
    b = n(31),
    w = n(10).bin,
    (x = function(t, e) {
        t.constructor == String ? t = e && "binary" === e.encoding ? w.stringToBytes(t) : y.stringToBytes(t) : b(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
        for (var n = v.bytesToWords(t), r = 8 * t.length, i = 1732584193, o = -271733879, s = -1732584194, a = 271733878, c = 0; c < n.length; c++)
            n[c] = 16711935 & (n[c] << 8 | n[c] >>> 24) | 4278255360 & (n[c] << 24 | n[c] >>> 8);
        n[r >>> 5] |= 128 << r % 32,
        n[14 + (64 + r >>> 9 << 4)] = r;
        var u = x._ff
          , l = x._gg
          , h = x._hh
          , f = x._ii;
        for (c = 0; c < n.length; c += 16) {
            var d = i
              , p = o
              , g = s
              , m = a;
            o = f(o = f(o = f(o = f(o = h(o = h(o = h(o = h(o = l(o = l(o = l(o = l(o = u(o = u(o = u(o = u(o, s = u(s, a = u(a, i = u(i, o, s, a, n[c + 0], 7, -680876936), o, s, n[c + 1], 12, -389564586), i, o, n[c + 2], 17, 606105819), a, i, n[c + 3], 22, -1044525330), s = u(s, a = u(a, i = u(i, o, s, a, n[c + 4], 7, -176418897), o, s, n[c + 5], 12, 1200080426), i, o, n[c + 6], 17, -1473231341), a, i, n[c + 7], 22, -45705983), s = u(s, a = u(a, i = u(i, o, s, a, n[c + 8], 7, 1770035416), o, s, n[c + 9], 12, -1958414417), i, o, n[c + 10], 17, -42063), a, i, n[c + 11], 22, -1990404162), s = u(s, a = u(a, i = u(i, o, s, a, n[c + 12], 7, 1804603682), o, s, n[c + 13], 12, -40341101), i, o, n[c + 14], 17, -1502002290), a, i, n[c + 15], 22, 1236535329), s = l(s, a = l(a, i = l(i, o, s, a, n[c + 1], 5, -165796510), o, s, n[c + 6], 9, -1069501632), i, o, n[c + 11], 14, 643717713), a, i, n[c + 0], 20, -373897302), s = l(s, a = l(a, i = l(i, o, s, a, n[c + 5], 5, -701558691), o, s, n[c + 10], 9, 38016083), i, o, n[c + 15], 14, -660478335), a, i, n[c + 4], 20, -405537848), s = l(s, a = l(a, i = l(i, o, s, a, n[c + 9], 5, 568446438), o, s, n[c + 14], 9, -1019803690), i, o, n[c + 3], 14, -187363961), a, i, n[c + 8], 20, 1163531501), s = l(s, a = l(a, i = l(i, o, s, a, n[c + 13], 5, -1444681467), o, s, n[c + 2], 9, -51403784), i, o, n[c + 7], 14, 1735328473), a, i, n[c + 12], 20, -1926607734), s = h(s, a = h(a, i = h(i, o, s, a, n[c + 5], 4, -378558), o, s, n[c + 8], 11, -2022574463), i, o, n[c + 11], 16, 1839030562), a, i, n[c + 14], 23, -35309556), s = h(s, a = h(a, i = h(i, o, s, a, n[c + 1], 4, -1530992060), o, s, n[c + 4], 11, 1272893353), i, o, n[c + 7], 16, -155497632), a, i, n[c + 10], 23, -1094730640), s = h(s, a = h(a, i = h(i, o, s, a, n[c + 13], 4, 681279174), o, s, n[c + 0], 11, -358537222), i, o, n[c + 3], 16, -722521979), a, i, n[c + 6], 23, 76029189), s = h(s, a = h(a, i = h(i, o, s, a, n[c + 9], 4, -640364487), o, s, n[c + 12], 11, -421815835), i, o, n[c + 15], 16, 530742520), a, i, n[c + 2], 23, -995338651), s = f(s, a = f(a, i = f(i, o, s, a, n[c + 0], 6, -198630844), o, s, n[c + 7], 10, 1126891415), i, o, n[c + 14], 15, -1416354905), a, i, n[c + 5], 21, -57434055), s = f(s, a = f(a, i = f(i, o, s, a, n[c + 12], 6, 1700485571), o, s, n[c + 3], 10, -1894986606), i, o, n[c + 10], 15, -1051523), a, i, n[c + 1], 21, -2054922799), s = f(s, a = f(a, i = f(i, o, s, a, n[c + 8], 6, 1873313359), o, s, n[c + 15], 10, -30611744), i, o, n[c + 6], 15, -1560198380), a, i, n[c + 13], 21, 1309151649), s = f(s, a = f(a, i = f(i, o, s, a, n[c + 4], 6, -145523070), o, s, n[c + 11], 10, -1120210379), i, o, n[c + 2], 15, 718787259), a, i, n[c + 9], 21, -343485551),
            i = i + d >>> 0,
            o = o + p >>> 0,
            s = s + g >>> 0,
            a = a + m >>> 0
        }
        return v.endian([i, o, s, a])
    }
    )._ff = function(t, e, n, r, i, o, s) {
        var a = t + (e & n | ~e & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
    }
    ,
    x._gg = function(t, e, n, r, i, o, s) {
        var a = t + (e & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
    }
    ,
    x._hh = function(t, e, n, r, i, o, s) {
        var a = t + (e ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
    }
    ,
    x._ii = function(t, e, n, r, i, o, s) {
        var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + e
    }
    ,
    x._blocksize = 16,
    x._digestsize = 16,
    t.exports = function(t, e) {
        if (null == t)
            throw new Error("Illegal argument " + t);
        var n = v.wordsToBytes(x(t, e));
        return e && e.asBytes ? n : e && e.asString ? w.bytesToString(n) : v.bytesToHex(n)
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "prod";
        return {
            domainConfig: {
                wwwroot: s[t] || s.prod,
                ajaxapiroot: a[t] || a.prod
            }
        }
    }
    ;
    var r, i = n(6), o = (r = i) && r.__esModule ? r : {
        default: r
    };
    var s = {
        test: "http://test-www." + o.default + ".com/",
        prod: "https://www." + o.default + ".com/",
        preview: "https://www." + o.default + ".com/"
    }
      , a = {
        test: "https://test2-ajax.api." + o.default + ".com/",
        prod: "https://ajax.api." + o.default + ".com/",
        preview: "https://preview-ajax.api." + o.default + ".com/"
    }
}
, function(t, Ze, e) {
    "use strict";
    (function(Xe) {
        var Qe, t, e, Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        t = "undefined" != typeof window ? window : void 0,
        e = function(E, t) {
            function g(t) {
                return null != t && t === t.window
            }
            var e = []
              , S = E.document
              , r = Object.getPrototypeOf
              , a = e.slice
              , m = e.concat
              , c = e.push
              , i = e.indexOf
              , n = {}
              , o = n.toString
              , v = n.hasOwnProperty
              , s = v.toString
              , u = s.call(Object)
              , y = {}
              , b = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }
              , l = {
                type: !0,
                src: !0,
                noModule: !0
            };
            function w(t, e, n) {
                var r, i = (e = e || S).createElement("script");
                if (i.text = t,
                n)
                    for (r in l)
                        n[r] && (i[r] = n[r]);
                e.head.appendChild(i).parentNode.removeChild(i)
            }
            function x(t) {
                return null == t ? t + "" : "object" == (void 0 === t ? "undefined" : Je(t)) || "function" == typeof t ? n[o.call(t)] || "object" : void 0 === t ? "undefined" : Je(t)
            }
            var h = "3.3.2-pre -queue,-queue/delay,-effects,-effects/Tween,-effects/animatedSelector"
              , _ = function t(e, n) {
                return new t.fn.init(e,n)
            }
              , f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function d(t) {
                var e = !!t && "length"in t && t.length
                  , n = x(t);
                return !b(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            _.fn = _.prototype = {
                jquery: h,
                constructor: _,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(t) {
                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function(t) {
                    var e = _.merge(this.constructor(), t);
                    return e.prevObject = this,
                    e
                },
                each: function(t) {
                    return _.each(this, t)
                },
                map: function(n) {
                    return this.pushStack(_.map(this, function(t, e) {
                        return n.call(t, e, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length
                      , n = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= n && n < e ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: e.sort,
                splice: e.splice
            },
            _.extend = _.fn.extend = function() {
                var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, c = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s,
                s = arguments[a] || {},
                a++),
                "object" == (void 0 === s ? "undefined" : Je(s)) || b(s) || (s = {}),
                a === c && (s = this,
                a--); a < c; a++)
                    if (null != (t = arguments[a]))
                        for (e in t)
                            s !== (r = t[e]) && (u && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[e],
                            o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {},
                            i = !1,
                            s[e] = _.extend(u, o, r)) : void 0 !== r && (s[e] = r));
                return s
            }
            ,
            _.extend({
                expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isPlainObject: function(t) {
                    var e, n;
                    return !(!t || "[object Object]" !== o.call(t) || (e = r(t)) && ("function" != typeof (n = v.call(e, "constructor") && e.constructor) || s.call(n) !== u))
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t)
                        return !1;
                    return !0
                },
                globalEval: function(t) {
                    w(t)
                },
                each: function(t, e) {
                    var n, r = 0;
                    if (d(t))
                        for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++)
                            ;
                    else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r]))
                                break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(f, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (d(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)),
                    n
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : i.call(e, t, n)
                },
                merge: function(t, e) {
                    for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                        t[i++] = e[r];
                    return t.length = i,
                    t
                },
                grep: function(t, e, n) {
                    for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
                        !e(t[i], i) != s && r.push(t[i]);
                    return r
                },
                map: function(t, e, n) {
                    var r, i, o = 0, s = [];
                    if (d(t))
                        for (r = t.length; o < r; o++)
                            null != (i = e(t[o], o, n)) && s.push(i);
                    else
                        for (o in t)
                            null != (i = e(t[o], o, n)) && s.push(i);
                    return m.apply([], s)
                },
                guid: 1,
                support: y
            }),
            "function" == typeof Symbol && (_.fn[Symbol.iterator] = e[Symbol.iterator]),
            _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                n["[object " + e + "]"] = e.toLowerCase()
            });
            var p = function(n) {
                function h(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r != r || n ? e : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }
                function i() {
                    T()
                }
                var t, d, w, o, s, p, f, g, x, c, u, T, E, a, S, m, l, v, y, _ = "sizzle" + 1 * new Date, b = n.document, A = 0, r = 0, k = st(), C = st(), D = st(), N = function(t, e) {
                    return t === e && (u = !0),
                    0
                }, O = {}.hasOwnProperty, e = [], R = e.pop, I = e.push, P = e.push, j = e.slice, B = function(t, e) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n] === e)
                            return n;
                    return -1
                }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", V = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", q = "\\[" + M + "*(" + V + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + V + "))|)" + M + "*\\]", U = ":(" + V + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", H = new RegExp(M + "+","g"), F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), K = new RegExp("^" + M + "*," + M + "*"), W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), G = new RegExp(U), $ = new RegExp("^" + V + "$"), X = {
                    ID: new RegExp("^#(" + V + ")"),
                    CLASS: new RegExp("^\\.(" + V + ")"),
                    TAG: new RegExp("^(" + V + "|[*])"),
                    ATTR: new RegExp("^" + q),
                    PSEUDO: new RegExp("^" + U),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + L + ")$","i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
                }, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                }, it = yt(function(t) {
                    return !0 === t.disabled && ("form"in t || "label"in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    P.apply(e = j.call(b.childNodes), b.childNodes),
                    e[b.childNodes.length].nodeType
                } catch (t) {
                    P = {
                        apply: e.length ? function(t, e) {
                            I.apply(t, j.call(e))
                        }
                        : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++]; )
                                ;
                            t.length = n - 1
                        }
                    }
                }
                function ot(t, e, n, r) {
                    var i, o, s, a, c, u, l, h = e && e.ownerDocument, f = e ? e.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f)
                        return n;
                    if (!r && ((e ? e.ownerDocument || e : b) !== E && T(e),
                    e = e || E,
                    S)) {
                        if (11 !== f && (c = Y.exec(t)))
                            if (i = c[1]) {
                                if (9 === f) {
                                    if (!(s = e.getElementById(i)))
                                        return n;
                                    if (s.id === i)
                                        return n.push(s),
                                        n
                                } else if (h && (s = h.getElementById(i)) && y(e, s) && s.id === i)
                                    return n.push(s),
                                    n
                            } else {
                                if (c[2])
                                    return P.apply(n, e.getElementsByTagName(t)),
                                    n;
                                if ((i = c[3]) && d.getElementsByClassName && e.getElementsByClassName)
                                    return P.apply(n, e.getElementsByClassName(i)),
                                    n
                            }
                        if (d.qsa && !D[t + " "] && (!m || !m.test(t))) {
                            if (1 !== f)
                                h = e,
                                l = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(nt, rt) : e.setAttribute("id", a = _),
                                o = (u = p(t)).length; o--; )
                                    u[o] = "#" + a + " " + vt(u[o]);
                                l = u.join(","),
                                h = tt.test(t) && gt(e.parentNode) || e
                            }
                            if (l)
                                try {
                                    return P.apply(n, h.querySelectorAll(l)),
                                    n
                                } catch (t) {} finally {
                                    a === _ && e.removeAttribute("id")
                                }
                        }
                    }
                    return g(t.replace(F, "$1"), e, n, r)
                }
                function st() {
                    var r = [];
                    return function t(e, n) {
                        return r.push(e + " ") > w.cacheLength && delete t[r.shift()],
                        t[e + " "] = n
                    }
                }
                function at(t) {
                    return t[_] = !0,
                    t
                }
                function ct(t) {
                    var e = E.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null
                    }
                }
                function ut(t, e) {
                    for (var n = t.split("|"), r = n.length; r--; )
                        w.attrHandle[n[r]] = e
                }
                function lt(t, e) {
                    var n = e && t
                      , r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === e)
                                return -1;
                    return t ? 1 : -1
                }
                function ht(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function ft(n) {
                    return function(t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e || "button" === e) && t.type === n
                    }
                }
                function dt(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && it(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function pt(s) {
                    return at(function(o) {
                        return o = +o,
                        at(function(t, e) {
                            for (var n, r = s([], t.length, o), i = r.length; i--; )
                                t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                        })
                    })
                }
                function gt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (t in d = ot.support = {},
                s = ot.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }
                ,
                T = ot.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : b;
                    return r !== E && 9 === r.nodeType && r.documentElement && (a = (E = r).documentElement,
                    S = !s(E),
                    b !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)),
                    d.attributes = ct(function(t) {
                        return t.className = "i",
                        !t.getAttribute("className")
                    }),
                    d.getElementsByTagName = ct(function(t) {
                        return t.appendChild(E.createComment("")),
                        !t.getElementsByTagName("*").length
                    }),
                    d.getElementsByClassName = Z.test(E.getElementsByClassName),
                    d.getById = ct(function(t) {
                        return a.appendChild(t).id = _,
                        !E.getElementsByName || !E.getElementsByName(_).length
                    }),
                    d.getById ? (w.filter.ID = function(t) {
                        var e = t.replace(et, h);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }
                    ,
                    w.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }
                    ) : (w.filter.ID = function(t) {
                        var n = t.replace(et, h);
                        return function(t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === n
                        }
                    }
                    ,
                    w.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n, r, i, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t)
                                    return [o];
                                for (i = e.getElementsByName(t),
                                r = 0; o = i[r++]; )
                                    if ((n = o.getAttributeNode("id")) && n.value === t)
                                        return [o]
                            }
                            return []
                        }
                    }
                    ),
                    w.find.TAG = d.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : d.qsa ? e.querySelectorAll(t) : void 0
                    }
                    : function(t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" !== t)
                            return o;
                        for (; n = o[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    ,
                    w.find.CLASS = d.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && S)
                            return e.getElementsByClassName(t)
                    }
                    ,
                    l = [],
                    m = [],
                    (d.qsa = Z.test(E.querySelectorAll)) && (ct(function(t) {
                        a.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + L + ")"),
                        t.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                        t.querySelectorAll(":checked").length || m.push(":checked"),
                        t.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
                    }),
                    ct(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = E.createElement("input");
                        e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                        a.appendChild(t).disabled = !0,
                        2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        m.push(",.*:")
                    })),
                    (d.matchesSelector = Z.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ct(function(t) {
                        d.disconnectedMatch = v.call(t, "*"),
                        v.call(t, "[s!='']:x"),
                        l.push("!=", U)
                    }),
                    m = m.length && new RegExp(m.join("|")),
                    l = l.length && new RegExp(l.join("|")),
                    e = Z.test(a.compareDocumentPosition),
                    y = e || Z.test(a.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t
                          , r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    }
                    : function(t, e) {
                        if (e)
                            for (; e = e.parentNode; )
                                if (e === t)
                                    return !0;
                        return !1
                    }
                    ,
                    N = e ? function(t, e) {
                        if (t === e)
                            return u = !0,
                            0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !d.sortDetached && e.compareDocumentPosition(t) === n ? t === E || t.ownerDocument === b && y(b, t) ? -1 : e === E || e.ownerDocument === b && y(b, e) ? 1 : c ? B(c, t) - B(c, e) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(t, e) {
                        if (t === e)
                            return u = !0,
                            0;
                        var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], a = [e];
                        if (!i || !o)
                            return t === E ? -1 : e === E ? 1 : i ? -1 : o ? 1 : c ? B(c, t) - B(c, e) : 0;
                        if (i === o)
                            return lt(t, e);
                        for (n = t; n = n.parentNode; )
                            s.unshift(n);
                        for (n = e; n = n.parentNode; )
                            a.unshift(n);
                        for (; s[r] === a[r]; )
                            r++;
                        return r ? lt(s[r], a[r]) : s[r] === b ? -1 : a[r] === b ? 1 : 0
                    }
                    ),
                    E
                }
                ,
                ot.matches = function(t, e) {
                    return ot(t, null, null, e)
                }
                ,
                ot.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== E && T(t),
                    e = e.replace(z, "='$1']"),
                    d.matchesSelector && S && !D[e + " "] && (!l || !l.test(e)) && (!m || !m.test(e)))
                        try {
                            var n = v.call(t, e);
                            if (n || d.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return n
                        } catch (t) {}
                    return 0 < ot(e, E, null, [t]).length
                }
                ,
                ot.contains = function(t, e) {
                    return (t.ownerDocument || t) !== E && T(t),
                    y(t, e)
                }
                ,
                ot.attr = function(t, e) {
                    (t.ownerDocument || t) !== E && T(t);
                    var n = w.attrHandle[e.toLowerCase()]
                      , r = n && O.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
                    return void 0 !== r ? r : d.attributes || !S ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }
                ,
                ot.escape = function(t) {
                    return (t + "").replace(nt, rt)
                }
                ,
                ot.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }
                ,
                ot.uniqueSort = function(t) {
                    var e, n = [], r = 0, i = 0;
                    if (u = !d.detectDuplicates,
                    c = !d.sortStable && t.slice(0),
                    t.sort(N),
                    u) {
                        for (; e = t[i++]; )
                            e === t[i] && (r = n.push(i));
                        for (; r--; )
                            t.splice(n[r], 1)
                    }
                    return c = null,
                    t
                }
                ,
                o = ot.getText = function(t) {
                    var e, n = "", r = 0, i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += o(t)
                        } else if (3 === i || 4 === i)
                            return t.nodeValue
                    } else
                        for (; e = t[r++]; )
                            n += o(e);
                    return n
                }
                ,
                (w = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, h),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(et, h),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]),
                            t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                            t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                            t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && G.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                            t[2] = n.slice(0, e)),
                            t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, h).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            }
                            : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = k[t + " "];
                            return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && k(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(t) {
                                var e = ot.attr(t, n);
                                return null == e ? "!=" === r : !r || (e += "",
                                "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e.replace(H, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(p, t, e, g, m) {
                            var v = "nth" !== p.slice(0, 3)
                              , y = "last" !== p.slice(-4)
                              , b = "of-type" === t;
                            return 1 === g && 0 === m ? function(t) {
                                return !!t.parentNode
                            }
                            : function(t, e, n) {
                                var r, i, o, s, a, c, u = v != y ? "nextSibling" : "previousSibling", l = t.parentNode, h = b && t.nodeName.toLowerCase(), f = !n && !b, d = !1;
                                if (l) {
                                    if (v) {
                                        for (; u; ) {
                                            for (s = t; s = s[u]; )
                                                if (b ? s.nodeName.toLowerCase() === h : 1 === s.nodeType)
                                                    return !1;
                                            c = u = "only" === p && !c && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (c = [y ? l.firstChild : l.lastChild],
                                    y && f) {
                                        for (d = (a = (r = (i = (o = (s = l)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && r[1]) && r[2],
                                        s = a && l.childNodes[a]; s = ++a && s && s[u] || (d = a = 0) || c.pop(); )
                                            if (1 === s.nodeType && ++d && s === t) {
                                                i[p] = [A, a, d];
                                                break
                                            }
                                    } else if (f && (d = a = (r = (i = (o = (s = t)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && r[1]),
                                    !1 === d)
                                        for (; (s = ++a && s && s[u] || (d = a = 0) || c.pop()) && ((b ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++d || (f && ((i = (o = s[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [A, d]),
                                        s !== t)); )
                                            ;
                                    return (d -= m) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                        },
                        PSEUDO: function(t, o) {
                            var e, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return s[_] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                            w.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, e) {
                                for (var n, r = s(t, o), i = r.length; i--; )
                                    t[n = B(t, r[i])] = !(e[n] = r[i])
                            }) : function(t) {
                                return s(t, 0, e)
                            }
                            ) : s
                        }
                    },
                    pseudos: {
                        not: at(function(t) {
                            var r = []
                              , i = []
                              , a = f(t.replace(F, "$1"));
                            return a[_] ? at(function(t, e, n, r) {
                                for (var i, o = a(t, null, r, []), s = t.length; s--; )
                                    (i = o[s]) && (t[s] = !(e[s] = i))
                            }) : function(t, e, n) {
                                return r[0] = t,
                                a(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                            }
                        }),
                        has: at(function(e) {
                            return function(t) {
                                return 0 < ot(e, t).length
                            }
                        }),
                        contains: at(function(e) {
                            return e = e.replace(et, h),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                        }),
                        lang: at(function(n) {
                            return $.test(n || "") || ot.error("unsupported lang: " + n),
                            n = n.replace(et, h).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var e = n.location && n.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === a
                        },
                        focus: function(t) {
                            return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: dt(!1),
                        disabled: dt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !w.pseudos.empty(t)
                        },
                        header: function(t) {
                            return J.test(t.nodeName)
                        },
                        input: function(t) {
                            return Q.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: pt(function() {
                            return [0]
                        }),
                        last: pt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: pt(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: pt(function(t, e) {
                            for (var n = 0; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        odd: pt(function(t, e) {
                            for (var n = 1; n < e; n += 2)
                                t.push(n);
                            return t
                        }),
                        lt: pt(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; 0 <= --r; )
                                t.push(r);
                            return t
                        }),
                        gt: pt(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e; )
                                t.push(r);
                            return t
                        })
                    }
                }).pseudos.nth = w.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    w.pseudos[t] = ht(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    w.pseudos[t] = ft(t);
                function mt() {}
                function vt(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++)
                        r += t[e].value;
                    return r
                }
                function yt(a, t, e) {
                    var c = t.dir
                      , u = t.next
                      , l = u || c
                      , h = e && "parentNode" === l
                      , f = r++;
                    return t.first ? function(t, e, n) {
                        for (; t = t[c]; )
                            if (1 === t.nodeType || h)
                                return a(t, e, n);
                        return !1
                    }
                    : function(t, e, n) {
                        var r, i, o, s = [A, f];
                        if (n) {
                            for (; t = t[c]; )
                                if ((1 === t.nodeType || h) && a(t, e, n))
                                    return !0
                        } else
                            for (; t = t[c]; )
                                if (1 === t.nodeType || h)
                                    if (i = (o = t[_] || (t[_] = {}))[t.uniqueID] || (o[t.uniqueID] = {}),
                                    u && u === t.nodeName.toLowerCase())
                                        t = t[c] || t;
                                    else {
                                        if ((r = i[l]) && r[0] === A && r[1] === f)
                                            return s[2] = r[2];
                                        if ((i[l] = s)[2] = a(t, e, n))
                                            return !0
                                    }
                        return !1
                    }
                }
                function bt(i) {
                    return 1 < i.length ? function(t, e, n) {
                        for (var r = i.length; r--; )
                            if (!i[r](t, e, n))
                                return !1;
                        return !0
                    }
                    : i[0]
                }
                function wt(t, e, n, r, i) {
                    for (var o, s = [], a = 0, c = t.length, u = null != e; a < c; a++)
                        (o = t[a]) && (n && !n(o, r, i) || (s.push(o),
                        u && e.push(a)));
                    return s
                }
                function xt(d, p, g, m, v, t) {
                    return m && !m[_] && (m = xt(m)),
                    v && !v[_] && (v = xt(v, t)),
                    at(function(t, e, n, r) {
                        var i, o, s, a = [], c = [], u = e.length, l = t || function(t, e, n) {
                            for (var r = 0, i = e.length; r < i; r++)
                                ot(t, e[r], n);
                            return n
                        }(p || "*", n.nodeType ? [n] : n, []), h = !d || !t && p ? l : wt(l, a, d, n, r), f = g ? v || (t ? d : u || m) ? [] : e : h;
                        if (g && g(h, f, n, r),
                        m)
                            for (i = wt(f, c),
                            m(i, [], n, r),
                            o = i.length; o--; )
                                (s = i[o]) && (f[c[o]] = !(h[c[o]] = s));
                        if (t) {
                            if (v || d) {
                                if (v) {
                                    for (i = [],
                                    o = f.length; o--; )
                                        (s = f[o]) && i.push(h[o] = s);
                                    v(null, f = [], i, r)
                                }
                                for (o = f.length; o--; )
                                    (s = f[o]) && -1 < (i = v ? B(t, s) : a[o]) && (t[i] = !(e[i] = s))
                            }
                        } else
                            f = wt(f === e ? f.splice(u, f.length) : f),
                            v ? v(null, e, f, r) : P.apply(e, f)
                    })
                }
                function Tt(t) {
                    for (var i, e, n, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, c = yt(function(t) {
                        return t === i
                    }, s, !0), u = yt(function(t) {
                        return -1 < B(i, t)
                    }, s, !0), l = [function(t, e, n) {
                        var r = !o && (n || e !== x) || ((i = e).nodeType ? c(t, e, n) : u(t, e, n));
                        return i = null,
                        r
                    }
                    ]; a < r; a++)
                        if (e = w.relative[t[a].type])
                            l = [yt(bt(l), e)];
                        else {
                            if ((e = w.filter[t[a].type].apply(null, t[a].matches))[_]) {
                                for (n = ++a; n < r && !w.relative[t[n].type]; n++)
                                    ;
                                return xt(1 < a && bt(l), 1 < a && vt(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(F, "$1"), e, a < n && Tt(t.slice(a, n)), n < r && Tt(t = t.slice(n)), n < r && vt(t))
                            }
                            l.push(e)
                        }
                    return bt(l)
                }
                return mt.prototype = w.filters = w.pseudos,
                w.setFilters = new mt,
                p = ot.tokenize = function(t, e) {
                    var n, r, i, o, s, a, c, u = C[t + " "];
                    if (u)
                        return e ? 0 : u.slice(0);
                    for (s = t,
                    a = [],
                    c = w.preFilter; s; ) {
                        for (o in n && !(r = K.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                        a.push(i = [])),
                        n = !1,
                        (r = W.exec(s)) && (n = r.shift(),
                        i.push({
                            value: n,
                            type: r[0].replace(F, " ")
                        }),
                        s = s.slice(n.length)),
                        w.filter)
                            !(r = X[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            s = s.slice(n.length));
                        if (!n)
                            break
                    }
                    return e ? s.length : s ? ot.error(t) : C(t, a).slice(0)
                }
                ,
                f = ot.compile = function(t, e) {
                    var n, m, v, y, b, r, i = [], o = [], s = D[t + " "];
                    if (!s) {
                        for (n = (e = e || p(t)).length; n--; )
                            (s = Tt(e[n]))[_] ? i.push(s) : o.push(s);
                        (s = D(t, (m = o,
                        y = 0 < (v = i).length,
                        b = 0 < m.length,
                        r = function(t, e, n, r, i) {
                            var o, s, a, c = 0, u = "0", l = t && [], h = [], f = x, d = t || b && w.find.TAG("*", i), p = A += null == f ? 1 : Math.random() || .1, g = d.length;
                            for (i && (x = e === E || e || i); u !== g && null != (o = d[u]); u++) {
                                if (b && o) {
                                    for (s = 0,
                                    e || o.ownerDocument === E || (T(o),
                                    n = !S); a = m[s++]; )
                                        if (a(o, e || E, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (A = p)
                                }
                                y && ((o = !a && o) && c--,
                                t && l.push(o))
                            }
                            if (c += u,
                            y && u !== c) {
                                for (s = 0; a = v[s++]; )
                                    a(l, h, e, n);
                                if (t) {
                                    if (0 < c)
                                        for (; u--; )
                                            l[u] || h[u] || (h[u] = R.call(r));
                                    h = wt(h)
                                }
                                P.apply(r, h),
                                i && !t && 0 < h.length && 1 < c + v.length && ot.uniqueSort(r)
                            }
                            return i && (A = p,
                            x = f),
                            l
                        }
                        ,
                        y ? at(r) : r))).selector = t
                    }
                    return s
                }
                ,
                g = ot.select = function(t, e, n, r) {
                    var i, o, s, a, c, u = "function" == typeof t && t, l = !r && p(t = u.selector || t);
                    if (n = n || [],
                    1 === l.length) {
                        if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && S && w.relative[o[1].type]) {
                            if (!(e = (w.find.ID(s.matches[0].replace(et, h), e) || [])[0]))
                                return n;
                            u && (e = e.parentNode),
                            t = t.slice(o.shift().value.length)
                        }
                        for (i = X.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i],
                        !w.relative[a = s.type]); )
                            if ((c = w.find[a]) && (r = c(s.matches[0].replace(et, h), tt.test(o[0].type) && gt(e.parentNode) || e))) {
                                if (o.splice(i, 1),
                                !(t = r.length && vt(o)))
                                    return P.apply(n, r),
                                    n;
                                break
                            }
                    }
                    return (u || f(t, l))(r, e, !S, n, !e || tt.test(t) && gt(e.parentNode) || e),
                    n
                }
                ,
                d.sortStable = _.split("").sort(N).join("") === _,
                d.detectDuplicates = !!u,
                T(),
                d.sortDetached = ct(function(t) {
                    return 1 & t.compareDocumentPosition(E.createElement("fieldset"))
                }),
                ct(function(t) {
                    return t.innerHTML = "<a href='#'></a>",
                    "#" === t.firstChild.getAttribute("href")
                }) || ut("type|href|height|width", function(t, e, n) {
                    if (!n)
                        return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }),
                d.attributes && ct(function(t) {
                    return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                }) || ut("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase())
                        return t.defaultValue
                }),
                ct(function(t) {
                    return null == t.getAttribute("disabled")
                }) || ut(L, function(t, e, n) {
                    var r;
                    if (!n)
                        return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }),
                ot
            }(E);
            _.find = p,
            _.expr = p.selectors,
            _.expr[":"] = _.expr.pseudos,
            _.uniqueSort = _.unique = p.uniqueSort,
            _.text = p.getText,
            _.isXMLDoc = p.isXML,
            _.contains = p.contains,
            _.escapeSelector = p.escape;
            function T(t, e, n) {
                for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                    if (1 === t.nodeType) {
                        if (i && _(t).is(n))
                            break;
                        r.push(t)
                    }
                return r
            }
            function A(t, e) {
                for (var n = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && n.push(t);
                return n
            }
            var k = _.expr.match.needsContext;
            function C(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function N(t, n, r) {
                return b(n) ? _.grep(t, function(t, e) {
                    return !!n.call(t, e, t) !== r
                }) : n.nodeType ? _.grep(t, function(t) {
                    return t === n !== r
                }) : "string" != typeof n ? _.grep(t, function(t) {
                    return -1 < i.call(n, t) !== r
                }) : _.filter(n, t, r)
            }
            _.filter = function(t, e, n) {
                var r = e[0];
                return n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === r.nodeType ? _.find.matchesSelector(r, t) ? [r] : [] : _.find.matches(t, _.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }
            ,
            _.fn.extend({
                find: function(t) {
                    var e, n, r = this.length, i = this;
                    if ("string" != typeof t)
                        return this.pushStack(_(t).filter(function() {
                            for (e = 0; e < r; e++)
                                if (_.contains(i[e], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    e = 0; e < r; e++)
                        _.find(t, i[e], n);
                    return 1 < r ? _.uniqueSort(n) : n
                },
                filter: function(t) {
                    return this.pushStack(N(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(N(this, t || [], !0))
                },
                is: function(t) {
                    return !!N(this, "string" == typeof t && k.test(t) ? _(t) : t || [], !1).length
                }
            });
            var O, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (_.fn.init = function(t, e, n) {
                var r, i;
                if (!t)
                    return this;
                if (n = n || O,
                "string" != typeof t)
                    return t.nodeType ? (this[0] = t,
                    this.length = 1,
                    this) : b(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this);
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : R.exec(t)) || !r[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof _ ? e[0] : e,
                    _.merge(this, _.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : S, !0)),
                    D.test(r[1]) && _.isPlainObject(e))
                        for (r in e)
                            b(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return (i = S.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
            }
            ).prototype = _.fn,
            O = _(S);
            var I = /^(?:parents|prev(?:Until|All))/
              , P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function j(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; )
                    ;
                return t
            }
            _.fn.extend({
                has: function(t) {
                    var e = _(t, this)
                      , n = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < n; t++)
                            if (_.contains(this, e[t]))
                                return !0
                    })
                },
                closest: function(t, e) {
                    var n, r = 0, i = this.length, o = [], s = "string" != typeof t && _(t);
                    if (!k.test(t))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? i.call(_(t), this[0]) : i.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }),
            _.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return T(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return T(t, "parentNode", n)
                },
                next: function(t) {
                    return j(t, "nextSibling")
                },
                prev: function(t) {
                    return j(t, "previousSibling")
                },
                nextAll: function(t) {
                    return T(t, "nextSibling")
                },
                prevAll: function(t) {
                    return T(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return T(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return T(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return A((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return A(t.firstChild)
                },
                contents: function(t) {
                    return void 0 !== t.contentDocument ? t.contentDocument : (C(t, "template") && (t = t.content || t),
                    _.merge([], t.childNodes))
                }
            }, function(r, i) {
                _.fn[r] = function(t, e) {
                    var n = _.map(this, i, t);
                    return "Until" !== r.slice(-5) && (e = t),
                    e && "string" == typeof e && (n = _.filter(e, n)),
                    1 < this.length && (P[r] || _.uniqueSort(n),
                    I.test(r) && n.reverse()),
                    this.pushStack(n)
                }
            });
            var B = /[^\x20\t\r\n\f]+/g;
            function L(t) {
                return t
            }
            function M(t) {
                throw t
            }
            function V(t, e, n, r) {
                var i;
                try {
                    t && b(i = t.promise) ? i.call(t).done(e).fail(n) : t && b(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
                } catch (t) {
                    n.apply(void 0, [t])
                }
            }
            _.Callbacks = function(r) {
                var t, n;
                r = "string" == typeof r ? (t = r,
                n = {},
                _.each(t.match(B) || [], function(t, e) {
                    n[e] = !0
                }),
                n) : _.extend({}, r);
                function i() {
                    for (a = a || r.once,
                    s = o = !0; u.length; l = -1)
                        for (e = u.shift(); ++l < c.length; )
                            !1 === c[l].apply(e[0], e[1]) && r.stopOnFalse && (l = c.length,
                            e = !1);
                    r.memory || (e = !1),
                    o = !1,
                    a && (c = e ? [] : "")
                }
                var o, e, s, a, c = [], u = [], l = -1, h = {
                    add: function() {
                        return c && (e && !o && (l = c.length - 1,
                        u.push(e)),
                        function n(t) {
                            _.each(t, function(t, e) {
                                b(e) ? r.unique && h.has(e) || c.push(e) : e && e.length && "string" !== x(e) && n(e)
                            })
                        }(arguments),
                        e && !o && i()),
                        this
                    },
                    remove: function() {
                        return _.each(arguments, function(t, e) {
                            for (var n; -1 < (n = _.inArray(e, c, n)); )
                                c.splice(n, 1),
                                n <= l && l--
                        }),
                        this
                    },
                    has: function(t) {
                        return t ? -1 < _.inArray(t, c) : 0 < c.length
                    },
                    empty: function() {
                        return c = c && [],
                        this
                    },
                    disable: function() {
                        return a = u = [],
                        c = e = "",
                        this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return a = u = [],
                        e || o || (c = e = ""),
                        this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(t, e) {
                        return a || (e = [t, (e = e || []).slice ? e.slice() : e],
                        u.push(e),
                        o || i()),
                        this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!s
                    }
                };
                return h
            }
            ,
            _.extend({
                Deferred: function(t) {
                    var o = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]]
                      , i = "pending"
                      , s = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(t) {
                            return s.then(null, t)
                        },
                        pipe: function() {
                            var i = arguments;
                            return _.Deferred(function(r) {
                                _.each(o, function(t, e) {
                                    var n = b(i[e[4]]) && i[e[4]];
                                    a[e[1]](function() {
                                        var t = n && n.apply(this, arguments);
                                        t && b(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, n ? [t] : arguments)
                                    })
                                }),
                                i = null
                            }).promise()
                        },
                        then: function(e, n, r) {
                            var c = 0;
                            function u(i, o, s, a) {
                                return function() {
                                    function t() {
                                        var t, e;
                                        if (!(i < c)) {
                                            if ((t = s.apply(n, r)) === o.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == (void 0 === t ? "undefined" : Je(t)) || "function" == typeof t) && t.then,
                                            b(e) ? a ? e.call(t, u(c, o, L, a), u(c, o, M, a)) : (c++,
                                            e.call(t, u(c, o, L, a), u(c, o, M, a), u(c, o, L, o.notifyWith))) : (s !== L && (n = void 0,
                                            r = [t]),
                                            (a || o.resolveWith)(n, r))
                                        }
                                    }
                                    var n = this
                                      , r = arguments
                                      , e = a ? t : function() {
                                        try {
                                            t()
                                        } catch (t) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, e.stackTrace),
                                            c <= i + 1 && (s !== M && (n = void 0,
                                            r = [t]),
                                            o.rejectWith(n, r))
                                        }
                                    }
                                    ;
                                    i ? e() : (_.Deferred.getStackHook && (e.stackTrace = _.Deferred.getStackHook()),
                                    E.setTimeout(e))
                                }
                            }
                            return _.Deferred(function(t) {
                                o[0][3].add(u(0, t, b(r) ? r : L, t.notifyWith)),
                                o[1][3].add(u(0, t, b(e) ? e : L)),
                                o[2][3].add(u(0, t, b(n) ? n : M))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? _.extend(t, s) : s
                        }
                    }
                      , a = {};
                    return _.each(o, function(t, e) {
                        var n = e[2]
                          , r = e[5];
                        s[e[1]] = n.add,
                        r && n.add(function() {
                            i = r
                        }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock),
                        n.add(e[3].fire),
                        a[e[0]] = function() {
                            return a[e[0] + "With"](this === a ? void 0 : this, arguments),
                            this
                        }
                        ,
                        a[e[0] + "With"] = n.fireWith
                    }),
                    s.promise(a),
                    t && t.call(a, a),
                    a
                },
                when: function(t) {
                    function e(e) {
                        return function(t) {
                            i[e] = this,
                            o[e] = 1 < arguments.length ? a.call(arguments) : t,
                            --n || s.resolveWith(i, o)
                        }
                    }
                    var n = arguments.length
                      , r = n
                      , i = Array(r)
                      , o = a.call(arguments)
                      , s = _.Deferred();
                    if (n <= 1 && (V(t, s.done(e(r)).resolve, s.reject, !n),
                    "pending" === s.state() || b(o[r] && o[r].then)))
                        return s.then();
                    for (; r--; )
                        V(o[r], e(r), s.reject);
                    return s.promise()
                }
            });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            _.Deferred.exceptionHook = function(t, e) {
                E.console && E.console.warn && t && q.test(t.name) && E.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }
            ,
            _.readyException = function(t) {
                E.setTimeout(function() {
                    throw t
                })
            }
            ;
            var U = _.Deferred();
            function H() {
                S.removeEventListener("DOMContentLoaded", H),
                E.removeEventListener("load", H),
                _.ready()
            }
            _.fn.ready = function(t) {
                return U.then(t).catch(function(t) {
                    _.readyException(t)
                }),
                this
            }
            ,
            _.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(t) {
                    (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0) !== t && 0 < --_.readyWait || U.resolveWith(S, [_])
                }
            }),
            _.ready.then = U.then,
            "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? E.setTimeout(_.ready) : (S.addEventListener("DOMContentLoaded", H),
            E.addEventListener("load", H));
            function F(t, e, n, r, i, o, s) {
                var a = 0
                  , c = t.length
                  , u = null == n;
                if ("object" === x(n))
                    for (a in i = !0,
                    n)
                        F(t, e, a, n[a], !0, o, s);
                else if (void 0 !== r && (i = !0,
                b(r) || (s = !0),
                u && (e = s ? (e.call(t, r),
                null) : (u = e,
                function(t, e, n) {
                    return u.call(_(t), n)
                }
                )),
                e))
                    for (; a < c; a++)
                        e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
                return i ? t : u ? e.call(t) : c ? e(t[0], n) : o
            }
            var K = /^-ms-/
              , W = /-([a-z])/g;
            function z(t, e) {
                return e.toUpperCase()
            }
            function G(t) {
                return t.replace(K, "ms-").replace(W, z)
            }
            function $(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }
            function X() {
                this.expando = _.expando + X.uid++
            }
            X.uid = 1,
            X.prototype = {
                cache: function(t) {
                    var e = t[this.expando];
                    return e || (e = {},
                    $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))),
                    e
                },
                set: function(t, e, n) {
                    var r, i = this.cache(t);
                    if ("string" == typeof e)
                        i[G(e)] = n;
                    else
                        for (r in e)
                            i[G(r)] = e[r];
                    return i
                },
                get: function(t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
                },
                access: function(t, e, n) {
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                    void 0 !== n ? n : e)
                },
                remove: function(t, e) {
                    var n, r = t[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== e) {
                            n = (e = Array.isArray(e) ? e.map(G) : (e = G(e))in r ? [e] : e.match(B) || []).length;
                            for (; n--; )
                                delete r[e[n]]
                        }
                        void 0 !== e && !_.isEmptyObject(r) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function(t) {
                    var e = t[this.expando];
                    return void 0 !== e && !_.isEmptyObject(e)
                }
            };
            var Q = new X
              , J = new X
              , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , Y = /[A-Z]/g;
            function tt(t, e, n) {
                var r, i;
                if (void 0 === n && 1 === t.nodeType)
                    if (r = "data-" + e.replace(Y, "-$&").toLowerCase(),
                    "string" == typeof (n = t.getAttribute(r))) {
                        try {
                            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Z.test(i) ? JSON.parse(i) : i)
                        } catch (t) {}
                        J.set(t, e, n)
                    } else
                        n = void 0;
                return n
            }
            _.extend({
                hasData: function(t) {
                    return J.hasData(t) || Q.hasData(t)
                },
                data: function(t, e, n) {
                    return J.access(t, e, n)
                },
                removeData: function(t, e) {
                    J.remove(t, e)
                },
                _data: function(t, e, n) {
                    return Q.access(t, e, n)
                },
                _removeData: function(t, e) {
                    Q.remove(t, e)
                }
            }),
            _.fn.extend({
                data: function(n, t) {
                    var e, r, i, o = this[0], s = o && o.attributes;
                    if (void 0 !== n)
                        return "object" == (void 0 === n ? "undefined" : Je(n)) ? this.each(function() {
                            J.set(this, n)
                        }) : F(this, function(t) {
                            var e;
                            if (o && void 0 === t)
                                return void 0 !== (e = J.get(o, n)) ? e : void 0 !== (e = tt(o, n)) ? e : void 0;
                            this.each(function() {
                                J.set(this, n, t)
                            })
                        }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (i = J.get(o),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        for (e = s.length; e--; )
                            s[e] && 0 === (r = s[e].name).indexOf("data-") && (r = G(r.slice(5)),
                            tt(o, r, i[r]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return i
                },
                removeData: function(t) {
                    return this.each(function() {
                        J.remove(this, t)
                    })
                }
            });
            var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$","i")
              , rt = ["Top", "Right", "Bottom", "Left"]
              , it = S.documentElement
              , ot = function(t) {
                return _.contains(t.ownerDocument, t)
            }
              , st = {
                composed: !0
            };
            it.attachShadow && (ot = function(t) {
                return _.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
            }
            );
            function at(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === _.css(t, "display")
            }
            function ct(t, e, n, r) {
                var i, o, s = {};
                for (o in e)
                    s[o] = t.style[o],
                    t.style[o] = e[o];
                for (o in i = n.apply(t, r || []),
                e)
                    t.style[o] = s[o];
                return i
            }
            var ut = {};
            function lt(t, e) {
                for (var n, r, i, o, s, a, c, u = [], l = 0, h = t.length; l < h; l++)
                    (r = t[l]).style && (n = r.style.display,
                    e ? ("none" === n && (u[l] = Q.get(r, "display") || null,
                    u[l] || (r.style.display = "")),
                    "" === r.style.display && at(r) && (u[l] = (c = s = o = void 0,
                    s = (i = r).ownerDocument,
                    a = i.nodeName,
                    (c = ut[a]) || (o = s.body.appendChild(s.createElement(a)),
                    c = _.css(o, "display"),
                    o.parentNode.removeChild(o),
                    "none" === c && (c = "block"),
                    ut[a] = c)))) : "none" !== n && (u[l] = "none",
                    Q.set(r, "display", n)));
                for (l = 0; l < h; l++)
                    null != u[l] && (t[l].style.display = u[l]);
                return t
            }
            _.fn.extend({
                show: function() {
                    return lt(this, !0)
                },
                hide: function() {
                    return lt(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        at(this) ? _(this).show() : _(this).hide()
                    })
                }
            });
            var ht = /^(?:checkbox|radio)$/i
              , ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
              , dt = /^$|^module$|\/(?:java|ecma)script/i
              , pt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function gt(t, e) {
                var n;
                return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
                void 0 === e || e && C(t, e) ? _.merge([t], n) : n
            }
            function mt(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
            }
            pt.optgroup = pt.option,
            pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead,
            pt.th = pt.td;
            var vt, yt, bt = /<|&#?\w+;/;
            function wt(t, e, n, r, i) {
                for (var o, s, a, c, u, l, h = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++)
                    if ((o = t[d]) || 0 === o)
                        if ("object" === x(o))
                            _.merge(f, o.nodeType ? [o] : o);
                        else if (bt.test(o)) {
                            for (s = s || h.appendChild(e.createElement("div")),
                            a = (ft.exec(o) || ["", ""])[1].toLowerCase(),
                            c = pt[a] || pt._default,
                            s.innerHTML = c[1] + _.htmlPrefilter(o) + c[2],
                            l = c[0]; l--; )
                                s = s.lastChild;
                            _.merge(f, s.childNodes),
                            (s = h.firstChild).textContent = ""
                        } else
                            f.push(e.createTextNode(o));
                for (h.textContent = "",
                d = 0; o = f[d++]; )
                    if (r && -1 < _.inArray(o, r))
                        i && i.push(o);
                    else if (u = ot(o),
                    s = gt(h.appendChild(o), "script"),
                    u && mt(s),
                    n)
                        for (l = 0; o = s[l++]; )
                            dt.test(o.type || "") && n.push(o);
                return h
            }
            vt = S.createDocumentFragment().appendChild(S.createElement("div")),
            (yt = S.createElement("input")).setAttribute("type", "radio"),
            yt.setAttribute("checked", "checked"),
            yt.setAttribute("name", "t"),
            vt.appendChild(yt),
            y.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked,
            vt.innerHTML = "<textarea>x</textarea>",
            y.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue;
            var xt = /^key/
              , Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Et = /^([^.]*)(?:\.(.+)|)/;
            function St() {
                return !0
            }
            function _t() {
                return !1
            }
            function At() {
                try {
                    return S.activeElement
                } catch (t) {}
            }
            function kt(t, e, n, r, i, o) {
                var s, a;
                if ("object" == (void 0 === e ? "undefined" : Je(e))) {
                    for (a in "string" != typeof n && (r = r || n,
                    n = void 0),
                    e)
                        kt(t, a, n, r, e[a], o);
                    return t
                }
                if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
                !1 === i)
                    i = _t;
                else if (!i)
                    return t;
                return 1 === o && (s = i,
                (i = function(t) {
                    return _().off(t),
                    s.apply(this, arguments)
                }
                ).guid = s.guid || (s.guid = _.guid++)),
                t.each(function() {
                    _.event.add(this, e, i, r, n)
                })
            }
            _.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, s, a, c, u, l, h, f, d, p, g, m = Q.get(e);
                    if (m)
                        for (n.handler && (n = (o = n).handler,
                        i = o.selector),
                        i && _.find.matchesSelector(it, i),
                        n.guid || (n.guid = _.guid++),
                        (c = m.events) || (c = m.events = {}),
                        (s = m.handle) || (s = m.handle = function(t) {
                            return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        u = (t = (t || "").match(B) || [""]).length; u--; )
                            d = g = (a = Et.exec(t[u]) || [])[1],
                            p = (a[2] || "").split(".").sort(),
                            d && (h = _.event.special[d] || {},
                            d = (i ? h.delegateType : h.bindType) || d,
                            h = _.event.special[d] || {},
                            l = _.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && _.expr.match.needsContext.test(i),
                                namespace: p.join(".")
                            }, o),
                            (f = c[d]) || ((f = c[d] = []).delegateCount = 0,
                            h.setup && !1 !== h.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(d, s)),
                            h.add && (h.add.call(e, l),
                            l.handler.guid || (l.handler.guid = n.guid)),
                            i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                            _.event.global[d] = !0)
                },
                remove: function(t, e, n, r, i) {
                    var o, s, a, c, u, l, h, f, d, p, g, m = Q.hasData(t) && Q.get(t);
                    if (m && (c = m.events)) {
                        for (u = (e = (e || "").match(B) || [""]).length; u--; )
                            if (d = g = (a = Et.exec(e[u]) || [])[1],
                            p = (a[2] || "").split(".").sort(),
                            d) {
                                for (h = _.event.special[d] || {},
                                f = c[d = (r ? h.delegateType : h.bindType) || d] || [],
                                a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                s = o = f.length; o--; )
                                    l = f[o],
                                    !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1),
                                    l.selector && f.delegateCount--,
                                    h.remove && h.remove.call(t, l));
                                s && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || _.removeEvent(t, d, m.handle),
                                delete c[d])
                            } else
                                for (d in c)
                                    _.event.remove(t, d + e[u], n, r, !0);
                        _.isEmptyObject(c) && Q.remove(t, "handle events")
                    }
                },
                dispatch: function(t) {
                    var e, n, r, i, o, s, a = _.event.fix(t), c = new Array(arguments.length), u = (Q.get(this, "events") || {})[a.type] || [], l = _.event.special[a.type] || {};
                    for (c[0] = a,
                    e = 1; e < arguments.length; e++)
                        c[e] = arguments[e];
                    if (a.delegateTarget = this,
                    !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                        for (s = _.event.handlers.call(this, a, u),
                        e = 0; (i = s[e++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = i.elem,
                            n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                                a.data = o.data,
                                void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (a.result = r) && (a.preventDefault(),
                                a.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, a),
                        a.result
                    }
                },
                handlers: function(t, e) {
                    var n, r, i, o, s, a = [], c = e.delegateCount, u = t.target;
                    if (c && u.nodeType && !("click" === t.type && 1 <= t.button))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                                for (o = [],
                                s = {},
                                n = 0; n < c; n++)
                                    void 0 === s[i = (r = e[n]).selector + " "] && (s[i] = r.needsContext ? -1 < _(i, this).index(u) : _.find(i, this, null, [u]).length),
                                    s[i] && o.push(r);
                                o.length && a.push({
                                    elem: u,
                                    handlers: o
                                })
                            }
                    return u = this,
                    c < e.length && a.push({
                        elem: u,
                        handlers: e.slice(c)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(_.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: b(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(t) {
                    return t[_.expando] ? t : new _.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== At() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === At() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && C(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(t) {
                            return C(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            },
            _.removeEvent = function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }
            ,
            _.Event = function(t, e) {
                if (!(this instanceof _.Event))
                    return new _.Event(t,e);
                t && t.type ? (this.originalEvent = t,
                this.type = t.type,
                this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : _t,
                this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
                this.currentTarget = t.currentTarget,
                this.relatedTarget = t.relatedTarget) : this.type = t,
                e && _.extend(this, e),
                this.timeStamp = t && t.timeStamp || Date.now(),
                this[_.expando] = !0
            }
            ,
            _.Event.prototype = {
                constructor: _.Event,
                isDefaultPrevented: _t,
                isPropagationStopped: _t,
                isImmediatePropagationStopped: _t,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = St,
                    t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = St,
                    t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = St,
                    t && !this.isSimulated && t.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            _.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(t) {
                    var e = t.button;
                    return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, _.event.addProp),
            _.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, i) {
                _.event.special[t] = {
                    delegateType: i,
                    bindType: i,
                    handle: function(t) {
                        var e, n = t.relatedTarget, r = t.handleObj;
                        return n && (n === this || _.contains(this, n)) || (t.type = r.origType,
                        e = r.handler.apply(this, arguments),
                        t.type = i),
                        e
                    }
                }
            }),
            _.fn.extend({
                on: function(t, e, n, r) {
                    return kt(this, t, e, n, r)
                },
                one: function(t, e, n, r) {
                    return kt(this, t, e, n, r, 1)
                },
                off: function(t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj)
                        return r = t.handleObj,
                        _(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" != (void 0 === t ? "undefined" : Je(t)))
                        return !1 !== e && "function" != typeof e || (n = e,
                        e = void 0),
                        !1 === n && (n = _t),
                        this.each(function() {
                            _.event.remove(this, t, n, e)
                        });
                    for (i in t)
                        this.off(i, e, t[i]);
                    return this
                }
            });
            var Ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , Dt = /<script|<style|<link/i
              , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Rt(t, e) {
                return C(t, "table") && C(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
            }
            function It(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
                t
            }
            function Pt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
                t
            }
            function jt(t, e) {
                var n, r, i, o, s, a, c, u;
                if (1 === e.nodeType) {
                    if (Q.hasData(t) && (o = Q.access(t),
                    s = Q.set(e, o),
                    u = o.events))
                        for (i in delete s.handle,
                        s.events = {},
                        u)
                            for (n = 0,
                            r = u[i].length; n < r; n++)
                                _.event.add(e, i, u[i][n]);
                    J.hasData(t) && (a = J.access(t),
                    c = _.extend({}, a),
                    J.set(e, c))
                }
            }
            function Bt(n, r, i, o) {
                r = m.apply([], r);
                var t, e, s, a, c, u, l = 0, h = n.length, f = h - 1, d = r[0], p = b(d);
                if (p || 1 < h && "string" == typeof d && !y.checkClone && Nt.test(d))
                    return n.each(function(t) {
                        var e = n.eq(t);
                        p && (r[0] = d.call(this, t, e.html())),
                        Bt(e, r, i, o)
                    });
                if (h && (e = (t = wt(r, n[0].ownerDocument, !1, n, o)).firstChild,
                1 === t.childNodes.length && (t = e),
                e || o)) {
                    for (a = (s = _.map(gt(t, "script"), It)).length; l < h; l++)
                        c = t,
                        l !== f && (c = _.clone(c, !0, !0),
                        a && _.merge(s, gt(c, "script"))),
                        i.call(n[l], c, l);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument,
                        _.map(s, Pt),
                        l = 0; l < a; l++)
                            c = s[l],
                            dt.test(c.type || "") && !Q.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(c.src) : w(c.textContent.replace(Ot, ""), u, c))
                }
                return n
            }
            function Lt(t, e, n) {
                for (var r, i = e ? _.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || _.cleanData(gt(r)),
                    r.parentNode && (n && ot(r) && mt(gt(r, "script")),
                    r.parentNode.removeChild(r));
                return t
            }
            _.extend({
                htmlPrefilter: function(t) {
                    return t.replace(Ct, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var r, i, o, s, a, c, u, l = t.cloneNode(!0), h = ot(t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t)))
                        for (s = gt(l),
                        r = 0,
                        i = (o = gt(t)).length; r < i; r++)
                            a = o[r],
                            "input" === (u = (c = s[r]).nodeName.toLowerCase()) && ht.test(a.type) ? c.checked = a.checked : "input" !== u && "textarea" !== u || (c.defaultValue = a.defaultValue);
                    if (e)
                        if (n)
                            for (o = o || gt(t),
                            s = s || gt(l),
                            r = 0,
                            i = o.length; r < i; r++)
                                jt(o[r], s[r]);
                        else
                            jt(t, l);
                    return 0 < (s = gt(l, "script")).length && mt(s, !h && gt(t, "script")),
                    l
                },
                cleanData: function(t) {
                    for (var e, n, r, i = _.event.special, o = 0; void 0 !== (n = t[o]); o++)
                        if ($(n)) {
                            if (e = n[Q.expando]) {
                                if (e.events)
                                    for (r in e.events)
                                        i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, e.handle);
                                n[Q.expando] = void 0
                            }
                            n[J.expando] && (n[J.expando] = void 0)
                        }
                }
            }),
            _.fn.extend({
                detach: function(t) {
                    return Lt(this, t, !0)
                },
                remove: function(t) {
                    return Lt(this, t)
                },
                text: function(t) {
                    return F(this, function(t) {
                        return void 0 === t ? _.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return Bt(this, arguments, function(t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                    })
                },
                prepend: function() {
                    return Bt(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Rt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return Bt(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return Bt(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++)
                        1 === t.nodeType && (_.cleanData(gt(t, !1)),
                        t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t,
                    e = null == e ? t : e,
                    this.map(function() {
                        return _.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return F(this, function(t) {
                        var e = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === t && 1 === e.nodeType)
                            return e.innerHTML;
                        if ("string" == typeof t && !Dt.test(t) && !pt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = _.htmlPrefilter(t);
                            try {
                                for (; n < r; n++)
                                    1 === (e = this[n] || {}).nodeType && (_.cleanData(gt(e, !1)),
                                    e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var n = [];
                    return Bt(this, arguments, function(t) {
                        var e = this.parentNode;
                        _.inArray(this, n) < 0 && (_.cleanData(gt(this)),
                        e && e.replaceChild(t, this))
                    }, n)
                }
            }),
            _.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, s) {
                _.fn[t] = function(t) {
                    for (var e, n = [], r = _(t), i = r.length - 1, o = 0; o <= i; o++)
                        e = o === i ? this : this.clone(!0),
                        _(r[o])[s](e),
                        c.apply(n, e.get());
                    return this.pushStack(n)
                }
            });
            var Mt, Vt, qt, Ut, Ht, Ft, Kt, Wt = new RegExp("^(" + et + ")(?!px)[a-z%]+$","i"), zt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = E),
                e.getComputedStyle(t)
            }, Gt = new RegExp(rt.join("|"),"i");
            function $t(t, e, n) {
                var r, i, o, s, a = t.style;
                return (n = n || zt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ot(t) || (s = _.style(t, e)),
                !y.pixelBoxStyles() && Wt.test(s) && Gt.test(e) && (r = a.width,
                i = a.minWidth,
                o = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = s,
                s = n.width,
                a.width = r,
                a.minWidth = i,
                a.maxWidth = o)),
                void 0 !== s ? s + "" : s
            }
            function Xt(t, e) {
                return {
                    get: function() {
                        if (!t())
                            return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            function Qt() {
                if (Kt) {
                    Ft.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    Kt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    it.appendChild(Ft).appendChild(Kt);
                    var t = E.getComputedStyle(Kt);
                    Mt = "1%" !== t.top,
                    Ht = 12 === Jt(t.marginLeft),
                    Kt.style.right = "60%",
                    Ut = 36 === Jt(t.right),
                    Vt = 36 === Jt(t.width),
                    Kt.style.position = "absolute",
                    qt = 12 === Jt(Kt.offsetWidth / 3),
                    it.removeChild(Ft),
                    Kt = null
                }
            }
            function Jt(t) {
                return Math.round(parseFloat(t))
            }
            Ft = S.createElement("div"),
            (Kt = S.createElement("div")).style && (Kt.style.backgroundClip = "content-box",
            Kt.cloneNode(!0).style.backgroundClip = "",
            y.clearCloneStyle = "content-box" === Kt.style.backgroundClip,
            _.extend(y, {
                boxSizingReliable: function() {
                    return Qt(),
                    Vt
                },
                pixelBoxStyles: function() {
                    return Qt(),
                    Ut
                },
                pixelPosition: function() {
                    return Qt(),
                    Mt
                },
                reliableMarginLeft: function() {
                    return Qt(),
                    Ht
                },
                scrollboxSize: function() {
                    return Qt(),
                    qt
                }
            }));
            var Zt = ["Webkit", "Moz", "ms"]
              , Yt = S.createElement("div").style
              , te = {};
            function ee(t) {
                return _.cssProps[t] || te[t] || (t in Yt ? t : te[t] = function(t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), n = Zt.length; n--; )
                        if ((t = Zt[n] + e)in Yt)
                            return t
                }(t) || t)
            }
            var ne, re, ie = /^(none|table(?!-c[ea]).+)/, oe = /^--/, se = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, ae = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function ce(t, e, n) {
                var r = nt.exec(e);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
            }
            function ue(t, e, n, r, i, o) {
                var s = "width" === e ? 1 : 0
                  , a = 0
                  , c = 0;
                if (n === (r ? "border" : "content"))
                    return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (c += _.css(t, n + rt[s], !0, i)),
                    r ? ("content" === n && (c -= _.css(t, "padding" + rt[s], !0, i)),
                    "margin" !== n && (c -= _.css(t, "border" + rt[s] + "Width", !0, i))) : (c += _.css(t, "padding" + rt[s], !0, i),
                    "padding" !== n ? c += _.css(t, "border" + rt[s] + "Width", !0, i) : a += _.css(t, "border" + rt[s] + "Width", !0, i));
                return !r && 0 <= o && (c += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - c - a - .5)) || 0),
                c
            }
            function le(t, e, n) {
                var r = zt(t)
                  , i = $t(t, e, r)
                  , o = "border-box" === _.css(t, "boxSizing", !1, r)
                  , s = o
                  , a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Wt.test(i)) {
                    if (!n)
                        return i;
                    i = "auto"
                }
                return (o && !y.boxSizingReliable() || "auto" === i || !parseFloat(i) && "inline" === _.css(t, "display", !1, r)) && t.getClientRects().length && (s = a in t) && (i = t[a]),
                (i = parseFloat(i) || 0) + ue(t, e, n || (o ? "border" : "content"), s, r, i) + "px"
            }
            _.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = $t(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, o, s, a = G(e), c = oe.test(e), u = t.style;
                        if (c || (e = ee(a)),
                        s = _.cssHooks[e] || _.cssHooks[a],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e];
                        "string" === (o = void 0 === n ? "undefined" : Je(n)) && (i = nt.exec(n)) && i[1] && (n = function(t, e, n) {
                            var r, i, o = 20, s = function() {
                                return _.css(t, e, "")
                            }, a = s(), c = n && n[3] || (_.cssNumber[e] ? "" : "px"), u = t.nodeType && (_.cssNumber[e] || "px" !== c && +a) && nt.exec(_.css(t, e));
                            if (u && u[3] !== c) {
                                for (a /= 2,
                                c = c || u[3],
                                u = +a || 1; o--; )
                                    _.style(t, e, u + c),
                                    (1 - i) * (1 - (i = s() / a || .5)) <= 0 && (o = 0),
                                    u /= i;
                                u *= 2,
                                _.style(t, e, u + c),
                                n = n || []
                            }
                            return n && (u = +u || +a || 0,
                            r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                            r
                        }(t, e, i),
                        o = "number"),
                        null != n && n == n && ("number" !== o || c || (n += i && i[3] || (_.cssNumber[a] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(t, n, r)) || (c ? u.setProperty(e, n) : u[e] = n))
                    }
                },
                css: function(t, e, n, r) {
                    var i, o, s, a = G(e);
                    return oe.test(e) || (e = ee(a)),
                    (s = _.cssHooks[e] || _.cssHooks[a]) && "get"in s && (i = s.get(t, !0, n)),
                    void 0 === i && (i = $t(t, e, r)),
                    "normal" === i && e in ae && (i = ae[e]),
                    "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }),
            _.each(["height", "width"], function(t, c) {
                _.cssHooks[c] = {
                    get: function(t, e, n) {
                        if (e)
                            return !ie.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? le(t, c, n) : ct(t, se, function() {
                                return le(t, c, n)
                            })
                    },
                    set: function(t, e, n) {
                        var r, i = zt(t), o = !y.scrollboxSize() && "absolute" === i.position, s = (o || n) && "border-box" === _.css(t, "boxSizing", !1, i), a = n ? ue(t, c, n, s, i) : 0;
                        return s && o && (a -= Math.ceil(t["offset" + c[0].toUpperCase() + c.slice(1)] - parseFloat(i[c]) - ue(t, c, "border", !1, i) - .5)),
                        a && (r = nt.exec(e)) && "px" !== (r[3] || "px") && (t.style[c] = e,
                        e = _.css(t, c)),
                        ce(0, e, a)
                    }
                }
            }),
            _.cssHooks.marginLeft = Xt(y.reliableMarginLeft, function(t, e) {
                if (e)
                    return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - ct(t, {
                        marginLeft: 0
                    }, function() {
                        return t.getBoundingClientRect().left
                    })) + "px"
            }),
            _.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(i, o) {
                _.cssHooks[i + o] = {
                    expand: function(t) {
                        for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                            n[i + rt[e] + o] = r[e] || r[e - 2] || r[0];
                        return n
                    }
                },
                "margin" !== i && (_.cssHooks[i + o].set = ce)
            }),
            _.fn.extend({
                css: function(t, e) {
                    return F(this, function(t, e, n) {
                        var r, i, o = {}, s = 0;
                        if (Array.isArray(e)) {
                            for (r = zt(t),
                            i = e.length; s < i; s++)
                                o[e[s]] = _.css(t, e[s], !1, r);
                            return o
                        }
                        return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }),
            ne = S.createElement("input"),
            re = S.createElement("select").appendChild(S.createElement("option")),
            ne.type = "checkbox",
            y.checkOn = "" !== ne.value,
            y.optSelected = re.selected,
            (ne = S.createElement("input")).value = "t",
            ne.type = "radio",
            y.radioValue = "t" === ne.value;
            var he, fe = _.expr.attrHandle;
            _.fn.extend({
                attr: function(t, e) {
                    return F(this, _.attr, t, e, 1 < arguments.length)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        _.removeAttr(this, t)
                    })
                }
            }),
            _.extend({
                attr: function(t, e, n) {
                    var r, i, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === o && _.isXMLDoc(t) || (i = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? he : void 0)),
                        void 0 !== n ? null === n ? void _.removeAttr(t, e) : i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                        n) : i && "get"in i && null !== (r = i.get(t, e)) ? r : null == (r = _.find.attr(t, e)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!y.radioValue && "radio" === e && C(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e),
                                n && (t.value = n),
                                e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, r = 0, i = e && e.match(B);
                    if (i && 1 === t.nodeType)
                        for (; n = i[r++]; )
                            t.removeAttribute(n)
                }
            }),
            he = {
                set: function(t, e, n) {
                    return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n),
                    n
                }
            },
            _.each(_.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var s = fe[e] || _.find.attr;
                fe[e] = function(t, e, n) {
                    var r, i, o = e.toLowerCase();
                    return n || (i = fe[o],
                    fe[o] = r,
                    r = null != s(t, e, n) ? o : null,
                    fe[o] = i),
                    r
                }
            });
            var de = /^(?:input|select|textarea|button)$/i
              , pe = /^(?:a|area)$/i;
            function ge(t) {
                return (t.match(B) || []).join(" ")
            }
            function me(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }
            function ve(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(B) || []
            }
            _.fn.extend({
                prop: function(t, e) {
                    return F(this, _.prop, t, e, 1 < arguments.length)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[_.propFix[t] || t]
                    })
                }
            }),
            _.extend({
                prop: function(t, e, n) {
                    var r, i, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && _.isXMLDoc(t) || (e = _.propFix[e] || e,
                        i = _.propHooks[e]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = _.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            y.optSelected || (_.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex,
                    null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex)
                }
            }),
            _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                _.propFix[this.toLowerCase()] = this
            }),
            _.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, s, a, c = 0;
                    if (b(e))
                        return this.each(function(t) {
                            _(this).addClass(e.call(this, t, me(this)))
                        });
                    if ((t = ve(e)).length)
                        for (; n = this[c++]; )
                            if (i = me(n),
                            r = 1 === n.nodeType && " " + ge(i) + " ") {
                                for (s = 0; o = t[s++]; )
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (a = ge(r)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, s, a, c = 0;
                    if (b(e))
                        return this.each(function(t) {
                            _(this).removeClass(e.call(this, t, me(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ((t = ve(e)).length)
                        for (; n = this[c++]; )
                            if (i = me(n),
                            r = 1 === n.nodeType && " " + ge(i) + " ") {
                                for (s = 0; o = t[s++]; )
                                    for (; -1 < r.indexOf(" " + o + " "); )
                                        r = r.replace(" " + o + " ", " ");
                                i !== (a = ge(r)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(i, e) {
                    var o = void 0 === i ? "undefined" : Je(i)
                      , s = "string" === o || Array.isArray(i);
                    return "boolean" == typeof e && s ? e ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(t) {
                        _(this).toggleClass(i.call(this, t, me(this), e), e)
                    }) : this.each(function() {
                        var t, e, n, r;
                        if (s)
                            for (e = 0,
                            n = _(this),
                            r = ve(i); t = r[e++]; )
                                n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                        else
                            void 0 !== i && "boolean" !== o || ((t = me(this)) && Q.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === i ? "" : Q.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e, n, r = 0;
                    for (e = " " + t + " "; n = this[r++]; )
                        if (1 === n.nodeType && -1 < (" " + ge(me(n)) + " ").indexOf(e))
                            return !0;
                    return !1
                }
            });
            var ye = /\r/g;
            _.fn.extend({
                val: function(n) {
                    var r, t, i, e = this[0];
                    return arguments.length ? (i = b(n),
                    this.each(function(t) {
                        var e;
                        1 === this.nodeType && (null == (e = i ? n.call(this, t, _(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = _.map(e, function(t) {
                            return null == t ? "" : t + ""
                        })),
                        (r = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, e, "value") || (this.value = e))
                    })) : e ? (r = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()]) && "get"in r && void 0 !== (t = r.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ye, "") : null == t ? "" : t : void 0
                }
            }),
            _.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = _.find.attr(t, "value");
                            return null != e ? e : ge(_.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            var e, n, r, i = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], c = s ? o + 1 : i.length;
                            for (r = o < 0 ? c : s ? o : 0; r < c; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                                    if (e = _(n).val(),
                                    s)
                                        return e;
                                    a.push(e)
                                }
                            return a
                        },
                        set: function(t, e) {
                            for (var n, r, i = t.options, o = _.makeArray(e), s = i.length; s--; )
                                ((r = i[s]).selected = -1 < _.inArray(_.valHooks.option.get(r), o)) && (n = !0);
                            return n || (t.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            _.each(["radio", "checkbox"], function() {
                _.valHooks[this] = {
                    set: function(t, e) {
                        if (Array.isArray(e))
                            return t.checked = -1 < _.inArray(_(t).val(), e)
                    }
                },
                y.checkOn || (_.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
                )
            }),
            y.focusin = "onfocusin"in E;
            function be(t) {
                t.stopPropagation()
            }
            var we = /^(?:focusinfocus|focusoutblur)$/;
            _.extend(_.event, {
                trigger: function(t, e, n, r) {
                    var i, o, s, a, c, u, l, h, f = [n || S], d = v.call(t, "type") ? t.type : t, p = v.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = h = s = n = n || S,
                    3 !== n.nodeType && 8 !== n.nodeType && !we.test(d + _.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
                    p.sort()),
                    c = d.indexOf(":") < 0 && "on" + d,
                    (t = t[_.expando] ? t : new _.Event(d,"object" == (void 0 === t ? "undefined" : Je(t)) && t)).isTrigger = r ? 2 : 3,
                    t.namespace = p.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = n),
                    e = null == e ? [t] : _.makeArray(e, [t]),
                    l = _.event.special[d] || {},
                    r || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                        if (!r && !l.noBubble && !g(n)) {
                            for (a = l.delegateType || d,
                            we.test(a + d) || (o = o.parentNode); o; o = o.parentNode)
                                f.push(o),
                                s = o;
                            s === (n.ownerDocument || S) && f.push(s.defaultView || s.parentWindow || E)
                        }
                        for (i = 0; (o = f[i++]) && !t.isPropagationStopped(); )
                            h = o,
                            t.type = 1 < i ? a : l.bindType || d,
                            (u = (Q.get(o, "events") || {})[t.type] && Q.get(o, "handle")) && u.apply(o, e),
                            (u = c && o[c]) && u.apply && $(o) && (t.result = u.apply(o, e),
                            !1 === t.result && t.preventDefault());
                        return t.type = d,
                        r || t.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), e) || !$(n) || c && b(n[d]) && !g(n) && ((s = n[c]) && (n[c] = null),
                        _.event.triggered = d,
                        t.isPropagationStopped() && h.addEventListener(d, be),
                        n[d](),
                        t.isPropagationStopped() && h.removeEventListener(d, be),
                        _.event.triggered = void 0,
                        s && (n[c] = s)),
                        t.result
                    }
                },
                simulate: function(t, e, n) {
                    var r = _.extend(new _.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    _.event.trigger(r, null, e)
                }
            }),
            _.fn.extend({
                trigger: function(t, e) {
                    return this.each(function() {
                        _.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n)
                        return _.event.trigger(t, e, n, !0)
                }
            }),
            y.focusin || _.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                function i(t) {
                    _.event.simulate(r, t.target, _.event.fix(t))
                }
                _.event.special[r] = {
                    setup: function() {
                        var t = this.ownerDocument || this
                          , e = Q.access(t, r);
                        e || t.addEventListener(n, i, !0),
                        Q.access(t, r, (e || 0) + 1)
                    },
                    teardown: function() {
                        var t = this.ownerDocument || this
                          , e = Q.access(t, r) - 1;
                        e ? Q.access(t, r, e) : (t.removeEventListener(n, i, !0),
                        Q.remove(t, r))
                    }
                }
            });
            var xe = E.location
              , Te = Date.now()
              , Ee = /\?/;
            _.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t)
                    return null;
                try {
                    e = (new E.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t),
                e
            }
            ;
            var Se = /\[\]$/
              , _e = /\r?\n/g
              , Ae = /^(?:submit|button|image|reset|file)$/i
              , ke = /^(?:input|select|textarea|keygen)/i;
            function Ce(n, t, r, i) {
                var e;
                if (Array.isArray(t))
                    _.each(t, function(t, e) {
                        r || Se.test(n) ? i(n, e) : Ce(n + "[" + ("object" == (void 0 === e ? "undefined" : Je(e)) && null != e ? t : "") + "]", e, r, i)
                    });
                else if (r || "object" !== x(t))
                    i(n, t);
                else
                    for (e in t)
                        Ce(n + "[" + e + "]", t[e], r, i)
            }
            _.param = function(t, e) {
                function n(t, e) {
                    var n = b(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                }
                var r, i = [];
                if (null == t)
                    return "";
                if (Array.isArray(t) || t.jquery && !_.isPlainObject(t))
                    _.each(t, function() {
                        n(this.name, this.value)
                    });
                else
                    for (r in t)
                        Ce(r, t[r], e, n);
                return i.join("&")
            }
            ,
            _.fn.extend({
                serialize: function() {
                    return _.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = _.prop(this, "elements");
                        return t ? _.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !_(this).is(":disabled") && ke.test(this.nodeName) && !Ae.test(t) && (this.checked || !ht.test(t))
                    }).map(function(t, e) {
                        var n = _(this).val();
                        return null == n ? null : Array.isArray(n) ? _.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(_e, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(_e, "\r\n")
                        }
                    }).get()
                }
            });
            var De = /%20/g
              , Ne = /#.*$/
              , Oe = /([?&])_=[^&]*/
              , Re = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , Ie = /^(?:GET|HEAD)$/
              , Pe = /^\/\//
              , je = {}
              , Be = {}
              , Le = "*/".concat("*")
              , Me = S.createElement("a");
            function Ve(o) {
                return function(t, e) {
                    "string" != typeof t && (e = t,
                    t = "*");
                    var n, r = 0, i = t.toLowerCase().match(B) || [];
                    if (b(e))
                        for (; n = i[r++]; )
                            "+" === n[0] ? (n = n.slice(1) || "*",
                            (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
                }
            }
            function qe(e, i, o, s) {
                var a = {}
                  , c = e === Be;
                function u(t) {
                    var r;
                    return a[t] = !0,
                    _.each(e[t] || [], function(t, e) {
                        var n = e(i, o, s);
                        return "string" != typeof n || c || a[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        u(n),
                        !1)
                    }),
                    r
                }
                return u(i.dataTypes[0]) || !a["*"] && u("*")
            }
            function Ue(t, e) {
                var n, r, i = _.ajaxSettings.flatOptions || {};
                for (n in e)
                    void 0 !== e[n] && ((i[n] ? t : r = r || {})[n] = e[n]);
                return r && _.extend(!0, t, r),
                t
            }
            Me.href = xe.href,
            _.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: xe.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Le,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": _.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? Ue(Ue(t, _.ajaxSettings), e) : Ue(_.ajaxSettings, t)
                },
                ajaxPrefilter: Ve(je),
                ajaxTransport: Ve(Be),
                ajax: function(t, e) {
                    "object" == (void 0 === t ? "undefined" : Je(t)) && (e = t,
                    t = void 0),
                    e = e || {};
                    var l, h, f, n, d, r, p, g, i, o, m = _.ajaxSetup({}, e), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? _(v) : _.event, b = _.Deferred(), w = _.Callbacks("once memory"), x = m.statusCode || {}, s = {}, a = {}, c = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (p) {
                                if (!n)
                                    for (n = {}; e = Re.exec(f); )
                                        n[e[1].toLowerCase() + " "] = (n[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = n[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return p ? f : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t,
                            s[t] = e),
                            this
                        },
                        overrideMimeType: function(t) {
                            return null == p && (m.mimeType = t),
                            this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (p)
                                    T.always(t[T.status]);
                                else
                                    for (e in t)
                                        x[e] = [x[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || c;
                            return l && l.abort(e),
                            u(0, e),
                            this
                        }
                    };
                    if (b.promise(T),
                    m.url = ((t || m.url || xe.href) + "").replace(Pe, xe.protocol + "//"),
                    m.type = e.method || e.type || m.method || m.type,
                    m.dataTypes = (m.dataType || "*").toLowerCase().match(B) || [""],
                    null == m.crossDomain) {
                        r = S.createElement("a");
                        try {
                            r.href = m.url,
                            r.href = r.href,
                            m.crossDomain = Me.protocol + "//" + Me.host != r.protocol + "//" + r.host
                        } catch (t) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = _.param(m.data, m.traditional)),
                    qe(je, m, e, T),
                    p)
                        return T;
                    for (i in (g = _.event && m.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                    m.type = m.type.toUpperCase(),
                    m.hasContent = !Ie.test(m.type),
                    h = m.url.replace(Ne, ""),
                    m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(De, "+")) : (o = m.url.slice(h.length),
                    m.data && (m.processData || "string" == typeof m.data) && (h += (Ee.test(h) ? "&" : "?") + m.data,
                    delete m.data),
                    !1 === m.cache && (h = h.replace(Oe, "$1"),
                    o = (Ee.test(h) ? "&" : "?") + "_=" + Te++ + o),
                    m.url = h + o),
                    m.ifModified && (_.lastModified[h] && T.setRequestHeader("If-Modified-Since", _.lastModified[h]),
                    _.etag[h] && T.setRequestHeader("If-None-Match", _.etag[h])),
                    (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && T.setRequestHeader("Content-Type", m.contentType),
                    T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : m.accepts["*"]),
                    m.headers)
                        T.setRequestHeader(i, m.headers[i]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || p))
                        return T.abort();
                    if (c = "abort",
                    w.add(m.complete),
                    T.done(m.success),
                    T.fail(m.error),
                    l = qe(Be, m, e, T)) {
                        if (T.readyState = 1,
                        g && y.trigger("ajaxSend", [T, m]),
                        p)
                            return T;
                        m.async && 0 < m.timeout && (d = E.setTimeout(function() {
                            T.abort("timeout")
                        }, m.timeout));
                        try {
                            p = !1,
                            l.send(s, u)
                        } catch (t) {
                            if (p)
                                throw t;
                            u(-1, t)
                        }
                    } else
                        u(-1, "No Transport");
                    function u(t, e, n, r) {
                        var i, o, s, a, c, u = e;
                        p || (p = !0,
                        d && E.clearTimeout(d),
                        l = void 0,
                        f = r || "",
                        T.readyState = 0 < t ? 4 : 0,
                        i = 200 <= t && t < 300 || 304 === t,
                        n && (a = function(t, e, n) {
                            for (var r, i, o, s, a = t.contents, c = t.dataTypes; "*" === c[0]; )
                                c.shift(),
                                void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in a)
                                    if (a[i] && a[i].test(r)) {
                                        c.unshift(i);
                                        break
                                    }
                            if (c[0]in n)
                                o = c[0];
                            else {
                                for (i in n) {
                                    if (!c[0] || t.converters[i + " " + c[0]]) {
                                        o = i;
                                        break
                                    }
                                    s = s || i
                                }
                                o = o || s
                            }
                            if (o)
                                return o !== c[0] && c.unshift(o),
                                n[o]
                        }(m, T, n)),
                        a = function(t, e, n, r) {
                            var i, o, s, a, c, u = {}, l = t.dataTypes.slice();
                            if (l[1])
                                for (s in t.converters)
                                    u[s.toLowerCase()] = t.converters[s];
                            for (o = l.shift(); o; )
                                if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                                !c && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                                c = o,
                                o = l.shift())
                                    if ("*" === o)
                                        o = c;
                                    else if ("*" !== c && c !== o) {
                                        if (!(s = u[c + " " + o] || u["* " + o]))
                                            for (i in u)
                                                if ((a = i.split(" "))[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0],
                                                    l.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && t.throws)
                                                e = s(e);
                                            else
                                                try {
                                                    e = s(e)
                                                } catch (t) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? t : "No conversion from " + c + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: e
                            }
                        }(m, a, T, i),
                        i ? (m.ifModified && ((c = T.getResponseHeader("Last-Modified")) && (_.lastModified[h] = c),
                        (c = T.getResponseHeader("etag")) && (_.etag[h] = c)),
                        204 === t || "HEAD" === m.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state,
                        o = a.data,
                        i = !(s = a.error))) : (s = u,
                        !t && u || (u = "error",
                        t < 0 && (t = 0))),
                        T.status = t,
                        T.statusText = (e || u) + "",
                        i ? b.resolveWith(v, [o, u, T]) : b.rejectWith(v, [T, u, s]),
                        T.statusCode(x),
                        x = void 0,
                        g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : s]),
                        w.fireWith(v, [T, u]),
                        g && (y.trigger("ajaxComplete", [T, m]),
                        --_.active || _.event.trigger("ajaxStop")))
                    }
                    return T
                },
                getJSON: function(t, e, n) {
                    return _.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return _.get(t, void 0, e, "script")
                }
            }),
            _.each(["get", "post"], function(t, i) {
                _[i] = function(t, e, n, r) {
                    return b(e) && (r = r || n,
                    n = e,
                    e = void 0),
                    _.ajax(_.extend({
                        url: t,
                        type: i,
                        dataType: r,
                        data: e,
                        success: n
                    }, _.isPlainObject(t) && t))
                }
            }),
            _._evalUrl = function(t) {
                return _.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(t) {
                        _.globalEval(t)
                    }
                })
            }
            ,
            _.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return this[0] && (b(t) && (t = t.call(this[0])),
                    e = _(t, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function() {
                        for (var t = this; t.firstElementChild; )
                            t = t.firstElementChild;
                        return t
                    }).append(this)),
                    this
                },
                wrapInner: function(n) {
                    return b(n) ? this.each(function(t) {
                        _(this).wrapInner(n.call(this, t))
                    }) : this.each(function() {
                        var t = _(this)
                          , e = t.contents();
                        e.length ? e.wrapAll(n) : t.append(n)
                    })
                },
                wrap: function(e) {
                    var n = b(e);
                    return this.each(function(t) {
                        _(this).wrapAll(n ? e.call(this, t) : e)
                    })
                },
                unwrap: function(t) {
                    return this.parent(t).not("body").each(function() {
                        _(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            _.expr.pseudos.hidden = function(t) {
                return !_.expr.pseudos.visible(t)
            }
            ,
            _.expr.pseudos.visible = function(t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }
            ,
            _.ajaxSettings.xhr = function() {
                try {
                    return new E.XMLHttpRequest
                } catch (t) {}
            }
            ;
            var He = {
                0: 200,
                1223: 204
            }
              , Fe = _.ajaxSettings.xhr();
            y.cors = !!Fe && "withCredentials"in Fe,
            y.ajax = Fe = !!Fe,
            _.ajaxTransport(function(i) {
                var o, s;
                if (y.cors || Fe && !i.crossDomain)
                    return {
                        send: function(t, e) {
                            var n, r = i.xhr();
                            if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                                for (n in i.xhrFields)
                                    r[n] = i.xhrFields[n];
                            for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                            i.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                            t)
                                r.setRequestHeader(n, t[n]);
                            o = function(t) {
                                return function() {
                                    o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? e(0, "error") : e(r.status, r.statusText) : e(He[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders()))
                                }
                            }
                            ,
                            r.onload = o(),
                            s = r.onerror = r.ontimeout = o("error"),
                            void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                                4 === r.readyState && E.setTimeout(function() {
                                    o && s()
                                })
                            }
                            ,
                            o = o("abort");
                            try {
                                r.send(i.hasContent && i.data || null)
                            } catch (t) {
                                if (o)
                                    throw t
                            }
                        },
                        abort: function() {
                            o && o()
                        }
                    }
            }),
            _.ajaxPrefilter(function(t) {
                t.crossDomain && (t.contents.script = !1)
            }),
            _.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return _.globalEval(t),
                        t
                    }
                }
            }),
            _.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET")
            }),
            _.ajaxTransport("script", function(n) {
                var r, i;
                if (n.crossDomain || n.scriptAttrs)
                    return {
                        send: function(t, e) {
                            r = _("<script>").attr(n.scriptAttrs || {}).prop({
                                charset: n.scriptCharset,
                                src: n.url
                            }).on("load error", i = function(t) {
                                r.remove(),
                                i = null,
                                t && e("error" === t.type ? 404 : 200, t.type)
                            }
                            ),
                            S.head.appendChild(r[0])
                        },
                        abort: function() {
                            i && i()
                        }
                    }
            });
            var Ke, We = [], ze = /(=)\?(?=&|$)|\?\?/;
            _.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = We.pop() || _.expando + "_" + Te++;
                    return this[t] = !0,
                    t
                }
            }),
            _.ajaxPrefilter("json jsonp", function(t, e, n) {
                var r, i, o, s = !1 !== t.jsonp && (ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0])
                    return r = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(ze, "$1" + r) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                    t.converters["script json"] = function() {
                        return o || _.error(r + " was not called"),
                        o[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    i = E[r],
                    E[r] = function() {
                        o = arguments
                    }
                    ,
                    n.always(function() {
                        void 0 === i ? _(E).removeProp(r) : E[r] = i,
                        t[r] && (t.jsonpCallback = e.jsonpCallback,
                        We.push(r)),
                        o && b(i) && i(o[0]),
                        o = i = void 0
                    }),
                    "script"
            }),
            y.createHTMLDocument = ((Ke = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Ke.childNodes.length),
            _.parseHTML = function(t, e, n) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
                e = !1),
                e || (y.createHTMLDocument ? ((r = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
                e.head.appendChild(r)) : e = S),
                o = !n && [],
                (i = D.exec(t)) ? [e.createElement(i[1])] : (i = wt([t], e, o),
                o && o.length && _(o).remove(),
                _.merge([], i.childNodes)));
                var r, i, o
            }
            ,
            _.fn.load = function(t, e, n) {
                var r, i, o, s = this, a = t.indexOf(" ");
                return -1 < a && (r = ge(t.slice(a)),
                t = t.slice(0, a)),
                b(e) ? (n = e,
                e = void 0) : e && "object" == (void 0 === e ? "undefined" : Je(e)) && (i = "POST"),
                0 < s.length && _.ajax({
                    url: t,
                    type: i || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    o = arguments,
                    s.html(r ? _("<div>").append(_.parseHTML(t)).find(r) : t)
                }).always(n && function(t, e) {
                    s.each(function() {
                        n.apply(this, o || [t.responseText, e, t])
                    })
                }
                ),
                this
            }
            ,
            _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                _.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }),
            _.offset = {
                setOffset: function(t, e, n) {
                    var r, i, o, s, a, c, u = _.css(t, "position"), l = _(t), h = {};
                    "static" === u && (t.style.position = "relative"),
                    a = l.offset(),
                    o = _.css(t, "top"),
                    c = _.css(t, "left"),
                    i = ("absolute" === u || "fixed" === u) && -1 < (o + c).indexOf("auto") ? (s = (r = l.position()).top,
                    r.left) : (s = parseFloat(o) || 0,
                    parseFloat(c) || 0),
                    b(e) && (e = e.call(t, n, _.extend({}, a))),
                    null != e.top && (h.top = e.top - a.top + s),
                    null != e.left && (h.left = e.left - a.left + i),
                    "using"in e ? e.using.call(t, h) : l.css(h)
                }
            },
            _.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            _.offset.setOffset(this, e, t)
                        });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === _.css(r, "position"))
                            e = r.getBoundingClientRect();
                        else {
                            for (e = this.offset(),
                            n = r.ownerDocument,
                            t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position"); )
                                t = t.parentNode;
                            t && t !== r && 1 === t.nodeType && ((i = _(t).offset()).top += _.css(t, "borderTopWidth", !0),
                            i.left += _.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - i.top - _.css(r, "marginTop", !0),
                            left: e.left - i.left - _.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && "static" === _.css(t, "position"); )
                            t = t.offsetParent;
                        return t || it
                    })
                }
            }),
            _.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, i) {
                var o = "pageYOffset" === i;
                _.fn[e] = function(t) {
                    return F(this, function(t, e, n) {
                        var r;
                        if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                        void 0 === n)
                            return r ? r[i] : t[e];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : t[e] = n
                    }, e, t, arguments.length)
                }
            }),
            _.each(["top", "left"], function(t, n) {
                _.cssHooks[n] = Xt(y.pixelPosition, function(t, e) {
                    if (e)
                        return e = $t(t, n),
                        Wt.test(e) ? _(t).position()[n] + "px" : e
                })
            }),
            _.each({
                Height: "height",
                Width: "width"
            }, function(s, a) {
                _.each({
                    padding: "inner" + s,
                    content: a,
                    "": "outer" + s
                }, function(r, o) {
                    _.fn[o] = function(t, e) {
                        var n = arguments.length && (r || "boolean" != typeof t)
                          , i = r || (!0 === t || !0 === e ? "margin" : "border");
                        return F(this, function(t, e, n) {
                            var r;
                            return g(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (r = t.documentElement,
                            Math.max(t.body["scroll" + s], r["scroll" + s], t.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? _.css(t, e, i) : _.style(t, e, n, i)
                        }, a, n ? t : void 0, n)
                    }
                })
            }),
            _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
                _.fn[n] = function(t, e) {
                    return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
                }
            }),
            _.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }),
            _.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, r) {
                    return this.on(e, t, n, r)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }),
            _.proxy = function(t, e) {
                var n, r, i;
                if ("string" == typeof e && (n = t[e],
                e = t,
                t = n),
                b(t))
                    return r = a.call(arguments, 2),
                    (i = function() {
                        return t.apply(e || this, r.concat(a.call(arguments)))
                    }
                    ).guid = t.guid = t.guid || _.guid++,
                    i
            }
            ,
            _.holdReady = function(t) {
                t ? _.readyWait++ : _.ready(!0)
            }
            ,
            _.isArray = Array.isArray,
            _.parseJSON = JSON.parse,
            _.nodeName = C,
            _.isFunction = b,
            _.isWindow = g,
            _.camelCase = G,
            _.type = x,
            _.now = Date.now,
            _.isNumeric = function(t) {
                var e = _.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }
            ,
            void 0 === (Qe = function() {
                return _
            }
            .apply(Ze, [])) || (Xe.exports = Qe);
            var Ge = E.jQuery
              , $e = E.$;
            return _.noConflict = function(t) {
                return E.$ === _ && (E.$ = $e),
                t && E.jQuery === _ && (E.jQuery = Ge),
                _
            }
            ,
            t || (E.jQuery = E.$ = _),
            _
        }
        ,
        "object" == Je(Xe) && "object" == Je(Xe.exports) ? Xe.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return e(t)
        }
        : e(t)
    }
    ).call(this, e(28)(t))
}
, function(t, e) {
    var n = {
        utf8: {
            stringToBytes: function(t) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            bytesToString: function(t) {
                return decodeURIComponent(escape(n.bin.bytesToString(t)))
            }
        },
        bin: {
            stringToBytes: function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e.push(255 & t.charCodeAt(n));
                return e
            },
            bytesToString: function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e.push(String.fromCharCode(t[n]));
                return e.join("")
            }
        }
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    t.exports = function(n, r) {
        return function() {
            for (var t = new Array(arguments.length), e = 0; e < t.length; e++)
                t[e] = arguments[e];
            return n.apply(r, t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var s = n(3);
    function a(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    t.exports = function(t, e, n) {
        if (!e)
            return t;
        var r;
        if (n)
            r = n(e);
        else if (s.isURLSearchParams(e))
            r = e.toString();
        else {
            var i = [];
            s.forEach(e, function(t, e) {
                null != t && (s.isArray(t) ? e += "[]" : t = [t],
                s.forEach(t, function(t) {
                    s.isDate(t) ? t = t.toISOString() : s.isObject(t) && (t = JSON.stringify(t)),
                    i.push(a(e) + "=" + a(t))
                }))
            }),
            r = i.join("&")
        }
        if (r) {
            var o = t.indexOf("#");
            -1 !== o && (t = t.slice(0, o)),
            t += (-1 === t.indexOf("?") ? "?" : "&") + r
        }
        return t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}
, function(a, t, c) {
    "use strict";
    (function(t) {
        var n = c(3)
          , r = c(39)
          , e = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function i(t, e) {
            !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var o, s = {
            adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? o = c(15) : "undefined" != typeof XMLHttpRequest && (o = c(15)),
            o),
            transformRequest: [function(t, e) {
                return r(e, "Accept"),
                r(e, "Content-Type"),
                n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (i(e, "application/x-www-form-urlencoded;charset=utf-8"),
                t.toString()) : n.isObject(t) ? (i(e, "application/json;charset=utf-8"),
                JSON.stringify(t)) : t
            }
            ],
            transformResponse: [function(t) {
                if ("string" == typeof t)
                    try {
                        t = JSON.parse(t)
                    } catch (t) {}
                return t
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return 200 <= t && t < 300
            }
        };
        s.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        n.forEach(["delete", "get", "head"], function(t) {
            s.headers[t] = {}
        }),
        n.forEach(["post", "put", "patch"], function(t) {
            s.headers[t] = n.merge(e)
        }),
        a.exports = s
    }
    ).call(this, c(38))
}
, function(t, e, l) {
    "use strict";
    var h = l(3)
      , f = l(40)
      , d = l(12)
      , p = l(42)
      , g = l(43)
      , m = l(16);
    t.exports = function(u) {
        return new Promise(function(n, r) {
            var i = u.data
              , o = u.headers;
            h.isFormData(i) && delete o["Content-Type"];
            var s = new XMLHttpRequest;
            if (u.auth) {
                var t = u.auth.username || ""
                  , e = u.auth.password || "";
                o.Authorization = "Basic " + btoa(t + ":" + e)
            }
            if (s.open(u.method.toUpperCase(), d(u.url, u.params, u.paramsSerializer), !0),
            s.timeout = u.timeout,
            s.onreadystatechange = function() {
                if (s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:"))) {
                    var t = "getAllResponseHeaders"in s ? p(s.getAllResponseHeaders()) : null
                      , e = {
                        data: u.responseType && "text" !== u.responseType ? s.response : s.responseText,
                        status: s.status,
                        statusText: s.statusText,
                        headers: t,
                        config: u,
                        request: s
                    };
                    f(n, r, e),
                    s = null
                }
            }
            ,
            s.onabort = function() {
                s && (r(m("Request aborted", u, "ECONNABORTED", s)),
                s = null)
            }
            ,
            s.onerror = function() {
                r(m("Network Error", u, null, s)),
                s = null
            }
            ,
            s.ontimeout = function() {
                r(m("timeout of " + u.timeout + "ms exceeded", u, "ECONNABORTED", s)),
                s = null
            }
            ,
            h.isStandardBrowserEnv()) {
                var a = l(44)
                  , c = (u.withCredentials || g(u.url)) && u.xsrfCookieName ? a.read(u.xsrfCookieName) : void 0;
                c && (o[u.xsrfHeaderName] = c)
            }
            if ("setRequestHeader"in s && h.forEach(o, function(t, e) {
                void 0 === i && "content-type" === e.toLowerCase() ? delete o[e] : s.setRequestHeader(e, t)
            }),
            u.withCredentials && (s.withCredentials = !0),
            u.responseType)
                try {
                    s.responseType = u.responseType
                } catch (t) {
                    if ("json" !== u.responseType)
                        throw t
                }
            "function" == typeof u.onDownloadProgress && s.addEventListener("progress", u.onDownloadProgress),
            "function" == typeof u.onUploadProgress && s.upload && s.upload.addEventListener("progress", u.onUploadProgress),
            u.cancelToken && u.cancelToken.promise.then(function(t) {
                s && (s.abort(),
                r(t),
                s = null)
            }),
            void 0 === i && (i = null),
            s.send(i)
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    var s = n(41);
    t.exports = function(t, e, n, r, i) {
        var o = new Error(t);
        return s(o, e, n, r, i)
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(3);
    t.exports = function(e, n) {
        n = n || {};
        var r = {};
        return i.forEach(["url", "method", "params", "data"], function(t) {
            void 0 !== n[t] && (r[t] = n[t])
        }),
        i.forEach(["headers", "auth", "proxy"], function(t) {
            i.isObject(n[t]) ? r[t] = i.deepMerge(e[t], n[t]) : void 0 !== n[t] ? r[t] = n[t] : i.isObject(e[t]) ? r[t] = i.deepMerge(e[t]) : void 0 !== e[t] && (r[t] = e[t])
        }),
        i.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(t) {
            void 0 !== n[t] ? r[t] = n[t] : void 0 !== e[t] && (r[t] = e[t])
        }),
        r
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        this.message = t
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    r.prototype.__CANCEL__ = !0,
    t.exports = r
}
, function(F, K, W) {
    var z;
    !function(i, h) {
        "use strict";
        function t(t) {
            for (var e = {}, n = 0; n < t.length; n++)
                e[t[n].toUpperCase()] = t[n];
            return e
        }
        function o(t, e) {
            return typeof t == u && -1 !== L(e).indexOf(L(t))
        }
        function s(t, e) {
            if (typeof t == u)
                return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                typeof e == c ? t : t.substring(0, 255)
        }
        function a(t, e) {
            for (var n, r, i, o, s, a, c = 0; c < e.length && !s; ) {
                var u = e[c]
                  , l = e[c + 1];
                for (n = r = 0; n < u.length && !s; )
                    if (s = u[n++].exec(t))
                        for (i = 0; i < l.length; i++)
                            a = s[++r],
                            typeof (o = l[i]) == d && 0 < o.length ? 2 === o.length ? typeof o[1] == f ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] != f || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : h : this[o[0]] = a ? o[1].call(this, a, o[2]) : h : 4 === o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : h) : this[o] = a || h;
                c += 2
            }
        }
        function e(t, e) {
            for (var n in e)
                if (typeof e[n] == d && 0 < e[n].length) {
                    for (var r = 0; r < e[n].length; r++)
                        if (o(e[n][r], t))
                            return "?" === n ? h : n
                } else if (o(e[n], t))
                    return "?" === n ? h : n;
            return t
        }
        var f = "function"
          , c = "undefined"
          , d = "object"
          , u = "string"
          , l = "model"
          , p = "name"
          , g = "type"
          , m = "vendor"
          , v = "version"
          , y = "architecture"
          , n = "console"
          , r = "mobile"
          , b = "tablet"
          , w = "smarttv"
          , x = "wearable"
          , T = "embedded"
          , E = "Amazon"
          , S = "Apple"
          , _ = "BlackBerry"
          , A = "Browser"
          , k = "Chrome"
          , C = "Firefox"
          , D = "Google"
          , N = "Microsoft"
          , O = "Motorola"
          , R = "Opera"
          , I = "Samsung"
          , P = "Sony"
          , j = "Zebra"
          , B = "Facebook"
          , L = function(t) {
            return t.toLowerCase()
        }
          , M = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        }
          , V = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [v, [p, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [v, [p, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [p, v], [/opios[\/ ]+([\w\.]+)/i], [v, [p, R + " Mini"]], [/\bopr\/([\w\.]+)/i], [v, [p, R]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [p, v], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [v, [p, "UC" + A]], [/\bqbcore\/([\w\.]+)/i], [v, [p, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [v, [p, "WeChat"]], [/konqueror\/([\w\.]+)/i], [v, [p, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [v, [p, "IE"]], [/yabrowser\/([\w\.]+)/i], [v, [p, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[p, /(.+)/, "$1 Secure " + A], v], [/\bfocus\/([\w\.]+)/i], [v, [p, C + " Focus"]], [/\bopt\/([\w\.]+)/i], [v, [p, R + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [v, [p, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [v, [p, "Dolphin"]], [/coast\/([\w\.]+)/i], [v, [p, R + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [v, [p, "MIUI " + A]], [/fxios\/([-\w\.]+)/i], [v, [p, C]], [/\bqihu|(qi?ho?o?|360)browser/i], [[p, "360 " + A]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[p, /(.+)/, "$1 " + A], v], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], v], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [p, v], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [p], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[p, B], v], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [p, v], [/\bgsa\/([\w\.]+) .*safari\//i], [v, [p, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [v, [p, k + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[p, k + " WebView"], v], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [v, [p, "Android " + A]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [p, v], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [v, [p, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [v, p], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [p, [v, e, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }]], [/(webkit|khtml)\/([\w\.]+)/i], [p, v], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[p, "Netscape"], v], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [v, [p, C + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [p, v]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[y, "amd64"]], [/(ia32(?=;))/i], [[y, L]], [/((?:i[346]|x)86)[;\)]/i], [[y, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[y, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[y, "armhf"]], [/windows (ce|mobile); ppc;/i], [[y, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[y, /ower/, "", L]], [/(sun4\w)[;\)]/i], [[y, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[y, L]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [l, [m, I], [g, b]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [l, [m, I], [g, r]], [/\((ip(?:hone|od)[\w ]*);/i], [l, [m, S], [g, r]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [l, [m, S], [g, b]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [l, [m, "Huawei"], [g, b]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [l, [m, "Huawei"], [g, r]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[l, /_/g, " "], [m, "Xiaomi"], [g, r]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[l, /_/g, " "], [m, "Xiaomi"], [g, b]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [l, [m, "OPPO"], [g, r]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [l, [m, "Vivo"], [g, r]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [l, [m, "Realme"], [g, r]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [l, [m, O], [g, r]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [l, [m, O], [g, b]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [l, [m, "LG"], [g, b]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [l, [m, "LG"], [g, r]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [l, [m, "Lenovo"], [g, b]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[l, /_/g, " "], [m, "Nokia"], [g, r]], [/(pixel c)\b/i], [l, [m, D], [g, b]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [l, [m, D], [g, r]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [l, [m, P], [g, r]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[l, "Xperia Tablet"], [m, P], [g, b]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [l, [m, "OnePlus"], [g, r]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [l, [m, E], [g, b]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[l, /(.+)/g, "Fire Phone $1"], [m, E], [g, r]], [/(playbook);[-\w\),; ]+(rim)/i], [l, m, [g, b]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [l, [m, _], [g, r]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [l, [m, "ASUS"], [g, b]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [l, [m, "ASUS"], [g, r]], [/(nexus 9)/i], [l, [m, "HTC"], [g, b]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [m, [l, /_/g, " "], [g, r]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [l, [m, "Acer"], [g, b]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [l, [m, "Meizu"], [g, r]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [l, [m, "Sharp"], [g, r]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [m, l, [g, r]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [m, l, [g, b]], [/(surface duo)/i], [l, [m, N], [g, b]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [l, [m, "Fairphone"], [g, r]], [/(u304aa)/i], [l, [m, "AT&T"], [g, r]], [/\bsie-(\w*)/i], [l, [m, "Siemens"], [g, r]], [/\b(rct\w+) b/i], [l, [m, "RCA"], [g, b]], [/\b(venue[\d ]{2,7}) b/i], [l, [m, "Dell"], [g, b]], [/\b(q(?:mv|ta)\w+) b/i], [l, [m, "Verizon"], [g, b]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [l, [m, "Barnes & Noble"], [g, b]], [/\b(tm\d{3}\w+) b/i], [l, [m, "NuVision"], [g, b]], [/\b(k88) b/i], [l, [m, "ZTE"], [g, b]], [/\b(nx\d{3}j) b/i], [l, [m, "ZTE"], [g, r]], [/\b(gen\d{3}) b.+49h/i], [l, [m, "Swiss"], [g, r]], [/\b(zur\d{3}) b/i], [l, [m, "Swiss"], [g, b]], [/\b((zeki)?tb.*\b) b/i], [l, [m, "Zeki"], [g, b]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[m, "Dragon Touch"], l, [g, b]], [/\b(ns-?\w{0,9}) b/i], [l, [m, "Insignia"], [g, b]], [/\b((nxa|next)-?\w{0,9}) b/i], [l, [m, "NextBook"], [g, b]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[m, "Voice"], l, [g, r]], [/\b(lvtel\-)?(v1[12]) b/i], [[m, "LvTel"], l, [g, r]], [/\b(ph-1) /i], [l, [m, "Essential"], [g, r]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [l, [m, "Envizen"], [g, b]], [/\b(trio[-\w\. ]+) b/i], [l, [m, "MachSpeed"], [g, b]], [/\btu_(1491) b/i], [l, [m, "Rotor"], [g, b]], [/(shield[\w ]+) b/i], [l, [m, "Nvidia"], [g, b]], [/(sprint) (\w+)/i], [m, l, [g, r]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [m, N], [g, r]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [l, [m, j], [g, b]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [l, [m, j], [g, r]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [m, l, [g, n]], [/droid.+; (shield) bui/i], [l, [m, "Nvidia"], [g, n]], [/(playstation [345portablevi]+)/i], [l, [m, P], [g, n]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [l, [m, N], [g, n]], [/smart-tv.+(samsung)/i], [m, [g, w]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [m, I], [g, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[m, "LG"], [g, w]], [/(apple) ?tv/i], [m, [l, S + " TV"], [g, w]], [/crkey/i], [[l, k + "cast"], [m, D], [g, w]], [/droid.+aft(\w)( bui|\))/i], [l, [m, E], [g, w]], [/\(dtv[\);].+(aquos)/i], [l, [m, "Sharp"], [g, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[m, s], [l, s], [g, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[g, w]], [/((pebble))app/i], [m, l, [g, x]], [/droid.+; (glass) \d/i], [l, [m, D], [g, x]], [/droid.+; (wt63?0{2,3})\)/i], [l, [m, j], [g, x]], [/(quest( 2)?)/i], [l, [m, B], [g, x]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [m, [g, T]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [l, [g, r]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [l, [g, b]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[g, b]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[g, r]], [/(android[-\w\. ]{0,9});.+buil/i], [l, [m, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [v, [p, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [v, [p, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [p, v], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [v, p]],
            os: [[/microsoft (windows) (vista|xp)/i], [p, v], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [p, [v, e, M]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[p, "Windows"], [v, e, M]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[v, /_/g, "."], [p, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[p, "Mac OS"], [v, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [v, p], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [p, v], [/\(bb(10);/i], [v, [p, _]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [v, [p, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [v, [p, C + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [v, [p, "webOS"]], [/crkey\/([\d\.]+)/i], [v, [p, k + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[p, "Chromium OS"], v], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [p, v], [/(sunos) ?([\w\.\d]*)/i], [[p, "Solaris"], v], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [p, v]]
        }
          , q = function(t, e) {
            if (typeof t == d && (e = t,
            t = h),
            !(this instanceof q))
                return new q(t,e).getResult();
            var n = t || (typeof i != c && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : "")
              , r = e ? function(t, e) {
                var n = {};
                for (var r in t)
                    e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r];
                return n
            }(V, e) : V;
            return this.getBrowser = function() {
                var t = {};
                return t[p] = h,
                t[v] = h,
                a.call(t, n, r.browser),
                t.major = function(t) {
                    return typeof t == u ? t.replace(/[^\d\.]/g, "").split(".")[0] : h
                }(t.version),
                t
            }
            ,
            this.getCPU = function() {
                var t = {};
                return t[y] = h,
                a.call(t, n, r.cpu),
                t
            }
            ,
            this.getDevice = function() {
                var t = {};
                return t[m] = h,
                t[l] = h,
                t[g] = h,
                a.call(t, n, r.device),
                t
            }
            ,
            this.getEngine = function() {
                var t = {};
                return t[p] = h,
                t[v] = h,
                a.call(t, n, r.engine),
                t
            }
            ,
            this.getOS = function() {
                var t = {};
                return t[p] = h,
                t[v] = h,
                a.call(t, n, r.os),
                t
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return n
            }
            ,
            this.setUA = function(t) {
                return n = typeof t == u && 255 < t.length ? s(t, 255) : t,
                this
            }
            ,
            this.setUA(n),
            this
        };
        q.VERSION = "1.0.2",
        q.BROWSER = t([p, v, "major"]),
        q.CPU = t([y]),
        q.DEVICE = t([l, m, g, n, r, w, b, x, T]),
        q.ENGINE = q.OS = t([p, v]),
        typeof K != c ? (typeof F != c && F.exports && (K = F.exports = q),
        K.UAParser = q) : W(51) ? (z = function() {
            return q
        }
        .call(K, W, K, F)) === h || (F.exports = z) : typeof i != c && (i.UAParser = q);
        var U = typeof i != c && (i.jQuery || i.Zepto);
        if (U && !U.ua) {
            var H = new q;
            U.ua = H.getResult(),
            U.ua.get = function() {
                return H.getUA()
            }
            ,
            U.ua.set = function(t) {
                H.setUA(t);
                var e = H.getResult();
                for (var n in e)
                    U.ua[n] = e[n]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    };
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    n(21);
    var o = m(n(26))
      , a = m(n(8))
      , c = m(n(27));
    n(52);
    var h = m(n(9))
      , f = m(n(6))
      , s = n(0)
      , d = n(1)
      , u = m(n(53))
      , l = n(54)
      , p = m(n(56))
      , g = m(n(57));
    function m(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var v = n(58)
      , y = {
        text: "https://ke.com/",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: p.default.CorrectLevel.H
    }
      , b = {
        phonenum: "username",
        picverifycode: "code",
        messageverifycode: "smsCode",
        password: "password",
        setpassword: "pwd",
        remember: "remember",
        protocol: "protocol"
    }
      , w = {
        phonenum: {
            regExp: /^\d{11}$/,
            hintKeyword: "请输入有效的手机号码"
        },
        picverifycode: {
            regExp: /^\w{4}$/,
            hintKeyword: "请输入图形验证码"
        },
        messageverifycode: {
            regExp: /^\d{6}$/,
            hintKeyword: "请输入短信/语音验证码"
        },
        password: {
            regExp: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
            hintKeyword: "请输入不少于8位或大于20位的密码（数字+字母）"
        },
        setpassword: {
            regExp: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
            hintKeyword: "请输入不少于8位或大于20位的密码（数字+字母）"
        },
        protocol: {
            hintKeyword: "请勾选同意相关协议"
        }
    }
      , x = {
        ke: [{
            title: "《贝壳隐私政策》",
            url: "zhuanti/protocol"
        }, {
            title: "《贝壳用户服务协议》",
            url: "zhuanti/serviceProtocol"
        }],
        lianjia: [{
            title: "《链家隐私政策》",
            url: "privacy"
        }, {
            title: "《链家用户使用协议》",
            url: "zhuanti/protocol"
        }]
    }
      , T = ["phonenum", "picverifycode", "messageverifycode", "password", "setpassword", "remember", "protocol"]
      , E = ["op", "title", "hint", "change_login_type", "forget_password"]
      , S = {
        transway: {
            ke: {
                evtid: "24936",
                event: "WebClick",
                action: {
                    source_type: "beike_pc_upassport"
                }
            },
            lianjia: {
                evtid: "24940",
                event: "WebClick",
                action: {
                    source_type: "lianjia_pc_upassport"
                }
            }
        },
        confirmLogin: {
            ke: {
                evtid: "24935",
                event: "WebClick",
                action: {
                    source_type: "beike_pc_upassport"
                }
            },
            lianjia: {
                evtid: "24939",
                event: "WebClick",
                action: {
                    source_type: "lianjia_pc_upassport"
                }
            }
        },
        getSms: {
            ke: {
                evtid: "24934",
                event: "WebClick",
                action: {
                    source_type: "beike_pc_upassport"
                }
            },
            lianjia: {
                evtid: "24938",
                event: "WebClick",
                action: {
                    source_type: "lianjia_pc_upassport"
                }
            }
        }
    };
    function _(t) {
        !function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, _),
        this.env = t.env || o.default,
        this.single = null,
        this.successCallback = {
            login: new Function,
            register: new Function,
            forget: new Function
        },
        this.faillCallback = new Function,
        this.userInfo = null,
        this.passport = null,
        this.ulog = null,
        this.currentType = null,
        this.sendingApiRequest = !1,
        this.picverifycode = !1,
        this.loginQueue = [],
        this.configService = t.service || null,
        this.stCallback = null,
        this.userInfoFn = null,
        this.logoutRedirect = null,
        this.logoutUrl = null,
        this.clickPos = {}
    }
    var A = (r(_, [{
        key: "config",
        value: function(t) {
            if (this.qrDom = t.qrDom,
            this.qrData = t.qrData,
            this.env = t.env || this.env,
            this.configService = t.service || this.configService,
            this.successCallback.login = t.loginCallback ? t.loginCallback : this.successCallback.login,
            this.successCallback.register = t.registerCallback ? t.registerCallback : this.successCallback.register,
            this.successCallback.forget = t.forgetCallback ? t.forgetCallback : this.successCallback.forget,
            this.faillCallback = t.faillCallback ? t.faillCallback : this.faillCallback,
            this.stCallback = t.stCallback ? t.stCallback : this.stCallback,
            this.userInfoFn = t.userInfoFn ? t.userInfoFn : this.userInfoFn,
            t.stCallback && !t.userInfoFn)
                throw "stCallback must be set together";
            this.logoutRedirect = t.logoutRedirect ? t.logoutRedirect : this.logoutRedirect,
            this.logoutUrl = t.logoutUrl ? t.logoutUrl : this.logoutUrl,
            this.getUserInfo()
        }
    }, {
        key: "sendDig",
        value: function(t) {
            this.ulog && this.ulog.send(this.currentType, t)
        }
    }, {
        key: "formData",
        value: function(t) {
            var e = this
              , n = '<p style="color:#AAA;margin-top: 10px;font-size: 12px;line-height: 14px;">登录即代表同意' + x[f.default].map(function(t) {
                return '<a class="link-btn _color" href="' + (0,
                a.default)(e.env).domainConfig.wwwroot + t.url + '" target="_blank">' + t.title + "</a>"
            }).join("及") + "</p>";
            return {
                0: {
                    op: "登录",
                    title: "手机快捷登录",
                    display: ["phonenum", "messageverifycode", "remember"],
                    hint: "别担心，无账号自动注册不会导致手机号被泄露",
                    change_login_type: '<a class="change_login_type _color" data-type="1">账号密码登录</a>' + n
                },
                1: {
                    op: "登录",
                    title: "账号密码登录",
                    display: ["phonenum", "password", "remember"],
                    change_login_type: '<a class="change_login_type _color"  data-type="0">手机快捷登录</a>' + n,
                    forget_password: '<a  class="forget_password _color" data-type="3">忘记密码</a>'
                },
                2: {
                    op: "注册",
                    title: "手机号码注册",
                    display: ["phonenum", "messageverifycode", "password", "protocol"],
                    hint: '<div style="float:right;position: relative;top:-34px;">已有账号？<a class="change_login_type link-btn _color" data-type="0">去登录</a></div>'
                },
                3: {
                    op: "修改密码",
                    title: "找回密码",
                    display: ["phonenum", "messageverifycode", "setpassword"],
                    change_login_type: '<a class="change_login_type _color"  data-type="1">账号密码登录</a>'
                },
                4: {
                    op: "登录",
                    title: "扫码登录",
                    display: []
                }
            }[t] || {}
        }
    }, {
        key: "getEle",
        value: function(t) {
            return this.loginModel.find(t)
        }
    }, {
        key: "callbacks",
        value: function() {
            var e = this;
            this.loginQueue.forEach(function(t) {
                t(e.userInfo)
            }),
            this.loginQueue = []
        }
    }, {
        key: "bind",
        value: function(t) {
            "function" == typeof t && (this.userInfo ? t(this.userInfo) : this.loginQueue.push(t))
        }
    }, {
        key: "getSyncData",
        value: function() {
            var n = this;
            return new Promise(function(e, t) {
                n.bind(function(t) {
                    e(t)
                })
            }
            )
        }
    }, {
        key: "getUserInfo",
        value: function(e, t) {
            var n = this;
            if (this.userInfo)
                "function" == typeof e && e(this.userInfo);
            else if (this.userInfoFn)
                this.userInfoFn(function(t) {
                    t.data && 1 == t.code && (n.userInfo = t.data,
                    n.userInfo.code = t.code),
                    "function" == typeof e && e(n.userInfo)
                }, t);
            else if (this.configService)
                h.default.ajax({
                    url: this.configService,
                    method: "GET",
                    xhrFields: {
                        withCredentials: d.withCredential
                    },
                    success: function(t) {
                        t.data && 1 == t.code && (n.userInfo = t.data,
                        n.userInfo.code = t.code)
                    },
                    complete: function() {
                        "function" == typeof e && e(n.userInfo),
                        n.callbacks()
                    }
                });
            else {
                var r = {};
                t && (r.service = t),
                h.default.ajax({
                    url: (0,
                    a.default)(this.env).domainConfig.ajaxapiroot + "login/login/getuserinfo",
                    dataType: "jsonp",
                    data: r,
                    success: function(t) {
                        t.data && 1 == t.code && (n.userInfo = t.data,
                        n.userInfo.code = t.code)
                    },
                    complete: function() {
                        "function" == typeof e && e(n.userInfo),
                        n.callbacks()
                    }
                })
            }
        }
    }, {
        key: "logout",
        value: function(t) {
            var e = this
              , n = s.APIDomainKe[this.env];
            function r(t) {
                e.userInfo && (window.location.href = n + "/logout?service=" + t)
            }
            "lianjia" === d.plat && (n = s.APIDomainLianjia[this.env]);
            var i = null;
            if (this.configService)
                i = encodeURIComponent("" + this.configService);
            else {
                if (!this.userInfo)
                    return this.getUserInfo(function(t) {
                        r((0,
                        d.getQuery)("service", e.userInfo.logoutUrl))
                    });
                i = (0,
                d.getQuery)("service", this.userInfo.logoutUrl)
            }
            t && t.logoutRedirect ? this.getUserInfo(function(t) {
                return r((0,
                d.getQuery)("service", e.userInfo.logoutUrl))
            }, t.logoutRedirect) : this.logoutRedirect ? this.getUserInfo(function(t) {
                return r((0,
                d.getQuery)("service", e.userInfo.logoutUrl))
            }, this.logoutRedirect) : this.logoutUrl ? window.location.href = this.logoutUrl : r(i)
        }
    }, {
        key: "showSendVoiceEntrance",
        value: function() {
            this.getEle(".login_voice").show()
        }
    }, {
        key: "hideSendVoiceEntrance",
        value: function() {
            this.getEle(".login_voice").hide()
        }
    }, {
        key: "messageCountdown",
        value: function() {
            var t = this;
            if (!this.sendingApiRequest) {
                var e = this.getEle(".send_login_message_verify");
                e.addClass("login_disable");
                var n = e.find("em")
                  , r = 60;
                this.sendingApiRequest = setInterval(function() {
                    n.text(r-- + "s后重新发送"),
                    0 === r && (t.showSendVoiceEntrance(),
                    e.removeClass("login_disable"),
                    n.text("重新发送验证码"),
                    clearInterval(t.sendingApiRequest),
                    t.sendingApiRequest = !1)
                }, 1e3)
            }
        }
    }, {
        key: "clearAllForms",
        value: function() {
            var n = this;
            this._clearAllRedBorder(),
            T.forEach(function(t) {
                var e = n.getEle("." + t + " input");
                "checkbox" == e.attr("type") ? e.val(e.data("defval")) : e.val(""),
                n.getEle("." + t).hide()
            }),
            E.forEach(function(t) {
                n.getEle(".login_panel_" + t).empty()
            }),
            this.hideError(),
            this.formData("1").display = ["phonenum", "password", "remember"];
            var t = this.getEle(".send_login_message_verify");
            t.removeClass("login_disable"),
            t.find("em").text("获取验证码"),
            clearInterval(this.sendingApiRequest),
            this.sendingApiRequest = !1,
            this.getEle(".picverifycode").hide(),
            this.picverifycode = !1
        }
    }, {
        key: "getClickPos",
        value: function(t) {
            var e = (0,
            h.default)(".login_submit")
              , n = {
                registerPosLx: e.offset().left,
                registerPosLy: e.offset().top - (0,
                h.default)(document).scrollTop(),
                registerPosRx: e.offset().left + e.width(),
                registerPosRy: e.offset().top + e.height(),
                clickPosX: t.clientX,
                clickPosY: t.clientY,
                screen: (0,
                h.default)(window).width() + "_" + (0,
                h.default)(window).height()
            };
            this.clickPos = n
        }
    }, {
        key: "bindEvts",
        value: function() {
            var o = this
              , s = this;
            this.loginModel.on("click", "[data-type]", function(t) {
                var e = this;
                window.login_track.send(S.transway[f.default].evtid, S.transway[f.default].event, S.transway[f.default].action);
                var n = void 0;
                switch ((0,
                h.default)(this).data("type")) {
                case 0:
                case 1:
                    n = "SWITCH_LOGIN";
                    break;
                case 3:
                    n = "FORGOT"
                }
                n && s.sendDig(n),
                setTimeout(function() {
                    var t = (0,
                    h.default)(e).data("type");
                    s.init(t)
                })
            }),
            this.loginModel.on("click", ".login_panel_close,.login_bg", function() {
                o.sendDig("CLOSE"),
                o.destroy()
            }).on("click", ".password-view", function() {
                var t = (0,
                h.default)(this).siblings(".password_type");
                "password" == t.attr("type") ? t.attr("type", "text") : t.attr("type", "password")
            }).on("keyup", "input", function(t) {
                13 == t.keyCode && (o.getClickPos({
                    clientX: -911,
                    clientY: -911
                }),
                o.processSubmit(o.currentType))
            }).on("click", ".login_submit", function(t) {
                o.getClickPos(t),
                o.processSubmit(o.currentType)
            }).on("click", ".tologin", function() {
                s.init(0)
            }).on("click", ".login_verify_img", function() {
                o.changeVerifyImg()
            }).on("click", ".checkbox-btn", function() {
                var t = (0,
                h.default)(this).find("input").get(0);
                t.checked ? t.value = 1 : t.value = 0
            }).on("click", ".login_send_voice", function() {
                if (!o.validateForm(null, ["phonenum"], !0))
                    return !1;
                var e = {
                    phone: o.getEle(".phonenum_input").val()
                }
                  , n = {
                    data: e,
                    method: "post",
                    sdk: "auth"
                };
                function r(t) {
                    o.showError("验证码将以电话的形式的通知到您，请注意接听"),
                    o.hideSendVoiceEntrance(),
                    t.data.success ? (s.messageCountdown(),
                    s.hideError(),
                    t.data.securityCode && (0,
                    h.default)(".messageverifycode_input").val(t.data.securityCode)) : !t.data.success && t.data.exception && "captcha.incorrect" === t.data.exception.code ? s.passport.showCaptcha(i, {
                        identity: {
                            phone: e.phone
                        }
                    }) : s.showError(t.data.message)
                }
                3 === o.currentType ? (n.sceneKey = "WHEN_RESET_PASSWORD",
                n.sdk = "password") : o.currentType;
                var i = function(t) {
                    if (!t)
                        return s.showError("发送失败，请重试");
                    s.passport.api.sendVerifyVoiceCode(n).then(r).catch(function(t) {
                        s.showError("发送失败，请重试")
                    })
                };
                i(!0)
            }).on("click", ".send_login_message_verify", function() {
                if (window.login_track.send(S.getSms[f.default].evtid, S.getSms[f.default].event, S.getSms[f.default].action),
                !o.validateForm(null, ["phonenum"], !0))
                    return !1;
                if (!o.sendingApiRequest) {
                    var e = {
                        phone: o.getEle(".phonenum_input").val()
                    }
                      , n = {
                        data: e,
                        method: "post",
                        sdk: "auth"
                    };
                    switch (o.currentType) {
                    case 1:
                        n.scene = "";
                        break;
                    case 2:
                        n.sceneKey = "WHEN_REGISTER";
                        break;
                    case 3:
                        n.sceneKey = "WHEN_RESET_PASSWORD",
                        n.sdk = "password";
                        break;
                    case 4:
                        n.scene = ""
                    }
                    var r = function(t) {
                        t.data.success ? (o.messageCountdown(),
                        o.hideError(),
                        t.data.securityCode && (0,
                        h.default)(".messageverifycode_input").val(t.data.securityCode)) : !t.data.success && t.data.exception && "captcha.incorrect" === t.data.exception.code ? o.passport.showCaptcha(i, {
                            identity: {
                                phone: e.phone
                            }
                        }) : o.showError(t.data.message)
                    }
                      , i = function(t) {
                        if (!t)
                            return o.showError("发送失败，请重试");
                        o.passport.api.sendVerifyCode(n).then(r).catch(function(t) {
                            o.showError("发送失败，请重试")
                        })
                    };
                    i(!0)
                }
            })
        }
    }, {
        key: "getValue",
        value: function(t) {
            var e = this
              , n = {};
            return this.formData(t).display.forEach(function(t) {
                n[b[t]] = e.getEle("." + t + "_input").val()
            }),
            n
        }
    }, {
        key: "_clearAllRedBorder",
        value: function() {
            var e = this;
            Object.keys(w).forEach(function(t) {
                e.getEle("." + t).removeClass("input_error")
            })
        }
    }, {
        key: "validateForm",
        value: function(t, e, n) {
            var i = this
              , o = !1;
            this.getEle(".login_error_tip"),
            this.hideError(),
            this._clearAllRedBorder();
            var r = [];
            return n || this.formData(t).display.forEach(function(t) {
                r.push(t)
            }),
            e.forEach(function(t) {
                -1 === r.indexOf(t) && r.push(t)
            }),
            r.forEach(function(t) {
                if (!o) {
                    var e = i.getEle("." + t + "_input")
                      , n = e.val();
                    if (null == n || "" === n || e.data("require") && 0 == n)
                        o = !0,
                        i.getEle("." + t).addClass("input_error"),
                        i.showError("" + w[t].hintKeyword);
                    else if (w[t] && w[t].regExp) {
                        var r = w[t].regExp;
                        n.match(r) || (o = !0,
                        i.getEle("." + t).addClass("input_error"),
                        i.showError("" + w[t].hintKeyword))
                    }
                }
            }),
            !o
        }
    }, {
        key: "processSubmit",
        value: function(t) {
            var o = this;
            this.sendDig("LOGIN"),
            2 != t && window.login_track.send(S.confirmLogin[f.default].evtid, S.confirmLogin[f.default].event, S.confirmLogin[f.default].action);
            var e = this.passport
              , s = function() {}
              , a = function() {}
              , n = [];
            if (this.picverifycode && n.push("picverifycode"),
            this.validateForm(t, n)) {
                var r = this.getValue(t);
                if (0 == t)
                    r.type = 2,
                    s = function() {
                        o.destroy(),
                        o.successCallback.login()
                    }
                    ,
                    a = function(t) {
                        t = t || {
                            data: {
                                message: "账号异常，请联系客服处理"
                            }
                        },
                        o.showError(t.data.message)
                    }
                    ;
                else if (1 == t)
                    s = function() {
                        o.destroy(),
                        o.successCallback.login()
                    }
                    ,
                    a = function(t) {
                        t = t || {
                            data: {
                                message: "账号异常，请联系客服处理"
                            }
                        },
                        o.showError(t.data.message)
                    }
                    ;
                else if (2 == t)
                    r.confirmPassword = this.getEle(".password_input").val(),
                    r.verify = this.getEle(".messageverifycode_input").val(),
                    s = function() {
                        o.destroy(),
                        o.successCallback.register()
                    }
                    ,
                    a = function(t) {
                        t = t || {
                            data: {
                                message: "注册失败，请联系客服"
                            }
                        },
                        o.showError(t.data.message)
                    }
                    ;
                else if (3 == t)
                    r.confirmPassword = r.newPassword = this.getEle(".setpassword_input").val(),
                    r.phone = this.getEle(".phonenum_input").val(),
                    r.code = this.getEle(".messageverifycode_input").val(),
                    s = function() {
                        o.setPasswordSuccess(),
                        o.successCallback.forget()
                    }
                    ,
                    a = function(t) {
                        t = t || {},
                        o.showError(t.data.message)
                    }
                    ;
                else if (4 === t) {
                    this.qrDom.innerHTML = "",
                    this.qrDom.style.position = "relative";
                    var i = document.createElement("div");
                    i.style.position = "absolute",
                    i.style.top = "0",
                    i.style.left = "0",
                    i.style.width = "100%",
                    i.style.height = "100%",
                    i.style.backgroundColor = "rgba(255,255,255,0.2)";
                    var c = document.createElement("span");
                    c.style.position = "absolute",
                    c.style.top = "50%",
                    c.style.left = "50%",
                    c.style.transform = "translate(-50%,-50%)",
                    c.style.textAlign = "center",
                    i.appendChild(c);
                    var u = [];
                    c.addEventListener("click", function() {
                        u.forEach(function(t) {
                            return t()
                        })
                    }),
                    c.innerText = "二维码加载中",
                    this.qrDom.appendChild(i);
                    var l = function(t) {
                        var e = t.text
                          , n = t.opacity;
                        t.btn,
                        c.innerText = e,
                        i.style.backgroundColor = "rgba(255,255,255," + (n || .9) + ")",
                        i.style.opacity = n || .9
                    };
                    return s = function() {
                        o.destroy(),
                        o.successCallback.login()
                    }
                    ,
                    a = function() {
                        l({
                            text: "登录失败，请重试"
                        })
                    }
                    ,
                    void this.passport.authSDK.createQr({
                        type: this.qrData.type,
                        sceneId: this.qrData.sceneId,
                        sceneStr: this.qrData.sceneStr
                    }).then(function(t) {
                        if (t.data && t.data.url) {
                            if (o.qrData.qrContent = t.data.content,
                            o.qrData.qrUrl = t.data.url,
                            o.qrData.qrUrl) {
                                var e = document.createElement("img");
                                e.src = o.qrData.qrUrl,
                                e.style.width = "100%",
                                o.qrDom.appendChild(e)
                            } else if (o.qrData.qrContent) {
                                var n = Object.assign({}, y, {
                                    text: o.qrData.qrContent,
                                    width: o.qrData.width || y.width,
                                    height: o.qrData.height || y.height,
                                    colorDark: "#000000",
                                    colorLight: "#ffffff",
                                    correctLevel: p.default.CorrectLevel.H
                                });
                                new p.default(o.qrDom,n).makeCode(o.qrData.qrContent)
                            }
                            var r = Date.now() + 1e3 * (t.data.expire_seconds || 60)
                              , i = setInterval(function() {
                                if (Date.now() > r)
                                    return clearInterval(i),
                                    l({
                                        text: "点击刷新二维码",
                                        opacity: .99
                                    }),
                                    void u.push(function() {
                                        o.init(4),
                                        u.length = 0
                                    });
                                l({
                                    text: "微信扫码登录",
                                    opacity: .2
                                }),
                                o.passport.authSDK.pollingQr({
                                    ticket: t.data.ticket
                                }).then(function(t) {
                                    switch (t.data.state) {
                                    case "CREATED":
                                        break;
                                    case "BINDING":
                                        l({
                                            text: "已扫码",
                                            opacity: .9
                                        });
                                        break;
                                    case "CONFIRMED":
                                        break;
                                    case "EXPIRED":
                                        clearInterval(i),
                                        l({
                                            text: "点击刷新二维码",
                                            opacity: .99
                                        }),
                                        u.push(function() {
                                            o.init(4),
                                            u.length = 0
                                        });
                                        break;
                                    default:
                                        l({
                                            text: "微信扫码登录",
                                            opacity: .2
                                        })
                                    }
                                    t.data.success && "CONFIRMED" === t.data.state ? (clearInterval(i),
                                    o.stCallback ? o.stCallback(t.data.serviceTicket) : o.configService ? h.default.ajax({
                                        url: o.configService,
                                        method: "POST",
                                        xhrFields: {
                                            withCredentials: d.withCredential
                                        },
                                        data: {
                                            ticket: t.data.serviceTicket
                                        },
                                        success: function() {
                                            s()
                                        },
                                        fail: function() {
                                            l({
                                                text: "登录失败",
                                                opacity: .9
                                            })
                                        }
                                    }) : h.default.ajax({
                                        url: o.configService,
                                        dataType: "jsonp",
                                        data: {
                                            service: o.configService,
                                            ticket: t.data.serviceTicket
                                        },
                                        success: function() {
                                            o.destroy(),
                                            o.successCallback.login()
                                        },
                                        fail: function() {
                                            a()
                                        }
                                    })) : !t.data.success || "BINDING" === t.data.state && "CONFIRMED" === t.data.state || "CREATED" === t.data.state || o.faillCallback(t.data)
                                })
                            }, 1500)
                        } else
                            o.faillCallback(t.data)
                    }).catch(function(t) {
                        l({
                            text: "生成二维码失败，请点击重试"
                        }),
                        u.push(function() {
                            o.init(4)
                        }),
                        o.faillCallback(t)
                    })
                }
                "1" === r.remember && (r.ticketMaxAge = 604800),
                0 !== t && 1 !== t && 2 !== t || (r.clickPos = this.clickPos),
                e.submit(t, r, s, a, this.configService)
            }
        }
    }, {
        key: "changeVerifyImg",
        value: function(t) {
            var e = this.getEle(".login_verify_img")
              , n = (new Date).getTime();
            e.attr("src", this.passport.verifyImgUrl + "?t=" + n),
            t && (this.getEle(".picverifycode").show(),
            this.picverifycode = !0)
        }
    }, {
        key: "showError",
        value: function(t) {
            var e = this.getEle(".login_error_tip");
            e.text(t),
            e.show()
        }
    }, {
        key: "hideError",
        value: function() {
            this.getEle(".login_error_tip").hide()
        }
    }, {
        key: "setPasswordSuccess",
        value: function() {
            this.loginModel.find(".login_box").hide(),
            this.loginModel.find(".set_password_success").show()
        }
    }, {
        key: "resetPannel",
        value: function() {
            this.loginModel.find(".login_box").show(),
            this.loginModel.find(".set_password_success").hide()
        }
    }, {
        key: "init",
        value: function(t, e) {
            var n = this
              , r = 0 < arguments.length && void 0 !== t ? t : 0
              , i = e;
            if ("string" == typeof r && (r = {
                REGISTER: 2,
                PHONE_LOGIN: 0,
                PASSWORD_LOGIN: 1,
                FORGET: 3,
                QR: 4
            }[r] || 0),
            i)
                switch (r) {
                case 0:
                case 1:
                case 4:
                    this.successCallback.login = i;
                    break;
                case 2:
                    this.successCallback.register = i;
                    break;
                case 3:
                    this.successCallback.forget = i
                }
            if (this.loginModel = (0,
            h.default)("#loginModel"),
            !this.loginModel.length) {
                var o = "我已阅读并同意" + x[f.default].map(function(t) {
                    return '<a class="link-btn _color" href="' + (0,
                    a.default)(n.env).domainConfig.wwwroot + t.url + '" target="_blank">' + t.title + "</a>"
                }).join("及");
                (0,
                h.default)("body").append(v({
                    theme: f.default,
                    protocolText: o
                })),
                this.loginModel = (0,
                h.default)("#loginModel"),
                this.bindEvts()
            }
            this.resetPannel(),
            this.passport || (this.configService ? this.passport = new c.default(this.env,this.configService) : this.passport = new c.default(this.env)),
            this.ulog || (this.ulog = new g.default),
            this.currentType = r;
            var s = this.formData(r);
            if (this.clearAllForms(),
            1 == r)
                (0,
                h.default)("#loginModel .input_box .picverifycode").insertAfter("#loginModel .input_box .setpassword");
            else if (4 === r) {
                if (!this.qrDom || !this.qrData)
                    throw "Must config qrDom and qrData";
                if (!this.configService)
                    throw "MUst config service first";
                this.processSubmit(4)
            } else
                (0,
                h.default)("#loginModel .input_box .picverifycode").insertAfter("#loginModel .input_box .phonenum");
            this.hideSendVoiceEntrance(),
            Object.keys(s).forEach(function(t) {
                var e = s[t];
                "display" === t ? e.forEach(function(t) {
                    n.getEle("." + t).show()
                }) : (0,
                h.default)(".login_panel_" + t).html(e)
            }),
            this.changeVerifyImg(),
            4 === r || (this.sendDig("PV"),
            this.loginModel.show())
        }
    }, {
        key: "destroy",
        value: function() {
            try {
                this.qrDom.html("")
            } catch (t) {}
            this.loginModel.hide(),
            this.clearAllForms(),
            this.resetPannel()
        }
    }], [{
        key: "getInstance",
        value: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : {};
            return this.single ? this.single.config(e) : this.single = new _(e),
            this.single
        }
    }]),
    _).getInstance();
    window.BeikeLoginSDK = A;
    new u.default({
        portal: 110301,
        cb: function(t) {
            return window.srcId = l.Base64.encode(JSON.stringify({
                t: t,
                r: window.location.href,
                os: "web",
                v: "0.1"
            }))
        }
    });
    e.default = A
}
, function(t, e, n) {
    var r = n(22);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(24)(r, i);
    r.locals && (t.exports = r.locals)
}
, function(t, e, n) {
    (t.exports = n(23)(!1)).push([t.i, '.theme-ke ._bgcolor {\n  background: #3072F6;\n}\n.theme-ke ._color {\n  color: #3072F6;\n}\n.theme-ke ._bdcolor {\n  border-color: #3072F6;\n}\n.theme-lianjia ._bgcolor {\n  background: #39AC6A;\n}\n.theme-lianjia ._color {\n  color: #39AC6A;\n}\n.theme-lianjia ._bdcolor {\n  border-color: #39AC6A;\n}\n.login_layer {\n  font-size: 14px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1003;\n  display: none;\n}\n.login_layer > * {\n  box-sizing: content-box;\n}\n.login_layer .link-btn {\n  cursor: pointer;\n  color: noset;\n  text-decoration: underline;\n}\n.login_layer .link-btn:hover {\n  text-decoration: underline;\n}\n.login_layer .login_bg {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.login_layer .login_panel {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  width: 300px;\n  padding: 40px;\n  height: auto;\n  background-color: #FFF;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);\n  border-radius: 2px;\n}\n.login_layer .login_panel a {\n  cursor: pointer;\n}\n.login_layer .login_panel .login_panel_close {\n  cursor: pointer;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  padding: 4px;\n  font-size: 18px;\n}\n.login_layer .login_panel .login_panel_label {\n  min-height: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n  padding-left: 0;\n}\n.login_layer .login_panel .login_panel_label .login_panel_title {\n  margin: 0;\n  float: left;\n  font-size: 20px;\n  color: #101D37;\n  font-weight: bold;\n}\n.login_layer .login_panel .login_panel_label .login_panel_hint {\n  color: #AAA;\n  padding: 40px 0 0;\n  line-height: 1;\n  font-size: 14px;\n}\n.login_layer .login_panel .form .input_box {\n  padding: 0;\n  border-radius: 2px;\n}\n.login_layer .login_panel .form .input_box .form_input_item {\n  overflow: hidden;\n  border: 1px solid #DBDBDB;\n  color: #555;\n  clear: both;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  margin-top: -1px;\n}\n.login_layer .login_panel .form .input_box .form_input_item.input_error {\n  border: 1px solid #DB4C3F;\n  margin-top: -1px;\n  z-index: 2;\n}\n.login_layer .login_panel .form .input_box .form_input_item.first_child {\n  border-radius: 2px 2px 0 0;\n}\n.login_layer .login_panel .form .input_box .form_input_item.last_child {\n  border-radius: 0 0 2px 2px;\n}\n.login_layer .login_panel .form .input_box .form_input_item input {\n  border: 0;\n  padding: 0 0 0 16px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  color: #101D37;\n  font-size: 14px;\n  outline: none;\n}\n.login_layer .login_panel .form .input_box .form_input_item input::placeholder {\n  color: #BBB;\n}\n.login_layer .login_panel .form .input_box .form_input_item input.code_type {\n  width: 151px;\n  float: left;\n}\n.login_layer .login_panel .form .input_box .form_input_item input.password_type {\n  width: 242px;\n  float: left;\n  padding-right: 10px;\n}\n.login_layer .login_panel .form .input_box .form_input_item .password-view {\n  cursor: pointer;\n  display: inline-block;\n  width: 18px;\n  height: 12px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAZFJREFUKBWVUr1Kw1AYvUkLqVYQWkEKoosOUfABsrW0uIkv4OCgg3RxFN2EPkAH38DFwUkRTLFENNBdydS5U7sZGpo0nnPpDdcioh/c3PP9nZzvSwzxg3W73ZUkSU7SNN1HegunaBhGH/4L8E2j0XidbzP0gO/7C2EYXqGhibil5+awl8/nm9Vq9V3FMyKoWIOKB5DsqmShUBDlclm6w+FQjMdjleId5nK5o1qtdktHEpEkjuM3+OsM0iqVirBtW5imKf3pdCqCIBCDwUD6s0eCkQ/q9fq9AZIlKOlBybaqoBLHccRoNJLNjJO0VCoJjD+v7BMv2zGh5FonYRPHoRIqiKJIHmLG1Kism1kRatsmpGV7Upn/3qBYNDHGKUBfb+ZiuROOY1mWPMSMMacbelMs/Vyq6XQ63M8zRlxVRX9ctgDRBZbdysbyPM+eTCaPINtQZL99fiqBtfBzXrI+I6Ljuu4yCtqAhyj6lmNeGWo+gM+gxM1iCug3RwXRMWJ7aNrEHcPvA/v4cnf4o5+AU73nC9g2uaV8RfBsAAAAAElFTkSuQmCC);\n}\n.login_layer .login_panel .form .input_box .form_input_item .verifyimg {\n  float: right;\n  height: 45px;\n  width: 125px;\n}\n.login_layer .login_panel .form .input_box .form_input_item .addtional_a {\n  line-height: 50px;\n  color: #101D37;\n  float: right;\n}\n.login_layer .login_panel .form .input_box .form_input_item .addtional_a em {\n  padding: 0 16px;\n  border-left: 1px solid #DBDBDB;\n  font-style: normal;\n}\n.login_layer .login_panel .form .login_error {\n  color: #DB4C3F;\n  padding: 24px 0 0;\n  line-height: 14px;\n}\n.login_layer .login_panel .form .login_voice a {\n  loat: none;\n  text-decoration: underline;\n  color: #101D37;\n  cursor: pointer;\n}\n.login_layer .login_panel .form .login_remember,\n.login_layer .login_panel .form .login_protocol {\n  color: #555;\n  clear: both;\n  position: relative;\n  line-height: 23px;\n  margin: 24px 0;\n  overflow: hidden;\n}\n.login_layer .login_panel .form .login_remember .checkbox-btn,\n.login_layer .login_panel .form .login_protocol .checkbox-btn {\n  cursor: pointer;\n  float: left;\n}\n.login_layer .login_panel .form .login_remember .checkbox-btn input[type="checkbox"][value="1"] + .checkbox,\n.login_layer .login_panel .form .login_protocol .checkbox-btn input[type="checkbox"][value="1"] + .checkbox {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAMAAAB2Mu6sAAAAYFBMVEVMaXE6h/YA//87h/U7hvVVqv87hvY6h/Q7h/Q6h/Q6h/U6h/U7hvY7hvQ6h/U6h/U6h/Q5iPU7h/M6h/Q6h/Q4hfI6hvU6h/U6h/U6h/U7h/U/f/87h/U6h/Q8hfM7h/VEXyMmAAAAH3RSTlMAOAGC8QM99flHcZtT/ojtfTJCd44U0U6joGkMvpMuWVrMyQAAAHJJREFUeNp10dcOgDAIBVC1atXWvSf//5cKiVoD8nR7SDqoJ5WdItHHBGapkyYAYH48X7jrx1fXG3TIMPZD8XrsOoC63Q/RW8obRuV6xRY1RfXdtr28xMAPPMg7dsVck/PHUu2BJ3ZMIA2UnJcVRi1/zglAzA109GHv+gAAAABJRU5ErkJggg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 12px 10px;\n}\n.login_layer .login_panel .form .login_remember .checkbox-btn .checkbox,\n.login_layer .login_panel .form .login_protocol .checkbox-btn .checkbox {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #DBDBDB;\n  border-radius: 2px;\n  position: relative;\n  margin-right: 6px;\n  cursor: pointer;\n  float: left;\n  line-height: 47px;\n}\n.login_layer .login_panel .form .login_remember .checkbox-btn .checkbox.active,\n.login_layer .login_panel .form .login_protocol .checkbox-btn .checkbox.active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAMAAAB2Mu6sAAAAYFBMVEVMaXE6h/YA//87h/U7hvVVqv87hvY6h/Q7h/Q6h/Q6h/U6h/U7hvY7hvQ6h/U6h/U6h/Q5iPU7h/M6h/Q6h/Q4hfI6hvU6h/U6h/U6h/U7h/U/f/87h/U6h/Q8hfM7h/VEXyMmAAAAH3RSTlMAOAGC8QM99flHcZtT/ojtfTJCd44U0U6joGkMvpMuWVrMyQAAAHJJREFUeNp10dcOgDAIBVC1atXWvSf//5cKiVoD8nR7SDqoJ5WdItHHBGapkyYAYH48X7jrx1fXG3TIMPZD8XrsOoC63Q/RW8obRuV6xRY1RfXdtr28xMAPPMg7dsVck/PHUu2BJ3ZMIA2UnJcVRi1/zglAzA109GHv+gAAAABJRU5ErkJggg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 12px 10px;\n}\n.login_layer .login_panel .form .login_remember .checkbox-btn .mind-login,\n.login_layer .login_panel .form .login_protocol .checkbox-btn .mind-login {\n  float: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n.login_layer .login_panel .form .login_remember .login_panel_forget_password,\n.login_layer .login_panel .form .login_protocol .login_panel_forget_password {\n  float: right;\n  color: #101D37;\n}\n.login_layer .login_panel .form .login_panel_op {\n  display: block;\n  width: 300px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 16px;\n  font-weight: bold;\n  border: 0;\n  cursor: pointer;\n  background: noset;\n  color: #FFF;\n  text-align: center;\n  border-radius: 2px;\n  margin-top: 24px;\n}\n.login_layer .login_panel .form .login_panel_op:hover {\n  opacity: 0.9;\n  text-decoration: none;\n}\n.login_layer .login_panel .form .change_login_type {\n  padding: 24px 0 0;\n  height: 14px;\n  line-height: 14px;\n  color: noset;\n  display: inline-block;\n}\n.login_layer .login_panel .form .login_panel_change_login_type .link-btn {\n  text-decoration: underline;\n}\n.login_layer .login_panel .form .login_panel_change_login_type .link-btn:hover {\n  color: noset;\n}\n.login_layer .login_panel .form .captcha .msg .error {\n  display: none;\n}\n.login_layer .login_panel .set_password_success {\n  display: none;\n  text-align: center;\n}\n.login_layer .login_panel .set_password_success .succ_tit {\n  font-weight: bold;\n  font-size: 18px;\n}\n.login_layer .login_panel .set_password_success .succ_desc {\n  font-size: 14px;\n  margin-top: 20px;\n}\n.login_layer .login_panel .set_password_success .succ_desc a {\n  color: noset;\n  text-decoration: none;\n}\n.login_layer .login_panel .set_password_success .succ_desc a:hover {\n  text-decoration: underline;\n}\n', ""])
}
, function(t, e, n) {
    "use strict";
    t.exports = function(n) {
        var s = [];
        return s.toString = function() {
            return this.map(function(t) {
                var e = function(t, e) {
                    var n = t[1] || ""
                      , r = t[3];
                    if (!r)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var i = function(t) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                        }(r)
                          , o = r.sources.map(function(t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    return [n].join("\n")
                }(t, n);
                return t[2] ? "@media " + t[2] + "{" + e + "}" : e
            }).join("")
        }
        ,
        s.i = function(t, e) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var n = {}, r = 0; r < this.length; r++) {
                var i = this[r][0];
                null != i && (n[i] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var o = t[r];
                null != o[0] && n[o[0]] || (e && !o[2] ? o[2] = e : e && (o[2] = "(" + o[2] + ") and (" + e + ")"),
                s.push(o))
            }
        }
        ,
        s
    }
}
, function(t, e, r) {
    var n, i, o, c = {}, u = (n = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === i && (i = n.apply(this, arguments)),
        i
    }
    ), s = (o = {},
    function(t, e) {
        if ("function" == typeof t)
            return t();
        if (void 0 === o[t]) {
            var n = function(t, e) {
                return e ? e.querySelector(t) : document.querySelector(t)
            }
            .call(this, t, e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                    n = n.contentDocument.head
                } catch (t) {
                    n = null
                }
            o[t] = n
        }
        return o[t]
    }
    ), a = null, l = 0, h = [], f = r(25);
    function d(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
              , i = c[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++)
                    i.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++)
                    i.parts.push(b(r.parts[o], e))
            } else {
                var s = [];
                for (o = 0; o < r.parts.length; o++)
                    s.push(b(r.parts[o], e));
                c[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function p(t, e) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var o = t[i]
              , s = e.base ? o[0] + e.base : o[0]
              , a = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            r[s] ? r[s].parts.push(a) : n.push(r[s] = {
                id: s,
                parts: [a]
            })
        }
        return n
    }
    function g(t, e) {
        var n = s(t.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = h[h.length - 1];
        if ("top" === t.insertAt)
            r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            h.push(e);
        else if ("bottom" === t.insertAt)
            n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(t.insertAt.before, n);
            n.insertBefore(e, i)
        }
    }
    function m(t) {
        if (null === t.parentNode)
            return !1;
        t.parentNode.removeChild(t);
        var e = h.indexOf(t);
        0 <= e && h.splice(e, 1)
    }
    function v(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce) {
            var n = function() {
                0;
                return r.nc
            }();
            n && (t.attrs.nonce = n)
        }
        return y(e, t.attrs),
        g(t, e),
        e
    }
    function y(e, n) {
        Object.keys(n).forEach(function(t) {
            e.setAttribute(t, n[t])
        })
    }
    function b(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css)))
                return function() {}
                ;
            e.css = o
        }
        if (t.singleton) {
            var s = l++;
            n = a = a || v(t),
            r = T.bind(null, n, s, !1),
            i = T.bind(null, n, s, !0)
        } else
            i = e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                t.attrs.rel = "stylesheet",
                y(e, t.attrs),
                g(t, e),
                e
            }(t),
            r = function(t, e, n) {
                var r = n.css
                  , i = n.sourceMap
                  , o = void 0 === e.convertToAbsoluteUrls && i;
                (e.convertToAbsoluteUrls || o) && (r = f(r));
                i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var s = new Blob([r],{
                    type: "text/css"
                })
                  , a = t.href;
                t.href = URL.createObjectURL(s),
                a && URL.revokeObjectURL(a)
            }
            .bind(null, n, t),
            function() {
                m(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = v(t),
            r = function(t, e) {
                var n = e.css
                  , r = e.media;
                r && t.setAttribute("media", r);
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n),
            function() {
                m(n)
            }
            );
        return r(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                r(e = t)
            } else
                i()
        }
    }
    t.exports = function(t, s) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (s = s || {}).attrs = "object" == typeof s.attrs ? s.attrs : {},
        s.singleton || "boolean" == typeof s.singleton || (s.singleton = u()),
        s.insertInto || (s.insertInto = "head"),
        s.insertAt || (s.insertAt = "bottom");
        var a = p(t, s);
        return d(a, s),
        function(t) {
            for (var e = [], n = 0; n < a.length; n++) {
                var r = a[n];
                (i = c[r.id]).refs--,
                e.push(i)
            }
            t && d(p(t, s), s);
            for (n = 0; n < e.length; n++) {
                var i;
                if (0 === (i = e[n]).refs) {
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o]();
                    delete c[i.id]
                }
            }
        }
    }
    ;
    var w, x = (w = [],
    function(t, e) {
        return w[t] = e,
        w.filter(Boolean).join("\n")
    }
    );
    function T(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = x(e, i);
        else {
            var o = document.createTextNode(i)
              , s = t.childNodes;
            s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e)
            throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t)
            return t;
        var i = e.protocol + "//" + e.host
          , o = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var n, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (n = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : o + r.replace(/^\.\//, ""),
            "url(" + JSON.stringify(n) + ")")
        })
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = location.hostname
      , i = "prod";
    /^(test|dev)/.test(r) && (i = "test"),
    e.default = i
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    };
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var a = o(n(8))
      , m = o(n(9))
      , v = (o(n(6)),
    o(n(29)))
      , c = o(n(49))
      , u = o(n(50))
      , y = n(1)
      , b = n(2);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = (r(l, [{
        key: "appendDom",
        value: function(t) {
            var e = t.id
              , n = t.parent
              , r = t.referenceNode
              , i = document.createElement("div");
            return i.style.display = "none",
            i.id = e,
            n.insertBefore(i, r),
            i
        }
    }, {
        key: "showCaptcha",
        value: function(t, e) {
            var n = 1 < arguments.length && void 0 !== e ? e : {};
            if (n.identity)
                try {
                    this.captcha.setUserIdentity(n.identity)
                } catch (t) {
                    (0,
                    b.sendFee)({
                        detail: {
                            error: t,
                            data: n.identity
                        },
                        errorName: "setUserIdentity-error"
                    })
                }
            t && (this.onValidateCompleteFns = [t]),
            this.captchaBtn.click()
        }
    }, {
        key: "submit",
        value: function(u, l, h, f, d) {
            var p = this
              , t = void 0
              , g = void 0;
            switch (u) {
            case 0:
                t = this.authSDK.smsLogin,
                g = {
                    phoneNum: l.username,
                    code: l.smsCode
                };
                break;
            case 1:
                t = this.authSDK.passwordLogin,
                g = {
                    username: l.username,
                    password: l.password
                },
                l.smsCode && (g.code = l.smsCode);
                break;
            case 2:
                t = this.authSDK.register,
                g = {
                    phoneNum: l.username,
                    password: l.password,
                    code: l.smsCode
                };
                break;
            case 3:
                t = this.passwordSDK.resetPassword,
                g = {
                    username: l.username,
                    newPassword: l.newPassword,
                    captchaToken: this.captcha.token,
                    captchaScene: this.captcha.scene
                },
                l.smsCode && (g.code = l.smsCode);
                break;
            case 4:
                t = Promise.resolve;
                break;
            default:
                throw "Type illegal"
            }
            if (!this.executingRequest) {
                this.executingRequest = !0;
                var e = {};
                l.ticketMaxAge && (e.ticketMaxAge = l.ticketMaxAge),
                l.clickPos && (e.clickPos = l.clickPos),
                l.attachCaptcha && (g.captchaScene = l.captchaScene,
                g.captchaToken = l.captchaToken),
                t(g, e).then(function(t) {
                    if (t.data.success)
                        switch (u) {
                        case 0:
                        case 1:
                            "PASS" === t.data.status ? d ? m.default.ajax({
                                url: d,
                                method: "POST",
                                xhrFields: {
                                    withCredentials: y.withCredential
                                },
                                data: {
                                    ticket: t.data.serviceTicket.id
                                },
                                success: function() {
                                    "function" == typeof h && h()
                                },
                                fail: function() {
                                    f && f()
                                }
                            }) : m.default.ajax({
                                url: p._service,
                                dataType: "jsonp",
                                data: {
                                    service: p._service,
                                    ticket: t.data.serviceTicket.id
                                },
                                success: function() {
                                    "function" == typeof h && h()
                                },
                                fail: function() {
                                    f && f()
                                }
                            }) : f && f();
                            break;
                        case 2:
                            t.data.success ? "function" == typeof h && h() : f && f();
                        case 3:
                            t.data.success ? "function" == typeof h && h() : f && f()
                        }
                    else if (t.data && t.data.exception && ("captcha.lack.credential" === t.data.exception.code || "captcha.incorrect" === t.data.exception.code)) {
                        var e = Date.now()
                          , n = p.appendDom({
                            id: "bindTo_" + e,
                            parent: p.parentNode,
                            referenceNode: p.referenceNode
                        })
                          , r = p.appendDom({
                            id: "renderTo_" + e,
                            parent: p.parentNode,
                            referenceNode: p.referenceNode
                        })
                          , i = t.data.exception.extData || {}
                          , o = new v.default({
                            env: p.env,
                            scene: i.scene_id || "login_slider",
                            extData: i
                        })
                          , s = ""
                          , a = !1;
                        o.add({
                            bindTo: "#" + n.id,
                            renderTo: "#" + r.id,
                            onTokenChange: function(t) {
                                s = t
                            },
                            onReady: function() {
                                a = !0
                            },
                            onValidateComplete: function() {
                                p.submit(u, Object.assign({}, l, {
                                    attachCaptcha: !0,
                                    captchaToken: s,
                                    captchaScene: i.scene_id || "login_slider"
                                }), h, f, d)
                            },
                            onError: function() {},
                            identity: {
                                phone: g.phoneNum || g.username
                            }
                        });
                        var c = setInterval(function() {
                            a && (n.click(),
                            a = !1,
                            clearInterval(c))
                        }, 200)
                    } else
                        "function" == typeof f && f(t),
                        (0,
                        b.sendFee)({
                            detail: t,
                            errorName: "request-error"
                        });
                    p.executingRequest = !1
                }).catch(function(t) {
                    (0,
                    b.sendFee)({
                        detail: t,
                        errorName: "request-error"
                    }),
                    "function" == typeof f && f(),
                    p.executingRequest = !1
                })
            }
        }
    }]),
    l);
    function l(t, e) {
        var r = this;
        !function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, l),
        this._service = e || (0,
        a.default)(t).domainConfig.ajaxapiroot + "login/login/getuserinfo",
        this.env = t;
        var n = this.referenceNode = document.querySelector("#loginModel .login_error.login_error_tip")
          , i = this.parentNode = n.parentNode
          , o = Date.now();
        this.captchaBtn = this.appendDom({
            id: "act_" + o,
            parent: i,
            referenceNode: n
        }),
        this.captchaRender = this.appendDom({
            id: "render_" + o,
            parent: i,
            referenceNode: n
        }),
        this.onValidateCompleteFns = [],
        this.onTokenChangeFns = [],
        this.captcha = new v.default({
            env: t,
            scene: "login_slider"
        }),
        setTimeout(function() {
            r.captcha.add({
                bindTo: "#" + r.captchaBtn.id,
                renderTo: "#" + r.captchaRender.id,
                onTokenChange: function(t) {
                    r.token = t,
                    r.onTokenChangeFns.map(function(t) {
                        "function" == typeof t && t(result)
                    })
                },
                onValidateComplete: function(e) {
                    r.onValidateCompleteFns.map(function(t) {
                        "function" == typeof t && t(e)
                    })
                },
                onError: function(t) {
                    (0,
                    b.sendFee)({
                        detail: t,
                        errorName: "captcha-error"
                    }),
                    r.captcha.refresh(),
                    r.showCaptcha()
                }
            })
        }, 1e3);
        var s = {
            service: this._service,
            version: "2.0",
            env: t || "prod",
            captchaInstance: this.captcha
        };
        this.authSDK = new u.default(s),
        this.passwordSDK = new c.default(s),
        "prod" !== t && (window.__passport = this),
        this.api = {
            sendVerifyCode: function(t) {
                var e = {
                    username: t.data.phone,
                    captchaToken: r.captcha.token,
                    captchaScene: r.captcha.scene
                }
                  , n = t.sceneKey || "WHEN_LOGIN";
                return "password" === t.sdk ? r.passwordSDK.sendSMS(e, n) : r.authSDK.sendSMS(e, n)
            },
            sendVerifyVoiceCode: function(t) {
                var e = {
                    username: t.data.phone,
                    captchaToken: r.captcha.token,
                    captchaScene: r.captcha.scene
                }
                  , n = t.sceneKey || "WHEN_LOGIN";
                return "password" === t.sdk ? r.passwordSDK.sendVoice(e, n) : r.authSDK.sendVoice(e, n)
            }
        },
        this.showCaptcha = this.showCaptcha.bind(this)
    }
    e.default = s
}
, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(1)
      , r = n(0)
      , s = n(2)
      , a = function(t, s, a, c) {
        return new (a = a || Promise)(function(e, n) {
            function r(t) {
                try {
                    o(c.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function i(t) {
                try {
                    o(c.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function o(t) {
                t.done ? e(t.value) : function(e) {
                    return e instanceof a ? e : new a(function(t) {
                        t(e)
                    }
                    )
                }(t.value).then(r, i)
            }
            o((c = c.apply(t, s || [])).next())
        }
        )
    }
      , c = function(n, r) {
        var i, o, s, t, a = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        },
        "function" == typeof Symbol && (t[Symbol.iterator] = function() {
            return this
        }
        ),
        t;
        function e(e) {
            return function(t) {
                return function(e) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (i = 1,
                            o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                            0) : o.next) && !(s = s.call(o, e[1])).done)
                                return s;
                            switch (o = 0,
                            s && (e = [2 & e[0], s.value]),
                            e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                o = e[1],
                                e = [0];
                                continue;
                            case 7:
                                e = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    a.label = e[1];
                                    break
                                }
                                if (6 === e[0] && a.label < s[1]) {
                                    a.label = s[1],
                                    s = e;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2],
                                    a.ops.push(e);
                                    break
                                }
                                s[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            e = r.call(n, a)
                        } catch (t) {
                            e = [6, t],
                            o = 0
                        } finally {
                            i = s = 0
                        }
                    if (5 & e[0])
                        throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    }
      , i = (Object.defineProperty(u.prototype, "token", {
        get: function() {
            return this.captcha.token
        },
        enumerable: !0,
        configurable: !0
    }),
    u);
    function u(t) {
        var e = this;
        this.errorMaxTimes = 10,
        this._curErrorCount = 0,
        this.identity = {},
        this.add = function(i) {
            return a(e, void 0, void 0, function() {
                var r;
                return c(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return r = this,
                        [4, Object(o.loadScriptWithPromise)(this.captchaSDKAddr)];
                    case 1:
                        return t.sent() && (this.captcha && this.captcha.destory(),
                        this.captcha = new CaptchaSDK.Captcha(Object.assign({}, this.extData, {
                            endpoint: this.captchaDomain,
                            scene: this.scene,
                            renderTo: i.renderTo || "#kelogin-captcha",
                            onTokenChange: function(t) {
                                i.onTokenChange(t)
                            },
                            onValidateComplete: function(t) {
                                i.onValidateComplete(t),
                                r.captcha.refresh()
                            },
                            onError: function(t) {
                                Object(s.sendFee)({
                                    detail: {
                                        error: t,
                                        data: {
                                            config: i
                                        }
                                    },
                                    errorName: "passport-captcha-error"
                                });
                                var e = r.errorMaxTimes
                                  , n = r.captcha;
                                r._curErrorCount += 1,
                                r._curErrorCount <= e && (n.refresh(),
                                i.onError && i.onError())
                            },
                            onReady: function() {
                                i.onReady && i.onReady()
                            },
                            geetest: {
                                product: "bind",
                                bindTo: i.bindTo || "#act"
                            },
                            identity: Object.assign({}, this.identity, i.identity)
                        })),
                        this.env,
                        this.captcha.init()),
                        [2]
                    }
                })
            })
        }
        ,
        this.remove = function() {
            return a(e, void 0, void 0, function() {
                return c(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return this.captcha ? [4, this.captcha.destory()] : [3, 2];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        }
        ,
        this.refresh = function() {
            e.captcha.refresh()
        }
        ,
        this.setUserIdentity = function(t) {
            if (e.captcha)
                try {
                    e.captcha.setUserIdentity(t)
                } catch (t) {}
            else
                e.identity = t
        }
        ,
        this.env = t.env,
        this.captchaDomain = r.captchaDomain[t.env],
        this.scene = t.scene,
        this.captchaSDKAddr = r.captchaJSAddr[t.env],
        this.extData = t.extData || {}
    }
    e.default = i
}
, function(t, e) {
    var o, n;
    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    n = {
        rotl: function(t, e) {
            return t << e | t >>> 32 - e
        },
        rotr: function(t, e) {
            return t << 32 - e | t >>> e
        },
        endian: function(t) {
            if (t.constructor == Number)
                return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
            for (var e = 0; e < t.length; e++)
                t[e] = n.endian(t[e]);
            return t
        },
        randomBytes: function(t) {
            for (var e = []; 0 < t; t--)
                e.push(Math.floor(256 * Math.random()));
            return e
        },
        bytesToWords: function(t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++,
            r += 8)
                e[r >>> 5] |= t[n] << 24 - r % 32;
            return e
        },
        wordsToBytes: function(t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8)
                e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
            return e
        },
        bytesToHex: function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
            return e.join("")
        },
        hexToBytes: function(t) {
            for (var e = [], n = 0; n < t.length; n += 2)
                e.push(parseInt(t.substr(n, 2), 16));
            return e
        },
        bytesToBase64: function(t) {
            for (var e = [], n = 0; n < t.length; n += 3)
                for (var r = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
                    8 * n + 6 * i <= 8 * t.length ? e.push(o.charAt(r >>> 6 * (3 - i) & 63)) : e.push("=");
            return e.join("")
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var e = [], n = 0, r = 0; n < t.length; r = ++n % 4)
                0 != r && e.push((o.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(t.charAt(n)) >>> 6 - 2 * r);
            return e
        }
    },
    t.exports = n
}
, function(t, e) {
    function n(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    t.exports = function(t) {
        return null != t && (n(t) || function(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }(t) || !!t._isBuffer)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , i = n(11)
      , o = n(34)
      , s = n(17);
    function a(t) {
        var e = new o(t)
          , n = i(o.prototype.request, e);
        return r.extend(n, o.prototype, e),
        r.extend(n, e),
        n
    }
    var c = a(n(14));
    c.Axios = o,
    c.create = function(t) {
        return a(s(c.defaults, t))
    }
    ,
    c.Cancel = n(18),
    c.CancelToken = n(47),
    c.isCancel = n(13),
    c.all = function(t) {
        return Promise.all(t)
    }
    ,
    c.spread = n(48),
    t.exports = c,
    t.exports.default = c
}
, function(t, e) {
    t.exports = function(t) {
        return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(3)
      , r = n(12)
      , o = n(35)
      , s = n(36)
      , a = n(17);
    function c(t) {
        this.defaults = t,
        this.interceptors = {
            request: new o,
            response: new o
        }
    }
    c.prototype.request = function(t, e) {
        "string" == typeof t ? (t = e || {}).url = arguments[0] : t = t || {},
        (t = a(this.defaults, t)).method = t.method ? t.method.toLowerCase() : "get";
        var n = [s, void 0]
          , r = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) {
            n.unshift(t.fulfilled, t.rejected)
        }),
        this.interceptors.response.forEach(function(t) {
            n.push(t.fulfilled, t.rejected)
        }); n.length; )
            r = r.then(n.shift(), n.shift());
        return r
    }
    ,
    c.prototype.getUri = function(t) {
        return t = a(this.defaults, t),
        r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }
    ,
    i.forEach(["delete", "get", "head", "options"], function(n) {
        c.prototype[n] = function(t, e) {
            return this.request(i.merge(e || {}, {
                method: n,
                url: t
            }))
        }
    }),
    i.forEach(["post", "put", "patch"], function(r) {
        c.prototype[r] = function(t, e, n) {
            return this.request(i.merge(n || {}, {
                method: r,
                url: t,
                data: e
            }))
        }
    }),
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    var r = n(3);
    function i() {
        this.handlers = []
    }
    i.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }),
        this.handlers.length - 1
    }
    ,
    i.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    ,
    i.prototype.forEach = function(e) {
        r.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , i = n(37)
      , o = n(13)
      , s = n(14)
      , a = n(45)
      , c = n(46);
    function u(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function(e) {
        return u(e),
        e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)),
        e.headers = e.headers || {},
        e.data = i(e.data, e.headers, e.transformRequest),
        e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
        r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }),
        (e.adapter || s.adapter)(e).then(function(t) {
            return u(e),
            t.data = i(t.data, t.headers, e.transformResponse),
            t
        }, function(t) {
            return o(t) || (u(e),
            t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function(e, n, t) {
        return r.forEach(t, function(t) {
            e = t(e, n)
        }),
        e
    }
}
, function(t, e) {
    var n, r, i = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var c, u = [], l = !1, h = -1;
    function f() {
        l && c && (l = !1,
        c.length ? u = c.concat(u) : h = -1,
        u.length && d())
    }
    function d() {
        if (!l) {
            var t = a(f);
            l = !0;
            for (var e = u.length; e; ) {
                for (c = u,
                u = []; ++h < e; )
                    c && c[h].run();
                h = -1,
                e = u.length
            }
            c = null,
            l = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function g() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        u.push(new p(t,e)),
        1 !== u.length || l || a(d)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = g,
    i.addListener = g,
    i.once = g,
    i.off = g,
    i.removeListener = g,
    i.removeAllListeners = g,
    i.emit = g,
    i.prependListener = g,
    i.prependOnceListener = g,
    i.listeners = function(t) {
        return []
    }
    ,
    i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(3);
    t.exports = function(n, r) {
        i.forEach(n, function(t, e) {
            e !== r && e.toUpperCase() === r.toUpperCase() && (n[r] = t,
            delete n[e])
        })
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(16);
    t.exports = function(t, e, n) {
        var r = n.config.validateStatus;
        !r || r(n.status) ? t(n) : e(i("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i) {
        return t.config = e,
        n && (t.code = n),
        t.request = r,
        t.response = i,
        t.isAxiosError = !0,
        t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }
        ,
        t
    }
}
, function(t, e, n) {
    "use strict";
    var o = n(3)
      , s = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, n, r, i = {};
        return t && o.forEach(t.split("\n"), function(t) {
            if (r = t.indexOf(":"),
            e = o.trim(t.substr(0, r)).toLowerCase(),
            n = o.trim(t.substr(r + 1)),
            e) {
                if (i[e] && 0 <= s.indexOf(e))
                    return;
                i[e] = "set-cookie" === e ? (i[e] ? i[e] : []).concat([n]) : i[e] ? i[e] + ", " + n : n
            }
        }),
        i
    }
}
, function(t, e, n) {
    "use strict";
    var r, i, o, s = n(3);
    function a(t) {
        var e = t;
        return i && (o.setAttribute("href", e),
        e = o.href),
        o.setAttribute("href", e),
        {
            href: o.href,
            protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
            host: o.host,
            search: o.search ? o.search.replace(/^\?/, "") : "",
            hash: o.hash ? o.hash.replace(/^#/, "") : "",
            hostname: o.hostname,
            port: o.port,
            pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
        }
    }
    t.exports = s.isStandardBrowserEnv() ? (i = /(msie|trident)/i.test(navigator.userAgent),
    o = document.createElement("a"),
    r = a(window.location.href),
    function(t) {
        var e = s.isString(t) ? a(t) : t;
        return e.protocol === r.protocol && e.host === r.host
    }
    ) : function() {
        return !0
    }
}
, function(t, e, n) {
    "use strict";
    var a = n(3);
    t.exports = a.isStandardBrowserEnv() ? {
        write: function(t, e, n, r, i, o) {
            var s = [];
            s.push(t + "=" + encodeURIComponent(e)),
            a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            a.isString(r) && s.push("path=" + r),
            a.isString(i) && s.push("domain=" + i),
            !0 === o && s.push("secure"),
            document.cookie = s.join("; ")
        },
        read: function(t) {
            var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(18);
    function i(t) {
        if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) {
            e = t
        }
        );
        var n = this;
        t(function(t) {
            n.reason || (n.reason = new r(t),
            e(n.reason))
        })
    }
    i.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    i.source = function() {
        var e;
        return {
            token: new i(function(t) {
                e = t
            }
            ),
            cancel: e
        }
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    t.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    function r(t) {
        var i = this;
        this.refreshTicket = function() {
            i.getTicket(),
            i.interval && clearInterval(i.interval),
            i.interval = setInterval(function() {
                i.getTicket()
            }, 6e5)
        }
        ,
        this.getTicket = function() {
            var r = {
                version: i.serviceVersion,
                accountSystem: s.accountSystem.customer,
                context: {
                    deviceId: ""
                }
            };
            return new Promise(function(n, e) {
                Object(a.fetch)({
                    url: "" + i.domain + s.PasswordAPIEndpoint.init,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    if (n(),
                    t.data.success) {
                        var e = t.data.publicKey.key;
                        i.ec.setPublicKey(e),
                        i.passwordTicketId = t.data.passwordTicketId,
                        i.publicKey = e,
                        i.encodeVersion = t.data.publicKey.version
                    } else
                        Object(c.sendFee)({
                            detail: t,
                            errorName: "passport-pw-init-error"
                        })
                }).catch(function(t) {
                    e(t),
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-pw-init-error"
                    })
                })
            }
            )
        }
        ,
        this.changePassword = function(r) {
            return new Promise(function(e, n) {
                Object(a.fetch)({
                    url: "" + i.domain + s.PasswordAPIEndpoint.change,
                    data: r
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-pw-changePassword-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.resetPassword = function(t, e) {
            t.encodeVersion = i.encodeVersion,
            i.publicKey && (t.newPassword = i.ec.encrypt(t.newPassword));
            var r = {
                accountSystem: s.accountSystem.customer,
                identityCheckMethod: s.SupportedIdentityCheckMethodsEnum.security_code,
                credential: t,
                context: {},
                passwordTicketId: i.passwordTicketId,
                version: i.serviceVersion
            };
            return new Promise(function(e, n) {
                Object(a.fetch)({
                    url: "" + i.domain + s.PasswordAPIEndpoint.reset,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-pw-resetPassword-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.validatePassword = function(t) {
            i.publicKey && (t.password = i.ec.encrypt(t.password));
            var r = {
                accountSystem: s.accountSystem.customer,
                context: {
                    deviceId: ""
                },
                credential: t
            };
            return new Promise(function(e, n) {
                Object(a.fetch)({
                    url: "" + i.domain + s.PasswordAPIEndpoint.validate,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-pw-validatePassword-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.sendSMS = function(t, e) {
            t.ticketId = i.passwordTicketId;
            var n = {
                accountSystem: s.accountSystem.customer,
                smsType: s.smsTypeEnum.sms,
                sceneKey: e || s.SceneKey.WHEN_RESET_PASSWORD,
                credential: t,
                context: {},
                version: i.serviceVersion
            };
            return new Promise(function(t, e) {
                Object(a.fetch)({
                    url: "" + i.domain + s.APIEndpoint.sms,
                    method: "POST",
                    data: n
                }).then(t).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: n
                        },
                        errorName: "passport-pw-sendSMS-error"
                    }),
                    e(t)
                })
            }
            )
        }
        ,
        this.sendVoice = function(t, e) {
            t.ticketId = i.passwordTicketId;
            var n = {
                accountSystem: s.accountSystem.customer,
                smsType: s.smsTypeEnum.voice,
                sceneKey: e || s.SceneKey.WHEN_RESET_PASSWORD,
                credential: t,
                context: {},
                version: i.serviceVersion
            };
            return new Promise(function(t, e) {
                Object(a.fetch)({
                    url: "" + i.domain + s.APIEndpoint.sms,
                    method: "POST",
                    data: n
                }).then(t).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: n
                        },
                        errorName: "passport-pw-sendSMS-error"
                    }),
                    e(t)
                })
            }
            )
        }
        ,
        this.setCaptcha = function(e) {
            return u(i, void 0, void 0, function() {
                return l(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.captcha.add(e)];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        this.removeCaptcha = function() {
            return u(i, void 0, void 0, function() {
                return l(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.captcha.remove()];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        this.destroy = function() {
            clearInterval(i.interval),
            i.interval = void 0
        }
        ,
        this.passwordTicketId = "",
        this.publicKey = "",
        this.encodeVersion = "",
        this.ec = new o.a,
        this.interval = {},
        this.service = t.service,
        this.serviceVersion = t.version,
        this.env = t.env,
        this.domain = s.APIDomainKe[t.env],
        "lianjia" === a.plat && (this.domain = s.APIDomainLianjia[t.env]),
        this.captcha = t.captchaInstance,
        this.service && this.env && this.serviceVersion && this.refreshTicket()
    }
    var i = n(5)
      , o = n.n(i)
      , s = n(0)
      , a = n(1)
      , c = n(2)
      , u = function(t, s, a, c) {
        return new (a = a || Promise)(function(e, n) {
            function r(t) {
                try {
                    o(c.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function i(t) {
                try {
                    o(c.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function o(t) {
                t.done ? e(t.value) : function(e) {
                    return e instanceof a ? e : new a(function(t) {
                        t(e)
                    }
                    )
                }(t.value).then(r, i)
            }
            o((c = c.apply(t, s || [])).next())
        }
        )
    }
      , l = function(n, r) {
        var i, o, s, t, a = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        },
        "function" == typeof Symbol && (t[Symbol.iterator] = function() {
            return this
        }
        ),
        t;
        function e(e) {
            return function(t) {
                return function(e) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (i = 1,
                            o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                            0) : o.next) && !(s = s.call(o, e[1])).done)
                                return s;
                            switch (o = 0,
                            s && (e = [2 & e[0], s.value]),
                            e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                o = e[1],
                                e = [0];
                                continue;
                            case 7:
                                e = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    a.label = e[1];
                                    break
                                }
                                if (6 === e[0] && a.label < s[1]) {
                                    a.label = s[1],
                                    s = e;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2],
                                    a.ops.push(e);
                                    break
                                }
                                s[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            e = r.call(n, a)
                        } catch (t) {
                            e = [6, t],
                            o = 0
                        } finally {
                            i = s = 0
                        }
                    if (5 & e[0])
                        throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    };
    e.default = r
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    function r(t) {
        var o = this;
        this.refreshTicket = function() {
            o.getTicket(),
            o.interval && clearInterval(o.interval),
            o.interval = setInterval(function() {
                o.getTicket()
            }, 6e5)
        }
        ,
        this.getTicket = function() {
            var t = {
                service: o.service,
                version: o.serviceVersion
            };
            return new Promise(function(n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.init,
                    method: "POST",
                    data: t
                }).then(function(t) {
                    if (n(),
                    t.data.success) {
                        var e = t.data.publicKey.key;
                        o.ec.setPublicKey(e),
                        o.loginTicketId = t.data.loginTicketId,
                        o.publicKey = e,
                        o.encodeVersion = t.data.publicKey.version
                    } else
                        Object(c.sendFee)({
                            detail: t,
                            errorName: "passport-init-error"
                        })
                })
            }
            )
        }
        ,
        this.getRiskInfo = function(t) {
            var e = {
                name: "",
                version: ""
            }
              , n = "";
            try {
                var r = new a.a;
                e = r.getOS(),
                n = r.getUA()
            } catch (t) {
                Object(c.sendFee)({
                    detail: {
                        error: t
                    },
                    errorName: "ua-parser-error"
                })
            }
            var i = {
                ua: n,
                clientSource: "pc",
                os: e.name,
                osVersion: e.version
            };
            return Object.assign({}, i, t)
        }
        ,
        this.passwordLogin = function(t, e) {
            t.encodeVersion = o.encodeVersion;
            var n = {};
            e.clickPos && (n = o.getRiskInfo(Object.assign({}, e.clickPos))),
            o.publicKey && (t.password = o.ec.encrypt(t.password));
            var r = {
                service: o.service,
                mainAuthMethodName: u.mainAuthMethodName.PASSWORD,
                accountSystem: o.accountSystem,
                credential: t,
                context: Object.assign({}, n),
                loginTicketId: o.loginTicketId,
                version: o.serviceVersion
            };
            return window.srcId && (r.srcId = window.srcId),
            t.code && (r.mfaAuthMethodName = u.allianceMethods.security),
            e.ticketMaxAge && (r.ticketMaxAge = e.ticketMaxAge),
            new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.auth,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    e(t),
                    o.sign = t.data.sign,
                    o.tgt = t.data.serviceTicket.id
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-auth-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.smsLogin = function(t, e) {
            var n = {};
            e.clickPos && (n = o.getRiskInfo(Object.assign({}, e.clickPos)));
            var r = {
                service: o.service,
                mainAuthMethodName: u.mainAuthMethodName.PHONE,
                mfaAuthMethodName: u.allianceMethods.security,
                accountSystem: o.accountSystem,
                credential: t,
                context: Object.assign({}, n),
                loginTicketId: o.loginTicketId,
                version: o.serviceVersion
            };
            return window.srcId && (r.srcId = window.srcId),
            e.ticketMaxAge && (r.ticketMaxAge = e.ticketMaxAge),
            new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.auth,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    e(t),
                    o.sign = t.data.sign,
                    o.tgt = t.data.serviceTicket.id
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-smslogin-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.register = function(t, e) {
            t.encodeVersion = o.encodeVersion;
            var n = {};
            e.clickPos && (n = o.getRiskInfo(Object.assign({}, e.clickPos))),
            o.publicKey && (t.password = o.ec.encrypt(t.password));
            var r = {
                service: o.service,
                accountSystem: o.accountSystem,
                context: Object.assign({}, n),
                displayName: Object(l.maskPhoneNumber)(t.phoneNum),
                registerMethodName: "security-code",
                credential: t
            };
            return window.srcId && (r.srcId = window.srcId),
            new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.register,
                    method: "POST",
                    data: r
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: r
                        },
                        errorName: "passport-register-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.sendSMS = function(t, e) {
            t.ticketId = o.loginTicketId,
            t.captchaScene = u.scene,
            t.captchaToken = o.captcha.token;
            var n = {
                accountSystem: o.accountSystem,
                smsType: u.smsTypeEnum.sms,
                sceneKey: e || u.SceneKey.WHEN_LOGIN,
                credential: t,
                context: {},
                version: o.serviceVersion
            };
            return new Promise(function(t, e) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.sms,
                    method: "POST",
                    data: n
                }).then(t).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: n
                        },
                        errorName: "passport-sendSMS-error"
                    }),
                    e(t)
                })
            }
            )
        }
        ,
        this.sendVoice = function(t, e) {
            t.ticketId = o.loginTicketId;
            var n = {
                accountSystem: o.accountSystem,
                smsType: u.smsTypeEnum.voice,
                sceneKey: e || u.SceneKey.WHEN_LOGIN,
                credential: t,
                context: {},
                version: o.serviceVersion
            };
            return new Promise(function(t, e) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.sms,
                    method: "POST",
                    data: n
                }).then(t).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: n
                        },
                        errorName: "passport-sendVoice-error"
                    }),
                    e(t)
                })
            }
            )
        }
        ,
        this.setCaptcha = function(e) {
            return h(o, void 0, void 0, function() {
                return f(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.captcha.add(e)];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        this.removeCaptcha = function() {
            return h(o, void 0, void 0, function() {
                return f(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.captcha.remove()];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        this.getUserInfo = function(i) {
            return h(o, void 0, void 0, function() {
                var r = this;
                return f(this, function(t) {
                    return [2, new Promise(function(e, n) {
                        Object(l.fetch)({
                            url: "" + r.domain + u.APIEndpoint.getinfo,
                            method: "GET",
                            params: {
                                service: r.service,
                                ticket: i.data.serviceTicket.id
                            }
                        }).then(function(t) {
                            e(t)
                        }).catch(function(t) {
                            Object(c.sendFee)({
                                detail: {
                                    error: t,
                                    data: {
                                        service: r.service,
                                        ticket: i.data.serviceTicket.id
                                    }
                                },
                                errorName: "passport-getUserInfo-error"
                            }),
                            n(t)
                        })
                    }
                    )]
                })
            })
        }
        ,
        this.logout = function(r) {
            return new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.logout,
                    method: "POST",
                    data: {
                        context: {
                            sign: r && r.context && r.context.sign ? r.context.sign : o.sign
                        },
                        tgt: r && r.tgt ? r.tgt : o.tgt
                    }
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    Object(c.sendFee)({
                        detail: {
                            error: t,
                            data: {
                                service: o.service,
                                tgt: r && r.tgt ? r.tgt : o.tgt
                            }
                        },
                        errorName: "passport-logout-error"
                    }),
                    n(t)
                })
            }
            )
        }
        ,
        this.destroy = function() {
            clearInterval(o.interval),
            o.interval = void 0
        }
        ,
        this.createQr = function(t) {
            return void 0 === t && (t = {
                type: "wx_official_account",
                sceneId: 0,
                sceneStr: ""
            }),
            new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.qr,
                    method: "POST",
                    data: {
                        service: o.service,
                        type: t.type,
                        data: {
                            sceneId: t.sceneId,
                            sceneStr: t.sceneStr
                        }
                    }
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    n(t)
                })
            }
            )
        }
        ,
        this.pollingQr = function(t) {
            return new Promise(function(e, n) {
                Object(l.fetch)({
                    url: "" + o.domain + u.APIEndpoint.polling,
                    method: "GET",
                    params: t
                }).then(function(t) {
                    e(t)
                }).catch(function(t) {
                    n(t)
                })
            }
            )
        }
        ,
        this.ec = new s.a,
        bbbb = this.ec,

        this.loginTicketId = "",
        this.publicKey = "",
        this.encodeVersion = "",
        this.sign = "",
        this.tgt = "",

        this.accountSystem = u.accountSystem.customer

    }
    var i = n(5)
      , s = n.n(i)
      , o = n(19)
      , a = n.n(o)
      , c = n(2)
      , u = n(0)
      , l = n(1)
      , h = function(t, s, a, c) {
        return new (a = a || Promise)(function(e, n) {
            function r(t) {
                try {
                    o(c.next(t))
                } catch (t) {
                    n(t)
                }
            }
            function i(t) {
                try {
                    o(c.throw(t))
                } catch (t) {
                    n(t)
                }
            }
            function o(t) {
                t.done ? e(t.value) : function(e) {
                    return e instanceof a ? e : new a(function(t) {
                        t(e)
                    }
                    )
                }(t.value).then(r, i)
            }
            o((c = c.apply(t, s || [])).next())
        }
        )
    }
      , f = function(n, r) {
        var i, o, s, t, a = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        },
        "function" == typeof Symbol && (t[Symbol.iterator] = function() {
            return this
        }
        ),
        t;
        function e(e) {
            return function(t) {
                return function(e) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (i = 1,
                            o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                            0) : o.next) && !(s = s.call(o, e[1])).done)
                                return s;
                            switch (o = 0,
                            s && (e = [2 & e[0], s.value]),
                            e[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                o = e[1],
                                e = [0];
                                continue;
                            case 7:
                                e = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                    a.label = e[1];
                                    break
                                }
                                if (6 === e[0] && a.label < s[1]) {
                                    a.label = s[1],
                                    s = e;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2],
                                    a.ops.push(e);
                                    break
                                }
                                s[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            e = r.call(n, a)
                        } catch (t) {
                            e = [6, t],
                            o = 0
                        } finally {
                            i = s = 0
                        }
                    if (5 & e[0])
                        throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    };
    e.default = r
}
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(this, {})
}
, function(t, e, n) {
    "use strict";
    var r = []
      , i = 0;
    window.login_track = {
        send: function(t, e, n) {
            r.push({
                evtid: t,
                event: e,
                action: n
            })
        }
    },
    function t() {
        if (window.LIANJIA_TRACK) {
            window.login_track = new LIANJIA_TRACK({});
            for (var e = 0; e < r.length; e++)
                window.login_track.send(r[e].evtid, r[e].event, r[e].action)
        } else
            10 == ++i || setTimeout(t, 1e3)
    }()
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    function r(t) {
        var e = this;
        this.registerFN = function(t, e) {
            try {
                window.BCat_2011.miaowu({
                    subid: function() {
                        return t
                    },
                    success: function(t) {
                        e(t)
                    }
                })
            } catch (t) {}
        }
        ,
        this.loadJS = function(r) {
            var i;
            void 0 === r && (r = function() {}
            );
            var o = 0;
            return new Promise(function(t, e) {
                var n = document.createElement("script");
                n.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2011-s2.js",
                n.async = !0,
                n.onload = function() {
                    window.BCat_2011 ? (r(),
                    t()) : i = setInterval(function() {
                        1e3 < (o += 1) && (e(),
                        clearInterval(i)),
                        window.BCat_2011 && (r(),
                        t(),
                        clearInterval(i))
                    }, 200)
                }
                ,
                n.onerror = e,
                document.head.appendChild(n)
            }
            )
        }
        ,
        this.loadJS(function() {
            e.registerFN(t.portal, t.cb)
        })
    }
    e.default = r
}
, function(x, T, t) {
    (function(t) {
        var w, e;
        e = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : this,
        x.exports = function(e) {
            "use strict";
            var n = (e = e || {}).Base64
              , i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , o = function(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++)
                    e[t.charAt(n)] = n;
                return e
            }(i)
              , s = String.fromCharCode
              , r = function(t) {
                if (t.length < 2) {
                    var e = t.charCodeAt(0);
                    return e < 128 ? t : e < 2048 ? s(192 | e >>> 6) + s(128 | 63 & e) : s(224 | e >>> 12 & 15) + s(128 | e >>> 6 & 63) + s(128 | 63 & e)
                }
                var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                return s(240 | e >>> 18 & 7) + s(128 | e >>> 12 & 63) + s(128 | e >>> 6 & 63) + s(128 | 63 & e)
            }
              , a = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
              , c = function(t) {
                return t.replace(a, r)
            }
              , u = function(t) {
                var e = [0, 2, 1][t.length % 3]
                  , n = t.charCodeAt(0) << 16 | (1 < t.length ? t.charCodeAt(1) : 0) << 8 | (2 < t.length ? t.charCodeAt(2) : 0)
                  , r = [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), 2 <= e ? "=" : i.charAt(n >>> 6 & 63), 1 <= e ? "=" : i.charAt(63 & n)];
                return r.join("")
            }
              , l = e.btoa && "function" == typeof e.btoa ? function(t) {
                return e.btoa(t)
            }
            : function(t) {
                if (t.match(/[^\x00-\xFF]/))
                    throw new RangeError("The string contains invalid characters.");
                return t.replace(/[\s\S]{1,3}/g, u)
            }
              , h = function(t) {
                return l(c(String(t)))
            }
              , f = function(t, e) {
                return e ? h(String(t)).replace(/[+\/]/g, function(t) {
                    return "+" == t ? "-" : "_"
                }).replace(/=/g, "") : h(String(t))
            }
              , d = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
              , p = function(t) {
                switch (t.length) {
                case 4:
                    var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)
                      , n = e - 65536;
                    return s(55296 + (n >>> 10)) + s(56320 + (1023 & n));
                case 3:
                    return s((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                default:
                    return s((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                }
            }
              , g = function(t) {
                return t.replace(d, p)
            }
              , m = function(t) {
                var e = t.length
                  , n = e % 4
                  , r = (0 < e ? o[t.charAt(0)] << 18 : 0) | (1 < e ? o[t.charAt(1)] << 12 : 0) | (2 < e ? o[t.charAt(2)] << 6 : 0) | (3 < e ? o[t.charAt(3)] : 0)
                  , i = [s(r >>> 16), s(r >>> 8 & 255), s(255 & r)];
                return i.length -= [0, 0, 2, 1][n],
                i.join("")
            }
              , v = e.atob && "function" == typeof e.atob ? function(t) {
                return e.atob(t)
            }
            : function(t) {
                return t.replace(/\S{1,4}/g, m)
            }
              , y = function(t) {
                return v(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
            }
              , t = function(t) {
                return function(t) {
                    return g(v(t))
                }(String(t).replace(/[-_]/g, function(t) {
                    return "-" == t ? "+" : "/"
                }).replace(/[^A-Za-z0-9\+\/]/g, ""))
            };
            if (e.Base64 = {
                VERSION: "2.6.1",
                atob: y,
                btoa: l,
                fromBase64: t,
                toBase64: f,
                utob: c,
                encode: f,
                encodeURI: function(t) {
                    return f(t, true)
                },
                btou: g,
                decode: t,
                noConflict: function() {
                    var t = e.Base64;
                    return e.Base64 = n,
                    t
                },
                fromUint8Array: function(t) {
                    return l(Array.from(t, function(t) {
                        return String.fromCharCode(t)
                    }).join(""))
                },
                toUint8Array: function(t) {
                    return Uint8Array.from(y(t), function(t) {
                        return t.charCodeAt(0)
                    })
                }
            },
            "function" == typeof Object.defineProperty) {
                var b = function(t) {
                    return {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                };
                e.Base64.extendString = function() {
                    Object.defineProperty(String.prototype, "fromBase64", b(function() {
                        return t(this)
                    })),
                    Object.defineProperty(String.prototype, "toBase64", b(function(t) {
                        return f(this, t)
                    })),
                    Object.defineProperty(String.prototype, "toBase64URI", b(function() {
                        return f(this, !0)
                    }))
                }
            }
            return e.Meteor && (Base64 = e.Base64),
            x.exports ? x.exports.Base64 = e.Base64 : void 0 === (w = function() {
                return e.Base64
            }
            .apply(T, [])) || (x.exports = w),
            {
                Base64: e.Base64
            }
        }(e)
    }
    ).call(this, t(55))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var r;
    "undefined" != typeof self && self,
    r = function() {
        var t;
        function n(t) {
            this.mode = o.MODE_8BIT_BYTE,
            this.data = t,
            this.parsedData = [];
            for (var e = 0, n = this.data.length; e < n; e++) {
                var r = []
                  , i = this.data.charCodeAt(e);
                65536 < i ? (r[0] = 240 | (1835008 & i) >>> 18,
                r[1] = 128 | (258048 & i) >>> 12,
                r[2] = 128 | (4032 & i) >>> 6,
                r[3] = 128 | 63 & i) : 2048 < i ? (r[0] = 224 | (61440 & i) >>> 12,
                r[1] = 128 | (4032 & i) >>> 6,
                r[2] = 128 | 63 & i) : 128 < i ? (r[0] = 192 | (1984 & i) >>> 6,
                r[1] = 128 | 63 & i) : r[0] = i,
                this.parsedData.push(r)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239))
        }
        function c(t, e) {
            this.typeNumber = t,
            this.errorCorrectLevel = e,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        n.prototype = {
            getLength: function(t) {
                return this.parsedData.length
            },
            write: function(t) {
                for (var e = 0, n = this.parsedData.length; e < n; e++)
                    t.put(this.parsedData[e], 8)
            }
        },
        c.prototype = {
            addData: function(t) {
                var e = new n(t);
                this.dataList.push(e),
                this.dataCache = null
            },
            isDark: function(t, e) {
                if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                    throw new Error(t + "," + e);
                return this.modules[t][e]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(t, e) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++)
                        this.modules[n][r] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, e),
                7 <= this.typeNumber && this.setupTypeNumber(t),
                null == this.dataCache && (this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, e)
            },
            setupPositionProbePattern: function(t, e) {
                for (var n = -1; n <= 7; n++)
                    if (!(t + n <= -1 || this.moduleCount <= t + n))
                        for (var r = -1; r <= 7; r++)
                            e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, n = 0; n < 8; n++) {
                    this.makeImpl(!0, n);
                    var r = v.getLostPoint(this);
                    (0 == n || r < t) && (t = r,
                    e = n)
                }
                return e
            },
            createMovieClip: function(t, e, n) {
                var r = t.createEmptyMovieClip(e, n);
                this.make();
                for (var i = 0; i < this.modules.length; i++)
                    for (var o = 1 * i, s = 0; s < this.modules[i].length; s++) {
                        var a = 1 * s;
                        this.modules[i][s] && (r.beginFill(0, 100),
                        r.moveTo(a, o),
                        r.lineTo(1 + a, o),
                        r.lineTo(1 + a, 1 + o),
                        r.lineTo(a, 1 + o),
                        r.endFill())
                    }
                return r
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var e = 8; e < this.moduleCount - 8; e++)
                    null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
            },
            setupPositionAdjustPattern: function() {
                for (var t = v.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[e]
                          , i = t[n];
                        if (null == this.modules[r][i])
                            for (var o = -2; o <= 2; o++)
                                for (var s = -2; s <= 2; s++)
                                    this.modules[r + o][i + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = v.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var r = !t && 1 == (e >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                }
                for (n = 0; n < 18; n++) {
                    r = !t && 1 == (e >> n & 1);
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }
            },
            setupTypeInfo: function(t, e) {
                for (var n = this.errorCorrectLevel << 3 | e, r = v.getBCHTypeInfo(n), i = 0; i < 15; i++) {
                    var o = !t && 1 == (r >> i & 1);
                    i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
                }
                for (i = 0; i < 15; i++) {
                    o = !t && 1 == (r >> i & 1);
                    i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
                }
                this.modules[this.moduleCount - 8][8] = !t
            },
            mapData: function(t, e) {
                for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; 0 < s; s -= 2)
                    for (6 == s && s--; ; ) {
                        for (var a = 0; a < 2; a++)
                            if (null == this.modules[r][s - a]) {
                                var c = !1;
                                o < t.length && (c = 1 == (t[o] >>> i & 1)),
                                v.getMask(e, r, s - a) && (c = !c),
                                this.modules[r][s - a] = c,
                                -1 == --i && (o++,
                                i = 7)
                            }
                        if ((r += n) < 0 || this.moduleCount <= r) {
                            r -= n,
                            n = -n;
                            break
                        }
                    }
            }
        },
        c.PAD0 = 236,
        c.PAD1 = 17,
        c.createData = function(t, e, n) {
            for (var r = g.getRSBlocks(t, e), i = new m, o = 0; o < n.length; o++) {
                var s = n[o];
                i.put(s.mode, 4),
                i.put(s.getLength(), v.getLengthInBits(s.mode, t)),
                s.write(i)
            }
            var a = 0;
            for (o = 0; o < r.length; o++)
                a += r[o].dataCount;
            if (i.getLengthInBits() > 8 * a)
                throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * a + ")");
            for (i.getLengthInBits() + 4 <= 8 * a && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                i.putBit(!1);
            for (; !(i.getLengthInBits() >= 8 * a || (i.put(c.PAD0, 8),
            i.getLengthInBits() >= 8 * a)); )
                i.put(c.PAD1, 8);
            return c.createBytes(i, r)
        }
        ,
        c.createBytes = function(t, e) {
            for (var n = 0, r = 0, i = 0, o = new Array(e.length), s = new Array(e.length), a = 0; a < e.length; a++) {
                var c = e[a].dataCount
                  , u = e[a].totalCount - c;
                r = Math.max(r, c),
                i = Math.max(i, u),
                o[a] = new Array(c);
                for (var l = 0; l < o[a].length; l++)
                    o[a][l] = 255 & t.buffer[l + n];
                n += c;
                var h = v.getErrorCorrectPolynomial(u)
                  , f = new y(o[a],h.getLength() - 1).mod(h);
                s[a] = new Array(h.getLength() - 1);
                for (l = 0; l < s[a].length; l++) {
                    var d = l + f.getLength() - s[a].length;
                    s[a][l] = 0 <= d ? f.get(d) : 0
                }
            }
            var p = 0;
            for (l = 0; l < e.length; l++)
                p += e[l].totalCount;
            var g = new Array(p)
              , m = 0;
            for (l = 0; l < r; l++)
                for (a = 0; a < e.length; a++)
                    l < o[a].length && (g[m++] = o[a][l]);
            for (l = 0; l < i; l++)
                for (a = 0; a < e.length; a++)
                    l < s[a].length && (g[m++] = s[a][l]);
            return g
        }
        ;
        for (var o = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, a = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, r = 0, i = 1, s = 2, u = 3, l = 4, h = 5, f = 6, d = 7, v = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var e = t << 10; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G15); )
                    e ^= v.G15 << v.getBCHDigit(e) - v.getBCHDigit(v.G15);
                return (t << 10 | e) ^ v.G15_MASK
            },
            getBCHTypeNumber: function(t) {
                for (var e = t << 12; 0 <= v.getBCHDigit(e) - v.getBCHDigit(v.G18); )
                    e ^= v.G18 << v.getBCHDigit(e) - v.getBCHDigit(v.G18);
                return t << 12 | e
            },
            getBCHDigit: function(t) {
                for (var e = 0; 0 != t; )
                    e++,
                    t >>>= 1;
                return e
            },
            getPatternPosition: function(t) {
                return v.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function(t, e, n) {
                switch (t) {
                case r:
                    return (e + n) % 2 == 0;
                case i:
                    return e % 2 == 0;
                case s:
                    return n % 3 == 0;
                case u:
                    return (e + n) % 3 == 0;
                case l:
                    return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case h:
                    return e * n % 2 + e * n % 3 == 0;
                case f:
                    return (e * n % 2 + e * n % 3) % 2 == 0;
                case d:
                    return (e * n % 3 + (e + n) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new y([1],0), n = 0; n < t; n++)
                    e = e.multiply(new y([1, p.gexp(n)],0));
                return e
            },
            getLengthInBits: function(t, e) {
                if (1 <= e && e < 10)
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 10;
                    case o.MODE_ALPHA_NUM:
                        return 9;
                    case o.MODE_8BIT_BYTE:
                    case o.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t)
                    }
                else if (e < 27)
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 12;
                    case o.MODE_ALPHA_NUM:
                        return 11;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t)
                    }
                else {
                    if (!(e < 41))
                        throw new Error("type:" + e);
                    switch (t) {
                    case o.MODE_NUMBER:
                        return 14;
                    case o.MODE_ALPHA_NUM:
                        return 13;
                    case o.MODE_8BIT_BYTE:
                        return 16;
                    case o.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                    }
                }
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                    for (var i = 0; i < e; i++) {
                        for (var o = 0, s = t.isDark(r, i), a = -1; a <= 1; a++)
                            if (!(r + a < 0 || e <= r + a))
                                for (var c = -1; c <= 1; c++)
                                    i + c < 0 || e <= i + c || 0 == a && 0 == c || s == t.isDark(r + a, i + c) && o++;
                        5 < o && (n += 3 + o - 5)
                    }
                for (r = 0; r < e - 1; r++)
                    for (i = 0; i < e - 1; i++) {
                        var u = 0;
                        t.isDark(r, i) && u++,
                        t.isDark(r + 1, i) && u++,
                        t.isDark(r, i + 1) && u++,
                        t.isDark(r + 1, i + 1) && u++,
                        0 != u && 4 != u || (n += 3)
                    }
                for (r = 0; r < e; r++)
                    for (i = 0; i < e - 6; i++)
                        t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                for (i = 0; i < e; i++)
                    for (r = 0; r < e - 6; r++)
                        t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                var l = 0;
                for (i = 0; i < e; i++)
                    for (r = 0; r < e; r++)
                        t.isDark(r, i) && l++;
                return n += 10 * (Math.abs(100 * l / e / e - 50) / 5)
            }
        }, p = {
            glog: function(t) {
                if (t < 1)
                    throw new Error("glog(" + t + ")");
                return p.LOG_TABLE[t]
            },
            gexp: function(t) {
                for (; t < 0; )
                    t += 255;
                for (; 256 <= t; )
                    t -= 255;
                return p.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, e = 0; e < 8; e++)
            p.EXP_TABLE[e] = 1 << e;
        for (e = 8; e < 256; e++)
            p.EXP_TABLE[e] = p.EXP_TABLE[e - 4] ^ p.EXP_TABLE[e - 5] ^ p.EXP_TABLE[e - 6] ^ p.EXP_TABLE[e - 8];
        for (e = 0; e < 255; e++)
            p.LOG_TABLE[p.EXP_TABLE[e]] = e;
        function y(t, e) {
            if (null == t.length)
                throw new Error(t.length + "/" + e);
            for (var n = 0; n < t.length && 0 == t[n]; )
                n++;
            this.num = new Array(t.length - n + e);
            for (var r = 0; r < t.length - n; r++)
                this.num[r] = t[r + n]
        }
        function g(t, e) {
            this.totalCount = t,
            this.dataCount = e
        }
        function m() {
            this.buffer = [],
            this.length = 0
        }
        y.prototype = {
            get: function(t) {
                return this.num[t]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
                    for (var r = 0; r < t.getLength(); r++)
                        e[n + r] ^= p.gexp(p.glog(this.get(n)) + p.glog(t.get(r)));
                return new y(e,0)
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0)
                    return this;
                for (var e = p.glog(this.get(0)) - p.glog(t.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
                    n[r] = this.get(r);
                for (r = 0; r < t.getLength(); r++)
                    n[r] ^= p.gexp(p.glog(t.get(r)) + e);
                return new y(n,0).mod(t)
            }
        },
        g.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
        g.getRSBlocks = function(t, e) {
            var n = g.getRsBlockTable(t, e);
            if (null == n)
                throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var r = n.length / 3, i = [], o = 0; o < r; o++)
                for (var s = n[3 * o + 0], a = n[3 * o + 1], c = n[3 * o + 2], u = 0; u < s; u++)
                    i.push(new g(a,c));
            return i
        }
        ,
        g.getRsBlockTable = function(t, e) {
            switch (e) {
            case a.L:
                return g.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case a.M:
                return g.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case a.Q:
                return g.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case a.H:
                return g.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
            }
        }
        ,
        m.prototype = {
            get: function(t) {
                var e = Math.floor(t / 8);
                return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
            },
            put: function(t, e) {
                for (var n = 0; n < e; n++)
                    this.putBit(1 == (t >>> e - n - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var b = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
        function w() {
            var t = !1
              , e = navigator.userAgent;
            if (/android/i.test(e)) {
                t = !0;
                var n = e.toString().match(/android ([0-9]\.[0-9])/i);
                n && n[1] && (t = parseFloat(n[1]))
            }
            return t
        }
        var x = (T.prototype.draw = function(t) {
            var e = this._htOption
              , n = this._el
              , r = t.getModuleCount();
            function i(t, e) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", t);
                for (var r in e)
                    e.hasOwnProperty(r) && n.setAttribute(r, e[r]);
                return n
            }
            Math.floor(e.width / r),
            Math.floor(e.height / r),
            this.clear();
            var o = i("svg", {
                viewBox: "0 0 " + String(r) + " " + String(r),
                width: "100%",
                height: "100%",
                fill: e.colorLight
            });
            o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
            n.appendChild(o),
            o.appendChild(i("rect", {
                fill: e.colorLight,
                width: "100%",
                height: "100%"
            })),
            o.appendChild(i("rect", {
                fill: e.colorDark,
                width: "1",
                height: "1",
                id: "template"
            }));
            for (var s = 0; s < r; s++)
                for (var a = 0; a < r; a++)
                    if (t.isDark(s, a)) {
                        var c = i("use", {
                            x: String(a),
                            y: String(s)
                        });
                        c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
                        o.appendChild(c)
                    }
        }
        ,
        T.prototype.clear = function() {
            for (; this._el.hasChildNodes(); )
                this._el.removeChild(this._el.lastChild)
        }
        ,
        T);
        function T(t, e) {
            this._el = t,
            this._htOption = e
        }
        var E = "svg" === document.documentElement.tagName.toLowerCase() ? x : "undefined" == typeof CanvasRenderingContext2D ? (S.prototype.draw = function(t) {
            for (var e = this._htOption, n = this._el, r = t.getModuleCount(), i = Math.floor(e.width / r), o = Math.floor(e.height / r), s = ['<table style="border:0;border-collapse:collapse;">'], a = 0; a < r; a++) {
                s.push("<tr>");
                for (var c = 0; c < r; c++)
                    s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + o + "px;background-color:" + (t.isDark(a, c) ? e.colorDark : e.colorLight) + ';"></td>');
                s.push("</tr>")
            }
            s.push("</table>"),
            n.innerHTML = s.join("");
            var u = n.childNodes[0]
              , l = (e.width - u.offsetWidth) / 2
              , h = (e.height - u.offsetHeight) / 2;
            0 < l && 0 < h && (u.style.margin = h + "px " + l + "px")
        }
        ,
        S.prototype.clear = function() {
            this._el.innerHTML = ""
        }
        ,
        S) : function() {
            function t() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"),
                this._elImage.style.display = "block",
                this._elCanvas.style.display = "none"
            }
            if (this && this._android && this._android <= 2.1) {
                var l = 1 / window.devicePixelRatio
                  , h = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(t, e, n, r, i, o, s, a, c) {
                    if ("nodeName"in t && /img/i.test(t.nodeName))
                        for (var u = arguments.length - 1; 1 <= u; u--)
                            arguments[u] = arguments[u] * l;
                    else
                        void 0 === a && (e *= l,
                        n *= l,
                        r *= l,
                        i *= l);
                    h.apply(this, arguments)
                }
            }
            function e(t, e) {
                this._bIsPainted = !1,
                this._android = w(),
                this._htOption = e,
                this._elCanvas = document.createElement("canvas"),
                this._elCanvas.width = e.width,
                this._elCanvas.height = e.height,
                t.appendChild(this._elCanvas),
                this._el = t,
                this._oContext = this._elCanvas.getContext("2d"),
                this._bIsPainted = !1,
                this._elImage = document.createElement("img"),
                this._elImage.alt = "Scan me!",
                this._elImage.style.display = "none",
                this._el.appendChild(this._elImage),
                this._bSupportDataURI = null
            }
            return e.prototype.draw = function(t) {
                var e = this._elImage
                  , n = this._oContext
                  , r = this._htOption
                  , i = t.getModuleCount()
                  , o = r.width / i
                  , s = r.height / i
                  , a = Math.round(o)
                  , c = Math.round(s);
                e.style.display = "none",
                this.clear();
                for (var u = 0; u < i; u++)
                    for (var l = 0; l < i; l++) {
                        var h = t.isDark(u, l)
                          , f = l * o
                          , d = u * s;
                        n.strokeStyle = h ? r.colorDark : r.colorLight,
                        n.lineWidth = 1,
                        n.fillStyle = h ? r.colorDark : r.colorLight,
                        n.fillRect(f, d, o, s),
                        n.strokeRect(Math.floor(f) + .5, Math.floor(d) + .5, a, c),
                        n.strokeRect(Math.ceil(f) - .5, Math.ceil(d) - .5, a, c)
                    }
                this._bIsPainted = !0
            }
            ,
            e.prototype.makeImage = function() {
                this._bIsPainted && function(t, e) {
                    var n = this;
                    if (n._fFail = e,
                    n._fSuccess = t,
                    null === n._bSupportDataURI) {
                        function r() {
                            n._bSupportDataURI = !1,
                            n._fFail && n._fFail.call(n)
                        }
                        var i = document.createElement("img");
                        return i.onabort = r,
                        i.onerror = r,
                        i.onload = function() {
                            n._bSupportDataURI = !0,
                            n._fSuccess && n._fSuccess.call(n)
                        }
                        ,
                        void (i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                    }
                    !0 === n._bSupportDataURI && n._fSuccess ? n._fSuccess.call(n) : !1 === n._bSupportDataURI && n._fFail && n._fFail.call(n)
                }
                .call(this, t)
            }
            ,
            e.prototype.isPainted = function() {
                return this._bIsPainted
            }
            ,
            e.prototype.clear = function() {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                this._bIsPainted = !1
            }
            ,
            e.prototype.round = function(t) {
                return t ? Math.floor(1e3 * t) / 1e3 : t
            }
            ,
            e
        }();
        function S(t, e) {
            this._el = t,
            this._htOption = e
        }
        function _(t, e) {
            for (var n = 1, r = function(t) {
                var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                return e.length + (e.length != t ? 3 : 0)
            }(t), i = 0, o = b.length; i <= o; i++) {
                var s = 0;
                switch (e) {
                case a.L:
                    s = b[i][0];
                    break;
                case a.M:
                    s = b[i][1];
                    break;
                case a.Q:
                    s = b[i][2];
                    break;
                case a.H:
                    s = b[i][3]
                }
                if (r <= s)
                    break;
                n++
            }
            if (b.length < n)
                throw new Error("Too long data");
            return n
        }
        return (t = function(t, e) {
            if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: a.H
            },
            "string" == typeof e && (e = {
                text: e
            }),
            e)
                for (var n in e)
                    this._htOption[n] = e[n];
            "string" == typeof t && (t = document.getElementById(t)),
            this._htOption.useSVG && (E = x),
            this._android = w(),
            this._el = t,
            this._oQRCode = null,
            this._oDrawing = new E(this._el,this._htOption),
            this._htOption.text && this.makeCode(this._htOption.text)
        }
        ).prototype.makeCode = function(t) {
            this._oQRCode = new c(_(t, this._htOption.correctLevel),this._htOption.correctLevel),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            this._el.title = t,
            this._oDrawing.draw(this._oQRCode),
            this.makeImage()
        }
        ,
        t.prototype.makeImage = function() {
            "function" == typeof this._oDrawing.makeImage && (!this._android || 3 <= this._android) && this._oDrawing.makeImage()
        }
        ,
        t.prototype.clear = function() {
            this._oDrawing.clear()
        }
        ,
        t.CorrectLevel = a,
        t
    }
    ,
    t.exports = r()
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    };
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var o = n(2);
    var s = {
        0: {
            PV: {
                evtid: "51218",
                param: {
                    event: "pc_phonecode_login_pv"
                }
            },
            CLOSE: {
                evtid: "51219",
                param: {
                    event: "close_phonecode_login"
                }
            },
            LOGIN: {
                evtid: "51220",
                param: {
                    event: "click_phonecode_login"
                }
            },
            SWITCH_LOGIN: {
                evtid: "51221",
                param: {
                    event: "switch_to_password_login"
                }
            }
        },
        1: {
            PV: {
                evtid: "51256",
                param: {
                    event: "pc_password_login_pv"
                }
            },
            CLOSE: {
                evtid: "51222",
                param: {
                    event: "close_password_login"
                }
            },
            LOGIN: {
                evtid: "51224",
                param: {
                    event: "click_password_login"
                }
            },
            SWITCH_LOGIN: {
                evtid: "51225",
                param: {
                    event: "switch_to_phonecode_login"
                }
            },
            FORGOT: {
                evtid: "51223",
                param: {
                    event: "click_forget_password"
                }
            }
        },
        2: {},
        3: {},
        4: {}
    }
      , a = (r(c, [{
        key: "getDigData",
        value: function(t, e) {
            return (s[t] || {})[e]
        }
    }, {
        key: "send",
        value: function(t, e) {
            var n = this.getDigData(t, e);
            if (n && n.evtid && n.param)
                if (window.$ULOG && window.$ULOG.send)
                    try {
                        n.param.pid = this.pid,
                        window.$ULOG.send(n.evtid, n.param)
                    } catch (r) {
                        (0,
                        o.sendFee)({
                            detail: {
                                error: r,
                                data: n
                            },
                            errorName: "dig-send-error"
                        })
                    }
                else {
                    var r = new Error("没有 window.$ULOG & window.$ULOG.send");
                    (0,
                    o.sendFee)({
                        detail: {
                            error: r
                        },
                        errorName: "dig-init-error"
                    })
                }
        }
    }]),
    c);
    function c() {
        !function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, c),
        this.pid = "jcptzx_pc_loginsdk"
    }
    e.default = a
}
, function(t, e) {
    t.exports = function(t) {
        var e, n = "";
        return n += '<div id="loginModel" class="login_layer theme-' + (null == (e = t.theme) ? "" : e) + '" style="display: none">\n    <div class="login_bg animated"></div>\n\n    <div class="login_panel animated">\n        <div class="login_panel_close">&times</div>\n\n        <div class="login_box">\n            <div class="login_panel_label">\n                <h2 class="login_panel_title"></h2>\n                <div class="login_panel_hint">\n                </div>\n            </div>\n            <form class="form">\n                <ul class="input_box">\n                    <li class="form_input_item first_child phonenum ">\n                        <input class="phonenum_input" maxlength="11" placeholder="请输入手机号" type="text" autocomplete="username"/>\n                    </li>\n\x3c!--                    <li class="form_input_item picverifycode">--\x3e\n\x3c!--                        <input class="code_type picverifycode_input" placeholder="请输入验证码" type="text" autocomplete="off"/>--\x3e\n\x3c!--                        <img class="verifyimg login_verify_img" src=""/>--\x3e\n\x3c!--                    </li>--\x3e\n                    <li class="form_input_item last_child messageverifycode">\n                        <input class="code_type messageverifycode_input" placeholder="请输入短信验证码" type="text" autocomplete="off"/>\n                        <a class="addtional_a send_login_message_verify">\n                            <em>获取验证码</em>\n                        </a>\n                    </li>\n                    <li class="form_input_item last_child password">\n                        <input class="password_type password_input" placeholder="请输入密码" type="password" autocomplete="current-password"/>\n                        <em class="password-view"></em>\n                    </li>\n                    <li class="form_input_item last_child setpassword">\n                        <input class="password_type setpassword_input" placeholder="请输入密码（最少8位，数字+字母）" type="password" autocomplete="current-password"/>\n                        <em class="password-view"></em>\n                    </li>\n                </ul>\n                <div class="login_error login_error_tip"></div>\n                <div class="login_error login_voice">没收到验证码？<a class="login_send_voice">发送语音验证码</a></div>\n                <div class="login_remember remember">\n                    <label class="checkbox-btn">\n                        <input type="checkbox" name="remember" data-defval="1" class="mind-login remember_input" checked="">\n                        <span class="checkbox"></span>7天内免登录\n                    </label>\n                    <div class="login_panel_forget_password"></div>\n                </div>\n                <div class="login_protocol protocol">\n                    <label class="checkbox-btn">\n                        <input type="checkbox" name="protocol" data-defval="0" data-require="1" class="mind-login protocol_input" checked="">\n                        <span class="checkbox"></span>' + (null == (e = t.protocolText) ? "" : e) + '\n                    </label>\n                </div>\n                <div class="btn confirm_btn login_panel_op login_submit _bgcolor"></div>\n                <div class="login_panel_change_login_type">\n                </div>\n            </form>\n        </div>\n\n        <div class="set_password_success">\n            <div class="succ_tit">修改密码成功</div>\n            <div class="succ_desc">欢迎回来，<a class="tologin _color">点击这里去登录</a></div>\n        </div>\n\n    </div>\n\n</div>\n'
    }
}
]);

let123(50).default()
console.log(bbbb.encrypt('abc123'))

