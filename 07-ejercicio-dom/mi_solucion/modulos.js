//si en el módulo se definió como export default 
//se debe importar sin llaves
import pizzas from './pizzas-content.js';

const _ordenaPizzasPorCampo = (campo) => {
    let pizzaOrdenada = [];

     if (campo == 'id') {
        pizzaOrdenada = pizzas.sort(
            (a, b) => {
                if (a.id > b.id) { return 1; }
                if (a.id < b.id) { return -1; }
                return 0;
            });
    }  else if (campo = 'nombre') {
        pizzaOrdenada = pizzas.sort(
            (a, b) => {
                if (a.nombre > b.nombre) { return 1; }
                if (a.nombre < b.nombre) { return -1; }
                return 0;
            });
    }
    createTable(pizzaOrdenada ? pizzaOrdenada : pizzas);
}

const createTable = (p) => {

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
    _createTableRow(p ? p : pizzas).forEach(element => {

        tabla.appendChild(element)
    });

    return tabla;

}

const _headerTable = () => {
    //crea los elementos que froman la cabecera   
    const thead = document.createElement('thead');    //<thead></thead>
    const tr_header = document.createElement("tr");   //<tr></tr>
    tr_header.id='tr_header';
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

        /*************
        *añadir row al array de filas y obtener la longitud del array
        *************/
        let row = arrayrows.push(tr);
        if(!(row%2)){
            tr.className='impar';
        }
        //gackground filas pares e impares en base a la actual longitud del array
       // row % 2 ? trBackgroundColor = '#ffffff' : trBackgroundColor = '#d0e4f5';
        //tr.style.background = trBackgroundColor;

    });
    return arrayrows;   //devolvemos un array de filas de datos para la tabla
}

const init=()=>{createTable();}
document.body.addEventListener('load', init());
