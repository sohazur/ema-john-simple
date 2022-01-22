import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((previous, product) => previous + product.price);
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {props.cart.length}</h5>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
