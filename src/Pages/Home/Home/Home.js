import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/InfoCards";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-image mx-5">
      <Banner />
      <InfoCards/>
   
    </div>
  );
};

export default Home;
