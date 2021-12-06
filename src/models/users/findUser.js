const mongoConnection = require('../connection');

const collection = 'users';

module.exports = async (email, password) => {
  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .findOne(
      { 
        $and: [
          { email },
          { password },
        ],
      },
    );

  return foundDocument;
};
