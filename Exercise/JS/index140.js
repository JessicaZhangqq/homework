const mutants=[
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];
const removeList=[
    'Magneto',
    'Iceman',
    'Gambit'
];
const filteredList = mutants.filter(function(mutant){
    return removeList.indexOf(mutant)==-1 ;
});
console.log(filteredList);