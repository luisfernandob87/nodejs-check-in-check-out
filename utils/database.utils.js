const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  port: 5432,
  database: 'checkin_checkout',
  logging: false,
});

module.exports = { db, DataTypes };
