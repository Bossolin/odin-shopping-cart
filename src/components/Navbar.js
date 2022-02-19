import React from "react";
import "../style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setShowCart, cart }) => {
  let itemCounter = 0;

  for (let item in cart) {
    itemCounter += cart[item].amount;
  }

  const handleClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <Link to="/" className="shop-icon">
        <FontAwesomeIcon icon={faShop} />
      </Link>
      <NavLink to="/" className="nav-home">
        Home
      </NavLink>
      <NavLink to="/shop" className="nav-shop">
        Shop
      </NavLink>
      <div className="nav-cart">
        <FontAwesomeIcon icon={faCartShopping} onClick={handleClick} />
        {itemCounter ? (
          <div className="nav-cart-counter">{itemCounter}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
