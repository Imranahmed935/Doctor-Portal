import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import UserReviews from "./UserReviews";

const Testimonial = () => {

    const userReview = [

      {
        _id:1,
        name:'M Imran',
        review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:people1,
        location:'Bangladesh'
      },
      {
        _id:2,
        name:'Nahida',
        review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:people2,
        location:'Canada'
      },
      {
        _id:3,
        name:'Fatiha',
        review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:people3,
        location:'Bangladesh'
      },

    ];

  return (
    <section className="my-16">
      <div className="flex justify-between ">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          userReview.map(reviews => <UserReviews
          key={reviews._id}
          reviews={reviews}
          ></UserReviews>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
