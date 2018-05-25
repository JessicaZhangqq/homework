const ifEven=require('./number');
// const result=ifEven(3);
const logger=require('logplease');
const logVar=logger.create('utils');
function isEven(number){
    if(ifEven(number)){
        logVar.info(`${number} is even.`)
    }else{
        logVar.error(`${number} is odd`);
    }
}

isEven(2);
isEven(3);
isEven(101);
isEven(201);
isEven(202);
isEven(100);

// console.log(result);