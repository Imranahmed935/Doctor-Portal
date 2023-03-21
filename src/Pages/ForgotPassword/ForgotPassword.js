import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import app from "../../Firebase/Firebase.config";

const auth = getAuth(app);

const ForgotPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleReset = (data) => {
    forgotPassword(data.email);
    console.log(data)
  };
  
  const forgotPassword = (userEmail) => {
    sendPasswordResetEmail(auth, userEmail)
     .then(() => {
       alert("please check your email and reset password.");
     })
     .catch((error) => console.log(error));
 };

  return (
    <div className="h-[800px] flex justify-center items-center bg-green-100 ">
      <div className="w-96 p-7 rounded shadow-xl bg-base-100">
        <h1 className="text-4xl font-serif font-bold text-center text-success">
          
        </h1>
        <form onSubmit={handleSubmit(handleReset)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-black">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-orange-400 ml-5">{errors.email?.message}</p>
            )}
          </div>

          <input
            className="btn bg-success mt-5 hover:bg-success border-none text-white w-full"
            value="submit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
