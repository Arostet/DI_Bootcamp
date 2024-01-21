const { db } = require("../config/db.js");

const getUsersDB = () => {
  return db("fusers").select("*");
};

const newUserDB = (name, pass) => {
  try {
    return db("fusers")
      .insert({
        name: name,
        pass: pass,
      })
      .returning("*");
  } catch (err) {
    console.log(err);
  }
};

const getPassword = (enteredUsername) => {
  return db("fusers").select("pass").where({ name: enteredUsername });
};

module.exports = {
  newUserDB,
  getPassword,
  getUsersDB,
};
