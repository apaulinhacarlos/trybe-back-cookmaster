const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;    
    // const userLogged = req.user;

    await recipeService.remove(id /* userLogged */);

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
