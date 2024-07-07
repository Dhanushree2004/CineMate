// src/components/SimpleCarousel.js
import React, { useState, useEffect } from 'react';
import './SimpleCarousel.css';

const images = [
  'https://i.ytimg.com/vi/sSVD5Pf-k-I/maxresdefault.jpg',
  'https://images.ottplay.com/images/pongal-2024-627.jpg?impolicy=ottplay-20210210&width=1200&height=675',
  'https://www.newsbricks.com/root_upld/general-news/2024/04/40282/org_02699202404221856.jpg',
  'https://wallpapers.com/images/featured/the-conjuring-pictures-j4tcp9shvx7dk262.jpg',
  'https://i.ytimg.com/vi/psbE5qVrVH4/maxresdefault.jpg',
  'https://i.ytimg.com/vi/gGl_wKLARiU/maxresdefault.jpg',
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--current-index', currentIndex);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default SimpleCarousel;
