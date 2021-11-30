const { StatusCodes } = require('http-status-codes');
const loginService = require('../../services/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.login({ email, password });    

    if (login.details) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'All fields must be filled' });
      }

    if (login.incorrectUser) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: login.incorrectUser });
      }
    // return res.status(StatusCodes.CREATED).json({ user: newUser.ops[0] });
    // return res.status(StatusCodes.CREATED).json({ user: login });
  } catch (error) {
    next(error);
  }
};