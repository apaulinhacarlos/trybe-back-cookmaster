const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.create({ name, email, password });

    if (newUser.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
      }

    return res.status(StatusCodes.CREATED).json(newUser.ops[0]);
  } catch (error) {
    next(error);
  }
};
