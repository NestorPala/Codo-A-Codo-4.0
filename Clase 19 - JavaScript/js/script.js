
// Objetos en JS
let persona = {
    nombre: "Juan",
    edad: 21,
    dni: 12345678
}

let auto = {
    marca: "Ford",
    color: 'Rojo',
    modelo: 2021,
    puertas: 5,
}


// Acceder a los objetos y/o sus propiedades
console.log(persona)
console.log(auto)
console.log(persona.nombre)
console.log(auto["color"])


// Agregar propiedades al objeto ya creado
auto.ruedas = 4


// Cambiar una propiedad ya creada
persona['nombre'] = "Pedro"
auto.color = "azul"
console.log(persona)
console.log(auto)


// Borrar una propiedad a un objeto
console.log(auto)
delete(auto.modelo)
console.log(auto)
console.log(auto.modelo) //undefined


// Propiedades con forma extraña (traidos de .json)
let elemento = {
    "id": 1, 
    "nombre": "Pepe"
}

console.log(elemento.id)
console.log(elemento["id"])


//JSON.stringify(persona)  //convierte objetos JS a JSON


// Saber si un objeto tiene una propiedad
console.log("edad" in persona)


// Recorrer un objeto
for (key in persona) {
    console.log(key + ": " + persona[key])
}


// Agregar funciones a un objeto (usar ````````)
auto.detalle = function() {
    console.log(`
        Marca: ${this.marca}
        Modelo: ${this.modelo}
    `)
}


// Se puede agregar la función directamente en el objeto
let cosa = {
    id: 21,
    nombre: "Juancito",
    detalle: function() {  // forma larga
        console.log("Hola")
    }, 
    detalle2() {  // forma corta
        console.log("Hola 2")
    }
}


// Clases
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

let usuario = new User(123, "Mariana")
