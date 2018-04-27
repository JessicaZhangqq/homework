let i;
let result;
for(i=0,result=0;i<=1000;i++){
    result+=i;
    if (result>400){
        break;
    }
}
console.log(result);