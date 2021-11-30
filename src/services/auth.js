const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const result = decoded.data;
    if (!result) return false;
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};