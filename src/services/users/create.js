const userModel = require('../../models/users');
const usersValidation = require('./utils/usersValidation');

module.exports = async ({ name, email, password }) => {
  const error = usersValidation.isValidParams(name, email, password);
  if (error) return error;
  return userModel.create({ name, email, password });
};