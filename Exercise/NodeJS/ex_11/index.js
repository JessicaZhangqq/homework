// Date: 21 May 2018
//Author: Jessica Zhang
//Version: 1.0

const express = require('express');
const app = express();
const path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/products',function(req,res){
    // console.log('hi');
    res.sendFile(path.join(__dirname,'products.html'));
});
app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
    console.log('server is running on port 3000');
    }
});


