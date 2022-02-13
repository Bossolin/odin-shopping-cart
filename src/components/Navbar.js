import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = ({ onClick }) => {
  const handleCart = () => {
    onClick((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faShop} className="shop-icon" />
      <NavLink to="/" className="nav-home">
        Home
      </NavLink>
      <NavLink to="/shop" className="nav-shop">
        Shop
      </NavLink>
      <FontAwesomeIcon icon={faCartShopping} onClick={handleCart} />
    </div>
  );
};

export default Navbar;
