"use strict";

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

  const newUl = document.createElement("ul");
  document.body.appendChild(newUl);
  
  function addListItem(hobby){
     const listItem = document.createElement("li");
     listItem.innerHTML = hobby;
     newUl.appendChild(listItem);
  }

 myHobbies.map(addListItem)
