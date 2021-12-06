const recipeModel = require('../../models/recipes');

module.exports = async (id) => recipeModel.removeRecipe(id);