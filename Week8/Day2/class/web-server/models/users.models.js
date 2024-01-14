const { db } = require("../config/db.js");

const __getAllUsers = () => {
  return db("users").select("*").orderBy("name");
};

const __getUser = (userid) => {
  return db("users").select("*").where({ id: userid });
};

const __addUser = (name, email, password) => {
  return db("users")
    .insert({ name: name, email: email, password: password })
    .returning("*");
};

const __updateUser = (id, name) => {
  return db("users").update({ name: name }).where({ id: id }).returning("*");
};

module.exports = {
  __getAllUsers,
  __getUser,
  __addUser,
  __updateUser,
};
