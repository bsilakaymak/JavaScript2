"use strict";
/*I know what I did here is very messy and unsophisticated way of doing this, but I still
struggle with constructing the right function :(  */

const books = [
    {
      title: 'Joko’s Anniversary',
      author: 'Roland Topor',
      alreadyRead: true,
    },
    { 
      title: 'Another Birth: Let Us Believe In The Beginning Of The Cold Season',
      author: 'Forough Farrokhzad',
      alreadyRead: false,  
    },
    {
      title: 'Accidental Death of an Anarchist',
      author: 'Dario Fo',
      alreadyRead: true,
    }
  ];
  
   const container = document.querySelector(".container");
   
   const ulEl = document.createElement("ul");
   container.appendChild(ulEl);
   
   const firstBook = document.createElement("li");
   ulEl.appendChild(firstBook);

   const secondBook = document.createElement("li");
   ulEl.appendChild(secondBook);

   const thirdBook = document.createElement("li");
   ulEl.appendChild(thirdBook);

   function createNewElement(tag, name, text, parent){
    const el = document.createElement(tag);
    el.classList.add(name);
    el.innerHTML = text;
    parent.appendChild(el);
    return el;
   }
 
     const titleTextFirst = books[0].title;
     const titleTextSecond = books[1].title;
     const titleTextThird = books[2].title;
     const authorNameFirst = books[0].author;
     const authorNameSecond = books[1].author;
     const authorNameThird = books[2].author;
     createNewElement("p", "book-title", titleTextFirst, firstBook);
     createNewElement("p", "book-title", titleTextSecond, secondBook);
     createNewElement("p", "book-title", titleTextThird, thirdBook);
     createNewElement("p", "author-name", authorNameFirst, firstBook);
     createNewElement("p", "author-name", authorNameSecond, secondBook);
     createNewElement("p", "author-name", authorNameThird, thirdBook);
     const imgFirst = new Image();
     imgFirst.src = "joko.jpg";
     firstBook.appendChild(imgFirst); 

     const imgSecond = new Image();
     imgSecond.src = "furug.jpg";
     secondBook.appendChild(imgSecond); 

     const imgThird = new Image();
     imgThird.src = "dariofo.jpg";
     thirdBook.appendChild(imgThird); 

     const liEl = document.getElementsByClassName("book-title");
   

    for(let i = 0; i < books.length; i++){
      if(books[i].alreadyRead === false){
            liEl[i].style.color = "red";
        }else {liEl[i].style.color = "green";}
    }
  
  




  