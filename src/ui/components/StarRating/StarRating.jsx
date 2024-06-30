import React from "react";
import "./StarRating.scss";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, size }) => {
  const totalStars = 5;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        const starClass = index < rating ? "star-filled" : "star-empty";
        return (
          <FaStar
            key={index}
            className={`${starClass} star`}
            style={{ fontSize: size }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
