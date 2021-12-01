const express = require('express');
const recipesController = require('../controllers/recipes');

const router = express.Router({ mergeParams: true });

router.get('/:id.jpeg', recipesController.findImage);

module.exports = router;