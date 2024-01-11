const { books } = require("../config/db.js");

const getAllBooks = (req, res) => {
  res.send(books);
};

const addBook = (req, res) => {
  const newBook = { ...req.body, id: books.length + 1 };
  books.push(newBook);

  res.json(books);
};

const editBook = (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const index = books.findIndex((item) => item.id == id);
  books[index] = { ...books[index], title: title, author: author };

  res.send(books);
};

const delBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((item) => item.id == id);

  books.splice(index, 1);

  res.send(books);
};

module.exports = {
  getAllBooks,
  addBook,
  editBook,
  delBook,
};
