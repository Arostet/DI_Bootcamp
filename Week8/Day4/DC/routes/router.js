const express = require("express");
const router = express.Router();
const { newUser, logIn, getUsers } = require("../controllers/controller.js");

router.post("/register", newUser);
router.post("/login", logIn);
router.get("/", getUsers);
module.exports = {
  router,
};
