require.config({
    baseUrl:'../content/frame',
    paths:{
        // 依赖
        'require':'./requireJs/require',
        'jquery':'./jq/jquery.min',
        'bootstrap':'./bootstrap/js/bootstrap',
        'vue':'./vuejs/vue',
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
        'breadcrumb':'../normal/js/getBreadcrumb.min',
        'test':'../normal/js/test',
        'v-nav':'../normal/js/v-nav',   //引入 nav导航js
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
        'v-nav':{
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
        }
    }
});
require(['jquery','vue','bootstrap','v-nav','abc'],
    function($,Vue,bootstrap,nav,abc){
    
    // ==============   
    abc.a1()
    // 实例 获取面包屑组件 breadcrumb
    // 可以通过option进行面包屑配置；支持2个参数，
    var option = {
        // nodesName:"nodes",   // 默认子节点的集合为nodes
        paramName:'href'   // 默认根据id属性来查找
    }

    $("#navApp").load('./views/nav/nav.html',function(){
        // 调用 v-nav.js 中的方法, 并传入Vue实例 和 breadcrumb实例
        var newNav = nav(function(event){
            console.log(event);
        });
        console.log(newNav);
    });
    // 图表 ---------------------------------------
    $("#chartBox").load('./views/container/echarts-line.html',function(){
        $(this).addClass('show').attr('action','./views/container/echarts-line.html');
    });

    // 
    var openList = document.querySelector('.openList');
    var activeItem = document.querySelector('.activeItem');
    var activeItem = document.querySelector('.activeItem');

    //  展开菜单
    openList.addEventListener("click",function(){
        navVm.open = [1,11];
    });
    // 选中摸个页面
    // activeItem.addEventListener("click",function(){
    //     // console.log(targetNode)
    //     // console.log('views/container/container-1.html')
    //     navVm.active = 'views/container/container-1.html';
    // });    
});


