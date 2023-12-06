const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});
async function sendVerificationEmail(email, otp) {
  try {
    const mailresponse = await mailSender(
      email,
      "Verification Email from study Notion",
      otp
    );
    console.log("email send successfully ", mailresponse);
  } catch (error) {
    console.log("error occured during sending otp code ", error);
  }
}
OTPSchema.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});
const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
