import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCard/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Middle from "../Middle/Middle";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-image mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <Middle />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
