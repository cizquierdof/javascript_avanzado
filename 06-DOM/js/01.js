// formas de recuperar un elemento

// por id (tiene que tener id )
// devuelve 1
// SE USA BASTANTE
const mienlace = document.getElementById("mienlace");

// por nombre de clase
// nos devuelve un objeto colecciónque podemos tratar como un array
document.getElementsByClassName("item")
document.getElementsByClassName("item")[1]

// por tipo de elemento, devuelve colección
document.getElementsByTagName("li")

// con selectores css
// este nos devuelve el primero que encuentra
document.querySelector("ul li");

// este nos devuelve una colección
document.querySelectorAll("ul li");

const misdivitems = document.querySelectorAll(".contenedor .elemento");
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
)

// Como crear elementos y añadirlos al DOM
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "nuevo elemento de la lista";
ul.appendChild(li);
const h1 = document.createElement("h1");
h1.innerText="hola";
ul.prepend(h1);

//ul.removeChild(li);
const li2 = document.createElement("li");
li.innerText = "otro más";
li.parentElement.appendChild(li2);




