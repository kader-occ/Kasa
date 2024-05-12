import React from "react";
import logo from "../../../assets/images/logo.png";
import "./LogoComponent.css";

const LogoComponent = () => {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
    </>
  );
};

export default LogoComponent;
