const userModel = require('../../models');

module.exports = async (id) => {
  const recipesFound = await userModel.findRecipesById(id);

  return recipesFound;
};