import React from "react";

const BookAppointment = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available;
        </p>
        <p>
          <small> price: ${price}</small>
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-success"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
