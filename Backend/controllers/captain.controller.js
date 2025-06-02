const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const CaptainService = require("../services/captain.service");
const blacklistTokensModel = require("../models/blacklistTokens.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isExist = await captainModel.findOne({ email });
  if (isExist) {
    return res.status(400).json({ message: "captain already exist" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await CaptainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res.status(401).json({
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "invalid email or password" });
  }

  const token = await captain.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = async(req, res, next) =>{
    res.status(200).json({captain: req.captain})
}

module.exports.logoutCaptain = async(req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokensModel.create({token})
    res.clearCookie('token')
    res.status(200).json({message: "logout successfully"})
}