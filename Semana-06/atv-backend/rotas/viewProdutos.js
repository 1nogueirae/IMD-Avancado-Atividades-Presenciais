const express = require('express')
const router = express.Router()
const { Produto, Tag } = require('../models')

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll({
        include: [
            {
                model: Tag,
            },
        ],
        raw: false,
        nest: true,
    })
    res.render('pages/produtos', { produtos })
})

module.exports = router