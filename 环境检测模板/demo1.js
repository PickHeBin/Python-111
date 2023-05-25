const{JSDOM}=require("jsdom");
const dom=new JSDOM("<!DOCTYPE html><p>Hello world</p>",{url:'https://www.zhihu.com/search'});
window=dom.window;
document=window.document;
navigator=window.navigator;
location=window.location;
history=window.history;
screen=window.screen;
alert=window.alert;
window._resourceLoader = undefined;
window._sessionHistory = undefined;

Math.random = function(){
    return 0.50
};

window = new Proxy(window, {
    set(target, property, value, receiver) {
        console.log("设置属性set window", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get window", property, typeof target[property]);
        return target[property]
    }
});
document = new Proxy(document, {
    set(target, property, value, receiver) {
        console.log("设置属性set document", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get document", property, typeof target[property]);
        return target[property]
    }
});
navigator = new Proxy(navigator, {
    set(target, property, value, receiver) {
        console.log("设置属性set navigator", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get navigator", property, typeof target[property]);
        return target[property]
    }
});
location = new Proxy(location, {
    set(target, property, value, receiver) {
        console.log("设置属性set location", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get location", property, typeof target[property]);
        return target[property]
    }
});
history = new Proxy(history, {
    set(target, property, value, receiver) {
        console.log("设置属性set history", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get history", property, typeof target[property]);
        return target[property]
    }
});
screen = new Proxy(screen, {
    set(target, property, value, receiver) {
        console.log("设置属性set screen", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get screen", property, typeof target[property]);
        return target[property]
    }
});

var Object_toString = Object.prototype.toString;
Object.prototype.toString = function () {
    let _temp = Object_toString.call(this, arguments);
    console.log(this);
    console.log("Object.prototype.toString: " + _temp);
    if(this.constructor.name === 'Document'){
        return '[object HTMLDocument]';
    }else if(this.constructor.name === 'CanvasRenderingContext2D'){
        return '[object CanvasRenderingContext2D]'
    }
    return _temp;
};

var Function_toString = Function.prototype.toString;
Function.prototype.toString = function () {
    let _temp = Function_toString.call(this, arguments);
    console.log(this);
    console.log("Function.prototype.toString: " + _temp);
    if(this.name === 'Window'){
        return 'function Window() { [native code] }'
    }
    return _temp;
};