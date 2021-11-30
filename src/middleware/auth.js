const { StatusCodes } = require('http-status-codes');
const authService = require('../services/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'token não informado!' });
    }

    const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Token invalido' });
    }
    req.user = user;

    next();
  } catch (err) {
    next();
  }
};