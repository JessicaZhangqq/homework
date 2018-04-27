let x=1, y=1;
do{
    do{
        console.log(`${x}*${y}=${x*y}`);
        y++;
    }
    while(y<=x)
    x++;
    y=1;
}
while(x<=9)
