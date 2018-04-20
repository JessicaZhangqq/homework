var text = 'game of thrones';
var  firstChar, secondChar, thirdChar;
firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);
var result = firstChar.concat(secondChar,thirdChar) ;
result = result.toUpperCase();
console.log(result);