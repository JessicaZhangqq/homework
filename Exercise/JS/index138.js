const mutants = [
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
const target=[
    'Professor X',
    'Logan',
    'Phoenix',
    'Gambit'
];

const newMutants=mutants.map(function(mutant) {
    if(target.indexOf(mutant)>-1){
        mutant = '<3 '+mutant;
    }
    return mutant;
});
console.log('Original mutant:',mutants);
console.log('updated mutant:',newMutants);