const Joi = require('joi');

// const isValidName = async (name) => {
//   const alreadyExists = await modelGetByName.getByName(name);
//   if (alreadyExists) return 'Product already exists';
//   return false;
// };

const isValidEmail = (email) => {
  const regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  if (regexEmail.test(email)) return true;
  return false;
};

const isValidParams = (name, email, password) => {
  // if (!isValidEmail(email)) return;
  
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.required(),
  }).validate({ name, email, password });
  return error;
};

module.exports = {
  // isValidName,
  isValidParams,
};