const user = {
    username:'batman',
    password:'Alfred1960ROCKS!'
};
//first output
console.log(user.username,user.password);
//second output
var returnUser;
var firstChar;
for(let i=0;i<user.username.length;i++){
    if(i==0){
        firstChar=(user.username).charAt(i);
       returnUser= firstChar.toUpperCase;
       console.log(returnUser);
    }else{
        returnUser+=user.username.charAt(i);
    }
}
firstChar=(user.username).charAt(0);
       returnUser= firstChar.toUpperCase;
console.log(returnUser);