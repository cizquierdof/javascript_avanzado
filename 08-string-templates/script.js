// String Templates (ES6)

const helloworld = (nombre, apellido) => {
    //console.log("Bienvenido "+nombre+" "+apellido+" a mi programa");
    // Convertimos la línea anterior a modo template
    // En lugar de comilla o doble comilla se usa el acento abierto o backtick
    console.log(`Bienvenido ${nombre} ${apellido} a mi programa`);
    //fetch(`http://localhost/api/pizzas/${id}`); axios
}

helloworld("Alfonso", "Tienda");