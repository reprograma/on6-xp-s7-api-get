const express = require('express')

const app = express()

const routeColors = require('./routes/colorsRoute')

app.use('/colors', routeColors)

module.exports = app
