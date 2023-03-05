import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 rounded shadow-xl bg-black ">
        <h1 className="text-4xl font-serif font-bold text-center text-success">
          SignUp
        </h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-white">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-orange-700">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-white">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors.email && (
            <p className="text-orange-700">{errors.email?.message}</p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-white">Password</span>
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 character or longer",
                },

                pattern: {
                  value: /.*[A-Z](?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message: "password must have uppercase number and spacial character.",
                },
              })}
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-orange-500">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text text-white">Forgot Password?</span>
            </label>
          </div>
          <input
            className="btn bg-success hover:bg-success border-none text-white w-full"
            value="Signup"
            type="submit"
          />
        </form>
        <p className="text-center text-white mt-2">
          Already have an account{" "}
          <Link to="/login" className="text-success">
            please Login
          </Link>{" "}
        </p>
        <div className="divider text-white">OR</div>
        <button className="uppercase bg-success text-center w-full p-3 rounded-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
