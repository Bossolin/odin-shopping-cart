import React, { useEffect, useState } from "react";
import "../style/Shop.css";
import ItemCard from "./ItemCard";

const Shop = ({ cart, setCart }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const request = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setItems(data);
    };

    request("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="items">
        {!items ? (
          <div>Loading...</div>
        ) : (
          items.map((item) => (
            <ItemCard item={item} key={item.id} cart={cart} setCart={setCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
