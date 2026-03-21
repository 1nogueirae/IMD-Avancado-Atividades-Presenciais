const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const produtoMid = require('../middleware/validarProduto.middlware')

const produtos = {};

router.get('/', (req, res) => {
  res.json({ produtos: Object.values(produtos) })
})

router.post('/', produtoMid, (req, res) => {
  const produto = req.body

  const idProduto = uuidv4()
  produto.id = idProduto
  produtos[idProduto] = produto
  res.json({ msg: "Produto adicionado com sucesso!" })
})

router.put('/:id', produtoMid, (req, res) => {
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

router.delete('/:id', (req, res) => {
  const idProduto = req.params.id
  if (idProduto && produtos[idProduto]) {
    delete produtos[idProduto]
    res.json({ msg: "Produto deletado com sucesso!" })
  } else {
    res.status(400).json({ msg: "Produto não encontrado!" })
  }
})

module.exports = router