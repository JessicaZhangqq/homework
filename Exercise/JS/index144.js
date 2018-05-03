const user = {
    username:'batman',
    password:'Alfred1960ROCKS!'
};
//first output
console.log(user.username,user.password);
//second output
var returnUser;
for(let i=0;i<user.username.length;i++){
    if(i==0){
       returnUser= user.username.charAt(i).toUpperCase;
    }else{
        returnUser+=user.username.charAt(i);
    }
}
console.log(returnUser);