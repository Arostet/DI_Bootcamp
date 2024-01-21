const {
  getPostsDB,
  getPostIdDB,
  createPostDB,
  editPostDB,
  deletePostDB,
} = require("../models/post_models.js");

const getPosts = (req, res) => {
  getPostsDB()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const getPostId = (req, res) => {
  const { id } = req.params;
  getPostIdDB(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  createPostDB(title, content)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const editPost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  editPostDB(id, title, content)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  deletePostDB(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

module.exports = {
  getPosts,
  getPostId,
  createPost,
  editPost,
  deletePost,
};
