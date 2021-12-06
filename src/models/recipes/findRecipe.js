const mongoConnection = require('../connection');

const collection = 'recipes';

module.exports = async () => {
  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .find().toArray();

  return foundDocument;
};
