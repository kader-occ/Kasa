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
            <NavLink to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;
