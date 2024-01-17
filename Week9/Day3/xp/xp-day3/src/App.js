import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";

const myElement = <h1>I love JSX</h1>;
const sum = 5 + 5;
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Hello World!</h1>
          {myElement}
          <h1>React is {sum} times better with JSX</h1>
          <div>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <UserFavoriteAnimals favAnimals={user.favAnimals} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
