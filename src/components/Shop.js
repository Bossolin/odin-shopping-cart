import React, { useEffect, useState } from "react";
import "../style/Shop.css";

const Shop = () => {
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
            <div key={item.id} className="item">
              <img src={item.image} className="item-img" />
              <div className="item-title">{item.title}</div>
              <div className="item-price">{item.price} $</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
