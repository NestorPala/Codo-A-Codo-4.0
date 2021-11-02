const http = require('http')

// Manejo de archivos
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    // Leemos el archivo index.html
    fs.readFile(__dirname + '/index.html', (error, html) => {
        
        if (error) {
            res.writeHead(404)
            //res.write("No se encontró el archivo")
        } else {

            let user = {
                nombre: 'Pepe',
                mail: 'x@x.com'
            }

            res.writeHead(200, {'Content-Type':'application/json'})
            res.write(JSON.stringify(user))
        }

        //terminamos la respuesta del servidor
        res.end()
    })

})

const puerto = 3000

// Iniciamos la conexión
server.listen(puerto, () => console.log(`http://localhost:${puerto}`))