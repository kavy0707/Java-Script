function print() {
    console.log("heello word");
}
function adding(a,b) {
    console.log("a+b=" ,a+b);
}
print();
adding(2,3)

console.log("using arrow function:");

const substraction = (c,d) =>{
    console.log("arreow function");
    return c-d;
}
let v=substraction(5,4);
console.log(v);