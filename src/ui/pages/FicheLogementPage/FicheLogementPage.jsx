import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./FicheLogementPage.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Dropdown from "../../components/Dropdown/Dropdown";
import StarRating from "../../components/StarRating/StarRating";

const FicheLogementPage = () => {
  const location = useLocation();
  const { ficheLogement } = location.state;

  console.log(ficheLogement);

  return (
    <>
      <NavbarComponent />
      <div className="container fiche-logement">
        <ImageSlider images={ficheLogement.pictures} />
        <h1 className="title">{ficheLogement.title}</h1>
        <div className="split-container">
          <div className="half-section">
            <p className="location">{ficheLogement.location}</p>
            {ficheLogement.tags.map((tag) => (
              <span className="badge">{tag}</span>
            ))}
          </div>
          <div className="half-section">
            <div className="owner-info">
              <img
                src={ficheLogement.host.picture}
                alt={ficheLogement.host.picture}
              />
              <p>{ficheLogement.host.name}</p>
              <StarRating rating={ficheLogement.rating} />
            </div>
          </div>
        </div>
        <div className="dropdown-container">
          <Dropdown label="Description" text={ficheLogement.description} />
          <Dropdown label="Equipements" text={ficheLogement.equipments} />
        </div>
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
