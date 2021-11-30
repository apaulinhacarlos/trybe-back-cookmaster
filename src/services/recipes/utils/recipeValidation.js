const Joi = require('joi');
// const userModel = require('../../../models');

// const isValidEmail = async (email) => {
//   const alreadyExists = await userModel.findByEmail(email);
//   if (alreadyExists) return true;
//   return false;
// };

const isValidParams = async (name, ingredients, preparation) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
  }).validate({ name, ingredients, preparation });
  return error;
};

module.exports = {
  // isValidEmail,
  isValidParams,
};