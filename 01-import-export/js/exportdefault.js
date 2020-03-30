// Ejemplo de export default

const _nombreAutor = "Pepe";

const _privatefunction = () => {
    return _nombreAutor;
};

const nombreDelAutor = () => {
    return "El autor se llama " + _privatefunction();
}

export default nombreDelAutor;


