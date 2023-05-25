
const n = require('./webout(2)');

function get_k(params, s, k, l, d) {

    path = '/v1/rank';

    y = n(101)
    w = n.n(y)
    _ = n(1694)

    var r = w()(params, !1)
    // console.log(r)

    o = Object(_.a)(r, path, {
        s: s,
        k: k,
        l: l,
        d: d,
        sort: "dd",
        num: 10
    }, "get");

    // console.log(o)
    return o
}


params = {
    "market_id": 1,
    "rank_type": 4,
    "genre_id": 0,
    "country_id": 75,
    "device_id": 1,
    "brand_id": 2,
    "time": 1668528000
}
console.log(get_k(params, 'd688a1b65be8a7c52db9ab7f05174426', 'c65e7f25e347d435', '339aa4010b30b10b', 2))

// n33 = n(33)
// console.log(n33)
// console.log(n33.f(31))