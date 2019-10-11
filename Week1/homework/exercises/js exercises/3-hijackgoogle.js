"use strict";
// complete

function hijackGoogleLogo(id, source){
   const elementToBeChanged = document.getElementById(id);
   elementToBeChanged.src = source;
   elementToBeChanged.srcset = source;
}

hijackGoogleLogo("hplogo", "https://www.hackyourfuture.dk/static/logo-dark.svg");
