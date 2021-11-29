const Joi = require('joi');

// const isValidName = async (name) => {
//   const alreadyExists = await modelGetByName.getByName(name);
//   if (alreadyExists) return 'Product already exists';
//   return false;
// };

// const isValidEmail = () => {
//   const regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
//   if (regexEmail.test(email)) {

//   } else {
//     setDisabled(true);
//   }
// }

const isValidParams = (name, email, password) => {
  // const validateEmail = isValidEmail(email);
  
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.required(),
    password: Joi.required(),
  }).validate({ name, email, password });
  return error;
};

module.exports = {
  // isValidName,
  isValidParams,
};