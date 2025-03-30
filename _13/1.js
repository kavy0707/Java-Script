async function kavy() {
    let rajkotweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 degre");
        }, 2000);
    });

    let barodaweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 degre");
        }, 3000);
    });

    // try {
    //     let rajkot = await rajkotweather;
    //     console.log("Rajkot weather:", rajkot);

    //     let baroda = await barodaweather;
    //     console.log("Baroda weather:", baroda);
    // } catch (error) {
    //     console.error("Error fetching weather:", error);
    // }

    console.log("fetching rajkot weather....");
    let rajkotw = await rajkotweather;
    console.log("feached rajkot weather",rajkotw);
    // document.write("feached rajkot weather",rajkotw);
    
    console.log("fetching baroda weather....");
    let barodaw = await barodaweather;
    console.log("feached baroda weather",barodaw);
    // document.write("feached baroda weather:",barodaw);

    return [rajkotw,barodaw];
}

const v = async ()=>{
    console.log("i ama vivek i  waiting");
    
}

let  Main = async() => {
    console.log("This is main function:");

    let a = await kavy();
    let b = await v();
    
}

Main()

// try and catch block//
// try {
//     let p3 = new Proscsmise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("promise 3");
//             reject(new Error("hey"))
//         }, 7000)
//     })


// } catch (error) {
//     alert("promise 3 not loaded");
//     console.log("promise 3 not loaded");

// }

