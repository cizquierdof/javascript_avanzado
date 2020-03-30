const p1 = new Promise (
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve("pepe")
            }, 
            5000
        )
    }
)

const p2 = new Promise (
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve("juan")
            }, 
            1000
        )
    }
)

// p1.then(console.log);
// p2.then(console.log);


// Da siempre el valor de la primera que se ejecuta, sea resolve o reject
const pall = Promise.race([p1,p2]);
pall.then(console.log);

const p3 = new Promise (
    (resolve, reject) => {
        setTimeout(
            () => {
                reject("error")
            }, 
            400
        )
    }
)

const pall2 = Promise.race([p1,p2,p3]);

// Al primer error salta
pall2.then(console.log).catch(console.log);
