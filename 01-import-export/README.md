# Import Export

import : importa funciones y variables desde otro archivo

Para importar un elemento , hay que exportar dichos elementos en el archivo que importamos:

```javascript
export const traducirHola = (language) => { ... }
```

Ponemos a continuación el elemento a importar entre llaves:

```javascript
import {traducirHola} from './traducir';
```

Para importarlo ha de ser como módulo
```html
<script src="./js/miscript.js" type="module"></script>
```


Para tener funciones disponible en la ventana incluimos:

```javascript
window.escribeHola = escribeHola;
```


## import as

Para cambiar de nombre a la variable / función importada

```javascript
import {traducirHola as traducirMensajeDeBienvenida} from './traducir.js';

export const escribeHola = () => {
    console.log(traducirMensajeDeBienvenida("en"));
}
```

# Importación de librerías



