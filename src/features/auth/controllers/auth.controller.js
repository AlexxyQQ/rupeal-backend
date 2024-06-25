const User = require("../models/user.model");
const { successResponse } = require("./user.response");

// Create and Save a new User
exports.create = async (req, res, next) => {
  try {
    await User.sync();
    const newUser = await User.create({
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      last_name: req.body.last_name,
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      phone_number: req.body.phone_number,
      profile_picture: req.body.profile_picture,
      token: req.body.token,
    });

    console.log("User created:", newUser.toJSON());
    return successResponse(res, newUser, "User created successfully.");
  } catch (error) {
    console.error("Error creating user:", error);
    next(error);
  }
};

// Retrieve all Users from the database
exports.findAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return successResponse(res, users, "Users fetched successfully.");
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    next(error);
  }
};

// Find a single User by ID
exports.findOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);

    if (!user) {
      const error = new Error(`Not found User with id ${req.params.userId}.`);
      error.status = 404;
      throw error;
    }

    console.log("Found user:", user.toJSON());
    res.json(user);
  } catch (error) {
    console.error("Error finding user:", error);
    next(error);
  }
};

// Update a User identified by the userId in the request
exports.update = async (req, res, next) => {
  try {
    const updatedUser = await User.findByPk(req.params.userId);

    if (!updatedUser) {
      const error = new Error(`Not found User with id ${req.params.userId}.`);
      error.status = 404;
      throw error;
    }

    // Update user fields
    updatedUser.first_name = req.body.first_name;
    updatedUser.middle_name = req.body.middle_name;
    updatedUser.last_name = req.body.last_name;
    updatedUser.username = req.body.username;
    updatedUser.age = req.body.age;
    updatedUser.gender = req.body.gender;
    updatedUser.email = req.body.email;
    updatedUser.phone_number = req.body.phone_number;
    updatedUser.profile_picture = req.body.profile_picture;
    updatedUser.token = req.body.token;

    await updatedUser.save();

    console.log("Updated user:", updatedUser.toJSON());
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    next(error);
  }
};

// Delete a User with the specified userId in the request
exports.delete = async (req, res, next) => {
  try {
    const deletedUser = await User.findByPk(req.params.userId);

    if (!deletedUser) {
      const error = new Error(`Not found User with id ${req.params.userId}.`);
      error.status = 404;
      throw error;
    }

    await deletedUser.destroy();

    console.log("Deleted user:", deletedUser.toJSON());
    res.json({ message: "User was deleted successfully!" });
  } catch (error) {
    console.error("Error deleting user:", error);
    next(error);
  }
};

// Delete all Users from the database
exports.deleteAll = async (req, res, next) => {
  try {
    const deleteCount = await User.destroy({ where: {} });

    console.log(`Deleted ${deleteCount} users`);
    res.json({ message: "All Users were deleted successfully!" });
  } catch (error) {
    console.error("Error deleting all users:", error);
    next(error);
  }
};
