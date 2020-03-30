

/**
 * CALLBACK HELL
 */
function sumarUno(numero, callback) {
    console.log(`numero dentro de la funcion : ${numero}`);
    setTimeout(
        () => {
            if (numero > 7) {
                console.log("detectado error");
                callback("Error el numero es mayor que 7 ", null);
            } else {
                callback(null, numero + 1)
            }

        }
        ,
        1000);
}

sumarUno(
    5,
    (error, p) => {
        if (error) console.log(error)
        else
            sumarUno(
                p,
                (error, p2) => {
                    if (error) console.log(error)
                    else
                        sumarUno(
                            p2,
                            (error, p3) => {
                                if (error) console.log(error)
                                else
                                    sumarUno(
                                        p3,
                                        (error, p4) => {
                                            if (error) console.log(`resultado erroneo : ${error}`);
                                            else
                                                console.log(`Resultado final : ${p4}`)
                                        }
                                    )
                            }
                        )
                }
            )
    }
);