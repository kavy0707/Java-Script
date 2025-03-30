// 4 types of loops
// For loops
// For in loop   use in object
// For of loop use in string,arrays
// while loop
// do while loop


for (let i = 0; i < 10; i++) {
    console.log(i);    
}

const items = {
    kavy :  "1",
    jay :  "2",
    vivek : "3"
}
for (const a in items ) {
    console.log("coolection of key = " + a +" his value assign= "+ items[a]);
}
