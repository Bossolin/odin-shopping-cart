import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = ({ setShowCart }) => {
  const handleClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <NavLink to="/" className="shop-icon">
        <FontAwesomeIcon icon={faShop} />
      </NavLink>
      <NavLink to="/" className="nav-home">
        Home
      </NavLink>
      <NavLink to="/shop" className="nav-shop">
        Shop
      </NavLink>
      <FontAwesomeIcon icon={faCartShopping} onClick={handleClick} />
    </div>
  );
};

export default Navbar;
