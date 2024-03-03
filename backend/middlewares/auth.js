import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      message: "UnAuthenticated",
    });
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
};

export const authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.json({
        message: `Role:${req.user.role} is not allowed to access this user`,
      });
    }
    next();
  };
};
