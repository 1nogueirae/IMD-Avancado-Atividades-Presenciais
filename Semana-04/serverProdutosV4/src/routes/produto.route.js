const express = require('express');
const router = express.Router();
const { Produto, Tag, sequelize } = require('../db/models');
const produtoMid = require('../middleware/validarProduto.middlware');

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({
    include: [{ model: Tag, as: 'tags', attributes: ['id', 'texto'] }]
  });

  return res.json({ produtos });
});

router.post('/', produtoMid, async (req, res) => {
  const { tags = [], ...produtoBody } = req.body;

  const transaction = await sequelize.transaction();

  try {
    const produto = await Produto.create(produtoBody, { transaction });

    if (tags.length > 0) {
      const tagsPayload = tags.map(tagTexto => ({
        texto: tagTexto,
        produtoId: produto.id
      }));

      await Tag.bulkCreate(tagsPayload, { transaction });
    }

    await transaction.commit();

    return res.status(201).json({ msg: 'Produto adicionado com sucesso!', produtoId: produto.id });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ msg: 'Erro ao salvar produto', erro: error.message });
  }
});

router.put('/:id', produtoMid, async (req, res) => {
  const idProduto = req.params.id;
  const { tags, ...produtoBody } = req.body;

  const produto = await Produto.findByPk(idProduto);
  if (!produto) {
    return res.status(404).json({ msg: 'Produto nao encontrado!' });
  }

  const transaction = await sequelize.transaction();

  try {
    await produto.update(produtoBody, { transaction });

    if (Array.isArray(tags)) {
      await Tag.destroy({ where: { produtoId: produto.id }, transaction });

      if (tags.length > 0) {
        const tagsPayload = tags.map(tagTexto => ({
          texto: tagTexto,
          produtoId: produto.id
        }));

        await Tag.bulkCreate(tagsPayload, { transaction });
      }
    }

    await transaction.commit();

    return res.json({ msg: 'Produto atualizado com sucesso!' });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ msg: 'Erro ao atualizar produto', erro: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const idProduto = req.params.id;

  const produto = await Produto.findByPk(idProduto);
  if (!produto) {
    return res.status(404).json({ msg: 'Produto nao encontrado!' });
  }

  await produto.destroy();
  return res.json({ msg: 'Produto deletado com sucesso!' });
});

module.exports = router;
