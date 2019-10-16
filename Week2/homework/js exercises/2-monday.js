"use strict";
const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

  function duration(myArray){
    let newArray = [];
    newArray.push(myArray.duration);
    return newArray;
  }
  function perHourRate(item){
    return item * 25 / 60 ;
  }
  function add(x, y){
    return x + y;
  }
  const result = mondayTasks.map(duration).map(perHourRate).reduce(add, 0);
  console.log(result);



  

  