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
        'extend':'../normal/js/vue-extend',
        'pages':'../normal/js/pages'
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
        },
        'pages':{
            deps:['css!../normal/css/base.css']
        }
    }
});
require(['jquery','vue','bootstrap','v-nav','abc','breadcrumb','pages','extend'],
    function($,Vue,bootstrap,nav,abc,breadcrumb,pages,extend){
    
    window.extendApp = new Vue({
        el:"#extend",
        // components: { 'navigation': pages.pageComponent},
        components:{'my':extend.component},
        // template:extend.component,
        // mixins:[pages.pageComponent],
        mixins:[extend.component],
        data:{
            msg:"this is extend VUE",
            name:"王驰123456789",
            num:111,
            pageindex: 1,
            pages: 10,
            pagerows: 0,
            pagesize: 10,
        },

    });
    extendApp.a = '123'
    // ==============   
    // abc.a1()
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
    var jumppage = document.querySelector('.jumppage');
    var _breadcrumb =new breadcrumb({
        paramName:'href'
    })
    var breadcrumbObj = _breadcrumb.init(data,'views/container/container-1.html');
    // console.log(breadcrumbObj);
    var idsArr = breadcrumbObj.idsArr;
    //  展开菜单
    openList.addEventListener("click",function(){
        // console.log(idsArr);
        idsArr.length = idsArr.length-1;
        // console.log(idsArr);
        navVm.open = idsArr;
    });
    // 选中摸个页面
    activeItem.addEventListener("click",function(){
        // console.log(targetNode)
        // console.log('views/container/container-1.html')
        navVm.active = 'views/container/container-1.html';
    });   
    jumppage.addEventListener("click",function(){
        // console.log(new pages.pageComponent().goPage(1))
        extendApp.curPage = 1;
        // extendApp.pageindex = 1;
    })

    function insertNum(option){
        var _default = {
            num:100000,
            insertStr:',',
            inserIndex:3,
            numF:false,
        }
        if(option){
            for( var key in option){
                _default[key] = option[key];
            }
        }
        var str = typeof _default.num === 'string'?_default.num:_default.num.toString();

        if(!str.substr(0,1).match(/[0-9]/)){
            if(str.indexOf('-') == 0){
                _default.numF = true;
            }
            str = str.substr(1);
        }
        if(str.length > 17){
            alert('数字太大，转换后不准确，请修改。启用默认值');
            _default.num = 100000;
            var str = _default.num.toString();
        }
        
        var numArr = str.split('');
        var arr = [];
        var x = str.length % _default.inserIndex;
        for(var i = 0;i<numArr.length;i++){
            if(i !== 0) {
                if(i == x || (i-x) % _default.inserIndex == 0){
                    numArr[i] = _default.insertStr+numArr[i];
                }
            }
        }
        return _default.numF?'-'+numArr.join(''):numArr.join('');
    }
    console.log(insertNum({
        num:-111234567890,
        insertStr:',',
        inserIndex:3
    }))
});


