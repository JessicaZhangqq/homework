let i=13, j=1;
let message='';
while(i>=0){
    while(j<=i){
        message+='*';
        j++;
       // console.log('j=',j);
    }
    i--;
    console.log(message);
    //initialize variables j and message
    j=1;
    message='';
    
}