let date = document.getElementById("date")
let hoursSelect = document.getElementById("hours");
let minutesSelect = document.getElementById("minutes");
let secondsSelect = document.getElementById("seconds");


// for the console 
const print=()=>{    
    let d = new Date();
    console.log(d.toDateString() , d.toTimeString());
}

setInterval(() => {
    console.clear();
    print()    
}, 1000);


// for the set alaram
setInterval(() => {
    let now = new Date();
    date.innerHTML = `<b>Time </b>= ${now.toDateString()} , ${now.toTimeString()}`;
    

    let currentHour = now.getHours(); // Convert to 12-hour format
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    if (
        parseInt(hoursSelect.value) == currentHour &&
        parseInt(minutesSelect.value) == currentMinute &&
        parseInt(secondsSelect.value) == currentSecond
    ) {
        alert("Alarm on!");
    }
}, 1000);


// function play() {
//     var audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
//     audio.muted = true; // Start muted
//     audio.play().then(() => {
//         audio.muted = false; // Unmute after starting
//     }).catch(error => {
//         console.log("Autoplay prevented:", error);
//     });
// }

// setTimeout(() => {
//     play()
// }, 5000);
