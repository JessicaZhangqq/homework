const express = require('express');
const port = 3000;
const app = express();

//****** Joke module */
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
const  jokeCategory=getRandomJoke.tags;
const jokeContent=getRandomJoke.body;

//*****joke module */


app.get('/',function(req,res){
    res.send('Welcome');
});

// GET jokes: show at least 2 jokes
app.get('/jokes',function(req,res){
    res.send(`first joke\'s category:${jokeCategory}Content:${jokeContent} \n second joke\'s category:${jokeCategory}Content:${jokeContent}`);
    // res.send(``);
    // console.log(jokeCategory,jokeContent);
});

// GET joke: show 1 joke
app.get('/joke',function(req,res){
    res.send(`Joke\'s category:${jokeCategory} Content:${jokeContent}`);
});

// POST joke: my jokes are too funny, I'm not getting new ones from you..
app.post('/joke',function(req,res){
    res.send('my jokes are too funny, I\'m not getting new ones from you.');
});

// PUT joke: no, no, no.. not changing my act dude!
app.put('/joke',function(req,res){
    res.send(' no, no, no.. not changing my act dude!');
});
// DELETE: joke: good jokes never get to old
app.delete('/joke',function(req,res){
    res.send('good jokes never get too old');
});

// All: joke: I know I'm so good that you're looking for jokes everywhere
app.all('/joke',function(req,res){
    res.send('I know I\'m so good that you\'re looking for jokes everywhere');
});

app.listen(port,function(err){
    if(err){
        console.log('unable to start an server on',port);
    }else{
        console.log('sever is running on ',port);
    }
});

