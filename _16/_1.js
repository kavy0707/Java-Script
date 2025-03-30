console.log(document.cookie);
document.cookie="name=kavy"
document.cookie="name1=kavy121515"
document.cookie="name2=kav78787"
document.cookie="name=boricha"
console.log();

key = prompt("enter your key")
value = prompt("enter your value")
document.cookie= `${key} = ${value}`// but it not contain special symbol
document.cookie= `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`  
console.log(document.cookie);

document.cookie="1=2;3=4"