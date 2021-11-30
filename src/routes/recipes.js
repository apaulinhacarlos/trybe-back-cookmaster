const express = require('express');
const recipesController = require('../controllers/recipes');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, recipesController.create);

module.exports = router;