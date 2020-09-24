const express = require('express')

const app = express()

const routes = require('./routes/routes')


app.use('/archive', routes)


module.exports = app
