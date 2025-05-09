import React from 'react';
import './Home.css';

const images = [
  '../../../public/Images/joyful-vT5xrj3z1OE-unsplash.jpg',
  '../../../public/Images/allen-rad-JBIK4QZOFfc-unsplash.jpg',
  '../../../public/Images/joyful-vT5xrj3z1OE-unsplash.jpg'
];

const Home = () => {
  return (
    <div className="slider-container">
      {images.map((src, index) => (
        <div className="slide" key={index}>
          <img src={src} alt={`slide-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;
