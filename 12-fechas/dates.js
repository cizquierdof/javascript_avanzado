console.log("fechas");

// Cuando creo un elemento fecha se inicia con la 
// fecha del sistema
const fechaDeHoy = new Date();
console.log(fechaDeHoy);

const options = {
    timeZone: 'America/New_York'
};

const muestraMetodos = `
    Año:    ${fechaDeHoy.getFullYear()}
    Mes:    ${fechaDeHoy.getMonth() + 1}
    Fecha:  ${fechaDeHoy.toLocaleDateString()}
    Hora:   ${fechaDeHoy.toLocaleTimeString("es-ES")}
    Hora ingles:   ${fechaDeHoy.toLocaleTimeString("en-US")}
    Hora NYC:   ${fechaDeHoy.toLocaleTimeString("es-ES", options)}
    Hora UTCString: ${fechaDeHoy.toUTCString()}
    Hora ISO String: ${fechaDeHoy.toISOString()}
`;

// Crear una fecha
const miFechaDeNacimiento =
    new Date(1974, 6 - 1, 6, 6, 6, 6, 6);

const muestraMetodosNacimiento = `
    Año:    ${miFechaDeNacimiento.getFullYear()}
    Mes:    ${miFechaDeNacimiento.getMonth() + 1}
    Fecha:  ${miFechaDeNacimiento.toLocaleDateString()}
    Hora:   ${miFechaDeNacimiento.toLocaleTimeString("es-ES")}
    Hora ingles:   ${miFechaDeNacimiento.toLocaleTimeString("en-US")}
    Hora NYC:   ${miFechaDeNacimiento.toLocaleTimeString("es-ES", options)}
    Hora UTCString: ${miFechaDeNacimiento.toUTCString()}
    Hora ISO String: ${miFechaDeNacimiento.toISOString()}
`;



console.log(muestraMetodos);
console.log(muestraMetodosNacimiento);

// Parse es un método estático
// parse nos devuelve la fecha en los milisegundos que 
// han transcurrido desde el 1.1.1970
const fechaComentario = 
    new Date(Date.parse("2020-03-15T19:22:30.920+0000"));



const muestraMetodosComentario = `
    Año:    ${fechaComentario.getFullYear()}
    Mes:    ${fechaComentario.getMonth() + 1}
    Fecha:  ${fechaComentario.toLocaleDateString()}
    Hora:   ${fechaComentario.toLocaleTimeString("es-ES")}
    Hora ingles:   ${fechaComentario.toLocaleTimeString("en-US")}
    Hora NYC:   ${fechaComentario.toLocaleTimeString("es-ES", options)}
    Hora UTCString: ${fechaComentario.toUTCString()}
    Hora ISO String: ${fechaComentario.toISOString()}
`;

console.log(muestraMetodosComentario);

// Vamos a ver qué hora es tras un milisegundo
// fijarnos que nos da la hora correcta (horario de invierno)
console.log(new Date(1));

// Para parsear cosas más complejas existe una librería 
// que se llama moment.js

// Podría calcular mi edad a partir de los milisegundos
console.log((fechaDeHoy-miFechaDeNacimiento)
    /(1000*3600*24*365.25));

/**
 * toLocaleDateString: usa la configuración del navegador
 *  para imprimir la fecha
 *
 * los locales suelen tener dos elementos:
 *   xx-YY
 *   xx "idioma"
 *   YY "dialecto"
 */




