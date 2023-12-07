const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP.JS");
const jwt = require("jsonwebtoken");
const mailsender = require("../utils/mailSender");
const otpGenerator = require("otp-generator");
const Profile = require("../models/Profile");
require("dotenv").config();

//signup controllers for registering users
exports.signup = async (req, res) => {
  try {
    //geting all data
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;
    //checking all details are present or not
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType ||
      !contactNumber ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are necessary",
      });
    }
    //checking password and confirm password match or not
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password doesnot match try again",
      });
    }
  } catch (error) {}
};
