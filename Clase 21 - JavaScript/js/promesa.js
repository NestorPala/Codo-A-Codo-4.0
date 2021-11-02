// Utilizamos las promesas para ejecutar llamadas a funciones con respuestas asincrónicas, de manera sincrónica

// Una Promise (promesa) es un objeto que envía datos y recibe una respuesta

// Una promesa se ejecuta con Promise.then(), y devuelve un response (respuesta)

// Una promesa tiene dos tipos de respuestas: resolve() (resolver petición) y reject() (rechazar petición)

// Cuando una promesa devuelve un reject, el error (objeto tipo error) se atrapa usando Promise.catch()

// Promesas encadenadas (la respuesta de un Promise se envía a otro): Promise.then().then().then().then() ... .catch(error)


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Resuelto"), 1000)
})

promise.then(response => console.log(response))

// ---

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Error!!!")), 1000)
})

promise.catch(error => console.error(error))

// ---

const multiplicar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return Promise.reject('Los valores de los parámetros no son números')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1: num1,
                num2: num2,
                resultado: num1 * num2
            })
        }, 500)
    })
}

multiplicar(1, 2)
    .then((response) => {
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
        return multiplicar(2, 2)
    })
    .then((response) => {
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
        return multiplicar(3, 2)
    })
    .then((response) => {
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
        return multiplicar(4, 'dos')
    })
    .then((response) => {
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
        return multiplicar(5, 2)
    })
    .then((response) => {
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`)
    })
    .catch(error => console.error(error))