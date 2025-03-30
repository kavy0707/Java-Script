let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("promise 1");
        resolve("value 1")
    },2000)
})


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("primise 2")
        reject(new Error("error coming"));
      
    },1000)
})

// p1.then((value)=>{
//     console.log("promise p1 value resolve",value);
    
// })

// p2.then((error)=>{
//     console.log("promise p2 value reject",error);
    
// })

let promise_all = Promise.all([p1,p2])   // if error coming not print any thing
promise_all.then(()=>{
    console.log("promise_all:" , promise_all);

})

let promise_allsettle = Promise.allSettled([p1,p2])   // if error coming error and valur both print
promise_allsettle.then(()=>{ 
    console.log("promise_allsettle: " ,promise_allsettle);

})


let promise_race = Promise.race([p1, p2]);
promise_race.then((value) => { 
    console.log("promise_race:", value);
});



let promise_any = Promise.any([p1, p2]);  // which has lowest second if error then not see the error next promise lowest second execute
promise_any.then((value) => { 
    console.log("promise_any:", value);
});

