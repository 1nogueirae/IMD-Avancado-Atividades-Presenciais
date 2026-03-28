const express = require('express')
const router = express.Router()
const { Produto } = require('../db/models')
const produtoMid = require('../middleware/validarProduto.middlware')

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll()
  res.json({ produtos: produtos })
})

router.post('/', produtoMid, async (req, res) => {
  await Produto.create(req.body)
  res.json({ msg: "Produto adicionado com sucesso!" })
})

router.put('/:id', produtoMid, async (req, res) => {
  const idProduto = req.params.id

  const produto = await Produto.findByPk(idProduto)
  if (!produto) {
    return res.status(404).json({ msg: "Produto não encontrado!" })
  }

  await produto.update(req.body)
  return res.json({ msg: "Produto atualizado com sucesso!" })
})

router.delete('/:id', async (req, res) => {
  const idProduto = req.params.id

  const produto = await Produto.findByPk(idProduto)
  if (!produto) {
    return res.status(404).json({ msg: "Produto não encontrado!" })
  }

  await produto.destroy()
  return res.json({ msg: "Produto deletado com sucesso!" })
})

module.exports = router