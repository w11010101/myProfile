import Vue from 'vue'
var app = new Vue({
    el:"#app",
    data:{
        text:"this is index2.js ！！"
    },
    methods:{
        alertFn:function(){
            alert(this.text + "__wangmaomao")
        }
    }
});