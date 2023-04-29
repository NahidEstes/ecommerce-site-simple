import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
// import cardImages1 from "../../public/images/product-1.png";
// import cardImages2 from "../../public/images/product-2.png";
// import cardImages3 from "../../public/images/product-3.png";
import Product from "./Product";

const ExploreSection = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  const addCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="px-4 py-5 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="lg:flex">
        <div className="lg:flex flex-col justify-center items-start ">
          <h2 className="text-4xl font-semibold">
            Crafted with <br /> excellent material
          </h2>
          <p className="my-5 lg:w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
            velit pariatur cupiditate dolores quas voluptatem nihil id non eos.
          </p>
          <button className="btn bg-accent w-32 rounded-3xl font-bold border-stone-100 lg:ml-3">
            Explore
          </button>
        </div>

        <div className="lg:flex gap-4 text-center">
          {productData.map((product) => (
            <Product product={product} addCart={addCart} />
          ))}
        </div>
        <div className="flex-none">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
