const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

const aboutOrder = sequelize.define('aboutOrder', {});

module.exports = aboutOrder;
