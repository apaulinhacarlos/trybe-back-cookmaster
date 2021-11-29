// const { ObjectId } = require('mongodb');
const mongoConnection = require('../connection');

const collection = 'users';

module.exports = async (document) => {
  const result = (await mongoConnection.connection())
    .collection(collection)
    .insertOne(document);
  
  return result;
};