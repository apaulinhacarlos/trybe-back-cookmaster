const express = require('express');
const recipesController = require('../controllers/recipes');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, recipesController.create);
router.get('/', recipesController.find);
router.get('/:id', recipesController.findById);
router.put('/:id', middleware.auth, recipesController.update);
router.delete('/:id', middleware.auth, recipesController.remove);

module.exports = router;