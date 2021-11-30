// const userModel = require('../../models/users');
const loginValidation = require('./utils/loginValidation');

module.exports = async ({ email, password }) => {
  const error = await loginValidation.isValidParams(email, password);
  if (error) return error;

  const validateUser = await loginValidation.isValidUser(email, password);
  if (!validateUser) {
    return { incorrectUser: 'Incorrect username or password' };
  }
  
  // return userModel.create({ name, email, password, role: 'user' });
};