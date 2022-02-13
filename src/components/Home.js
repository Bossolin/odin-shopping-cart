import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero
        atque totam fugit veritatis ipsum sint volupttem ea, odio delectus non
        autem porro distinctio ab? Error facilis corrupti autem debitis!
      </p>
      <Link to="/shop" className="browse">
        Browse
      </Link>
    </div>
  );
};

export default Home;
