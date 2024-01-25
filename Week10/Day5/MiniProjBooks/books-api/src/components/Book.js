import { useState, useEffect, createContext } from "react";
import BookList from "./BookList";
import Header from "./Header";

export const BookContext = createContext({ books: [] });

const Book = (props) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const API_KEY = "--------";

  const fetchBooks = async () => {
    try {
      const query = `q=${title}+inauthor:${author}`;
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?${query}&key=${API_KEY}`
      );
      const data = await res.json();
      const filteredBooks = (data.items ?? [])
        .filter(
          (book) =>
            book.volumeInfo &&
            book.volumeInfo.title &&
            book.volumeInfo.authors &&
            book.volumeInfo.imageLinks
        )
        .slice(0, 10);
      setBooks(filteredBooks);
    } catch (err) {
      console.error("Error fetching books:", err);
      setBooks([]);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={handleAuthor}
          placeholder="Author"
        />
        <input type="submit" />
      </form>
      <BookContext.Provider value={{ books }}>
        <BookList />
      </BookContext.Provider>
    </div>
  );
};

export default Book;
