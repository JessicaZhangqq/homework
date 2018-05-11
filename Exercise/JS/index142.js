    let firstPerson,secondPerson;
     firstPerson=['Jessica','Zhang','2475 Waverley St','30'];
    secondPerson=['Nicole','Guan','2475 Waverley St','31'];
    const string1=firstPerson.reduce(function(result,item){
        return result+item;
    });
    const string2=secondPerson.reduce(function(result,item){
       return result+item;
    });
    if(string1==string2){
        console.log('They are the same person.')
    }else{
        console.log('They are not the same person.')
    }
    console.log(string1,string2);
    //Don't understand what Nico wants to do
