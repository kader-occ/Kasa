import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./LogoComponent.scss";

const LogoComponent = () => {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
    </>
  );
};

export default LogoComponent;
