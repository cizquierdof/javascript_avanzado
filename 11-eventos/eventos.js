function init() {

    const miboton = document.getElementById("miboton");
    const midiv = document.querySelector("#midiv");
    const inputList = document.querySelectorAll("input");
    const texto = document.querySelector("#texto");


    // Eventos de ratón 

    // Evento del click
    miboton.addEventListener("click",
        () => {
            midiv.innerText = "Clicked";
        }
    );


    // mouseover
    midiv.addEventListener("mouseover", () => {
        midiv.style.backgroundColor = "blue";
    })

    // mouseout
    midiv.addEventListener("mouseout", () => {
        midiv.style.backgroundColor = "yellow";
    })

    // focus y blur

    inputList.forEach(element => {
        console.log(element)
        element.addEventListener("focus", () => {
            element.style.backgroundColor = "lightblue";
        })
        // blur pérdida de foco
        element.addEventListener("blur", () => {
            element.style.backgroundColor = "white";
        }
        )
    });


    // keydown
    document.body.addEventListener(
        "keydown",
        (event) => {
            //   console.log(event);
            midiv.innerText = event.key;
        }
    )

    // keyup
    document.body.addEventListener(
        "keyup",
        () => midiv.innerText = ""
    )


    // keypress
    document.body.addEventListener(
        "keypress",
        (event) => {
            const t = texto.innerText;
            texto.innerText = t + event.key;
        }
    )




    // change
    // inputList.forEach( element => {
    //     element.addEventListener(
    //         "change", 
    //         (event) => {
    //             console.log(event);
    //             console.log(event.target);
    //             console.log(event.target.value);
    //             event.target.value = event.target.value.toUpperCase();
    //         }
    //     )
    // }
    // )

    const enMayúsculas =  (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        event.target.value = event.target.value.toUpperCase();
    };

    inputList.forEach(element => {
        element.addEventListener(
            "keyup",
            //(event) => enMayúsculas(event)
            enMayúsculas
        )
    })
}

//load





