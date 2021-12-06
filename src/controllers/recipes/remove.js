const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;    

    await recipeService.remove(id);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
