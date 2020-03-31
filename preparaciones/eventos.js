// Los eventos se ejecutan cuando alguien hace algo

const midiv = document.querySelector("#midiv");
const miboton = document.querySelector("#miboton");

console.log(miboton);

miboton.addEventListener("click", () => console.log("me has dado click"));


// Eventos de ratón 

// click

// mouseover

// mouseout

// focus

// blur

// keydown

// keypress

// keyup

//load


// El operador this en los eventos
miboton.addEventListener("click", d => console.log(this));