const app = require("./src/app")

const PORT = 9090

app.listen(PORT, function () {
    console.log(`O nosso app está rodando na porta ${PORT}`)
})