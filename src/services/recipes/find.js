const userModel = require('../../models');

module.exports = async () => {
  const recipesFound = await userModel.findRecipe();

  return recipesFound;
};