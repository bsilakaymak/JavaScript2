"use strict";
const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];

  function getAges(myArray){
    return myArray.age;
  }
  function addAll(x ,y){
    return x + y;
  }
  function calcCollectiveAge(myArray, callback){
      const ageArray = myArray.map(getAges);
      return ageArray.reduce(callback);
  }
  const hyfCollectiveAge = calcCollectiveAge(hackYourFutureMembers, addAll)
  console.log(hyfCollectiveAge)

  