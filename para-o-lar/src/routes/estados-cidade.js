const express = require('express')
const router = express.Router()
const controller = require ('../controler/estados-cidadeController')

router.get ("/", controller.getAll)

module.exports = router