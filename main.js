// flowchart TD
//    A[INIZIO] --> B[nascondi il menu principale <1000px]
//    B --> C[mostra click l'hamburger  menu]
//    C --> D[apri l'hamburgher menu]
//    D --> E[chiudi l'hamburgher menu]
//    E --> P[FINE]


let open = document.querySelector(".header-right > a");
let close = document.querySelector(".hamburger-menu > .close");

open.addEventListener("click", function(){
  let expand = document.querySelector(".hamburger-menu");
  expand.style.display = "block";
})
close.addEventListener("click", function(){
  let expand = document.querySelector(".hamburger-menu");
  expand.style.display = "none";
})
