import React from "react";
import "./AboutPage.scss";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <h1>A Propos</h1>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
