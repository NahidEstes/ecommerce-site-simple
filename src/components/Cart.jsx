import React from "react";

const Cart = ({ cart }) => {
  let total = 0;

  for (let product of cart) {
    total = total + product.product_price;
  }
  console.log(total);
  return (
    <div>
      <h1>Cart</h1>
      <p>Total Price: {total}</p>
    </div>
  );
};

export default Cart;
