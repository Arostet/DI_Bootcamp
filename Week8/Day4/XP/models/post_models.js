const { db } = require("../config/db.js");

const getPostsDB = () => {
  return db("posts").select("*");
};

const getPostIdDB = (id) => {
  return db("posts").select("*").where({ id });
};

const createPostDB = (title, content) => {
  return db("posts")
    .insert({
      title: title,
      content: content,
    })
    .returning("*");
};

const editPostDB = (id, title, content) => {
  return db("posts").where("id", id).update({
    title: title,
    content: content,
  });
};

const deletePostDB = (id) => {
  return db("posts").where("id", id).delete();
};

module.exports = {
  getPostsDB,
  getPostIdDB,
  createPostDB,
  editPostDB,
  deletePostDB,
};
