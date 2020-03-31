# Ejercicio DOM + Objetos

## 1. Crear una tabla a partir del json de pizzas

#### Requisitos:

- Que aparezca el id y el nombre de la pizza
- El Header ha de tener su propio  estilo
- El background de las filas pares y las impares ha de ser diferente.

#### Tips:
Mi recomendación es ir por partes:

Crear métodos para la construcción de cada fila:

```javascript
_createTableHeader();
_createTableRow(pizza, impar);
createTable(pizzas);
```

Es interesante tener un método renderPizzaTable:
```javascript
renderPizzaTable() 
// otra posibilidad es:
renderPizzaTable(pizzas);
```


Dónde ponerlo:

Crear un div en el html donde pondremos el objeto tabla (dentro):

```html
<body>
    <div id ="pizzatable"></div>
</body>
```

Para el background de las filas pares e impares podemos hacer varias cosas:

1. Poner directamente el estilo
```javascript
element.style.background-color = "color";
```
2. Incluir un css y poner la clase:
```javascript
element.className = "impar";
```



# 2. Añadir un evento en el header para ordenar lo elementos por el campo pulsado
Esto es, si pulsamos "id" se nos ordenarán por id
Si pulsamos "nombre" se nos ordenarán por nombre

#### Tips

- Para esto es importante tener el render(), porque habrá que llamarlo con el sort del array de pizzas
- Hay que capturar el evento y ver qué elemento ha generado la llamada, para saber por dónde ordenar
- No es necesario cambiar la ordenación de arriba abajo y al revés, yo sí lo haré, pero es guardarse el estado en una variable global





# 3. Añadir un evento que al pulsar una fila nos muestre los detalles de la pizza
- Nombre pizza
- Ingredientes

# 4. Mostrar los comentarios en la descripción de la pizza
- Máx 3 comentarios

(Date)


# 5. Añadir la imágen a la pizza

(necesitamos el backend...)

# 6. Recuperar los datos del backend

(Promesas)







