
function n() {
    return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}
function o(t, e) {
    if (n() < e)
        throw new RangeError("Invalid typed array length");
    return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
    t.__proto__ = i.prototype) : (null === t && (t = new i(e)),
    t.length = e),
    t
}
function i(t, e, r) {
    if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i))
        return new i(t,e,r);
    if ("number" == typeof t) {
        if ("string" == typeof e)
            throw new Error("If encoding is specified then the first argument must be a string");
        return c(this, t)
    }
    return a(this, t, e, r)
}
function a(e, r) {
    t = undefined
    if ("number" == typeof e)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, r, n) : "string" == typeof e ? f(t, e, r) : p(t, e)
}
function s(t) {
    if ("number" != typeof t)
        throw new TypeError('"size" argument must be a number');
    if (t < 0)
        throw new RangeError('"size" argument must not be negative')
}
function u(t, e, r, n) {
    return s(e),
    e <= 0 ? o(t, e) : void 0 !== r ? "string" == typeof n ? o(t, e).fill(r, n) : o(t, e).fill(r) : o(t, e)
}
function c(t, e) {
    if (s(e),
    t = o(t, e < 0 ? 0 : 0 | d(e)),
    !i.TYPED_ARRAY_SUPPORT)
        for (var r = 0; r < e; ++r)
            t[r] = 0;
    return t
}

i.isEncoding = function(t) {
    switch (String(t).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
        return !0;
    default:
        return !1
    }
}

function write123(t, e, r, n) {
    if (void 0 === e)
        n = "utf8",
        r = this.length,
        e = 0;
    else if (void 0 === r && "string" == typeof e)
        n = e,
        r = this.length,
        e = 0;
    else {
        if (!isFinite(e))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0,
        isFinite(r) ? (r |= 0,
        void 0 === n && (n = "utf8")) : (n = r,
        r = void 0)
    }
    var o = this.length - e;
    if ((void 0 === r || r > o) && (r = o),
    t.length > 0 && (r < 0 || e < 0) || e > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var i = !1; ; )
        switch (n) {
        case "hex":
            return _(this, t, e, r);
        case "utf8":
        case "utf-8":
            return E(this, t, e, r);
        case "ascii":
            return A(this, t, e, r);
        case "latin1":
        case "binary":
            return C(this, t, e, r);
        case "base64":
            return x(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return S(this, t, e, r);
        default:
            if (i)
                throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(),
            i = !0
        }
}

function f(t, e, r) {
    if ("string" == typeof r && "" !== r || (r = "utf8"),
    !i.isEncoding(r))
        throw new TypeError('"encoding" must be a valid string encoding');
    var n = 0 | y(e, r);
    t = o(t, n);
    var a = write123(e, r);
    return a !== n && (t = t.slice(0, a)),
    t
}
function l(t, e) {
    var r = e.length < 0 ? 0 : 0 | d(e.length);
    t = o(t, r);
    for (var n = 0; n < r; n += 1)
        t[n] = 255 & e[n];
    return t
}
function h(t, e, r, n) {
    if (e.byteLength,
    r < 0 || e.byteLength < r)
        throw new RangeError("'offset' is out of bounds");
    if (e.byteLength < r + (n || 0))
        throw new RangeError("'length' is out of bounds");
    return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,r) : new Uint8Array(e,r,n),
    i.TYPED_ARRAY_SUPPORT ? (t = e,
    t.__proto__ = i.prototype) : t = l(t, e),
    t
}
i.isBuffer = function(t) {
    return !(null == t || !t._isBuffer)
}

