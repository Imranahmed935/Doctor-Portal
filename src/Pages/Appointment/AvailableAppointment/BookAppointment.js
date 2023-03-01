import React from "react";
import Primary from "../../../Component/Button/Primary";

const BookAppointment = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available;
        </p>
        <div className="card-actions justify-end">
          <Primary>Book Appointment</Primary>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
