const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    enum: ["Admin", "Student", "Instructor"],
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  image: {
    type: String,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  courseProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
