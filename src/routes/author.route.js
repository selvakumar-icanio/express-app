const express = require('express');
const router = express.Router();
const authorController = require('../controller/author.controller');

router.post('/', authorController.addAuthor);
router.get('/', authorController.findAuthors);
router.get('/:id', authorController.findAuthorById);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteById);

module.exports = router;