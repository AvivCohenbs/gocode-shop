// import Counter from "./components/Counter/Counter";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="navbar">
      <div className="all-nav">
        <div className="go-botton">
          <Link className="go-link" to="/">
            GoCode Shop
          </Link>
        </div>
        <div className="home-about">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link className="about-link" to="/about">
            About
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;
