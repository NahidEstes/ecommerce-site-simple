import React from "react";

const Product = ({ product, addCart }) => {
  const { product_name, product_price, img } = product;
  console.log(product_price);

  return (
    <div>
      <img src={img} alt="" />
      <h4 className="text-xl my-3 font-semibold">{product_name}</h4>
      <p className="font-bold mb-3"> ${product_price}</p>
      <button
        onClick={() => addCart(product)}
        className="p-2 rounded text-white bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
