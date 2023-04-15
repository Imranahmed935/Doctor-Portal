import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ErrorElement = () => {
  const { handleSignOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = Navigate();
  const signOut = () => {
    handleSignOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
    toast.success("signOut Successfully!");
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4>
        Please <button onClick={signOut}>signOut</button>
      </h4>
    </div>
  );
};

export default ErrorElement;
