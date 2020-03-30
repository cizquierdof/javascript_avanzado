// callbacks-basic


const suma = (a,b) => a+b;
const resta = (a,b) => a-b;

const oper = (a,b, callback) => {
    return callback(a,b);
}

console.log(oper(7,4,suma));
console.log(oper(7,4,resta));

