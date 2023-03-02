import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import BookAppointment from "./BookAppointment";

const AvailableAppointment = ({ selected }) => {
  const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);

  return (
    <section className="text-center mt-16">
      <h2 className="font-bold text-success text-2xl">
        Available Services on {format(selected, "PP")}{" "}
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {appointment?.map((option) => (
          <BookAppointment
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></BookAppointment>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}
      selected={selected}
      setTreatment={setTreatment}
      ></BookingModal>}
    </section>
  );
};

export default AvailableAppointment;
