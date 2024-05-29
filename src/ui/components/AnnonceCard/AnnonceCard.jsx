import React from "react";
import "./AnnonceCard.scss";

const AnnonceCard = (props) => {
  console.log({ props });
  return (
    <>
      <div className="card">
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default AnnonceCard;
