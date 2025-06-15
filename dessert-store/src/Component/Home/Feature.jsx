import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Feature.css'; // style as needed

const Feature = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dessert = location.state;

  if (!dessert) {
    return <p style={{ padding: "20px" }}>No dessert data found. Please go back to the homepage.</p>;
  }

  return (
    <div className="feature-page">
      <div className="feature-content">
        <img src={dessert.img} alt={dessert.name} className="feature-img" />
        <div className="feature-details">
          <h1>{dessert.name}</h1>
          <p className="feature-price">₹{dessert.price}</p>
          <p>
            Enjoy our delicious {dessert.name} made with the finest ingredients. A perfect treat for any occasion!
          </p>
          <button className="order-btn" onClick={() => alert("Order placed!")}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
