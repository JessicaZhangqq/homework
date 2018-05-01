const mutants =[
   ' Professor X',
   ' Cyclops',
   ' Iceman',
   ' Angel',
   ' Beast',
   ' Phoenix',
];
const sortedMutants=mutants.sort();
const reversMutants = mutants.reverse();
const joinMutants = mutants.join('*');
console.log('Original mutants:',mutants);
console.log('Sorted mutants',sortedMutants);
console.log('Reversed mutants',reversMutants);
console.log('Mutants name separated by *',joinMutants);