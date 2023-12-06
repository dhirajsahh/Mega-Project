const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema({
  sectionName: String,
  subSection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubSection",
  },
});
const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
