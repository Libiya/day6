var express=require('express');
var app=express();
app.get('/example/b',function(req,res,next){
    console.log('the response will be send')
    next()
},function(req,res){
    res.send('Hello world!')
})
app.listen(8000);

