var express = require('express');
var app = express();
// console.log(app);
// 
app.use(express.static(__dirname));
app.use(express.static('static/js/myPlugin/'))

app.get('',function(req,res){
  res.sendFile(__dirname+'/src/index2.html');
});
var server = app.listen("8083",function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
