const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const app = express()

app.use(express.json())

app.get('/token', (req, res) => {
    const jwt_secret = process.env.SECRET_APP_KEY

    const payload = {
        nome: 'João',
        randomValue: Math.random()
    }

    const token = jwt.sign(payload, jwt_secret, { expiresIn: '1h' })

    res.json({
        token: token,
        generatedAt: new Date().toISOString(),
        expiresIn: '1h',
        randomValue: Math.random()
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
