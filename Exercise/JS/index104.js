let fibonacci=function(){
    let n, f, f1=-1, f2=1;
    for(f=0,n=10;f<n;)
    {
        f=f1+f2;
        f1=f2;
        f2=f;
        console.log(f);
    }
}
fibonacci();
fibonacci();
fibonacci();