let number=1;
let lin=1;
let message='';
while(number<=13){
    while(lin<=number){
        message+='*' ;
        lin++;
       // console.log(lin);
    }
    console.log(message);
    number++;
}