require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/productos'))
app.use('/', require('./routes/contacto'))

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`http://localhost:${port}`))