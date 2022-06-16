const express = require('express');
const router = express.Router();
const bookRoutes = require('./routes/book.route');
const authorRoutes = require('./routes/author.route');

/**
 * Configuring routes for the modules
 */
router.use('/api/v1/book', bookRoutes);
router.use('/api/v1/author', authorRoutes);

module.exports = router;