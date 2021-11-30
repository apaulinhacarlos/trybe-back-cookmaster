const Joi = require('joi');
const userModel = require('../../../models');

const isValidUser = async (email, password) => {
  const userExists = await userModel.findByUser(email, password);
  if (userExists) return true;
  return false;
};

const isValidParams = async (email, password) => {
  const { error } = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.required(),
  }).validate({ email, password });
  return error;
};

module.exports = {
  isValidUser,
  isValidParams,
};