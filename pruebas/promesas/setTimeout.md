# Método setTimeout()

El método **setTimeout()** establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.

## Sintaxis


```javascript
const setTimeout(funcion[, retardo]);
```

### *funcion*

Función o código que se ejecutará tras el retardo

### *retraso*

Tiempo en milisegundos que espera antes de lanzar el  código. Es opcional, si no se indica nada asume que es 0.

### Valor de retorno

el método devuelve un identificador numérico no nulo. este valor se le puede pasar a *clearTimeout()* para cancelar un temporizador.


## Ejemplo

```javascript
const pruebaTimeout=(delay)=>{
    timeoutId=setTimeout(
        ()=>console.log(`Esto se mostrará tras ${delay/1000} segundos`),
        delay
    );
}
```