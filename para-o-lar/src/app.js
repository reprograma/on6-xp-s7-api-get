const express = require('express')
const app = express()

//rotas
const colors = require('./routes/colorsRoute')
const city = require('./routes/cityRoute')
const films = require('./routes/filmsRoute')
const ghibli = require('./routes/ghibliRoute')

app.use('/cores', colors)
app.use('/cidades', city)
app.use('/filmes', films)
app.use('/ghibli', ghibli)

module.exports = app