import { useContext } from "react";
import { BookContext } from "./Book";
import BookCard from "./BookCard";
import "../components/BC.css";

const BookList = (props) => {
  const { books } = useContext(BookContext);
  return (
    <div className="book-list">
      {Array.isArray(books) &&
        books.map((book, index) => <BookCard key={index} book={book} />)}
    </div>
  );
};

export default BookList;
