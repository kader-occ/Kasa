import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./FicheLogementPage.scss";

const FicheLogementPage = () => {
  const location = useLocation();
  const { ficheLogement } = location.state;

  console.log(ficheLogement);

  return (
    <>
      <NavbarComponent />
      <div className="container fiche-logement">
        <img src={ficheLogement.cover} alt={ficheLogement.title} />
        <h1 className="title">{ficheLogement.title}</h1>
        <p className="location">{ficheLogement.location}</p>
        {ficheLogement.tags.map((tag) => (
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
