import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const voteLanguage = (languageName) => {
    const updatedLanguages = languages.map((item) =>
      item.name === languageName ? { ...item, votes: item.votes + 1 } : item
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {languages.map((item) => (
            <div key={item.name}>
              {item.name}: {item.votes}
              <button onClick={() => voteLanguage(item.name)}>Vote</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
