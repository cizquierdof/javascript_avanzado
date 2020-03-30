export const getMensaje =  (lenguaje) => {

    switch (lenguaje) {
        case "es":
            return "Hola Mundo";
        case "en":
            return "Hello World" ;
        default:
            return "No entiendo nada";
    }
}

