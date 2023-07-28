const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const aboutOrder = sequelize.define('aboutOrder', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },

  foodId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  customerId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  amount: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  option: {
    type: DataTypes.JSON,
    allowNull: true,
  },

  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

module.exports = aboutOrder;
