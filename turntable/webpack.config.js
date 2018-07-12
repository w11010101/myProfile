const path = require('path');

console.log('wangmaomao');
console.log('This is test !!!!!!!!!!!!');
console.log('__dirname = ' ,__dirname);
console.log(':__dirname+"./static/js/plugin/vue/" = ' ,__dirname+"./static/js/plugin/vue/");
console.log('path.resolve(__dirname,"./build/") = ' ,path.resolve(__dirname,"./build/"));

const config = {
    // entry:['./static/js/index.js','./static/js/index2.js'],
    entry:{
        app1:'./static/js/index.js',
        app2:'./static/js/index2.js',
    },
    output:{
        // filename:'bundle.js', 
        filename:'[name].js',        

        path:path.resolve(__dirname,"./build/"),
    },
    resolve:{
        alias:{
            // jquery: path.resolve(__dirname,"./src/components/jquery-vendor.js"),
            jqueryplugin:path.resolve(__dirname,"./static/js/plugin/jquery/"),
            'jquery-mousewheel':path.resolve(__dirname,"./static/js/plugin/jquery/jquery-mousewheel.js"),
            // vue:path.resolve(__dirname,"./static/js/plugin/vue/vue.js")
        }
    },
    externals:{
        jquery:"jQuery",
        vue:"Vue"
    },
    module:{
        rules:[

            { test: /\.css$/, use:['style-loader','css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use:['file-loader'] },
        ]

        // ru:[
        //     { test: /\.css$/, loader: 'style-loader!css-loader' },
        // ]les



        // rules:[
        //     {
        //         test:/\.css$/,
        //         use:[
        //             {loader:'style-loader'},
        //             {
        //                 loader:'css-loader',
        //                 // options:{
        //                 //     modules:true
        //                 // }
        //             },
        //             {
        //                 loader:'./static/css/turntable',
        //                 // options:{
        //                 //     modules:true
        //                 // }
        //             }
        //         ]
        //     }
        // ]
    }
};

module.exports  = config;