# Que es el DOM

DOM  se refiere a Document Object Model y es un API para documentos HTML y XML que define la estructura lógica de los documentos y el modo en que se accede y manipula.

El DOM permite un acceso a la estructura de una página HTML mediante el mapeo de los elementos de esta página en un árbol de nodos. Cada elemento se convierte en un nodo y cada porción de texto en un nodo de texto. Para comprender más fácilmente véase el siguiente ejemplo:

```html
<body>
<p>Esto es un párrafo que contiene <a href="#">un enlace</a> en el medio. </p>
<ul>
<li>Primer punto en la lista</li>
<li>Otro punto en la lista</li>
</ul>
</body>
```
*a* se encuentra dentro de *p*, por lo que es un nodo hijo. los *li* son hermanos hijos del mismo padre *ul*. 

Las etiquetas son elementos del DOM por ejemplo \<p> o \<div>, mientras que los elementos de texto dentro de estas etiquetas son nodos de texto. Los elementos pueden contener atributos y nodos hijos, mientras que los nodos de texto no.

## Estructura del DOM

El DOM tiene una estructura de bosque.
![Estructura del DOM](dom.png)

## Accediendo a los elementos

Javascript proporciona muchos métodos para acceder y modificar tanto a los elementos como a los atributos del DOM.

- getElementById

el método *getElementById* es la forma más rápida y fácil de acceder a un elemento. Para ello lo vamos a localizar a través de un *id* que le asignemos. Por ejemplo:

En la línea 9 de index.html tenemos un elemento \<a> identificado con id='mienlace':

```html
<a href="http://google.com" id="mienlace">google</a>
```

la sentencia:

```javascript
const mienlace = document.getElementById("mienlace");
```

hace que la constante *mienlace* este referida a dicho elemento \<a> y cualquier operación sobre la misma afecta5rá al hiperenlace. Por ejemplo podemos sustituir el texto *google* por otra cosa así:

```javascript
mienlace.innerText='otra cosa';
```

el efecto es como si en el documento html original hubieramos escrito.

```html
<a href="http://google.com" id="mienlace">otra cosa</a>
```

- getElementsByClassName

Otra forma de encontrar elementos es mediante la etiqueta de clase. A diferencia del *id* que es único, las clases pueden devolver varios elementos, así que este método nos puede devolver un array de elementos. En la página de ejemplo 

```javascript
document.getElementsByClassName("item")
```

nos devuelve un array de dos elementos *li*. Si quisieramos acceder solo al segundo, se lo indicamos con el índice correspondiente.

```javascript
document.getElementsByClassName("item")[1]
```

- getElementsByTagName

Mediante este método obtenemos un array con todos l9os elementos de un determinado tipo de etiqueta. Por ejemplo.

```javascript
document.getElementsByTagName("li")
```

devuelve un array con referencias a todos los *li* del documento.

- querySelector
- querySelectorAll

Estos métodos buscan elementos mediante selectores iguales a los que se utilizan en CSS, la diferencia entre ellos es que el *querySelector* devuelve el primero que encuentra y *querySelectorAll* devuelve la colección de todos los que encuentre en el documento.

En la página de ejemplo

```javascript
document.querySelectorAll(".contenedor div");
```

 encontrará todos los *div* de dentro del *div* con clase='contenedor', sin embargo 

 ```javascript
document.querySelector(".contenedor div");
```

solo devuelve el primero.

Podemos utilizar cualquier selector CSS que queramos. Por ejemplo

```javascript
document.querySelectorAll(".contenedor div:first-child");
```

nos devolverá el primer div hijo de la clase *.contenedor*. En este caso tendrá el mismo efecto que el selector anterior.

- Otras formas

Las anteriores son las más utilizadas pero hay muchas más formas de acceder a los elementos del DOM. Se pueden consultar en la documentación de [developer.mozilla.org](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko)
