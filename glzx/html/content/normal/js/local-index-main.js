require.config({
    baseUrl:"../content/frame",
    paths:{
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
        'clipboard':'./clipboard/clipboard.min'
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
            // exports:"jquery.datetimepicker"
        },
        'jquery.bootstrap-duallistbox':{
            deps:['jquery','css!./bootstrap-duallistbox/bootstrap-duallistbox']
        }
    }
})

require(['jquery','vue','bootstrap','v-nav'],
    function($,Vue,bootstrap,nav){
   
    // 实例 获取面包屑组件 breadcrumb
    // 可以通过option进行面包屑配置；支持2个参数，
    var option = {
        // nodesName:"nodes",   // 默认子节点的集合为nodes
        paramName:'href'   // 默认根据id属性来查找
    }

    var newNav = nav(function(event){
        console.log(event);
    });
    console.log(newNav);
 
});