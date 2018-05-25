const express = require('express');
// Create a route handler
const app = express();

// Mount the home router on '/'
const home=require('./home');
app.use('/',home);
// Mount the user router on '/users'

const user=require('./user');
app.use('/users',user);

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
});
