const mongoose = require("mongoose");
require("dotenv").config();
const mongodburl = process.env.MONGODB_URL;
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(mongodburl);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(`Error occured during connecting the database ${error}`);
  }
};
module.exports = connectdb;
