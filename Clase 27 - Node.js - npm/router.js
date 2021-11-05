// Utilizamos el módulo Express
const express = require('express')
const router = express.Router()


// Creamos las páginas que vamos a mostrar

let style = `    
            <style>
                #titulo {
                    font-family: consolas; 
                    font-size: 48px;
                    color: white
                }

                body {
                    background-color: blueviolet;
                    font-family: segoe ui
                }
            </style> 
            `

let html = style + `
                    <body>
                        <h1 id="titulo">Hola Express</h1>
                        <p>Clavito pabló un clavo</p>
                    </body>    
                    `

let html2 = style + `
                    <body>
                        <h1 id="titulo">listado de productos</h1>
                        <ul>
                            <li>Pan</li>
                            <li>Leche</li>
                            <li>Arroz</li>
                        </ul>
                    </body>
                    `


// Configuramos las vistas de la página web
router.get('/', (req, res) => {res.send(html)})
router.get('/productos', (req, res) => {res.send(html2)})

router.get('/productos/:id', (req, res) => {
    res.send('Producto numero ' + req.params.id)
})


// Definimos qué parte del documento es visible (importable) desde otro archivo
module.exports = router