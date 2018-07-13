const webpack = require('webpack');
const configuration = require("../../../webpack.config.js");
let compiler = webpack(configuration);

function HelloWorldPlugin(option){
    console.log('option = ',option);
}

HelloWorldPlugin.prototype.apply = function(compiler){
    compiler.plugin("run",function(){
        console.log('hello world !')
    })
}
module.exports = HelloWorldPlugin;