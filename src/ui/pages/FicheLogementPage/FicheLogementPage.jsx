import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./FicheLogementPage.scss";

const FicheLogementPage = (props) => {
  const location = useLocation();
  const { annonce } = location.state;

  console.log(annonce);

  return (
    <>
      <NavbarComponent />
      <div className="container fiche-logement">
        <h1>{annonce.title}</h1>
      </div>
      <Footer />
    </>
  );
};

FicheLogementPage.prototype = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  pictures: PropTypes.array,
  description: PropTypes.string,
  host: {
    name: PropTypes.string,
    picture: PropTypes.string,
  },
  rating: PropTypes.string,
  location: PropTypes.string,
  equipments: PropTypes.array,
  tags: PropTypes.array,
};

export default FicheLogementPage;
