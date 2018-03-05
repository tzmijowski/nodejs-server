var express = require('express')
var app = express()
var path    = require("path");
var port = 8080;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/status', function(req, res){
    res.status(200).send('OK');
});

app.listen(port, function(){
    console.log("App is listetning at port:", port);
});