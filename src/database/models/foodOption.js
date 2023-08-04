const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const foodOption = sequelize.define(
  'foodOption',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },

    sizePrice: {
      type: DataTypes.JSON,
      allowNull: true,
    },

    shotPrice: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    hotcoldPrice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  {
    underscored: true,
    underscoredAll: true,
  }
);

module.exports = foodOption;
