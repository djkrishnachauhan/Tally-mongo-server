const mongoose = require("mongoose");

module.exports = async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "TALLY_RT" });
  console.log("MongoDB Connected");
};
