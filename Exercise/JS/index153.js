const arithmetic = {
        add :function(number1,number2){
            if(((typeof number1) !=='number')||((typeof number2)!=='number')){
                console.log('Error! Wrong type');
            }else{
                console.log('Add result:',number1+number2);
            }
        },
        substract :function(number1,number2){
            if(((typeof number1) !=='number')||((typeof number2)!=='number')){
                console.log('Error! Wrong type');
            }else{
                console.log('Substract result:',number1-number2);
            }
        },
        multiply :function(number1,number2){
            if(((typeof number1) !=='number')||((typeof number2)!=='number')){
                console.log('Error! Wrong type');
            }else{
                console.log('Multiply result:',number1*number2);
            }
        },
        divide :function(number1,number2){
            if(((typeof number1) !=='number')||((typeof number2)!=='number')){
                console.log('Error! Wrong type');
            }else{
                console.log('Divide result:',number1/number2);
            }
        },
        remainder :function(number1,number2){
            if(((typeof number1) !=='number')||((typeof number2)!=='number')){
                console.log('Error! Wrong type');
            }else{
                console.log('Remainder result:',number1%number2);
            }
        },

    }
    arithmetic.add(2, 10);
    arithmetic.substract(10, 5);
    arithmetic.multiply(3, 100);
    arithmetic.divide(40, 2);
    arithmetic.remainder(20, 2);
  arithmetic.add('hi',9);
  arithmetic.divide('hi',9);
