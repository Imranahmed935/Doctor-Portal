import React from "react";
import chair from "../../assets/images/chair.png";
import bg3 from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <header
      className=""
      style={{ background: `url(${bg3})`, backgroundsize: "cover" }}
    >
      <div className="hero">
        <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" lg:w-1/2 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="lg:w-1/2 h-80 shadow-2xl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
