import React from "react";
import chair from "../../../assets/images/chair.png";
import Primary from "../../../Component/Button/Primary";

const Banner = () => {
  return (
    <div className=" hero mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Having a beautiful smile can not only improve your appearance, but
            also boost your confidence.
          </p>
          <Primary>Getting Started</Primary>
        </div>
      </div>
    </div>
  );
};

export default Banner;
