import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import RegPage from "../pages/registration/RegPage";
import Applicants from "../pages/applicants/Applicants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "registration",
        element: <RegPage />,
      },
      {
        path: "applicants",
        element: <Applicants />,
      },
    ],
  },
]);
