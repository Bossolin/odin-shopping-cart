import React from "react";
import "../style/ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} className="item-img" />
      <div className="item-title">{item.title}</div>
      <div className="item-price">{item.price} $</div>
    </div>
  );
};

export default ItemCard;
