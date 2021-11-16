//Configuramos las variables de entorno (dotenv)
require('dotenv').config()

// Configuramos el server y el puerto
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Configuramos el middleware que ataja las peticiones de archivos públicos
app.use(express.static(__dirname + '/public'))

// Configuramos las vistas de la página web
app.use('/', require('./router'))

app.use((req, res, next)=>{
    res.status(404).send("Not found")
})

// Iniciamos el server
app.listen(port, () => console.log(`http://localhost:${port}`))

