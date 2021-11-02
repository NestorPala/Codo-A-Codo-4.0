//Document Objet Manager (DOM)


//window


// Ver y modificar propiedades del documento HTML actual
console.log(document.title)
document.title = "DOM"


//document.getElement...


// Trae el primer elemento h2 del documento
//document.querySelector("h2")


// Trae todos los elementos h2 del documento, en forma de lista
//document.querySelectorAll("h2")
//document.querySelectorAll("h2")[1]
//document.querySelectorAll("h2")[1].forEach(...)


// Ver/Cambiar propiedades de CSS
let titulo = document.querySelector("h2")
titulo.style.fontSize = "32px"
titulo.style.setProperty("font-size", "18px")

let parrafo = document.querySelector('.destacado')
console.log(parrafo)


// Element.classList (permite modificar las clases de un elemento del html)


// Agregar contenido dinámicamente al documento HTML actual 
//(usar: https://elcodigoascii.com.ar/codigos-ascii/acento-grave-codigo-ascii-96.html)
const caja = document.getElementById('caja')

let html = `
    <h2>Subtítulo<h2>
    <p>lorem ipsum bla bla bla dshafkjahfeuiryhe<p>
`

caja.textContent = html  //funciona también sin esto
caja.innerHTML = html
