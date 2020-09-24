const express = require('express')

const router = express.Router()

const controller = require('../controllers/controller')

router.get('/colors', controller.getAll)

router.get('/places', controller.listAll)

router.get('/movies', controller.showAll)

router.get('/ghibli', controller.listGhibli)


module.exports = router