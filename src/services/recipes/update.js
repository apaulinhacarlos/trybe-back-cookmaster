const userModel = require('../../models/users');
const recipeModel = require('../../models/recipes');
const recipeValidation = require('./utils/recipeValidation');

module.exports = async (recipeId, user, { name, ingredients, preparation }) => {
  const error = await recipeValidation.isValidParams(name, ingredients, preparation);
  if (error) return error;

  const { email } = user;
  const userLogged = await userModel.findUserByEmail(email);
  const { _id: userId } = userLogged;
  
  return recipeModel.updateRecipe({ name, ingredients, preparation, userId, recipeId });
};
