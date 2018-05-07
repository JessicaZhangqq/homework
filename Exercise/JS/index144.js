const user = {
    username:'batman',
    password:'Alfred1960ROCKS!'
};
//first output
console.log(user.username,user.password);
//second output
var returnUser;
var firstChar;
firstChar=user.username[0].toUpperCase();
returnUser=firstChar+user.username.slice(1,6);
console.log(returnUser);
//remove 1960
const password2=user.password;
const newPassword=password2.slice(0,6)+' '+password2.slice(10,17);
console.log(newPassword);