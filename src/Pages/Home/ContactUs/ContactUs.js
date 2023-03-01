import React from "react";
import Primary from "../../../Component/Button/Primary";
import bg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="py-10"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="text-center  p-8">
      <h3 className="text-success font-bold text-2xl">Contact Us</h3>
      <h1 className="text-4xl text-white font-sans">Stay connected with us</h1>
      </div>
      <form className="w-96 lg:w-full max-w-lg mx-auto">
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            placeholder="subject"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="appearance-none border rounded w-full h-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Primary>submit</Primary>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
