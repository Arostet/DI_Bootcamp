import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./components/HomeScreen";
import ProfilScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/shop" activeClassName="active">
          Shop
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfilScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
    </div>
  );
}

export default App;
