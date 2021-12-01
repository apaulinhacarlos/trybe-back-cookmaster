const path = require('path');
const express = require('express');
const recipesController = require('../controllers/recipes');

const router = express.Router({ mergeParams: true });

router.use(express.static(path.resolve(__dirname, '../uploads')));

router.get('/:id.jpeg', recipesController.findImage);

module.exports = router;