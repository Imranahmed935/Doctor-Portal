import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import Primary from "../../../Component/Button/Primary";

const MakeAppointment = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content gap-5 flex-col lg:flex-row">
          <img src={doctor} className="-mt-32 hidden -mb-4 md:block lg:w-1/2 rounded-lg" alt="" />
          <div className="">
            <h4 className="text-lg text-primary font-bold mb-4">Appointment</h4>
            <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
            <p className="text-white py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <Primary>Appointment</Primary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
