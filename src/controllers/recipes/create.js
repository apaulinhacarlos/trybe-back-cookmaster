const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    
    const userLogged = req.user;

    const newRecipes = await recipeService.create(userLogged, { name, ingredients, preparation });

    if (newRecipes.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
      }

    return res.status(StatusCodes.CREATED).json({ recipe: newRecipes });
  } catch (error) {
    next(error);
  }
};
