let p1 = new Promise((resolve,reject) => {
    console.log("prmis 1 exution");

    setTimeout(()=>{
        console.log("promise p1 execute after 3 second");       
        resolve(2) 
    },3000)
    
})
p1.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("second script loaded after 2 second:",value);                
        }, 2000);        
    })
}).then((value)=>{
    setTimeout(() => {
        console.log("we are done after 1 second");        
    }, 1000);
}).then(()=>{
    console.log("final done");
    
})

p1.then((value)=>{
    
    console.log("congrats parellel promise also run",value);
    
})
// let p2 = new Promise((resolve,reject) => {
//     console.log("prmis 2 exution");

//     setTimeout(()=>{    
//         reject() 
//     },3000)
    
// })
// p2.catch((error)=>{
//     console.log("soory sir to loaded the prmoise",);
// })
