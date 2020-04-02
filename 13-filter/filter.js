const  arraynumeros = [6, 3, 89, 67, 5, 26, 32, 21, 90];

// filter es una operaciónn de programación funcional 
// filter no modifica el array original, esto es, no  modifica arraynumeros

// filter recibe una función que la va a ejecutar en cada elemento
// por lo tanto recibe como parámetro elemento

// tiene que devolver true si queremos que ese elemento aparezca en arrayfiltrado

const n = 10;

const arrayfiltrado = arraynumeros.filter(
    (e) => {
        // devolver true si queremos que el número aparezca en el resultado
        return e>n;
    }
)

console.log("arraynumeros",arraynumeros);
console.log("arrayfiltrado",arrayfiltrado);

const arraypares = arraynumeros.filter(
    (e) => {
        return e%2===0;
    }

)

console.log(arraypares);

const pizzas = [
    {
        nombre: "Margarita",
     id: 78
    },
    {
        nombre: "Tejana",
     id: 79
    },
    {
        nombre: "Barbacoa",
     id: 80
    },
];



const q = "Mar";

const pizzasfiltered = pizzas.filter(
    (pizza) => {
        return pizza.nombre.toLowerCase().includes(q.toLowerCase());
    }
)

console.log("pizzas", pizzas);
console.log("pizzasfiltered", pizzasfiltered);