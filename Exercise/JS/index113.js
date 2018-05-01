let perimiter;
function getShapePerimiter(base,height){
    if(base===height){
       return base*4;
    }else{
        return (base+height)*2;
    }
    
}

perimiter=getShapePerimiter(9,19);
if(perimiter>100){
    console.log('The perimiter is to big');
}else{
    console.log('The perimiter is fine') ;
}
perimiter= getShapePerimiter(99,99);
if(perimiter>100){
    console.log('The perimiter is to big');
}else{
    console.log('The perimiter is fine') ;
}