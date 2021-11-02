
let edad = 12

if (edad >= 13) {
    console.log("Puedes crear tu cuenta")
} else {
    console.log("No puedes ingresar a esta red social")
}


// Asignación, se cumple siempre que el valor no esté vacío. Incorrecto su uso de esta forma.
if (edad = 12) {
    console.log("Pepe")
}


// Comparación de valor, se cumple si el valor es igual independientemente del tipo de dato (digamos que "castea antes de comparar")
if (edad == '12') {
    console.log("Pepe2")
}


// Comparación de variable, compara el valor y además que sean del mismo tipo de dato ("no castea antes de comparar")
if (edad === '12') {
    console.log("Pepe3")
}