// let p = fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13",Option)
let p = fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13",Option)
p.then((responce)=>{
    console.log(responce.status)
    console.log(responce.ok)
    console.log(responce.headers)
    return responce.json()
}).then((responce) =>{
    console.log(responce);
})

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
