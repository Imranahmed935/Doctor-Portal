import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
  const bookings = useLoaderData();
  const { treatment, price, appointment, slot } = bookings;

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-5">Payment</h4>
      <p className="text-2xl font-sans font-semibold ">
        Payment for {bookings.treatment}
      </p>
      <p className="text-xl">
        please pay <strong>${price}</strong> for your appointment on{" "}
        <strong>{appointment}</strong> at {slot}.
      </p>
      <Elements stripe={stripePromise}>
        <CheckoutForm bookings={bookings} />
      </Elements>
    </div>
  );
};

export default Payment;
