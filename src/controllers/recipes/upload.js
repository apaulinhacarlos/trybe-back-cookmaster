const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;

    const imageURL = `localhost:3000/src/uploads/${filename}`;

    await recipeService.upload(id, imageURL);

    const recipe = await recipeService.findById(id);

    return res.status(StatusCodes.OK).json(recipe);
  } catch (error) {
    next(error);
  }
};