const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


console.log('wangmaomao');
console.log('This is webpack.config.js !!!!!!!!!!!!');
console.log('__dirname = ', __dirname);
console.log('path.resolve(__dirname,"./build/") = ', path.resolve(__dirname, "./build/"));

// const firstPlugin = require('./static/js/myPlugin/first-plugin');

const config = {
    // entry:['./static/js/index.js','./static/js/index2.js'],
    entry: {
        // app1: './static/js/index.js',
        index2: './static/js/index2.js',
    },
    output: {
        // filename:'bundle.js', 
        filename: '[name].bundle.js',
        // publicPath:path.resolve(__dirname,"./src/assets/"),
        path: path.resolve(__dirname, "./build/"),
        publicPath: '../build/',

    },
    resolve: {
        alias: {
            // jquery: path.resolve(__dirname,"./src/components/jquery-vendor.js"),
            jqueryplugin: path.resolve(__dirname, "./static/js/plugin/jquery/"),
            plugin:path.resolve(__dirname,'"./static/js/plugin/'),
            'jquery-mousewheel': path.resolve(__dirname, "./static/js/plugin/jquery/jquery-mousewheel.js"),
            // vue:path.resolve(__dirname,"./static/js/plugin/vue/vue.js")
        }
    },
    devtool:'inline-source-map',
    externals: {
        jquery: "jQuery",
        vue: "Vue"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader?limit=8124&[hash]'] },
            { test: /\.(csc|tsv)$/, use:['csv-loader']},
            { test: /\.(xml)$/, use:['xml-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: "HtmlWebpackPlugin",
            // filename:"HtmlWebpackPlugin.html",
            // template:'src/index.html'
        })
        // new firstPlugin({option:true,name:'wangmaomao'})
    ]
};

module.exports = config;