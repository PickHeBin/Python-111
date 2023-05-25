function get_enviroment(proxy_array) {
    for(var i=0; i<proxy_array.length; i++){
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
        + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window','document','navigator','location']
delete __filename;
delete __dirname;
window = global;

var content="{qqqqqh.Qn6HuH1NtCqkQXZqqqqql4096.2a_xWBVz69QKnT3U8acVr9vP_ResOVDBC4Rd932Jno9q|[mzpBg61owE3z.PD_phzbgU8Yh5eIPcCs8yNf.YhFwwJwTbtuxNEGX1Clx_WOvKoF3wTxTT5ER3xdTo5YRRTdnYhtpjxP72.JAyqOG2XrhR2BvmuoUhmBzVnsADwiFCwKIlx9AKWZKCfKHoS4wbJSMCr9IbNeRDr.hl2lATYsUvgbpvrXwY7GKcaOpvNrMYR8wUYM12y5hmw1FozsI9yGDUAJVYSwUTqsxClysomWxfaGoO2DRrRuqmmUUVNArcw0iYwSV13kEqWyUKAkIKg9q6xrwKzosnatRUYpx1l.KAgPQKwdAkTcE1Ee3aS_Ecaqq|vrRVydDBbQiW24ouN3tQvZCug3If.BcUC3R0vd2.JFZejSKo_KLA2nKsm3xAvdkMtUQNB5CoDJZrTe6dVHJePy66eFJL.SC.D1QeS_COk1XEuPmI7F3RW9sCc1g3.X2KiIE2ZNoc5MRwU.91ZVNTkNVbsQIYBGbikFxexfot.A3puOlXpVyZ6GD8jsNRbPUnI3MRP4KIvRNzfuviNQ3TF9O8aW_lZzVjhAJr.L0MExRT9GocEiWSrN0nsU4ysLDboYQWZSu1ZHh2iLongxZAqt1074790432Vxx7Y.pi2oF0VNS8BmNEV9M8mcOGDDWL7c9p_qAL9rGutqqNa8O0ikD3lr *wR7HvJ6IsUC410DntKRngA;QyqA82EGtIB6ePNEeYo9NG;iEm6gdSTTpYiqU10OlvsnG;yMG8gk5okQ97gP4eb.IadA;T8F36FaS9AtR4sXBkRr0iG;RTlM3IYjAzboXbIiNSIFRA;t7_svh3Kc3.VU9jOjAJgdq;.8D9Zx78FrKF.Zn4xbfmIG;IMhCM7gXESIqShs5TNMo9A;pvBPF7OtrK6trS5vZYizwa;9qxqLXuEeDQeAlNfAL_l.A;VNeyFcNDtQZhV2sfCxyHqA;kT4JL2WRSOhvUIEcOjSrva;LpFhLGWYI8eFx_X999MLEq;xVtZ9.fpfr2dDNfaNAzAgq;NqssQaVItFB0TevtNxJrkG;AI3RN3R7lP0BBnYsoCO5KG;xrYRhwM6FYW7zCsPL.iecq;0kOXzZzt1eXLrlPo.QQ4xG;ApKNqLIRoybF5rIxSnabBG;hfgZrtz_KscdFC6a3f1wKA;qq!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqk162r1HiN7E.G5BctAtNGEQVfpbxbqORnw9ED7XRPyOtKlP3Pefqqqqr0l3650lEXQJDdfe167qqqqhw.juDcQmW1Ur0KrIlPXhVEO0dRUGb4WYKjhqc80qqqqYedNQqDdPVfW9KRdORjITAr0|gDf7XUoR1tmyAAYYbhCwpkTaAM2JsY0xWUSwPYoRcUTSpAm2phl2QIOpbACGBwDZEsGxA302ywbTLq6EcF92qYlTKtVyT1bxo1G7jrnGPInN1DCWr81S6tVLYwfwGWDGXMA9Oo102KuSUDmg4t1RGRYlohORXJ9EbACA7DmGwFkxUov0eAkzdqv9i1CTBJmVTIGYkx23pwpYXmU0AsnVOHOADKayyDU98VmwyqvVf8YZNq10tIfxXHol2hOfLWlWuUreAoo30tpANHVJt35Ajy04.w8xa6KX.pQf.m26649qqqqhS66ABYJ6LyEr4q{sEqA1HfAeD22AM0mbYDRJFflSlOLF30mg1KfrRleOkvyrIVwfAUxmwfEzmcaFQV2NYop1RAyzYKTEsmprYlA"
require('./c.FxJzG50F.dfe1675')

window.top = window;
setInterval = function(){};
location = {
    "ancestorOrigins": {},
    "href": "http://www.fangdi.com.cn/old_house/old_house.html",
    "origin": "http://www.fangdi.com.cn",
    "protocol": "http:",
    "host": "www.fangdi.com.cn",
    "hostname": "www.fangdi.com.cn",
    "port": "",
    "pathname": "/old_house/old_house.html",
    "search": "",
    "hash": ""
}
navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    languages: ["zh-CN", "zh"],
    appVersion: "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    webdriver: false,
    appName: "Netscape",
    vendor: "Google Inc.",
    connection:  {
        downlink: 10,
        effectiveType: "4g",
        rtt: 200,
        saveData: false,
    }
}
document = {
    characterSet: "UTF-8",
    charset: "UTF-8",
    scripts: ["script", "script"]
};
div = {
    getElementsByTagName:function (val){
        if (val === 'i'){
            return {length:0}
        }
    }
}
createElement = function (arg){
    if (arg === "div"){
        return div
    }

}
addEventListener = function (){};
document.addEventListener = addEventListener;
getElementById = function (){};
document.getElementById = getElementById;
document.createElement = createElement;
attachEvent = function(){return {}}
document.attachEvent = attachEvent;
documentElement = {
    addEventListener: function(){},
    style: {}
}
document.documentElement = documentElement;
getElementsByTagName = function (){
    return [
        {
            content: content,
            parentNode:{
                removeChild: function(){}
            },
            getAttribute: function (){
                return {
                    r: "m"
                }
            },
            parentElement: {
                removeChild: function (){}
            }
        },
        {
            content: content,
            parentNode:{
                removeChild: function(){}
            },
            getAttribute: function (){
                return {
                    r: "m"
                }
            },
            parentElement: {
                removeChild: function(){}
            }
        }
    ]
};
document.getElementsByTagName = getElementsByTagName;

get_enviroment(proxy_array)


!(function() {
				var _$sj = 0,
				_$2a = [[4, 8, 5, 0, 10, 1, 2, 3, 9, 6, 7], [77, 32, 0, 34, 39, 60, 54, 5, 62, 5, 55, 1, 15, 51, 25, 7, 99, 18, 53, 3, 59, 13, 6, 40, 72, 87, 88, 50, 5, 89, 22, 17, 84, 80, 28, 44, 91, 10, 27, 48, 44, 69, 86, 97, 5, 56, 30, 44, 57, 14, 67, 34, 93, 44, 90, 76, 9, 35, 52, 21, 43, 45, 44, 78, 11, 44, 58, 2, 8, 12, 5, 71, 85, 75, 8, 79, 73, 5, 98, 8, 5, 46, 34, 61, 38, 47, 64, 94, 5, 63, 70, 74, 65, 37, 82, 20, 41, 19, 4, 29, 31, 68, 83, 23, 96, 24, 33, 36, 16, 95, 92, 26, 49, 66, 42, 81, 5], [21, 5, 23, 6, 23, 28, 12, 0, 18, 10, 3, 25, 9, 32, 29, 3, 11, 2, 19, 2, 20, 14, 4, 27, 24, 17, 15, 31, 15, 13, 15, 30, 15, 8, 33, 15, 1, 15, 16, 22, 26, 7, 3], [20, 27, 45, 17, 19, 16, 25, 23, 22, 21, 40, 2, 38, 4, 13, 11, 39, 8, 10, 12, 43, 9, 38, 26, 19, 29, 44, 1, 7, 3, 27, 24, 42, 35, 14, 24, 5, 0, 37, 0, 28, 33, 28, 30, 38, 0, 41, 30, 39, 31, 6, 47, 18, 36, 34, 37, 30, 41, 31, 23, 32, 15, 46, 25], [30, 33, 17, 19, 33, 3, 24, 10, 5, 32, 33, 7, 25, 23, 33, 2, 21, 23, 0, 8, 12, 36, 16, 20, 6, 27, 0, 4, 22, 1, 11, 29, 16, 13, 27, 28, 4, 33, 35, 14, 18, 15, 5, 9, 34, 31, 26]];
				function _$C3(_$cb, _$fh) {
					return _$_U.Math.abs(_$cb) % _$fh;
				}
				function _$Pm(_$zN) {
					_$lA(_$zN);
					_$zN[2] = _$5c() - _$zN[_$C3(_$rk(), 16)];
					if (_$zG() - _$zN[_$C3(_$NM(), 16)]) {
						_$zN[3] = _$5c();
					}
					if (_$zN[_$C3(_$Bd() + _$uf(), 16)]) {
						_$kC(_$zN);
					}
					var _$c0 = _$5c();
					if (_$zN[_$C3(_$Bd() + _$uf(), 16)]) {
						if (_$zN[_$C3(_$NM(), 16)]) {
							var _$6H = _$XH();
						}
					}
					return _$A0(_$zN);
				}
				function _$lA(_$zN) {
					_$6R(_$zN);
					var _$Hr = _$gE();
					var _$c0 = _$Bd() + _$uf();
					_$zN[6] = _$zh() + _$Mw();
					_$zN[_$C3(_$zN[_$C3(_$rk(), 16)], 16)] = _$43(_$zN);
					_$zN[4] = _$yB(_$zN);
					return _$Ym(_$zN);
				}
				function _$6R(_$zN) {
					_$zN[_$C3(_$XH(), 16)] = _$Bd();
					var _$Hr = _$la();
					var _$c0 = _$NM();
					_$zN[_$C3(_$Mw(), 16)] = _$5c();
					_$DZ(_$zN);
					return _$zh();
				}
				function _$XH() {
					return 15
				}
				function _$Bd() {
					return 5
				}
				function _$la() {
					return 6
				}
				function _$NM() {
					return 4
				}
				function _$Mw() {
					return 3
				}
				function _$5c() {
					return 9
				}
				function _$DZ(_$zN) {
					var _$Hr = _$ia();
					var _$6H = _$la();
					var _$6H = _$88();
					var _$Hr = _$XH();
					var _$c0 = _$Bd();
					_$zN[11] = _$zG();
					return _$W$();
				}
				function _$ia() {
					return 8
				}
				function _$88() {
					return 2
				}
				function _$zG() {
					return 1
				}
				function _$W$() {
					return 7
				}
				function _$zh() {
					return 13
				}
				function _$gE() {
					return 14
				}
				function _$uf() {
					return 11
				}
				function _$rk() {
					return 12
				}
				function _$43(_$zN) {
					_$zN[8] = _$la();
					var _$c0 = _$Mw();
					var _$6H = _$5c();
					var _$6H = _$AE();
					var _$c0 = _$ia();
					return _$la();
				}
				function _$AE() {
					return 10
				}
				function _$yB(_$zN) {
					_$zN[0] = _$gE();
					_$zN[12] = _$AE();
					_$zN[8] = _$la();
					return _$NM();
				}
				function _$Ym(_$zN) {
					_$zN[_$C3(_$5c(), 16)] = _$XH();
					_$zN[5] = _$uf();
					_$hL(_$zN);
					_$zN[3] = _$5c();
					_$z8(_$zN);
					return _$zG() + _$W$();
				}
				function _$hL(_$zN) {
					_$zN[7] = _$zh();
					_$zN[_$C3(_$AD(), 16)] = _$gE();
					_$zN[12] = _$AE();
					_$zN[_$C3(_$zG(), 16)] = _$W$();
					return _$zh();
				}
				function _$AD() {
					return 0
				}
				function _$z8(_$zN) {
					_$zN[_$C3(_$AE(), 16)] = _$ia();
					_$zN[6] = _$NM();
					_$zN[2] = _$AD();
					_$zN[14] = _$rk();
					return _$AE();
				}
				function _$kC(_$zN) {
					_$zN[_$C3(_$zh(), 16)] = _$Mw();
					var _$6H = _$uf();
					if (_$gE()) {
						var _$6H = _$zG();
					}
					var _$6H = _$XH();
					var _$Hr = _$Bd();
					return _$zN[_$C3(_$ia(), 16)];
				}
				function _$Ix(_$zN) {
					_$zN[7] = _$zh();
					_$zN[_$C3(_$AD(), 16)] = _$gE();
					_$zN[12] = _$AE();
					return _$zG() + _$W$();
				}
				function _$A0(_$zN) {
					var _$c0 = _$XH();
					var _$Hr = _$Bd();
					_$f9(_$zN);
					var _$6H = _$zG();
					if (_$5c() + _$XH()) {
						var _$c0 = _$W$();
					}
					var _$6H = _$AD();
					if (_$zN[_$C3(_$ia(), 16)]) {
						if (_$W$()) {
							var _$6H = _$gE();
						}
					}
					_$zN[_$C3(_$Bd() + _$uf(), 16)] = _$ox(_$zN);
					return _$fW(_$zN);
				}
				function _$f9(_$zN) {
					var _$c0 = _$rk();
					if (_$la()) {
						_$zN[_$C3(_$zh(), 16)] = _$Mw();
					}
					_$zN[8] = _$la();
					var _$Hr = _$AE();
					if (_$zh()) {
						_$zN[3] = _$5c();
					}
					var _$Hr = _$NM();
					return _$gj(_$zN);
				}
				function _$gj(_$zN) {
					_$zN[0] = _$gE();
					_$zN[12] = _$AE();
					_$zN[_$C3(_$zG(), 16)] = _$W$();
					return _$zh();
				}
				function _$$T(_$zN) {
					_$zN[_$C3(_$AD(), 16)] = _$gE();
					_$zN[12] = _$AE();
					var _$6H = _$W$();
					var _$6H = _$zh();
					_$zN[_$C3(_$AD(), 16)] = _$gE();
					return _$rk();
				}
				function _$ox(_$zN) {
					_$zN[_$C3(_$zh(), 16)] = _$Mw();
					var _$Hr = _$rk();
					var _$c0 = _$AE();
					_$zN[8] = _$la();
					return _$NM();
				}
				function _$fW(_$zN) {
					_$zN[0] = _$gE();
					_$zN[_$C3(_$Bd(), 16)] = _$uf();
					_$Gs(_$zN);
					return _$5c();
				}
				function _$Gs(_$zN) {
					_$zN[7] = _$zh();
					_$zN[3] = _$5c();
					_$zN[_$C3(_$rk(), 16)] = _$AE();
					var _$Hr = _$W$();
					var _$6H = _$zh();
					return _$Mw();
				}
				var _$4N, _$EL, _$_U, _$05, _$Ep, _$Pm, _$vm;
				var _$HV, _$5v, _$RV = _$sj,
				_$hr = _$2a[0];
				while (1) {
					_$5v = _$hr[_$RV++];
					if (_$5v < 4) {
						if (_$5v < 1) {
							_$RV += 5;
						} else if (_$5v < 2) {
							if (!_$HV) _$RV += 1;
						} else if (_$5v < 3) {
							_$Ep = _$_U['$_ts'] = {};
						} else {
							_$WN(0);
						}
					} else if (_$5v < 8) {
						if (_$5v < 5) {
							_$4N = [4, 16, 64, 256, 1024, 4096, 16384, 65536];
						} else if (_$5v < 6) {
							_$Ep = _$_U['$_ts'];
						} else if (_$5v < 7) {
							_$HV = !_$Ep;
						} else {
							_$RV += -6;
						}
					} else {
						if (_$5v < 9) {
							_$_U = window,
							_$vm = String,
							_$05 = Array;
						} else if (_$5v < 10) {
							_$RV += -5;
						} else {
							return;
						}
					}
				}
				function _$WN(_$Hr, _$cb) {
					function _$RC() {
						var _$vm = _$vn.charCodeAt(_$tT++),
						_$C3;
						if (_$vm < 128) {
							return _$vm;
						} else if (_$vm < 251) {
							return _$vm - 32;
						} else if (_$vm === 251) {
							return 0;
						} else if (_$vm === 254) {
							_$vm = _$vn.charCodeAt(_$tT++);
							if (_$vm >= 128) _$vm -= 32;
							_$C3 = _$vn.charCodeAt(_$tT++);
							if (_$C3 >= 128) _$C3 -= 32;
							return _$vm * 219 + _$C3;
						} else if (_$vm === 255) {
							_$vm = _$vn.charCodeAt(_$tT++);
							if (_$vm >= 128) _$vm -= 32;
							_$C3 = _$vn.charCodeAt(_$tT++);
							if (_$C3 >= 128) _$C3 -= 32;
							_$vm = _$vm * 219 * 219 + _$C3 * 219;
							_$C3 = _$vn.charCodeAt(_$tT++);
							if (_$C3 >= 128) _$C3 -= 32;
							return _$vm + _$C3;
						} else if (_$vm === 252) {
							_$C3 = _$vn.charCodeAt(_$tT++);
							if (_$C3 >= 128) _$C3 -= 32;
							return - _$C3;
						} else if (_$vm === 253) {
							_$vm = _$vn.charCodeAt(_$tT++);
							if (_$vm >= 128) _$vm -= 32;
							_$C3 = _$vn.charCodeAt(_$tT++);
							if (_$C3 >= 128) _$C3 -= 32;
							return _$vm * -219 - _$C3;
						} else {}
					}
					var _$tT, _$vn, _$7B, _$r3, _$vm, _$C3, _$sj, _$RV, _$HV, _$hh, _$5v, _$hr, _$zN, _$ey, _$H2, _$6H, _$c0, _$AR, _$cp, _$Z1;
					var _$6R, _$Bd, _$lA = _$Hr,
					_$la = _$2a[1];
					while (1) {
						_$Bd = _$la[_$lA++];
						if (_$Bd < 64) {
							if (_$Bd < 16) {
								if (_$Bd < 4) {
									if (_$Bd < 1) {
										_$6R = _$Ep["dfe1675"];
									} else if (_$Bd < 2) {
										for (_$vm = 0, _$C3 = 0; _$C3 < _$sj; _$C3 += 2) {
											_$RV[_$vm++] = _$HV + _$cb.substr(_$C3, 2);
										}
									} else if (_$Bd < 3) {
										_$6R = _$c0 - _$vm > 12000;
									} else {
										_$vm += "icB0lKW6JroB2oBaSJk6P7KcjkmJ8A80Z_y9uEgYysFWcVzYDkHxkQsP2_CFV$Wo7$oEuXtyaNyvUxZmqOvDT4e7S7JIq5db654v_tQk$4nrGxhw2OL14mNDE8ohoVXIXAwLxsj_brpc31t2iLwI5kfVrluMi0tM4wEgmbJ8fDTPGOh6GGS5t6Bt";
									}
								} else if (_$Bd < 8) {
									if (_$Bd < 5) {
										_$cb._$Oe = "_$lA";
									} else if (_$Bd < 6) {
										return;
									} else if (_$Bd < 7) {
										_$vm += "zUg56UxqWfFFzZrWVJtb0SC4r8ZuK9Csu8jykDOlJoL3PD8VuFrGynSTb8Q7GfnfU2EqeXOjRP5dn8rM2TeJLtWkrOtxJyxT8$_1uANjKiTc3FNvRTCTODeGsdziKt7WeIA$ZH5Mc67VGHv0BrbDju41iplwLIPn6Bac$xNZTFSQxJIOB7Qi40z7";
									} else {
										_$lA += 29;
									}
								} else if (_$Bd < 12) {
									if (_$Bd < 9) {
										if (!_$6R) _$lA += 1;
									} else if (_$Bd < 10) {
										var _$Z1 = _$RC();
									} else if (_$Bd < 11) {
										var _$sj = _$WN(71);
									} else {
										_$WN(78, _$6H);
									}
								} else {
									if (_$Bd < 13) {
										_$Ep._$8A = 1;
									} else if (_$Bd < 14) {
										_$vm += "4V9vt3C2Vr6X6WFzNUP3NinMciwXEonIyrKwML7jqMLeIR0k3wpAMvbj163CbaukYv$5AXr7Z0pyvjVmijCzp5ZEo3G6V7O$9wpW6D$wSUv7SkLU5YK8BjkfQZYV8t_Mf4XG$VhZ62IPEbA8uRv2TSl3HCD8WKB6QIlhoGnVAsTZ4pg7PYyZ0gcd";
									} else if (_$Bd < 15) {
										var _$hr = _$RC();
									} else {
										return _$RV;
									}
								}
							} else if (_$Bd < 32) {
								if (_$Bd < 20) {
									if (_$Bd < 17) {
										_$cb._$80 = "_$Bz";
									} else if (_$Bd < 18) {
										_$Ep["dfe1675"] = _$EL;
									} else if (_$Bd < 19) {
										_$vm += "4NEL_U05EpPmcbfhRCvn7Br3tTcpeyAR0B2Iiu$OM7WyjQAIDwNQjSgVlkCP_8AiC7TMmdCZtWqR2a9_WNF5_juJvmC3sjRVHVhh5vhrzNZ1H26Hc0HrlA6RXHBdlaNMMw5cDZia88zGW$zhgEufrk43AEyBYmhLADz8kCIxA0f9gj$ToxfWGsya";
									} else {
										_$cb._$ug = "_$Hr";
									}
								} else if (_$Bd < 24) {
									if (_$Bd < 21) {
										_$cb._$QW = "_$6H";
									} else if (_$Bd < 22) {
										_$zN.push(")();");
									} else if (_$Bd < 23) {
										var _$vn = _$Ep["dfe1675"];
									} else {
										_$cb._$NQ = "sJGwPyZUShq";
									}
								} else if (_$Bd < 28) {
									if (_$Bd < 25) {
										_$cb._$DG = "x8_TGaapy0q";
									} else if (_$Bd < 26) {
										var _$cp = _$RC();
									} else if (_$Bd < 27) {
										_$cb._$_j = "_$4B";
									} else {
										var _$RV = _$vn.length;
									}
								} else {
									if (_$Bd < 29) {
										var _$C3 = _$WN(8);
									} else if (_$Bd < 30) {
										_$cb._$Nt = "_$Bd";
									} else if (_$Bd < 31) {
										var _$5v = _$RC();
									} else {
										_$cb._$hh = "_$XH";
									}
								}
							} else if (_$Bd < 48) {
								if (_$Bd < 36) {
									if (_$Bd < 33) {
										_$WN(89, _$Ep);
									} else if (_$Bd < 34) {
										_$cb._$05 = _$Pm;
									} else if (_$Bd < 35) {
										if (!_$6R) _$lA += 2;
									} else {
										for (_$H2 = 0; _$H2 < _$Z1; _$H2++) {
											_$F5(16, _$H2, _$zN);
										}
									}
								} else if (_$Bd < 40) {
									if (_$Bd < 37) {
										_$cb._$WN = "yyK5ip7ENhj1fIZdcVQQPa";
									} else if (_$Bd < 38) {
										_$cb._$DE = "_$Z1";
									} else if (_$Bd < 39) {
										_$lA += 2;
									} else {
										_$WN(29);
									}
								} else if (_$Bd < 44) {
									if (_$Bd < 41) {
										_$vm += "O2ykIKVP8etVodw0w70Yn2QGVl9uMWcjpmVDM9nUZYXwaQsEyzTI04P8ds4U3Vwz_SaduC6Oq2_NtZhXdGCEiJHU$pirLkFaO5vZUEl9ZSDAd89qjebHvvrzPPAwcBYSCBOUM$NBD_np5UN_NlEHFIKG6eUBEJUqX0WniKgPXNzqnLXLr5oFV2WY";
									} else if (_$Bd < 42) {
										_$cb._$Y4 = "_$c0";
									} else if (_$Bd < 43) {
										_$cb._$uE = "_$Rq";
									} else {
										var _$6H = _$zN.join('');
									}
								} else {
									if (_$Bd < 45) {} else if (_$Bd < 46) {
										_$Ep._$CZ -= _$WN(8);
									} else if (_$Bd < 47) {
										_$6R = _$_U.execScript;
									} else {
										_$vm = _$_U.eval;
									}
								}
							} else {
								if (_$Bd < 52) {
									if (_$Bd < 49) {
										var _$tT = 0;
									} else if (_$Bd < 50) {
										_$cb._$y9 = "_$yr";
									} else if (_$Bd < 51) {
										return _$WN(10, _$vm);
									} else {
										_$lA += 30;
									}
								} else if (_$Bd < 56) {
									if (_$Bd < 53) {
										for (_$H2 = 0; _$H2 < _$Z1; _$H2++) {
											_$zN.push("}");
										}
									} else if (_$Bd < 54) {
										_$vm += "zoYFT13Z5A6qGJk4NLFjtgzA2qz9g06K5D3IiE7bCk$Q9BXmrhKNRHawmKHKE7Tv02ovyDy$DEUfY4ugOe4JQWNtrp9Qzjo_A3dBjgccpE4Bh4CY64qWojwG$DgX5moLTCop_l7kDGAUzI6CPL4RUPYpCv4$lBKkSnZL6IfwaGhKmTxO6_DYS_DC";
									} else if (_$Bd < 55) {
										_$F5(0);
									} else {
										var _$vm, _$C3, _$sj = _$cb.length,
										_$RV = new _$05(_$sj / 2),
										_$HV = '_$';
									}
								} else if (_$Bd < 60) {
									if (_$Bd < 57) {
										var _$ey = _$RC();
									} else if (_$Bd < 58) {
										_$Z1 = _$RC();
									} else if (_$Bd < 59) {
										var _$c0 = _$WN(8);
									} else {
										_$vm += "fp5H5xv8Y9Vawbj9jjSHvOXDGT97HiFGYgXJ1KTaKb1rThlfgwWrrqzdBAobfx0n9ntXInl4qbXvlyCL8Iu1mqv$EZ7K9xBZTpFispJ5eb7EfgQsQRl2pHkKBpkX7ycNag7om4vsAJf7jchAqwepNbcWjtaEVnVyncms7CAuEhe8MALnez6LxGdO";
									}
								} else {
									if (_$Bd < 61) {
										_$lA += 1;
									} else if (_$Bd < 62) {
										ret = _$_U.execScript(_$cb);
									} else if (_$Bd < 63) {
										return new Date().getTime();
									} else {
										_$cb._$AI = 30;
									}
								}
							}
						} else {
							if (_$Bd < 80) {
								if (_$Bd < 68) {
									if (_$Bd < 65) {
										ret = _$vm.call(_$_U, _$cb);
									} else if (_$Bd < 66) {
										_$cb._$4J = "_$6R";
									} else if (_$Bd < 67) {
										_$cb._$2a = "_$$D";
									} else {
										_$6R = _$Z1 > 0;
									}
								} else if (_$Bd < 72) {
									if (_$Bd < 69) {
										_$cb._$HV = "_$9_";
									} else if (_$Bd < 70) {
										var _$HV = _$RC();
									} else if (_$Bd < 71) {
										_$cb._$_U = 125;
									} else {
										var _$vm = _$_U.eval.toString();
									}
								} else if (_$Bd < 76) {
									if (_$Bd < 73) {
										_$vm += "R4WTMkA9ZVaR6nYOI3OcghrHZCLB70G_i9Mgn$wsIBdgwY6z2ETbWMxlWmkNCJSV_bTVDb5_13mD8NUzq8RDPxGwXlXuSmB5SKgB8X2cjvVvPpABNuKBYlmYvELWFP2iPo1V8nr11jYfMY0106ITRM0jIkwTnejwmWssAVaacabyQQH8AdmmvMmV";
									} else if (_$Bd < 74) {
										return 0;
									} else if (_$Bd < 75) {
										_$cb._$Dw = 3;
									} else {
										_$6R = _$vm !== "functioneval(){[nativecode]}";
									}
								} else {
									if (_$Bd < 77) {
										var _$zN = [];
									} else if (_$Bd < 78) {
										_$Ep._$zI = _$WN(16);
									} else if (_$Bd < 79) {
										_$C3 = _$WN(8);
									} else {
										return 1;
									}
								}
							} else if (_$Bd < 96) {
								if (_$Bd < 84) {
									if (_$Bd < 81) {
										var _$vm = _$WN(8);
									} else if (_$Bd < 82) {
										_$cb._$uJ = "_$oj";
									} else if (_$Bd < 83) {
										_$cb._$Uf = "_$H2";
									} else {
										_$cb._$Ep = "BpO2xviqV7G";
									}
								} else if (_$Bd < 88) {
									if (_$Bd < 85) {
										var _$7B = _$Ep._$zI;
									} else if (_$Bd < 86) {
										_$vm = _$vm.replace(/[\r\n\s]/g, "");
									} else if (_$Bd < 87) {
										var _$hh = _$RC();
									} else {
										_$vm += "UG8BaHyWzcdp__6FcwGNZ4ivdXH5vJycnYhnUK_PTRPBhoHQkb53D3PSPiviQ1RZBnK3jpWRZpdeRAACQm0NRYnuAW0sqATe27GevAdoTGGYbYXyD1n6Mn4AyOZBnNdjnw9TjN4kDcBM5QyFQ2RtM2WsXjpzPzxPY$LEH7x558gduliPFQegnZcy";
									}
								} else if (_$Bd < 92) {
									if (_$Bd < 89) {
										_$vm += "bmSjwBlOQ4jEH6Bc2$5aGK$$qJgp5hRcRfptJBFNDi_mYaQloWpoZ20WZO$Zjs1nlGZgU56xXWXx_AQ8wg9PI6bGt_LYeYUhOseusWxjScg$JNv5OHFmLfr24fRLlFlE1cXrLo1ZB8oyWaKl5L5rpQ61sgrjpIV08_giRo5VU877oJkTtFoZVK0r8j";
									} else if (_$Bd < 90) {
										_$Ep._$CZ = new Date().getTime();
									} else if (_$Bd < 91) {
										_$tT += _$hr;
									} else {
										var _$r3 = _$Ep.aebi = [];
									}
								} else {
									if (_$Bd < 93) {
										_$cb._$Z_ = "_$Ib";
									} else if (_$Bd < 94) {
										_$AR = _$vn.substr(_$tT, _$hr).split(String.fromCharCode(255));
									} else if (_$Bd < 95) {
										return ret;
									} else {
										_$cb._$F5 = "_$jg";
									}
								}
							} else {
								if (_$Bd < 97) {
									_$cb._$cb = "okCrRaJgVRoNID48bZKiSV";
								} else if (_$Bd < 98) {
									_$lA += -30;
								} else if (_$Bd < 99) {
									_$6R = _$cb === undefined || _$cb === "";
								} else {
									var _$vm = '';
								}
							}
						}
					}
					function _$F5(_$RV, _$0B, _$2I) {
						function _$iu() {
							var _$5v = [0];
							Array.prototype.push.apply(_$5v, arguments);
							return _$_j.apply(this, _$5v);
						}
						var _$vm, _$C3, _$sj, _$$O, _$M7, _$Wy, _$jQ, _$AI, _$Dw, _$NQ, _$jS, _$gV, _$lk, _$CP, _$_8, _$Ai;
						var _$hh, _$hr, _$HV = _$RV,
						_$zN = _$2a[2];
						while (1) {
							_$hr = _$zN[_$HV++];
							if (_$hr < 16) {
								if (_$hr < 4) {
									if (_$hr < 1) {
										_$$O.open('GET', _$C3, false);
									} else if (_$hr < 2) {
										var _$_8 = _$F5(11);
									} else if (_$hr < 3) {
										_$HV += -15;
									} else {
										return;
									}
								} else if (_$hr < 8) {
									if (_$hr < 5) {
										var _$AI = _$RC();
									} else if (_$hr < 6) {
										var _$C3 = _$vm > 1 ? document.scripts[_$vm - 2].src: _$EL;
									} else if (_$hr < 7) {
										var _$M7 = _$RC();
									} else {
										_$_j(41, _$2I);
									}
								} else if (_$hr < 12) {
									if (_$hr < 9) {
										var _$vm = _$F5(11);
									} else if (_$hr < 10) {
										var _$C3 = new Array(_$vm);
									} else if (_$hr < 11) {
										_$$O.send();
									} else {
										var _$$O = _$RC();
									}
								} else {
									if (_$hr < 13) {
										_$$O = _$_U.ActiveXObject ? new _$_U.ActiveXObject('Microsoft.XMLHTTP') : new _$_U.XMLHttpRequest();
									} else if (_$hr < 14) {
										var _$lk = _$F5(11);
									} else if (_$hr < 15) {
										var _$jQ = _$RC();
									} else {}
								}
							} else if (_$hr < 32) {
								if (_$hr < 20) {
									if (_$hr < 17) {
										var _$C3 = _$RC();
									} else if (_$hr < 18) {
										var _$jS = _$RC();
									} else if (_$hr < 19) {
										_$$O.onreadystatechange = _$iu;
									} else {
										_$hh = _$C3;
									}
								} else if (_$hr < 24) {
									if (_$hr < 21) {
										var _$Wy = _$RC();
									} else if (_$hr < 22) {
										var _$vm = document.scripts.length;
									} else if (_$hr < 23) {
										var _$Ai = [];
									} else {
										_$HV += 15;
									}
								} else if (_$hr < 28) {
									if (_$hr < 25) {
										var _$NQ = _$RC();
									} else if (_$hr < 26) {
										var _$vm = _$RC();
									} else if (_$hr < 27) {
										for (_$sj = 0; _$sj < _$C3; _$sj++) {
											_$Ai[_$sj] = _$F5(11);
										}
									} else {
										var _$Dw = _$RC();
									}
								} else {
									if (_$hr < 29) {
										if (!_$hh) _$HV += 4;
									} else if (_$hr < 30) {
										return _$C3;
									} else if (_$hr < 31) {
										var _$CP = _$F5(11);
									} else {
										var _$gV = _$F5(11);
									}
								}
							} else {
								if (_$hr < 33) {
									for (_$sj = 0; _$sj < _$vm; _$sj++) {
										_$C3[_$sj] = _$RC();
									}
								} else {
									_$r3[_$0B] = _$vm;
								}
							}
						}
						function _$_j(_$C3, _$C7) {
							var _$TM, _$vm;
							var _$RV, _$hh, _$sj = _$C3,
							_$5v = _$2a[3];
							while (1) {
								_$hh = _$5v[_$sj++];
								if (_$hh < 16) {
									if (_$hh < 4) {
										if (_$hh < 1) {
											_$C7.push(",");
										} else if (_$hh < 2) {
											for (_$vm = 0; _$vm < _$CP.length; _$vm += 2) {
												_$uJ(0, _$CP[_$vm], _$CP[_$vm + 1], _$C7);
											}
										} else if (_$hh < 3) {
											_$C7.push("(function(){var ");
										} else {
											_$RV = _$lk.length;
										}
									} else if (_$hh < 8) {
										if (_$hh < 5) {
											_$C7.push("=0,");
										} else if (_$hh < 6) {
											_$C7.push(_$7B[_$Wy]);
										} else if (_$hh < 7) {
											_$C7.push(_$0B);
										} else {
											_$uJ(38);
										}
									} else if (_$hh < 12) {
										if (_$hh < 9) {
											_$C7.push("=$_ts.aebi;");
										} else if (_$hh < 10) {
											_$C7.push("(");
										} else if (_$hh < 11) {
											_$sj += 8;
										} else {
											_$C7.push("=$_ts.scj,");
										}
									} else {
										if (_$hh < 13) {
											_$C7.push("function ");
										} else if (_$hh < 14) {
											_$C7.push(_$7B[_$cp]);
										} else if (_$hh < 15) {
											_$C7.push(";");
										} else {
											_$uJ(11, 0, _$Ai.length);
										}
									}
								} else if (_$hh < 32) {
									if (_$hh < 20) {
										if (_$hh < 17) {
											_$WN(29);
										} else if (_$hh < 18) {
											_$RV = _$Ep["dfe1675"];
										} else if (_$hh < 19) {
											_$RV = _$Ai.length;
										} else {
											if (!_$RV) _$sj += 1;
										}
									} else if (_$hh < 24) {
										if (_$hh < 21) {
											_$RV = _$$O.readyState == 4;
										} else if (_$hh < 22) {
											_$RV = _$0B == 0;
										} else if (_$hh < 23) {
											_$sj += 34;
										} else {
											_$C7.push(_$7B[_$$O]);
										}
									} else if (_$hh < 28) {
										if (_$hh < 25) {
											_$C7.push("var ");
										} else if (_$hh < 26) {
											return;
										} else if (_$hh < 27) {
											_$RV = _$gV.length;
										} else {
											if (!_$RV) _$sj += 4;
										}
									} else {
										if (_$hh < 29) {
											_$sj += -34;
										} else if (_$hh < 30) {
											for (_$vm = 0; _$vm < _$gV.length; _$vm++) {
												_$C7.push(",");
												_$C7.push(_$7B[_$gV[_$vm]]);
											}
										} else if (_$hh < 31) {
											_$C7.push("=");
										} else {
											_$C7.push("[");
										}
									}
								} else {
									if (_$hh < 36) {
										if (_$hh < 33) {
											_$C7.push("++];");
										} else if (_$hh < 34) {
											var _$vm, _$TM = 4;
										} else if (_$hh < 35) {
											_$C7.push("while(1){");
										} else {
											for (_$vm = 1; _$vm < _$lk.length; _$vm++) {
												_$C7.push(",");
												_$C7.push(_$7B[_$lk[_$vm]]);
											}
										}
									} else if (_$hh < 40) {
										if (_$hh < 37) {
											if (!_$RV) _$sj += 9;
										} else if (_$hh < 38) {
											_$C7.push(_$7B[_$NQ]);
										} else if (_$hh < 39) {
											_$C7.push(_$7B[_$M7]);
										} else {
											_$C7.push(_$7B[_$ey]);
										}
									} else if (_$hh < 44) {
										if (_$hh < 41) {
											if (!_$RV) _$sj += 8;
										} else if (_$hh < 42) {
											_$C7.push(_$7B[_$jS]);
										} else if (_$hh < 43) {
											_$C7.push(_$7B[_$lk[0]]);
										} else {
											_$C7.push(_$7B[_$AI]);
										}
									} else {
										if (_$hh < 45) {
											_$C7.push("){");
										} else if (_$hh < 46) {
											_$WN(78, _$$O.responseText);
										} else if (_$hh < 47) {
											_$C7.push("}");
										} else {
											_$C7.push("];");
										}
									}
								}
							}
							function _$uJ(_$HV, _$md, _$CZ, _$tW) {
								var _$vm, _$C3, _$sj, _$RV;
								var _$5v, _$zN, _$hh = _$HV,
								_$Z1 = _$2a[4];
								while (1) {
									_$zN = _$Z1[_$hh++];
									if (_$zN < 16) {
										if (_$zN < 4) {
											if (_$zN < 1) {
												_$uJ(2, _$md);
											} else if (_$zN < 2) {
												_$sj = 0;
											} else if (_$zN < 3) {
												_$hh += 21;
											} else {
												_$C3 -= _$C3 % 2;
											}
										} else if (_$zN < 8) {
											if (_$zN < 5) {
												_$C7.push("}");
											} else if (_$zN < 6) {
												if (!_$5v) _$hh += 1;
											} else if (_$zN < 7) {
												for (; _$md < _$CZ; _$md++) {
													_$C7.push(_$C3);
													_$C7.push(_$7B[_$NQ]);
													_$C7.push('<');
													_$C7.push(_$md + 1);
													_$C7.push("){");
													_$uJ(2, _$md);
													_$C3 = "}else if(";
												}
											} else {
												var _$vm, _$C3, _$sj, _$RV = _$CZ - _$md;
											}
										} else if (_$zN < 12) {
											if (_$zN < 9) {
												_$hh += 17;
											} else if (_$zN < 10) {
												_$C7.push(_$AR[_$_8[_$vm]]);
											} else if (_$zN < 11) {
												_$5v = _$vm.length != _$C3;
											} else {
												for (_$vm = 1; _$vm < 7; _$vm++) {
													if (_$RV <= _$4N[_$vm]) {
														_$sj = _$4N[_$vm - 1];
														break;
													}
												}
											}
										} else {
											if (_$zN < 13) {
												_$5v = _$RV <= _$TM;
											} else if (_$zN < 14) {
												for (; _$md + _$sj < _$CZ; _$md += _$sj) {
													_$C7.push(_$C3);
													_$C7.push(_$7B[_$NQ]);
													_$C7.push('<');
													_$C7.push(_$md + _$sj);
													_$C7.push("){");
													_$uJ(11, _$md, _$md + _$sj);
													_$C3 = "}else if(";
												}
											} else if (_$zN < 15) {
												_$vm -= _$vm % 2;
											} else {
												_$5v = _$_8.length != _$vm;
											}
										}
									} else if (_$zN < 32) {
										if (_$zN < 20) {
											if (_$zN < 17) {
												_$C3 = "if(";
											} else if (_$zN < 18) {
												var _$vm = _$Ai[_$md];
											} else if (_$zN < 19) {
												for (_$C3 = 0; _$C3 < _$vm; _$C3 += 2) {
													_$C7.push(_$AR[_$_8[_$C3]]);
													_$C7.push(_$7B[_$_8[_$C3 + 1]]);
												}
											} else {
												_$hh += 41;
											}
										} else if (_$zN < 24) {
											if (_$zN < 21) {
												_$CZ--;
											} else if (_$zN < 22) {
												_$5v = _$RV == 1;
											} else if (_$zN < 23) {
												_$hh += 8;
											} else {
												if (!_$5v) _$hh += 2;
											}
										} else if (_$zN < 28) {
											if (_$zN < 25) {
												for (k = 0; k < _$C3; k += 2) {
													_$C7.push(_$AR[_$vm[k]]);
													_$C7.push(_$7B[_$vm[k + 1]]);
												}
											} else if (_$zN < 26) {
												_$5v = _$RV == 0;
											} else if (_$zN < 27) {
												_$hh += -42;
											} else {
												_$C7.push("}else{");
											}
										} else {
											if (_$zN < 29) {
												_$uJ(11, _$md, _$CZ);
											} else if (_$zN < 30) {} else if (_$zN < 31) {
												_$tW.push(["function ", _$7B[_$md], "(){var ", _$7B[_$jQ], "=[", _$CZ, "];Array.prototype.push.apply(", _$7B[_$jQ], ",arguments);return ", _$7B[_$Dw], ".apply(this,", _$7B[_$jQ], ");}"].join(''));
											} else {
												var _$C3 = _$vm.length;
											}
										}
									} else {
										if (_$zN < 36) {
											if (_$zN < 33) {
												_$C7.push(_$AR[_$vm[_$C3]]);
											} else if (_$zN < 34) {
												return;
											} else if (_$zN < 35) {
												_$hh += -41;
											} else {
												var _$vm = _$_8.length;
											}
										} else {
											if (!_$5v) _$hh += 7;
										}
									}
								}
							}
						}
					}
				}
			})()


function get_cookie(){
    return document.cookie
}

console.log(get_cookie(),get_cookie());
