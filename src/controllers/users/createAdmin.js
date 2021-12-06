const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newAdmin = await userService.createAdmin({ name, email, password });

    if (newAdmin.emailAlreadyExists) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: newAdmin.emailAlreadyExists });
      }

    if (newAdmin.details) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Invalid entries. Try again.' });
      }

    return res.status(StatusCodes.CREATED).json({ user: newAdmin });
  } catch (error) {
    next(error);
  }
};
