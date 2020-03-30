import pizzas from '../../pizzas-content.js';

// 
// _createTableRow(pizza, impar);
// createTable(pizzas);



// Crea el encabezado de la tabla
const _createTableHeader = () => {
   /**
    * <tr>
    *   <th>Id</th>
    *   <th>Nombre</th>
    * </tr>
    */
    const tr = document.createElement("tr");
    const thid = document.createElement("th");
    thid.innerText = "ID";
    const thnombre = document.createElement("th");
    thnombre.innerText = "Nombre";
    tr.appendChild(thid);
    tr.appendChild(thnombre);
    return tr;
}

const _createTableRow = (pizza, impar) => {
    console.log(impar);
    const tr = document.createElement("tr");
    const tdid = document.createElement("td");
    tdid.innerText = pizza.id;
    const tdnombre = document.createElement("td");
    tdnombre.innerText = pizza.nombre;
    tr.appendChild(tdid);
    tr.appendChild(tdnombre);

    tr.className = impar ? "impar": "par";
    // const at = document.createAttribute("class");
    // at.value = impar ? "impar": "par";
    // tr.setAttribute(at) ¿?¿
    // tr.setAttribute("class", impar ? "impar": "par");
    return tr;
}

// Devolverá la tabla
const createTable = pizzas => {
    const table = document.createElement("table");
    table.className= "tabla-pizzas";
    table.appendChild(_createTableHeader());
    pizzas.forEach((e, i) => {
        table.appendChild(_createTableRow(e,(i%2)==1));
    });

    return table;
}

const render = pizzas => {
    document.getElementById("tabla").appendChild(createTable(pizzas));
}

// Pone las cosas en su sitio
const init =  () => {
    render(pizzas);
}

document.body.addEventListener("load", init());
