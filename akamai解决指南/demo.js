function get_cf_date() {
    return Date.now ? Date.now() : +new Date
}

function updatet() {
    return get_cf_date() - (Date.now ? Date.now() : +new Date)
}

function pi(a) {
    return parseInt(a)
}

function ab(a) {
    if (null == a) return -1;
    try {

        for (var t = 0, e = 0; e < a.length; e++) {
            var n = a.charCodeAt(e);
            n < 128 && (t += n)
        }
        return t
    } catch (a) {
        return -2
    }
}

function od(a, t) {
    try {
        a = String(a);
        t = String(t);
        var e = [];
        var n = t.length;
        if (n > 0) {
            for (var o = 0; o < a.length; o++) {
                var m = a['charCodeAt'](o);
                var r = a['charAt'](o);
                var i = t['charCodeAt'](o % n);
                var m = bmak['rir'](m, 47, 57, i);
                m != a['charCodeAt'](o) && (r = String['fromCharCode'](m)),
                    e['push'](r)
            }
            if (e.length > 0) return e.join('')
        }
    } catch (a) {
    }
    return a
}

function get_sensor_data() {
    var ver = 1.41;
    var a = get_cf_date();
    var t = updatet();
    var e = "this_is_abck_cookie";
    var n = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36,uaend,12147,20030107,zh-CN,Gecko,3,0,0,0,385409,1471924,1536,864,1536,864,858,760,1536,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8323,0.983836920491,783200735962,loc:";
    var i = "do_en" + "," + "dm_en" + "," + "t_en";
    var c = "0,-1,0,0,1340,113,0;0,-1,0,0,916,-1,0;0,-1,0,0,918,-1,0;0,-1,0,0,921,-1,0;0,-1,0,0,964,-1,1;0,-1,0,0,966,-1,1;0,-1,0,0,967,-1,1;";
    var b = "https://www.flyasiana.com/C/CN/CH/index";
    var d = 1 + "," + 1;
    var s = get_cf_date() - (Date.now ? Date.now() : +new Date);
    var l = pi(16756 / 6);
    var u = 30261693;

    var k = 7584 + 1599 + 1556;
    var _ = [1, 7777 + 1, 0, 1599, 1556, 0, k, t, 0, (Date.now ? Date.now() : +new Date), 4, 16756, 0, 1, l, 2, 0, s, 0, 1, e, ab(e), "126", "-1066190195", u];

    var f = _.join(",");
    var p = '' + ab("-1752250632;dis;,7,8;true;true;true;-480;true;24;24;true;false;-1");
    var v = "0,0,0,0,1,0,0";

    var mact = "0,1,7513,853,371;1,1,7516,853,371;2,1,7522,843,370;3,1,7530,833,369;4,1,7538,826,367;5,1,7545,817,366;6,1,7553,808,364;7,1,7561,801,362;8,1,7569,796,360;9,1,7576,790,359;10,1,7585,787,358;11,1,7592,784,357;12,1,7600,780,356;13,1,7632,778,356;14,1,7640,778,355;15,1,7648,777,355;16,1,7665,776,355;17,1,7681,776,354;18,1,7697,775,354;19,1,7720,774,354;20,1,7793,772,354;21,3,8249,772,354,2176;22,4,8377,772,354,2176;23,2,8377,772,354,2176;24,1,8561,773,354;25,1,8569,779,358;26,1,8576,784,362;27,1,8585,791,367;28,1,8592,798,373;29,1,8601,808,381;30,1,8608,818,387;31,1,8616,828,396;32,1,8625,840,406;33,1,8633,850,416;";

    var sensor_data = ver + '-1,2,-94,-100,' + n + '-1,2,-94,-101,' + i + '-1,2,-94,-105,' + "0,-1,0,0,1340,113,0;" + '-1,2,-94,-102,' + c + '-1,2,-94,-108,' + "" + '-1,2,-94,-110,' + mact + '-1,2,-94,-117,' + "" + '-1,2,-94,-111,' + "0,1613,-1,-1,-1;" + '-1,2,-94,-109,' + "0,1613,-1,-1,-1,-1,-1,-1,-1,-1,-1;" + '-1,2,-94,-114,' + "" + '-1,2,-94,-103,' + "2,3443;3,9857;2,10883;3,51884;2,52813;3,55619;2,56282;3,59249;2,60333;" + '-1,2,-94,-112,' + b + '-1,2,-94,-115,' + f + '-1,2,-94,-106,' + d;

    sensor_data = sensor_data + '-1,2,-94,-119,' + "7,8,9,8,17,19,13,8,6,6,5,5,283,307," + '-1,2,-94,-122,' + v + '-1,2,-94,-123,' + "";
    var h = ab(sensor_data);

    sensor_data = sensor_data + '-1,2,-94,-70,' + "-1752250632;dis;,7,8;true;true;true;-480;true;24;24;true;false;-1" + '-1,2,-94,-80,' + p + '-1,2,-94,-116,' + 4419261 + '-1,2,-94,-118,' + h + '-1,2,-94,-121,';

    var g = "7a74G7m23Vrp0o5c";
    var w = Math.floor(get_cf_date() / 36e5);
    var y = get_cf_date();
    var C = g + od(w, g) + sensor_data;
    sensor_data = C + ';' + (get_cf_date() - a) + ';' + (get_cf_date() - a + 100) + ';' + (get_cf_date() - y);

    return sensor_data
}