
// La fetch API es de javascript ES6

// fetch va a por datos... donde sea ... via http(s)



fetch('https://es.wikipedia.org/wiki/Pandemia_de_enfermedad_por_coronavirus_de_2019-2020')
    .then(res => res.text())
    .then(
        res => {
           console.log(res);
           document.write(res);
        }
    )