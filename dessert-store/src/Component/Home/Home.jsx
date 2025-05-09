import React, { useRef } from 'react';
import './Home.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/Images/joyful-vT5xrj3z1OE-unsplash.jpg',
  '/Images/allen-rad-JBIK4QZOFfc-unsplash.jpg',
  '/Images/dessert.jpg'
];

const Home = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>
      <div className="slider-container" ref={sliderRef}>
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Home;
