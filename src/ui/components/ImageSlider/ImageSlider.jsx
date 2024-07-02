import React, { useState } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      {images.length > 1 && (
        <button onClick={prevSlide} className="prev">
          &#10094;
        </button>
      )}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`image ${index === currentIndex ? "active" : "inactive"}`}
        />
      ))}
      {images.length > 1 && (
        <button onClick={nextSlide} className="next">
          &#10095;
        </button>
      )}
      {images.length > 1 && (
        <p className="image-counter">
          {currentIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

export default ImageSlider;
