// MANEJO DE ERRORES



// resolve => respuesta
// reject => error (string)

/**
 * Devolvemos una promesa
 * @param {} numero 
 */
function sumarUno(numero) {
    let promesa = new Promise(
        (resolve, reject) => {
            if (numero>7) {
                reject("El número es mayor que siete");
            }
            setTimeout(
                resolve(numero + 1)
                ,
                1000);
        }
    )
    return promesa;
}


// con poner el catch al final ya capturo los errores de todas las promesas
sumarUno(5)
    .then(
        sumarUno
    )
    .then(
        sumarUno
    ).then(
        sumarUno
    )
    .then(
        sumarUno
    ).then(
        sumarUno
    )
    .then(
        console.log
    ).catch(
        err => console.error(`Se ha producido el error:  ${err}`)
    )

    // Promise.all Promise.race