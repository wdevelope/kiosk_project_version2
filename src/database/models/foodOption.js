const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const foodOption = sequelize.define('foodOption', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },

  sizePrice: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  shotPrice: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  hotcoldePrice: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = foodOption;
