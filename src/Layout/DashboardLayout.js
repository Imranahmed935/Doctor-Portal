import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ml-10">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li className="text-xl font-semibold">
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li className="text-xl font-semibold mt-2">
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li className="text-xl font-semibold mt-2">
                  <Link to="/dashboard/adddoctor">Add Doctor</Link>
                </li>
                <li className="text-xl font-semibold mt-2">
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
