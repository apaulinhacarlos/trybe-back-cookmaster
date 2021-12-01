const Joi = require('joi');
const userModel = require('../../../models');

const isValidEmail = async (email) => {
  const alreadyExists = await userModel.findUserByEmail(email);
  if (alreadyExists) return true;
  return false;
};

const isValidParams = async (name, email, password) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.required(),
  }).validate({ name, email, password });
  return error;
};

module.exports = {
  isValidEmail,
  isValidParams,
};