const express = require('express');
// const productController = require('../controllers/productController');

const router = express.Router({ mergeParams: true });

router.get('/', () => console.log('teste get login'));

module.exports = router;