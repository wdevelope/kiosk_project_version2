const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const aboutOrder = sequelize.define('aboutOrder', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = aboutOrder;
