
const arrayNumeros = [];
for (i = 0; i < 5; i++) {
    arrayNumeros[i] = parseInt(prompt("Introduce el número " + i + ": "));
}
console.log("El array es: " + arrayNumeros.toString());
arrayNumeros.forEach((elemento) => {
    console.log(elemento);
});


//alert("El número de elementos del array es: "+arrayNumeros.length);
let resp = 'El número de elementos del array es: ' + arrayNumeros.length;
document.getElementById("respuesta").innerHTML = resp;

const numero = parseInt(prompt("Introduce un número: "));
if (arrayNumeros.includes(numero)) {
    document.getElementById("respuesta2").innerHTML = 'El ' + numero + ' está en el array';

} else {
    document.getElementById("respuesta2").innerHTML = 'El ' + numero + ' no está en el array';
}
console.log("el array en orden inverso es: " , arrayNumeros.reverse());
console.log("el array ordenado es: " , arrayNumeros.sort((a, b)=>a-b));