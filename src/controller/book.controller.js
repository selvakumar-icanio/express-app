const bookDao = require("../dao/book.dao");

/**
 * Creating a book controller object
 */
var bookController = {
  addBook: addBook,
  findBooks: findBooks,
  findBookById: findBookById,
  updateBook: updateBook,
  deleteById: deleteById,
};

function addBook(req, res) {
  bookDao
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findBookById(req, res) {
  bookDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  bookDao
    .deleteById(req.params.id)
    .then((data) => {
        res.send({
          message: "Book deleted successfully",
          book: data,
        });
    
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateBook(req, res) {
  bookDao
    .updateBook(req.body, req.params.id)
    .then((data) => {
      res.send({
        message: "Book updated successfully",
        book: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findBooks(req, res) {
  bookDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = bookController;
