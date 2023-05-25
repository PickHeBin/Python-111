function rr(n, e) {
    if (n.includes)
        return n.includes(e);
    for (var r = 0, t = n.length; r < t; r++)
        if (n[r] === e)
            return !0;
    return !1
}
function Ir(n) {
    for (var e, t = [], i = 0; i < n.length; i++) {
        var o = n.charCodeAt(i);
        if (32 === i)
            break;
        for (; rr(t, o % 32); )
            o++;
        t[(e = "hsup",
        e.split("").reverse().join(""))](o % 32)
    }
    return t
}
