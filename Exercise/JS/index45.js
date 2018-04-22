const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian citi, Go Winnipeg';
const patrik = playerName.slice(0,13);

var template = patrik.toUpperCase() + ' is '+ message.slice(11,20) + ' J' + teams.slice(47,50)  +' player' + message.slice(34,38);
console.log(template);