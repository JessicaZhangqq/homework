const femaleStudents = [
    'jessica',
    'Rayhaneen',
    'Mandeep',
    'T',
    'Surmeet'
];
const maleStudents=[
    'Tri',
    'Harpreet',
    'Anton',
    'Robert',
    'Ashley'
];
const students = femaleStudents.concat(maleStudents);
const sortedStudents=students.sort();
//Each femaleStudents name using numeric indexes
console.log(femaleStudents[0],femaleStudents[1],femaleStudents[2],femaleStudents[3],femaleStudents[4]);
//Each maleStudents name using while
let i =0;
while(i<maleStudents.length){
    console.log(maleStudents[i]);
    i++;
}

//Each students name using for
console.log('Students:');
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}
