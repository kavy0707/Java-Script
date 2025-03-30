// string is immutable we cna not change content of the string
let name="kavy"
console.log(name);
                                           

console.log(`my name is ${name}`);
console.log("my name is ${name}");

let sname = 'Adama \'D\' jango'
console.log(sname);

// function of strings
console.log("name kength:"+name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(sname.slice(2,6));
console.log(sname.slice(2));

let x="      jay         "
console.log(x);
console.log(x.trim());

console.log(sname.includes("a"));
console.log(sname.startsWith("a"));
console.log(sname.endsWith("a"));

// retuen the rupees in this string
let friend = "please give me rs.1000"

let amount = friend.slice(18)
console.log(amount);