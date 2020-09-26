const app = require("../app") //executando o express dentro da const app

const PORT = 8080

app.listen(PORT, function() {
        console.log("O nosso app esta rodando na porta " + PORT)
    }) //definindo a porta do servidor e rodando na porta local