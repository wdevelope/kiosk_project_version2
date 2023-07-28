const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const companyOrder = sequelize.define('companyOrder', {
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

  state: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = companyOrder;
