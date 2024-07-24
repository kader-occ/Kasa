import React from "react";
import PropTypes from "prop-types";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./FicheLogementPage.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import StarRating from "../../components/StarRating/StarRating";
import Collapse from "../../components/Collapse/Collapse";

const FicheLogementPage = () => {
  const location = useLocation();
  const { ficheLogement } = location.state;

  return (
    <>
      <NavbarComponent />
      <div className="container fiche-logement">
        <ImageSlider images={ficheLogement.pictures} />
        <div className="split-container">
          <div className="half-section">
            <h1 className="title">{ficheLogement.title}</h1>
            <p className="location">{ficheLogement.location}</p>
            {ficheLogement.tags.map((tag) => (
              <span className="badge" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="half-section owner-info">
            <div className="owner-details">
              <img
                src={ficheLogement.host.picture}
                alt={ficheLogement.host.name}
                className="owner-photo"
              />
              <p>{ficheLogement.host.name}</p>
              <div>
                <StarRating rating={ficheLogement.rating} size={36} />
              </div>
            </div>
          </div>
        </div>
        <div className="collapse-container">
          <Collapse label="Description" text={ficheLogement.description} />
          <Collapse label="Equipements" text={ficheLogement.equipments} />
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
