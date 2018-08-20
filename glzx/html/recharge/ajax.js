;(function(factory){
    if(typeof define === 'function'){
        define(function(){
            return factory;
        });
    }else if(typeof exports === 'object'){
        module.exports = factory;
    }else{
        window.ajaxFn = factory;
    }
})(function(option){
    function AjaxFn(option){
        var _default = {
            type:'post',
            error:function(){}
        }
        for(var item in option){
            _default[item] = option[item];
        }

        var xhr = new XMLHttpRequest();
        xhr.timeout = 3000;
        xhr.open(_default.type,_default.url,true);
        xhr.responseType = "JSON";
        xhr.setRequestHeader('Content-type','application/json');

        xhr.ontimeout = function(e){
            response = xhr.responseText?JSON.parse(xhr.responseText):"";
            return _default.error(response);
        }
        xhr.onerror = function(e) {
            response = xhr.responseText?JSON.parse(xhr.responseText):"";
            return _default.error(response);
        };
        
        xhr.onreadystatechange = function(){
            console.log(xhr)
            var response = '';
            if(xhr.readyState == 4 && xhr.status == 200){
                response = xhr.responseText?JSON.parse(xhr.responseText):"";
                return _default.success(response);
            }else if(xhr.readyState == 4 && xhr.status == 404){
                xhr.onerror();
            }
        }
        xhr.send(JSON.stringify(_default.data));
    }
    var ajaxFn = new AjaxFn(option);
    return ajaxFn;
})