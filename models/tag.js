const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema({
  name: String,
  description: String,
  course: mongoose.Schema.Types.ObjectId,
});
const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
