const path = require('path');
console.log('wangmaomao');
console.log('This is test !!!!!!!!!!!!');
const config = {
    entry:'./dist/content/js/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist/view')
    },
    resolve:{
        alias:{
            jquery: './dist/content/js/"jquery.min.js',
        }
    }
};

module.exports  = config;