let i=13, j=1;
let message='';
do{
    do{
        message+='*';
        j++;
        // console.log('j=',j);
    }
    while(j<=i)
    i--;
    console.log(message);
    //initialize variables j and message
    j=1;
    message='';
    
}
while(i>=0)