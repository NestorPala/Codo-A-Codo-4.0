const http = require('http')

const server = http.createServer((request, response) => {
    // http://localhost:3000/
    console.log(request.url, request.method)
    response.write('Hola, ')
    response.end('mundo')
})

const puerto = 3000

server.listen(puerto, () => console.log(`http://localhost:${puerto}`))