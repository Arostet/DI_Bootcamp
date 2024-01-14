// const { users } = require("../config/db.js");
const {
  __getAllUsers,
  __getUser,
  __addUser,
  __updateUser,
} = require("../models/users.models.js");

const getAllUsers = (req, res) => {
  __getAllUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "Not found" });
    });
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await __getUser(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

const addUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log("this is the =>", req.body);
  __addUser(name, email, password)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "can not add user" });
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  __updateUser(id, name)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "can not add user" });
    });
};

// const deleteUser = (req, res) => {
//   const { id } = req.params;

//   const indx = users.findIndex((item) => item.id == id);
//   if (indx === -1) return res.sendStatus(404);
//   users.splice(indx, 1);
//   res.json(users);
// };

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  // deleteUser,
};
