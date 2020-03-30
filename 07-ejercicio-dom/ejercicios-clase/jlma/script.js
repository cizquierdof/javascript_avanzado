import pizzas from "../../pizzas-content.js";

//si en el módulo se definió como export default 
//se debe importar sin llaves
/* pizzas.forEach(
    (pizza) => {
    console.log(pizza);
});
 */

//window.pizzas = pizzas;



const createTable = () => {
    const tabla = document.createElement("table");
    const divTabla = document.getElementById("tabla");
    divTabla.appendChild(tabla);
    tabla.appendChild(_headerTable());
    _dataTable(pizzas).forEach(element => {

        tabla.appendChild(element);
    });
    tabla.style.border = "1px solid black";
    tabla.style.width = "100%";
    return tabla;
}


/* const misdivitems = document.querySelectorAll(".contenedor .elemento");
console.log(misdivitems);

misdivitems.forEach(
    (item, index) => {
        console.log(item);
        item.style.width="200px";
        item.style.height="200px";
        if (index%2 ==0)
            item.style.backgroundColor = "blue";
            else
            item.style.backgroundColor = "green";
        item.style.display = "inline-block";
    }
) */



const _dataTable = (pizzas) => {
    const arrayrows = [];
    pizzas.forEach(
        (element, index) => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            td1.innerText = element.id;
            if (index % 2)
                td1.style.backgroundColor = "grey";
            const td2 = document.createElement("td");
            td2.innerText = element.nombre;
            if (index % 2)
                td2.style.backgroundColor = "grey";
            tr.appendChild(td1);
            tr.appendChild(td2);
            arrayrows.push(tr);
        }
    )
    return arrayrows;
}



const cualesmitabla = () => {
    console.log(window.tabla);
}

// debug
window.createTable = createTable;


const elemento = () => {
    const a = document.createElement("a");
    a.href = "http://www.google.com";
    a.innerText = "Mi enlace";
    return a;
}


const _headerTable = () => {
    const tr_header = document.createElement("tr");
    const th_id = document.createElement("th");
    th_id.innerText = 'id';
    const th_nombre = document.createElement("th");
    th_nombre.innerText = 'nombre';
    tr_header.appendChild(th_id);
    tr_header.appendChild(th_nombre);

    return tr_header;
}


// debug mode
window._headerTable = _headerTable;


const tabla = () => {

}

const renderElement = () => {
    createTable();
}

export const init = () => {
    document.querySelector("body").addEventListener("load", renderElement());
    document.querySelectorAll('th')[0].style.backgroundColor = "lightgrey";
    document.querySelectorAll('th')[1].style.backgroundColor = "lightgrey";
}


init();

