const express = require('express');
const router = express.Router();
const bookController = require('../controller/book.controller');

router.post('/', bookController.addBook);
router.get('/', bookController.findBooks);
router.get('/:id', bookController.findBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteById);

module.exports = router;