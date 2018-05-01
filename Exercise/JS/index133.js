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
//first part
for(let i=0;i<mutants.length;i++){
    if (mutants[i]=='Magneto')
    {break;}
    console.log(mutants[i]);
}

//second part
//move all values one index ahead after magneto postion
let magn = mutants.indexOf('Magneto');
for(;magn<mutants.length;magn++){
    mutants[magn]=mutants[magn+1];
}
//remove last space
mutants.pop();
for(let i =0;i<mutants.length;i++)
{
    console.log('index',i,mutants[i].toUpperCase());

}