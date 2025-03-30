let p1 = new Promise((resolve,reject) => {
    console.log("prmis 1 exution");

    setTimeout(()=>{
        console.log("promise p1 execute after 3 second");       
        resolve(5) 
    },3000)
    
})
p1.then((value)=>{
    console.log(value);
    
})

let p2 = new Promise((resolve,reject) => {
    console.log("prmis 2 exution");

    setTimeout(()=>{    
        reject() 
    },3000)
    
})
p2.catch((error)=>{
    console.log("soory sir to loaded the prmoise",);
    
})
