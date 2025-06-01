const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    fullname: {
        firstname : {
            type: String,
            required: true,
            minlength: [3, "first name must be atleast 3 characters"]
        },
        lastname : {
            type: String,
            minlength: [3, "last name must be atleast 3 characters"]
        }
    },
    email: {
        required: true,
        type: String,
        minlength: [5, "email must be atleast 5 characters"]
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "password must be atleast 5 characters"],
        select: false
    },
    socketId: {
        type: String
    }
})

UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;