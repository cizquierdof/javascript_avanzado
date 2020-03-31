/*****************
 * Constructor de promesa
 */
/* const promesa = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);

    setTimeout(() => num > 5 ? resolve(num) : reject(new Error(`Error ${num} es menor que 5`)), 1000);
});

promesa .then(num => console.log(`Correcto, ${num} es mayor o igual que 5`))
        .catch(error => console.error(error)); */


let mamaContenta = true;
const obtengoMovil = new Promise(
    (resolve, reject) => {
        if (mamaContenta) {
            let movil = 'Conseguí mi móvil';
            resolve(movil);
        } else {
            let razon = new Error('Mama cabreada');
            reject(razon);
        }
    });

/* const pregunta_a_mama = () => {
    obtengoMovil.then(conseguido => { console.log(conseguido); })   //Conseguí mi móvil
        .catch(error => { console.log(error); });  //Mama cabreada
} 

pregunta_a_mama();
*/

//segunda promesa
let mostrarmovil = (movil) => {
    return new Promise(
        (resolve, reject) => {
            let mensaje = '¡He tio, mira mi nuevo móvil';
            resolve(mensaje);
        }
    );
}

//encadenando la segunda promesa
const pregunta_a_mama = () => {
    obtengoMovil.then(mostrarmovil) //segunda promesa encadenada
                .then(conseguido => { console.log(conseguido); })   //Conseguí mi móvil
        .catch(error => { console.log(error); });  //Mama cabreada
}

pregunta_a_mama();