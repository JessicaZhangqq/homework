// Created on 21 May 2018
//Created By Jessica Zhang
//Version 1.0

const express = require('express');
const app = express();
const port = 3000;

const responseObject={
    description: 'Products',
    items: [
      { name: 'Star Wars jacket' , price: 100},
      { name: 'FIFA 22 PS4' , price: 79},
      { name: 'Superheore t-shirt' , price: 10},
      { name: 'Jets game shirt' , price: 200},
      { name: 'Large Meat lovers pizza' , price: 12},
      { name: 'Canada Dry  bottle' , price: 2}
    ]
  };

app.get('/api/products',function(req,res){
    res.send(JSON.stringify(responseObject));
});

app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port',port);
    }
});