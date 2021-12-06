const express = require('express');
const middleware = require('../middleware');
const usersController = require('../controllers/users');

const router = express.Router({ mergeParams: true });

router.post('/', usersController.create);
router.post('/admin', middleware.authAdmin, usersController.createAdmin);
module.exports = router;