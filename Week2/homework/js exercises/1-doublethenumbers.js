"use strict";
function doubleEvenNumbers(myArray){
    function isItEven(item){
        if (item % 2 === 0)
        return item
    }
    function doubleIt(item){
        return item * 2
    }
    return myArray.filter(isItEven).map(doubleIt);
  
}

const myNewArray = [1, 2, 3, 4, 5, 6];

console.log(doubleEvenNumbers(myNewArray));