import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon } = card;
  return (
    <div className="card card-side bg-gradient-to-r from-success to-primary px-5 shadow-xl">
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
