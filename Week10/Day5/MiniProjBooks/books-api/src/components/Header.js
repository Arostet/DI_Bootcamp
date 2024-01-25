import { useState, useContext } from "react";
import { BookContext } from "./Book";

const Header = (props) => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div>
      {Array.isArray(books) &&
        books.map((book, index) => (
          <div key={index}>
            <h1>{book.volumeInfo.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default Header;
