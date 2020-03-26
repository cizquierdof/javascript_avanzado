'use strict'
/*
1. Pida 6 numeros por pantalla
2. Mostrar por consola y pantalla
3. Ordenarlo y mostrarlo
4.I nvertir su orden y mostrarlo
5. Cuantos elementos tiene el array
6. Busqueda de un elemntos y su indice
*/

alert("El primer paso , es introducir 6 numeros");

let num = [];
for (let i = 0; i < 6; i++) {
    let l = parseInt(prompt("dame un numero"));
    num.push(l);
}

alert("El segundo paso , es mostrar el array por consola y por pantalla");
// Muestra el array por consola
console.log(num);
document.write("<h1>Este es mi array de numeros</h1>");
document.write("<ul>");
num.forEach(
    (element, index) => {
        document.write("<li>" + "[" + index + "]" + " ; " + element + "</li>");
    }
)

document.write("</ul>");

// Mostramos el número de elementos de la lista
document.write("<hr>");
document.write("La lista tiene " + num.length + " elementos");
document.write("<br><hr><br>");


alert("El tercer paso es ponerlo en orden reverso y mostrarlo");
let reversed = num.reverse();
console.log(num);
document.write("<h1>El array visto en orden inverso</h1>");
document.write("<ul>");
num.forEach((element, index) => {
    document.write("<li>" + "[" + index + "]" + " ; " + element + "</li>");
})
document.write("</ul>");

document.write("<br><hr><br>");



alert("El cuarto paso es ordenarlo ascd y descd mostrarlo");
document.write("<h1>El array de numeros visto orden ascendente</h1>");
num.sort(function (a, b) {
    return a - b;
});
document.write("<strong>" + "[" + num + "]" + "</strong>");



document.write("<h1>El array de numeros visto orden descendente</h1>");
num.sort(function (a, b) {
    return b - a;
});

document.write("<strong>" + "[" + num + "]" + "</strong>");

document.write("<br><hr><br>");

alert("El quinto paso es saber el nuemro de elemntos del array");
document.write("<h1>El numero de elementos de mi Array</h1>");
document.write("<h2><strong>" + "Tengo un total de: " + num.length + " elementos" + "</strong></h2>");

document.write("<br><hr><br>");

alert("l sexto paso es si un numero facilitado por el usuario esta en el array");

let n = parseInt(prompt("dame un numero para comprobar si esta en el array"));
if (num.indexOf(n) != -1) {
    document.write(num[num.indexOf(n)] + " Si esta en el array");
    document.write("<br>");
    document.write("[" + num.indexOf(n) + "]" + " Este es su indice")
} else {
    alert("Ese numero no está en el array");
}

let m = prompt("dame un numero para comprobar si esta en el array");
if (num.includes(m) == true) {
    num.indexOf(m) ;
    document.write(num[num.indexOf(m)] + " Si esta en el array (probado con includes)");
    document.write("<br>");
    document.write("[" + num.indexOf(m) + "]" + " Este es su indice")
} else {
    alert("Ese numero no está en el array (probado con includes()");
}

document.write("<br><hr><br>");

