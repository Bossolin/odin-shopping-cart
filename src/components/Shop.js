import React, { useEffect, useState } from "react";
import "../style/Shop.css";
import ItemCard from "./ItemCard";

const Shop = ({ setCart, cart }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const request = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      setItems(data);
    };

    request("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="shop">
      <div className="items">
        {!items ? (
          <div>Loading...</div>
        ) : (
          items.map((item) => (
            <ItemCard item={item} key={item.id} setCart={setCart} cart={cart} />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
