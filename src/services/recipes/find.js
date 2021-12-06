const recipeModel = require('../../models/recipes');

module.exports = async () => {
  const recipesFound = await recipeModel.findRecipe();

  return recipesFound;
};