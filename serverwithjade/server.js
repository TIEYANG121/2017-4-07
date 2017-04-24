var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','jade');

app.post('/',function(req,res){
	console.log(req.body.username)
	res.render('index',{username:req.body.username})
})

app.get('/login',function(req,res){
	res.render('login')
})

app.listen(8080,function(){
	console.log('server is running!')
})