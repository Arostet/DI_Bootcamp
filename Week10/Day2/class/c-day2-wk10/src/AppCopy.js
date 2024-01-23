import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to={"/"}>Home</Link> <Link to={"/a"}>About</Link>{" "}
          <Link to={"/s"}>Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<About />} />
        <Route path="/s" element={<Shop />} />
        <Route path="/s/:productid" element={<Shop />} />
        <Route path="/s/:productid/:shopid" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
