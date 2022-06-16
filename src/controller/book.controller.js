const authorDao = require("../dao/author.dao");
const bookAuthorDao = require("../dao/book-author.dao");
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
  const { name, price, author } = req.body;
  console.log(author, "|||||||||||||");
  let reqBody = { name: name, price: price };
  bookDao
    .create(reqBody)
    .then((data) => {
      author.map(el=>{
        bookAuthorDao.create({ BookId : data.id, AuthorId : el})
        .then(response=>{
          console.log(response, "------------------")
        })
      })
      console.log(data, "response--------------");
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
