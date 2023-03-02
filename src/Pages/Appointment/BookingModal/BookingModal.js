import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selected, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointment: date,
      patientName: userName,
      treatment:name,
      slot,
      email,
      phone,
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-5 py-10 "
          >
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered py-5 input-sm w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="your Name"
              className="input input-bordered py-5 input-sm w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered py-5 input-sm w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered py-5 input-sm w-full "
            />
            <input
              type="submit"
              value="submit"
              className="input input-bordered input-sm w-full bg-success font-bold "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
