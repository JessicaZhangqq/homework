const numbers =[];
for (let i=0;i<=1000;i++){
    numbers.push(i);
}
let result;
for(let i=0;i<number.length;i++){
    result+=numbers[i];
}
if(result==50005000){
    console.log('Good job!!!');
}else{
    console.log('Take a look to see if something is wrong');
}