var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send('hello node')
})

app.get("/getstudent",function(req,res){
	res.send('小明')
})

app.listen(8080,function(){
	console.log('server is running!')
})