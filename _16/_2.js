// local storage

localStorage.setItem("name","kavy")
localStorage.setItem("1","2")

let key = prompt("enter the key:")
let value = prompt("enter the value:")

localStorage.setItem(`${key}`,`${value}`)

console.log(`value of the key ${key} is ${value}`);
console.log(localStorage.getItem(`${key}`));

if (key == "red") {
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear()
}