"use strict";

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
// This funcition only returns the elements whose first position is equal to the current one
//which will not be the case for the duplicate elements
  
    function takeOutOfDuplicates(arr){
        const newArr = arr.filter(function(item, index, arr) {
        return arr.indexOf(item) === index;
        });
        return newArr;
    }
         
         
takeOutOfDuplicates(letters);
console.log(takeOutOfDuplicates(letters));

// Or by simply using Sets, and spread operator which is a very short one-line solution
let unique =  [...new Set(letters)];
console.log(unique);