const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection");
const { TABLE_NAME } = require("../../constants");

/**
 * Defining a structure for the Book model
 */
const Book = sequelize.define(
  TABLE_NAME.book,
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: TABLE_NAME.book,
    timestamps: false,
    // Other model options go here
  }
);

module.exports = Book;
