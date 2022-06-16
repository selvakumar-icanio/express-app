const { DataTypes } = require("sequelize");
const { sequelize } = require("../../connection");
const { TABLE_NAME } = require("../../constants");

/**
 * Defining a structure for the Book model
 */
const BookAuthor = sequelize.define(
  TABLE_NAME.bookAuthor,
  {
    BookId: {
      type: DataTypes.INTEGER,
    },
    AuthorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: TABLE_NAME.bookAuthor,
    timestamps: false,
    // Other model options go here
  }
);

module.exports = BookAuthor;
