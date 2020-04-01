// la fecha es un objeto

const fecha = new Date();
console.log(fecha);

const textoHora = `
    El año es: ${fecha.getFullYear()}
    El mes es : ${fecha.getMonth()+1}
    Locale Date: ${fecha.toLocaleDateString()}
    Locale Time : ${fecha.toLocaleTimeString()}
    UTC : ${fecha.toUTCString()}
    ISO: ${fecha.toISOString()}

`;


console.log(textoHora);

const miFechaNacimiento = new Date(1974, 6-1, 6, 6, 6 ,6);

const textoBirthday = `
    El año es: ${miFechaNacimiento.getFullYear()}
    El mes es : ${miFechaNacimiento.getMonth()+1}
    Locale Date: ${miFechaNacimiento.toLocaleDateString()}
    Locale Time : ${miFechaNacimiento.toLocaleTimeString()}
    UTC : ${miFechaNacimiento.toUTCString()}
    ISO: ${miFechaNacimiento.toISOString()}

`;

// de forma más habitual usaremos moment.js
// pero date parse devuelve muchas cosas en ms

console.log(textoBirthday);

const otradate = new Date( Date.parse("1990-06-06T04:06:06.000Z"));
console.log(otradate.toLocaleDateString());