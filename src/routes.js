const express = require('express');
const router = express.Router();
const bookRoutes = require('./routes/book.route');

/**
 * Configuring routes for the modules
 */
router.use('/api/v1/book', bookRoutes);

module.exports = router;