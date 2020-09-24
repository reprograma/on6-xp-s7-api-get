const app = require('./src/app')

const PORT = 8080

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`)
})