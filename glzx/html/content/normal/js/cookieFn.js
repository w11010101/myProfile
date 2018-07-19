(function(factory) {
    'use strict';
    if(typeof define === 'function'){
        define(factory);
    }else if(typeof exports === 'object'){
        module.exports = factory();
    }else{
        window.token = factory();
    }
    
})(function(option){
    var _default = {
        key:'wise',
        href:null
    }
    for(var i in option){
        _default[i] = option[i];
    }
    var cookie = document.cookie;
    if (!cookie) {
        console.log('cookie 不存在！');
        return;
    }
    var wise = cookie.split(';');
    var i = 0;
    while (i < wise.length) {
        var e = wise[i];
        if (e.indexOf(_default.key) >= 0) {
            console.log("you", e.replace(_default.key+'=', ''));
            var token = JSON.parse(e.replace(_default.key+'=', ''));
            console.log('token = ', token);
            return token.token;
        }
        i++;
        if (i == wise.length) {
            console.log("真没有!");
            setTimeout(function() {
                if(_default.href){
                    window.location.href = _default.href;
                }
            }, 3000);
        }
    }
})