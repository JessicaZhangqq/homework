// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

const express = require('express');
const app = express();
const path=require('path');
app.get('/',function(req,res){
       res.status(200).sendFile(path.join(__dirname,'index.html'));
    // res.status(200).sendFile(path.join(__dirname,'index.html'));
});
//use get method
app.get('/products', (req, res) => {
    const username = req.query.username;
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    console.log('hi');
    res.send(`We got the following values from the query string: ${username}, ${firstname} & ${lastname}`);
  });
app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
});
// console.log(urlencodedParser);