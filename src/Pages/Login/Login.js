import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, GoogleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [createdUserLogin, setCreatedUserLogin] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(createdUserLogin);
  if (token) {
    navigate(from, { replace: true });
  }

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const Provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    GoogleSignIn(Provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("user login Successfully!");
        setCreatedUserLogin(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center bg-green-100 ">
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

            <div>
              <input
                onClick={handlePasswordChange}
                type={passwordType}
                {...register(
                  "password",
                  { passwordInput },
                  {
                    required: "password is Required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 character or longer",
                    },
                  }
                )}
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
              <h2
                className="absolute ml-64 cursor-pointer -my-9"
                onClick={togglePassword}
              >
                {passwordType === "password" ? <p>show</p> : <p>hide</p>}
              </h2>
            </div>

            {errors.password && (
              <p className="text-orange-400 ml-5">{errors.password?.message}</p>
            )}

            <label className="label">
              <Link to="/forgot">
                <span className="label-text text-white">Forgot Password?</span>
              </Link>
            </label>
          </div>
          <input
            className="btn bg-success hover:bg-success border-none text-white w-full"
            value="login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-orange-700">{loginError}</p>}
          </div>
        </form>
        <p className="text-center text-white mt-2">
          New to doctors portal{" "}
          <Link to="/signup" className="text-success">
            create new account
          </Link>{" "}
        </p>
        <div className="divider text-white">OR</div>
        <button
          onClick={handleGoogle}
          className="uppercase bg-success text-center w-full p-3 rounded-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
