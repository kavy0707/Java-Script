
// let navElement = document.getElementsByTagName("nav")[0];
// navElement.style.backgroundColor = "red";


let firstElement = document.firstElementChild;
console.log(firstElement); // This should log the <html> element

let lastlastElement = document.lastElementChild;
console.log(lastlastElement); // This should log the <html> element

let fElement = document.firstElement;
console.log(fElement); // This should log the <html> element

let lElement = document.lastElement;
console.log(lElement); // This should log the <html> element

// let span = document.getElementsByTagName("li")[0]
// span.style.backgroundColor="green"

document.getElementsByTagName("nav")[0].firstElementChild.style.backgroundColor = "pink"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.backgroundColor = "pink"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach( element => {
    element.style.backgroundColor="yellow"
});