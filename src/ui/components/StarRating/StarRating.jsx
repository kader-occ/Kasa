import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating }) => {
  const starPercentage = (rating / 5) * 100;

  return (
    <div className="star-rating">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: `${starPercentage}%` }}>
          {[...Array(5)].map((_, index) => (
            <span key={index} className="star">
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <span className="number-rating">{rating} / 5</span>
    </div>
  );
};

export default StarRating;
