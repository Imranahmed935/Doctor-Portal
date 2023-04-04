import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const { handleSignOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const signOut = () => {
    handleSignOut()
      .then(() => {})
      .catch((error) => console.log(error));
    toast.success("signOut Successfully!");
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="reviews">Reviews</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            {" "}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="lg:mt-3 sm:ml-4">{user.displayName}</li>
          <li>
            {user.photoURL ? (
              <img
                style={{ height: "60px", width: "60px" }}
                rounded
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUserCircle></FaUserCircle>
            )}
          </li>
          <li>
            <button onClick={signOut}>signOut</button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link className="bg-primary" to="login">
            Login
          </Link>
        </li>
      )}
      <button onClick={() => toggleTheme()} className="btn ml-2">
        {theme === "light-theme" ? (
          <FaMoon className=" text-2xl"></FaMoon>
        ) : (
          <FaRegSun className=" text-2xl"></FaRegSun>
        )}
      </button>
    </React.Fragment>
  );
  return (
    <div className="navbar flex justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-base-100 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-extrabold "
        >
          Doctor Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold font-sans text-xl px-1">
          {menuItems}
        </ul>
      </div>
      <label tabIndex={0} className="btn btn-ghost bg-base-100 lg:hidden" htmlFor="dashboard-drawer">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
