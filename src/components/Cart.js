import React from "react";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = ({ setShowCart, cart, setCart }) => {
  const order = [];
  let orderTotal = 0;

  for (let item in cart) {
    order.push(cart[item]);
    orderTotal += cart[item].price * cart[item].amount;
  }

  const handleClick = () => {
    setShowCart((prevState) => !prevState);
  };

  const decrement = (item) => {
    const newState = { ...cart };

    newState[item.id].amount -= 1;

    if (newState[item.id].amount === 0) {
      delete newState[item.id];
    }

    setCart(newState);
  };

  const increment = (item) => {
    const newState = { ...cart };

    newState[item.id].amount += 1;

    setCart(newState);
  };

  return (
    <div className="cart">
      <FontAwesomeIcon icon={faX} onClick={handleClick} />
      <h2>Cart</h2>
      {order.length === 0 ? (
        <Link to="/shop" onClick={handleClick}>
          Go shop
        </Link>
      ) : (
        <div className="cart-order">
          <div className="order-items">
            {order.map((item, i) => (
              <div key={i}>
                <img src={item.image} className="order-item-image" alt="" />
                <div className="order-item-title">{item.title}</div>
                <div className="order-item-price">
                  {(item.price * item.amount).toFixed(2)} $
                </div>
                <div className="order-item-counter">
                  <button onClick={() => decrement(item)}>-</button>
                  <p>{item.amount}</p>
                  <button onClick={() => increment(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">Total: {orderTotal.toFixed(2)} $</div>
          <Link to="/shop" onClick={handleClick}>
            Back to shopping
          </Link>
          <button className="order-checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
