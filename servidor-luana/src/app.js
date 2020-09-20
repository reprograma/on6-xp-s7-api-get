const express = require('express')
const app = express()

const colors_rgb_route = require('./routes/colors-rgb-route')
const estados_cidades_route = require('./routes/estados-cidades-route')
const filmesRoute = require('./routes/filmesRoute')
const ghibliRoute = require('./routes/ghibliRoute')

app.use('/colors-rgb', colors_rgb_route)

app.use('/estados-cidades', estados_cidades_route)

app.use('/filmes', filmesRoute)

app.use('/ghibli', ghibliRoute)

module.exports = app