const userModel = require('../../models');

module.exports = async (id) => userModel.removeRecipe(id);