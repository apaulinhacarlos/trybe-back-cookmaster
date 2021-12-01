const path = require('path');
const express = require('express');
const recipesController = require('../controllers/recipes');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.use(express.static(path.resolve(__dirname, '../uploads')));

router.post('/', middleware.auth, recipesController.create);
router.get('/', recipesController.find);
router.get('/:id', recipesController.findById);
router.put('/:id', middleware.auth, recipesController.update);
router.delete('/:id', middleware.auth, recipesController.remove);
router.put(
  '/:id/image',
  middleware.auth,
  middleware.upload.single('image'),
  recipesController.upload,
);
router.get('/images/:id.jpeg', recipesController.findImage);

module.exports = router;