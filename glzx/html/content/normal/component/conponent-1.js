define(['vue'],function(Vue){
    // return function(){
        var template = Vue.extend({
            template:`
                <div>
                    this is component-1.js
                    <div>
                       {{name}} 
                    </div>
                    <div>
                    {{testFn(11,22)}}
                    </div>
                </div>
            `,
            data:function(){
                return {
                    name:"wangchi",
                    a:12,
                    b:21
                }
            },
            methods:{
                testFn:function(a,b){
                    return a * b;
                    // return  this.a+this.b;
                }
            }
        })
        return template;
        // return template;
    // }
})