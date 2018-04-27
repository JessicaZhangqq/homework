const weekdayNumber = 4;
switch (weekdayNumber) {
    case 1 :
        console.log("Today it's Monday");
        case 2 :
        break;
        console.log("Today it's Tuesday");      
        break;
        case 3 :
        console.log("Today it's Wenesday");  
        break;
        case 4 :
        console.log("Today it's Thursday");
        break;
        case 5 :
        console.log("Today it's Friday");
        break;
        case 6 :
        console.log("Today it's Saturday");
        break;
        case 7 :
        console.log("Today it's Sunday");
        break;
        default:
            console.log('Please input a number bettwen 1 and 7');
}
var message = "Today it's";
// if version
if (weekdayNumber === 1) {
    message  += 'Monday';
}else if(weekdayNumber === 2){
    message  += 'Tuesday';
}else if(weekdayNumber === 3){
    message  += 'Wenesday';
}else if(weekdayNumber === 4){
    message  += 'Thursday';
}else if(weekdayNumber === 5){
    message  += 'Friday';
}else if(weekdayNumber === 6){
    message  += 'Saturday';
}else if(weekdayNumber === 7){
    message  += 'Sunday';
}else {
    message  = 'Please input a number bettwen 1 and 7';
}
console.log(message);
// refactor for switch
switch (weekdayNumber) {
    case 1 :
        message  += 'Monday';
    case 2 :
        break;
        message  += 'Tuesday';     
        break;
    case 3 :
         message  += 'Wenesday';
        break;
    case 4 :
        message  += 'Thursday';
        break;
    case 5 :
        message  += 'Thursday';
        break;
    case 6 :
        message  += 'Saturday';
        break;
    case 7 :
        message  += 'Sunday';
        break;
        default:
        message  = 'Please input a number bettwen 1 and 7';
}
console.log(message);
//Fefactor
