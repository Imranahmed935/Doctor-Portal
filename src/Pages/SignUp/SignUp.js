import {
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import app from "../../Firebase/Firebase.config";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const auth = getAuth(app);

  const { createUser, updateUser, GoogleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [createdEmail, setCreatedEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(createdEmail);

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

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("please check your email and verify your email address!");
      })
      .catch((error) => console.log(error));
  };

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyEmail();
        toast.success("user created Successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            collectUsers(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError(error.message);
      });
  };

  const collectUsers = (name, email) => {
    const users = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {});
    setCreatedEmail(email);
  };

  return (
    <div className="h-[800px] flex justify-center items-center bg-green-100 ">
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
            <div>
              <input
                onClick={handlePasswordChange}
                {...register(
                  "password",
                  { passwordInput },
                  {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 character or longer",
                    },

                    pattern: {
                      value: /.*[A-Z](?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "password must have uppercase number and spacial character.",
                    },
                  }
                )}
                type={passwordType}
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
              <p className="text-orange-500">{errors.password?.message}</p>
            )}
            ;
          </div>

          <input
            className="btn bg-success hover:bg-success border-none text-white w-full"
            value="Signup"
            type="submit"
          />

          <div>
            {signUpError && <p className="text-orange-700">{signUpError}</p>}
          </div>
        </form>
        <p className="text-center text-white mt-2">
          Already have an account{" "}
          <Link to="/login" className="text-success">
            please Login
          </Link>{" "}
        </p>
        <div className="divider text-white">OR</div>{" "}
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

export default SignUp;