function p(t, e) {
    if (i.isBuffer(e)) {
        var r = 0 | d(e.length);
        return t = o(t, r),
        0 === t.length ? t : (e.copy(t, 0, 0, r),
        t)
    }
    if (e) {
        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
            return "number" != typeof e.length || G(e.length) ? o(t, 0) : l(t, e);
        if ("Buffer" === e.type && K(e.data))
            return l(t, e.data)
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
}
function d(t) {
    if (t >= n())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
    return 0 | t
}
function m(t) {
    return +t != t && (t = 0),
    i.alloc(+t)
}
function y(t, e) {
    if (i.isBuffer(t))
        return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
        return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var r = t.length;
    if (0 === r)
        return 0;
    for (var n = !1; ; )
        switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
            return r;
        case "utf8":
        case "utf-8":
        case void 0:
            return Y(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * r;
        case "hex":
            return r >>> 1;
        case "base64":
            return V(t).length;
        default:
            if (n)
                return Y(t).length;
            e = ("" + e).toLowerCase(),
            n = !0
        }
}
function v(t, e, r) {
    var n = !1;
    if ((void 0 === e || e < 0) && (e = 0),
    e > this.length)
        return "";
    if ((void 0 === r || r > this.length) && (r = this.length),
    r <= 0)
        return "";
    if (r >>>= 0,
    e >>>= 0,
    r <= e)
        return "";
    for (t || (t = "utf8"); ; )
        switch (t) {
        case "hex":
            return j(this, e, r);
        case "utf8":
        case "utf-8":
            return T(this, e, r);
        case "ascii":
            return k(this, e, r);
        case "latin1":
        case "binary":
            return R(this, e, r);
        case "base64":
            return O(this, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return N(this, e, r);
        default:
            if (n)
                throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(),
            n = !0
        }
}
function g(t, e, r) {
    var n = t[e];
    t[e] = t[r],
    t[r] = n
}
function b(t, e, r, n, o) {
    if (0 === t.length)
        return -1;
    if ("string" == typeof r ? (n = r,
    r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
    r = +r,
    isNaN(r) && (r = o ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length) {
        if (o)
            return -1;
        r = t.length - 1
    } else if (r < 0) {
        if (!o)
            return -1;
        r = 0
    }
    if ("string" == typeof e && (e = i.from(e, n)),
    i.isBuffer(e))
        return 0 === e.length ? -1 : w(t, e, r, n, o);
    if ("number" == typeof e)
        return e &= 255,
        i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [e], r, n, o);
    throw new TypeError("val must be string, number or Buffer")
}
function w(t, e, r, n, o) {
    function i(t, e) {
        return 1 === a ? t[e] : t.readUInt16BE(e * a)
    }
    var a = 1
      , s = t.length
      , u = e.length;
    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || e.length < 2)
            return -1;
        a = 2,
        s /= 2,
        u /= 2,
        r /= 2
    }
    var c;
    if (o) {
        var f = -1;
        for (c = r; c < s; c++)
            if (i(t, c) === i(e, -1 === f ? 0 : c - f)) {
                if (-1 === f && (f = c),
                c - f + 1 === u)
                    return f * a
            } else
                -1 !== f && (c -= c - f),
                f = -1
    } else
        for (r + u > s && (r = s - u),
        c = r; c >= 0; c--) {
            for (var l = !0, h = 0; h < u; h++)
                if (i(t, c + h) !== i(e, h)) {
                    l = !1;
                    break
                }
            if (l)
                return c
        }
    return -1
}
function _(t, e, r, n) {
    r = Number(r) || 0;
    var o = t.length - r;
    n ? (n = Number(n)) > o && (n = o) : n = o;
    var i = e.length;
    if (i % 2 != 0)
        throw new TypeError("Invalid hex string");
    n > i / 2 && (n = i / 2);
    for (var a = 0; a < n; ++a) {
        var s = parseInt(e.substr(2 * a, 2), 16);
        if (isNaN(s))
            return a;
        t[r + a] = s
    }
    return a
}
function E(t, e, r, n) {
    return X(Y(e, t.length - r), t, r, n)
}
function A(t, e, r, n) {
    return X($(e), t, r, n)
}
function C(t, e, r, n) {
    return A(t, e, r, n)
}
function x(t, e, r, n) {
    return X(V(e), t, r, n)
}
function S(t, e, r, n) {
    return X(H(e, t.length - r), t, r, n)
}
function O(t, e, r) {
    return 0 === e && r === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, r))
}
function T(t, e, r) {
    r = Math.min(t.length, r);
    for (var n = [], o = e; o < r; ) {
        var i = t[o]
          , a = null
          , s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        if (o + s <= r) {
            var u, c, f, l;
            switch (s) {
            case 1:
                i < 128 && (a = i);
                break;
            case 2:
                u = t[o + 1],
                128 == (192 & u) && (l = (31 & i) << 6 | 63 & u) > 127 && (a = l);
                break;
            case 3:
                u = t[o + 1],
                c = t[o + 2],
                128 == (192 & u) && 128 == (192 & c) && (l = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (a = l);
                break;
            case 4:
                u = t[o + 1],
                c = t[o + 2],
                f = t[o + 3],
                128 == (192 & u) && 128 == (192 & c) && 128 == (192 & f) && (l = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & f) > 65535 && l < 1114112 && (a = l)
            }
        }
        null === a ? (a = 65533,
        s = 1) : a > 65535 && (a -= 65536,
        n.push(a >>> 10 & 1023 | 55296),
        a = 56320 | 1023 & a),
        n.push(a),
        o += s
    }
    return P(n)
}
function P(t) {
    var e = t.length;
    if (e <= Q)
        return String.fromCharCode.apply(String, t);
    for (var r = "", n = 0; n < e; )
        r += String.fromCharCode.apply(String, t.slice(n, n += Q));
    return r
}
function k(t, e, r) {
    var n = "";
    r = Math.min(t.length, r);
    for (var o = e; o < r; ++o)
        n += String.fromCharCode(127 & t[o]);
    return n
}
function R(t, e, r) {
    var n = "";
    r = Math.min(t.length, r);
    for (var o = e; o < r; ++o)
        n += String.fromCharCode(t[o]);
    return n
}
function j(t, e, r) {
    var n = t.length;
    (!e || e < 0) && (e = 0),
    (!r || r < 0 || r > n) && (r = n);
    for (var o = "", i = e; i < r; ++i)
        o += W(t[i]);
    return o
}
function N(t, e, r) {
    for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
        o += String.fromCharCode(n[i] + 256 * n[i + 1]);
    return o
}
function I(t, e, r) {
    if (t % 1 != 0 || t < 0)
        throw new RangeError("offset is not uint");
    if (t + e > r)
        throw new RangeError("Trying to access beyond buffer length")
}
function M(t, e, r, n, o, a) {
    if (!i.isBuffer(t))
        throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < a)
        throw new RangeError('"value" argument is out of bounds');
    if (r + n > t.length)
        throw new RangeError("Index out of range")
}
function L(t, e, r, n) {
    e < 0 && (e = 65535 + e + 1);
    for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
        t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
}
function D(t, e, r, n) {
    e < 0 && (e = 4294967295 + e + 1);
    for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
        t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255
}
function U(t, e, r, n, o, i) {
    if (r + n > t.length)
        throw new RangeError("Index out of range");
    if (r < 0)
        throw new RangeError("Index out of range")
}
function B(t, e, r, n, o) {
    return o || U(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38),
    J.write(t, e, r, n, 23, 4),
    r + 4
}
function F(t, e, r, n, o) {
    return o || U(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308),
    J.write(t, e, r, n, 52, 8),
    r + 8
}
function q(t) {
    if (t = z(t).replace(tt, ""),
    t.length < 2)
        return "";
    for (; t.length % 4 != 0; )
        t += "=";
    return t
}
function z(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
}
function W(t) {
    return t < 16 ? "0" + t.toString(16) : t.toString(16)
}
function Y(t, e) {
    e = e || 1 / 0;
    for (var r, n = t.length, o = null, i = [], a = 0; a < n; ++a) {
        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
                if (r > 56319) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue
                }
                if (a + 1 === n) {
                    (e -= 3) > -1 && i.push(239, 191, 189);
                    continue
                }
                o = r;
                continue
            }
            if (r < 56320) {
                (e -= 3) > -1 && i.push(239, 191, 189),
                o = r;
                continue
            }
            r = 65536 + (o - 55296 << 10 | r - 56320)
        } else
            o && (e -= 3) > -1 && i.push(239, 191, 189);
        if (o = null,
        r < 128) {
            if ((e -= 1) < 0)
                break;
            i.push(r)
        } else if (r < 2048) {
            if ((e -= 2) < 0)
                break;
            i.push(r >> 6 | 192, 63 & r | 128)
        } else if (r < 65536) {
            if ((e -= 3) < 0)
                break;
            i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
        } else {
            if (!(r < 1114112))
                throw new Error("Invalid code point");
            if ((e -= 4) < 0)
                break;
            i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
        }
    }
    return i
}
function $(t) {
    for (var e = [], r = 0; r < t.length; ++r)
        e.push(255 & t.charCodeAt(r));
    return e
}
function H(t, e) {
    for (var r, n, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
        r = t.charCodeAt(a),
        n = r >> 8,
        o = r % 256,
        i.push(o),
        i.push(n);
    return i
}
function V(t) {
    return Z.toByteArray(q(t))
}
function X(t, e, r, n) {
    for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
        e[o + r] = t[o];
    return o
}
function G(t) {
    return t !== t
}

function slice123(t, e) {
    var r = this.length;
    t = ~~t,
    e = void 0 === e ? r : ~~e,
    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
    e < t && (e = t);
    var n;
    if (i.TYPED_ARRAY_SUPPORT)
        n = this.subarray(t, e),
        n.__proto__ = i.prototype;
    else {
        var o = e - t;
        n = new i(o,void 0);
        for (var a = 0; a < o; ++a)
            n[a] = this[a + t]
    }
    return n
}
i.allocUnsafe = function(t) {
    return c(null, t)
}

i.concat = function(t, e) {
    console.log(t,  e)
    if (0 === t.length)
        return i.alloc(0);
    var r;
    if (void 0 === e)
        for (e = 0,
        r = 0; r < t.length; ++r)
            e += t[r].length;
    var n = i.allocUnsafe(e)
      , o = 0;
    for (r = 0; r < t.length; ++r) {
        var a = t[r];
        if (!i.isBuffer(a))
            throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(n, o),
        o += a.length
    }
    return n
}

function main123(r) {
    var a1 = a(r, "base64")
      , s = Math.max(Math.floor((a.length - 2 * i) / 3), 0)
      , u = slice123(s, s + i);
    a = i.concat([slice123(0, s), slice123(s + i)]);
    var c = Object(o.hash)(e.concat([u, e.from(t)]));
    return n((l = {},
    l[c] = a,
    l));
    var l
}



data = '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'
console.log(main123(data))