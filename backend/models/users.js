const db = require("./db");
const jwt = require('jsonwebtoken');
require("dotenv").config
const userSchema = new db.Schema({
  passport: Number,
  image: String,
  displayName: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_TOKEN );
  return token;
};
const User = db.model('User', userSchema);

module.exports = User;
