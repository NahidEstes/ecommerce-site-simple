import React from "react";
import image from "../../public/images/couch.png";

const Banner = () => {
  return (
    <>
      <div className=" lg:flex bg-neutral px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-center items-start ">
          <h1 className="text-5xl text-white font-bold">
            Modern Interior <br /> Design Studio
          </h1>
          <p className="text-slate-400 lg:w-96 my-5">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex">
            <button className="btn bg-primary text-accent w-40 rounded-3xl">
              Shop Now
            </button>
            <button className="btn bg-transparent w-40 rounded-3xl border-stone-100 ml-3">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
    </>
  );
};

export default Banner;
