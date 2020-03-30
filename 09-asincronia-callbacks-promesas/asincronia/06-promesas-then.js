/**
 * Devolvemos una promesa
 * @param {} numero 
 */
function sumarUno(numero) {

    let promesa = new Promise(
        (resolve, reject) => {
            setTimeout(
                resolve(numero + 1)
                ,
                1000);
        }
    )
    return promesa;
}

// sumarUno(5)
//     .then(
//         a => sumarUno(a)
//     )
//     .then (
//         b => sumarUno(b)
//     )
//     .then (
//         c => sumarUno(c)
//     )
//     .then (
//         d => sumarUno(d)
//     )
//     .then (
//         e => console.log(e)
//     )

sumarUno(5)
    .then(
        sumarUno
    )
    .then(
        sumarUno
    ).then(
        sumarUno
    ).then(
        sumarUno
    ).then(
        sumarUno
    )
    .then(
        console.log
    )