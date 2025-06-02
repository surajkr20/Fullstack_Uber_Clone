const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CaptainSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters"],
        trim: true,
      },
      lastname: {
        type: String,
        trim: true,
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [5, "Email must be at least 5 characters"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
      unique: true, // ✅ prevents duplicate email registrations
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [5, "Password must be at least 5 characters"],
      select: false, // prevents password from being returned in queries
    },
    socketId: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vehicle: {
      color: {
        type: String,
        trim: true,
        required: true,
        minlength: [3, "vehicle color must be atleast 3 characters"],
      },
      plate: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        minlength: [5, "vehicle plate must be atleast 5 characters"],
      },
      capacity: {
        type: Number,
        required: true,
        min: [1, "Vehicle capacity must be at least 1"],
      },
      vehicleType: {
        type: String,
        enum: ['car', 'bike', 'auto'],
        lowercase: true,
        required: true,
      },
      location: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
  },
  {
    timestamps: true, // ✅ automatically add createdAt and updatedAt
  }
);

CaptainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

CaptainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

CaptainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const CaptainModel = mongoose.model("Captain", CaptainSchema);
module.exports = CaptainModel;
