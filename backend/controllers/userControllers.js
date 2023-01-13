const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// userControllers object - module scaffolding.
const userControllers = {};

/**
 * @method createToken()
 * @arg _id
 * @des generate token with jwt
 */
userControllers.createToken = (_id) => {
  console.log("_id :", _id);
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user controller
userControllers.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await userControllers.createToken(user._id.toString());
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register user controller
userControllers.userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    const token = await userControllers.createToken(user._id.toString());
    res.status(200).json({ user, token });
  } catch (error) {
    console.log("error :", error);
    res.status(400).json({ error: error.message });
  }
};

// exporting module
module.exports = userControllers;
