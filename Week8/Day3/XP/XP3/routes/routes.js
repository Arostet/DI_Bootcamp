const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  editBook,
  delBook,
} = require("../controllers/controller.js");

router.get("/books", getAllBooks);
router.post("/books", addBook);
router.put("/books/:id", editBook);
router.delete("/books/:id", delBook);

module.exports = {
  router,
};
