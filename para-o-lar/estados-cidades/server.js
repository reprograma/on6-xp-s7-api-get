const app = require('./src/app')

const PORT = 3001

app.listen(PORT, function () {
    console.log(`Server is running in port ${PORT}.`)
})