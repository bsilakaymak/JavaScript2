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
  const ulEl = document.querySelector("ul");
//   ulEl.classList.add("hobbies-list");
  
  function addListItem(hobby){
     const listItem = document.createElement("li");
     listItem.innerHTML = hobby;
     ulEl.appendChild(listItem);
  }

 myHobbies.map(addListItem)
