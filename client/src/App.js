import Counter from "./components/Counter/Counter";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Link to="/">Home page</Link>
      <br />
      <Link to="/about">About our shop</Link>
      <br />
      <br />
      <Counter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;
