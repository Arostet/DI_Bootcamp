const express = require("express");
const app = express();

const books = [
  {
    id: 1,
    title: "The Book in Future Tense",
    author: "John Derby",
    publishedYear: 2000,
  },
  {
    id: 2,
    title: "Shadows of Yesterday",
    author: "Emma Clarke",
    publishedYear: 1998,
  },
  {
    id: 3,
    title: "Echoes of the Unknown",
    author: "Raj Patel",
    publishedYear: 2005,
  },
  {
    id: 4,
    title: "Journey Through the Stars",
    author: "Luis Hernandez",
    publishedYear: 2010,
  },
  {
    id: 5,
    title: "Beneath the Ocean's Surface",
    author: "Hannah Kim",
    publishedYear: 2003,
  },
  {
    id: 6,
    title: "Whispers in the Wind",
    author: "Sophie Martin",
    publishedYear: 2015,
  },
  {
    id: 7,
    title: "The Last Symphony",
    author: "Alexander Petrov",
    publishedYear: 2012,
  },
  {
    id: 8,
    title: "Mysteries of the Ancient World",
    author: "Ibrahim Al-Fayed",
    publishedYear: 1995,
  },
  {
    id: 9,
    title: "Through the Valley",
    author: "Chen Wei",
    publishedYear: 2017,
  },
  {
    id: 10,
    title: "Glimpses of Tomorrow",
    author: "Alice Murray",
    publishedYear: 2021,
  },
  {
    id: 11,
    title: "Lost in the Cosmos",
    author: "David Thompson",
    publishedYear: 2000,
  },
];
app.listen(3003, () => {
  console.log("running on 3003");
});
app.get("/books", (request, response) => {
  response.json(books);
});

app.get("/books/:id", (request, response) => {
  const { id } = request.params;
  const book = books.find((book) => book.id == id);
  if (!book) {
    response.status(404);
  } else {
    response.json(book);
  }
});
