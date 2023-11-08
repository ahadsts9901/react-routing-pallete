import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/about",
        element: <div>about</div> ,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
      {
        path: "/admin",
        element: <div>admin</div>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
