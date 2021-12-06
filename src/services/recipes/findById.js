const recipeModel = require('../../models/recipes');

module.exports = async (id) => {
  const recipesFound = await recipeModel.findRecipesById(id);

  return recipesFound;
};