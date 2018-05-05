function add(){
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    console.log(result);
}

add(2,3,4,5,6);
add(1,33,3,78,9,5,776,23);