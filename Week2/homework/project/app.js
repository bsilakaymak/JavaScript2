"use strict";
const arrowUpEl = document.querySelector("#arrow-up");
const arrowDownEl = document.querySelector("#arrow-down");
const minutesEl = document.querySelector("#minutes");
const screenMinutesEl = document.querySelector(".screen-minutes");
const playEl = document.querySelector("#play");
const pauseEl = document.querySelector("#pause");

let session = 1500;
let countingDown = false;
let timer;
function format(x){
    if(x < 10){
       return x = "0" + x;
    }else 
       return x
}
function showMins(){
    minutesEl.innerHTML = Math.floor(session / 60);
    let seconds = session % 60 ;
    screenMinutesEl.innerHTML = format(Math.floor(session / 60)) + ":"+ format(seconds);
}
showMins();
function increaseMinutes(){
    if(countingDown !== true){
        session += 60;
        showMins()
    }else{
        return session;
    }
    if(session >= 3540){
        session = 3540;
    }
    
}
function decreaseMinutes(){
    if(countingDown !== true){
    session -= 60;
    }else{
        return session;
    }
    if(session <= 0){
        session = 0;
        minutesEl.innerHTML = 0;
        countingDown = false;
    }
    showMins();
}
function startCountDown(){
    timer = setInterval(() => {
            session--
            showMins();
            minutesEl.innerHTML = 0;
            if(session <= 0){
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
}

function stopCountDown(){
    clearInterval(timer);
    countingDown = false;
}

arrowUpEl.addEventListener("click", increaseMinutes);
arrowDownEl.addEventListener("click", decreaseMinutes);
playEl.addEventListener("click", countDown);
pauseEl.addEventListener("click", stopCountDown)
