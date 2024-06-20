import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating }) => {
  const starPercentage = (rating / 5) * 100;

  const starStyle = {
    width: `${starPercentage}%`,
    color: "#FF6060",
  };

  return (
    <div className="star-rating">
      <div className="stars-outer">
        <div className="stars-inner" style={starStyle}></div>
      </div>
      <span className="number-rating">{rating} / 5</span>
    </div>
  );
};

export default StarRating;
