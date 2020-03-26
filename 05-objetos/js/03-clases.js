// Clase PERSONA

class Persona {
    constructor(nombre, age) {  
        this.nombre = nombre;
        this.age = age;
    }

    esMayorDeEdad() {
        return this.age >= 18;
    }

}

const alfonso = new Persona("Alfonso", 45);

// incluso si no existe una propiedad se la puedo añadir dinámicamente
alfonso.profesion = "informático";

console.log(alfonso);
console.log(alfonso.esMayorDeEdad());

// HERENCIA

class Alumno extends Persona {
    constructor(nombre, edad, clases) {
        super(nombre, edad);
        this.clases = clases;
    }

    numeroDeClases() {
        return this.clases.length;
    }
}

const laura = new Alumno("Laura", 12, ["matematicas", "literatura", "naturales"]);

console.log(laura);

// puedo ejecutar métodos propios y del padre
laura.numeroDeClases();
laura.esMayorDeEdad();




