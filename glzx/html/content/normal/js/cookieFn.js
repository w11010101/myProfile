(function(root,factory) {
    'use strict';
    if(typeof define === 'function'){
        define(function(){
            return factory;
        });
    }else if(typeof exports === 'object'){
        module.exports = factory();
    }else{
        
        window.token = factory;
    }
    
})(this,function(option){
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
        var val = wise[i].replace(/\s*/g,'');
        if (val.indexOf(_default.key) == 0) {
            var token = val.replace(_default.key+'=', '');
            return token;
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
});