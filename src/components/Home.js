import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Online Shop</h1>
      <p className="home-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero
        atque totam fugit veritatis ipsum sint volupttem ea, odio delectus non
        autem porro distinctio ab? Error facilis corrupti autem debitis!
      </p>
      <Link to="/shop" className="home-browse">
        Browse
      </Link>
    </div>
  );
};

export default Home;
