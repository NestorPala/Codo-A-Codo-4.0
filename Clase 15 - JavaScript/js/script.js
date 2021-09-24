/* este es un comentario
de más de una línea 
*/


const PI = 3.1416
const PUBLIC_KEY = "78ff7839bd84gf847w7fw7hf8w"


//no se suele usar punto y coma, excepto en algunos casos que es necesario
let numero_uno = 123;


//cuando se acumulan instrucciones en una misma línea, se usa ";"
numero_uno = 1434; numero_uno = -323; numero_uno = 881


//los únicos símbolos raros permitidos son "$" y "_", y números, pero no al principio
let _numeroDos = 2434.54
let $numero3 = -737


//muestra un mensaje por la consola de desarrollo (ctrl + shift + i)
console.log(numero_uno)
console.log(_numeroDos)
console.log($numero3)
console.log(PI)
console.log(PUBLIC_KEY)


//muestra un mensaje via pop-up del navegador
$username = "Nestor"
alert("Hola, " + $username)


//input() via pop-up del navegador
/**************************************************************** */
let edad = prompt("Ingrese su edad:  ")
let respuesta = confirm("¿Está seguro que su edad es " + edad + "?")

console.log(respuesta)
alert("Su edad es: " + edad)
/**************************************************************** */


//tipos de variables: number, string, boolean
/**************************************************************** */
let pepe = -12.48
console.log(typeof(pepe))
pepe = "Abc-def_+32,we."
console.log(typeof pepe)
pepe = true
console.log(typeof pepe)
/**************************************************************** */


//Manejar números (ejemplo)
/**************************************************************** */
let num1 = prompt("Ingrese un número: ")

num1 = Number(num1)
//el "casteo" a Number es necesario porque prompt() solo devuelve strings
//num1 = ParseInt(numero)
//num1 = ParseFloat(numero)

let num2 = prompt("Ingrese otro número: ")
num2 = Number(num2)

let resultado = num1 + num2
let mensaje = "El resultado de la suma es: " + resultado

alert(mensaje)
/**************************************************************** */
