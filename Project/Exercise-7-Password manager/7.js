let num = "0123456789";
let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special = "/\\|@#$%^&*-,";


// for the manually entered password
function displayEnteredPassword() {
    let pass = document.getElementById("pass").value;
    if (pass) {
        display(pass);
    }
}
document.addEventListener("DOMContentLoaded", displayEnteredPassword);
document.getElementById("pass").addEventListener("change", displayEnteredPassword);


// for the strong button entered password
let strong = document.getElementById("strong");
strong.addEventListener("click", (e) => {
    let allChars = num + alpha + special;
    let len = parseInt(prompt("Enter the length of the password:"));
    let pass1 = "";
    
    for (let index = 0; index < len; index++) {
        pass1 += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    display(pass1);
});

// for the medium button entered password
let medium = document.getElementById("medium");
medium.addEventListener("click", (e) => {
    let allChars = num + alpha;
    let len = parseInt(prompt("Enter the length of the password:"));
    let pass1 = "";
    
    for (let index = 0; index < len; index++) {
        pass1 += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    display(pass1);
});

// for the funny button entered password
let funny = document.getElementById("Funny");
funny.addEventListener("click", (e) => {
    let funnypassword = [
        "Password",
        "Enter the Password",
        "Enter correct Password",
        "Wrong password",
        "new password",
        "ineedapassword",
        "Banana",
        "ninja",
        "marvel",
        "movie",
        "cheesypizza",
        "donutsandcoffee",
        " spicyjalapeno",
        "sweetchocolate",
        "gameofthrones",
        "breakingbad",
        " theoffice",
        " friends",
        "levelup123",
        "gamertag4life",
        "controllermaster",
        "xboxninja",
        "click",
        "mummy",
        "papa"
    ];

    let pass1 = funnypassword[Math.floor(Math.random() * funnypassword.length)];
    display(pass1);
});


// for the display password
function display(pass1) {
    let card = document.getElementById("password-card");

    if (!card) {  // If the card doesn't exist, create a new one
        card = document.createElement("div");
        card.id = "password-card";  // Assign an ID to the card
        card.style.width = "auto";
        card.style.height = "auto";  // Adjust height automatically
        card.style.border = "2px solid rgb(180, 83, 83)";
        card.style.color = "rgb(7, 248, 7)";
        card.style.paddingLeft = "50px";
        card.style.fontSize = "large";
        card.style.margin = "2rem 0px 0px 33rem";

        document.getElementById("show").appendChild(card);
    }

    // Append the new password to the existing content
    let passwordLine = document.createElement("h4");
    passwordLine.textContent = `Password = ${pass1}`;
    card.appendChild(passwordLine);

    localStorage.setItem("Password",pass1)
    sessionStorage.setItem("Password",pass1)
}
