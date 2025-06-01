const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const AuthMiddleware = require("../middleware/auth.middleware");

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
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("invalid Email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password must be atleast 5 characters"),
  ],
  userController.loginUser
);

router.get("/profile", AuthMiddleware.authUser, userController.GetUserProfile);
router.get("/logout", AuthMiddleware.authUser, userController.logoutUser);

module.exports = router;
