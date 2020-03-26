
const numeros = [];
const numeroadd = prompt("primer numero");
const numeroadd1 = prompt("segundo numero");
const numeroadd2 = prompt("tercer numero");
const numeroadd3 = prompt("cuarto numero");
const numeroadd4 = prompt("quinto numero");

numeros.push(numeroadd);
numeros.push(numeroadd1);
numeros.push(numeroadd2);
numeros.push(numeroadd3);
numeros.push(numeroadd4);
console.log(numeros);

document.write("<ul>");
numeros.forEach(
    (elemento, index) => {
            document.write("<h1>"+"<li>" + index + "- " + elemento + "</li>"+"</h1>");
    }
)
document.write("</ul>");

document.write("<h1>"+"Tiene "+numeros.length+" numeros"+"</h1>");


const valor = prompt("dime un valor:");


const indice = numeros.indexOf(valor);

if(indice !== -1){
  console.log("Si que esta");
  document.write("<br>")
  document.write("<h1>"+"si que esta "+"</h1>");
}else{
    document.write("<br>")
  console.log("No esta");
  document.write("<h1>"+"No esta"+"</h1>");
}

const reversed = numeros.reverse();
console.log('numeros:', reversed);
document.write("<br>")
document.write("<h1>"+"numeros al contrario: ","<li>" + reversed+"</li>"+"</h1>");


numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);

document.write("<h1>"+"Ordenados: "+ numeros+"</h1>");