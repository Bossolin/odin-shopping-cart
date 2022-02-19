import React from "react";
import "../style/ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item, setCart, cart }) => {
  const addToCart = () => {
    if (cart[item.id]) {
      const newState = { ...cart };
      newState[item.id].amount += 1;
      setCart(newState);
    } else {
      setCart((prevState) => {
        return { ...prevState, [item.id]: { ...item, amount: 1 } };
      });
    }
    //Question: Can I not use prevState to conditionally set the state?
    //E.g. setCart(prevstate => prevState ? 1 : 0)
  };

  return (
    <div className="item">
      <img src={item.image} className="item-img" />
      <div className="item-title">{item.title}</div>
      <div className="item-price">{item.price} $</div>
      <button className="item-interface" onClick={addToCart}>
        <h3>Add to cart</h3>
        <FontAwesomeIcon icon={faCartShopping} className="item-buy" />
      </button>
    </div>
  );
};

export default ItemCard;
