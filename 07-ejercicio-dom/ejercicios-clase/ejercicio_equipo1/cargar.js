//si en el módulo se definió como export default 
//se debe importar sin llaves
import pizzas from '../../pizzas-content.js';

/* pizzas.forEach(
    (pizza) => {
    console.log(pizza);
});
 */

 //window.pizzas = pizzas;



const createTable=()=>{
    const tabla=document.createElement("table");
    const divTabla=document.getElementById("tabla");
    divTabla.appendChild(tabla);
    tabla.appendChild(_headerTable());
    _dataTable(pizzas).forEach(element => {
        
        tabla.appendChild(element);
    });
    tabla.style.border="1px solid black";
    tabla.style.width= "100%";
    
    return tabla;
}


const _dataTable = (pizzas) => {
    const arrayrows = [];
    pizzas.forEach(element => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText= element.id;
        td1.style.border = "1px dotted blue";
        const td2 = document.createElement("td");
        td2.innerText = element.nombre;
        td2.style.border = "1px dotted blue";
        tr.appendChild(td1);
        tr.appendChild(td2);
        arrayrows.push(tr);
    });
    return arrayrows;
}


const cualesmitabla=()=>{
    console.log(window.tabla);
}

// debug
window.createTable = createTable;


const elemento = () => {
    const a = document.createElement("a");
    a.href = "http://www.google.com";
    a.innerText="Mi enlace";
    return a;
}


const _headerTable=()=>{
    const tr_header=document.createElement("tr");
    const th_id=document.createElement("th");
    th_id.innerText='id';
    const th_nombre=document.createElement("th");
    th_nombre.innerText='nombre';
    tr_header.appendChild(th_id);
    tr_header.appendChild(th_nombre);

    return tr_header;
}


// debug mode
window._headerTable = _headerTable;

 
const tabla=()=>{

}

const renderElement = () => {
    createTable();
}

export const init = () => {
    document.querySelector("body").addEventListener("load", renderElement());
}
