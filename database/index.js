const config = require('../config');
const mongoose = require('mongoose');
const { MongoUrl } = config;

const connection = async () => {
  try {
    await mongoose.connect(MongoUrl);
    console.log("Mongo db connected!");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connection;