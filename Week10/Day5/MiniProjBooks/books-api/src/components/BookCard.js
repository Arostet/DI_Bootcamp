import { useState, useContext } from "react";
import { BookContext } from "./Book";
import Header from "./Header";

const BookCard = (props) => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div>
      <Header />

      {/* the image, the title of the book, the author and the published year */}
      {books.map((book, index) => (
        <div key={index}>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <h2>By {book.volumeInfo.authors[0]}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
