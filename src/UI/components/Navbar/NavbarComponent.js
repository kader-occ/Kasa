import React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "../Logo/LogoComponent";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <>
      <div className="container">
        <nav>
          <LogoComponent />
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
