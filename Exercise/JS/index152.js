const user={
    username:null,
    password:null,
    greet:function(){
      if(this.username!==null){
        console.log(`Hello I'm user ${this.username}`);
      }else{
        console.log('Please assign a username value');
      }
    },
    updaterUsername:function(newName){
      this.username=newName;
    },
    updatePassword:function(password){
        this.password=password;
    }
  }
  user.greet();
  user.updaterUsername('Jessica');
  user.updatePassword('111111');
  user.greet();