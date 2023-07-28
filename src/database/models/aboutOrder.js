const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const aboutOrder = sequelize.define(
  'aboutOrder',
  {
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
  },
  {
    underscored: true,
    underscoredAll: true,
    //인덱스 지정
    indexes: [
      {
        fields: ['food_id'],
      },
      {
        fields: ['customer_id'],
      },
    ],
  }
);

module.exports = aboutOrder;
