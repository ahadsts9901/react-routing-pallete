import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { List } from "react-bootstrap-icons";

const Navbar = () => {
  const routes = [
    {
      element: "Home",
      path: "/",
    },
    {
      element: "About",
      path: "/about",
    },
    {
      element: "Contact",
      path: "/contact",
    },
    {
      element: "Admin",
      path: "/admin",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="navBar">
      <h2>FakeStore</h2>
      <List className="burgerIcon" />
      <ul>
        {routes.map((route, index) => {
          return (
            <Link to={`${route.path}`}>
              <li key={index}>{route.element}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
