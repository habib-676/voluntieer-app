import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import RegPage from "../pages/registration/RegPage";
import Applicants from "../pages/applicants/Applicants";
import ErrorPage from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
