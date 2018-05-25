const express = require('express');
// Create a route handler
const router =  express.Router();
// This router will handle the GET HTTP method
router.get('/',function(req,res){
    res.send('This is my Home page using Express Router');
});

module.exports = router;