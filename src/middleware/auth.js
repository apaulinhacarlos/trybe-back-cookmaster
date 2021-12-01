const { StatusCodes } = require('http-status-codes');
const authService = require('../services/auth');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'missing auth token' });
    }

    const user = authService.verifyToken(token);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'jwt malformed' });
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};