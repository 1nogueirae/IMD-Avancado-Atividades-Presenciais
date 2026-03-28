const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ProdutoSchema = require('../schema/produto.schema.js');

const ajv = new Ajv();
addFormats(ajv);

function validarProduto(req, res, next) {
  const produto = req.body;
  const validate = ajv.compile(ProdutoSchema);
  const valid = validate(produto);

  if (valid) {
    return next();
  }

  return res.status(400).json({ msg: 'Dados invalidos', erros: validate.errors });
}

module.exports = validarProduto;
