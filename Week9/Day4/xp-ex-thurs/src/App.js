import logo from "./logo.svg";
import "./App.css";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";

const carinfo = [{ name: "Ford", model: "Mustang" }];
function App() {
  return (
    <div>
      <header>
        <Color />
        <Events />
        <Phone />
        {carinfo.map((item, indx) => {
          return <Car carinfo={item} key={indx} />;
        })}
      </header>
    </div>
  );
}

export default App;
