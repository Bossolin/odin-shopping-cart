import React from "react";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = ({ setShowCart, cart, setCart }) => {
  const handleClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div className="cart">
      <FontAwesomeIcon icon={faX} onClick={handleClick} />
      <h2>Cart</h2>
      {cart.length === 0 && (
        <Link to="/shop" onClick={handleClick}>
          Go shop
        </Link>
      )}
    </div>
  );
};

export default Cart;
