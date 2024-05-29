import React from "react";
import "./Footer.scss";
import LogoComponent from "../../components/Logo/LogoComponent";

const Footer = () => {
  return (
    <>
      <footer>
        <LogoComponent />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
