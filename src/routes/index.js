const express = require('express');
const users = require('./users');
const login = require('./login');
const recipes = require('./recipes');

const router = express.Router({ mergeParams: true });

router.use('/users', users);
router.use('/login', login);
router.use('/recipes', recipes);

module.exports = router;