const express = require('express');
const app = express()



app.get('/', function (request, response) {
    response.send('Server listen in port 8080')
})

app.listen(8080)