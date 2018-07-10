const path = require('path');
// const date = require('./static/js/plugin/jquery/jquery.datetimepicker.full.js')
console.log('wangmaomao');
console.log('This is test !!!!!!!!!!!!');
console.log('__dirname = ' ,__dirname);
console.log(':__dirname+"./static/js/plugin/vue/" = ' ,__dirname+"./static/js/plugin/vue/");
console.log('path.resolve(__dirname,"./build/") = ' ,path.resolve(__dirname,"./build/"));
const config = {
    entry:['./static/js/index.js','./static/js/index2.js'],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,"./build/")
    },
    resolve:{
        alias:{
            jquery: path.resolve(__dirname,"./src/components/jquery-vendor.js"),
            jqueryplugin:path.resolve(__dirname,"./static/js/plugin/jquery/"),
            // 'jquery-mousewheel':path.resolve(__dirname,"./static/js/plugin/jquery/jquery-mousewheel.js"),
            vue:path.resolve(__dirname,"./static/js/plugin/vue/vue.js")
        }
    },
    // plugins:[
    //     new date(),
    // ]
};

module.exports  = config;