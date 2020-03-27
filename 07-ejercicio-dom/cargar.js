//si en el módulo se definió como export default 
//se debe importar sin llaves
import pizzas from './pizzas-content.js';

/* pizzas.forEach(
    (pizza) => {
    console.log(pizza);
});
 */

const elemento = () => {
    const a = document.createElement("a");
    a.href = "www.google.com";
    a.innerText="Mi enlace";
    return a;
}

const createTable=()=>{
    const tabla=document.createElement("table");
    tabla.setAttribute('class','table');

    const divTabla=document.getElementById("tabla");
    divTabla.appendChild(tabla);

    tabla.appendChild(_headerTable());

    _createTableRow(pizzas).forEach(element=>{
        tabla.appendChild(element)
    });

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

 const _createTableRow=(pizzas)=>{
    const arrayrows=[];
    pizzas.forEach(element => {
        const tr=document.createElement("tr");
        const tdId=document.createElement("td");
        tdId.innerText=element.id;
        const tdNombre=document.createElement("td");
        tdNombre.innerText=element.nombre;
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        arrayrows.push(tr);

    });
    return arrayrows;
 }

const renderElement = () => {
createTable();
}

export const init = () => {
    document.querySelector("body").addEventListener("load", renderElement());
}