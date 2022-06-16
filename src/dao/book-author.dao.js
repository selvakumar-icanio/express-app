const BookAuthor = require('../model/book-author.model');

var bookAuthorDao = {
    create: create,
  
}

function create(bookAuthor) {
    var newBookAuthor = new BookAuthor(bookAuthor);
    return newBookAuthor.save();
}

module.exports = bookAuthorDao;