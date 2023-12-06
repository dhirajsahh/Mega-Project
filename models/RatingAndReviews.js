const mongoose = require("mongoose");
const ratingAndReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: Number,
  reviews: String,
});
const RatingAndReview = mongoose.model(
  "RatingAndReview",
  ratingAndReviewSchema
);
module.exports = RatingAndReview;
