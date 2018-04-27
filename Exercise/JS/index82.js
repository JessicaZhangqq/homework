let number=1;
let lin=1;
let message='';
do{
    do{
        message+='*' ;
        lin++;
        // console.log(lin);
    }
    while(lin<=number)
    console.log(message);
    number++;
}
while(number<=13)