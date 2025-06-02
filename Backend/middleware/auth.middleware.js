const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CaptainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "unauthorized user" });
  }

  const isBlacklisted = await UserModel.findOne({token});
  if(isBlacklisted){
    return res.status(400).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
};

module.exports.authCaptain = async(req, res, next) =>{
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "unauthorized captain" });
  }

  const isBlacklisted = await CaptainModel.findOne({token});

  if(isBlacklisted){
    return res.status(400).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await CaptainModel.findById(decoded._id);
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}
