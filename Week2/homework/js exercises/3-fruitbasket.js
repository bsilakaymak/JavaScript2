"use strict";
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function getRidOfLemons(item){
  if(item !== "Lemon")
  return item;
}

const newBasket = fruitBasket.filter(getRidOfLemons);  
console.log("My mom bought me a fruit basket, containing " + newBasket + " !")
