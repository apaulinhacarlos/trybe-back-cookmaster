const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { id } = req.params;    
    const userLogged = req.user;

    await recipeService
      .update(id, userLogged, { name, ingredients, preparation });

    const recipe = await recipeService.findById(id);

    return res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    next(error);
  }
};
