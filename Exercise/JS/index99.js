let i,number;
let result=0;
for(i=0,number=0;i<=1000;i++){
    if(i%2==0){
        result+=i;
        number++;
    }
    if (number==20){
        break;
    }
}
console.log(result);