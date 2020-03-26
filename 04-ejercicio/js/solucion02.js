/**
 * # Ejercicio Arrays

1. Pide por pantalla 5 números
2. Mostrar el array por consola
3. Mostrar el array y sus índices en una lista <ul>
4. Mostrar por pantalla algo así como "La lista tiene X elementos"
5. Pedir un valor al usuario y decir si está o no está.
 * 6. Mostrar el array en orden invers

7. Ordenar el array y mostrarlo
 * 
 */


let a = new Array();
for (let i = 0; i < 5; i++) {
    let elemento = prompt("Introduce numero " + i + ": ");
    a.push(parseInt(elemento));
}

console.log(a);

document.write("<ul>");


// Posible implementación de forEach
// function forEach(callback) {
//     this.array;
//     for (let index = 0; index < this.array.length; index++) {
//         callback(this.array[i], i, this.array);
//     }
// }


// Posible implementación de sort
// funtion sort(callback = (a,b) => b-a){
//     [...]
//     if (callback(array[i])>-1) {

//     } else {

//     }
//     [...]
// }

a.forEach(
    (elemento, index) => {
        document.write("<li> Indice: " + index + " Valor: " + elemento + "</li>");
    }
)

document.write("</ul>");

document.write("La lista tiene " + a.length + " elementos.");

let valorUsu1 = prompt("Introduce valor a buscar: ");
let valorUsu = parseInt(valorUsu1);
document.write("<hr/>");
const valoresEncontrados = a.filter(item => item == valorUsu);

// Comprobamos si está el valor
if (valoresEncontrados.length==0){
    document.write("No está el valor");
} else {
    document.write("El valor " + valorUsu + " está "+ valoresEncontrados.length+" veces");
}

console.log(typeof (valorUsu));
//document.write("El índice del elemento a buscar es ", a.indexOf(valorUsu,1));
document.write("<hr/>");
document.write("Array: " + a);
document.write("<hr/>");
document.write("Array en orden inverso: " + a.reverse());
document.write("<hr/>");

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

document.write("Array ordenado: " + a.sort(compare));
// Otra forma de pasar la misma función
//document.write("Array ordenado: " + a.sort((foo, bar) => compare(foo, bar)));
document.write("<hr/>");
document.write("Array ordenado2: " + a.sort((a, b) => a - b));

