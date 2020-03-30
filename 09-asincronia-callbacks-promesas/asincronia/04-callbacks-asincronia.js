// Cómo podemos esperar...
// Esta función devuelve un emoticono de un payaso al cabo de 2 segundos
function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 3000);
    });
}

// Ahora le pasamos una función de callback
async function msg(callback) {
    const msg = await scaryClown();
    callback(msg);
}

// Al pasarle una función de callback me permite decirle a la función QUÉ es lo que tiene que hacer cuando termine
async function f() {
    msg(
        a => console.log(`El mensaje es ${a}`)
    );
    // mi hilo de ejecución continua
    // porque la función es async (asíncrona)
    console.log("sigo la ejecución");
}

f();
