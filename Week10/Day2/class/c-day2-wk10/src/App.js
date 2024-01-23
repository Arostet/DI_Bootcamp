import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
// import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>{" "}
          <Link to={"/shop"}>Shop</Link>
        </nav>
      </header>
      <Outlet />
      {/* Outlet gives access to all the children aka the other /routes */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productid",
        element: <Shop />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
