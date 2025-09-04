const UserModel = require("../models/user.model");

module.exports.createUser = async (userData) => {
  const { firstname, lastname, email, password } = userData;

  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = await UserModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  console.log("user created successfully", user);
  return user;
};
