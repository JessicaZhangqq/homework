const year = 2012;
const champion = 2016;
var team;
console.log(` ${champion} was the ${year} NHL Champion`);
if ((year<2006&&year>2017)&&(champion<2006&&champion>2017)){
    console.log('Sorry, please try a differnt year');
}
switch (year) {
    case 2017:
        team = 'Pittsburgh Penguins';
        break;
    case 2016:
        team = 'Pittsburgh Penguins';
        break;
    case 2015:
        team= 'Chicago Blackhawks';
        break;
    case 2014:
        team='Los Angeles Kings ';
        break;
     case 2013:
         team='Chicago Blackhawks';
        break;  
    case 2012:
        team = 'Los Angeles Kings';
        break;
    case 2011:
        team = 'Boston Bruins';
        break;
    case 2010:
        team='Chicago Blackhawks';
        break;
    case 2009:
        team = 'Pittsburgh Penguinas';
        break;
    case 2008:
        team = 'Detroit Red Wings ';
        break; 
    case 2007:
        team = 'Anaheim Ducks';
        break;
    case 2006:
        team='Carolina Hurricanes';
        break;
}
console.log(team);
 