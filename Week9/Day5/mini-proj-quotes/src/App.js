import logo from "./logo.svg";
import "./App.css";
import quotes from "./components/quotes";
import Quote from "./components/Quote";
import React, { useState, useEffect } from "react";

function App() {
  const [shuffledQuotes, setShuffledQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffleQuotes = (quotes) => {
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    }
    return quotes;
  };

  useEffect(() => {
    setShuffledQuotes(shuffleQuotes(quotes));
  }, [quotes]); //this quotes at the end makes the useEffect take effect only when something happens to quotes (meaning it wont' constantly reset)

  const handleNextQuote = () => {
    setCurrentIndex((ind) => {
      const currentIndex = ind + 1;
      if (currentIndex >= shuffledQuotes.length) {
        return 0;
      } else {
        return currentIndex;
      }
    });
  };

  return (
    <div>
      <Quote quotesinfo={shuffledQuotes[currentIndex]} key={currentIndex} />
      <button onClick={handleNextQuote}>Get Quote</button>
    </div>
  );
}

export default App;
