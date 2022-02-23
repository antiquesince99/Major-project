const mongoose = require("../connection");
const schema = new mongoose.Schema({
  Title: String,
  Description: String,
  Tags: [{}],
  Price: String,
  Assets: [{}],
  Thumbnail: String,
  createdAt: { type: Date, default: new Date() },
});
const model = mongoose.model("merchendise", schema)
module.exports = model;
