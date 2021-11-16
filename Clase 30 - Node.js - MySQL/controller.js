const connection = require('./db')

const index = (req, res) => {
    connection.query('SELECT * FROM productos', (error, results) => {
        if (error) throw error
    
        res.render('productos/index', {productos: results})
    })
}

const show = (req, res) => {
    connection.query('SELECT * FROM productos WHERE id = ?', [req.params.nro], (error, results) => {
        if (error) throw error

        if (results.length > 0) {
            res.render('productos/show', {producto: results[0]})
        } else {
            res.send('No se encontro el producto')
        }
    })
}

module.exports = {
    index,
    show
}