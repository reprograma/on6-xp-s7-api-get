//chamando a aplicação pelo caminho dentro das pastas
const app = require("./src/app")

//variável da porta do servidor
const PORT = 8080

//função para a aplicação usar o servidor e imprimir se está ok
app.listen(PORT, function(){
    console.log('O servidor dos exercícios está funcionando e rodando na porta: ' + PORT)
})

