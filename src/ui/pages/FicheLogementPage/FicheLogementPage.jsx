import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./FicheLogementPage.scss";

const FicheLogementPage = () => {
  const location = useLocation();
  const { annonce } = location.state;

  console.log(annonce);

  return (
    <>
      <NavbarComponent />
      <div className="container fiche-logement">
        <img src={annonce.cover} alt={annonce.title} />
        <h1 className="title">{annonce.title}</h1>
        <p className="location">{annonce.location}</p>
        {annonce.tags.map((tag) => (
          <span className="badge">{tag}</span>
        ))}
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
