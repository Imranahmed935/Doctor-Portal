import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="container max-w-[1440px] mx-auto ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
