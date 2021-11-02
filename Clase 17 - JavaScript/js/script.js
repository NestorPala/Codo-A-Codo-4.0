
function saludar(nombre = "Usuario", n = 1) {

    for (let i = 0; i<n; i++) {
        document.write("¡Hola, " + nombre + "! ")
    }
}


function suma(num1 = 0, num2 = 0) {

    num1 = Number(num1)
    num2 = Number(num2)

    if (isNaN(num1) || isNaN(num2)) {
        return "Error"
    } else {

        //   num1+num2: concatena los strings
        // (num1+num2): suma los valores
        return (num1 + num2)
    }
}


// Escribimos directamente en el archivo html que llamó a este script
document.write("<h2> Subtítulo agregado por script </h2>")


saludar("Pepe", 12)


// <br>: salto de línea HTML
document.write("<br>La suma es: " + suma(30, 32))


// Expresión de función
const mensaje = function() {
    console.log("Pasaron 5 segundos")
}


// Función anónima
// setTimeout(function() {
//     console.log("Pasaron 5 segundos")
// }, 5000)


// setTimeout es una función asíncrona, es decir, el código se sigue ejecutando y setTimeout corre en paralelo
setTimeout(mensaje, 5000)


console.log("Esperando 5 segundos")


/*****************************************/


// Callbacks (punteros a funciones)

const sumar = function(num1, num2) {
    return num1 + num2
}

const restar = function(num1, num2) {
    return num1 - num2
}

const calcular = function(num1, num2, operacion) {
    return operacion(num1, num2)
}

let resultado = calcular(1, 2, sumar)

console.log(resultado)


/*****************************************/


// Arrow functions (funciones flecha)
// Tienen el return implícito

const sumar2 = (num1, num2) => num1 + num2
const restar2 = (num1, num2) => num1 - num2

let resta = 0
console.log("La resta de los números es: " + restar2(100, 25))


//() es porque no recibe ningún parámetro
setTimeout(() => console.log("Pasaron otros 2 segundos"), 2000)


/*****************************************/
