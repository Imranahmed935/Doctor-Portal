import React from "react";
import teeth1 from "../../../assets/images/fluoride.png";
import teeth2 from "../../../assets/images/cavity.png";
import teeth3 from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const ourServices = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "The fluoride is usually applied as a gel, foam, or varnish and left on the teeth for a few minutes.",
      icon: teeth1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "The procedure is typically done by a dentist or dental hygienist and is used to prevent further decay and restore the function and appearance of the tooth.",
      icon: teeth2,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        " Limiting your intake of staining foods and beverages like coffee, tea, and red wine can help prevent discoloration.",
      icon: teeth3,
    },
  ];

  return (
    <div className="mt-20">
        <div className="text-center">
            <h3 className="font-bold text-2xl uppercase text-green-400 font-serif">Our Services</h3>
            <h2 className="text-4xl font-sans">Services we Provide</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ms-5">
      {ourServices.map((services) => (
        <Service key={services.id} services={services}></Service>
      ))}
    </div>
    </div>
  );
};

export default Services;
