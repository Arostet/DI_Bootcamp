const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const searchUsers = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.json(user);
};

module.exports = {
  getAllUsers,
  searchUsers,
};
