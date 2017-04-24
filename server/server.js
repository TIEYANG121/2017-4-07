var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/home",function(req,res){
	res.send('home')
})

app.get("/movie",function(req,res){
	res.send('movie')
})


app.get("/su",function(req,res){
	console.log(req.query);
	res.send('成功获取数据')
})

app.post("/su",function(req,res){
	console.log(req.body);
	res.send('成功接收post请求')
})

app.listen(8080,function(){
	console.log('server is running!')
})