const userModel = require('../../models');

module.exports = async (id, path) => userModel.uploadRecipe(id, path);
