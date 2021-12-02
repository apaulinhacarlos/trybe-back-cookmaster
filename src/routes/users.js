const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router({ mergeParams: true });

router.post('/', usersController.create);
// router.post('/admin', usersController.createAdmin);
// autenticar admins

module.exports = router;