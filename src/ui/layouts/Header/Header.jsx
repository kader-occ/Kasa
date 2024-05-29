import React from "react";
import header from "../../../assets/images/header.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="container">
        <img src={header} alt="Header" className="header" />
      </header>
    </>
  );
};

export default Header;
