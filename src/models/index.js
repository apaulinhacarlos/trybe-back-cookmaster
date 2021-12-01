const createUser = require('./createUser');
const findUserByEmail = require('./findUserByEmail');
const findUser = require('./findUser');
const createRecipe = require('./createRecipe');
const findRecipe = require('./findRecipe');
const findRecipesById = require('./findRecipesById');
const updateRecipe = require('./updateRecipe');
const removeRecipe = require('./removeRecipe');
const uploadRecipe = require('./uploadRecipe');

module.exports = {
  createUser,
  findUserByEmail,
  findUser,
  createRecipe,
  findRecipe,
  findRecipesById,
  updateRecipe,
  removeRecipe,
  uploadRecipe,
};