let func = async () => {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve({ id: 1, nombre: 'Juan' }), 1000)
    })

    let resultado = await promise

    console.log(resultado)
}

func()

// ---

const multiplicar = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return Promise.reject('Los valores de los parámetros no son números')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1: num1,
                num2: num2,
                resultado: num1 * num2
            })
        }, 1000)
    })
}

const table = async () => {
    try {
        let resultado = await multiplicar(1, 2)
        console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)

        resultado = await multiplicar(2, 2)
        console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)

        resultado = await multiplicar(3, 2)
        console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)

        resultado = await multiplicar(4, 2)
        console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)

        resultado = await multiplicar(5, 2)
        console.log(`${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`)
    } catch (error) {
        console.error(error)
    }
}

table()