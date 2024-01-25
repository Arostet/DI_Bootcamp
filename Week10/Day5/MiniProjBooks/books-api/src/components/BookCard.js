import "../components/BC.css";

const BookCard = (props) => {
  const { book } = props;
  return (
    <div className="book-card">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="book-card-info">
        <h2>{book.volumeInfo.title}</h2>
        <p>By {book.volumeInfo.authors?.[0] || "Unknown Author"}</p>
      </div>
    </div>
  );
};

export default BookCard;
