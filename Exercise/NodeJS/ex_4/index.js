var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
const  jokeCategory=getRandomJoke.tags;
const jokeContent=getRandomJoke.body;
console.log('category:',jokeCategory,'Content:',jokeContent);
