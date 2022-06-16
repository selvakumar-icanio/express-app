const Book = require('../model/book.model');

var bookDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBook: updateBook
}

function findAll() {
    return Book.findAll();
}

function findById(id) {
    return Book.findByPk(id);
}

function deleteById(id) {
    return Book.destroy({ where: { id: id } });
}

function create(book) {
    var newBook = new Book(book);
    return newBook.save();
}

function updateBook(book, id) {
    return Book.update(book, { where: { id: id } });
}
module.exports = bookDao;