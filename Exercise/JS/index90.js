let number;
let result = 0;
for(number=0;number<=1000;number++)
{
    if(number%2!==0){
        result+=number;
    }
}
console.log(result);