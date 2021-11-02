
let parrafos = document.querySelectorAll("p")

parrafos.forEach(function(parrafo, index) {

    // if (index % 2 == 0) {
    //     parrafo.style.color = "red"
    // }

    if (parrafo.textContent.length <= 35) {
        parrafo.style.color = "red"
    } else {
        parrafo.style.color = "green"
    }
})


let destacado = document.querySelector(".destacado")
destacado.innerHTML = "<strong>pepe</strong>"


////////////////////////////////////////////////////

//Eventos


const saludar = function() {
    console.log("Hola")
}

// Responder a un click (método 2)
let parrafo = document.querySelector("#carlos")
parrafo.onclick = saludar


// Responder a un click (método 2)
let parrafo2 = document.querySelector("#mariano")
parrafo2.addEventListener("click", saludar)


// La función se carga recién cuando termina de cargarse el contenido
addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


// Prevenimos que se ejecute la función predeterminada del elemento
let link = document.querySelector("a")

link.addEventListener("click", event => {
    event.preventDefault()
    console.log(event.target.href)
})



// Manejo con formularios (en este caso no enviamos los datos hasta que el usuario complete el campo)

let form = document.querySelector("form")

form.addEventListener("submit", event => {

    event.preventDefault()

    let error = false
    let nombre = document.querySelector("#nombre")

    if (nombre.value == "") {
        error = true
        nombre.style.border = "1px solid red"

        let label = nombre.closest("div").querySelector("label")
        label.style.color = "red"

        let span = nombre.closest("div").querySelector("span")
        span.textContent = "El nombre es obligatorio"
        span.style.color = "red"
    } else {
        nombre.style.border = "1px solid black"
    }

    if (!error) form.submit()
})


let nombre = document.querySelector("#nombre")

nombre.addEventListener("click", event => {
    nombre.style.border = "1px solid black"

    let span = nombre.closest("div").querySelector("span")
    span.textContent = ""

    let label = nombre.closest("div").querySelector("label")
    label.style.color = "black"
})