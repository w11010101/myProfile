require.config({
    baseUrl:'../content/frame',
    paths:{
        // 依赖
        'require':'./requireJs/require',
        'jquery':'./jq/jquery.min',
        'bootstrap':'./bootstrap/js/bootstrap',
        'vue':'./vuejs/vue',
        'vue-router':'./vuejs/vue-router.min',
        
        'iview':'./iview/iview.min',
        'jquery-mousewheel':'./jquery.date/jquery-mousewheel',
        'jquery.datetimepicker':'./jquery.date/jquery.datetimepicker.full.min',
        'echarts':'./echarts/echarts.min',
        'domready':'./domready/domReady',
        'jquery.bootstrap-duallistbox':'./bootstrap-duallistbox/jquery.bootstrap-duallistbox',
        'bootstrap-file':'./bootstrap/js/bootstrap-filestyle',
        'iscroll-zoom':'./photoClip/iscroll-zoom',
        'hammer':'./photoClip/hammer',
        'lrz':'./photoClip/lrz.all.bundle',
        'abc':'../normal/js/abc',
        'token':'../normal/js/cookieFn',
        // 'domready':'https://cdn.bootcss.com/require-domReady/2.0.1/domReady'
        // my js
        'router':'../normal/js/router',
        'breadcrumb':'../normal/js/getBreadcrumb.min',
        'test':'../normal/js/test',
        'nav':'../normal/js/nav-router',   //引入 nav导航js
        'extend':'../normal/js/vue-extend',
        'pages':'../normal/js/pages',
        'component1':'../normal/component/conponent-1'
    },
    map:{
        "*":{
            "css":"./requireJs/css.min"
        }
    },
    shim:{
        'bootstrap':{
            deps:['css!../frame/bootstrap/css/bootstrap.min','jquery'],
            exports:"bootstrap"
        },
        'nav':{
            deps:['css!../frame/iview/iview.css','css!../normal/css/nav-style.css']
        },
        'jquery.datetimepicker':{
            deps:['css!./jquery.date/jquery.datetimepicker.min','jquery'],
        },
        'jquery.bootstrap-duallistbox':{
            deps:['jquery','css!./bootstrap-duallistbox/bootstrap-duallistbox']
        },
        'abc':{
            deps:['jquery'],
            exports:"abcFn"
        },
        'pages':{
            deps:['css!../normal/css/base.css']
        }
    }
});
require(['jquery','bootstrap','vue','vue-router','router','nav'],
    function($,bootstrap,Vue,vueRouter,router,nav){
        console.log(router)
        router();
        // var app = new Vue({
        //     el:"#app-router",
        //     data:{
        //         breadcrumbArr:''
        //     },
        //     methods:{
        //         refreshFn:function(){

        //         }
        //     }
        // });
    $("#navApp").load('./views/nav/nav-router.html',function(){
        // 调用 v-nav.js 中的方法, 并传入Vue实例 和 breadcrumb实例
        var newNav = nav(function(event){
            console.log(event);
        });
        console.log(newNav);
    });
    
});


