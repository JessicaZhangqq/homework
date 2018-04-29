function getShapePerimiter(base,height){
   let perimiter;
    if(base===height){
        perimiter=base*4;
    }else{
        perimiter=(base+height)*2;
    }
    if(perimiter>100){
        console.log('The perimiter is to big');
    }else{
    console.log(`${perimiter}is the shape perimiter`) ;
    }
}
getShapePerimiter(9,19);
getShapePerimiter(99,99);