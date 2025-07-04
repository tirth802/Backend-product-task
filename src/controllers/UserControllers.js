const UserModel = require("../models/UserModel");

exports.registerUser = (req, res) => {
  const newUser = req.body;

  UserModel.createUser(newUser, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User created successfully", userId: result.insertId });
  });
};

exports.listUsers = (req, res) => {
  UserModel.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(users);
  });
};