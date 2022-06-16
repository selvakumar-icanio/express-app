const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection");
const { TABLE_NAME } = require("../../constants");

/**
 * Defining a structure for the Book model
 */
const Author = sequelize.define(
  TABLE_NAME.author,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: TABLE_NAME.author,
    timestamps: false,
    // Other model options go here
  }
);

module.exports = Author;
