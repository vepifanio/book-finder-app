const express = require('express');

const BookController = require('./BookController');

const router = express.Router();

router.get('/', (req, res) => {
    return res.send('API IS WORKING PROPERLY');
});

router.get('/books', BookController.index);

module.exports = router;