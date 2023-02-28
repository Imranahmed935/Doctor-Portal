import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Middle from "../Middle/Middle";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-image mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <Middle/>
      <MakeAppointment/>
    </div>
  );
};

export default Home;
