const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator')

router.get('/contacto', (req, res) => {
    res.render('contacto', { values: {} })
})

router.post('/contacto', [
    body('nombre', 'Ingresar por lo menos 3 caracteres')
        .isLength(3).trim().escape(),
    body('email', 'Debe ser un email').isEmail().escape(),
    body('mensaje', 'No puede estar vacio').notEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('contacto', { values: req.body, errors: errors.array() })
    } else {
        res.send('Enviando...')
    }
    // console.log(errors.array())
    // console.log(req.body)
})

module.exports = router