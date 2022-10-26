const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB);
  console.log("mongo db connect");
};

module.exports = connectDB;
