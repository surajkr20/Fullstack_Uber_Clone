const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage("invalid email!"),
    body('password').isLength({min: 5}).withMessage("Password must be atleast 5 characters"),
    body('fullname.firstname').isLength({min: 3}).withMessage("firstname must be atleast 3 characters")
], userController.registerUser)

module.exports = router;