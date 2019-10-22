"use strict";
function createBase(x) {
  return function(y){
      return x + y
    }
}
  
const addSix = createBase(6);

addSix(9); // output is 15
addSix(18); // output is 24
addSix(30); // output is 36

