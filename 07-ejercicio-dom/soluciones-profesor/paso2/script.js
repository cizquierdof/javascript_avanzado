import pizzas from '../../pizzas-content.js';


const _estadoOrden = {
    campo: null,
    ascendente: true
}




const _ordenaTabla = (e) => {
    const campoAOrdenar = e.target.innerText.toLowerCase();

    if (
        _estadoOrden.campo &&
        _estadoOrden.campo === campoAOrdenar &&
        _estadoOrden.ascendente
    ) {
        _estadoOrden.ascendente = false;
    } else {
        _estadoOrden.ascendente = true;
    }

    _estadoOrden.campo = campoAOrdenar;

    const pizzasOrdenadas = pizzas.sort(
        (a, b) => {
            // a.id  === a["id"]
            const campoa = typeof (a[campoAOrdenar]) == "string"
                ? a[campoAOrdenar].toLowerCase() : a[campoAOrdenar];
            const campob = typeof (b[campoAOrdenar]) == "string"
                ? b[campoAOrdenar].toLowerCase() : b[campoAOrdenar];
            return campoa > campob ?
                (_estadoOrden.ascendente ? 1 : -1) :
                (_estadoOrden.ascendente ? -1 : 1);
        }
    )
    render(pizzasOrdenadas);

}



// Crea el encabezado de la tabla
const _createTableHeader = () => {
    const tr = document.createElement("tr");
    const thid = document.createElement("th");
    thid.innerText = "ID";
    const thnombre = document.createElement("th");
    thnombre.innerText = "Nombre";
    tr.appendChild(thid);
    tr.appendChild(thnombre);

    // Introduzco los listeners
    thid.addEventListener("click", _ordenaTabla);
    thnombre.addEventListener("click", _ordenaTabla);



    return tr;
}



const _createTableRow = (pizza, impar) => {
    const tr = document.createElement("tr");
    const tdid = document.createElement("td");
    tdid.innerText = pizza.id;
    const tdnombre = document.createElement("td");
    tdnombre.innerText = pizza.nombre;
    tr.appendChild(tdid);
    tr.appendChild(tdnombre);

    tr.className = impar ? "impar" : "par";


    return tr;
}

// Devolverá la tabla
const createTable = pizzas => {
    const table = document.createElement("table");
    table.className = "tabla-pizzas";
    table.appendChild(_createTableHeader());
    pizzas.forEach((e, i) => {
        table.appendChild(_createTableRow(e, (i % 2) == 1));
    });
    return table;
}

const render = pizzas => {
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(createTable(pizzas));
}

// Pone las cosas en su sitio
const init = () => {
    render(pizzas);
}

document.body.addEventListener("load", init());
