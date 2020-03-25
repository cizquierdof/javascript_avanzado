// 1. Pide por pantalla 5 números
// 2. Mostrar el array por consola
// 3. Mostrar el array y sus índices en una lista <ul>
// 4. Mostrar por pantalla algo así como "La lista tiene X elementos"
// 5. Pedir un valor al usuario y decir si está o no está.
// 6. Mostrar por consola el array en orden inverso
// 7. Ordenar el array y mostrarlo por consola

const arrayNumeros=[];
for(i=0;i<5;i++){
arrayNumeros[i]=parseInt(prompt("Introduce el número "+i+": "));
}

arrayNumeros.forEach((elemento) => {
    console.log(elemento );});

//alert("El número de elementos del array es: "+arrayNumeros.length);
let resp='El número de elementos del array es: '+arrayNumeros.length;
document.getElementById("respuesta").innerHTML=resp;

const numero=parseInt(prompt("Introduce un número: "));
if(arrayNumeros.includes(numero)){
    document.getElementById("respuesta2").innerHTML='El número está en el array';

} else{
    document.getElementById("respuesta2").innerHTML="El número no está en el array";
}
console.log("el array en orden inverso es: "+arrayNumeros.reverse());
console.log("el array en ordenado es: "+arrayNumeros.sort());

