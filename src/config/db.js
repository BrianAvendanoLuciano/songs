const mongoose = require("mongoose");
const { DB_REFERENCE } = require("../constants/common");
const { logger } = require("../utils/logger");

let conn = null;

const connect = async () => {
  if (conn === null) {
    logger.info("Creating a new mongodb connection");
    conn = await mongoose.connect(DB_REFERENCE.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 60000,
    });
    return conn;
  }
  logger.info("Mongodb connection already established");
};

module.exports = connect;
