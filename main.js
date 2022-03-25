//flowchart TD
//A[INIZIO] --> B[selezionare la classe del menu]
//B -->|open| C[selezionare la classe hamburger-menu]
//C -->|close| D[assegna al click la funzione open>expand]
//D -->|open>expand| E[seleziona l'hamburger-menu]
//E -->|expand change| F[cambia stile display=block]
//F -->|expand change| G[assegna al click la funzione close>expand]
//G -->|close>expand| H[seleziona l'hamburger-menu]
//H -->|expand change| I[cambia stile display=none]
//I --> Z[FINE]


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
