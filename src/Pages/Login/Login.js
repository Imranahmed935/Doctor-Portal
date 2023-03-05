import React, { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const handleLogin = (data) => {
    console.log(data);
    setLoginError('')
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 rounded shadow-xl bg-black ">
        <h1 className="text-4xl font-serif font-bold text-center text-success">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-white">Email</span>
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-white">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is Required",
                minLength: {
                  value: 6,
                  message: "password must be 6 character or longer",
                },
              })}
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-orange-400 ml-5">{errors.password?.message}</p>
            )}

            <label className="label">
              <span className="label-text text-white">Forgot Password?</span>
            </label>
          </div>
          <input
            className="btn bg-success hover:bg-success border-none text-white w-full"
            value="login"
            type="submit"
          />
          <div>
            {
              loginError && <p className="text-orange-700">{loginError}</p>
            }
          </div>
        </form>
        <p className="text-center text-white mt-2">
          New to doctors portal{" "}
          <Link to="/signup" className="text-success">
            create new account
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

export default Login;
