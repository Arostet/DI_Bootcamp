const express = require("express");
const router = express.Router();
const {
  getPostId,
  getPosts,
  createPost,
  editPost,
  deletePost,
} = require("../controllers/controller.js");

router.get("/", getPosts);
router.get("/:id", getPostId);
router.post("/", createPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = {
  router,
};
