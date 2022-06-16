const authorDao = require("../dao/author.dao");

/**
 * Creating a Author controller object
 */
var authorController = {
  addAuthor: addAuthor,
  findAuthors: findAuthors,
  findAuthorById: findAuthorById,
  updateAuthor: updateAuthor,
  deleteById: deleteById,
};

function addAuthor(req, res) {
  authorDao
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findAuthorById(req, res) {
  authorDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  authorDao
    .deleteById(req.params.id)
    .then((data) => {
        res.send({
          message: "Author deleted successfully",
          Author: data,
        });
    
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateAuthor(req, res) {
  authorDao
    .updateAuthor(req.body, req.params.id)
    .then((data) => {
      res.send({
        message: "Author updated successfully",
        Author: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findAuthors(req, res) {
  authorDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = authorController;
