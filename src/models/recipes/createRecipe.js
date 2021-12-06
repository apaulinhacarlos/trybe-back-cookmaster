const mongoConnection = require('../connection');

const collection = 'recipes';

module.exports = async (document) => {
  (await mongoConnection.connection())
    .collection(collection)
    .insertOne(document);

  return document;
};