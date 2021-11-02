const http = require('http')

// Manejo de archivos
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    // Leemos el archivo index.html
    fs.readFile(__dirname + '/index.html', (error, html) => {
        if (error) {
            res.writeHead(404)
        } else {
            res.write(html)
        }

        //terminamos la respuesta del servidor
        res.end()
    })

})

const puerto = 3000

// Iniciamos la conexión
server.listen(puerto, () => console.log(`http://localhost:${puerto}`))