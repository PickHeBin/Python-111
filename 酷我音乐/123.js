function main111(t, e, n) {
        var r, o, d = 0, h = 0;
        var i = e && n || 0
          , b = e || []
//          , f = (t = t || {}).node || r
            f = [105, 112, 65, 91, 224, 163]
          , v = 245

        var y = (new Date).getTime(),
            w = h + 1
            dt = y - h + (w - d) / 1e4;
        h = y,
        d = w,
        o = v;
        var x = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
        b[i++] = x >>> 24 & 255,
        b[i++] = x >>> 16 & 255,
        b[i++] = x >>> 8 & 255,
        b[i++] = 255 & x;
        var _ = y / 4294967296 * 1e4 & 268435455;
        b[i++] = _ >>> 8 & 255,
        b[i++] = 255 & _,
        b[i++] = _ >>> 24 & 15 | 16,
        b[i++] = _ >>> 16 & 255,
        b[i++] = v >>> 8 | 128,
        b[i++] = 255 & v;
        for (var A = 0; A < 6; ++A)
            b[i + A] = f[A];
        return e || c(b)
    }

function c(t, e) {
    for (var n = [], i = 0; i < 256; ++i)
        n[i] = (i + 256).toString(16).substr(1);
    var i = e || 0
      , r = n;
    return [r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]]].join("")
}


console.log(main111())