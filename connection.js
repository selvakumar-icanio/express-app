const { Sequelize } = require("sequelize");

/**
 * Creating a connection variable to the DB using Sequelize 
 */
const sequelize = new Sequelize('library', 'root', 'Iamadmin@2000', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = {sequelize};