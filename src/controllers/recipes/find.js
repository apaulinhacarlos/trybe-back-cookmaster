const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const recipes = await recipeService.find();

    return res.status(StatusCodes.OK).json(recipes);
  } catch (error) {
    next(error);
  }
};
