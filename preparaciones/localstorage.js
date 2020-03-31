

// comprobar si el navegador es compatible

if (typeof(Storage)!=="undefined") {
    console.log("compatible")
}

// Guardar datos
//localStorage.setItem("minombre", "Alfonso");

// comprobar en Application -> localstorage

// Recuperar datos
console.log(localStorage.getItem("minombre"));

// Guardar objeto
const usuario = {
    nombre: "Juan",
    email: "juan@hotmail.com"
}


localStorage.setItem("usuario", JSON.stringify(usuario));
const usuario_copia = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario_copia);

// Borrar elemento
localStorage.removeItem("usuario");

/**
 * Localstorage no caduca
 * 
 * SessionStorage trabaja como indica su nombre en la sesión del navegador, 
 * es decir que mientras que la sesión no expire los datos permanecen guardados ahí. 
 * No expira mientras estamos navegando de manera que podemos cerrar la página y 
 * navegar por Internet y cuando volvamos los datos serán accesibles.
 * Sí que expira cuando cerramos el navegador, o pasamos un tiempo sin hacer nada, 
 * el tiempo de expiración de las sesiones lo establece el propio navegador…
 */

