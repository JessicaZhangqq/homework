function biggerNumber(firstNumber,secondNumber){
    if(firstNumber>secondNumber){
        console.log(`${firstNumber} is bigger than ${secondNumber}`);
    }else if(firstNumber<secondNumber){
        console.log(`${secondNumber} is bigger than ${firstNumber}`);
    }else{
        console.log(`both number is ${secondNumber}`);
    }
}

biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);