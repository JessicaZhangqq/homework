
const vconsole='PS4';
const games=[
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    }  ,
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail:function(){
            console.log('name:',this.name);
            console.log('price:',this.price);
            console.log('sold:',this.sold);
            console.log('console:',this.console);
        }
    }
]
const filteredGames=games.filter(function(game){
    return game.console==vconsole;
});
var budget=0;;
filteredGames.forEach(function(game){
    budget+=game.price;
})
console.log(`I need ${budget} CAD to get all this PS$ great games!!`);

//Define a new gameNames array and assign all the games names (all strings)
const gameNames = games.map(function(game){
    return game.name;
});
console.log('game names;',gameNames);
//Define a new gamePrices array and assign all the games prices (all numbers)
const gamePrices = games.map(function(game){
    return game.price;
});
console.log('game price:',gamePrices);