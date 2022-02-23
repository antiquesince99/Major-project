const mongoose = require("../connection");
const schema = new mongoose.Schema({
  merchendise: String,
  Quantity: String,
  User: String,
  Prototype: String,
  Amount: String,
  createdAt: { type: Date, default: new Date() },
});
const model = mongoose.model("order", schema);
module.exports = model;
