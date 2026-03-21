const Ajv = require('ajv')
const ajv = new Ajv()
const addFormats = require('ajv-formats')
const ProdutoSchema = require('../schema/produto.schema')
addFormats(ajv)

function validarProduto(req, res, next) {
    const Produto = req.body
    const validate = ajv.compile(ProdutoSchema)
    const valid = validate(Produto)

    if (valid) {
        next()
    } else {
        res.status(400).json({ msg: "Dados inválidos", erros: validate.errors })
    }
}

module.exports = validarProduto