"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback){

  //This part creates an array with given start and stop indexes.

  let numbersArray = [];
  for(let i = startIndex; i <= stopIndex; i++){
    numbersArray.push(i);
  }

  //This part will call callbacks if condition is met for each array element.

  numbersArray.forEach(number => {
  if(number % 3 === 0){
    threeCallback();} 
  if(number % 5 === 0){
    fiveCallback();}})
}


// functions to call,to pass as an argument

function sayThree(){
  console.log("The number is divisible by 3");
}
function sayFive(){
  console.log("The number is divisible by 5");
}

// This is just to see the distinction between different examples in console.

const separator = "<---------------->"


//Function calls with different indexes

threeFive(10, 15, sayThree, sayFive);
console.log(separator);

threeFive(1, 7, sayThree, sayFive);
console.log(separator);

threeFive(53, 62, sayThree, sayFive);