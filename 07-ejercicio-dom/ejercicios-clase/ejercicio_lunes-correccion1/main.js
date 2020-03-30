import pizzas from '../../pizzas-content.js';

/* window.addEventListener('load', () => { */
function _createTableHeader() {
    console.log("Esta es mi funcion");

    const newTr = document.createElement("tr");

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");

    const texto1 = document.createTextNode("id");
    th1.appendChild(texto1);

    const texto2 = document.createTextNode("nombre");
    th2.appendChild(texto2)

    newTr.appendChild(th1);
    newTr.appendChild(th2);

    newTr.style.fontSize = "40px";
    newTr.style.fontWeight = "bold";
    newTr.style.textTransform = "capitalize";
    th1.style.border = ("3px solid black");
    th2.style.border = ("3px solid black");
    th1.style.background = ("black");
    th2.style.background = ("black");
    newTr.style.color = "white";
    newTr.style.background = " #232323";
    newTr.style.textShadow = " 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18";
    newTr.style.color = "white";
    newTr.style.background = "#232323";

    th1.addEventListener('mouseover', function () {
        th1.style.background = "red"; th1.style.transform = "scale(1.1)";
        th1.style.color = ("black");


    });
    th1.addEventListener('mouseout', function () {
        th1.style.background = "white"; th1.style.transform = "scale(1)";
        th1.style.background = ("black");
        th2.style.background = ("black");
        newTr.style.color = "white";
        newTr.style.background = " #232323";
        newTr.style.textShadow = " 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18";
        newTr.style.color = "white";
        newTr.style.background = "#232323";
    });

    th2.addEventListener('mouseover', function () {
        th2.style.background = "red"; th2.style.transform = "scale(1.1)";
        th2.style.color = ("black");
    });
    th2.addEventListener('mouseout', function () {
        th2.style.background = "white"; th2.style.transform = "scale(1)";
        th1.style.background = ("black");
        th2.style.background = ("black");
        newTr.style.color = "white";
        newTr.style.background = " #232323";
        newTr.style.textShadow = " 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18";
        newTr.style.color = "white";
        newTr.style.background = "#232323";
    });


    return newTr;
}
/* document.getElementById("cabecero").appendChild(_createTableHeader()); */
window._createTableHeader = _createTableHeader;

function _createTableRow() {
    let divingredientes = document.getElementById("ingredientes");


    let trbase = document.createElement("tr");
    for (let i = 0; i < pizzas.length; i++) {

        let tr1 = document.createElement("tr");




        let tdid = document.createElement("td");
        let tdnombre = document.createElement("td");
        let textoCelda = document.createTextNode(pizzas[i].id);
        let textonombre = document.createTextNode(pizzas[i].nombre);


        tdid.appendChild(textoCelda);
        tdnombre.appendChild(textonombre);
        tr1.appendChild(tdid);
        tr1.appendChild(tdnombre);
        trbase.appendChild(tr1)
        tdid.style.border = ("5px solid black");
        tdnombre.style.border = ("5px solid black");

        if (i % 2 === 0) {
            tr1.style.backgroundColor = "black";
            tr1.style.color = "white";

            tr1.addEventListener('mouseover', function () {
                tr1.style.background = "white"; tr1.style.color = "black"; tr1.style.transform = "scale(1.1)";
               /*  divingredientes.style.display = "block"; */
            });
            tr1.addEventListener('mouseout', function () {
                tr1.style.background = "black"; tr1.style.color = "white"; tr1.style.transform = "scale(1)";
               /*  divingredientes.style.display = "none"; */
            });
            tr1.addEventListener('click', function1);

        } else {
            tr1.style.color = "white";
            tr1.style.backgroundColor = "blue";
            tr1.style.color = "white";

            tr1.addEventListener('mouseover', function () {
                tr1.style.background = "white"; tr1.style.color = "black"; tr1.style.transform = "scale(1.1)";
               /*  divingredientes.style.display = "block"; */

            });
            tr1.addEventListener('mouseout', function () {
                tr1.style.background = "blue"; tr1.style.color = "white"; tr1.style.transform = "scale(1)";
             /*    divingredientes.style.display = "none"; */
            });
            tr1.addEventListener('click', function1);

        }
        function function1() {
            mostrarIngredientes(pizzas[i].nombre);
            divingredientes.style.display = "block";
            mostrarComentario(pizzas[i].nombre);
            tr1.removeEventListener('click', function1);
            tr1.addEventListener('click', function2);
        }

        function function2() {
          /*   location.reload(); */
          
            tr1.removeEventListener('click', function2);
            tr1.addEventListener('click', function1);
        }

        trbase.style.display = "contents";
    }

    return trbase;

}

