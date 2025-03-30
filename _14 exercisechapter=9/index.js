async function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve("Script successfully loaded: " + src);
        };

        document.head.append(script);
    });
}

// problem no 1 
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// a.then((value) => {
//     console.log(value);
// })


// problem no 2:
// const main1 = async () => {

//     console.log(new Date());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date());

// }
// main1()


// problem 3 
// let kavy = async() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("hey error"));
//         }, 3000);
//     })
// }

// let main1 = async () => {
//     console.log("jay ho1");
//     try {
//         let p1 = await kavy()        
//     } catch (error) {
//         console.log("this error is handled");        
//     }
//     console.log("jay ho2");    
// }
// main1()


// problem 4 /
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("value 1")
        }, 1000);
    })
}

let p2 = async () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2")
            // reject(new Error("hey error"));
        }, 2000);
    })
}

let p3 = async () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3")
            // reject(new Error("hey error"));
        }, 3000);
    })
}

let a = async () => {
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    // console.log(a1);
    // console.log(a2);
    // console.log(a3);


    let a123 = ([a1,a2,a3])
    console.log(a123);
}
a()
console.log(new Date().getSeconds());

