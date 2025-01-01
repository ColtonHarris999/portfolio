import React, { useState } from "react";
import "./quarters/quarter.css";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-button">❮</button>
      <img
        src={`${process.env.PUBLIC_URL}/artifacts/${images[currentIndex]}`}
        alt={`Slide ${currentIndex + 1}`}
        className="photo"
      />
      <button onClick={nextImage} className="carousel-button">❯</button>
    </div>
  );
}

export default Carousel;
