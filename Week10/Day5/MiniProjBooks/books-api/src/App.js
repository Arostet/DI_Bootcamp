import logo from "./logo.svg";
import "./App.css";
import Book from "./components/Book";
import BookCard from "./components/BookCard";
function App() {
  return (
    <div className="App">
      <h1>The Books Site</h1>
      <Book />
      <BookCard />
    </div>
  );
}

export default App;
