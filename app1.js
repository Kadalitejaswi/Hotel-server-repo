var express=require('express');
var path = require('path')
var app=express()
const host='127.0.0.1'
const port=3030
//declare statisc directory
app.use(express.static(path.join(__dirname,'private')))

//app.get(url,callback(request,response))
app.get('/',function(req,res){
    console.log("get request in /");
    console.log(req.url + ""+req.method);
    res.status(200).send("server first request on /")

})
app.get('/home',function(req,res){
    console.log("get request in /home");
    console.log(req.url + ""+req.method);
    res.status(200)
    .set('text/html')
    .sendFile(path.join(__dirname,"./private/index1.html"))

})

app.get('/file',function(req,res){
    console.log("get request in /home");
    console.log(req.url + ""+req.method);
    console.log(__dirname);
    
    res.status(200)
    .sendFile()

})
    
app.get('/json',function(req,res){
    console.log("get request in /home");
    console.log(req.url + "=="+req.method);
    console.log(req.query);
    if(Object.keys(req.query).length>0){

 
        res.status(200)
        .set('application/json')
        .json(req.query.name)
    
    }else{
        let  user={
            name:"john",
            age:25,
            email:'john@gmail.com',
            gender:"male"
        }

    res.status(200)
    .set('application/json')
    .json(user)

    }
 

})

app.post('/user',function(req,res){
    console.log("Post request on /user");
    console.log(req.url + "=="+req.method);
    res.status(200).send("Welcome to user")

})

app.listen(port,host,function(){
    console.log(`server is running at http://${host}:${port}`);
    console.log(`Magic happened on Port ${port}`);
    
    
})
