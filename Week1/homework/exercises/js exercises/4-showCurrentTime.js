"use strict";

//complete
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.setAttribute("id", "time");
const timeDiv = document.getElementById("time");

function addZero(i){
   if(i < 10){
       i = "0" + i;
   }
   return i;
}
const showTime = function(){
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    timeDiv.innerHTML = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds);
}
setInterval(showTime, 1000);