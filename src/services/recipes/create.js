const userModel = require('../../models');
const recipeValidation = require('./utils/recipeValidation');

module.exports = async ({ name, ingredients, preparation }) => {
  // const validateEmail = await usersValidation.isValidEmail(email);
  // if (validateEmail) return { emailAlreadyExists: 'Email already registered' };

  const error = await recipeValidation.isValidParams(name, ingredients, preparation);
  if (error) return error;
  
  // return userModel.create({ name, email, password, role: 'user' });
};