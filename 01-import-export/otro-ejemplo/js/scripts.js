import {getMensaje} from './getMensaje.js';


export const calculaArea = (b, a) => {
    return b*a;
}

export const escribeAlgo = (item) => {
    console.log(item);
    //document.write("<h1>"+getMensaje("en")+"</h1>");
    item.innerHTML ="<h1>"+getMensaje("en")+"</h1>";
}

export const init = () => {
    window.escribeAlgo = escribeAlgo;
}

console.log("kkkk")



