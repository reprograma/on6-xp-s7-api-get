//criei uma variável para requerer o express e depois armazenas a função express com o nome app
const express = require("express")
const app = express()

//criei uma variável pra requerer cada uma das rotas que eu criei
const ghibli = require("./routes/ghibliRoute")
const color = require("./routes/colorRoute")

//aqui eu uso a função express com a url que escolhi para chamar no postman ou navegador e a rota que eu criei no passo anterior
app.use("/ghibli", ghibli)
app.use("/colorRGB", color)

//aqui eu exporto o app pra usar no server
module.exports = app