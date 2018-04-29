function validateUser(username,password){
    if(username==='nacho'&&password==='Nerd1979'){
        return true;
    }else if(username==='pedro'&&password==='Batman0217'){
        return true;
    }else if(username==='marta'&&password==='Mother2312'){
        return true;
    }
}
const user='nacho', password ='Nerd1979';
if (validateUser(user,password)){
    console.log(`Wellcome ${user}, nice to see you again `)
}else{
    console.log('Please input valid credentials');
}

