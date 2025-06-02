const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const CaptainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be atleast 5 characters"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be atleast 3 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("vehicle color must be atleast 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 5 })
      .withMessage("vehicle plate must be atleast 5 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("vehicle capacity must be atleast 1 characters"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "auto"])
      .withMessage("invalid type"),
  ],
  CaptainController.registerCaptain
);

router.post("/login", [
  body("email").isEmail().withMessage("invalid email!"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be atleast 5 characters"),
], CaptainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain, CaptainController.getCaptainProfile);
router.get('/logout', authMiddleware.authCaptain, CaptainController.logoutCaptain);

module.exports = router;
