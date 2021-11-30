const userModel = require('../../models');
const usersValidation = require('./utils/usersValidation');

module.exports = async ({ name, email, password }) => {
  const validateEmail = await usersValidation.isValidEmail(email);
  if (validateEmail) return { emailAlreadyExists: 'Email already registered' };

  const error = await usersValidation.isValidParams(name, email, password);
  if (error) return error;
  
  return userModel.create({ name, email, password, role: 'user' });
};