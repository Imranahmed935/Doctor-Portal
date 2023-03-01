import React from "react";

const UserReviews = ({ reviews }) => {
  const { name, location, review, img } = reviews;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
              <h5 className="text-lg text-success">{name}</h5>
              <p>{location}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
