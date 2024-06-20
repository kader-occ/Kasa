import React from "react";
import "./Header.scss";

const Header = ({ image, text }) => {
  return (
    <>
      <div className="header container">
        <img src={image} alt="header background" className="header-image" />
        <div className="overlay"></div>
        <div className="header-text">{text}</div>
      </div>
    </>
  );
};

export default Header;
