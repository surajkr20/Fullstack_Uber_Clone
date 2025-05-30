
const UserModel = require('../models/user.model');
const UserService = require('../services/user.service');
const {validationResult} = require('express-validator');

module.exports.registerUser = async (req, res, next) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {fullname, email, password} = req.body;

    const hashPassword = await UserModel.hashPassword(password)

    const user = await UserService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({token, user})
}