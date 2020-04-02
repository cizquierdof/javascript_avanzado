//si en el módulo se definió como export default 
//se debe importar sin llaves
//import pizzas from './pizzas-content.js';

const _ordenaPizzasPorCampo = (campo) => {
    let pizzaOrdenada = [];

    if (campo == 'id') {
        pizzaOrdenada = pizzas.sort(
            (a, b) => {
                if (a.id > b.id) { return 1; }
                if (a.id < b.id) { return -1; }
                return 0;
            });
    } else if (campo = 'nombre') {
        pizzaOrdenada = pizzas.sort(
            (a, b) => {
                if (a.nombre > b.nombre) { return 1; }
                if (a.nombre < b.nombre) { return -1; }
                return 0;
            });
    }
    render(pizzaOrdenada ? pizzaOrdenada : pizzas);
}

const render = (pizza) => {

    /*****************
    *creo la tabla y le añado un id que luego utilizaremos para localizarla
    *************/
    const tabla = document.createElement("table");
    tabla.id = 'tabla_pizzas';

    //meto la clase en el div
    const divTabla = document.getElementById("tabla");
    divTabla.innerHTML = '';
    divTabla.appendChild(tabla);

    //llamamos a los elementos de la cabecera y se los metemos en la tabla
    tabla.appendChild(_headerTable());

    //recorremos el array creado por _createTableRow y lo añadimos como elementos
    _createTableRow(pizza ? pizza : pizzas).forEach(element => {

        tabla.appendChild(element)
    });

    //filtrado de pizzas por el input
    const entrada=document.getElementById('entrada');
    entrada.addEventListener('keyup',_filtroPizzas);
    return tabla;

}

const _headerTable = () => {
    //crea los elementos que froman la cabecera   
    const thead = document.createElement('thead');    //<thead></thead>
    const tr_header = document.createElement("tr");   //<tr></tr>
    tr_header.id = 'tr_header';
    const th_id = document.createElement("th");       //<th>id</th>
    th_id.innerText = 'Id';

    const th_nombre = document.createElement("th");   //<th>Nombre</th>
    th_nombre.innerText = 'Nombre';

    //listeners
    th_nombre.addEventListener('click',
        () => {
            _ordenaPizzasPorCampo('nombre');
        });

    th_id.addEventListener('click',
        () => {

            _ordenaPizzasPorCampo('id');
        });
    //mete los elementos en sus correspondientes padres
    thead.appendChild(tr_header);
    tr_header.appendChild(th_id);
    tr_header.appendChild(th_nombre);

    const _cambia_background = (element, c) => {
        element.style.trBackgroundColor = c;

    }

    //devuelve la cabecera completa
    return thead;
}

const _muestraDetallesPizza = (pizza) => {
   // console.log(pizza);

    /****************
     * render de ingredientes de pizzas
     * */
    const div_detalle = document.getElementById('ingredientes');
    //limpia el contenido para que no se acumule
    div_detalle.innerHTML = '';

    //nombre de la pizza
    const h_nombre = document.createElement('h2');
    h_nombre.innerHTML = pizza.nombre;
    div_detalle.appendChild(h_nombre);

    //lista para los ingredientes
    const ul_ingredientes = document.createElement('ul');
    div_detalle.appendChild(ul_ingredientes);

    pizza.listaIngredientes.forEach(element => {
        const li_ingrediente = document.createElement('li');
        li_ingrediente.innerText = element.nombre;
        ul_ingredientes.appendChild(li_ingrediente);
    })

    /************
     * render de la imagen de la pizza
     */

    const div_imagen=document.getElementById('foto');
     div_imagen.innerHTML='';
     const image=document.createElement('img');
               image.src='http://localhost:8080/pizzas/imagen/'+pizza.imagen.id+'/';
               div_imagen.appendChild(image);




    /*********************
     * render de comentarios
     */
    const div_comentarios = document.getElementById('comentarios');
    div_comentarios.innerHTML = '';

    pizza.listaComentarios.forEach(element => {
        const div_linea_comentario = document.createElement('div');
        let dateComentario = new Date(Date.parse(element.fecha));
        let fechaComentario = dateComentario.toLocaleDateString();
        let horaComentario = dateComentario.toLocaleTimeString();
        let texto = '<b>' + fechaComentario + '  ' + horaComentario + ' ' +
            element.user + ' dice: </b>' + element.texto;
        div_linea_comentario.innerHTML = texto;

        //div_linea_comentario.className='linea_comentario'
        div_comentarios.appendChild(div_linea_comentario);

    });

}

const _createTableRow = (pizzas) => {
    const arrayrows = [];
    let trBackgroundColor;

    pizzas.forEach(element => {

        /**************
        *crear elementos para cada línea de pizza y popularlos
        **************/
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");    //id
        tdId.innerText = element.id;
        const tdNombre = document.createElement("td");    //nombre
        tdNombre.innerText = element.nombre;
        //insertar en la row
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);

        tr.addEventListener('click',
            () => { _muestraDetallesPizza(pizzas[row - 1]); }
        )

        /*************
        *añadir row al array de filas y obtener la longitud del array
        *************/
        let row = arrayrows.push(tr);
        if (!(row % 2)) {
            tr.className = 'impar';
        }

    });
    return arrayrows;   //devolvemos un array de filas de datos para la tabla
}

/****************
 * filtrar pizzas por entrada del input
 */
const _filtroPizzas=()=>{
    let pizzaFiltrada=pizzas.filter(
      el=>{
        console.log(entrada.value);
        return  el.nombre.toLowerCase().indexOf(entrada.value.toLowerCase())>-1;
      }  
    );
    console.log(pizzaFiltrada);
    render(pizzaFiltrada);

}

const init = () => { 
          fetch('http://localhost:8080/api/pizzas/')
        .then(res => res.json()
         .then(
          res => {
              render(res);   
                   }
      ));

    render(); 
}
document.body.addEventListener('load', init());
