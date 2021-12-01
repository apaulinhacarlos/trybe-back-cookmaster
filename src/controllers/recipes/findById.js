const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipe = await recipeService.findById(id);

    if (!recipe) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'recipe not found' });
    }

    return res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    next(error);
  }
};
