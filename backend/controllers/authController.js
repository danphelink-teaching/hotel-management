const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    user.password = undefined; // Remove password from response
    console.log("User logged in successfully:", typeof user);
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    res
      .status(200)
      .json({ message: "Login successful", data: user, accessToken: token });
  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
