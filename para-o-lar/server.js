const { request, response } = require("express");


const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function(){
    console.log("O nosso servidor esta rodando na porta" + PORT);
})

