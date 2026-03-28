'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsTo(models.Produto, {
        foreignKey: 'produtoId',
        as: 'produto',
        onDelete: 'CASCADE'
      });
    }
  }

  Tag.init(
    {
      texto: {
        type: DataTypes.STRING,
        allowNull: false
      },
      produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Tag'
    }
  );

  return Tag;
};
