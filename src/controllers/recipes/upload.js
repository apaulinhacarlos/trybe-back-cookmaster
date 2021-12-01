const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { path } = req.file;

    const split = path.split('cookmaster/');
    const splitPath = `localhost:3000/${split[1]}`;

    await recipeService.upload(id, splitPath);

    const recipe = await recipeService.findById(id);

    return res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    next(error);
  }
};