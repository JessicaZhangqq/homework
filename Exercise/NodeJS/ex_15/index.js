const express = require('express');
const app = express();
const router=express.Router();


// GET '/': Returns the following JSON object
app.get('/',function(req,res){
    res.send( {
        "status": 200,
        "message": "Este request/response está OK"
      });

    // res.send('hi');
});

// Create the following middleware:
const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl}' ' ${Date.now()}`;
    console.log(message);
    next();
  };

  app.use(requestTime);
  app.listen(3000,function(err){
      if(err){
          console.log(err);
      }else{
          console.log('Server is running on port 3000');
      }
  });