const { StatusCodes } = require('http-status-codes');
const recipeService = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    // const userLogged = req.user;
    const newRecipes = await recipeService.create({ name, ingredients, preparation });

    // console.log(newRecipes);
    // if (newUser.emailAlreadyExists) {
    //   return res
    //     .status(StatusCodes.CONFLICT)
    //     .json({ message: newUser.emailAlreadyExists });
    //   }

    if (newRecipes.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
      }

    

    // return res.status(StatusCodes.CREATED).json({ user: newUser.ops[0] });
    // return res.status(StatusCodes.CREATED).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};
