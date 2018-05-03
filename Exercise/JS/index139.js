const numbers = [
    21,44,54,3,67,222,66,5,54,43,45,75,323,66,49,4,2,56,
    4,34,233,34,35,46,56,54,54,53,55,56,67,6,8,12,11,23,
];
// get even number
const evenNumbers= numbers.filter(function(number){
    if (number%2==0){
        return number;
    }
});
//get odd numbers
const oddNumbers= numbers.filter(function(number){
    if (number%2!=0){
        return number;
    }
});
//output first 10 odd numbers
console.log('first odd numbers:');
for(let i =0;i<10;i++){
    console.log(oddNumbers.shift());
}
// output last 
console.log('last 20 even numbers:')
for(let i=19;i>0;i--){
    console.log(evenNumbers.pop());
}


