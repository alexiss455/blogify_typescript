const mongoose = require("mongoose");
require("dotenv").config;
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code here
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
module.exports = mongoose;
