// Tipos básicos en javascript
console.log("Tipos básicos (primitivos)");

const un_string = "Mi string"
console.log(typeof(un_string));

const un_number = 23;
console.log(typeof(un_number));

const un_boolean = true;
console.log(typeof(un_boolean));

const un_undefined = undefined;
console.log(un_undefined);

const un_nulo = null;
console.log(un_nulo);

// Podemos definir un objeto directamente en json
const alfonso = {
    nombre: "Alfonso",
    edad: 45
};

console.log("Alfonso", alfonso);

// Podemos acceder a sus propiedades con un punto
console.log("nombre", alfonso.nombre);
console.log("edad", alfonso.edad);

// Definición de métodos en javascript
const pepe = {
    nombre: "Pepe",
    apellido: "Martinez",
    edad: 57,
    esMayorDeEdad: function() { return this.edad >= 18 }
}

// El primero me fallará porque el this apunta al objeto window
let juan = {
    nombre: "Juan",
    apellido: "Martinez",
    edad: 57,
    esMayorDeEdad: function() { return this.edad >= 18 },
    nombreCompleto: this.nombre + " " + this.apellido
}

console.log(juan);
console.log(juan.nombreCompleto);

// Este no me fallará porque this apunta a pepe
juan = {
    nombre: "Juan",
    apellido: "Martinez",
    edad: 57,
    esMayorDeEdad: function() { return this.edad >= 18 },
    nombreCompleto: function (){return this.nombre + " " + this.apellido}
}

console.log(juan);
console.log(juan.nombreCompleto());

// Podemos cambiar valores sencillamente asignándolos
juan.apellido = "Pérez";
console.log(juan);

// Podemos cambiar , añadir y borrar propiedades de un objeto, aunque sea una constante
// Recordemos que la constante es un puntero, no cambia
// Cambiar
pepe.apellido = "González";


// Añadir
pepe.sexo = "lo que le dejan";

// Eliminar 
delete pepe.apellido;
// pepe.apellido = undefined;

if (pepe.apellido) 
    console.log(apellido);
    else
    console.log("no tiene apellido")


console.log(pepe);

// Los objetos de Javascript son punteros , ojo con la asignación
// Con esto podríamos pensar que estamos creando un gemelo
const javier = juan;

// le cambiamos el nombre a javier
javier.nombre = "Javier";

// pero lo que hemos hecho realmente es crear un segundo puntero a la misma persona
console.log("juan", juan);
console.log("javier", javier);

// Puedo acceder a las propiedades con el punto o con llaves

const maria = {
    nombre: "Maria",
    apellido: "Félix",
    edad: 70,
    esMayorDeEdad: function() { return this.edad >= 18 }
}

console.log("maria.nombre", maria.nombre);
console.log("maria['nombre']", maria["nombre"]);
const nombre = "nombre";
console.log("maria[var]", maria[nombre]);





