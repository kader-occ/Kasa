import React from "react";
import "./LogementCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LogementCard = (props) => {
  return (
    <>
      <Link to="/fiche-logement" state={{ ficheLogement: props }}>
        <div className="card">
          <p>{props.title}</p>
        </div>
      </Link>
    </>
  );
};

LogementCard.prototype = {
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

export default LogementCard;
