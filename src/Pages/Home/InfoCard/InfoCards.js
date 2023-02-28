import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9:00 am to 8:00 pm Everyday",
      icon: clock,
      
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Sylhet, zx-200, Bangladesh",
      icon: marker,
    },
    {
      id: 3,
      name: "Contact us",
      description: "+8801734111112",
      icon: phone,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mt-16">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
