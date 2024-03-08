import User from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// create User-Admin
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sample Id",
      url: "sample url",
    },
  });
  sendToken(user, res);
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      message: "Please enter email or password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.json({
      message: "Invalid email or password",
    });
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return res.json({
      message: "Invalid email or password",
    });
  }
  sendToken(user, res);
};

export const logout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Successfully Logged out",
  });
};

// forgot password user
export const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `This is Testing for password reset token is :- \n\n ${resetPasswordUrl} \n\n Ignore if you didnt make a request`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce password recovery`,
      message,
    });
    res.json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
  }
};

export const resetPassword = async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return res.json({
      message: "Reset Password token is invalid or expired",
    });
  }

  if (req.body.password !== req.body.confirmPassword) {
    return res.json({
      message: "Error as password doesnt match",
    });
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, res);
};

// get user details
export const getUserDetails = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
};

// get user details
export const updatePassword = async (req, res) => {
  const user = await User.findById(req.user.id).select("+password");
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  if (!isPasswordMatched) {
    return res.json({ message: "Old password is incorrect" });
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    return res.json({
      message: "Error as password doesnt match",
    });
  }
  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, res);
};
// get user details
export const updateProfile = async (req, res) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };
  const user = await User.findOneAndUpdate(req.user.id, { new: true });
  res.status(200).json({
    success: true,
  });
};

// get user details
export const getAllUser = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    users,
  });
};
// get user details
export const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.json({
      message: "Reset Password token is invalid or expired",
    });
  }

  res.json({
    success: true,
    user,
  });
};

export const updateUserRole = async (req, res) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
  const user = await User.findOneAndUpdate(req.user.id, { new: true });
  res.status(200).json({
    success: true,
  });
};

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.json({
      message: "User doesnt exist",
    });
  }

  await user.remove();
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};
