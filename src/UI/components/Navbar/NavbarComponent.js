import React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "../Logo/LogoComponent";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <>
      <nav>
        <LogoComponent />
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          A propos
        </Link>
      </nav>
    </>
  );
};

export default NavbarComponent;
