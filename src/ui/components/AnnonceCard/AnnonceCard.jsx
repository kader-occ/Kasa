import React from "react";
import "./AnnonceCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AnnonceCard = (props) => {
  return (
    <>
      <Link to="/fiche-logement" state={{ annonce: props }}>
        <div className="card">
          <p>{props.title}</p>
        </div>
      </Link>
    </>
  );
};

AnnonceCard.prototype = {
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

export default AnnonceCard;
