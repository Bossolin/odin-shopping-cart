import React from "react";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ setShowCart }) => {
  const handleClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div className="cart">
      <FontAwesomeIcon icon={faX} onClick={handleClick} />
      <h2>Cart</h2>
    </div>
  );
};

export default Cart;
