
// importando constantes concretas
import { traducirHola as traducirMensajeDeBienvenida } from './traducir.js';

// importando default
import autor from './exportdefault.js';

// importando una librería
import * as matematica from './matematica.js';

export const escribeHola = () => {
    console.log(traducirMensajeDeBienvenida("en"));
}

// Uso de librerías
console.log("uso de suma de la librería matemática",matematica.suma(6,7));
console.log("uso de resta de la librería matemática", matematica.resta(4,3));

console.log("muestro la función autor (no uso paréntesis)", autor);
console.log("ejecuto la función autor (uso paréntesis)", autor());

// Iniciamos la window
// Para que esté disponible en el html
window.escribeHola = escribeHola;

