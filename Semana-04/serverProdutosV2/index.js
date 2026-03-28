const express = require('express')
const routeProduto = require('./src/routes/produto.route')
const app = express()
app.use(express.json())

app.use('/produtos', routeProduto)

app.listen(8080, () => {console.log('Servidor Iniciado')})