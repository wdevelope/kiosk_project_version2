const sequelize = require('sequelize');
const dotenv = require('dotenv');
const sequelize = require('sequelize');

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

module.export = mysql;
