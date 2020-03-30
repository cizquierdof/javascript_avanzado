import pizzas from "../../pizzas-content.js";


const _createHeader = () => {
  const tr = document.createElement("tr");
  const thid = document.createElement("th");
  thid.innerText = "ID";
  const thnombre = document.createElement("th");
  thnombre.innerText = "Nombre";
  thnombre.style.color = "blue";

  tr.appendChild(thid);
  tr.appendChild(thnombre)

  return tr;
}

// modo debug
window._createHeader = _createHeader;


const createTable=()=>{
  const tabla=document.createElement("table");
  tabla.setAttribute('id','miTabla');



  const divTabla=document.getElementById("tabla");

  divTabla.appendChild(tabla);

  const miTabla=document.getElementById("miTabla");
  miTabla.appendChild(_headerTable());


}

