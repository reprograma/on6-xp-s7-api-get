const router = require("../servidor/node_modules/express").Router() //chamando uma função do express Router(rota)
const controller = require("../controller/coresController")

router.get("/", controller.getAll)

module.exports = router