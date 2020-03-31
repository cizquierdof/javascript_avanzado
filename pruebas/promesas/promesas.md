# Promesas

Imagina que eres un chaval y que tu madre te promete que la semana que viene te comprará un móvil nuevo. En realidad, hasta la próxima semana tu no sabrás si tu madre te comprará realmente el móvil o, si te portas mal, no cumplirá su promesa.

En realidad esta promesa tiene tres estados:

1. Pendiente: Tu aun no sabes si te comprarán el móvil.
2. Cumplida: Has sido bueno y tu madre te ha comprado el móvil.
3. Rechazada: Hiciste de las tuyas y tu madre no te ha comprado el móvil.

## Creando una promesa

Pasemos esto a javascript.

```javascript
        let mamaContenta = false;   //false: Rechazada, true: Cumplida
        //declaración de la promesa
        const obtengoMovil= new Promise(
            (resolve, reject) => {
                if(mamaContenta){
                    let movil='Conseguí mi móvil'; //Cumplida
                    resolve(movil);
                } else {
                let razon=new Error('Mama cabreada');  //Rechazada
                reject(razon);
            }
        });
```

## Consumir la promesa

Ya tenemos la promesa, ahora vamos a utilizarla.

```javascript
        const pregunta_a_mama =() => {
            obtengoMovil.then(conseguido=>{console.log(conseguido);})   //Conseguí mi móvil
                        .catch(error =>{console.log(error);});  //Mama cabreada
        }

        pregunta_a_mama();
```

En este caso la promesa será rechazada porque parte de un valor de mamaContenta = false

## Encadenando promesas

Digamos que tu le prometes a un amigo que le enseñarás tu nuevo móvil cuando tu madre te lo compre. Esto es otra promesa, pero depende de la primera. Veamos como se escribe.

```javascript
//encadenando la segunda promesa
const pregunta_a_mama = () => {
    obtengoMovil.then(mostrarmovil) //segunda promesa encadenada
                .then(conseguido => { console.log(conseguido); })   //Conseguí mi móvil
        .catch(error => { console.log(error); });  //Mama cabreada
}
```
