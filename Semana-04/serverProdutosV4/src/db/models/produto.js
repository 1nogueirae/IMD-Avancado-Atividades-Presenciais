'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.hasMany(models.Tag, {
        foreignKey: 'produtoId',
        as: 'tags',
        onDelete: 'CASCADE'
      });
    }
  }

  Produto.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: DataTypes.STRING,
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Produto'
    }
  );

  return Produto;
};
