import React from "react";
import { NavLink } from "react-router-dom";
import LogoComponent from "../Logo/LogoComponent";
import "./NavbarComponent.scss";

const NavbarComponent = () => {
  return (
    <>
      <nav className="container">
        <LogoComponent />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;
