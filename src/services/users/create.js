const userModel = require('../../models');
const userValidation = require('./utils/userValidation');

module.exports = async ({ name, email, password }) => {
  const validateEmail = await userValidation.isValidEmail(email);
  if (validateEmail) return { emailAlreadyExists: 'Email already registered' };

  const error = await userValidation.isValidParams(name, email, password);
  if (error) return error;
  
  return userModel.create({ name, email, password, role: 'user' });
};