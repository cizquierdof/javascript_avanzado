//import pizzas from '../../pizzas-content.js';
let pizzas = [];



const _pizzaRowHandler = (e, pizza) => {
    const detallePizza = document.getElementById("detallepizza");
    detallePizza.innerHTML = "";
    detallePizza.appendChild(_createPizzaDetalle(pizza));
}


const _estadoOrden = {
    campo: null,
    ascendente: true
}

const _createPizzaDetalle = (pizza) => {

    const div = document.createElement("div");
    div.className = "pizza-content";
    
    const detalle = document.createElement("div");
    
    detalle.className = "pizza-detalle";
    const tituloPizza = document.createElement("H1");
    const listaIngredientes = document.createElement("ul");

    tituloPizza.innerText = pizza.nombre;

    pizza.listaIngredientes.forEach(ingrediente => {
        const ingredienteLI = document.createElement("li");
        ingredienteLI.innerText = ingrediente.nombre;
        listaIngredientes.appendChild(ingredienteLI)
    })

    detalle.appendChild(tituloPizza);
    detalle.appendChild(listaIngredientes);

    div.appendChild(_getPizzaImagen(pizza.imagen));
    div.appendChild(detalle);
    div.appendChild(_createComentarios(pizza));
    return div;
}

const _getPizzaImagen = (imagenPizza) => {
    const imagen = document.createElement("div");
    imagen.className = "pizza-imagen";
    const img = document.createElement("img");
    img.src= `http://localhost:8080/pizzas/imagen/${imagenPizza.id}/`;
    imagen.appendChild(img);

    return imagen;
}

const _createComentarios = (pizza) => {
    const comentarios = document.createElement("div");
    comentarios.className = "comentarios";

    const ul = document.createElement("ul");

    for (let index = 0; index < Math.min(pizza.listaComentarios.length, 3); index++) {
        //    for (let index = 0; index < pizza.listaComentarios.length; index++) {
        // if (index>=3)
        //     break;
        const element = pizza.listaComentarios[index];
        const li = document.createElement("li");
        // li.innerText = element.texto puntuacion fecha
        li.appendChild(_getComentario(element))
        ul.appendChild(li);
    }

    comentarios.appendChild(ul);


    return comentarios;
}

const _getComentario = (comentario) => {
    //const div = document.createElement("div");
    const div = document.createElement("pizza-comentario");
    const puntuacion = document.createElement("div");
    puntuacion.className = "puntuacion";
    puntuacion.innerText = comentario.puntuacion;

    const texto = document.createElement("div");
    texto.innerText = comentario.texto;
    texto.className = "texto";

    const fecha = document.createElement("div");
    const fechaDate = new Date(Date.parse(comentario.fecha));
    fecha.className = "fecha";

    fecha.innerText = `${fechaDate.toLocaleDateString()} ${fechaDate.toLocaleTimeString()}`;

    div.appendChild(puntuacion);
    div.appendChild(texto);
    div.appendChild(fecha);
    return div;
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

    tr.addEventListener("click",
        e => _pizzaRowHandler(e, pizza)
    )
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
    console.log("poniendo cosas");
    fetch('http://localhost:8080/api/pizzas/').then(
        res => res.json()
    ).then(
        res => {
            const spinner = document.querySelector(".lds-spinner");
            spinner.parentNode.removeChild(spinner);
            const container = document.querySelector(".container");
            container.style.display="grid";
            render(res)
        }

    ).catch(
        err => console.log(err)
    )
    
}

document.body.addEventListener("load", init());
