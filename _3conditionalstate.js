const prompt = require('prompt-sync')();

let age = prompt("Enter your age: ");
console.log(typeof age); 
console.log("entered age is:",age);

if (age<0) {
    console.log("enter age is not valid");
}
else if(age>0 && age<=18){
    console.log("you are not eligible for driving");
}
else{
    console.log("yuo are eligible for driving");
}



let a=19;
let b = a>18? "age is valid":"age is not valid"
console.log(b);