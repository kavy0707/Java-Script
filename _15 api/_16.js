// 1. use the option and print json data


// let Option = {
//     method: "post",
//     headers: {
//         "content-type": "application/json"
//     },

//     body: JSON.stringify({
//         title: 'Kavy',
//         body: 'hey i am kavy',
//         userId: 1,
//     }),
// }

//  fetch("https://jsonplaceholder.typicode.com/posts", Option)
//     .then(response => response.json())
//     .then(json => console.log(json))



// 2. using function

// const createtodo = async () => {
//     let Option = {
//         method: "post",
//         headers: {
//             "content-type": "application/json"
//         },

//         body: JSON.stringify({
//             title: 'Kavy',
//             body: 'hey i am kavy',
//             userId: 1,
//         }),
//     }

//     let P = await fetch("https://jsonplaceholder.typicode.com/posts", Option)
//     let responce = await P.json()
//     return responce
// }

// const mainfun = async () => {
//     let todo = await createtodo()
//     console.log(todo);

// }

// mainfun()


// 3. using function 

const createtodo = async (body1) => {
    let Option = {
        method: "post",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(body1),
    }

    let P = await fetch("https://jsonplaceholder.typicode.com/posts", Option)
    let responce = await P.json()
    return responce
}

const gettodo = async (id)  => {
    let responce = await fetch('https://jsonplaceholder.typicode.com/todos/1' + id)
    let r = await responce.json
    return r
}
const mainfun = async () => {
    let body1 = {
        title: 'Kavy',
        body: 'hey i am kavy',
        userId: 1,
    }
    let todo = await createtodo(body1)
    console.log(todo);
    console.log(await gettodo(544));   // upon this id awailable or not?
    
    
}

mainfun()