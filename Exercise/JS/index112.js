function showNumbers(start,end){
    if(start>=end){
        for (;start>end;start--){
            console.log(start);
        }
    }else{
        for(;start<=end;start++){
            console.log(start);
        }
    }
}
showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers(100,300);
showNumbers('hi','3');