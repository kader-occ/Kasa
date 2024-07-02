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
            <NavLink to="/" activeclassname="active" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active" className="nav-link">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;
