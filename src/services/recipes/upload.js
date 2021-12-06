const recipeModel = require('../../models/recipes');

module.exports = async (id, path) => recipeModel.uploadRecipe(id, path);
