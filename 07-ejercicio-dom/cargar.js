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
    //tabla.style.border='solid';

    const divTabla=document.getElementById("tabla");
    divTabla.appendChild(tabla);

    tabla.appendChild(_headerTable());

    

    _createTableRow(pizzas).forEach(element=>{
        tabla.appendChild(element)
    });

}

const _headerTable=()=>{ 
    //crea los elementos que froman la cabecera   
    const thead=document.createElement('thead');    //<thead></thead>
    const tr_header=document.createElement("tr");   //<tr></tr>
    const th_id=document.createElement("th");       //<th>id</th>
    th_id.innerText='id';
    const th_nombre=document.createElement("th");   //<th>Nombre</th>
    th_nombre.innerText='nombre';
    //mete los elementos en sus correspondientes padres
    thead.appendChild(tr_header);
    tr_header.appendChild(th_id);
    tr_header.appendChild(th_nombre);
    //crea los estilos de visualización
    thead.style.cssText='background: #0B6FA4; border-bottom: 5px solid #FFFFFF; ';
    th_id.style.cssText='font-size: 17px; font-weight: bold; color: #FFFFFF;';
    th_nombre.style.cssText='font-size: 17px; font-weight: bold; color: #FFFFFF;';

    //devuelve la cabecera completa
    return thead;
}

 const _createTableRow=(pizzas)=>{
    const arrayrows=[];
    let row=1;
    pizzas.forEach(element => {
        const tr=document.createElement("tr");

        const tdId=document.createElement("td");
        tdId.innerText=element.id;
        const tdNombre=document.createElement("td");
        tdNombre.innerText=element.nombre;
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.style.
        arrayrows.push(tr);
        if(row%2==0){
            tr.style.background='#d0e4f5';
        }
        row++;

    });
    return arrayrows;
 }

const renderElement = () => {
createTable();
}

export const init = () => {
    document.querySelector("body").addEventListener("load", renderElement());
}