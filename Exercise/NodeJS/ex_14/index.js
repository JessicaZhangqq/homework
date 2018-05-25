const express = require('express');
const port = 3000;
const app = express();

const path= require('path');
// GET '/': Return index.html with a 200 status
app.get('/',function(req,res){
    console.log('hi');
    res.status(200).sendFile(path.join(__dirname,'index.html'));
});

// GET '/products': Return the following message with a 500 status
app.get('/products',function(req,res){
    res.status(500).send('Server error, please try it later ');
});

// GET '/users': Return 404.html document with 404 status
app.get('/users',function(req,res){
    res.status(404).sendFile(path.join(__dirname,'404.html'));
});

// Create a Express web server using port 3000
app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on 3000');
    }
});