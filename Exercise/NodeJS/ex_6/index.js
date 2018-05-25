const greet=(firstName,lastName)=> {
    console.log(`Hi ${firstName} ${lastName}`);
}
greet('jessica','Zhang');

//extra
const callbackeFunction= ()=>{
    console.log('This code gets executed after the greet function call');
}
const greetExtra = (firstName,lastName,aFunction)=>{
    console.log(`Hi ${firstName} ${lastName}`);
    aFunction();
}
greetExtra('jessica','Zhang',callbackeFunction);