import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookAppointment from "./BookAppointment";

const AvailableAppointment = ({ selected }) => {
  const [appointment, setAppointment] = useState([]);
  console.log(appointment)

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);

  return (
    <section className="text-center text-success mt-16">
      <h2 className="font-bold text-2xl">Available Services on {format(selected, "PP")} </h2>
      <div className="grid gap-6 text-success grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {appointment?.map((option) => (
          <BookAppointment key={option._id} option={option}></BookAppointment>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
