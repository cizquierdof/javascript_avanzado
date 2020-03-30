// Esta función devuelve un emoticono de un payaso al cabo de 2 segundos
function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 3000);
    });
}

// Esta función escribe el emoticono por pantalla
/**
 * La palabra clave async permite lanzar un hilo y no parar la ejecución...
 */
async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

// Lo importante está aquí

async function f() {

    msg();
    // mi hilo de ejecución continua
    // porque la función es async (asíncrona)


    console.log("sigo la ejecución");
}

f();



