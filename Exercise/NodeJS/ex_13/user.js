const express = require('express');
// Create a route handler
const router =  express.Router();

router.get('/',function(req,res){
    res.send('Please log to get a user');
});

router.post('/',function(req,res){
    res.send('Please log to create a user');
});

router.put('/',function(req,res){
    res.send('Please log to create a user');
});

router.delete('/',function(req,res){
    res.send('Please log to create a user');
});

module.exports = router;