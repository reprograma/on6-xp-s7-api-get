const express = require('express')

const app = express()

const filmesGhibli = require('./routes/ghibliRoute')
const filmes = require('./routes/filmesRoute')
const estados = require('./routes/estadosRoute')
const cores = require('./routes/colorsRoute')


app.use('/ghibli', filmesGhibli)
app.use('/filmes', filmes)
app.use('/estados', estados)
app.use('/cores', cores)

module.exports = app