
//const express = require('express') //variável que aloca a requisição do express 
//const app = express() // variavel app recebe a espress para execução //não será mais necessário chamar o app pós a organização pelo MVC
const app = require("./src/app")

/*//variavel app atribuida a propriedade GET do express com o parâmetro da URL ('/') e as requisições de solicitação e resposta (request e response)
app.get('/', function (request, response) {
    response.send("E aí fenomenal, seja bem vindo!")// Resposta do request na URL -> Hello word!
})*/ //-> as rotas foram passadas para o arquivo filmes e são chamadas pelo app, por isso esse arquivo pós aorganização do padrão MVC se torna desnecessário.

//app.listen(8080) //Determinando a porta no qual o servidor subirá pela variável app no método listen

const PORT = 8080

app.listen(PORT, function () {
    console.log("O nosso app esta rodando na porta" + PORT)
})



