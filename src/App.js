import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setShowCart={setShowCart} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          {showCart && <Cart />}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
