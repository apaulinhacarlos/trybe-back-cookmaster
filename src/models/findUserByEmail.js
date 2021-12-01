const mongoConnection = require('./connection');

const collection = 'users';

module.exports = async (email) => {
  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .findOne({ email });

  return foundDocument;
};