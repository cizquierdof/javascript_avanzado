const boton=document.getElementById("pulsador");
const cambia=(c)=>{
    boton.style.backgroundColor= c;
}
//boton.onmouseenter=()=>{cambia('black')};
boton.onmouseleave=()=>{cambia('cornflowerblue')};
boton.onmouseover=()=>{cambia('white')};

boton.onclick=()=>{alert('Pulsado')};
