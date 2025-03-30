var a= 10;
(function (){
    console.log("hello word");
    console.log(a);
})();  // () for call the function IIFE syntax

// let [x,y] = [2,3]
// console.log(x,y);


let [x,y,...rest] = [2,3,5,6,8,9,10]
console.log("x=",x,"y=",y,"rest=",rest);

const obj = {a:1,b:2}
console.log("obj=",obj);

const arr = [1,2,3]
console.log("arr",arr);

let n="i"
let m="kavy"
let jay = {n,m}
console.log("jay:",jay);

{
    let a = 10
    console.log("functional scope => a = ",a);
}

// console.log("num = ",num);
// let num = 10


console.log("num1 = ",num1);
var num1 = 10

print()
function print(){
    console.log(" function printing before intiallizing");    
}