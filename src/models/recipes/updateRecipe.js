const { ObjectId } = require('mongodb');
const mongoConnection = require('../connection');

const collection = 'recipes';

module.exports = async (document) => {
  const { recipeId, ...documentWithoutId } = document;

  const validId = ObjectId.isValid(recipeId);
  if (!validId) return null;

  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .updateOne(
      { _id: ObjectId(recipeId) },
      { $set: documentWithoutId },
    );

  return foundDocument;
};