/* document.getElementById("contenido").appendChild(_createTableRow());  */
window._createTableRow = _createTableRow;



function createTable() {
    const tabla = document.createElement("table");
    const header = _createTableHeader();
    const row = _createTableRow();
    tabla.appendChild(header);
    tabla.appendChild(row);
    tabla.style.backgroundColor = "red";
    tabla.style.border = "1px solid black";
    console.log(tabla.children);


    return tabla;

}
document.getElementById("table").appendChild(createTable());
window.createTable = createTable;


//ventana ingredientes y ponemos texto pizza world arriba

let mydiv1 = document.getElementById("table1");
let mydiv2 = document.getElementById("table2");
let mydiv4 = document.getElementById("ingredientes");
console.log(mydiv1);
mydiv1.style.backgroundImage = "url('./chef.jpg')";
mydiv1.style.backgroundSize = "83%";
mydiv1.style.maxHeight = "300px";
mydiv1.style.backgroundPosition = "center";

let texto = document.createTextNode("Pizza World");

mydiv1.style.color = "black";
mydiv2.style.color = "white";
mydiv4.style.background = "black";
/* mydiv4.style.backgroundImage = "url('./librreta.png')"; */
mydiv4.style.display = "none";
 mydiv4.style.textAlign = "center"; 
mydiv4.style.paddingTop = "5px";
mydiv4.style.color="white";
 mydiv4.style.backgroundSize = "cover";

/*mydiv4.style.backgroundRepeat="no-repeat";
mydiv4.style.backgroundPositionX = "auto";
mydiv4.style.backgroundPositionY = "auto"; */

mydiv1.style.fontSize = "30px";
mydiv2.appendChild(texto);
mydiv2.style.webkitTextStroke="2px black";

function intervalo() {

    let tiempo = setInterval(function () {

        if (mydiv2.style.textAlign == "right") {
            mydiv2.style.textAlign = "left";
        } else {
            mydiv2.style.textAlign = "right";
        }

        return tiempo;
    }, 1000);
}
intervalo();

function mostrarIngredientes(pizza) {



    let divingredientes = document.getElementById("ingredientes");
    divingredientes.innerHTML="";

    let nombre = document.createElement("span");
    let nombrepizza = document.createTextNode(pizza);

    divingredientes.appendChild(nombre);
    nombre.appendChild(nombrepizza);

    let ingredient = document.createElement("ul");
    divingredientes.appendChild(ingredient);
   

    for (let i = 0; i < pizzas.length; i++) {

        if (pizzas[i].nombre == pizza) {

            for (let j in pizzas[i].listaIngredientes) {
                let ingrediente = document.createElement("li");
                let pizzaingrediente = document.createTextNode(pizzas[i].listaIngredientes[j].nombre);
                ingredient.appendChild(ingrediente);
                ingrediente.appendChild(pizzaingrediente);
            }
        }
        nombre.style.textAlign = "center";
        ingredient.style.fontSize = "20px";
        nombre.style.fontSize="30px"
        ingredient.style.textTransform="uppercase";
        nombre.style.textTransform="uppercase";
        nombre.style.borderBottom="5px solid white";
        nombre.style.webkitTextStroke="1px red";
       
       
      
    }
    return divingredientes;
}

window.mostrarIngredientes = mostrarIngredientes;

//creamos la ventana para comentarios

let mydiv5 = document.getElementById("comentarios");

function mostrarComentario(pizza) {

    let mydiv5 = document.getElementById("comentarios");
    mydiv5.innerHTML="";

    let com = document.createElement("h4");
    mydiv5.appendChild(com);

    mydiv5.style.overflow="auto";
    mydiv5.style.background="black";
    mydiv5.style.color="white";
    mydiv5.style. fontSize="initial";
    mydiv5.style.textAlign="center";
  

    for (let i = 0; i < pizzas.length; i++) {

        if (pizzas[i].nombre == pizza) {

            for (let j in pizzas[i].listaComentarios) {
                let coment = document.createElement("p");
                let comentari = document.createTextNode(pizzas[i].listaComentarios[j].texto);
                com.appendChild(coment);
                coment.appendChild(comentari);
                coment.style.textTransform="uppercase";
            }
        }
   
    }
    return mydiv5;
}
window.mostrarComentario = mostrarComentario;