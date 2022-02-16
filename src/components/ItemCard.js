import React, { useState } from "react";
import "../style/ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item, setCart }) => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((value) => value + 1);
  };

  const decrement = () => {
    if (value > 0) setValue((value) => value - 1);
  };

  return (
    <div className="item">
      <img src={item.image} className="item-img" />
      <div className="item-title">{item.title}</div>
      <div className="item-price">{item.price} $</div>
      <div className="item-interface">
        <button onClick={decrement}>-</button>
        <p>{value}</p>
        <button onClick={increment}>+</button>
        <FontAwesomeIcon
          icon={faCartShopping}
          onClick={null}
          className="item-buy"
        />
      </div>
    </div>
  );
};

export default ItemCard;
