import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import "./style/App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setShowCart={setShowCart} cart={cart} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop cart={cart} setCart={setCart} />}
            />
          </Routes>
          {showCart && (
            <Cart setShowCart={setShowCart} setCart={setCart} cart={cart} />
          )}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
