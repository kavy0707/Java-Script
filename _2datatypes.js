// primitive data types :
// nn bb ss u 
// number null byte boolean string symbol undefind

let a=null;
let b=365
let c = BigInt(456)
let d = "harry"
let g = "false"
let e = Symbol("he;lo this is symbol")
let f = undefined

console.log(a,b,c,d,e,f,g);

// non primitive data types : object

let items = {  
//    here items is object
    "Harry" : true,
    "kavy" : false,
    "jay" : 12
};

console.log(items);   
console.log(items["kavy"]);
console.log(items.jay);

const vvp = {
    my : "1",
    low : "2"

}

console.log(vvp);
vvp["department"] = "computer"
vvp["my"] = "1000"

console.log(vvp.department);
console.log(vvp.my);