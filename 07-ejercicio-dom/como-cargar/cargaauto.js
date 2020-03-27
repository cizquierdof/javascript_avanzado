const elemento = () => {
    const a = document.createElement("a");
    a.href = "www.google.com";
    a.innerText="Mi enlace";
    return a;
}

const renderElement = () => {
    document.getElementById("midiv").appendChild(elemento());
}

export const init = () => {
    document.querySelector("body").addEventListener("load", renderElement());
}



