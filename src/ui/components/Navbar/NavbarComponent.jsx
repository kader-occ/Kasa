import React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "../Logo/LogoComponent";
import "./NavbarComponent.scss";

const NavbarComponent = () => {
  return (
    <>
      <div className="container">
        <nav>
          <LogoComponent />
          <ul>
            <li>
              <Link
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
                }
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold" : "bg-red-500 font-thin"
                }
              >
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
