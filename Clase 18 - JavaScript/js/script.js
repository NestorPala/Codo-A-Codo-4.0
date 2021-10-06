// Crear arreglos
let lenguajes = ['HTML', 'CSS', 'JS']
let pepe = new Array()
let juancito = []


// Los arreglos son objetos flexibles
const array = [12, 'a', "pepe", false, [1,2,3], {nombre: "juan"}]


// Imprimir elementos del arreglo
console.log(lenguajes[0])


// Propiedades del objeto Array
console.log(lenguajes.length)


// Agregamos un elemento al final
lenguajes[lenguajes.length] = 'SQL'


// Quitamos un elemento del arreglo del final
console.log(lenguajes)
let quitado = lenguajes.pop()
console.log(quitado)
console.log(lenguajes)


// Colocamos un elemento en el arreglo al final
lenguajes.push("SQL")
console.log(lenguajes)
lenguajes.push("PHP")
console.log(lenguajes)


// Los arreglos si se igualan se iguala el puntero, no los valores
let lenguajes2 = lenguajes
console.log(lenguajes2)
lenguajes.push("Python")
console.log(lenguajes2)


// Se pueden insertar elementos en posiciones que aún no existen
let carlos = []
carlos[5] = 2
carlos[6] = "pepe"
console.log(carlos)  //[empty × 5, 2, 'pepe']


// Aplicamos una funcion externa a cada elemento del arreglo
function imprimir(item) {
    console.log(item)
}

lenguajes.forEach(imprimir)


// Aplicamos una funcion anónima a cada elemento del arreglo
lenguajes.forEach(function(item) {
    console.log(item)
})


// Aplicamos una funcion flecha a cada elemento del arreglo
lenguajes.forEach(item => console.log(item))


// Buscamos un elemento en el arreglo
let lenguaje = lenguajes.find(item => item == 'PHP')
console.log(lenguaje)


// Buscamos los elementos del arreglo que cumplan una condición
let numeros = [1,2,3,4,5,6,7]
let nums = numeros.filter(valor => valor % 2 == 0)
console.log(nums)


// Usamos filter para copiar una lista
let numeros2 = numeros.filter(valor => true)
console.log(numeros2)


// Creamos un arreglo nuevo, con los elementos del original, modificados
// Recorre cada elemento y realiza una operación con ese elemento
const resultado = numeros.map(valor => valor * 3)
console.log(resultado)


// Usamos map para copiar una lista
let numeros_copia = numeros.map(valor => valor)
console.log(numeros_copia)


/* ¿map o foreach?

map crea un arreglo nuevo, y si no aplicamos operaciones al arreglo original, en el arreglo nuevo devuelve [undefined, undefined,...,undefined]

foreach itera cada elemento del arreglo pero no crea ningún arreglo nuevo (es in-place)

*/