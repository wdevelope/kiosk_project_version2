const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const food = sequelize.define(
  'food',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },

    optionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    type: {
      type: DataTypes.ENUM('coffee', 'juice', 'bread'),
      allowNull: true,
    },

    amount: {
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
        fields: ['type'],
      },
    ],
  }
);

module.exports = food;
