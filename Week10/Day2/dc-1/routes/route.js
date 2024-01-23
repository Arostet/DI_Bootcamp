const express = require("express");
const { helloExpress, getPost } = require("../controllers/controller.js");
const router = express.Router();

router.get("/", helloExpress);
router.post("/", getPost);

module.exports = {
  router,
};
