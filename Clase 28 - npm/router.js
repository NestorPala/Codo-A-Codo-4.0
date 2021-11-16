const express = require('express')
const router = express.Router()
const productos = require('./productos')

router.get('/', (req, res) => {
    res.send('Hola Express')
})

router.get('/productos', (req, res) => {
    //res.send('Listado de productos')
    res.render('productos/index', {productos : productos.all()})
})

router.get('/productos/:nro', (req, res) => {
    res.render('productos/show', {nro : req.params.nro})
})

module.exports = router