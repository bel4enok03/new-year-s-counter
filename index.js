function newYearCountdown (){
    const newYearDate = new Date("January 01, 2023 00:00");
    const now = new Date();
    const diff = newYearDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hour").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".second").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".second").textContent = 0;
        clearInterval(timerId);
        happyNewYear();
    
    }
}

let timerId = setInterval(newYearCountdown,1000);

function happyNewYear (){
    const heading = document.querySelector("h1");
    heading.textContent = "С НОВЫМ ГОДОМ!!!";
    heading.classList.add(".red");
}

// const btn = document.querySelector ("#btn");
// btn.addEventListener("click", function(){
//     document.querySelector("#myAudio").play();
// })

const btn = document.querySelector("#btn");
const audio = document.querySelector("#myAudio");

btn.addEventListener ("click", function (){
    if (audio.paused){
        audio.play();
    }
    else {
        audio.pause();
    }
})
