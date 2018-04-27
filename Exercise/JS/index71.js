let x=1, y=1;
while(x<=9){
    while(y<=x){
        console.log(`${x}*${y}=${x*y}`);
        y++;
    }
    x++;
    y=1;
}
