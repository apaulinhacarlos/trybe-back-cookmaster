const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const collection = 'recipes';

module.exports = async (id) => {
  const validId = ObjectId.isValid(id);
  if (!validId) return null;
  
  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .findOne(ObjectId(id));

  return foundDocument;
};
