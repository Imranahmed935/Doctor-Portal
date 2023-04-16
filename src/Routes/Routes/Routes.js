import { createBrowserRouter } from "react-router-dom";
import MyAppointment from "../../Dashboard/MyAppointment";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ForgotPassword from "../../Pages/ForgotPassword/ForgotPassword";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Private from "../PrivateRoutes/Private";
import AllUsers from "../../Dashboard/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import AddDoctor from "../../Dashboard/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Dashboard/Dashboard/AddDoctor/ManageDoctors/ManageDoctors";
import Payment from "../../Dashboard/Payment/Payment";
import ErrorElement from "../../Shared/ErrorElement/ErrorElement";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot",
        element: <ForgotPassword></ForgotPassword>,
      },

    ],
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <DashboardLayout></DashboardLayout>
      </Private>
    ),
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoutes>
            <AddDoctor></AddDoctor>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctors></ManageDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);

export default router;
