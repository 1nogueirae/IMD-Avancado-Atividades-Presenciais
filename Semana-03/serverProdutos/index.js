const { v4: uuidv4 } = require('uuid');

const express = require('express')
const app = express()
app.use(express.json())
const port = 8080

const produtos = {};

app.get('/produtos', (req, res) => {
  res.json({ produtos: Object.values(produtos) })
})

app.post('/produtos', (req, res) => {
  const produto = req.body
  const idProduto = uuidv4()
  produto.id = idProduto
  produtos[idProduto] = produto
  res.json({ msg: "Produto adicionado com sucesso!" })
})

app.put('/produtos/:id', (req, res) => {
  const idProduto = req.params.id
  if (idProduto && produtos[idProduto]) {
    const produto = req.body
    produto.id = idProduto
    produtos[idProduto] = produto
    res.json({ msg: "Produto atualizado com sucesso!" })
  } else {
    res.status(400).json({ msg: "Produto não encontrado!" })
  }
})

app.delete('/produtos/:id', (req, res) => {
  const idProduto = req.params.id
  if (idProduto && produtos[idProduto]) {
    delete produtos[idProduto]
    res.json({ msg: "Produto deletado com sucesso!" })
  } else {
    res.status(400).json({ msg: "Produto não encontrado!" })
  }
})

app.listen(port, (req, res) => {
})