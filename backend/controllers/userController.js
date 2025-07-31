const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    let userData = req.body;
    userData.password = await bcrypt.hash(userData.password, 10);
    const findUser = await User.findOne({ email: userData.email });
    if (findUser) {
      throw new Error("User already exists");
    }
    const newUser = new User(userData);
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while creating the user";
    console.error(errorMessage, error);
    res.status(500).json({ message: errorMessage });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User retrieved successfully", data: user });
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while retrieving the user";
    console.error(errorMessage, error);
    res.status(500).json({ message: errorMessage });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.find({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return user;
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "An error occurred while retrieving the user by email",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res
      .status(200)
      .json({ message: "Users retrieved successfully", data: users });
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while retrieving users";
    console.error(errorMessage, error);
    res.status(500).json({ message: errorMessage });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while updating the user";
    console.error(errorMessage, error);
    res.status(500).json({ message: errorMessage });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while deleting the user";
    console.error(errorMessage, error);
    res.status(500).json({ message: errorMessage });
  }
};
