const express = require('express')

const app = express()

const route = require('./routes/Route')

app.use('/states-cities', route)

module.exports = app