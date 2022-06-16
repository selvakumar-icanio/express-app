const Author = require('../model/author.model');

var authorDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAuthor: updateAuthor
}

function findAll() {
    return Author.findAll();
}

function findById(id) {
    return Author.findByPk(id);
}

function deleteById(id) {
    return Author.destroy({ where: { id: id } });
}

function create(author) {
    var newAuthor = new Author(author);
    return newAuthor.save();
}

function updateAuthor(author, id) {
    return Author.update(author, { where: { id: id } });
}
module.exports = authorDao;