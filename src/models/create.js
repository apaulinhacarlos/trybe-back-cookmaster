const mongoConnection = require('./connection');

const collection = 'users';

module.exports = async (document) => {
  (await mongoConnection.connection())
    .collection(collection)
    .insertOne(document);

  const { password, ...userWithoutPassword } = document;
  return userWithoutPassword;
};