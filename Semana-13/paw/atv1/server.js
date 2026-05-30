const express = require('express')
const app = express()

app.get('/ola_servidor', (req, res) => {
    res.json({ message: 'Oi coleguinas. tudo tranquilo com vocês?' })
})

app.get('/que_horas_sao_por_favor', (req, res) => {
    const dataAtual = new Date()
    const horaAtual = dataAtual.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    res.json({ horaAtual })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
