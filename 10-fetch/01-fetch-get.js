
// La fetch API es de javascript ES6

// fetch va a por datos... donde sea ... via http(s)


// El fetch va a por una respuesta, si obtiene una respuesta, es un "resolve"
// fetch('https://jsonplaceholder.typicode.com/users').then(
//     res => {
//         console.log(res);
//         console.log(`La url invocada es ${res.url}`);
//         return res.json();
//     }
// )
// .then(
//     res => {
//         console.log("ya tengo formateados los datos");
//         console.log(res);
//         res.forEach(element => {
//             const li = document.createElement("li");
//             li.innerText = element.name;
//             document.getElementById("lista").appendChild(li)
//         });
//     }
// )


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(
        res => {
            res.forEach(element => {
                const li = document.createElement("li");
                li.innerText = element.name;
                document.getElementById("lista").appendChild(li)
            });
        }
    )