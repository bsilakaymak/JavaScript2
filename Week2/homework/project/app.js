"use strict";
const arrowUpEl = document.querySelector("#arrow-up");
const arrowDownEl = document.querySelector("#arrow-down");
const minutesEl = document.querySelector("#minutes");
const screenMinutesEl = document.querySelector(".screen-minutes");
const playEl = document.querySelector("#play");
const pauseEl = document.querySelector("#pause");

let sessionSeconds = 1500;
let defaultMin = 1500;
let countingDown = false;
let timer;
function format(x){
    if(x < 10){
       return x = "0" + x;
    }else 
       return x
}
function showMins(){
    minutesEl.innerHTML = Math.floor(defaultMin / 60);
    let seconds = sessionSeconds % 60 ;
    screenMinutesEl.innerHTML = format(Math.floor(sessionSeconds / 60)) + ":"+ format(seconds);
}
showMins();
function increaseMinutes(){
    if(countingDown !== true){
        defaultMin += 60;
        sessionSeconds = defaultMin;
        showMins()
    }else{
        return sessionSeconds;
    }
    if(defaultMin >= 3540){
        defaultMin = 3540;
        sessionSeconds = 3600;
    }
    
}
function decreaseMinutes(){
    if(countingDown !== true){
    defaultMin -= 60;
    sessionSeconds = defaultMin
    }else{
        return sessionSeconds;
    }
    if(sessionSeconds <= 0){
        sessionSeconds = 0;
        defaultMin = 0;
        countingDown = false;
    }
    showMins();
}
function startCountDown(){
    timer = setInterval(() => {
            sessionSeconds--
            showMins();
            // minutesEl.innerHTML = 0;
            if(sessionSeconds <= 0){
               screenMinutesEl.innerHTML = "Time's up!"
               clearInterval(timer);
               countingDown = false;
            }
    }, 1000);
}
function countDown(){
    if (countingDown === false){
        startCountDown();
        countingDown = true;
    }
    defaultMin = 1500;
}

function stopCountDown(){
    clearInterval(timer);
    countingDown = false;
}

arrowUpEl.addEventListener("click", increaseMinutes);
arrowDownEl.addEventListener("click", decreaseMinutes);
playEl.addEventListener("click", countDown);
pauseEl.addEventListener("click", stopCountDown)
