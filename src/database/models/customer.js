const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const customer = sequelize.define(
  'customer',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
    underscoredAll: true,
  }
);

module.exports = customer;
