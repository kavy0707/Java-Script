let array = [1,2,3,4,null,"kavy"]
console.log(array);
console.log("type of the array is :"+typeof(array));

// console.log(array[0]);

console.log(array.toString());
console.log(array.length);

array.join("_");
console.log(array);

console.log(array.push(9));
console.log(array);


console.log(array.pop());
console.log(array);

console.log(array.shift("har har mahadev"));
console.log(array[0]);



console.log(array.unshift("har har mahadev"));
console.log(array[0]);


let a=[1,2,3]
let b=[4,5,6]
let c=[7,8,9]

console.log(a.concat(b,c));

console.log(a.slice(1));

a.forEach((element) => {
    console.log(element*element);
})

// Array FormData 
let sname="kavy"
let arr=Array.from(sname);
console.log(arr);

let r=[1,3,4,5,6,7]
for(let item of r){
    console.log(item);   // it prints value of array
}

for(let i in r ){
    console.log(i);   // it print a key 
}


let k = r.map((element=>{
    return element+1;
}))
console.log(k);