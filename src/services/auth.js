const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: 60,
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { username } = decoded.data;

    return username;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};