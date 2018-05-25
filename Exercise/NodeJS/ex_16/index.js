const express=require('express');
const app=express();
app.use('/assets',express.static('public'));


// app.get('/',function(req,res){
//     res.send('hi');
// });

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
});