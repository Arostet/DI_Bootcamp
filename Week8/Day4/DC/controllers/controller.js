const bcrypt = require("bcrypt");
const saltrounds = 10;
const { newUserDB, getPassword, getUsersDB } = require("../models/model.js");

const getUsers = (req, res) => {
  getUsersDB()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};
const newUser = (req, res) => {
  const { name, pass } = req.body;
  const salt = bcrypt.genSaltSync(saltrounds);
  const hashedPass = bcrypt.hashSync(pass, salt);

  newUserDB(name, hashedPass)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};
const logIn = async (req, res) => {
  try {
    const { name, pass } = req.body;
    const user = await getPassword(name);

    if (!user) {
      res.status(404).json({ success: false, msg: "User not found" });
    } else {
      const hashedPassFromDB = user[0].pass;
      const isMatch = await bcrypt.compare(pass, hashedPassFromDB);
      if (isMatch) {
        // Send success response
        res.json({ success: true, msg: "Authentication successful" });
      } else {
        // Send failure response
        res.status(401).json({ success: false, msg: "Invalid password" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};
module.exports = {
  newUser,
  logIn,
  getUsers,
};
