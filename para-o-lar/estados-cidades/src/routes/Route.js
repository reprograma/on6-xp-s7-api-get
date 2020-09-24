const { Router } = require('express')
const express = require('express')

const route = express.Router()

const controller = require('../controller/Controller')

route.get('/list', controller.listAll)

module.exports = route