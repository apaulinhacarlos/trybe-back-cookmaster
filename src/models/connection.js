require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

let connect = null;

const connection = async () => {
  try {
    const ternary = !connect
    ? connect = (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME)
    : connect;

    return ternary;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { connection };