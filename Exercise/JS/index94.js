let i=1,j=1;
let message='*';
console.log(message);
for(i=1;i<7;i++)
{
    for(j=1;j<=i;j++)
    {
        message+='**';
    }
    console.log(message);
    message='';
}