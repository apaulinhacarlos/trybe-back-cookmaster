const userModel = require('../../models');
const loginValidation = require('./utils/loginValidation');
const authService = require('../auth');

module.exports = async ({ email, password }) => {
  const error = await loginValidation.isValidParams(email, password);
  if (error) return error;

  const validateUser = await loginValidation.isValidUser(email, password);
  if (!validateUser) {
    return { incorrectUser: 'Incorrect username or password' };
  }

  const userFound = await userModel.findUser(email, password);
  const { password: _password, ...userWithoutPassword } = userFound;
  const token = authService.generateToken(userWithoutPassword);
  
  return token;
};